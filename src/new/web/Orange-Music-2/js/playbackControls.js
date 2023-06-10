/* JS for the playback controls */

/* adds in the event listeners for the play back controls */
export function setEventListenersForPlaybackcontrols() {
    /* buttons */
    const shuffleButton = document.getElementById("PLAYERshuffleButton");
    const backButton = document.getElementById("PLAYERbackButton");
    const playButton = document.getElementById("PLAYERplayButton");
    const nextButton = document.getElementById("PLAYERnextButton");
    const loopButton = document.getElementById("PLAYERloopButton");

    /* icons */
    const playIcon = document.getElementById("PLAYERplayIcon");
    const loopIcon = document.getElementById("PLAYERloopIcon");

    /* event listeners */
    shuffleButton.addEventListener('click', shuffleClicked);
    backButton.addEventListener('click', backClicked);
    playButton.addEventListener('click', playClicked);
    nextButton.addEventListener('click', nextClicked);
    loopButton.addEventListener('click', loopClicked);
    return


}

/* function monkeys, that do something, and that in the future will just call other functions... ( from an import ) */
function shuffleClicked() {
    console.log("shuffleClicked");
    return
}

function backClicked() {
    console.log("backClicked");
    return
}

function playClicked() {
    console.log("playClicked");
    return
}

function nextClicked() {
    console.log("nextClicked");
    return
}

function loopClicked() {
    console.log("loopClicked");
    return
}


/* adds the filters and changes the icons of the playback controls */
export function shuffleStateChange(state) {
    /* takes in two possible values: on or off */
    const shuffleButton = document.getElementById("PLAYERshuffleButton");

    if (state === "on") {
        //console.log("filter was added");
        shuffleButton.style.filter = "var(--make-svg-orange)";
        return
    }
    if (state === "off") {
        //console.log("filter was removed");
        shuffleButton.style.filter = "var(--make-svg-grey)";
        return
    }
    return

}

import { svgImports } from './importAssets.js';

export function loopStateChange(state) {
    /* takes in three possible values: off, on, song */
    const loopButton = document.getElementById("PLAYERloopButton");
    const loopIcon = document.getElementById("PLAYERloopIcon");

    if (state === "off") {
        //console.log("off state");
        loopButton.style.filter = "var(--make-svg-grey)";
        loopIcon.src = svgImports["icons_loopButton"];
        return
    }
    if (state === "on") {
        //console.log("on state");
        loopButton.style.filter = "var(--make-svg-orange)";
        loopIcon.src = svgImports["icons_loopButton"];

        return
    }
    if (state === "song") {
        //console.log("song state");
        loopButton.style.filter = "var(--make-svg-orange)";
        loopIcon.src = svgImports["icons_derpy"];
        return
    }
    return
}

export function playStateChange(state) {
    /* takes in two possible values: playing, paused */
    const playIcon = document.getElementById("PLAYERplayIcon");
    if (state === "playing") {
        playIcon.src = svgImports["icons_derpy"];

        return
    }
    if (state === "paused") {
        playIcon.src = svgImports["icons_playButtonV2"];
        return
    }
    return

}



/* volume controls, i figure they can be lumped in here as well? */
export function setEventListenersForVolume() {
    const rangeInputs = document.querySelectorAll('input[type="range"]')

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    })
}

function handleInputChange(e) {
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

    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('volumeRangeSlider')
    }
    const volume = target.value


    if (between(volume, 0, 1)) {
        showVolumeIcon('volumeControlZero');
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






/*  */