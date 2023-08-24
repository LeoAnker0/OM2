export function initProjectView() {
    /* detect if the route is /projects/ or /projects/id, if the first one 
    ask the server nicely for a new project
    else load an existing project */
    setTimeout(() => {
        const currentPath = window.location.pathname;
        console.log(currentPath)
        if (currentPath === "/projects/") {
            console.log("get new id")
        } else {
            console.log("don't get new id")
            loadVisible();
        }


    }, 1);


    function loadVisible() {

        loadContainer();

        const description = "cheese";
        sessionStorage.setItem('description', description);

        onResizeClipOverflowingText();

        descriptionButtonInteractions();

        handleDescriptionMoreText();
        detectOffClicks();
        detectPlayAndShuffleButtons();
        loadInTable();
        loadFileDropArea();
    }
}

export function hideProjectView() {
    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
}

import { projectViewSongsArray } from './sharedArrays.js';



import projectContainer from '../html/projectViewContainer.html?raw';
import { svgImports } from './importAssets.js';

function loadContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = projectContainer;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    const listOfThings = ['PROJECTviewMOREtitle', 'PROJECTviewMOREartist', 'PROJECTviewMOREyear'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'PROJECTviewMOREtitle') {
            value = "UNHEALTHY (Deluxe)"
        } else if (placeholder === 'PROJECTviewMOREartist') {
            value = "Anne-Marie";
        } else if (placeholder === 'PROJECTviewMOREyear') {
            value = "2023";
        } else if (placeholder === 'MOG_checkedDate') {
            value = "checkedIndicator";
        } else if (placeholder === 'MOGI_placeholder_itemID') {
            value = "temporaryIidentifier";
        }

        replacedContent = replacedContent.replace(regex, value);
    }


    document.getElementById(IDofElement).innerHTML = replacedContent;
    return;
}

/* the next two functions are used for getting those last characters of the whole thing to fade out */
function onResizeClipOverflowingText() {
    function throttledResize() {
        let resizeTimer;

        return function() {
            cancelAnimationFrame(resizeTimer);
            resizeTimer = requestAnimationFrame(function() {
                clipOverflowingDescription();

            });
        };
    }

    const throttledHandleResize = throttledResize();
    window.addEventListener('resize', throttledHandleResize);
    clipOverflowingDescription();
}


function clipOverflowingDescription() {
    let description = sessionStorage.getItem('description');


    const spaces = ' '.repeat(120);
    description = description + spaces


    const descriptionContainer = document.getElementById("PROJECTviewDescriptionP");

    const container = descriptionContainer;
    const textContent = description;

    // Split the text content into an array of words
    const words = textContent.split(' ');

    const lastVisibleCharacters = [];
    container.textContent = ''; // Clear the original text content

    for (const word of words) {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        container.appendChild(span);

        const spanRect = span.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (
            spanRect.bottom <= containerRect.bottom &&
            spanRect.top >= containerRect.top &&
            spanRect.left >= containerRect.left &&
            spanRect.right <= containerRect.right
        ) {
            lastVisibleCharacters.unshift(word); // Store words in reverse order
        } else {
            break;
        }
    }

    const visibleWords = lastVisibleCharacters.reverse();
    const visibleWordsString = visibleWords.join(' ');
    const lastTenCharaters = visibleWordsString.slice(-10);
    const withoutLastTenCharacters = visibleWordsString.slice(0, -10);
    const lastTenCharactersArr = lastTenCharaters.split('');

    let newTextContent = withoutLastTenCharacters;

    for (let i = 0; i < lastTenCharactersArr.length; i++) {
        const char = lastTenCharactersArr[i];
        const spanWithCharacter = `<span class="PROJECTopacity${9 - i}">${char}</span>`;
        newTextContent = newTextContent + spanWithCharacter;
    }

    container.innerHTML = newTextContent;
}

/* more description button */
function descriptionButtonInteractions() {
    const moreButton = document.getElementById('PROJECTviewDescriptionMoreButton');
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");

    moreButton.addEventListener('click', function() {
        background.style.display = "grid";
        // Perform any actions you want when the button is pressed
    });
}

function updateDescription() {
    const description = sessionStorage.getItem('description');
    const descriptionp = document.getElementById("PROJECTviewDescriptionP");
    descriptionp.innerText = description;
}

function handleDescriptionMoreText() {
    const description = sessionStorage.getItem('description');

    const editorContainer = document.getElementById("PROJECTviewMOREdescriptionC");
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    editor.innerText = description;
}

