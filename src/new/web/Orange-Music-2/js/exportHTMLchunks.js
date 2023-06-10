import { svgImports } from './importAssets.js';

import topleft from '../html/topleft.html?raw';
import topright from '../html/topright.html?raw';
import queueBody from '../html/queueBody.html?raw';

export function loadMAINtopleft() {
    let IDofElement = "topleftContentArea";
    let replacedContent = topleft;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return
}
export function loadMAINtopright() {
    let IDofElement = "toprightContentArea";

    let replacedContent = topright;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return
}

export function loadQUEUEbody() {
    let IDofElement = "MAINcontentContainer";

    let replacedContent = queueBody;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return
}