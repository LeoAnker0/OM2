// musicObjectGrid-mobile-settings.js
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { users_image } from './loadAccountImage.js';
import { MENUdisplay } from './menu.js';


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

function handleQueueDisplayMenu(event) {
    const params = [{
        displayText: 'Help',
        optionalSVG: 'icons_helpIcon',
        function: 'TEST'
    }, {
        displayText: 'Settings',
        optionalSVG: 'icons_settings',
        function: 'OPEN_SETTINGS_PAGE',
    }, {
        displayText: 'Sign Out',
        optionalSVG: 'None',
        function: 'TEST',
    }];

    MENUdisplay(params, event);
    return;
}