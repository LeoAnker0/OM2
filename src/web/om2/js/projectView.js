import { is_mobile, formatTimeDaysDelta, formatTimeDaysToHuman, formatFileSizeBytes, getPositionInParentElement, is_odd, debounce, changeColourOnHover, getHexColorFromCssVariable, is_dark } from './om2.js';
import { PLAYBACK_handle_input_project_details_array_with_start_playback, PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle } from './playback.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { updateProjectDetails, getProjectDetails } from './network_requests.js';
import { detect_when_image_is_interacted } from './image_upload_listeners.js';
import projectViewRowTitles from '../html/projectViewRowTitles.html?raw';
import projectViewRowItem from '../html/projectViewRowItem.html?raw';
import projectContainer from '../html/projectViewContainer.html?raw';
import { projectViewSongsArray } from './sharedArrays.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';

const uploadQueue = [];
let isUploading = false;
let UserIsEditor = true;
let Details;

export async function initProjectView(projectID) {
    /* This alteration will load in certain visible elements IE the frame
    before the network request has been completed, this means that the whole 
    will seem responsive, even if there's an issue getting the data.
    Plus it leaves it open to making fancier 'waiting' screens, with those sort
    of fake loading bars on top of the different elements.
    */
    let fakeDetails;
    if (is_dark() == true) {
        fakeDetails = {
            ProjectName: "Loading...",
            ProjectContributors: "This might take a while",
            TimeCreated: 0,
            PictureURL: "static/loading_img_text_dark",
        }
    } else {

        fakeDetails = {
            ProjectName: "Loading...",
            ProjectContributors: "This might take a while",
            TimeCreated: 0,
            PictureURL: "static/loading_img_text_light",
        }


    }
    loadContainer(fakeDetails);

    sessionStorage.setItem('description', "Wonderful notes are loading...");
    updateDescription_display();

    const homeButton = document.getElementById("PROJECTviewMobileStickyHeaderBackButton")
    homeButton.addEventListener("click", () => {
        handleRoute("/")
    })

    /*
    setTimeout(async () => {
    }, 1);

    setTimeout(() => {
    }, 1);
    */


    const result = await getProjectDetails(projectID);

    if (result == "") {
        console.log(result)
    } else {
        const details = JSON.parse(result);
        details.ProjectID = projectID;

        Details = details;
        loadVisible();
        set_event_listeners_for_titles();
    }


    function loadVisible() {
        if (UserIsEditor === false) {
            // Delete the file drop area
            const fileDropArea = document.getElementById("PROJECTview_upload_area_files_upload_box");
            fileDropArea.remove();

        }
        //Load real details, instead of temp
        updateTempVisible();

        sessionStorage.setItem('description', Details.Description);
        updateDescription_display();
        descriptionButtonInteractions();
        handleDescriptionMoreText();
        detectOffClicks();

        detectPlayAndShuffleButtons();
        loadInTable();
        detect_when_image_is_no_longer_visible();
        update_mobile_header_project_title(Details.ProjectName)

        if (UserIsEditor === true) {
            detect_when_image_is_interacted(Details.ProjectID, "PROJECTviewDisplayImage", "update_project_image");
            loadFileDropArea();

        }
    }
}

export function hideProjectView() {
    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
}

export async function PROJECTVIEW_update() {
    const projectID = Details.ProjectID;

    // Update details
    const result = await getProjectDetails(projectID);

    if (result == "") {
        console.log(result)
    } else {
        const details = JSON.parse(result);
        details.ProjectID = projectID;
        Details = details;

        loadInTable();
        /* update the image src of the top image. */
        const imageTag = document.getElementById("PROJECTviewDisplayImage_imgTag");
        const image = `${MAIN_CONST_EXPORT_mediaPath}/${Details.PictureURL}/5/`;

        imageTag.src = image;
    }
    return;
}

function updateTempVisible() {
    const title = document.getElementById("PROJECTviewDisplayTitleH1");
    const contributors = document.getElementById("PROJECTviewDisplayTitleH3");
    const displayImage = document.getElementById("PROJECTviewDisplayImage_imgTag");
    const image = `${MAIN_CONST_EXPORT_mediaPath}/${Details.PictureURL}/5/`;

    title.innerText = Details.ProjectName;
    contributors.innerText = Details.ProjectContributors;
    displayImage.src = image;
}

