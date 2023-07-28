from fastapi import FastAPI, HTTPException, UploadFile, File, Request
import base64
from PIL import Image
import io
import os

app = FastAPI()

@app.post("/process_image/base64/")
async def process_image(image_base64: str):
    try:
        # Decode the base64 image data
        image_data = base64.b64decode(image_base64)

        # Open the image using PIL
        image = Image.open(io.BytesIO(image_data))

        # Save the image to the volume (om2data)
        image_path = "/var/www/media/processed_image.jpg"  # Change the filename and extension as needed
        image.save(image_path)

        return {"message": "Image processed and saved successfully."}
    except Exception as e:
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