/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

export async function initMusicObjectsGrid() {
    try {
        const contentEnvironment = document.getElementById("MAINcontentPages");

        loadInContainer();

        const libraryData = await getLibraryData(); // Wait for getLibraryData to complete
        loadObjects(libraryData);

        return;
    } catch (error) {
        console.error('Error in initMusicObjectsGrid:', error);
    }
}



export function hideMusicObjectsGrid() {
    const mainContent = document.getElementById("MAINcontentPages");
    const MOGcontainer = document.getElementById("MOGcontainer");

    if (MOGcontainer !== null) {
        MOGcontainer.removeEventListener('click', addEventListeners_to_music_object_grid);
    }
    mainContent.innerHTML = "";
}

import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';


async function getLibraryData() {
    try {
        const token = localStorage.getItem('JWT');
        if (!token) {
            console.log("no jwt");
            return [];
        }

        const access_token = {
            "access-token": token
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get-projects/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(access_token)
        });

        const responseData = await response.json();
        const projects = responseData.projects;

        if (!Array.isArray(projects)) {
            console.log("Projects is not an array:", projects);
            return [];
        }

        const libraryData = projects.map(project => ({
            img: project.picture_url,
            top: project.project_name,
            bottom: project.project_contributors,
            days: project.time_created,
            project_id: project.project_id
        }));

        return libraryData;

    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}




import musicObjetsGridContainer from '../html/musicObjectsGridContainer.html?raw';
import { svgImports } from './importAssets.js';

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


import musicObjectsGridItem from '../html/musicObjectsGridItem.html?raw';
import musicObjectsGridAdd from '../html/musicObjectsGridItemAdd.html?raw';

function loadObjects(libraryData) {
    const parentContainer = document.getElementById("MOGgridContainer");

    parentContainer.innerHTML = "";

    /* the add new project button */
    let replacedContent = musicObjectsGridAdd

    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    parentContainer.innerHTML += replacedContent

    /* from the users libraries ----- */
    const loadEvents = libraryData.length;


    for (var i = 0; i <= loadEvents - 1; i++) {
        let replacedContent = musicObjectsGridItem
        const listOfThings = ['MOG_image', 'MOG_text1', 'MOG_text2', 'MOG_checkedDate', 'MOGI_placeholder_itemID'];
        const temporaryIidentifier = i;

        const imgAddress = libraryData[i].img;
        const textTop = libraryData[i].top;
        const textBottom = libraryData[i].bottom;
        const lastCheckedInMillis = libraryData[i].days;

        /* last checked display calculator */
        const checkedIndicator = daysToDaysWeeksMonthsYears(lastCheckedInMillis);



        for (const [placeholder, value] of Object.entries(svgImports)) {
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            replacedContent = replacedContent.replace(regex, value);
        }


        for (let i = 0; i < listOfThings.length; i++) {
            const placeholder = listOfThings[i].toString();
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            let value = '';

            if (placeholder === 'MOG_image') {
                const image = `${MAIN_CONST_EXPORT_mediaPath}/${imgAddress}/4/`;
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


};

import { PLAYBACK_handle_input_project_details_array_with_start_playback } from './playback.js';

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

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get-project-details/`, {
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
        } else if (clickedElement.id === 'MOGaddNewItem') {
            addNewLibraryItem();
        }
    }

};


import { MENUdisplay } from './menu.js';

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

function daysToDaysWeeksMonthsYears(milliseconds) {
    const now = Date.now();
    const differenceDays = (now - milliseconds) / (1000 * 60 * 60 * 24);

    let checkedIndicator;

    if (differenceDays < 0.01) { // Less than 0.01 days (approximately 14 minutes)
        checkedIndicator = "Now";
        return checkedIndicator;
    } else if (differenceDays < 1) {
        checkedIndicator = "Now"; // Convert to hours
        return checkedIndicator;
    } else if (differenceDays < 8) {
        checkedIndicator = Math.floor(differenceDays) + "d";
        return checkedIndicator;
    } else if (differenceDays < 29) {
        const noWeeks = Math.floor(differenceDays / 7);
        checkedIndicator = noWeeks + "w";
        return checkedIndicator;
    } else if (differenceDays < 365) {
        const noMonths = Math.floor(differenceDays / 28);
        checkedIndicator = noMonths + "m";
        return checkedIndicator;
    } else {
        const noYears = Math.floor(differenceDays / 365);
        checkedIndicator = noYears + "y";
        return checkedIndicator;
    }
}

import { handleRoute } from '../main.js';

function addNewLibraryItem() {
    handleRoute("/new-project/")
}







/**/