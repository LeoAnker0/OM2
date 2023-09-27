import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { MENUdisplay } from './menu.js';
import { getUserDetail } from './network_requests.js';

export async function initAccountImg() {
    /* loading in the img */
    const accountImgSource = document.getElementById("TOPRIGHTaccountImg");

    try {
        const data = await getUserDetail("profile_picture")
        const url = data[0].profile_picture;
        const newImage = `${MAIN_CONST_EXPORT_mediaPath}/${url}/1/`;
        accountImgSource.src = newImage;

        /* adding event listeners for loading in the menu for the account menu */
        const accountImgButton = document.getElementById("TOPRIGHTaccountImgButton");
        accountImgButton.addEventListener('click', handleClick);
    } catch (error) {
        console.error("Error initializing account image:", error);
    }
}


function handleClick(event) {
    event.stopPropagation();
    handleQueueDisplayMenu(event);
    return;
}

function handleQueueDisplayMenu(event) {
    const params = [{
        displayText: 'Help',
        optionalSVG: 'icons_helpIcon',
        function: 'None'
    }, {
        displayText: 'Settings',
        optionalSVG: 'icons_settings',
        function: 'None',
    }, {
        displayText: 'Sign Out',
        optionalSVG: 'None',
        function: 'SIGN_OUT_USER',
    }];

    MENUdisplay(params, event);
    return;
}

export function HANDLE_SIGN_OUT_USER() {
    localStorage.clear();
    location.reload();
}