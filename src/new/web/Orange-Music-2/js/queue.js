let queueState = "visible";

import { loadQUEUEbody } from './exportHTMLchunks.js';

export function initialiseQueue() {
    loadQUEUEbody();
    const queueButton = document.getElementById("queueButton");
    queueStateChange(queueState);
    queueButton.addEventListener('click', queueToggle);

    /* load in the html for loading in the queue */

    hydrateQueue();
    return
}

/* function monkeys, that do something, and that in the future will just call other functions... ( from an import ) */
function queueToggle() {
    if (queueState === "hidden") {
        queueState = "visible";
        queueStateChange(queueState);

        /* call the function that will slide in the queue (make visible) */

        return
    }
    if (queueState === "visible") {
        queueState = "hidden";
        queueStateChange(queueState);

        /* call the function that will slide out the queue (make hidden) */

        return
    }
    return
}


/* toggle the queue background */
function queueStateChange(state) {
    /* takes two possible values of visible or hidden */
    const queueButton = document.getElementById("queueButton");
    const queueIcon = document.getElementById("queueIcon");
    const queueEnvironment = document.getElementById("QUEUEenvironment");

    if (state == "visible") {
        queueIcon.style.filter = "var(--make-svg-black)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 100%";
        queueEnvironment.style.right = "0%";

        return
    }
    if (state == "hidden") {
        queueIcon.style.filter = "var(--make-svg-grey)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 0%";
        queueEnvironment.style.right = "calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";

        return
    }
    return
}


import queueItem from '../html/queueItem.html?raw';

/* update the queue display blocks

we want the only export here to be the update function
 */
function hydrateQueue() {
    const queueContainer = document.getElementById("QUEUEbottomContainer");

    let htmls = ""

    let blocksNeeded = 25;

    queueContainer.innerHTML = "";
    for (let i = 0; i < blocksNeeded; i++) {
        htmls = hydrateItem(i)
        queueContainer.innerHTML += htmls;

    }
    return
}

import icons_menuOptionsButton from '../assets/icons/menu_options_button.svg';

function hydrateItem(thing) {
    const listOfThings = ['QUEUE_item_image', 'QUEUE_item_title', 'QUEUE_item_artist', 'icons_menuOptionsButton', 'QUEUE_item_timeIndicator'];

    const imgSrc = "https://plus.unsplash.com/premium_photo-1664478250378-4afecb3f977c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
    const songTitle = "song title" + thing;
    const songArtist = "song artist" + thing;
    const songDuration = "1:32";



    let replacedContent = queueItem;
    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = thing;

        const currentThing = listOfThings[i];

        if (currentThing == 'QUEUE_item_image') {
            value = imgSrc;
        }

        if (currentThing == 'QUEUE_item_title') {
            value = songTitle;
        }

        if (currentThing == 'QUEUE_item_artist') {
            value = songArtist;
        }

        if (currentThing == 'icons_menuOptionsButton') {
            value = icons_menuOptionsButton;
        }

        if (currentThing == 'QUEUE_item_timeIndicator') {
            value = songDuration;
        }

        replacedContent = replacedContent.replace(regex, value);
    }

    return replacedContent;
}












/*  */