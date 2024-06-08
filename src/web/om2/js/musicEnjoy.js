// musicEnjoy.js

import { PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_current_img, PLAYBACK_current_song_title, PLAYBACK_current_song_artist } from './playback.js';
import { replaceSVGplaceholdersForAddressFromString } from './om2.js';


import MusicEnjoyMainHTML from '../html/musicEnjoy_main.html?raw';

export function init_musicEnjoy() {
    // Load in the html that creates musicEnjoy

    /*
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.innerHTML = replaceSVGplaceholdersForAddressFromString(MusicEnjoyMainHTML);

    // Set event listener for the button that closes musicEnjoy
    const musicEnjoyExitButton = document.getElementById("MUSICENJOYMODEexitButton");
    musicEnjoyExitButton.addEventListener("click", closeMusicEnjoy);

    // Set event listener for the button that opens musicEnjoy
    const openMusicEnjoyButton = document.getElementById("MusicEnjoyOpenButton");
    openMusicEnjoyButton.addEventListener("click", openMusicEnjoy);

    // Temporary code that enables me to open musicEnjoy without having to press the button every single time
    setTimeout(function() {
        openMusicEnjoy();
    }, 150);

    */
}

function openMusicEnjoy() {
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.style.display = "block";

    console.log(PLAYBACK_current_img)
}

function closeMusicEnjoy() {
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.style.display = "none";
}