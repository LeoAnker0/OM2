import { PLAYBACK_songs_array, PLAYBACK_songs_copy_array, PLAYBACK_songs_array_index } from './playback.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import icons_menuOptionsButton from '../assets/icons/menu_options_button.svg';
import { loadQUEUEbody } from './exportHTMLchunks.js';
import queueItem from '../html/queueItem.html?raw';
import { is_mobile, is_dark } from './om2.js';
import { MENUdisplay } from './menu.js';

let queueState = "hidden";

export function initialiseQueue() {
    loadQUEUEbody();
    const queueButton = document.getElementById("queueButton");
    const queueClearButton = document.getElementById("QUEUEclearQueueButton");

    queueStateChange(queueState);
    queueButton.addEventListener('click', queueToggle);
    queueClearButton.addEventListener('click', queueClear);
    updateQueue();
    return
}

function queueToggle() {
    if (queueState === "hidden") {
        queueState = "visible";
        queueStateChange(queueState);
        return
    }
    if (queueState === "visible") {
        queueState = "hidden";
        queueStateChange(queueState);
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
        queueIcon.style.filter = "var(--make-svg-grey)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 100%";
        queueEnvironment.style.right = "0%";
        if (is_dark) {
            queueIcon.style.filter = "var(--make-svg-white)";
        }
        return
    }
    if (state == "hidden") {
        queueIcon.style.filter = "var(--make-svg-black)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 0%";
        queueEnvironment.style.right = "calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";
        return
    }
    return
}

export function updateQueue() {
    const queueContainer = document.getElementById("QUEUEbottomContainer");
    queueContainer.innerHTML = "";

    for (let i = (PLAYBACK_songs_array_index + 1); i < PLAYBACK_songs_array.length; i++) {
        PLAYBACK_songs_array[i].id = i;
        const song = PLAYBACK_songs_array[i];
        const html = hydrateItem(song);
        const div = document.createElement('div');
        div.innerHTML = html;

        div.addEventListener('click', function(event) {
            const clickedItem = event.target;
            const songId = clickedItem.dataset.songId;
            handleQueueItemClick(songId);
        });
        div.dataset.songId = song.id;
        div.addEventListener('click', handleQueueItemClick);
        div.dataset.songId = song.id;

        const removeIndicator = div.querySelector('.QUEUE-item-image-removeIndicator');
        const menuPopupIcon = div.querySelector('.QUEUE-item-up-next-queue-item-context-call');
        removeIndicator.addEventListener('click', handleQueueItemRemove);
        removeIndicator.dataset.songID = song.id;
        menuPopupIcon.dataset.songSet = song.id;
        menuPopupIcon.addEventListener('click', function(event) {
            if (event.target === menuPopupIcon) {
                // Action to be performed when the specific div is clicked
                handleQueueDisplayMenu(event);
            }
        });

        div.addEventListener("dragstart", handleDragStart);
        div.addEventListener("dragover", handleDragOver);
        div.addEventListener("drop", handleDrop);
        queueContainer.appendChild(div);
    }
}

function queueClear() {
    const currentQueueIndex = PLAYBACK_songs_array_index + 1;
    if (currentQueueIndex >= 0 && currentQueueIndex < PLAYBACK_songs_array.length) {
        PLAYBACK_songs_array.splice(currentQueueIndex);
    } else {
        PLAYBACK_songs_array.length = 0;
    }
    updateQueue();
    return;
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
    const dragSourceSong = PLAYBACK_songs_array.find(song => song.id === parseInt(dragSourceId));
    const dropTargetSong = PLAYBACK_songs_array.find(song => song.id === parseInt(dropTarget.dataset.songId));
    const dragSourceIndex = PLAYBACK_songs_array.indexOf(dragSourceSong);
    const dropTargetIndex = PLAYBACK_songs_array.indexOf(dropTargetSong);

    if (dragSourceIndex !== -1 && dropTargetIndex !== -1) {
        PLAYBACK_songs_array.splice(dragSourceIndex, 1);
        PLAYBACK_songs_array.splice(dropTargetIndex, 0, dragSourceSong);
        PLAYBACK_songs_copy_array.splice(dragSourceIndex, 1);
        PLAYBACK_songs_copy_array.splice(dropTargetIndex, 0, dragSourceSong);
        updateQueue();
    }
}

function handleQueueItemRemove(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songID = parseInt(clickedItem.dataset.songID);
    const indexToRemove = PLAYBACK_songs_array.findIndex(item => item.id === songID);
    if (indexToRemove !== -1) {
        PLAYBACK_songs_array.splice(indexToRemove, 1);
        PLAYBACK_songs_copy_array.splice(indexToRemove, 1);
    }
    updateQueue();
}

function handleQueueDisplayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songId = clickedItem.getAttribute('data-song-set');
    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playlist',
        function: 'MENU_ACTION_playNext',
        optionalParams: {
            queueID: songId
        }

    }, {
        displayText: 'Play later',
        optionalSVG: 'icons_backButton',
        function: 'None',
    }, {
        displayText: 'Love',
        optionalSVG: 'None',
        function: 'None',
    }, {
        displayText: 'Less like this',
        optionalSVG: 'None',
        function: 'None',
    }, {
        displayText: 'Rate',
        optionalSVG: 'None',
        function: 'None',
    }]

    MENUdisplay(params, event);
    return;
}

function handleQueueItemClick(songId) {
    // Find the song object based on the song ID
    /*
    const clickedSong = songs.find(song => song.id === parseInt(songId));

    // Perform actions based on the clicked song
    if (clickedSong) {
        console.log('Clicked song:', clickedSong);
        // Perform additional actions with the clicked song

        return
    }
    return*/
}


function hydrateItem(song) {
    const listOfThings = ['QUEUE_item_image', 'QUEUE_item_title', 'QUEUE_item_artist', 'icons_menuOptionsButton', 'QUEUE_item_timeIndicator'];
    const imgSrc = song.img;
    const songTitle = song.song_name;
    const songArtist = song.project_contributors;
    const songDuration = `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`;
    let replacedContent = queueItem;

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'QUEUE_item_image') {
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${imgSrc}/3`;
            value = image;
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

    const tempElement = document.createElement('div');
    const removeIndicator = tempElement.querySelector('.QUEUE-item-image-removeIndicator');
    tempElement.innerHTML = replacedContent;
    return tempElement.innerHTML;
}