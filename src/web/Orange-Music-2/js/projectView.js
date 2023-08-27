/* so i have decided that the generation of the new id should be 
done somewhere else, and now that is a reality, so now the function
that generates should be here
*/

import { handleRoute } from '../main.js';

export async function createNewProjectID() {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token
        };

        const response = await fetch('https://om2apis.la0.uk/projects/new-project-id/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });

        const data = await response.json();
        const projectID = data.projectID;

        const newRoute = `/projects/${projectID}`
        handleRoute(newRoute);
    } catch (error) {
        console.error('Error:', error);
    }
}


async function getProjectDetails(project_id) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token,
            "project_id": project_id
        };

        const response = await fetch('https://om2apis.la0.uk/projects/get-project-details/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });

        const data = await response.json();
        const projectDetailsRecord = data.project_details
        return projectDetailsRecord;

    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateProjectDetails(project_id, column, newInfo) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token,
            "project_id": project_id,
            "column_to_be_updated": column,
            "new_data": newInfo
        };

        const response = await fetch('https://om2apis.la0.uk/projects/update_details/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });

        const data = await response.json();
        const update = data["updated"]
        if (update === "success") {
            return
        } else {
            console.log("there was an error")
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function initProjectView(projectID) {
    /* detect if the route is /projects/ or /projects/id, if the first one 
    ask the server nicely for a new project
    else load an existing project */
    setTimeout(async () => {
        const currentPath = window.location.pathname;
        const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string

        const details = await getProjectDetails(project_id);
        details.project_id = project_id
        loadVisible(details);
        set_event_listeners_for_titles(details);
    }, 1);


    function loadVisible(details) {

        loadContainer(details);

        const description = details.description;
        sessionStorage.setItem('description', description);

        onResizeClipOverflowingText();

        descriptionButtonInteractions();

        handleDescriptionMoreText();
        detectOffClicks(details);
        detectPlayAndShuffleButtons(details);
        loadInTable(details);
        loadFileDropArea(details);
    }
}

export function hideProjectView() {
    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
}

import { projectViewSongsArray } from './sharedArrays.js';



import projectContainer from '../html/projectViewContainer.html?raw';
import { svgImports } from './importAssets.js';

function set_event_listeners_for_titles(details) {
    const titleH1 = document.getElementById('PROJECTviewDisplayTitleH1');

    titleH1.addEventListener('blur', function(event) {
        const newTitleH1 = titleH1.innerText
        console.log('Content changed:', newTitleH1);
        updateProjectDetails(details.project_id, "project_name", newTitleH1)
    });

    /*
    H3 isn't meant to be set by the user, since it is by usernames, however the option
    does now exist

    const titleH3 = document.getElementById("PROJECTviewDisplayTitleH3");

    titleH3.addEventListener('blur', function(event) {
        const newTitleH3 = titleH3.innerText
        console.log('Content changed:', newTitleH3);
    });

    */

}

function loadContainer(details) {
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
            value = details.project_name
        } else if (placeholder === 'PROJECTviewMOREartist') {
            value = details.project_contributors;
        } else if (placeholder === 'PROJECTviewMOREyear') {
            value = details.time_created;
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

function detectOffClicks(details) {
    const xButton = document.getElementById("PROJECTviewMOREcloseButton");
    xButton.addEventListener('click', function() {
        closeMoreDescription(details);
    });

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription(details)
        }
    });
}

function closeMoreDescription(details) {
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    const newDescription = editor.value;
    sessionStorage.setItem('description', newDescription);

    updateProjectDetails(details.project_id, "description", newDescription)

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.style.display = "none";
    updateDescription();
    clipOverflowingDescription();
}

import { PLAYBACK_handle_input_project_details_array_with_start_playback } from './playback.js';

/* project view top buttons */
async function detectPlayAndShuffleButtons(details) {
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");


    const project_details = await getProjectDetails(details.project_id);


    playButton.addEventListener("click", function() {
        //console.log("playButton pressed")
        PLAYBACK_handle_input_project_details_array_with_start_playback(project_details);
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
function loadInTable(details) {
    const tableEnvironment = document.getElementById("PROJECTview_projectAreaContainer");
    loadInProjectViewRowTitles();
    const projectTable = document.getElementById('PROJECTview-projectTable');


    const jsonDetails = details;
    const songsJsonString = jsonDetails.project_json;

    if (songsJsonString !== "{}") {
        const songsJson = JSON.parse(songsJsonString).songs_json;
        const songData = [];

        for (const song of songsJson) {
            songData.push({
                "img": jsonDetails.picture_url,
                "songTitle": song.song_name,
                "artistName": jsonDetails.project_contributors,
                "projectName": "cheese",
                "songDuration": `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`,
                "song_sequence": song.song_sequence,
                "url": song.url
            })
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

}

async function updateLoadInTable() {
    const projectTable = document.getElementById('PROJECTview-projectTable');

    // do a fetch request for the new table state
    const currentPath = window.location.pathname;
    const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string

    const details = await getProjectDetails(project_id);
    details.project_id = project_id

    const jsonDetails = details;
    const songsJsonString = jsonDetails.project_json;

    const songsJson = JSON.parse(songsJsonString).songs_json;
    const songData = [];

    for (const song of songsJson) {
        songData.push({
            "img": jsonDetails.picture_url,
            "songTitle": song.song_name,
            "artistName": jsonDetails.project_contributors,
            "projectName": "cheese",
            "songDuration": `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`,
            "song_sequence": song.song_sequence,
            "url": song.url
        })
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

function loadFileDropArea(details) {
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
        handleFiles(files, details);
    });

    // Handle selected files when files are chosen using the file input
    dropArea.addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "audio/*"; // Specify accepted file types here
        fileInput.multiple = true;
        fileInput.addEventListener("change", () => {
            const files = fileInput.files;
            handleFiles(files, details);
        });
        fileInput.click();
    });

    // Handle uploaded files
    function handleFiles(files, details) {
        for (const file of files) {
            projectViewSongsArray.push(file);
            //console.log(file);
        }
        //console.log(projectViewSongsArray);
        uploadFiles(files, details);
    }
}

async function uploadFileWithProgress(file, uploadBox, fileNameLabel, details) {
    const formData = new FormData();
    formData.append('file', file);

    formData.append("project_id", details.project_id);

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
        updateLoadInTable();

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

async function uploadFiles(files, details) {
    const uploadsContainer = document.getElementById('uploadsContainer');

    for (const file of files) {
        const uploadBox = document.createElement('div');
        uploadBox.classList.add('upload-box');

        const fileNameLabel = document.createElement('div');
        fileNameLabel.classList.add('PROJECTview_upload_nameLabel');
        fileNameLabel.textContent = `${file.name}`;
        uploadBox.appendChild(fileNameLabel);

        uploadsContainer.appendChild(uploadBox);

        await uploadFileWithProgress(file, uploadBox, fileNameLabel, details);
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