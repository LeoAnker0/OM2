import { is_mobile, formatTimeDaysDelta, formatTimeDaysToHuman, formatFileSizeBytes, getPositionInParentElement, is_odd, debounce, changeColourOnHover, getHexColorFromCssVariable, is_dark, changeColourByOrder, isElementVisibleVertically, replaceSVGplaceholdersForAddressFromString, REGEXreplaceInString } from './om2.js';
import { PLAYBACK_handle_input_project_details_array_with_start_playback, PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle, PLAYBACK_handle_add_song_to_queue } from './playback.js';
import { display_upload_indicator, hide_upload_indicator, updateProgress_upload_indicator } from './file_upload_indicator.js';
import { updateProjectDetails, getProjectDetails, deleteSongFromProject } from './network_requests.js';
import { CONFIRM_action_modal, previously_focused_element } from './get-confirmation-modal.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { detect_when_image_is_interacted } from './image_upload_listeners.js';
import { HandleCreateNotification } from './notificationDisplayManager.js';
import { UPDATE_ProjectViewSettingsBox } from './projectView_settingsBox.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';

import projectViewRowTitles from '../html/projectViewRowTitles.html?raw';
import projectViewRowItem from '../html/projectViewRowItem.html?raw';
import projectContainer from '../html/projectViewContainer.html?raw';

export const uploadQueue = [];

let currentlyViewingProjects = false;
let isUploading = false;
let UserIsEditor = true;
let Details;

export async function initProjectView(projectID, songURL) {
    currentlyViewingProjects = true;

    // Attempt to load a locally stored version of this project
    const cachedProject = localStorage.getItem(`project-${projectID}`);
    if (cachedProject !== null) {
        Details = JSON.parse(cachedProject);
    } else {
        // Loading locally stored version failed, so use stand in values, whilst network request is being done
        if (is_dark() == true) {
            Details = {
                Description: "...",
                PictureURL: "static/loading_img_text_dark",
                ProjectContributors: "...",
                ProjectID: projectID,
                ProjectJSON: [],
                ProjectName: "..",
                TimeCreated: 0,
            }
        } else {
            Details = {
                Description: "...",
                PictureURL: "static/loading_img_text_light",
                ProjectContributors: "...",
                ProjectID: projectID,
                ProjectJSON: [],
                ProjectName: "..",
                TimeCreated: 0,
            }
        }
    }


    // Loading in the container minimum services required to start viewing
    loadContainer(Details);
    UPDATE_ProjectViewSettingsBox("", "blank");
    sessionStorage.setItem('description', Details.Description);
    updateDescription_display();
    loadInTable();

    // Set the listener for the home button, so that it can navigate back to the MOG / /
    const homeButton = document.getElementById("PROJECTviewMobileStickyHeaderBackButton")
    homeButton.addEventListener("click", () => {
        handleRoute("/")
    })

    // Retrieve data from the database and determine if it is different from the cached verison
    // And if so update the page
    await PROJECTVIEW_update()

    if (UserIsEditor === false) {
        // Delete the file drop area
        const fileDropArea = document.getElementById("PROJECTview_upload_area_files_upload_box");
        fileDropArea.remove();
    }

    // Set event listeners and update a few details
    update_mobile_header_project_title(Details.ProjectName)
    setEventListenersForProjectView()

    // Enable features that are only really relevant when the user is an editor
    if (UserIsEditor === true) {
        detect_when_image_is_interacted(Details.ProjectID, "PROJECTviewDisplayImage", "update_project_image");
        loadFileDropArea();
        UPDATE_ProjectViewSettingsBox(Details, "full");
    }

    // when a specific song is specified in the url, focus it 
    if ((songURL !== undefined) && (songURL !== null)) {
        for (var i = Details.ProjectJSON.length - 1; i >= 0; i--) {
            const URL = Details.ProjectJSON[i].URL;
            if (URL == songURL) {
                const dataRowID = `${Details.ProjectJSON[i].SongSequence}-${Details.ProjectJSON[i].Version}`
                // Now that we have the dataRowID, we can focus the song
                focusSong(dataRowID);
            }
        }
    }
}

export function hideProjectView() {
    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
    currentlyViewingProjects = false;
}

