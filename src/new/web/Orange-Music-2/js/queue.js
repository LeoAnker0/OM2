let queueState = "visible";

import { loadQUEUEbody } from './exportHTMLchunks.js';

export function initialiseQueue() {
    loadQUEUEbody();
    const queueButton = document.getElementById("queueButton");
    const queueClearButton = document.getElementById("QUEUEclearQueueButton");
    queueStateChange(queueState);
    queueButton.addEventListener('click', queueToggle);
    queueClearButton.addEventListener('click', queueClear);

    /* load in the html for loading in the queue */

    updateQueue();
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

let songs = [
    { id: 0, name: "Changes are over", artist: "I messed up", duration: "3:45", coverImage: "https://plus.unsplash.com/premium_photo-1677087121676-2acaaae5b3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    { id: 0, name: "ARIES", artist: "lives", duration: "4:20", coverImage: "https://images.unsplash.com/photo-1605106901227-991bd663255c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    { id: 0, name: "Viva la Loco", artist: "Billie Eyelash", duration: "3:32", coverImage: "https://images.unsplash.com/photo-1549357957-99ab8644c268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    { id: 0, name: "Cleopatra", artist: "shakespeare", duration: "55:32", coverImage: "https://images.unsplash.com/photo-1665911177191-a0ae109c7401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNxdWFyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    { id: 0, name: "A little place called the moon", artist: "Aurora", duration: "2:55", coverImage: "https://images.unsplash.com/photo-1603208636124-a12f78c1bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }
];

function updateQueue() {
    const queueContainer = document.getElementById("QUEUEbottomContainer");

    queueContainer.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        songs[i].id = i;

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

        // Add click event listener to handle queue item click
        div.addEventListener('click', handleQueueItemClick);
        div.dataset.songId = song.id;


        // Find the "QUEUE-item-image-removeIndicator" element and attach a click event listener
        const removeIndicator = div.querySelector('.QUEUE-item-image-removeIndicator');
        removeIndicator.addEventListener('click', handleQueueItemRemove);
        removeIndicator.dataset.songID = song.id;

        // Find the "QUEUE-item-up-next-queue-item-context-call" element and attach a click event listener
        const menuPopupIcon = div.querySelector('.QUEUE-item-up-next-queue-item-context-call');
        menuPopupIcon.addEventListener('click', handleQueueDisplayMenu);
        menuPopupIcon.dataset.songID = song.id;

        // Add dragstart event listener for starting the drag
        div.addEventListener("dragstart", handleDragStart);

        // Add dragover event listener for allowing drop
        div.addEventListener("dragover", handleDragOver);

        // Add drop event listener for handling the drop
        div.addEventListener("drop", handleDrop);


        queueContainer.appendChild(div);
    }
}

function queueClear() {
    songs = [];
    updateQueue();
    return
}

function handleDragStart(event) {
    const dragSource = event.target;
    event.dataTransfer.setData("text/plain", dragSource.dataset.songId);
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function handleDrop(event) {
    event.preventDefault();
    const dragSourceId = event.dataTransfer.getData("text/plain");
    const dropTarget = event.target;

    // Find the corresponding song objects
    const dragSourceSong = songs.find(song => song.id === parseInt(dragSourceId));
    const dropTargetSong = songs.find(song => song.id === parseInt(dropTarget.dataset.songId));

    // Get the indexes of the songs in the array
    const dragSourceIndex = songs.indexOf(dragSourceSong);
    const dropTargetIndex = songs.indexOf(dropTargetSong);

    if (dragSourceIndex !== -1 && dropTargetIndex !== -1) {
        // Remove the drag source song from the array
        songs.splice(dragSourceIndex, 1);

        // Insert the drag source song at the drop target index
        songs.splice(dropTargetIndex, 0, dragSourceSong);

        // Re-render the queue to reflect the new order
        updateQueue();

        console.log(songs);
    }
}

function handleQueueItemRemove(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songID = parseInt(clickedItem.dataset.songID);

    songs = songs.filter(item => item.id !== songID);

    console.log('Clicked remove indicator for song ID:', songID);
    updateQueue();
}

import { MENUdisplay } from './menu.js';

function handleQueueDisplayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songId = clickedItem.dataset.songId;
    console.log('Clicked show menu:', songId);

    /* call an imported function */
    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playlist',
        function: 'callSomeFunction()',
    }, {
        displayText: 'Play later',
        optionalSVG: 'icons_backButton',
        function: 'callSomeFunction()',
    }, {
        displayText: 'Love',
        optionalSVG: 'None',
        function: 'callSomeFunction()',
    }, {
        displayText: 'Less like this',
        optionalSVG: 'None',
        function: 'callSomeFunction()',
    }, {
        displayText: 'Rate',
        optionalSVG: 'None',
        function: 'callSomeFunction()',
    }]

    MENUdisplay(params, event);
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

    // Find the "QUEUE-item-image-removeIndicator" element and attach a click event listener
    const tempElement = document.createElement('div');
    tempElement.innerHTML = replacedContent;
    const removeIndicator = tempElement.querySelector('.QUEUE-item-image-removeIndicator');
    removeIndicator.addEventListener('click', function() {
        console.log('Clicked remove indicator for song ID:', song.id);
    });

    return tempElement.innerHTML;
}












/*  */