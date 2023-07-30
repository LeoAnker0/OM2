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


		#return url to main.py

		# Enqueue the image processing task to run in the background
		asyncio.create_task(process_and_save_image(image, url, image_type, image_data))

	    # Return the response to the client with the URL
		return {"message": "Image processing started.", "url": url}
		
	except HTTPException as http_exc:
		raise http_exc  # Re-raise the HTTPException with the appropriate status code and detail
	except Exception as e:
		# Log the error and return a 500 Internal Server Error with the exception details
		print(f"Error processing image: {e}")
		raise HTTPException(status_code=500, detail="Error processing image.")


async def process_and_save_image(image, url, image_type, image_data):
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





	except Exception as e:
        # Log the error and handle any necessary cleanup or error handling
		print(f"Error processing image: {e}")



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