/* UPDATE the project view page with a function */
export async function PROJECTVIEW_update() {
    // Ensure that project_view is currently being viewed when called to refresh.
    if (!currentlyViewingProjects) {
        return;
    }

    // If project is being viewed, get the current ProjectID
    const projectID = Details.ProjectID;
    const result = await getProjectDetails(projectID);
    if (result == "") {
        return // if there were no results
    }

    // Clone the former details so that we can properly compare and contrast between the two
    const formerDetails = structuredClone(Details);

    // parse the result
    const details = JSON.parse(result);
    details.ProjectID = projectID;
    Details = details;

    localStorage.setItem(`project-${projectID}`, `${JSON.stringify(Details)}`);

    // difference in Description
    if (formerDetails.Description !== Details.Description) {
        const descriptionTitle = document.getElementById("PROJECTVIEW_DESCRIPTION_more_title");
        const descriptionArtistTime = document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");

        descriptionTitle.innerText = Details.ProjectName;
        descriptionArtistTime.innerText = `${Details.ProjectContributors} | ${formatTimeDaysToHuman(Details.TimeCreated)}`;
        sessionStorage.setItem('description', Details.Description);
        updateDescription_display();
    }

    // difference in PictureURL
    if (formerDetails.PictureURL !== Details.PictureURL) {
        const imageTag = document.getElementById("PROJECTviewDisplayImage_imgTag");
        const image = `${MAIN_CONST_EXPORT_mediaPath}/${Details.PictureURL}/5`;
        imageTag.src = image;
    }

    // difference in ProjectContributors
    if (formerDetails.ProjectContributors !== Details.ProjectContributors) {
        const contributors = document.getElementById("PROJECTviewDisplayTitleH3");
        contributors.innerText = Details.ProjectContributors;
    }

    // difference in ProjectName
    if (formerDetails.ProjectName !== Details.ProjectName) {
        const title = document.getElementById("PROJECTviewDisplayTitleH1");
        title.innerText = Details.ProjectName;
    }

    // difference in ProjectJSON
    /*
        In the future add features that would allow for the seamless addition of a new song, 
        or the removal of a song, without rebuilding it entirely.
    */

    if (formerDetails.ProjectJSON !== Details.ProjectJSON) {
        if ((formerDetails.ProjectJSON == null) || (Details.ProjectJSON == null)) {
            loadInTable();
        } else {

            // Check if the length is the same
            if (formerDetails.ProjectJSON.length !== Details.ProjectJSON.length) {
                // the length isn't the same, so therefore just loadIn a new table
                loadInTable();
            } else {
                // the length is the same, so therefore check if individual details are correct
                let differenceCounter = 0;
                for (var i = Details.ProjectJSON.length - 1; i >= 0; i--) {

                    // Difference for URL
                    if (Details.ProjectJSON[i].URL !== formerDetails.ProjectJSON[i].URL) {
                        differenceCounter += 1
                    }
                }

                if (differenceCounter > 0) {
                    loadInTable();
                }
            }
        }
    }

    // Update the settingsBox with the proper details
    if (UserIsEditor === true) {
        UPDATE_ProjectViewSettingsBox(Details, "full");
    } else {
        UPDATE_ProjectViewSettingsBox(Details, "blank");
    }


    return;
}

function focusSong(dataRowID) {
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    const debouncedHandleChangeHover = debounce(changeColourByOrder, 0);
    const hexOrange = getHexColorFromCssVariable('--orange');

    const ProjectTable = document.getElementById("PROJECTview-projectTable");
    for (var i = ProjectTable.children.length - 1; i >= 0; i--) {
        const songItemsID = ProjectTable.children[i].dataset.rowId;
        if ((songItemsID !== null) && (songItemsID == dataRowID)) {
            // We now have the correct item, now we need to scroll to it, and do the colour
            const hoveredOver = ProjectTable.children[i].closest('.PROJECTview-projectTable-rowContainer');

            const originalColor = getComputedStyle(hoveredOver).backgroundColor;
            const originalColorHex = rgb2hex(originalColor)

            // Start the color change process
            debouncedHandleChangeHover(hoveredOver, originalColorHex, hexOrange, "hardNewToOld", 3500);

            // Check if the element is visible vertically
            const isVisible = isElementVisibleVertically(hoveredOver);
            if (!isVisible) {
                // Scroll to the element if it's not visible vertically
                hoveredOver.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }
        }
    }
}

