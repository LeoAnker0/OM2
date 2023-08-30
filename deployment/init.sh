# Replace these variables with actual values
GITHUB_USER="LeoAnker0"
REPO_NAME="Orange-Music-2"
BRANCH="main"
FOLDER_PATH="deployment"

# Construct the URL
DOWNLOAD_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}/archive/${BRANCH}.zip"

# Create a temporary directory to download and extract
TEMP_DIR="$(mktemp -d)"
cd "${TEMP_DIR}"

# Download the ZIP archive
wget -O repo.zip "${DOWNLOAD_URL}"

# Extract the folder from the ZIP archive
unzip repo.zip "${REPO_NAME}-${BRANCH}/${FOLDER_PATH}/*"

# Move the extracted contents to your desired location
mv "${REPO_NAME}-${BRANCH}/${FOLDER_PATH}" /path/to/destination

# Clean up the temporary directory
cd ..
rm -rf "${TEMP_DIR}"