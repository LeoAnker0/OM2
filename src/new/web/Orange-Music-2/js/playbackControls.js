/* JS for the playback controls */

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