/*  A collection of event listeners that areall here, instead of being in a milliondifferent functions

    */

function setEventListenersForProjectView() {
    const titleH1 = document.getElementById('PROJECTviewDisplayTitleH1');
    const titleH3 = document.getElementById("PROJECTviewDisplayTitleH3");
    let H1Copy = document.getElementById("PROJECTviewDisplayTitleH1").innerText;
    let H3Copy = document.getElementById("PROJECTviewDisplayTitleH3").innerText;
    const moreButton = document.getElementById('PROJECTviewDescriptionMoreButton');
    const descriptionBox = document.getElementById("PROJECTviewDisplayDescription");
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    const main = document.querySelector("main");
    const xButton = document.getElementById("PROJECTviewMOREcloseButton");
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");
    const mobileMenuButton = document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");
    const targetElement = document.querySelector('.PROJECTviewDisplayImage');
    const header = document.getElementById("PROJECTviewMobileStickyHeader");
    const headerTitleText = document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");
    const editorContainer = document.getElementById("PROJECTviewMOREdescriptionC");
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    // IntersectionObserver
    const observer = new IntersectionObserver(callback, { threshold: 0.1 });

    // Session storage item?
    const description = sessionStorage.getItem('description');

    // set the text of the description
    editor.innerText = description;


    // Add listner to the description more button
    moreButton.addEventListener('click', function() {
        displayMenu();
    });

    // Add dbl click listener to the description
    descriptionBox.addEventListener('dblclick', function() {
        displayMenu();
    })

    // Add ?double click? listener to the description
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

    // Add listener to the button that closes the description
    xButton.addEventListener('click', function() {
        closeMoreDescription(Details);
    });

    // add listener to closing the description
    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription(Details)
        }
    });

    // add listener to the 'play' button in the project view
    playButton.addEventListener("click", function() {
        PLAYBACK_handle_input_project_details_array_with_start_playback(Details);
    });

    // add listener to the 'shuffle' button in the project view
    shuffleButton.addEventListener("click", function() {
        PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle(Details);
    });

    // add listener to the menu button in the project view
    menuButton.addEventListener("click", function() {
        displayMenuForTop(event)
    });

    // add listener to the menu button in the project view, which is only visible when mobile
    mobileMenuButton.addEventListener("click", function() {
        displayMenuForTop(event)
    });

    // Initiate the observer that changes the project view bar as appropriate to scrolling level
    observer.observe(targetElement);

    // If user is not editor, they shouldn't be able to edit things in the project
    if (UserIsEditor === false) {
        titleH1.contentEditable = false;
        titleH3.contentEditable = false;
        return;
    }

    // Listener for the title input
    titleH1.addEventListener('blur', function(event) {
        const newTitleH1 = titleH1.innerText;
        if (newTitleH1 !== H1Copy) {
            update_mobile_header_project_title(newTitleH1);
            updateProjectDetails(Details.ProjectID, "project_name", newTitleH1)
            Details.ProjectName = newTitleH1;
        }
    });

    // Listener for the artist/contributors input
    titleH3.addEventListener('blur', function(event) {
        const newTitleH3 = titleH3.innerText;
        if (newTitleH3 !== H3Copy) {
            updateProjectDetails(Details.ProjectID, "project_contributors", newTitleH3)

            Details.ProjectContributors = newTitleH3;
        }
    });

    function displayMenu() {
        background.style.display = "grid";

        // check if mobile
        if (is_mobile()) {
            main.style.zIndex = "40";
        }
    };

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
                header.style.backdropFilter = "";
                header.style.backgroundColor = "";
                headerTitleText.style.visibility = "";
            }

            /* when desktop and below image */
            else if ((!entry.isIntersecting) && (!is_mobile())) {
                header.style.backdropFilter = "";
                header.style.backgroundColor = "";
                headerTitleText.style.visibility = "";
            }

            /* when mobile and below image */
            else if ((!entry.isIntersecting) && (is_mobile())) {
                header.style.backdropFilter = "blur(15px)";
                header.style.backgroundColor = "var(--background-transparent)";
                headerTitleText.style.visibility = "visible";
            }
        });
    }

    function closeMoreDescription(details) {
        const newDescription = editor.value;
        sessionStorage.setItem('description', newDescription);
        updateProjectDetails(details.ProjectID, "description", newDescription)
        background.style.display = "none";
        editor.innerText = newDescription;
        main.style.zIndex = "";
    }
}

