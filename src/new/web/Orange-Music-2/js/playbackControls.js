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


}

/* function monkeys, that do something, and that in the future will just call other functions... ( from an import ) */
function shuffleClicked() {
    console.log("shuffleClicked");
}

function backClicked() {
    console.log("backClicked");
}

function playClicked() {
    console.log("playClicked");
}

function nextClicked() {
    console.log("nextClicked");
}

function loopClicked() {
    console.log("loopClicked");
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










/**/