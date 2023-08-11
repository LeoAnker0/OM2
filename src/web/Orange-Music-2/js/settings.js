let loginAttempted = false; // New flag to track login attempts
let signedIn = false;
let loginFormLoaded = false; // Flag to track if the login form has been loaded and event listener attached



export async function initSettings() {
    const jwt = await prelogin();
    if (!jwt) {
        if (!loginFormLoaded) {
            loadLoginForm(); // Load the login form and attach the event listener only once
            loginFormLoaded = true;
        }
    } else {
        main();
    }
}

import { main } from '../main.js';

function loadLoginForm() {
    loadInContainer(); // Load the form in the container

    const loginForm = document.getElementById("SETTINGSloginForm"); // Updated ID to match the form in settingsModal.html
    const emailInput = document.getElementById("email"); // Updated ID to match the email input in settingsModal.html
    const passwordInput = document.getElementById("password"); // Updated ID to match the password input in settingsModal.html

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        if (loginAttempted) return false; // Don't attempt login if it's already been tried

        loginAttempted = true;

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            // Make the API call to authenticate the user
            const authenticated = await login(email, password);

            if (authenticated) {
                signedIn = true;
                loginSuccessAnimation();

                //tell the other things to run now
                main()

                //await for 2000 and then do hide container
                setTimeout(hideContainer, 2000);

            } else {
                signedIn = false;
                loginErrorAnimation();
                console.log("Login failed. Retry!");
            }

            loginAttempted = false; // Reset the loginAttempted flag to allow retrying on subsequent attempts
        } catch (error) {
            console.error("Error:", error);
            loginAttempted = false; // Reset the loginAttempted flag in case of an error, to allow retrying
        }

        return false; // Prevent the form from refreshing the page
    });
}




// The rest of the code remains unchanged

async function login(email, password) {
    try {
        const response = await fetch("https://om2apis.la0.uk/login/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.authenticated === true) {
            const jwt = data.jwt

            //set jwt to local storage
            localStorage.setItem("JWT", jwt)

        }


        return data.authenticated;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}







export async function prelogin() {
    console.log("prelogin")

    try {
        const jwt = localStorage.getItem('JWT');

        if (jwt == null) {
            // Key 'JWT' exists in localStorage
            return false
        }
    } catch (error) {
        // Error accessing localStorage
        console.error('Error accessing localStorage:', error);
        return false;
    }



    try {
        const jwt = localStorage.getItem('JWT');
        const response = await fetch("https://om2apis.la0.uk/prelogin/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jwt })
        });
        const data = await response.json();

        return data.authenticated;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}
import settingsModal from '../html/settingsModal.html?raw';
/*
import { svgImports } from './importAssets.js';
*/

function loadInContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = settingsModal;

    /*
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    */
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}

let containerHid = false;

function hideContainer() {
    if (containerHid === true) {
        return
    }
    const settingsModal = document.getElementById("SETTINGSmodalID");
    settingsModal.remove();
    containerHid = true;
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