function loadContainer(details) {
    const toReplaceStruct = {
        itemsToReplace: [
            ["PROJECTviewMOREtitle", `${details.ProjectName}`],
            ["PROJECTviewMOREartist", `${details.ProjectContributors}`],
            ["PROJECTviewMOREyear", `${formatTimeDaysToHuman(details.TimeCreated)}`],
            ["MOG_checkedDate", `checkedIndicator`],
            ["MOGI_placeholder_itemID", `temporaryIidentifier`],
            ["PROJECTviewDisplayImage", `${MAIN_CONST_EXPORT_mediaPath}/${details.PictureURL}/5`],
        ]
    }

    document.getElementById("MAINcontentPages").innerHTML = REGEXreplaceInString(replaceSVGplaceholdersForAddressFromString(projectContainer), toReplaceStruct);
    return;
}

function updateDescription_display() {
    let description = sessionStorage.getItem('description');
    const descriptionContainer = document.getElementById("PROJECTviewDescriptionP");
    descriptionContainer.innerText = description;
}


function update_mobile_header_project_title(project_name) {
    const headerTitleText = document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");
    headerTitleText.innerText = project_name;

}


function displayMenuForTop(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const projectID = Details.ProjectID;
    let params;

    if (UserIsEditor == true) {

        params = [{
            displayText: 'Play next',
            optionalSVG: 'icons_playlist',
            optionalParams: {
                PROJECT_ID: projectID,
                QUEUE_POSITION: "next"
            },
            function: 'PLAYBACK_add_songs_to_queue'
        }, {
            displayText: 'Play later',
            optionalSVG: 'icons_playlist',
            optionalParams: {
                PROJECT_ID: projectID,
                QUEUE_POSITION: "later"

            },
            function: 'PLAYBACK_add_songs_to_queue'
        }, {
            displayText: 'Delete',
            optionalSVG: 'None',
            function: 'PROJECT_VIEW_delete_project',
            optionalParams: {
                PROJECT_ID: projectID
            },
            colour: "var(--whoopsie)"
        }]
    } else {
        params = [{
            displayText: 'Play next',
            optionalSVG: 'icons_playlist',
            optionalParams: {
                PROJECT_ID: projectID,
                QUEUE_POSITION: "next"
            },
            function: 'PLAYBACK_add_songs_to_queue'
        }, {
            displayText: 'Play later',
            optionalSVG: 'icons_playlist',
            optionalParams: {
                PROJECT_ID: projectID,
                QUEUE_POSITION: "later"

            },
            function: 'PLAYBACK_add_songs_to_queue'
        }]
    }

    MENUdisplay(params, event);
    return;
}

export async function PROJECT_VIEW_receive_MENU_delete_request(project_id) {
    /* ensure that the user actually wants to delete the song */
    // get confirmation.
    const confirmMessage = `Are you sure that you want to delete <em><b>${Details.ProjectName}</b></em>? This action is not reversable.`;
    const action = await CONFIRM_action_modal(confirmMessage);

    if (action === "delete") {
        await deleteProjectFromServer(project_id);
        menuHide_foreign();
        handleRoute("/");
        return
    }

    menuHide_foreign();
}

