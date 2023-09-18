# Orange Music 2 - Music Streaming for Music Makers
Orange music is a music streaming platform designed specifically for musicians and creators. Orange Music is a music streaming platform tailored to the needs of musicians and creators, providing a dedicated platform for uploading and listening to your projects. 

###### Notes:
* *At the moment it is not possible to set the domains name that the main.js tries to access other than in that file. So this means it is not possible to deploy this yourself, unless you build it yourself, however this is something that will be being changed soon.*
* *The only images that are available at the moment are arm64 images, and in the future I will also include x86 images.*

### Getting Started
To get started with Orange Music, follow these steps ([or from deploy.md](deployment/deploy.md)):
1. Make sure that you have the requirements installed:
	* Unzip
	* docker/docker compose
	* A domain name and cloudflare tunnel token ready
	* If not follow the instructions from [deploy.md](deployment/deploy.md)

2. Create a folder for your project:
```sh
mkdir om2 && cd ./om2
```

3. Download and execute the init script, it will just get the correct files that you need to start the project up.
```sh
wget https://raw.githubusercontent.com/LeoAnker0/Orange-Music-2/main/deployment/init.sh
chmod +x init.sh
./init.sh
```

4. Edit the .env file