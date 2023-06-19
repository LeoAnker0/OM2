/* loading in the menu modal, and that alone ------------ */
import menuModal from '../html/menuModal.html?raw';
export function MENUdisplay(params, event) {
    var x = event.clientX;
    var y = event.clientY;


    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = menuModal;

    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);


    const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
    const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;



    //x = (x - MENUmodalBodyWidth) + "px";
    x = (x) + "px";
    y = (y) + "px";


    MENUmodalBody.style.top = y;
    MENUmodalBody.style.left = x;


    for (let i = 0; i < params.length; i++) {
        addModalItem(params[i]);
    }



    // Attach event listeners to all the dynamically generated divs
    const menuItems = MENUmodalBody.getElementsByClassName('MENUmodalItemContainer');
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.setAttribute('data-menu-item-id', i);

        menuItem.addEventListener('click', function(event) {
            event.stopPropagation();

            // Perform the action here using the parameters
            const clickedElement = event.target;
            const menuItemId = clickedElement.getAttribute('data-menu-item-id');
            const functionToCall = params[menuItemId].function;
            const optionalParams = params[menuItemId].optionalParams;

            if (functionToCall != "None") {
                MENU_ACTION_FUNCTIONS[functionToCall](optionalParams);
                return;
            }
            return;
        });
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

export function menuHide(event) {
    const background = document.getElementById('MENUmodalEnvironment');

    // Check if the click target is the background itself
    if (event.target === background) {
        background.style.display = 'none';
        return;
    }
    return;
}

/* making the buttons inside the menu modal do something nice and specific ------------ */
const MENU_ACTION_FUNCTIONS = {
    MENU_ACTION_playNext(params) {
        console.log(params);
        return;
    },
    MENU_ACTION_playLast() {
        console.log("meny aacction play next");
        return;
    }
};