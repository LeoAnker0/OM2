let signedIn = false;
let loginAttempted = false; // New flag to track login attempts


async function makeRequest(url, method, data) {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
}



export function initSettings() {
    loadInContainer();
    return new Promise((resolve, reject) => {
        async function tryLogin(attempts) {
            if (attempts >= 25) {
                // Maximum number of attempts reached, reject the Promise
                reject(new Error("Login failed after multiple attempts"));
                location.reload();
                return;
            }


            const loginForm = document.getElementById('SETTINGSloginForm');

            // Use a regular function for the event listener
            loginForm.addEventListener('submit', async function(event) {
                event.preventDefault(); // Prevent the default form submission behavior

                const emailValue = event.target.email.value;
                const passwordValue = event.target.password.value;

                try {
                    const loginData = {
                        email: emailValue,
                        password: passwordValue,
                    };

                    const apiUrl = 'https://om2apis.la0.uk/login/'; // Replace with your actual API endpoint

                    // Make the login API request using the utility function
                    const response = await makeRequest(apiUrl, 'POST', loginData);

                    // Assuming the API returns some JSON data with a 'success' property indicating login status
                    if (response.success == "true") {
                        // Successfully logged in
                        loginSuccessAnimation();
                        setTimeout(hideContainer, 2000);
                        signedIn = true;
                        resolve(true); // Resolve the promise with true
                    } else {
                        // Login failed, handle accordingly (show error message, etc.)
                        loginErrorAnimation();
                        tryLogin(attempts + 1); // Retry login by calling the function again with an incremented attempts count
                    }
                } catch (error) {
                    reject(error); // Reject the promise with the fetch error or any other error
                }
            });
        }

        if (signedIn === false) {
            tryLogin(1); // Start the login attempt with attempts count set to 1
        } else {
            console.log('already signedIn');
            resolve(true); // Resolve the promise with true as the user is already signed in
        }
    });
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