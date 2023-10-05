import { PLAYBACK_handle_input_project_details_array_with_start_playback, PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle } from './playback.js';
import { is_mobile, formatTimeDaysDelta, formatTimeDaysToHuman, formatFileSizeBytes } from './om2.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { updateProjectDetails, getProjectDetails } from './network_requests.js';
import projectViewRowTitles from '../html/projectViewRowTitles.html?raw';
import projectViewRowItem from '../html/projectViewRowItem.html?raw';
import projectContainer from '../html/projectViewContainer.html?raw';
import { projectViewSongsArray } from './sharedArrays.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';

const uploadQueue = [];
let isUploading = false;

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
        updateDescription_display();
        descriptionButtonInteractions();
        handleDescriptionMoreText();
        detectOffClicks(details);
        detectPlayAndShuffleButtons(details);
        loadInTable(details);
        loadFileDropArea(details);
        detect_when_image_is_no_longer_visible();
        update_mobile_header_project_title(details.project_name)
        detect_when_image_is_interacted(details.project_id);
    }
}

export function hideProjectView() {
    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
}

export async function PROJECTVIEW_update() {
    updateLoadInTable();

    /* update the image src of the top image. */
    const currentPath = window.location.pathname;
    const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string
    const imageTag = document.getElementById("PROJECTviewDisplayImage_imgTag");
    const details = await getProjectDetails(project_id);
    const newImageUrl = details.picture_url;
    const image = `${MAIN_CONST_EXPORT_mediaPath}/${newImageUrl}/5/`;
    imageTag.src = image;
}

function set_event_listeners_for_titles(details) {
    const titleH1 = document.getElementById('PROJECTviewDisplayTitleH1');
    const titleH3 = document.getElementById("PROJECTviewDisplayTitleH3");

    titleH1.addEventListener('blur', function(event) {
        const newTitleH1 = titleH1.innerText
        update_mobile_header_project_title(newTitleH1);
        updateProjectDetails(details.project_id, "project_name", newTitleH1)
    });

    titleH3.addEventListener('blur', function(event) {
        const newTitleH3 = titleH3.innerText
        updateProjectDetails(details.project_id, "project_contributors", newTitleH3)
    });
}

