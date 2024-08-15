/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

import { formatTimeDaysDelta, is_mobile, replaceSVGplaceholdersForAddressFromString, REGEXreplaceInString } from './om2.js';
import { PLAYBACK_handle_input_project_details_array_with_start_playback, PLAYBACK_handle_add_songs_to_queue } from './playback.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { loadMobileSettingsButton } from './musicObjectGrid-mobile-settings.js';
import { getLibraryData, getProjectDetails } from './network_requests.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';


import musicObjetsGridContainer from '../html/musicObjectsGridContainer.html?raw';
import musicObjectsGridAdd from '../html/musicObjectsGridItemAdd.html?raw';
import musicObjectsGridItem from '../html/musicObjectsGridItem.html?raw';

const library_items_to_request_at_a_time = 30;
let no_library_datas_collected = 0;

export async function initMusicObjectsGrid() {
    try {
        // Load in main markup for the MOG
        document.getElementById("MAINcontentPages").innerHTML += replaceSVGplaceholdersForAddressFromString(musicObjetsGridContainer);

        // if local copy of MOG exists, load using that
        if (localStorage.getItem("MOGitems") != null) {
            const cachedLibraryData = JSON.parse(localStorage.getItem("MOGitems"));
            no_library_datas_collected += cachedLibraryData.length;

            loadObjects(cachedLibraryData);
        }

        // Load the library data from the server to verify
        const libraryData = await getLibraryData(library_items_to_request_at_a_time, 0); // Wait for getLibraryData to complete

        // if the data doesn't equal that which is known locally, update it with the correct data.
        if (JSON.stringify(libraryData) != localStorage.getItem("MOGitems")) {
            no_library_datas_collected += libraryData.length;
            loadObjects(libraryData);
            localStorage.setItem("MOGitems", JSON.stringify(libraryData));
        }

        // if the page is being displayed as mobile, then modify it so that the mobile account menu is shown.
        if (is_mobile()) {
            loadMobileSettingsButton();
        }
    } catch (error) {
        console.error('Error in initMusicObjectsGrid:', error);
    }
}

export function hideMusicObjectsGrid() {
    no_library_datas_collected = 0;
    const mainContent = document.getElementById("MAINcontentPages");
    const MOGcontainer = document.getElementById("MOGcontainer");

    if (MOGcontainer !== null) {
        MOGcontainer.removeEventListener('click', addEventListeners_to_music_object_grid);
    }
    mainContent.innerHTML = "";
}

function loadObjects(libraryData) {
    const parentContainer = document.getElementById("MOGgridContainer");
    parentContainer.innerHTML = replaceSVGplaceholdersForAddressFromString(musicObjectsGridAdd)

    // load html
    add_in_library_data_to_MOG(libraryData);
    const MOGcontainer = document.getElementById("MOGgridContainer");

    /* detecting when the items in the grid are clicked, and then doing something about it */
    MOGcontainer.addEventListener('click', function(event) {
        addEventListeners_to_music_object_grid(event, libraryData)
    });

    let touchStartTimestamp;
    let pressTimer;
    let isScrolling = false;

    // Add touchstart event listener to record the touch start timestamp
    MOGcontainer.addEventListener('touchstart', function(e) {
        touchStartTimestamp = e.timeStamp;
        isScrolling = false;
        // Start the timer for long press
        pressTimer = setTimeout(function() {
            // Long press detected
            if (!isScrolling) {
                handleLongPress(e, libraryData);
            }
        }, 500); // Adjust the time (in milliseconds) for a long press as needed
    });

    // Add touchend event listener to detect when the touch ends
    MOGcontainer.addEventListener('touchend', function(e) {
        // Calculate the duration of the touch event
        const touchEndTimestamp = e.timeStamp;
        const touchDuration = touchEndTimestamp - touchStartTimestamp;
        // Clear the long press timer
        clearTimeout(pressTimer);
    });

    // Add scroll event listener to detect when the grid is being scrolled
    MOGcontainer.addEventListener('scroll', function() {
        isScrolling = true;
        clearTimeout(pressTimer);
        touchStartTimestamp = null;
    });

    // Function to handle long press
    function handleLongPress(event, libraryData) {
        navigator.vibrate(1000);

        // Add your long press action here
        const clickedElement = event.target;
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;

        displayMenu(event, objectID);
    }

    // Detect if scrolled to the bottom and then if there are more projects load those in.
    parentContainer.addEventListener('scroll', async function() {
        const scrollTop = parentContainer.scrollTop;
        const scrollHeight = parentContainer.scrollHeight;
        const clientHeight = parentContainer.clientHeight;

        // Check if the parentContainer has been scrolled to the bottom
        if (scrollTop >= scrollHeight - clientHeight) {
            // get another 15 items
            const libraryData = await getLibraryData(library_items_to_request_at_a_time, no_library_datas_collected); // Wait for getLibraryData to complete
            no_library_datas_collected += libraryData.length;

            if (libraryData.length > 0) {
                add_in_library_data_to_MOG(libraryData);
            }
        }
    })
};

