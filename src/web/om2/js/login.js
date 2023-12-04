import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import settingsModal from '../html/settingsModal.html?raw';
import { init_signup_form } from './signup.js';
import { MENUdisplay } from './menu.js';
import { svgImports } from './importAssets.js';
import { main } from '../main.js';

let loginAttempted = false;
let loginFormLoaded = false;
let containerHid = false;
let signedIn = false;

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

function loadLoginForm() {
    loadInContainer(); // Load the form in the container
    const SETTINGSmodalSignupButton = document.getElementById("SETTINGSmodalSignupButton");
    let signups_allowed;

    /* check if signups are allowed, and if not then don't  */
    fetch(`${MAIN_CONST_EXPORT_apiPath}/meta/are_signups_allowed`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            s
        })
        .then(data => {
            signups_allowed = data.signups_allowed;
            if (signups_allowed === "true") {
                SETTINGSmodalSignupButton.style.display = "inline-block";
                SETTINGSmodalSignupButton.addEventListener("click", () => {
                    console.log("signup button was pressed")
                    hideContainer();
                    init_signup_form();
                    return
                })
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    const loginForm = document.getElementById("SETTINGSloginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (loginAttempted) return false; // Don't attempt login if it's already been tried
        loginAttempted = true;

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            const authenticated = await login(email, password);

            if (authenticated) {
                signedIn = true;
                loginSuccessAnimation();
                main()
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

async function login(email, password) {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.Authenticated === true) {
            const jwt = data.jwt
            localStorage.setItem("JWT", jwt)
        }
        return data.Authenticated;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function prelogin() {
    const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/prelogin`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const data = await response.json();

    if ((!response.ok) && (response.status === 401) && (data.Authenticated == false)) {
        //displayNotice("event", "please excuse the state of the codebase")
        return false;
    } else if (!response.ok) {
        console.log("There was an unknown error:", response)
        return false;
    } else if (response.ok && (data.Authenticated == true)) {
        // The desired outcome
        return true;
    } else if (response.ok) {
        console.log("The response was ok, but the correct data wasn't sent.");
        return false;
    } else {
        console.log("Catch all that shouldn't be needed.");
        return false;
    }
}

function displayNotice(event, project_id) {
    const menu_type = "notice";
    const params = [{
        displayText: 'Your JWT has expired, please sign in.',
        optionalSVG: 'None',
        function: 'None'
    }]

    MENUdisplay(params, event, menu_type);
    return;
}

function loadInContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = settingsModal;
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}


function hideContainer() {
    if (containerHid === true) {
        return
    }
    containerHid = true;
    const settingsModal = document.getElementById("SETTINGSmodalID");
    try {
        settingsModal.remove();

    } catch {}
    return
}


function loginSuccessAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");
    element.classList.remove('SETTINGSanimateError', 'SETTINGSanimateGreen');
    element.classList.add('SETTINGSanimateGreen');
    element.addEventListener('animationend', () => {
        element.classList.remove('SETTINGSanimateGreen');
    });
    return;
}

function loginErrorAnimation() {
    const element = document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");
    element.classList.remove('SETTINGSanimateError', 'SETTINGSanimateGreen');
    element.classList.add('SETTINGSanimateError');
    element.addEventListener('animationend', () => {
        element.classList.remove('SETTINGSanimateError');
    });
    return;
}