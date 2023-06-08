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
import topright from '../html/topright.html?raw';

export function loadMAINtopleft() {
    let IDofElement = "topleftContentArea";
    let replacedContent = topleft;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
}
export function loadMAINtopright() {
    let IDofElement = "toprightContentArea";

    let replacedContent = topright;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
}