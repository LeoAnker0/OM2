let queueState = "hidden";

import { loadQUEUEbody } from './exportHTMLchunks.js';

export function initialiseQueue() {
    const queueButton = document.getElementById("queueButton");
    queueStateChange(queueState);
    queueButton.addEventListener('click', queueToggle);

    /* load in the html for loading in the queue */
    loadQUEUEbody();


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

    if (state == "visible") {
        queueIcon.style.filter = "var(--make-svg-black)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 100%";
        return
    }
    if (state == "hidden") {
        queueIcon.style.filter = "var(--make-svg-grey)";
        document.documentElement.style.cssText = "--TOPRIGHT-accountcontrols-queue-opacity: 0%";

        return
    }
    return
}