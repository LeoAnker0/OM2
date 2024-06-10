// musicEnjoy.js

import { PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_current_img, PLAYBACK_current_song_title, PLAYBACK_current_song_artist } from './playback.js';
import { replaceSVGplaceholdersForAddressFromString } from './om2.js';
import { getKeyColoursFromImage } from './getImageColours.js';
import { attachVisualiserToRoot } from './visualiser.js';
import { is_mobile } from './om2.js';


import MusicEnjoyMainHTML from '../html/musicEnjoy_main.html?raw';

export function init_musicEnjoy() {
    // Load in the html that creates musicEnjoy
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.innerHTML = replaceSVGplaceholdersForAddressFromString(MusicEnjoyMainHTML);

    // Set event listener for the button that closes musicEnjoy
    const musicEnjoyExitButton = document.getElementById("MUSICENJOYMODEexitButton");
    musicEnjoyExitButton.addEventListener("click", closeMusicEnjoy);

    // Set event listener for the button that opens musicEnjoy
    const openMusicEnjoyButton = document.getElementById("MusicEnjoyOpenButton");
    openMusicEnjoyButton.addEventListener("click", openMusicEnjoy);

    // Temporary code that enables me to open musicEnjoy without having to press the button every single time
    /*
    setTimeout(function() {
        openMusicEnjoy();
    }, 150);
     */

    if (is_mobile()) {
        const LCDbody = document.getElementById("LCDbody");
        LCDbody.addEventListener("click", openMusicEnjoy);
    }
}

async function doBackgroundThings() {
    const colours = await getKeyColoursFromImage(PLAYBACK_current_img);

    /*
    const squaresContainer = document.getElementById("MUSICENJOYMODEsquares");
    squaresContainer.children[0].style.backgroundColor = colours[0];
    squaresContainer.children[1].style.backgroundColor = colours[1];
    squaresContainer.children[2].style.backgroundColor = colours[2];
    squaresContainer.children[3].style.backgroundColor = colours[3];
    squaresContainer.children[4].style.backgroundColor = colours[4];
    */

    // Set background
    const background = document.getElementById("MUSICENJOYMODEbackground");
    attachVisualiserToRoot(background, colours)
}



async function openMusicEnjoy() {
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    const musicEnjoyCoverImage1 = document.getElementById("MUSICENJOYMODEcoverImage1");
    const musicEnjoyCoverImage2 = document.getElementById("MUSICENJOYMODEcoverImage2");
    const musicEnjoyTitle1 = document.getElementById("MUSICENJOYMODEsongTitle1");
    const musicEnjoyTitle2 = document.getElementById("MUSICENJOYMODEsongTitle2");
    const musicEnjoyArtist = document.getElementById("MUSICENJOYMODEsongArtist");
    musicEnjoyEnvironment.style.display = "block";
    musicEnjoyCoverImage1.src = PLAYBACK_current_img;
    musicEnjoyCoverImage2.src = PLAYBACK_current_img;
    musicEnjoyTitle1.innerText = PLAYBACK_current_song_title;
    musicEnjoyTitle2.innerText = PLAYBACK_current_song_title;
    musicEnjoyArtist.innerText = PLAYBACK_current_song_artist


    doBackgroundThings();

}

function closeMusicEnjoy() {
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.style.display = "none";
}