from fastapi import FastAPI, HTTPException, UploadFile, File, Request
import base64
from PIL import Image
import io
import os
import imghdr

app = FastAPI()

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
		print(f"Image type: {image_type}")

		if image_type not in ['jpeg', 'png', 'webp']:
			print(f"not valid image type")
			raise HTTPException(status_code=400, detail="Invalid image type")

		print(f"valid image type")

		# Open the image using PIL
		image = Image.open(io.BytesIO(image_data))

		# Save the image to the volume (om2data)
		image_path = "/var/www/media/processed_image2." + image_type  # Change the extension as needed
		image.save(image_path)

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