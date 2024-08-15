// musicObjectGrid-mobile-settings.js
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { users_image, HANDLE_SIGN_OUT_USER } from './loadAccountImage.js';
import { MENUdisplay, menuHide_foreign } from './menu.js';
import { handleRoute } from './routing.js';




export function loadMobileSettingsButton() {
    const MOGgrid = document.getElementById("MOGgridContainer");

    // Create the button that will be interacted with
    let button = document.createElement("button");
    button.classList.add("MOG-Mobile-SettingsButton");
    button.id = "MOGmobileSettingsButton";
    button.innerHTML = `<div class="MOGM-imageContainer"><img src="${MAIN_CONST_EXPORT_mediaPath}/${users_image}/3"></div>`;
    MOGgrid.prepend(button)

    const MOGSettingsButton = document.getElementById("MOGmobileSettingsButton");
    MOGSettingsButton.addEventListener("click", detectMobileSettingsClick);
}

function detectMobileSettingsClick(event) {
    event.stopPropagation();
    handleQueueDisplayMenu(event);
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