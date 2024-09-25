// musicEnjoy.js

import { PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_playing_state, PLAYBACK_current_img, PLAYBACK_current_song_title, PLAYBACK_current_song_artist, PLAYBACK_handle_PLAYER_playButton, PLAYBACK_handle_PLAYER_nextButton, PLAYBACK_handle_PLAYER_backButton, PLAYBACK_handle_PLAYER_loopButton, PLAYBACK_handle_shuffle_queue, PLAYBACK_loop_state, PLAYBACK_shuffle_state } from './playback.js';
import { attachVisualiserToRoot, detachVisualiserFromRoot, updateVisualiserColors } from './visualiser.js';
import { replaceSVGplaceholdersForAddressFromString } from './om2.js';
import { getKeyColoursFromImage } from './getImageColours.js';
import { svgImports } from './importAssets.js';
import { is_mobile } from './om2.js';

import MusicEnjoyMainHTML from '../html/musicEnjoy_main.html?raw';
import { playbackEventsEmitter } from './playback.js';

let musicEnjoyVisible = false;
let colours, root;

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

    if (is_mobile()) {
        const LCDbody = document.getElementById("LCDbody");
        LCDbody.addEventListener("click", openMusicEnjoy);
    }


    // events for play/pause
    playbackEventsEmitter.on("playbackStateChange", (data) => {
        if (musicEnjoyVisible == false) {
            return;
        }

        updateStateOfMusicEnjoyPlayButton();
    })

    // events for track progress
    playbackEventsEmitter.on("progressStateChange", (data) => {
        if (musicEnjoyVisible == false) {
            return;
        }
        //console.log("progressStateChange", data)
    })

    // events for the changing of a track
    playbackEventsEmitter.on("newTrackStateChange", (data) => {
        if (musicEnjoyVisible == false) {
            return;
        }
        updateMusicEnjoyPlaybackDetails();
    })

    // events for the changing of loop 
    playbackEventsEmitter.on("loopStateChange", (state) => {
        if (musicEnjoyVisible == false) {
            return;
        }

        updateStateOfMusicEnjoyLoopButton();
    })

    // events for the changing of shuffle 
    playbackEventsEmitter.on("shuffleStateChange", (state) => {
        if (musicEnjoyVisible == false) {
            return;
        }

        updateStateOfMusicEnjoyShuffleButton();
    })


    // controls events listeners
    const musicEnjoyShuffleButton = document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle");
    const musicEnjoyBackButton = document.getElementById("MUSICENJOYMODEplaybackControlsButton_back");
    const musicEnjoyPlayButton = document.getElementById("MUSICENJOYMODEplaybackControlsButton_play");
    const musicEnjoyNextButton = document.getElementById("MUSICENJOYMODEplaybackControlsButton_next");
    const musicEnjoyLoopButton = document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop");

    musicEnjoyShuffleButton.addEventListener("click", PLAYBACK_handle_shuffle_queue);
    musicEnjoyBackButton.addEventListener("click", PLAYBACK_handle_PLAYER_backButton);
    musicEnjoyPlayButton.addEventListener("click", PLAYBACK_handle_PLAYER_playButton);
    musicEnjoyNextButton.addEventListener("click", PLAYBACK_handle_PLAYER_nextButton);
    musicEnjoyLoopButton.addEventListener("click", PLAYBACK_handle_PLAYER_loopButton);


    // Temporary code that enables me to open musicEnjoy without having to press the button every single time
    /*
    setTimeout(function() {
        openMusicEnjoy();
    }, 150);
     */

}

function updateMusicEnjoyPlaybackDetails() {
    const musicEnjoyCoverImage1 = document.getElementById("MUSICENJOYMODEcoverImage1");
    const musicEnjoyCoverImage2 = document.getElementById("MUSICENJOYMODEcoverImage2");
    const musicEnjoyTitle1 = document.getElementById("MUSICENJOYMODEsongTitle1");
    const musicEnjoyArtist = document.getElementById("MUSICENJOYMODEsongArtist");

    musicEnjoyCoverImage1.src = PLAYBACK_current_img;
    musicEnjoyCoverImage2.src = PLAYBACK_current_img;
    musicEnjoyTitle1.innerText = PLAYBACK_current_song_title;
    musicEnjoyArtist.innerText = PLAYBACK_current_song_artist

    updateStateOfMusicEnjoyLoopButton();
    updateStateOfMusicEnjoyShuffleButton();

    updateColoursOnCanvas();
}

function updateStateOfMusicEnjoyPlayButton() {
    const playbuttonIcon = document.getElementById("MUSICENJOYMODEplaybackControlButton_play_icon");

    if (PLAYBACK_playing_state == "playing") {
        playbuttonIcon.src = svgImports["icons_pause"];
        return
    }
    if (PLAYBACK_playing_state == "paused") {
        playbuttonIcon.src = svgImports["icons_play"];
        return
    }
}

function updateStateOfMusicEnjoyLoopButton() {
    const loopIcon = document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop_icon");

    if (PLAYBACK_loop_state === "off") {
        //console.log("off state");
        loopIcon.style.filter = "var(--make-svg-white)";
        loopIcon.src = svgImports["icons_loop"];
        return
    }
    if (PLAYBACK_loop_state === "on") {
        loopIcon.style.filter = "var(--make-svg-grey-3)";
        loopIcon.src = svgImports["icons_loop"];
        return
    }
    if (PLAYBACK_loop_state === "song") {
        loopIcon.style.filter = "var(--make-svg-grey-3)";
        loopIcon.src = svgImports["icons_loop_song"];
        return
    }
}

function updateStateOfMusicEnjoyShuffleButton() {
    const shuffleIcon = document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle_icon");

    if (PLAYBACK_shuffle_state === "on") {
        shuffleIcon.style.filter = "var(--make-svg-grey-3)";
        return
    }
    if (PLAYBACK_shuffle_state === "off") {
        shuffleIcon.style.filter = "var(--make-svg-white)";
        return
    }
}


async function openMusicEnjoy() {
    musicEnjoyVisible = true;

    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.style.display = "block";

    updateMusicEnjoyPlaybackDetails();
    updateStateOfMusicEnjoyPlayButton();

    await updateColoursFromImage();
    root = document.getElementById("MUSICENJOYMODEbackground");
    attachVisualiserToRoot(root, colours)
}

async function updateColoursFromImage() {
    colours = await getKeyColoursFromImage(PLAYBACK_current_img);
}

async function updateColoursOnCanvas() {
    await updateColoursFromImage();
    updateVisualiserColors(root, colours);
}



function closeMusicEnjoy() {
    const musicEnjoyEnvironment = document.getElementById("musicEnjoyEnvironment");
    musicEnjoyEnvironment.style.display = "none";
    detachVisualiserFromRoot()

    musicEnjoyVisible = false;
}