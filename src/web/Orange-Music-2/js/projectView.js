export function initProjectView() {
    loadContainer();
}

import projectContainer from '../html/projectViewContainer.html?raw';
import { svgImports } from './importAssets.js';

function loadContainer() {


    let IDofElement = "MAINcontentPages";
    let replacedContent = projectContainer;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;

}