#!/bin/bash
# Specify the GitHub repository URL and the specific folder you want to extract
repo_url="https://github.com/LeoAnker0/Orange-Music-2/archive/main.zip"
target_folder="Orange-Music-2-main/deployment"

# Download the zip archive of the repository
wget $repo_url -O repo.zip

# Extract the specific folder from the downloaded zip archive
unzip repo.zip "$target_folder/*" -d temp_folder

# Move the contents of the extracted folder to the current directory
mv temp_folder/$target_folder/* .

# Clean up temporary files and folders
rm -r temp_folder
rm repo.zip

mv env.txt .env

echo "Extraction and cleanup complete."