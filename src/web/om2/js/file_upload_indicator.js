// file_upload_indicator.js
import uploadIndicatorHTML from '../html/upload_indicator_body.html?raw';
import { uploadQueue } from './projectView.js';
import { showElementDetails } from './menu.js';
import { formatFileSizeBytes } from './om2.js';

/*
    no longer using somebody elses complicated code for a loader
*/

const uploadQueueHTML = `
<div class="UPLOADQUEUE-containerL2">
    <div class="UPLOADQUEUE-top">
        <div class="UPLOADQUEUE-top-text">
            <span class="UPLOADQUEUE-top-text-title">Upload Queue</span>
            <span class="UPLOADQUEUE-top-text-clear" id="UPLOADQUEUEclearQueueButton">Cancel</span>
        </div>
    </div>
    <div class="UPLOADQUEUE-bottom" id="UPLOADQUEUEbottomContainer">
        <div class="UPLOADQUEUE-bottom-currentlyUploadingItem">
            <div class="fileName" id="UPLOADQUEUEBOTTOM_songName">Song.mp3</div>
            <div class="estimatedSize">Estimated Size - <span id="UPLOADQUEUEBOTTOM_fileSize">200mb</span></div>
            <div class="percentUploaded">
                <div id="specificChart" class="donut-size">
                    <div class="pie-wrapper">
                        <span class="label">
                            <span class="num">0</span><span class="smaller">%</span>
                        </span>
                        <div class="pie">
                            <div class="left-side half-circle"></div>
                            <div class="right-side half-circle"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

let menuVisible = false;

// Initialise the upload indicator, so that it can be called from other places
export function init_upload_indicator() {
    // Add the loader display bar html in
    const parentContainer = document.getElementById("MAINcontentContainer");
    const uploadQueueModal = document.getElementById("uploadQueueModal");
    const uploadQueueDisplayButton = document.getElementById("uploadQueueButton");
    parentContainer.innerHTML += uploadIndicatorHTML;
    uploadQueueDisplayButton.addEventListener("click", function(event) {
        if (menuVisible == false) {
            displayUploadMenu(event);
        } else {
            hideUploadMenu();
        }
    })

    uploadQueueModal.innerHTML = uploadQueueHTML;
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

    if (menuVisible == true && (uploadQueue.length > 0)) {} else {
        hideUploadMenu()
    }
}

export function updateProgress_upload_indicator(progressProcent) {
    /* process the data for the top item*/
    const UPLOADQUEUEBOTTOM_songName = document.getElementById("UPLOADQUEUEBOTTOM_songName")
    const UPLOADQUEUEBOTTOM_fileSize = document.getElementById("UPLOADQUEUEBOTTOM_fileSize")
    if (uploadQueue.length > 0) {
        UPLOADQUEUEBOTTOM_songName.innerHTML = uploadQueue[0].file.name
        UPLOADQUEUEBOTTOM_fileSize.innerHTML = formatFileSizeBytes((uploadQueue[0].file.size) * 1.75);
        updateDonutChart(document.getElementById('specificChart'), progressProcent, true);

        /* remove all but the first child of UPLOADQUEUEbottomContainer*/
        const UPLOADQUEUE_bottom_container = document.getElementById("UPLOADQUEUEbottomContainer");
        while (UPLOADQUEUE_bottom_container.childNodes.length > 2) {
            UPLOADQUEUE_bottom_container.removeChild(UPLOADQUEUE_bottom_container.lastChild);
        }

        let remainingItems = "";
        for (var i = uploadQueue.length - 1; i >= 1; i--) {
            const fileName = uploadQueue[i].file.name;
            const fileSize = formatFileSizeBytes((uploadQueue[i].file.size) * 1.75);
            remainingItems += `<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${fileName}</div><div class="itemSize">${fileSize}</div></div>`;
        }

        UPLOADQUEUE_bottom_container.innerHTML += remainingItems;
    }

}

let previously_focused_element;

function displayUploadMenu(event) {
    menuVisible = true;
    previously_focused_element = document.activeElement;
    let X = event.clientX;
    let Y = event.clientY;

    const uploadQueueModal = document.getElementById('uploadQueueModal');
    let x = (X) + "px";
    let y = (Y) + "px";

    MENUmodalEnvironment.addEventListener('click', hideUploadMenu);
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


    const MENUmodalBodyWidth = uploadQueueModal.offsetWidth;
    const MENUmodalBodyHeight = uploadQueueModal.offsetHeight;
    const overflowStates = showElementDetails('uploadQueueModal')

    // Display the menu 
    uploadQueueModal.style.visibility = "visible";

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
            hideUploadMenu();
        }
    }
}

function hideUploadMenu() {
    menuVisible = false;

    const uploadQueueModal = document.getElementById('uploadQueueModal');
    uploadQueueModal.style.visibility = "";
}

/*
    Simple donut progress bar comes from https://codepen.io/peavy/pen/NzYVjw
    and does what it says on the tin,
    by @peavy on codepen
*/

// Function to update the donut chart
function updateDonutChart(el, percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));

    var pie = el.querySelector('.pie');
    var rightSide = el.querySelector('.right-side');

    if (percent > 50) {
        pie.style.clip = 'rect(auto, auto, auto, auto)';
        rightSide.style.transform = 'rotate(180deg)';
    } else {
        pie.style.clip = 'rect(0, 1em, 1em, 0.5em)';
        rightSide.style.transform = 'rotate(0deg)';
    }
    if (donut) {
        rightSide.style.borderWidth = '0.1em';
        el.querySelector('.left-side').style.borderWidth = '0.1em';
        el.querySelector('.shadow').style.borderWidth = '0.1em';
    } else {
        rightSide.style.borderWidth = '0.5em';
        el.querySelector('.left-side').style.borderWidth = '0.5em';
        el.querySelector('.shadow').style.borderWidth = '0.5em';
    }
    el.querySelector('.num').textContent = percent;
    el.querySelector('.left-side').style.transform = 'rotate(' + deg + 'deg)';
}