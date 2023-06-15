import menuModal from '../html/menuModal.html?raw';

export function MENUdisplay(params, event) {
    var x = event.clientX;
    var y = event.clientY;


    /*
    let x = 886;
    let y = 317;*/

    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = menuModal;

    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);


    const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
    const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;

    x = (x - MENUmodalBodyWidth) + "px";
    y = (y) + "px";


    MENUmodalBody.style.top = y;
    MENUmodalBody.style.left = x;


    for (let i = 0; i < params.length; i++) {
        addModalItem(params[i]);
    }

}

import menuItem from '../html/menuModalItem.html?raw';

import { svgImports } from './importAssets.js';

function addModalItem(param) {
    const displayText = param.displayText
    const displayImage = param.optionalSVG

    const MENUmodalBody = document.getElementById('MENUmodalBody');

    let regex = new RegExp(`\\{${"MENU_item_text"}\\}`, 'g');
    let replacedContent = menuItem.replace(regex, displayText);

    if (displayImage !== "None") {
        regex = new RegExp(`\\{${"MENU_item_image"}\\}`, 'g');
        const imageReplacement = "{" + displayImage + "}";
        replacedContent = replacedContent.replace(regex, imageReplacement);

        for (const [placeholder, value] of Object.entries(svgImports)) {
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            replacedContent = replacedContent.replace(regex, value);
        }
        MENUmodalBody.innerHTML += replacedContent;
        return;
    } else {
        replacedContent = replacedContent.replace(/<img[^>]+>/g, '');
        MENUmodalBody.innerHTML += replacedContent;
        return;
    }
    return;
}



function menuHide(event) {
    const background = document.getElementById('MENUmodalEnvironment');

    // Check if the click target is the background itself
    if (event.target === background) {
        background.style.display = 'none';
    }
}