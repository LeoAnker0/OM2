/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

export async function initMusicObjectsGrid() {
    //console.log("how many times does initMusicObjectsGrid get called?")


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
    //console.log("how many times does hideMusicObjectsGrid get called?")

    const mainContent = document.getElementById("MAINcontentPages");
    const MOGcontainer = document.getElementById("MOGcontainer");

    MOGcontainer.removeEventListener('click', addEventListeners_to_music_object_grid);
    // Remove tracked listeners before clearing content
    // Clear the contents of the mainContent section
    mainContent.innerHTML = "";
}


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

        const response = await fetch('https://om2apis.la0.uk/projects/get-projects/', {
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
                value = imgAddress
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
};

function addEventListeners_to_music_object_grid(event, libraryData) {
    const clickedElement = event.target;

    // for the play button"
    if (clickedElement.classList.contains('MOG-item-controls-play')) {
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;


        console.log('Play ' + objectID);
        //console.log(libraryData[buttonID].top);
    }

    // for the menu button
    if (clickedElement.classList.contains('MOG-item-controls-menu')) {
        const buttonID = clickedElement.id.split('-')[1];
        const objectID = libraryData[buttonID].project_id;

        displayMenu(event);
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

function displayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;


    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playlist',
        function: 'None'
    }, {
        displayText: 'Play later',
        optionalSVG: 'icons_derpy',
        function: 'None'
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