async function deleteProjectFromServer() {
    const ProjectID = Details.ProjectID;
    localStorage.removeItem(`project-${ProjectID}`);
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/delete_project/${ProjectID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
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

    document.getElementById("PROJECTview_projectAreaContainer").innerHTML += replaceSVGplaceholdersForAddressFromString(projectViewRowTitles);

    const projectTable = document.getElementById('PROJECTview-projectTable');
    let songsJsonString = structuredClone(Details.ProjectJSON);
    const hexOrange = getHexColorFromCssVariable('--orange');
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    let songsTableDraggedSongBackground;
    let draggedRow;

    // If songsJsonString == null ie there is no table to build, stop here
    if (songsJsonString == null) {
        return
    }

    // Load in the markup for the songRowItems inside the table
    for (let i = 0; i < songsJsonString.length; i++) {
        let songRowItem = replaceSVGplaceholdersForAddressFromString(projectViewRowItem);
        const song = songsJsonString[i];

        const toReplaceStruct = {
            itemsToReplace: [
                ["PROJECTviewRow_img", `${MAIN_CONST_EXPORT_mediaPath}/${Details.PictureURL}/3`],
                ["PROJECTviewRow_songTitle", `${song.SongName}`],
                ["PROJECTviewRow_artistName", `${Details.ProjectContributors}`],
                ["PROJECTviewRow_projectName", `${formatFileSizeBytes(song.FolderSize)}`],
                ["PROJECTviewRow_songDuration", `${Math.floor(song.Duration / 60)}:${(song.Duration % 60).toString().padStart(2, '0')}`],
                ["PROJECTviewRow_projectID", `${song.SongSequence}-${song.Version}`],
                ["PROJECTviewRow_contentEditable", `${UserIsEditor}`],
            ]
        }

        songRowItem = REGEXreplaceInString(songRowItem, toReplaceStruct)
        projectTable.insertAdjacentHTML('beforeend', songRowItem);

        if (UserIsEditor === true) {
            const songItem = projectTable.lastElementChild;
            songItem.addEventListener("dragstart", handleDragStart);
            songItem.addEventListener("dragover", handleDragOver);
            songItem.addEventListener("drop", handleDrop);
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

        // Get the data (row ID) from the drag-and-drop operation
        const Mover = e.dataTransfer.getData('text/plain');
        const draggedElement = document.querySelector(`[data-row-id="${Mover}"]`);
        const targetRowContainer = e.target.closest('.PROJECTview-projectTable-rowContainer');

        if (targetRowContainer) {
            const DetailsCopy = structuredClone(Details);
            /* send the new details to the database */
            const Destination = targetRowContainer.getAttribute('data-row-id');

            //Move the items visually
            targetRowContainer.before(draggedElement);
            const newOrderInformation = `${Mover}|${Destination}`;
            setTimeout(async () => {
                await updateProjectDetails(Details.ProjectID, "SongsTableChangeSongSequenceOrder", newOrderInformation);
                PROJECTVIEW_update();
            }, 1);

            /* Update the html datasets of the songRowID to be inorder, as well as updating Details to have the correct
                information.
            */

            let newProjectJSON = [];

            // Loop through all the items in the projectTable to update their information and add the correct info to newProjectJSON
            for (var i = 0; i < projectTable.children.length; i++) {
                if (i == 0) {
                    continue
                }

                const item = projectTable.children[i];
                const itemsOriginalRowID = item.dataset.rowId;
                const itemsOriginalRowIDArray = itemsOriginalRowID.split("-");
                const itemsOriginalSongSequence = itemsOriginalRowIDArray[0];

                let itemsNewDetailsRow = DetailsCopy.ProjectJSON[itemsOriginalSongSequence - 1];
                itemsNewDetailsRow.SongSequence = i;
                newProjectJSON.push(itemsNewDetailsRow)
                item.style.backgroundColor = "";
                item.dataset.rowId = `${i}-1`;
            }

            // Now that newProjectJSON has all the correct information, it is time to insert it into Details
            Details.ProjectJSON = newProjectJSON;
        }
    }

    // Attach a click event listener to the containers buttons
    projectTable.addEventListener('click', function(event) {
        const target = event.target;
        event.stopPropagation();

        // Check if the clicked element is a button within a row
        if (target.tagName === 'BUTTON') {
            const rowContainer = target.closest('.PROJECTview-projectTable-rowContainer');

            // add in data-type for menu and for play back
            const buttonType = target.closest("[data-button-type]").getAttribute("data-button-type");


            if ((rowContainer) && buttonType == "menu") {
                displayMenuForRow(event);
            } else if ((rowContainer) && buttonType == "playback") {
                const rowId = rowContainer.getAttribute('data-row-id');
                startPlaybackFromThisSong(rowId);
            }
        }
    });

    // For all the features that are only relevant to editors
    if (UserIsEditor === false) {
        return;
    }

    // Get all divs with contenteditable attribute within the container
    const contentEditableDivs = projectTable.querySelectorAll('[contenteditable]');
    const previousTitles = [];

    // Define the blur event handler
    const blurEventHandler = (event) => {
        // Get the correct data and tell the database to update the title of that track
        const rowContainer = event.target.closest('.PROJECTview-projectTable-rowContainer');
        const dataRowID = rowContainer.getAttribute('data-row-id');
        const newText = event.target.textContent

        // Checking if an object was found and returning the currentText
        const resultObject = previousTitles.find(obj => obj.dataRowIDField === dataRowID);
        const oldText = resultObject ? resultObject.currentText : "Row ID not found";
        if (oldText == newText) {
            return;
        }

        // If the text does match update the currentText in the array to the new currentText
        for (var i = previousTitles.length - 1; i >= 0; i--) {
            const tempDataRowID = previousTitles[i].dataRowIDField;
            if (tempDataRowID === dataRowID) {
                previousTitles[i].currentText = newText;
            }
        }

        const updateString = `${dataRowID}-${newText}`;
        updateProjectDetails(Details.ProjectID, "project_song_title", updateString)
    };

    // Add blur event listener to each contenteditable div
    contentEditableDivs.forEach((div) => {
        div.addEventListener('blur', blurEventHandler);
        previousTitles.push({
            "dataRowIDField": div.parentElement.parentElement.getAttribute('data-row-id'),
            "currentText": div.innerText,
        });

    });
}

// The function that enables playback from a specific song in a project
function startPlaybackFromThisSong(songId) {
    let DetailsCopy = structuredClone(Details);

    // extract songSequence
    const songIDarray = songId.split("-");
    const SongSequence = songIDarray[0];
    const SongSequenceCorrected = SongSequence - 1;

    // if SongSequenceCorrected is 0, then just play the whole thing
    if (SongSequenceCorrected == 0) {} else {
        // else cut the correct number of songs 
        const individualSongInformation = DetailsCopy.ProjectJSON.slice(SongSequenceCorrected);
        DetailsCopy.ProjectJSON = [];
        DetailsCopy.ProjectJSON = individualSongInformation;

    }
    PLAYBACK_handle_input_project_details_array_with_start_playback(DetailsCopy);
}

function displayMenuForRow(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songID_version = clickedItem.parentElement.parentElement.getAttribute("data-row-id");
    const songName_text = clickedItem.parentElement.parentElement.firstElementChild.lastElementChild.innerText;
    let params;

    if (UserIsEditor == true) {
        params = [{
                displayText: 'Play Next',
                optionalSVG: 'icons_playlist',
                function: "PROJECT_VIEW_add_song_to_queue",
                optionalParams: {
                    songID: songID_version,
                    queuePosition: "next"
                }
            },
            {
                displayText: 'Play Later',
                optionalSVG: 'icons_playlist',
                function: "PROJECT_VIEW_add_song_to_queue",
                optionalParams: {
                    songID: songID_version,
                    queuePosition: "later"
                }
            },
            {
                displayText: 'Delete',
                optionalSVG: 'None',
                function: 'PROJECT_VIEW_delete_song',
                optionalParams: {
                    songID: songID_version,
                    songName: songName_text
                },
                colour: "var(--whoopsie)"
            }
        ]
    } else {
        params = [{
                displayText: 'Play Next',
                optionalSVG: 'icons_playlist',
                function: "PROJECT_VIEW_add_song_to_queue",
                optionalParams: {
                    songID: songID_version,
                    queuePosition: "next"
                }
            },
            {
                displayText: 'Play Later',
                optionalSVG: 'icons_playlist',
                function: "PROJECT_VIEW_add_song_to_queue",
                optionalParams: {
                    songID: songID_version,
                    queuePosition: "later"
                }
            }
        ]
    }

    MENUdisplay(params, event);
    return;
}

/* function that handles a menu for adding an individual song to a queue */
export function PROJECTVIEW_handle_add_song_to_queue(params) {
    // extract songSequence
    const songIDarray = params.songID.split("-");
    const SongSequence = songIDarray[0];
    const queuePosition = params.queuePosition;

    // Prepare the details for playback.js
    let DetailsCopy = structuredClone(Details);
    const individualSongInformation = DetailsCopy.ProjectJSON[SongSequence - 1];
    DetailsCopy.ProjectJSON = [];
    DetailsCopy.ProjectJSON[0] = individualSongInformation;

    // Send the data to playback.js so that it can be added to the queue
    PLAYBACK_handle_add_song_to_queue(DetailsCopy, queuePosition);
}

export async function PROJECTVIEW_handle_delete_song(params) {
    /* ensure that the user actually wants to delete the song */
    // get confirmation.
    const confirmMessage = `Are you sure that you want to delete <em><strong>${params.songName}</strong></em>? This action is not reversable.`;
    const action = await CONFIRM_action_modal(confirmMessage);

    if (action === "delete") {
        await deleteSongFromProject(Details.ProjectID, params.songID)
        PROJECTVIEW_update();
    }
    menuHide_foreign();
}

function loadInProjectViewRowItems(songData) {
    let replacedContent = replaceSVGplaceholdersForAddressFromString(projectViewRowItem);

    const toReplaceStruct = {
        itemsToReplace: [
            ["PROJECTviewRow_img", `${MAIN_CONST_EXPORT_mediaPath}/${songData.img}/3`],
            ["PROJECTviewRow_songTitle", `${songData.songTitle}`],
            ["PROJECTviewRow_artistName", `${songData.artistName}`],
            ["PROJECTviewRow_projectName", `${songData.projectName}`],
            ["PROJECTviewRow_songDuration", `${songData.songDuration}`],
            ["PROJECTviewRow_projectID", `${songData.songSequence}-${songData.version}`],
            ["PROJECTviewRow_contentEditable", `${UserIsEditor}`],
        ]
    }

    replacedContent = REGEXreplaceInString(replacedContent, toReplaceStruct)
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
            });
            fileInput.click();
        } else {
            handleFiles(Files, Details);
        }
    });

    // Handle uploaded files
    function handleFiles(files, Details) {
        uploadFiles(files, Details);
    }
}

