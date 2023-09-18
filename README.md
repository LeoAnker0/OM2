# Orange Music 2 - Music Streaming for Music Makers
Orange music is a music streaming platform designed specifically for musicians and creators. Orange Music is a music streaming platform tailored to the needs of musicians and creators, providing a dedicated platform for uploading and listening to your projects. 

![Mobile Views](/docs/images/om2_mobile_views_18:9:23.png)

![Desktop View 1](/docs/images/om2_desktop_view_1_18:9:23.png)

![Desktop View 2](/docs/images/om2_desktop_view_2_18:9:23.png)


#### Notes:
###### *At the moment it is not possible to set the domains name that the main.js tries to access other than in that file. So this means it is not possible to deploy this yourself, unless you build it yourself, however this is something that will be being changed soon.*
###### *The only images that are available at the moment are arm64 images, and in the future I will also include x86 images.*

## Key Features
Orange music comes with several key features that make it a valuable tool for music makers.

* Projects: Create projects that allow you to collect multiple songs/files together.
* Easy Music Upload: Upload your music from anywhere, in any format, and listen to it wherever you have internet access.
* Seamless Playback: Enjoy smooth and uninterrupted playback of your songs. Unlike file-sharing platforms like Dropbox, Orange Music is designed for playing multiple songs in sequence or looping a song and has queue functionality, creating a more focused and streamlined listening experience.
* Sync: It will sync your last state, so that you can pick up on a different device or the next day from the place that you left off.
* Coming functionality: In future updates Orange Music will get the ability to share projects or songs with others.



## Getting Started
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

4. Edit the .env file so that the creds are unique/match yours.

5. Start the containers
```sh
sudo docker compose up
```
###### *If you are unable to access the service from the domain. Try restarting the containers a few times, this is an issue, however it should be fixed at some point. This will only happen the first time that you start the service, after that it should start from the first go.*


## Tech Stack
This project is in two parts, the frontend and the backend. 
* The frontend is written in vanilla javascript and vanilla CSS, the javascript is in the form of modules, and vite is used to build the project into a nice small bundle, and it interacts with the backend via apis. The frontend is served via an nginx docker container. And the media is served via another nginx container.
* The backend is python fastapi, running in docker containers. From there it interacts with postgres, and FFMPEG is used to process the audio files, *(which does leave the door open for video? However video requires so much storage, so I might not.),* and PIL is used to turn all the input images into webp's.
* And then because my internet is slow I use my VPS as a build server, which builds the docker images, and pushes them to the docker hub, and then I can just pull them down on my VPS again.


















