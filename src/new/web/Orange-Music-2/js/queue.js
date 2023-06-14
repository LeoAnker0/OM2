let queueState = "visible";

import { loadQUEUEbody } from './exportHTMLchunks.js';

export function initialiseQueue() {
    loadQUEUEbody();
    const queueButton = document.getElementById("queueButton");
    queueStateChange(queueState);
    queueButton.addEventListener('click', queueToggle);

    /* load in the html for loading in the queue */

    hydrateQueue();
    return
}

/* function monkeys, that do something, and that in the future will just call other functions... ( from an import ) */
function queueToggle() {
    if (queueState === "hidden") {
        queueState = "visible";
        queueStateChange(queueState);

        /* call the function that will slide in the queue (make visible) */

        return
    }
    if (queueState === "visible") {
        queueState = "hidden";
        queueStateChange(queueState);

        /* call the function that will slide out the queue (make hidden) */

        return
    }
    return
}


/* toggle the queue background */
function queueStateChange(state) {
    /* takes two possible values of visible or hidden */
    const queueButton = document.getElementById("queueButton");
    const queueIcon = document.getElementById("queueIcon");
    const queueEnvironment = document.getElementById("QUEUEenvironment");

    if (state == "visible") {
        queueIcon.style.filter = "var(--make-svg-black)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 100%";
        queueEnvironment.style.right = "0%";

        return
    }
    if (state == "hidden") {
        queueIcon.style.filter = "var(--make-svg-grey)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 0%";
        queueEnvironment.style.right = "calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";

        return
    }
    return
}


import queueItem from '../html/queueItem.html?raw';

/* update the queue display blocks

we want the only export here to be the update function
 */

const songs = [
    { id: 1, name: "Changes are over", artist: "I messed up", duration: "3:45", coverImage: "https://plus.unsplash.com/premium_photo-1677087121676-2acaaae5b3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    { id: 2, name: "ARIES", artist: "lives", duration: "4:20", coverImage: "https://images.unsplash.com/photo-1605106901227-991bd663255c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: "A little place called the moon", artist: "Aurora", duration: "2:55", coverImage: "https://images.unsplash.com/photo-1603208636124-a12f78c1bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }
];

function hydrateQueue() {
    const queueContainer = document.getElementById("QUEUEbottomContainer");

    queueContainer.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const html = hydrateItem(song);
        const div = document.createElement('div');
        div.innerHTML = html;

        // Add click event listener and set the song ID as a data attribute
        div.addEventListener('click', function(event) {
            const clickedItem = event.target;
            const songId = clickedItem.dataset.songId;
            handleQueueItemClick(songId);
        });
        div.dataset.songId = song.id;

        queueContainer.appendChild(div);
    }
}

function handleQueueItemClick(songId) {
    // Find the song object based on the song ID
    const clickedSong = songs.find(song => song.id === parseInt(songId));

    // Perform actions based on the clicked song
    if (clickedSong) {
        console.log('Clicked song:', clickedSong);
        // Perform additional actions with the clicked song

        return
    }
    return
}

import icons_menuOptionsButton from '../assets/icons/menu_options_button.svg';

function hydrateItem(song) {
    const listOfThings = ['QUEUE_item_image', 'QUEUE_item_title', 'QUEUE_item_artist', 'icons_menuOptionsButton', 'QUEUE_item_timeIndicator'];
    const imgSrc = song.coverImage;
    const songTitle = song.name;
    const songArtist = song.artist;
    const songDuration = song.duration;

    let replacedContent = queueItem;

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'QUEUE_item_image') {
            value = imgSrc;
        } else if (placeholder === 'QUEUE_item_title') {
            value = songTitle;
        } else if (placeholder === 'QUEUE_item_artist') {
            value = songArtist;
        } else if (placeholder === 'icons_menuOptionsButton') {
            value = icons_menuOptionsButton;
        } else if (placeholder === 'QUEUE_item_timeIndicator') {
            value = songDuration;
        }

        replacedContent = replacedContent.replace(regex, value);
    }
    replacedContent = replacedContent.replace('<div', `<div data-song-id="${song.id}"`);



    return replacedContent;
}



/* QUEUE item reomve from queue */









/*  */