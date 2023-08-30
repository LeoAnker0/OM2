# Building Deployment

To build the three docker containers you can use the following commands, granted you are in the correct directories.

From `src/web/Orange-Music-2`

```sh
docker buildx build --platform linux/amd64 -t leoanker/om2_frontend:0.0.1-amd64 --push . && docker buildx build --platform linux/arm64 -t leoanker/om2_frontend:0.0.1-arm64 --push .
```

From `src/apis`

```sh
docker buildx build --platform linux/amd64 -t leoanker/om2_main:0.0.1-amd64 --push . && docker buildx build --platform linux/arm64 -t leoanker/om2_main:0.0.1-arm64 --push .
```

From `src/apis/chipmunk_processor`

```sh
docker buildx build --platform linux/amd64 -t leoanker/om2_chipmunk:0.0.1-amd64 --push . && docker buildx build --platform linux/arm64 -t leoanker/om2_chipmunk:0.0.1-arm64 --push .
```

Then ensure that the docker compose is using the most recent/ the correct docker image

# Using Deployment
Make sure that you have unzip installed:
```sh
sudo apt-get update && sudo apt-get install unzip
```

Download the init script

```sh
wget https://raw.githubusercontent.com/LeoAnker0/Orange-Music-2/main/deployment/init.sh
```
```sh
chmod +x init.sh
```
```sh
./init.sh
```
Or:
```sh
wget https://raw.githubusercontent.com/LeoAnker0/Orange-Music-2/main/deployment/init.sh && chmod +x init.sh && ./init.sh
```
