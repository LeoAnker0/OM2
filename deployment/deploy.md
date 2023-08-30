# Deployment

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

Then use the docker-compose