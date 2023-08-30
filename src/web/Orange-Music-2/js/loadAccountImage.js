import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';

export async function initAccountImg() {
    /* loading in the img */
    const accountImgSource = document.getElementById("TOPRIGHTaccountImg");

    try {
        const url = await getAccountImageURL();
        const newImage = `${MAIN_CONST_EXPORT_mediaPath}/${url}/1/`;

        accountImgSource.src = newImage;

        /* adding event listeners for loading in the menu for the account menu */
        const accountImgButton = document.getElementById("TOPRIGHTaccountImgButton");
        accountImgButton.addEventListener('click', handleClick);
    } catch (error) {
        console.error("Error initializing account image:", error);
    }
}

async function getAccountImageURL() {
    const jwt = localStorage.getItem("JWT");
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/get_account_image/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jwt })
        });
        const data = await response.json();

        const authenticated = data.authenticated;
        if (authenticated !== false) {
            const url = data.url;
            return url;
        }

        return false;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}

function handleClick(event) {
    event.stopPropagation();
    handleQueueDisplayMenu(event);
    return;
}

import { MENUdisplay } from './menu.js';

function handleQueueDisplayMenu(event) {
    const params = [{
        displayText: 'Help',
        optionalSVG: 'icons_helpIcon',
        function: 'None'
    }, {
        displayText: 'Settings',
        optionalSVG: 'icons_derpy',
        function: 'None',
    }, {
        displayText: 'Sign Out',
        optionalSVG: 'None',
        function: 'None',
    }];

    MENUdisplay(params, event);
    return;
}