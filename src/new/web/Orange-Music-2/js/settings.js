const signedIn = true

export function initSettings() {
    if (signedIn == false) {
        loadInContainer();
        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('SETTINGSloginForm');

            // Add an event listener for the form's submit event
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission behavior

                loginErrorAnimation();

                const emailValue = event.target.email.value;
                const passwordValue = event.target.password.value;

                console.log('Form submitted!', emailValue, passwordValue);

                setTimeout(hideContainer, 2000);

            });
        });

    } else {
        console.log("already signedIn");
    }

}

import settingsModal from '../html/settingsModal.html?raw';
import { svgImports } from './importAssets.js';

function loadInContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = settingsModal;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}

function hideContainer() {
    const settingsModal = document.getElementById("SETTINGSmodalID");
    settingsModal.remove();
    return
}


function loginSuccessAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");

    // Remove the animation classes to reset the animation state
    element.classList.remove('SETTINGSanimateError', 'SETTINGSanimateGreen');

    // Add the animation class to start the animation
    element.classList.add('SETTINGSanimateGreen');

    // Add an event listener to detect when the animation ends
    element.addEventListener('animationend', () => {
        // Remove the animation class after the animation ends
        element.classList.remove('SETTINGSanimateGreen');
    });

    return;
}

function loginErrorAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");

    // Remove the animation classes to reset the animation state
    element.classList.remove('SETTINGSanimateError', 'SETTINGSanimateGreen');

    // Add the animation class to start the animation
    element.classList.add('SETTINGSanimateError');

    // Add an event listener to detect when the animation ends
    element.addEventListener('animationend', () => {
        // Remove the animation class after the animation ends
        element.classList.remove('SETTINGSanimateError');
    });

    return;
}