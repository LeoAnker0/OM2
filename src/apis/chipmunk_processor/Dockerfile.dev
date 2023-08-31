# Use an official Python runtime as the base image
FROM python:3.11

# Update and install necessary packages
RUN apt-get update && apt-get install -y ffmpeg python3-pip

# Set the working directory in the container
WORKDIR /app

# Copy the required files to the container (e.g., Python scripts, requirements.txt)
COPY . .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port for the HTTP API
EXPOSE 8001

# Use uvicorn as the development server with auto-reload
CMD ["uvicorn", "--host", "0.0.0.0", "--port", "8001", "--reload", "chipmunk_processor:app"]