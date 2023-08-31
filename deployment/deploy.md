# Building Deployment

Building from the server:
Make sure that git is installed so that I can clone the repo
```sh
git clone https://github.com/LeoAnker0/Orange-Music-2.git .
```
Make sure that you are logged in to docker using docker login...
```sh
docker login
```

Then: at `src/apis`
```sh
sudo docker buildx build --platform linux/arm64 -t leoanker/om2_main:0.0.1-arm64 --push -f ./Dockerfile.prod .
```

At: `src/apis/chipmunk_processor`
```sh
sudo docker buildx build --platform linux/arm64 -t leoanker/om2_chipmunk:0.0.1-arm64 --push -f ./Dockerfile.prod .
```




To build the three docker containers you can use the following commands, granted you are in the correct directories.

From `src/web/Orange-Music-2`

```sh
sudo docker buildx build --platform linux/amd64 -t leoanker/om2_main:0.0.1-amd64 --push -f ./Dockerfile.prod . && sudo docker buildx build --platform linux/arm64 -t leoanker/om2_main:0.0.1-arm64 --push -f ./Dockerfile.prod .
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
Create a folder for om2:
```sh
mkdir om2 && cd ./om2
```

Make sure that you have unzip installed:
```sh
sudo apt-get update && sudo apt-get install unzip
```

Make sure that you have docker and docker compose installed:
* Either follow the intructions here [https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

Or:
* Setup Repsitory:
```sh
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
```
* Add Docker's official GPG key:
```sh
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```
* Use the following command to set up the repository:
```sh
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
* Update the `apt` package index:
```sh
sudo apt-get update
```
* Install the latest docker version
```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
* Verify that the docker engine is properly installed
```sh
sudo docker run hello-world
```

<br>

Download the init script

```sh
wget https://raw.githubusercontent.com/LeoAnker0/Orange-Music-2/main/deployment/init.sh
chmod +x init.sh
./init.sh
```
Or:
```sh
wget https://raw.githubusercontent.com/LeoAnker0/Orange-Music-2/main/deployment/init.sh && chmod +x init.sh && ./init.sh
```

<br>

Edit the .env file

<br>

run the docker compose
```sh
docker compose up
```




