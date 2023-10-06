import settings_body from '../html/settings_body.html?raw';
import { svgImports } from './importAssets.js';

export function show_settings() {
    const contentContainer = document.getElementById("MAINcontentPages");
    let replacedContent = settings_body;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    contentContainer.innerHTML = replacedContent;


}

export function hide_settings() {
    console.log("hide settings");
}