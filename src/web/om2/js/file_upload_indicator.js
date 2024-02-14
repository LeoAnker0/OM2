// file_upload_indicator.js
import uploadIndicatorHTML from '../html/upload_indicator_body.html?raw';
import uploadQueueModalHTML from '../html/upload_queue_body.html?raw';
import { uploadQueue } from './projectView.js';

/*
	no longer using somebody elses complicated code for a loader
*/

// Initialise the upload indicator, so that it can be called from other places
export function init_upload_indicator() {
    // Add the loader display bar html in
    const parentContainer = document.getElementById("MAINcontentContainer");
    const uploadQueueDisplayButton = document.getElementById("uploadQueueButton");
    parentContainer.innerHTML += uploadIndicatorHTML;
    uploadQueueDisplayButton.addEventListener("click", function(event) {
        displayUploadMenu(event);
    })
}

export function display_upload_indicator() {
    const uploadIndicator = document.getElementById("UPLOAD_INDICATOR_container");
    const uploadQueueDisplayButtonContainer = document.getElementById("uploadQueueButtonContainer");
    uploadIndicator.style.opacity = "100%";
    uploadQueueDisplayButtonContainer.style.visibility = "visible";
}

export function hide_upload_indicator() {
    const uploadQueueDisplayButtonContainer = document.getElementById("uploadQueueButtonContainer");
    const uploadIndicator = document.getElementById("UPLOAD_INDICATOR_container");
    uploadIndicator.style.opacity = "";
    uploadQueueDisplayButtonContainer.style.visibility = "";
    hideUploadMenu()
}

export function updateProgress_upload_indicator(progressProcent) {
    //const uploadIndicator = document.getElementById("UPLOAD_INDICATOR_container");
    //uploadIndicator.style.width = `${progressProcent}%`;
}

function displayUploadMenu(event) {
    console.log("displayUploadMenu");

    let uploadQueueContentsString = "";
    for (var i = uploadQueue.length - 1; i >= 0; i--) {
        const fileName = uploadQueue[i].file.name;
        uploadQueueContentsString += `<div>${fileName}</div>`
    }


}

function hideUploadMenu() {
    console.log("hide uploadMenu");
}

/*
uploadQueueModal


previously_focused_element = document.activeElement;
    let X = event.clientX;
    let Y = event.clientY;
    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    if (is_mobile()) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }
    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = uploadQueueModalHTML;
    MENUmodalEnvironment.style.display = "block";

    const uploadQueueModal = document.getElementById('uploadQueueModal');
    let x = (X) + "px";
    let y = (Y) + "px";

    MENUmodalEnvironment.addEventListener('click', menuHide);
    uploadQueueModal.style.left = x;
    uploadQueueModal.style.top = y;

    let interactType = "mouse";

    // set interactType in a sane way. with compatability for webkit and chromium
    if ((event.webkitForce == 1) || (event.webkitForce == 0)) {
        if (event.webkitForce == 0) {
            interactType = "keyboard";
        }
    } else {
        if (event.pointerType !== "mouse") {
            interactType = "keyboard";
        }
    }

    if (interactType == "keyboard") {
        const rect = previously_focused_element.getBoundingClientRect();
        X = rect.left + window.scrollX;
        Y = rect.top + window.scrollY;
        let x = (X) + "px";
        let y = (Y) + "px";
        uploadQueueModal.style.left = x;
        uploadQueueModal.style.top = y;
    }

    uploadQueueModal.innerHTML = params[0].markup;

    const MENUmodalBodyWidth = uploadQueueModal.offsetWidth;
    const MENUmodalBodyHeight = uploadQueueModal.offsetHeight;
    const overflowStates = showElementDetails('uploadQueueModal')

    document.addEventListener('keydown', handleEscapeKey);

    if (overflowStates.xOverflow == true) {
        x = (X - MENUmodalBodyWidth) + "px";
        uploadQueueModal.style.left = x;
    }
    if (overflowStates.yOverflow == true) {
        y = (Y - MENUmodalBodyHeight) + "px";
        uploadQueueModal.style.top = y;
    }

    function handleEscapeKey(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            document.removeEventListener('keydown', handleEscapeKey);
            menuHide_foreign();
        }
    }
*/