function add_in_library_data_to_MOG(libraryData) {
    const parentContainer = document.getElementById("MOGgridContainer");
    /* from the users libraries ----- */
    const loadEvents = libraryData.length;
    const musicObjectsGridItemHTML = replaceSVGplaceholdersForAddressFromString(musicObjectsGridItem);

    for (var i = 0; i <= loadEvents - 1; i++) {
        const temporaryIidentifier = i;
        const imgAddress = libraryData[i].img;
        const textTop = libraryData[i].top;
        const textBottom = libraryData[i].bottom;
        const lastCheckedInMillis = libraryData[i].days;
        const checkedIndicator = formatTimeDaysDelta(lastCheckedInMillis);

        const toReplaceStruct = {
            itemsToReplace: [
                ["MOG_image", `${MAIN_CONST_EXPORT_mediaPath}/${imgAddress}/3`],
                ["MOG_text1", `${textTop}`],
                ["MOG_text2", `${textBottom}`],
                ["MOG_checkedDate", `${checkedIndicator}`],
                ["MOGI_placeholder_itemID", `${temporaryIidentifier}`],
            ]
        }

        parentContainer.innerHTML += REGEXreplaceInString(musicObjectsGridItemHTML, toReplaceStruct);
    }
}

async function addEventListeners_to_music_object_grid(event, libraryData) {
    const clickedElement = event.target;

    // for the play button"
    if (clickedElement.classList.contains('MOG-item-controls-play')) {
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;

        const result = await getProjectDetails(objectID);
        const details = JSON.parse(result);
        details.ProjectID = objectID;

        PLAYBACK_handle_input_project_details_array_with_start_playback(details);
    }

    // for the menu button
    if (clickedElement.classList.contains('MOG-item-controls-menu')) {
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;

        displayMenu(event, objectID);
    }

    // for the project box click
    if (clickedElement.classList.contains('MOG-itemContainer')) {

        if (clickedElement.id !== 'MOGaddNewItem') {
            const buttonID = clickedElement.id.split('-')[1];
            const objectID = libraryData[buttonID].project_id;

            handleRoute(`/projects/${objectID}`);
        }
    }

    if (clickedElement.id === 'MOGaddNewItem') {
        handleRoute("/new-project/");
    }
};


async function displayMenu(event, project_id) {
    event.stopPropagation();

    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playlist',
        condition: 'playNext',
        optionalParams: {
            PROJECT_ID: project_id,
            QUEUE_POSITION: "next"
        },
        function: 'True'
    }, {
        displayText: 'Play later',
        optionalSVG: 'icons_playlist',
        condition: 'playLater',
        optionalParams: {
            PROJECT_ID: project_id,
            QUEUE_POSITION: "later"

        },
        function: 'True'
    }]

    const result = await MENUdisplay(params, event, "return_promise");

    // for adding the project to queue
    if (result.condition == "playNext" || "playLater") {
        PLAYBACK_handle_add_songs_to_queue(result.optionalParams)
    }

    menuHide_foreign();
    return;
}