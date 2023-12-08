/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/
import { PLAYBACK_handle_input_project_details_array_with_start_playback } from './playback.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import musicObjetsGridContainer from '../html/musicObjectsGridContainer.html?raw';
import musicObjectsGridAdd from '../html/musicObjectsGridItemAdd.html?raw';
import { getLibraryData, getProjectDetails } from './network_requests.js';
import musicObjectsGridItem from '../html/musicObjectsGridItem.html?raw';
import { svgImports } from './importAssets.js';
import { formatTimeDaysDelta } from './om2.js';
import { handleRoute } from './routing.js';
import { MENUdisplay } from './menu.js';

const library_items_to_request_at_a_time = 15;
let no_library_datas_collected = 0;

export async function initMusicObjectsGrid() {
    try {
        const contentEnvironment = document.getElementById("MAINcontentPages");
        loadInContainer();

        const libraryData = await getLibraryData(library_items_to_request_at_a_time, no_library_datas_collected); // Wait for getLibraryData to complete
        no_library_datas_collected += libraryData.length;
        loadObjects(libraryData);
        return;
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

function loadInContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = musicObjetsGridContainer;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}

function loadObjects(libraryData) {
    const parentContainer = document.getElementById("MOGgridContainer");
    parentContainer.innerHTML = "";
    let replacedContent = musicObjectsGridAdd
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    parentContainer.innerHTML += replacedContent

    add_in_library_data_to_MOG(libraryData);

    const MOGcontainer = document.getElementById("MOGcontainer");
    /* detecting when the items in the grid are clicked, and then doing something about it */
    MOGcontainer.addEventListener('click', function(event) {
        addEventListeners_to_music_object_grid(event, libraryData)
    });

    let touchStartTimestamp;
    let pressTimer;

    // Add touchstart event listener to record the touch start timestamp
    MOGcontainer.addEventListener('touchstart', function(e) {
        touchStartTimestamp = e.timeStamp;

        // Start the timer for long press
        pressTimer = setTimeout(function() {
            // Long press detected
            handleLongPress(e, libraryData);
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

    // Function to handle long press
    function handleLongPress(event, libraryData) {
        navigator.vibrate(1000);

        // Add your long press action here
        const clickedElement = event.target;

        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;
        console.log(objectID)

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
    for (var i = 0; i <= loadEvents - 1; i++) {
        const listOfThings = ['MOG_image', 'MOG_text1', 'MOG_text2', 'MOG_checkedDate', 'MOGI_placeholder_itemID'];
        const temporaryIidentifier = i;
        const imgAddress = libraryData[i].img;
        const textTop = libraryData[i].top;
        const textBottom = libraryData[i].bottom;
        const lastCheckedInMillis = libraryData[i].days;
        const checkedIndicator = formatTimeDaysDelta(lastCheckedInMillis);
        let replacedContent = musicObjectsGridItem

        for (const [placeholder, value] of Object.entries(svgImports)) {
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            replacedContent = replacedContent.replace(regex, value);
        }

        for (let i = 0; i < listOfThings.length; i++) {
            const placeholder = listOfThings[i].toString();
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            let value = '';

            if (placeholder === 'MOG_image') {
                const image = `${MAIN_CONST_EXPORT_mediaPath}/${imgAddress}/4`;
                value = image
            } else if (placeholder === 'MOG_text1') {
                value = textTop;
            } else if (placeholder === 'MOG_text2') {
                value = textBottom;
            } else if (placeholder === 'MOG_checkedDate') {
                value = checkedIndicator;
            } else if (placeholder === 'MOGI_placeholder_itemID') {
                value = temporaryIidentifier;
            }

            replacedContent = replacedContent.replace(regex, value);
        }
        parentContainer.innerHTML += replacedContent;
    }
}

async function addEventListeners_to_music_object_grid(event, libraryData) {
    const clickedElement = event.target;

    // for the play button"
    if (clickedElement.classList.contains('MOG-item-controls-play')) {
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;
        const project_details = await getProjectDetails(objectID);

        PLAYBACK_handle_input_project_details_array_with_start_playback(project_details);
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
        addNewLibraryItem();
    }
};

function displayMenu(event, project_id) {
    event.stopPropagation();

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
    }]

    MENUdisplay(params, event);
    return;
}

function addNewLibraryItem() {
    handleRoute("/new-project/")
}