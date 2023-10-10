#!/bin/bash
# build the arm version of the images and push them

build_version="0.0.5"
original_directory="$PWD"

#get the latest version of the
git pull

# cd to the right directory

cd ./src/web/Orange-Music-2

docker buildx build --platform linux/arm64 -t leoanker/om2_frontend:"$build_version"-arm64 --push -f ./Dockerfile .

cd ../../apis

docker buildx build --platform linux/arm64 -t leoanker/om2_main:"$build_version"-arm64 --push -f ./Dockerfile.prod .

cd ./chipmunk_processor

docker buildx build --platform linux/arm64 -t leoanker/om2_chipmunk:"$build_version"-arm64 --push -f ./Dockerfile.prod .

cd "$original_directory"