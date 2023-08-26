from fastapi import FastAPI, HTTPException, UploadFile, File, Request
import base64
from PIL import Image
import io
import os
import imghdr
import json
import asyncpg
import uuid
import secrets
import string
import asyncio
import datetime
import logging
import ffmpeg
import subprocess
import shutil
import librosa


app = FastAPI()

async def create_db_pool():
    pool = await asyncpg.create_pool(
        database=str(os.environ.get("POSTGRES_DB")),
        user=str(os.environ.get("POSTGRES_USER")),
        password=str(os.environ.get("POSTGRES_PASSWORD")),
        host="postgres",  # Replace with your actual database host
        port="5432",      # Replace with your actual database port
    )
    return pool

async def is_url_unique(url):
	async with app.state.pool.acquire() as conn:
		query = "SELECT COUNT(*) FROM files WHERE file_url = $1"
		result = await conn.fetchval(query, url)
		return result == 0

def generate_url():
	url_length = 96  # You can adjust this value to make longer or shorter URLs as needed
	url_characters = string.ascii_letters
	return ''.join(secrets.choice(url_characters) for _ in range(url_length))

async def prepare_url():
	async with app.state.pool.acquire() as conn:
		while True:
			url = generate_url()

			query = "SELECT COUNT(*) FROM files WHERE file_url = $1"
			result = await conn.fetchval(query, url)
			if result == 0:
				#unique url found
				break

		return url


async def init_file_in_database(data: dict):
    async with app.state.pool.acquire() as conn:
        data["file_created_time"] = int(datetime.datetime.now().timestamp() * 1000)

        json_owner = {}
        owner = json.dumps(json_owner)

        query = "INSERT INTO files (processed_state, file_size, file_url, owner, file_type, file_created_time) VALUES ($1, $2, $3, $4, $5, $6)"
        await conn.execute(query, "started", 0, data["url"], (owner,), "image", data["file_created_time"])


async def get_uuid_by_email(email):
	async with app.state.pool.acquire() as conn:
		query = "SELECT uuid FROM users WHERE email = $1"
		uuid = await conn.fetchval(query, email)
		return uuid



async def update_file_in_database(data:dict):
    async with app.state.pool.acquire() as conn:
        # get the id of the owner via their email.
        url = data["url"]
        email = data["owner_email"]
        owner = await get_uuid_by_email(email)



        json_owner = {"owner": owner, "permissions": "owner"}
        owner = json.dumps(json_owner)


        update_query = "UPDATE files SET processed_state = $1, file_size = $2, owner = $3 WHERE file_url = $4"
        await conn.execute(update_query, "finished", data["file_size"], (owner,), url)


def get_folder_size(folder_path):
	total_size = 0

	for dirpath, dirnames, filenames in os.walk(folder_path):
		for filename in filenames:
			file_path = os.path.join(dirpath, filename)
			total_size += os.path.getsize(file_path)

	return total_size


@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()
    

@app.on_event("shutdown")
async def shutdown():
    await app.state.pool.close()

@app.post("/process_image/base64/")
async def process_image(request: Request):
	try:
		data = await request.json()

		image_base64 = data.get("imgData")
		owner_email = data.get("owner_email")

		# Decode the base64 image data
		try:
		    image_data = base64.b64decode(image_base64, validate=True)
		except binascii.Error:
		    raise HTTPException(status_code=400, detail="Invalid base64 image data")

		image_type = imghdr.what(None, h=image_data)

		# Determine that the image is of valid type
		if image_type not in ['jpeg', 'png', 'webp']:
			print(f"not valid image type")
			raise HTTPException(status_code=400, detail="Invalid image type")

		# Open the image using PIL
		try:
			image = Image.open(io.BytesIO(image_data))
		except Exception as e:
	        # Catch the exception and handle the error case
			print("Failed to open the image:", e)
			raise HTTPException(status_code=400, detail="Invalid image format")


		# Check that the image isn't greater in size than 5mb
		image_size_bytes = len(image_data)

		# Convert bytes to megabytes
		image_size_mbs = image_size_bytes / (1024 * 1024)

		if image_size_mbs > 6:
			raise HTTPException(status_code=400, detail="Image size exceeds 5 MB limit")

		# Create a file ID and all of those things
		url = await prepare_url()


		# Send details to our files database, saying that the current state is processing
		files_dict = dict(url=url)
		await init_file_in_database(files_dict)

		# Enqueue the image processing task to run in the background
		asyncio.create_task(process_and_save_image(image, url, image_type, image_data, owner_email))


	    # Return the response to the client with the URL
		return {"message": "Image processing started.", "url": url}
		
	except HTTPException as http_exc:
		raise http_exc  # Re-raise the HTTPException with the appropriate status code and detail
	except Exception as e:
		# Log the error and return a 500 Internal Server Error with the exception details
		print(f"Error processing image: {e}")
		raise HTTPException(status_code=500, detail="Error processing image.")