async function uploadFileWithProgress() {
    const current_file = uploadQueue[0];
    let file = current_file.file;
    let projectID = current_file.ProjectID;
    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    isUploading = true;
    display_upload_indicator()

    formData.append('file', file);
    formData.append("project_id", projectID);
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentCompleted = (event.loaded / event.total) * 100;
            updateProgress_upload_indicator(percentCompleted)

            if (percentCompleted === 100) {
                updateProgress_upload_indicator(percentCompleted)
            }
        }
    };

    xhr.onload = async function() {
        const response = xhr.responseText;

        // Handle case where storage limit reached
        if (response == "StorageLimit Reached") {
            HandleCreateNotification("Storage limit reached", "error");
            for (var i = uploadQueue.length - 1; i >= 0; i--) {
                uploadQueue.shift()
            }
            isUploading = false;
            hide_upload_indicator();
            updateProgress_upload_indicator(0);
        }

        /* add next file to the queue */
        isUploading = false;
        uploadQueue.shift();


        /* hide uploading indicator */
        hide_upload_indicator();
        updateProgress_upload_indicator(0);

        /* if there are more files in the queue to be uploaded, recurse */
        if (uploadQueue.length > 0) {
            await uploadFileWithProgress();
        }


        // Update the project tables, but only if viewing that page
        if ((Details.ProjectID == projectID) && (currentlyViewingProjects == true)) {
            PROJECTVIEW_update();
        }
    };

    xhr.onerror = function() {
        HandleCreateNotification("Upload Failed", "error")
    };

    xhr.open('POST', `${MAIN_CONST_EXPORT_apiPath}/files/upload_audio/${projectID}`, true);
    xhr.send(formData);

}


async function uploadFiles(files, details) {
    const uploadsContainer = document.getElementById('uploadsContainer');

    for (const file of files) {
        /* add item to queue */
        const new_file_item = {
            ProjectID: Details.ProjectID,
            file: file
        };
        uploadQueue.push(new_file_item)

        if (!isUploading) {
            await uploadFileWithProgress();
        }
    }
}
/**/