function detectOffClicks() {
    const xButton = document.getElementById("PROJECTviewMOREcloseButton");
    xButton.addEventListener('click', function() {
        closeMoreDescription();
    });

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription()
        }
    });
}

function closeMoreDescription() {
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    const newDescription = editor.value;
    sessionStorage.setItem('description', newDescription);

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.style.display = "none";
    updateDescription();
    clipOverflowingDescription();
}

/* project view top buttons */
function detectPlayAndShuffleButtons() {
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");

    playButton.addEventListener("click", function() {
        console.log("playButton pressed")
    });
    shuffleButton.addEventListener("click", function() {
        console.log("shuffleButton pressed")
    });
    menuButton.addEventListener("click", function() {
        displayMenuForTop(event)
    });
}

import { MENUdisplay } from './menu.js';

function displayMenuForTop(event) {
    event.stopPropagation();
    const clickedItem = event.target;

    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_yourUploadedSongs'
    }, {
        displayText: 'Play later',
        optionalSVG: 'None'
    }, {
        displayText: 'Delete',
        optionalSVG: 'None'
    }]

    MENUdisplay(params, event);
    return;
}

import projectViewRowTitles from '../html/projectViewRowTitles.html?raw';
import projectViewRowItem from '../html/projectViewRowItem.html?raw';

/* load in the table */
function loadInTable() {
    const tableEnvironment = document.getElementById("PROJECTview_projectAreaContainer");
    loadInProjectViewRowTitles();
    const projectTable = document.getElementById('PROJECTview-projectTable');

    const songData = [
        /*{
                "img": "https://picsum.photos/30?random=1",
                "songTitle": "Subwoofer Lullaby",
                "artistName": "C418",
                "projectName": "Minecraft - Volume Alpha",
                "songDuration": "3:29"
            }*/
    ]



    for (let i = 0; i < songData.length; i++) {
        songData[i].projectID = i;
        const song = songData[i];
        loadInProjectViewRowItems(song);
    }



    // Attach an event listener to the container
    projectTable.addEventListener('click', function(event) {
        const target = event.target;
        event.stopPropagation();

        // Check if the clicked element is a button within a row
        if (target.tagName === 'BUTTON') {
            const rowContainer = target.closest('.PROJECTview-projectTable-rowContainer');

            if (rowContainer) {
                const rowId = rowContainer.getAttribute('data-row-id');
                displayMenuForRow(event);
                console.log(`Button in row ${rowId} clicked.`);
            }
        }
    });
}

function updateLoadInTable() {
    const projectTable = document.getElementById('PROJECTview-projectTable');
    const newSongData = projectViewSongsArray;
    let songData = [];

    for (let i = 0; i < newSongData.length; i++) {
        //console.log(newSongData[i])
        const songFileName = newSongData[i].name;
        const songName = removeLastExtension(songFileName)
        const size = formatFileSize(newSongData[i].size)

        const newRow = {
            "img": "https://picsum.photos/30",
            "songTitle": songName,
            "artistName": "C418",
            "projectName": size,
            "songDuration": "?"
        }

        songData.push(newRow);
    }


    /* event listeners */
    const parentDiv = document.getElementById("PROJECTview-projectTable");
    const childElements = parentDiv.children;

    for (let i = childElements.length - 1; i > 0; i--) {
        parentDiv.removeChild(childElements[i]);
    }


    for (let i = 0; i < songData.length; i++) {
        songData[i].projectID = i;
        const song = songData[i];
        loadInProjectViewRowItems(song);
    }

    // Attach an event listener to the container
    projectTable.addEventListener('click', function(event) {
        const target = event.target;
        event.stopPropagation();

        // Check if the clicked element is a button within a row
        if (target.tagName === 'BUTTON') {
            const rowContainer = target.closest('.PROJECTview-projectTable-rowContainer');

            if (rowContainer) {
                const rowId = rowContainer.getAttribute('data-row-id');
                displayMenuForRow(event);
                console.log(`Button in row ${rowId} clicked.`);
            }
        }
    });
}

function removeLastExtension(filename) {
    const parts = filename.split('.');
    if (parts.length > 1) {
        parts.pop(); // Remove the last element (extension)
        return parts.join('.');
    }
    return filename;
}

function displayMenuForRow(event) {
    event.stopPropagation();
    const clickedItem = event.target;

    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_yourUploadedSongs'
    }, {
        displayText: 'Play later',
        optionalSVG: 'None'
    }, {
        displayText: 'Delete',
        optionalSVG: 'None'
    }]

    MENUdisplay(params, event);
    return;
}

