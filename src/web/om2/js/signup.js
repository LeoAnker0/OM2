import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import form from '../html/signupForm.html?raw';

export function init_signup_form() {
    setTimeout(() => {
        let IDofElement = "MAINcontentPages";
        let replacedContent = form;

        document.getElementById(IDofElement).innerHTML += replacedContent;
        const signupForm = document.getElementById("SETTINGSsignupForm");
        signupForm.addEventListener("submit", signup);

    }, 1);
}

async function signup(event) {
    console.log("the signup event was caught")
    event.preventDefault();
    startSpinner();
    const form = document.getElementById("SETTINGSsignupForm");
    const formData = {};

    try {
        for (const element of form.elements) {
            if (element.type === "email") {
                formData[element.name] = element.value;
            }
        }

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/signup/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = "There was an error with the email, check that the details are correct.";
            stopSpinner();
            loginErrorAnimation()
            alert(errorMessage);

        } else {
            const responseData = await response.json();
            formData["token"] = responseData.token;
            for (const element of form.elements) {
                if (element.type === "file") {
                    const file = element.files[0];
                    if (file) {
                        // Convert the image to Base64
                        const base64Image = await convertImageToBase64(file);
                        formData[element.name] = base64Image;
                    }
                } else {
                    formData[element.name] = element.value;
                }

            }
            const secondResponse = await fetch(
                `${MAIN_CONST_EXPORT_apiPath}/signup/complete/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!secondResponse.ok) {
                const errorData = await secondResponse.json();
                const errorMessage = "There was an error, try again";
                alert(errorMessage);
            } else {
                const responseData = await secondResponse.json();
                stopSpinner();
                loginSuccessAnimation()

                setTimeout(function() {
                    console.log("signup very successful move to normal pages and stuff")
                    window.location.href = '/';
                }, 2000);
            }
        }
    } catch (error) {
        stopSpinner();
        loginErrorAnimation()
        const errorMessage = "There was an error, try again";
        alert(errorMessage);
    }
}

function startSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
}

function stopSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
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