import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { getUserDetail, signout } from './network_requests.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { handleRoute } from './routing.js';


export let users_image;

export async function initAccountImg() {
    const accountImgSource = document.getElementById("TOPRIGHTaccountImg");
    try {
        const url = await getUserDetail("profile_picture")
        const newImage = `${MAIN_CONST_EXPORT_mediaPath}/${url}/3`;
        users_image = url
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

async function handleQueueDisplayMenu(event) {
    const params = [{
        displayText: 'Settings',
        optionalSVG: 'icons_settings',
        condition: "settings",
        function: 'True',
    }, {
        displayText: 'Sign Out',
        optionalSVG: 'None',
        condition: "signOut",
        function: 'True',
    }];

    const result = await MENUdisplay(params, event, "return_promise");

    if (result.condition == "settings") {
        handleRoute("/settings/");
    } else if (result.condition == "signOut") {
        HANDLE_SIGN_OUT_USER();
    }
    menuHide_foreign();
    return;
}

export async function HANDLE_SIGN_OUT_USER() {
    // Tell server to delete the access-token cookie
    await signout();
    localStorage.clear();
    location.reload();
}