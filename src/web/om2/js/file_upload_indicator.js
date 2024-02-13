// file_upload_indicator.js
import uploadIndicatorHTML from '../html/upload_indicator_body.html?raw';
import { uploadQueue } from './projectView.js';
import { MENUdisplay } from './menu.js';

/*
	The basic loader design is by @Rainedr0p on codepen, and potentially 
	also on github (they don't have any public repos/commits)

	https://codepen.io/Rainedr0p/pen/oNXyeVY

	And then I have just tweaked it to my uses
*/

// Initialise the upload indicator, so that it can be called from other places
export function init_upload_indicator() {
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
    const uploadIndicator = document.getElementById("UPLOAD_INDICATOR_container");
    uploadIndicator.style.width = `${progressProcent}%`;
}

function displayUploadMenu(event) {
    let uploadQueueContentsString = "";
    for (var i = uploadQueue.length - 1; i >= 0; i--) {
        const fileName = uploadQueue[i].file.name;
        uploadQueueContentsString += `<div>${fileName}</div>`
    }


    const params = [{
        markup: uploadQueueContentsString
    }]

    MENUdisplay(params, event, "upload_queue");
}

function hideUploadMenu() {}