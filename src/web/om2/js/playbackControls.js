import { PLAYBACK_handle_PLAYER_playButton, PLAYBACK_handle_PLAYER_nextButton, PLAYBACK_handle_PLAYER_backButton, PLAYBACK_handle_PLAYER_loopButton, PLAYBACK_handle_shuffle_queue } from './playback.js';
import { svgImports } from './importAssets.js';

/* adds in the event listeners for the play back controls */
export function setEventListenersForPlaybackcontrols() {
    const shuffleButton = document.getElementById("PLAYERshuffleButton");
    const backButton = document.getElementById("PLAYERbackButton");
    const playButton = document.getElementById("PLAYERplayButton");
    const nextButton = document.getElementById("PLAYERnextButton");
    const loopButton = document.getElementById("PLAYERloopButton");
    const playIcon = document.getElementById("PLAYERplayIcon");
    const loopIcon = document.getElementById("PLAYERloopIcon");

    shuffleButton.addEventListener('click', PLAYBACK_handle_shuffle_queue);
    backButton.addEventListener('click', PLAYBACK_handle_PLAYER_backButton);
    playButton.addEventListener('click', PLAYBACK_handle_PLAYER_playButton);
    nextButton.addEventListener('click', PLAYBACK_handle_PLAYER_nextButton);
    loopButton.addEventListener('click', PLAYBACK_handle_PLAYER_loopButton);
    return
}

/* adds the filters and changes the icons of the playback controls */
export function shuffleStateChange(state) {
    /* takes in two possible values: on or off */
    const shuffleIcon = document.getElementById("PLAYERshuffleIcon");

    if (state === "on") {
        shuffleIcon.style.filter = "var(--make-svg-secondary)";
        return
    }
    if (state === "off") {
        shuffleIcon.style.filter = "var(--make-svg-black)";
        return
    }
    return
}


export function loopStateChange(state) {
    /* takes in three possible values: off, on, song */
    const loopIcon = document.getElementById("PLAYERloopIcon");

    if (state === "off") {
        //console.log("off state");
        loopIcon.style.filter = "var(--make-svg-black)";
        loopIcon.src = svgImports["icons_loop"];
        return
    }
    if (state === "on") {
        loopIcon.style.filter = "var(--make-svg-secondary)";
        loopIcon.src = svgImports["icons_loop"];
        return
    }
    if (state === "song") {
        loopIcon.style.filter = "var(--make-svg-secondary)";
        loopIcon.src = svgImports["icons_loop_song"];
        return
    }
    return
}

export function playStateChange(state) {
    /* takes in two possible values: playing, paused */
    const playIcon = document.getElementById("PLAYERplayIcon");
    if (state == "playing") {
        playIcon.src = svgImports["icons_pause"];
        return
    }
    if (state == "paused") {
        playIcon.src = svgImports["icons_play"];
        return
    }
    return
}



/* volume controls, i figure they can be lumped in here as well? */
export function setEventListenersForVolume() {
    const playback_volume = localStorage.getItem("PLAYBACK_VOLUME");
    if (playback_volume !== null) {
        update_volumeBar(playback_volume);

        const target = document.getElementById('volumeRangeSlider');
        target.value = playback_volume;
    }

    const rangeInputs = document.querySelectorAll('input[type="range"]#volumeRangeSlider')

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    })
}

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('volumeRangeSlider');
    };

    const volume = target.value;
    update_volumeBar(volume);
}

function update_volumeBar(volume) {
    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function showVolumeIcon(state) {
        /* the only valid inputs are of the four ids below*/
        const volumeStates = ['volumeControlZero', 'volumeControlOne', 'volumeControlTwo', 'volumeControlThree'];

        for (let i = 0; i < 4; i++) {
            let currentState = volumeStates[i]
            if (currentState != state) {
                document.getElementById(currentState).style.visibility = 'hidden';
            }
        }
        document.getElementById(state).style.visibility = "visible";
        return
    }

    localStorage.setItem('PLAYBACK_VOLUME', volume)

    const audio = document.getElementById("audio")
    audio.volume = volume / 100


    if (between(volume, 0, 1)) {
        showVolumeIcon('volumeControlZero');
        audio.volume = 0;
        return
    }
    if (between(volume, 2, 33)) {
        showVolumeIcon('volumeControlOne');
        return
    }
    if (between(volume, 34, 66)) {
        showVolumeIcon('volumeControlTwo');
        return
    }
    if (between(volume, 67, 100)) {
        showVolumeIcon('volumeControlThree');
        return
    }
    return
}