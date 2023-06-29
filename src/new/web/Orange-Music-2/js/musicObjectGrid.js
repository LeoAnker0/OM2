/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

export function initMusicObjectsGrid() {
    const contentEnvironment = document.getElementById("MAINcontentPages");

    loadInContainer();

    loadObjects();

    return
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

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return;
}


import musicObjetsGridItem from '../html/musicObjectsGridItem.html?raw';

function loadObjects() {
    const loadEvents = 26;
    const parentContainer = document.getElementById("MOGgridContainer");

    parentContainer.innerHTML = "";

    for (var i = 0; i <= loadEvents - 1; i++) {
        let replacedContent = musicObjetsGridItem
        const listOfThings = ['MOG_image', 'MOG_text1', 'MOG_text2', 'MOG_checkedDate'];

        const imgAddress = "https://images.unsplash.com/photo-1605106901227-991bd663255c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
        const textTop = "Top text top text top ext hello there more and cake and then i ate a all da spaghetti";
        const textBottom = "Bottom text, there shouldn't be that much of this";

        /* last checked display calculator */
        const lastCheckedInDays = i * i;
        const checkedIndicator = daysToDaysWeeksMonthsYears(lastCheckedInDays);




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
            }



            replacedContent = replacedContent.replace(regex, value);
        }
        parentContainer.innerHTML += replacedContent;
    }
}

function daysToDaysWeeksMonthsYears(days) {
    let checkedIndicator = days + "d";

    if (days < 1) {
        checkedIndicator = "Now";
    }

    if (days > 7) {
        let noWeeks = Math.floor(days / 7);
        checkedIndicator = noWeeks + "w";
    }

    if (days > 28) {
        let noMonths = Math.floor(days / 28);
        checkedIndicator = noMonths + "m";
    }

    if (days > 365) {
        let noYears = Math.floor(days / 356);
        checkedIndicator = noYears + "y";
    }
    return checkedIndicator;
}