export function initSettings() {


    loadInContainer();


    const loginForm = document.getElementById('SETTINGSloginForm');

    // Add an event listener for the form's submit event
    loginForm.addEventListener('submit', function(event) {
        console.log("cheese day");
        event.preventDefault(); // Prevent the default form submission behavior

        const emailValue = event.target.email.value;
        const passwordValue = event.target.password.value;

        console.log('Form submitted!');
    });
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

function loginSuccessAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");
    element.classList.remove('SETTINGSanimateError');
    element.classList.remove('SETTINGSanimateGreen');
    element.classList.add('SETTINGSanimateGreen');
    return
}

function loginErrorAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");
    element.classList.remove('SETTINGSanimateError');
    element.classList.remove('SETTINGSanimateGreen');
    element.classList.add('SETTINGSanimateError');
    return
}