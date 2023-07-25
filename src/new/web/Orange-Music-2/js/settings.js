export function initSettings() {
    console.log("initSettings");

    loadInContainer()
}

import settingsModal from '../html/settingsModal.html?raw';
import { svgImports } from './importAssets.js';

function loadInContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = settingsModal;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}