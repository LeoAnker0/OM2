# Use an official Python runtime as the base image
FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Copy the required files to the container (e.g., Python scripts, requirements.txt)
COPY . .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port for the HTTP API
EXPOSE 80

# Use uvicorn as the development server with auto-reload
CMD ["uvicorn", "--host", "0.0.0.0", "--port", "80", "--reload", "admin_tools:app"]