function loadInProjectViewRowTitles() {
    let IDofElement = "PROJECTview_projectAreaContainer";
    let replacedContent = projectViewRowTitles;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}

function loadInProjectViewRowItems(songData) {
    let IDofElement = "PROJECTview-projectTable";
    let replacedContent = projectViewRowItem;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    const listOfThings = ['PROJECTviewRow_img', 'PROJECTviewRow_songTitle', 'PROJECTviewRow_artistName', 'PROJECTviewRow_projectName', 'PROJECTviewRow_songDuration', 'PROJECTviewRow_projectID'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'PROJECTviewRow_img') {
            value = songData.img
        } else if (placeholder === 'PROJECTviewRow_songTitle') {
            value = songData.songTitle;
        } else if (placeholder === 'PROJECTviewRow_artistName') {
            value = songData.artistName;
        } else if (placeholder === 'PROJECTviewRow_projectName') {
            value = songData.projectName;
        } else if (placeholder === 'PROJECTviewRow_songDuration') {
            value = songData.songDuration;
        } else if (placeholder === 'PROJECTviewRow_projectID') {
            value = songData.projectID;
        }
        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;

}



function loadFileDropArea() {
    const dropArea = document.getElementById("PROJECTview_dropArea");

    // Prevent default behavior for drag-and-drop events
    dropArea.addEventListener("dragenter", (e) => {
        e.preventDefault();
        dropArea.classList.add("dragover");
    });

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("dragover");
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.classList.remove("dragover");

        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // Handle selected files when files are chosen using the file input
    dropArea.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "audio/*"; // Specify accepted file types here
        fileInput.multiple = true;
        fileInput.addEventListener("change", () => {
            const files = fileInput.files;
            handleFiles(files);
        });
        fileInput.click();
    });

    // Handle uploaded files
    function handleFiles(files) {
        for (const file of files) {
            projectViewSongsArray.push(file);
            //console.log(file);
        }
        //console.log(projectViewSongsArray);
        updateLoadInTable();
        uploadFiles(files);
    }
}

async function uploadFileWithProgress(file, uploadBox, fileNameLabel) {
    const formData = new FormData();
    formData.append('file', file);

    const jwtToken = localStorage.getItem('JWT');

    formData.append('jwt', jwtToken);

    const xhr = new XMLHttpRequest();

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progressFill = document.createElement('div');
    progressFill.classList.add('progress-fill');
    progressBar.appendChild(progressFill);
    uploadBox.appendChild(progressBar);

    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentCompleted = (event.loaded / event.total) * 100;
            progressFill.style.width = percentCompleted + "%";
            if (percentCompleted === 100) {
                progressBar.classList.add('opacity-animation');
            }
        }
    };

    xhr.onload = function() {
        progressBar.classList.remove('opacity-animation');
        progressBar.style.opacity = "1";
        progressFill.classList.add('complete');
        fileNameLabel.textContent = `${file.name}`;

        setTimeout(() => {
            uploadBox.classList.add('complete');
        }, 2000); // Adjust the time (in milliseconds) as needed
        setTimeout(() => {
            uploadBox.parentNode.removeChild(uploadBox);
        }, 3000); // Adjust the time (in milliseconds) as needed
    };

    xhr.onerror = function() {
        progressBar.classList.remove('opacity-animation');
        progressBar.style.opacity = "1";
        progressFill.style.backgroundColor = "#e74c3c"; // Set a color to indicate error
        setTimeout(() => {
            uploadBox.parentNode.removeChild(uploadBox);
        }, 3000); // Adjust the time (in milliseconds) as needed
    };

    xhr.open('POST', 'https://om2apis.la0.uk/files/upload/audio/', true);
    xhr.send(formData);
}

async function uploadFiles(files) {
    const uploadsContainer = document.getElementById('uploadsContainer');

    for (const file of files) {
        const uploadBox = document.createElement('div');
        uploadBox.classList.add('upload-box');

        const fileNameLabel = document.createElement('div');
        fileNameLabel.classList.add('PROJECTview_upload_nameLabel');
        fileNameLabel.textContent = `${file.name}`;
        uploadBox.appendChild(fileNameLabel);

        uploadsContainer.appendChild(uploadBox);

        await uploadFileWithProgress(file, uploadBox, fileNameLabel);
    }
}

// Format file size
function formatFileSize(size) {
    if (size < 1024) {
        return `${size} B`;
    } else if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
    } else {
        return `${(size / 1024 / 1024).toFixed(2)} MB`;
    }
}
































/**/