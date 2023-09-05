/* loading in the menu modal, and that alone ------------ */
import menuModal from '../html/menuModal.html?raw';
export function MENUdisplay(params, event) {
    const X = event.clientX;
    const Y = event.clientY;

    const main = document.querySelector("main");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    // check if mobile
    if (mediaQuery.matches) {
        main.style.zIndex = "40";
    }


    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = menuModal;

    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);

    let x = (X) + "px";
    let y = (Y) + "px";

    MENUmodalBody.style.left = x;
    MENUmodalBody.style.top = y;

    for (let i = 0; i < params.length; i++) {
        addModalItem(params[i]);
    }

    const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
    const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;

    const overflowStates = showElementDetails('MENUmodalBody');
    //console.log(overflowStates);

    if (overflowStates.xOverflow == true) {
        x = (X - MENUmodalBodyWidth) + "px";
        MENUmodalBody.style.left = x;
    }
    if (overflowStates.yOverflow == true) {
        y = (Y - MENUmodalBodyHeight) + "px";
        MENUmodalBody.style.top = y;
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

            if (functionToCall == "TEST") {
                console.log("the button worked");
            } else if (functionToCall != "None") {
                MENU_ACTION_FUNCTIONS[functionToCall](optionalParams);
                return;
            } else {
                return;

            }
        });
    }
}

function showElementDetails(elementId) {
    const element = document.getElementById(elementId);
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    const width = element.offsetWidth;
    const currentPositionLeft = element.getBoundingClientRect().left;
    const currentPositionTop = element.getBoundingClientRect().top;


    const height = element.getBoundingClientRect().height;



    const overflowingLeft = width + currentPositionLeft;
    const overflowingTop = height + currentPositionTop;

    let IsOverflowingLeft = false;
    let IsOverflowingTop = false
    if (overflowingLeft > clientWidth) {
        IsOverflowingLeft = true;
    }
    if (overflowingTop > clientHeight) {
        IsOverflowingTop = true
    }
    return {
        xOverflow: IsOverflowingLeft,
        yOverflow: IsOverflowingTop
    }
}


import menuItem from '../html/menuModalItem.html?raw';

import { svgImports } from './importAssets.js';

function addModalItem(param) {
    const displayText = param.displayText
    const displayImage = param.optionalSVG
    let colour;
    if ("colour" in param) {
        colour = param.colour;
    } else {
        colour = "white";
    }

    const MENUmodalBody = document.getElementById('MENUmodalBody');

    let regex = new RegExp(`\\{${"MENU_item_text"}\\}`, 'g');
    let replacedContent = menuItem.replace(regex, displayText);
    regex = new RegExp(`\\{${"MENU_item_colour"}\\}`, 'g');
    replacedContent = replacedContent.replace(regex, colour);

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
    const main = document.querySelector("main");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");

    // Check if the click target is the background itself
    if (event.target === background) {
        background.style.display = 'none';
        // check if mobile
        if (mediaQuery.matches) {
            main.style.zIndex = "1";
        }

        return;
    }
    return;
}

export function menuHide_foreign() {
    const background = document.getElementById('MENUmodalEnvironment');
    const main = document.querySelector("main");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");

    background.style.display = 'none';
    if (mediaQuery.matches) {
        main.style.zIndex = "1";
    }

    return;
}

import { PROJECT_VIEW_receive_MENU_delete_request } from './projectView.js';

/* MENU functions */
const MENU_ACTION_FUNCTIONS = {
    MENU_ACTION_playNext(params) {
        console.log(params);
        return;
    },
    MENU_ACTION_playLast() {
        console.log("meny aacction play next");
        return;
    },
    PROJECT_VIEW_delete_project(params) {
        PROJECT_VIEW_receive_MENU_delete_request(params);
        return;
    }
};