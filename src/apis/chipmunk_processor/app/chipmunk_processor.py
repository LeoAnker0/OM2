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
		print(f"\n\n")

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

		print(f"the image is real")


		# Create a file ID and all of those things
		url = await prepare_url()





		# Save the image to the volume (om2data)
		#image_path = "/var/www/media/processed_image2." + image_type  # Change the extension as needed
		image_path = f"/var/www/media/{url}/0.{image_type}"

		# Check if the directory exists, if not, create it
		directory = os.path.dirname(image_path)
		if not os.path.exists(directory):
			os.makedirs(directory)

		image.save(image_path)
		print(url)

		return {"message": "Image processed and saved successfully."}

	except HTTPException as http_exc:
		raise http_exc  # Re-raise the HTTPException with the appropriate status code and detail
	except Exception as e:
		# Log the error and return a 500 Internal Server Error with the exception details
		print(f"Error processing image: {e}")
		raise HTTPException(status_code=500, detail="Error processing image.")

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