#!/bin/bash

# Specify the GitHub repository URL and the specific folder you want to extract
repo_url="https://github.com/LeoAnker0/Orange-Music-2/archive/main.zip"
#target_folder="./deployment"
# Download the zip archive of the repository
wget $repo_url -O repo.zip

# List the folders in the first level of the zip archive
unzip -l repo.zip | awk 'BEGIN { FS="/" } NF > 3 { print $4 }' | sort | uniq

# Ask the user to input the folder they want to extract
read -p "Enter the folder you want to extract: " target_folder

# Extract the specific folder from the downloaded zip archive
unzip repo.zip "$target_folder/*" -d temp_folder

# Move the contents of the extracted folder to the current directory
mv temp_folder/$target_folder/* .

# Clean up temporary files and folders
rm -r temp_folder
rm repo.zip

echo "Extraction and cleanup complete."