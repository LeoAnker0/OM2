export function initAccountImg() {
    /* loading in the img */
    const accountImgSource = document.getElementById("TOPRIGHTaccountImg");
    const newImage = "https://images.unsplash.com/photo-1605106901227-991bd663255c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
    accountImgSource.src = newImage;

    /* adding event listeners for loading in the menu for the account menu */
    const accountImgButton = document.getElementById("TOPRIGHTaccountImgButton");
    accountImgButton.addEventListener('click', handleClick);
}

function handleClick(event) {
    event.stopPropagation;
    handleQueueDisplayMenu(event)

    return
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
    }]

    MENUdisplay(params, event);
    return;
}