function loadContainer(details) {
    let IDofElement = "MAINcontentPages";
    let replacedContent = projectContainer;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    const listOfThings = ['PROJECTviewMOREtitle', 'PROJECTviewMOREartist', 'PROJECTviewMOREyear', 'PROJECTviewDisplayImage'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'PROJECTviewMOREtitle') {
            value = details.project_name
        } else if (placeholder === 'PROJECTviewMOREartist') {
            value = details.project_contributors;
        } else if (placeholder === 'PROJECTviewMOREyear') {
            const formatted_time = formatTimeDaysToHuman(details.time_created);
            value = formatted_time;
        } else if (placeholder === 'MOG_checkedDate') {
            value = "checkedIndicator";
        } else if (placeholder === 'MOGI_placeholder_itemID') {
            value = "temporaryIidentifier";
        } else if (placeholder === "PROJECTviewDisplayImage") {
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${details.picture_url}/5/`;
            value = image
        }

        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById(IDofElement).innerHTML = replacedContent;
    return;
}

function updateDescription_display() {
    let description = sessionStorage.getItem('description');
    const descriptionContainer = document.getElementById("PROJECTviewDescriptionP");
    descriptionContainer.innerText = description;
}

/* more description button */
function descriptionButtonInteractions() {
    const moreButton = document.getElementById('PROJECTviewDescriptionMoreButton');
    const descriptionBox = document.getElementById("PROJECTviewDisplayDescription");
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    const main = document.querySelector("main");

    function displayMenu() {
        background.style.display = "grid";

        // check if mobile
        if (is_mobile()) {
            main.style.zIndex = "40";
        }
    };

    moreButton.addEventListener('click', function() {
        displayMenu();
        // Perform any actions you want when the button is pressed
    });

    descriptionBox.addEventListener('dblclick', function() {
        displayMenu();
    })

    let lastTapTime = 0;
    descriptionBox.addEventListener('touchend', function(event) {
        const currentTime = new Date().getTime();
        const timeSinceLastTap = currentTime - lastTapTime;

        if (timeSinceLastTap < 300) {
            event.stopPropagation();
            displayMenu();
        }
        lastTapTime = currentTime;
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
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    xButton.addEventListener('click', function() {
        closeMoreDescription(details);
    });

    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription(details)
        }
    });
}

function closeMoreDescription(details) {
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");
    const newDescription = editor.value;
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    const main = document.querySelector("main");

    sessionStorage.setItem('description', newDescription);
    updateProjectDetails(details.project_id, "description", newDescription)
    background.style.display = "none";
    updateDescription();
    main.style.zIndex = "1";
}

/* project view top buttons */
async function detectPlayAndShuffleButtons(details) {
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");
    const mobileMenuButton = document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");
    const homeButton = document.getElementById("PROJECTviewMobileStickyHeaderBackButton")
    const project_details = await getProjectDetails(details.project_id);

    playButton.addEventListener("click", function() {
        //console.log("playButton pressed")
        PLAYBACK_handle_input_project_details_array_with_start_playback(project_details);
    });
    shuffleButton.addEventListener("click", function() {
        PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle(project_details);
    });
    menuButton.addEventListener("click", function() {
        displayMenuForTop(event, project_details)
    });
    mobileMenuButton.addEventListener("click", function() {
        displayMenuForTop(event, project_details)
    });

    homeButton.addEventListener("click", () => {
        handleRoute("/")
    })
}


function displayMenuForTop(event, project_details) {
    event.stopPropagation();
    const clickedItem = event.target;
    const currentPath = window.location.pathname;
    const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string
    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playlist',
        optionalParams: {
            PROJECT_ID: project_id,
            QUEUE_POSITION: "next"
        },
        function: 'PLAYBACK_add_songs_to_queue'
    }, {
        displayText: 'Play later',
        optionalSVG: 'icons_playlist',
        optionalParams: {
            PROJECT_ID: project_id,
            QUEUE_POSITION: "later"

        },
        function: 'PLAYBACK_add_songs_to_queue'
    }, {
        displayText: 'Delete',
        optionalSVG: 'None',
        function: 'PROJECT_VIEW_delete_project',
        optionalParams: {
            PROJECT_ID: project_id
        },
        colour: "hsl(0, 100%, 55%)"
    }]

    MENUdisplay(params, event);
    return;
}

export function PROJECT_VIEW_receive_MENU_delete_request(project_id) {
    if (window.confirm("Are you sure you want to delete this project?")) {
        const newRoute = "/";
        deleteProjectFromServer(project_id);
        menuHide_foreign();
        handleRoute(newRoute);
    } else {
        menuHide_foreign();
    }
}

async function deleteProjectFromServer(project_id) {
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
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/delete_project/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });
        const data = await response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}

/* load in the table */
function loadInTable(details) {
    const tableEnvironment = document.getElementById("PROJECTview_projectAreaContainer");
    loadInProjectViewRowTitles();

    const projectTable = document.getElementById('PROJECTview-projectTable');
    const jsonDetails = details;
    const songsJsonString = jsonDetails;

    if (songsJsonString !== "{}") {
        const songsJson = songsJsonString.songs_json;
        const songData = [];

        if (songsJson) {
            for (const song of songsJson) {
                songData.push({
                    "img": jsonDetails.picture_url,
                    "songTitle": song.song_name,
                    "artistName": jsonDetails.project_contributors,
                    "projectName": formatFileSizeBytes(song.song_size),
                    "songDuration": `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`,
                    "song_sequence": song.song_sequence,
                    "url": song.url
                })
            }
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
                }
            }
        });
    }
}

async function updateLoadInTable() {
    const projectTable = document.getElementById('PROJECTview-projectTable');
    const currentPath = window.location.pathname;
    const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string
    const details = await getProjectDetails(project_id);
    details.project_id = project_id

    const jsonDetails = details;
    const songsJsonString = jsonDetails.project_json;
    const songsJson = JSON.parse(songsJsonString).songs_json;
    const songData = [];

    if (Array.isArray(songsJson)) {
        for (const song of songsJson) {
            songData.push({
                "img": jsonDetails.picture_url,
                "songTitle": song.song_name,
                "artistName": jsonDetails.project_contributors,
                "projectName": formatFileSizeBytes(song.song_size),
                "songDuration": `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`,
                "song_sequence": song.song_sequence,
                "url": song.url
            });
        }
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
        displayText: 'Not Selected',
        optionalSVG: 'icons_yourUploadedSongs',
        function: 'TEST'
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
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${songData.img}/3/`;
            value = image;
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
        fileInput.accept = "audio/*";
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
        }
        uploadFiles(files, details);
    }
}

