# Using Deployment

Also this project currently is only tested (for deployment) as working on ubuntu, on an arm server. Theoretically it should run wherever because of docker containers, however I have not tested this yet. And at the moment there are no x86/AMD64 images, however this will come in the future. But if there are any issues or questions, please contact me at the email in my profile.

This project uses Cloudflare tunnels to get SSL and a stable connection to the outside world, independent of wether or not you have a fixed IP. This means that you will need a domain name to be able to access om2. In theory you could set it up to run locally, however this is not a use case that I use it for, and thus at the moment it will be for advanced users only.

If you already have a domain name, skip this sentence.
In the olden days I would have said get a domain name from google domains, because it was easy and trust worthy, however they decided to sell that business??? So now I would say get it from Cloudflare, who sell it at cost, and it means you don't have to configure C-Names and stuff, not that it is particularly hard these days.

And once you have your domain name at Cloudflare, or accessible through Cloudflare, you want to head over to the zero trust overview --> access --> tunnels. From here you will make a new tunnel, and then write down the token that it generates somewhere, making sure that you choose the docker install method. From here you want to make three tunnels, one that has a name of `om2.domain.tld`, another of `om2apis.domain.tld`, and the third one of `om2media.la0.uk`.

Once you have that ready you can then proceed to the following steps:


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

Edit the `.env` file

You can edit the `.env` with whatever software that you want to use, however 

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





