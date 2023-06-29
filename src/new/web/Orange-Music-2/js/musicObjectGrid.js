/* 
JS for creating the music objects, and then hydrating them with dynamic data
*/

export function initMusicObjectsGrid() {
    console.log("init music objects grid");

    const contentEnvironment = document.getElementById("MAINcontentPages");

    loadInContainer();

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