async function uploadFileWithProgress(file, uploadBox, fileNameLabel, details) {
    const formData = new FormData();
    const jwtToken = localStorage.getItem('JWT');
    const xhr = new XMLHttpRequest();
    const progressBar = document.createElement('div');
    const progressFill = document.createElement('div');

    isUploading = true;
    formData.append('file', file);
    formData.append("project_id", details.project_id);
    formData.append('jwt', jwtToken);
    progressBar.classList.add('progress-bar');
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

    xhr.onload = async function() {
        progressBar.classList.remove('opacity-animation');
        progressBar.style.opacity = "1";
        progressFill.classList.add('complete');
        fileNameLabel.textContent = `${file.name}`;
        updateLoadInTable();

        /* add next file to the queue */
        isUploading = false;
        if (uploadQueue.length > 0) {
            const current_file = uploadQueue.shift();
            await uploadFileWithProgress(current_file.file, current_file.uploadBox, current_file.fileNameLabel, current_file.details);
        }

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

    xhr.open('POST', `${MAIN_CONST_EXPORT_apiPath}/files/upload/audio/`, true);
    xhr.send(formData);
}


async function uploadFiles(files, details) {
    const uploadsContainer = document.getElementById('uploadsContainer');

    for (const file of files) {
        /* styling */
        const uploadBox = document.createElement('div');
        const fileNameLabel = document.createElement('div');
        uploadBox.classList.add('upload-box');
        fileNameLabel.classList.add('PROJECTview_upload_nameLabel');
        fileNameLabel.textContent = `${file.name}`;
        uploadBox.appendChild(fileNameLabel);
        uploadsContainer.appendChild(uploadBox);

        /* add item to queue */
        const new_file_item = {
            file: file,
            uploadBox: uploadBox,
            fileNameLabel: fileNameLabel,
            details: details
        };
        uploadQueue.push(new_file_item)

        if (!isUploading) {
            const current_file = uploadQueue.shift();
            await uploadFileWithProgress(current_file.file, current_file.uploadBox, current_file.fileNameLabel, current_file.details);
        }
    }
}

function update_mobile_header_project_title(project_name) {
    const headerTitleText = document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");
    headerTitleText.innerText = project_name;
}

/* the top bar of the mobile project view */
function detect_when_image_is_no_longer_visible() {
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });
    const targetElement = document.querySelector('.PROJECTviewDisplayImage');
    const header = document.getElementById("PROJECTviewMobileStickyHeader");
    const headerTitleText = document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");

    observer.observe(targetElement);

    function callback(entries, observer) {
        entries.forEach(entry => {
            /* when mobile and above image */
            if ((entry.isIntersecting) && (is_mobile())) {
                header.style.backdropFilter = "none";

                header.style.backgroundColor = "transparent";
                headerTitleText.style.visibility = "hidden";
            }
            /* when desktop and above image */
            else if ((entry.isIntersecting) && (!is_mobile())) {
                header.style.backdropFilter = "var(--PROJECTviewDesktopHeaderFilter)";
                headerTitleText.style.visibility = "hidden";
            }

            /* when desktop and below image */
            else if ((!entry.isIntersecting) && (!is_mobile())) {
                header.style.backdropFilter = "var(--PROJECTviewDesktopHeaderFilter)";
                headerTitleText.style.visibility = "hidden";
            }

            /* when mobile and below image */
            else if ((!entry.isIntersecting) && (is_mobile())) {
                header.style.backdropFilter = "blur(15px)";

                header.style.backgroundColor = "var(--background-transparent)";
                headerTitleText.style.visibility = "visible";
            }
        });
    }
}

function detect_when_image_is_interacted(project_id) {
    const image = document.getElementById("PROJECTviewDisplayImage");
    let touchStartTimestamp;
    let pressTimer;

    // Add touchstart event listener to record the touch start timestamp
    image.addEventListener('touchstart', function(e) {
        touchStartTimestamp = e.timeStamp;

        // Start the timer for long press
        pressTimer = setTimeout(function() {
            // Long press detected
            show_image_options(e, project_id);
        }, 500); // Adjust the time (in milliseconds) for a long press as needed
    });

    // Add touchend event listener to detect when the touch ends
    image.addEventListener('touchend', function(e) {
        // Calculate the duration of the touch event
        const touchEndTimestamp = e.timeStamp;
        const touchDuration = touchEndTimestamp - touchStartTimestamp;

        // Clear the long press timer
        clearTimeout(pressTimer);
    });

    image.addEventListener('dblclick', function(e) {
        show_image_options(e, project_id);
    })

    function show_image_options(e, project_id) {
        //console.log("Long press detected on PROJECTviewDisplayImage", e, project_id);
        displayMenuImage(e, project_id);
    }
}

function displayMenuImage(event, project_id) {
    const clickedItem = event.target;
    const menu_type = "update_project_image";
    const params = {
        project_id: project_id
    }

    event.stopPropagation();

    MENUdisplay(params, event, menu_type);
    return;
}





/**/