async def process_and_save_image(image, url, image_type, image_data, owner_email):
	try:


		# Save the image to the volume (om2data)
		image_path = f"/var/www/media/{url}/0.{image_type}"

		# Check if the directory exists, if not, create it
		directory = os.path.dirname(image_path)
		if not os.path.exists(directory):
			os.makedirs(directory)

		image.save(image_path)

		# Crop the image to being square
		width, height = image.size 
		size = min(width, height)
		left = (width - size) // 2
		top = (height - size) // 2
		right = (width + size) // 2
		bottom = (height + size) // 2

		cropped_image = image.crop((left, top, right, bottom))

		# Make more Copies of this image in more compressed and smaller states

		image_type = "webp"


		compressed_1 = cropped_image.resize((10, 10), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/1.{image_type}"
		compressed_1.save(image_path, format="webp")

		compressed_2 = cropped_image.resize((40, 40), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/2.{image_type}"
		compressed_2.save(image_path, format="webp", optimize=True, quality=60)

		compressed_3 = cropped_image.resize((160, 160), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/3.{image_type}"
		compressed_3.save(image_path, format="webp", optimize=True, quality=90)

		compressed_4 = cropped_image.resize((320, 320), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/4.{image_type}"
		compressed_4.save(image_path, format="webp", optimize=True, quality=90)

		compressed_5 = cropped_image.resize((640, 640), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/5.{image_type}"
		compressed_5.save(image_path, format="webp", optimize=True, quality=90)

		compressed_6 = cropped_image.resize((1080, 1080), Image.LANCZOS)
		image_path = f"/var/www/media/{url}/6.{image_type}"
		compressed_6.save(image_path, format="webp", optimize=True, quality=96)

		"""
		Send details to our files database, saying that the current state is finished, 
		and then also get the size of all of these files together and update the database
		with how much storage space is being used with this file

		"""

		folder_size = get_folder_size(f"/var/www/media/{url}/")

		files_dict = dict(url=url, owner_email=owner_email, file_size=folder_size)
		await update_file_in_database(files_dict)



	except Exception as e:
        # Log the error and handle any necessary cleanup or error handling
		print(f"Error processing image: {e}")


async def init_audio_file_in_database(data: dict):
	async with app.state.pool.acquire() as conn:

		processed_state = f"started"
		file_size = 0
		url = data["url"]
		file_created_time = int(datetime.datetime.now().timestamp() * 1000)
		json_owner = {"owner": data["uuid"], "permissions": "owner"}
		owner = json.dumps(json_owner)
		file_type = f"audio"


		query = "INSERT INTO files (processed_state, file_size, file_url, owner, file_type, file_created_time) VALUES ($1, $2, $3, $4, $5, $6)"
		await conn.execute(query, processed_state, file_size, url, (owner,), file_type, file_created_time)

async def update_audio_file_in_database(data:dict):
	async with app.state.pool.acquire() as conn:
		# get the id of the owner via their email.
		url = data["url"]

		processed_state = "finished"
		file_size = data["file_size"]


		update_query = "UPDATE files SET processed_state = $1, file_size = $2 WHERE file_url = $3"
		await conn.execute(update_query, processed_state, file_size, url)


async def append_song_json(data:dict):
	async with app.state.pool.acquire() as conn:
		url = data["url"]
		uuid = data["uuid"]
		song_name = data["song_name"]
		project_id = data["project_id"]
		duration = data["duration"]

		# Construct the new song data
		new_song_data = {
			'url': url,
			'song_name': song_name,
			'duration_in_seconds': duration
		}
        
        # Get the existing JSON data for the specified project and owner (uuid)
		select_query = """
			SELECT project_json
			FROM projects
			WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND project_id = $2;
		"""
		existing_json = await conn.fetchval(select_query, uuid, project_id)
		#print(f"existing json:\t{existing_json}")

		if existing_json == "{}":
			#print(f"existing json is empty")
			newSongRow = f'{{"songs_json" : [{{"song_name": "{song_name}", "url": "{url}", "duration": "{duration}", "song_sequence": 0}}]}}'
			#print(f"new song row: {newSongRow}")
			query = "UPDATE projects SET project_json = $1 WHERE (SELECT unnest(owner)->>'owner')::uuid = $2 AND project_id = $3"
			await conn.execute(query, newSongRow, uuid, project_id)

		else:
			#print("there is some data in the projects json")
			songs_json = json.loads(existing_json)

			song_list = songs_json["songs_json"]
			lastItemInJson = song_list[-1]
			lastItemInJson_song_sequence = lastItemInJson["song_sequence"]
			new_song_sequence = lastItemInJson_song_sequence + 1

			new_song = {
			    "song_name": song_name,
			    "url": url,
			    "duration": duration,
			    "song_sequence": new_song_sequence
			}

			songs_json["songs_json"].append(new_song)
			songs_json_print = json.dumps(songs_json, indent=4)
			songs_json = json.dumps(songs_json)

			print(f"parse data modified:\n\n{songs_json_print}\n")

			query = "UPDATE projects SET project_json = $1 WHERE (SELECT unnest(owner)->>'owner')::uuid = $2 AND project_id = $3"
			await conn.execute(query, songs_json, uuid, project_id)



        # Update the projects table with the modified JSON data
		update_query = """
			UPDATE projects
			SET project_json = $1::jsonb
			WHERE (SELECT unnest(owner)->>'owner')::uuid = $2 AND project_id = $3;
		"""
		#await conn.execute(update_query, json.dumps(existing_data), uuid, project_id)



@app.post("/process_audio/compress_and_index/")
async def process_image(request: Request):
	data = await request.json()

	# get the details from fastapi
	input_file = data["audioFilePath"]
	print(input_file)
	uuid = data["uuid"]


	# get the new url / unique name for this file
	url = await prepare_url()
	print(f"url: {url}")

	# create a folder for url, as well as saving a copy of the original file to 0.extension
	old_file_extension = os.path.splitext(input_file)[1]
	file_path = f"/var/www/media/{url}/0{old_file_extension}"
		# Check if the directory exists, if not, create it
	directory = os.path.dirname(file_path)
	if not os.path.exists(directory):
		os.makedirs(directory)

		# Copy the source file to the destination
	try:
		shutil.copy(input_file, file_path)
		#print(f"File copied to {file_path}")
	except IOError as e:
		print(f"Error copying file: {e}")

	# specify the names (and file paths) of the processed files
	newFileExtension = f"mp3"
	output_files = [f"/var/www/media/{url}/1.{newFileExtension}", f"/var/www/media/{url}/2.{newFileExtension}",f"/var/www/media/{url}/3.{newFileExtension}"]

	# send infos to database
	files_dict = dict(url=url, uuid=uuid)
	await init_audio_file_in_database(files_dict)

	# send the files to being processed
	compress_audio(input_file, output_files)

	# update the projects item for this file
	song_name = data["song_name"]
	project_id = data["project_id"]
	duration_in_seconds = round(librosa.get_duration(path=input_file))

	project_json_append_json_dict = dict(url=url, uuid=uuid, song_name=song_name, project_id=project_id, duration=duration_in_seconds)
	await append_song_json(project_json_append_json_dict)



	# delete temp file

	
	try:
	    os.remove(input_file)
	    #print(f"{input_file} deleted successfully.")
	except OSError as e:
	    print(f"Error deleting {input_file}: {e}")

	folder_size = get_folder_size(f"/var/www/media/{url}/")
	files_dict = dict(url=url, file_size=folder_size)
	await update_audio_file_in_database(files_dict)


	return {"message": "Image processing started."}


def compress_audio(input_file, output_files, quality_levels=[9, 7, 6]):
    """
    Compresses an audio file to different quality levels.

    Args:
        input_file (str): Path to the input audio file.
        output_files (list): List of output file paths for each quality level.
        quality_levels (list): List of quality levels, where 1 is the lowest and 9 is the best.
    """

    # Get audio information using FFprobe
    audio_info = ffmpeg.probe(input_file, v='error', select_streams='a:0', show_entries='stream=r_frame_rate')
    frame_rate = audio_info['streams'][0]['r_frame_rate']

    # Loop through quality levels and compress audio
    for i, quality in enumerate(quality_levels):
        output_file = output_files[i]
        
        # Use FFmpeg to compress audio
        subprocess.run([
            'ffmpeg',
            '-i', input_file,
            '-y',  # Overwrite output files if they exist
            '-c:a', 'libmp3lame',
            '-q:a', str(quality),
            '-ar', '44100',  # Sample rate
            '-af', 'aresample=async=1:first_pts=0',  # Resample with async
            '-strict', '-2',  # Allow experimental codecs
            output_file
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)




@app.post("/send_message/")
async def send_message(request: Request):
	data = await request.json()
	#process message
	print("we have a message")

	message = data.get("message")

	if message is None:
		return {"error": "Message field not found in JSON payload."}


	processed_message = f"Processed: {message}"

	return {"response": processed_message}