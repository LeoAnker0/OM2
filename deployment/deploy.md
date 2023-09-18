# Using Deployment
Create a folder for om2:
```sh
mkdir om2 && cd ./om2
```

Make sure that you have unzip installed:
```sh
sudo apt-get update && sudo apt-get install unzip
```

A domain name and cloudflare tunnel token ready.

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
sudo docker compose up
```

---

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

Then make sure that the build.sh script has been `chmod +x build.sh`, and then do:
```sh
sudo ./build.sh
```

This will build the three containers, but this will only work on arm64 machines, or I mean at the moment the script will only build arm64 images, but that is easy to change.





