/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

export function initMusicObjectsGrid() {
    const contentEnvironment = document.getElementById("MAINcontentPages");

    loadInContainer();



    const libraryData = getLibraryData();

    loadObjects(libraryData);

    return
}

export function hideMusicObjectsGrid() {
    // clear the contents of main page content div

    const MainContent = document.getElementById("MAINcontentPages");
    MainContent.innerHTML = "";
}


function getLibraryData() {
    const libraryData = [];
    return libraryData;
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

    const addButton = document.getElementById("MOGaddNewItem");
    addButton.addEventListener('click', addNewLibraryItem);



    /* from the users libraries ----- */
    const loadEvents = libraryData.length;


    for (var i = 0; i <= loadEvents - 1; i++) {
        let replacedContent = musicObjectsGridItem
        const listOfThings = ['MOG_image', 'MOG_text1', 'MOG_text2', 'MOG_checkedDate', 'MOGI_placeholder_itemID'];
        const temporaryIidentifier = i;

        const imgAddress = libraryData[i].img;
        const textTop = libraryData[i].top;
        const textBottom = libraryData[i].bottom;
        const lastCheckedInDays = libraryData[i].days;

        /* last checked display calculator */
        const checkedIndicator = daysToDaysWeeksMonthsYears(lastCheckedInDays);



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


    /* detecting when the items in the grid are clicked, and then doing something about it */
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;

        // for the play button"
        if (clickedElement.classList.contains('MOG-item-controls-play')) {
            const buttonID = clickedElement.id.split('-')[1];
            const objectID = libraryData[buttonID].OBJECTid;


            console.log('Play ' + objectID);
            //console.log(libraryData[buttonID].top);
        }

        // for the menu button
        if (clickedElement.classList.contains('MOG-item-controls-menu')) {
            const buttonID = clickedElement.id.split('-')[1];
            const objectID = libraryData[buttonID].OBJECTid;

            displayMenu(event);
        }
    });
}

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

function daysToDaysWeeksMonthsYears(days) {
    let checkedIndicator;

    if (days < 1) {
        checkedIndicator = "Now";
        return checkedIndicator;
    } else if (days > 0 && days < 8) {
        checkedIndicator = days + "d";
        return checkedIndicator;
    } else if (days > 7 && days < 29) {
        let noWeeks = Math.floor(days / 7);
        checkedIndicator = noWeeks + "w";
        return checkedIndicator;
    } else if (days > 28 && days < 366) {
        let noMonths = Math.floor(days / 28);
        checkedIndicator = noMonths + "m";
        return checkedIndicator;
    } else {
        let noYears = Math.floor(days / 356);
        checkedIndicator = noYears + "y";
        return checkedIndicator;
    }
}

import { handleRoute } from '../main.js';

function addNewLibraryItem() {
    console.log("add new");
    handleRoute("/projects/")
}







/**/