function set_event_listeners_for_titles() {
    const titleH1 = document.getElementById('PROJECTviewDisplayTitleH1');
    const titleH3 = document.getElementById("PROJECTviewDisplayTitleH3");

    if (UserIsEditor === false) {
        titleH1.contentEditable = false;
        titleH3.contentEditable = false;
    }


    titleH1.addEventListener('blur', function(event) {
        const newTitleH1 = titleH1.innerText
        update_mobile_header_project_title(newTitleH1);
        updateProjectDetails(Details.ProjectID, "project_name", newTitleH1)
    });

    titleH3.addEventListener('blur', function(event) {
        const newTitleH3 = titleH3.innerText
        updateProjectDetails(Details.ProjectID, "project_contributors", newTitleH3)
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
            value = details.ProjectName
        } else if (placeholder === 'PROJECTviewMOREartist') {
            value = details.ProjectContributors;
        } else if (placeholder === 'PROJECTviewMOREyear') {
            const formatted_time = formatTimeDaysToHuman(details.TimeCreated);
            value = formatted_time;
        } else if (placeholder === 'MOG_checkedDate') {
            value = "checkedIndicator";
        } else if (placeholder === 'MOGI_placeholder_itemID') {
            value = "temporaryIidentifier";
        } else if (placeholder === "PROJECTviewDisplayImage") {
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${details.PictureURL}/5/`;
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

function detectOffClicks() {
    const xButton = document.getElementById("PROJECTviewMOREcloseButton");
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    xButton.addEventListener('click', function() {
        closeMoreDescription(Details);
    });

    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription(Details)
        }
    });
}

function closeMoreDescription(details) {
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");
    const newDescription = editor.value;
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    const main = document.querySelector("main");

    sessionStorage.setItem('description', newDescription);
    updateProjectDetails(details.ProjectID, "description", newDescription)
    background.style.display = "none";
    updateDescription();
    main.style.zIndex = "1";
}

/* project view top buttons */
async function detectPlayAndShuffleButtons() {
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");
    const mobileMenuButton = document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");

    playButton.addEventListener("click", function() {
        PLAYBACK_handle_input_project_details_array_with_start_playback(Details);
    });
    shuffleButton.addEventListener("click", function() {
        PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle(Details);
    });
    menuButton.addEventListener("click", function() {
        displayMenuForTop(event, Details)
    });
    mobileMenuButton.addEventListener("click", function() {
        displayMenuForTop(event, Details)
    });
}


function displayMenuForTop(event, project_details) {
    event.stopPropagation();
    project_details = JSON.parse(project_details)
    const clickedItem = event.target;
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/");
    const project_id = parts[parts.length - 1];
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
    project_id = project_id.PROJECT_ID
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/delete_project/${project_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}

/* load in the table */
function loadInTable() {
    //Empty table if it exists
    const projectTableBeforeLoad = document.getElementById('PROJECTview-projectTable');
    if (projectTableBeforeLoad !== null) {
        projectTableBeforeLoad.remove();
    }

    const tableEnvironment = document.getElementById("PROJECTview_projectAreaContainer");
    loadInProjectViewRowTitles();

    const projectTable = document.getElementById('PROJECTview-projectTable');
    const songsJsonString = Details.ProjectJSON;
    const hexOrange = getHexColorFromCssVariable('--orange');
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    let songsTableDraggedSongBackground;
    let draggedRow;

    if (songsJsonString !== null) {

        const songData = [];

        if (songsJsonString) {
            for (const song of songsJsonString) {
                songData.push({
                    "img": Details.PictureURL,
                    "songTitle": song.SongName,
                    "artistName": Details.ProjectContributors,
                    "projectName": formatFileSizeBytes(song.FolderSize),
                    "songDuration": `${Math.floor(song.Duration / 60)}:${(song.Duration % 60).toString().padStart(2, '0')}`,
                    "songSequence": song.SongSequence,
                    "version": song.Version,
                    "url": song.URL
                })
            }
        }

        for (let i = 0; i < songData.length; i++) {
            songData[i].ProjectID = i;
            const song = songData[i];
            const songRowItem = loadInProjectViewRowItems(song);

            projectTable.insertAdjacentHTML('beforeend', songRowItem);

            const div = projectTable.lastElementChild;
            if (UserIsEditor === true) {
                div.addEventListener("dragstart", handleDragStart);
                div.addEventListener("dragover", handleDragOver);
                div.addEventListener("drop", handleDrop);
            }
        }

        // Function to handle drag start
        function handleDragStart(e) {
            e.dataTransfer.setData('text/plain', e.target.dataset.rowId);
            const draggedRowId = e.dataTransfer.getData('text/plain');
            draggedRow = e.srcElement;


            // Changing the colours of the items based on drag state
            const listNumber = getPositionInParentElement(e.srcElement);
            const listNumberIsOdd = is_odd(listNumber)
            if (listNumberIsOdd === true) {
                songsTableDraggedSongBackground = "var(--background)";
            } else {
                songsTableDraggedSongBackground = "var(--PV-transparent-overlay)";
            }
        }

        const debouncedHandleChangeHover = debounce(changeColourOnHover, 0);

        function handleDragOver(e) {
            // Prevent the default behavior to allow the drop
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            const hoveredOver = e.target.closest('.PROJECTview-projectTable-rowContainer');

            if (hoveredOver !== draggedRow) {
                const originalColor = getComputedStyle(hoveredOver).backgroundColor;
                const originalColorHex = rgb2hex(originalColor)

                // Start the color change process
                debouncedHandleChangeHover(hoveredOver, originalColorHex, hexOrange);
            }
        }

        // Function to handle drop
        function handleDrop(e) {
            // Prevent the default behavior
            e.preventDefault();

            // Changing the colours of the items based on drag state
            const draggedRowBackground = draggedRow.style;
            draggedRow.style.backgroundColor = "yellow !important";

            // Get the data (row ID) from the drag-and-drop operation
            const draggedRowId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.querySelector(`[data-row-id="${draggedRowId}"]`);
            const targetRowContainer = e.target.closest('.PROJECTview-projectTable-rowContainer');

            if (targetRowContainer) {
                const targetRowId = targetRowContainer.getAttribute('data-row-id');

                //Move the items visually
                targetRowContainer.before(draggedElement);
                //Update the database with the new data
                /*I figure it needn't be more complicated on the front end than
                just sending over the one that's moving, and the one that should be moved, 
                and then the database can do some magic with that data, because we are 
                already making the data look good on the front end, so now its a simple case
                of making these changes permaneant.

                */
                console.log(draggedRowId, targetRowId)
            }

            // This isn't working as intended for some reason, and i will have too look into it
            for (const childElement of projectTable.children) {
                console.log(childElement.style.backgroundColor)
                childElement.style.backgroundColor = "";
            }
        }

        // Attach a click event listener to the container
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

        if (UserIsEditor === true) {
            // Get all divs with contenteditable attribute within the container
            const contentEditableDivs = projectTable.querySelectorAll('[contenteditable]');

            // Define the blur event handler
            const blurEventHandler = (event) => {
                // Get the correct data and tell the database to update the title of that track
                const rowContainer = event.target.closest('.PROJECTview-projectTable-rowContainer');
                const songSequenceNumber = rowContainer.getAttribute('data-row-id');
                const updateString = `${songSequenceNumber}-${event.target.textContent}`;
                updateProjectDetails(Details.ProjectID, "project_song_title", updateString)
            };

            // Add blur event listener to each contenteditable div
            contentEditableDivs.forEach((div) => {
                div.addEventListener('blur', blurEventHandler);
            });
        }
    }
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

    const listOfThings = ['PROJECTviewRow_img', 'PROJECTviewRow_songTitle', 'PROJECTviewRow_artistName', 'PROJECTviewRow_projectName', 'PROJECTviewRow_songDuration', 'PROJECTviewRow_projectID', 'PROJECTviewRow_contentEditable'];

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
            value = `${songData.songSequence}-${songData.version}`;
        } else if ((placeholder === 'PROJECTviewRow_contentEditable') && (UserIsEditor === true)) {
            value = true;
        } else if ((placeholder === 'PROJECTviewRow_contentEditable') && (UserIsEditor === false)) {
            value = false;
        }
        replacedContent = replacedContent.replace(regex, value);
    }
    return replacedContent;

}

function loadFileDropArea() {
    const dropArea = document.getElementById("PROJECTview_dropArea");
    const submitButton = document.getElementById("PROJECTview_dropArea_submit_button");

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
        handleFiles(files, Details);
    });

    let Files = [];

    // Handle selected files when files are chosen using the file input
    dropArea.addEventListener("click", (e) => {
        const targetID = e.target.id
        const fileInput = document.createElement("input");

        if (targetID !== "PROJECTview_dropArea_submit_button") {
            fileInput.type = "file";
            fileInput.accept = "audio/*";
            fileInput.multiple = true;
            fileInput.addEventListener("change", () => {
                Files = fileInput.files;
                console.log(Files)
            });
            fileInput.click();
        } else {
            console.log("the submit files button was clicked ", Files);
            handleFiles(Files, Details);
        }
    });

    // Handle uploaded files
    function handleFiles(files, Details) {
        for (const file of files) {
            projectViewSongsArray.push(file);
        }
        uploadFiles(files, Details);
    }
}

async function uploadFileWithProgress(file, details) {
    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    isUploading = true;
    formData.append('file', file);
    formData.append("project_id", details.project_id);
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentCompleted = (event.loaded / event.total) * 100;
            console.log(percentCompleted)
            if (percentCompleted === 100) {
                console.log("upload completed")
            }
        }
    };

    xhr.onload = async function() {
        console.log("Upload fully complete")

        /* add next file to the queue */
        isUploading = false;
        if (uploadQueue.length > 0) {
            const current_file = uploadQueue.shift();
            await uploadFileWithProgress(current_file.file, current_file.details);
        }

        // Update the project tables
        PROJECTVIEW_update();

    };

    xhr.onerror = function() {
        console.log("Upload failed")
    };

    xhr.open('POST', `${MAIN_CONST_EXPORT_apiPath}/files/upload_audio/${Details.ProjectID}`, true);
    xhr.send(formData);
}


async function uploadFiles(files, details) {
    const uploadsContainer = document.getElementById('uploadsContainer');

    for (const file of files) {
        /* add item to queue */
        const new_file_item = {
            file: file,
            details: details
        };
        uploadQueue.push(new_file_item)

        if (!isUploading) {
            const current_file = uploadQueue.shift();
            await uploadFileWithProgress(current_file.file, current_file.details);
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
/**/