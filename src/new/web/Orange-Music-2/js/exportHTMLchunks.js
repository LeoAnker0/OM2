import { svgImports } from './importAssets.js';

/*
export function loadMAINnav() {
    let replacedContent = navBar;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('MAINnav').innerHTML = replacedContent;
}*/

import topleft from '../html/topleft.html?raw';

export function loadMAINtopleft() {

    let replacedContent = topleft;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('topleftContentArea').innerHTML = replacedContent;
}