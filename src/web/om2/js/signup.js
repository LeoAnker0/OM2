import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { HandleCreateNotification } from './notificationDisplayManager.js';
import form from '../html/signupForm.html?raw';
import { handleRoute } from './routing.js';
import { initLogin } from './login.js';


export function init_signup_form() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = form;

    document.getElementById(IDofElement).innerHTML = replacedContent;
    const signupForm = document.getElementById("SETTINGSsignupForm");
    signupForm.addEventListener("submit", signup);

    const returnToLoginButton = document.getElementById("SIGNUPMODAL_return_to_login_button");
    returnToLoginButton.addEventListener("click", function() {
        handleRoute("/");
    })

}

async function signup(event) {
    event.preventDefault();
    const form = document.getElementById("SETTINGSsignupForm");
    const formData = {};

    try {
        /* add the signup details to the formData*/
        for (const element of form.elements) {
            if (formData[element.name] == "Submit") {} else {
                formData[element.name] = element.value;
            }
        }

        const response = await fetch(
            `${MAIN_CONST_EXPORT_apiPath}/users/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        if (!response.ok) {
            const errorData = response;
            HandleCreateNotification(`There was an error, ${errorData}`, "error")

        } else {
            const responseData = response;
            HandleCreateNotification(`Sign up Successful, Log in now`, "success");

            handleRoute("/");
        }

    } catch (error) {
        HandleCreateNotification("There was an error, try again", "error")
    }
}