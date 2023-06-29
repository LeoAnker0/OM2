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
    const loadEvents = 11;
    const parentContainer = document.getElementById("MOGgridContainer");

    parentContainer.innerHTML = "";

    for (var i = 0; i <= loadEvents - 1; i++) {
        parentContainer.innerHTML += musicObjetsGridItem;

    }

}