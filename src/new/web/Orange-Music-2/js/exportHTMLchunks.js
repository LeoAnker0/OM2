import mainContent from '../html/mainContent.html?raw';
import navBar from '../html/navbar.html?raw';
import topMusicBar from '../html/topMusicBar.html?raw';
import mainContent_mobile from '../html/mainMobileContent.html?raw';
import { svgImports } from './importAssets.js';

export function loadMAINnav() {
    let replacedContent = navBar;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('MAINnav').innerHTML = replacedContent;
}

export function loadMAINmusBar() {
    let replacedContent = topMusicBar;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('MAINtopMusicPlayer').innerHTML = replacedContent;
}

export function loadMAINcontent() {
    let replacedContent = mainContent;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('main').innerHTML = replacedContent;
}

export function loadMAINmobile() {
    let replacedContent = mainContent_mobile;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('MAINmobileContainer').innerHTML = replacedContent;
}