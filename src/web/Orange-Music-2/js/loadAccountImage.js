import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { getUserDetail } from './network_requests.js';
import { MENUdisplay } from './menu.js';

export async function initAccountImg() {
    const accountImgSource = document.getElementById("TOPRIGHTaccountImg");
    try {
        const data = await getUserDetail("profile_picture")
        const url = data[0].profile_picture;
        const newImage = `${MAIN_CONST_EXPORT_mediaPath}/${url}/1/`;
        const accountImgButton = document.getElementById("TOPRIGHTaccountImgButton");

        accountImgSource.src = newImage;
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