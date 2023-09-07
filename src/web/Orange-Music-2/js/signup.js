import form from '../html/signupForm.html?raw';

import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';


export function init_signup_form() {
    setTimeout(() => {
        let IDofElement = "MAINcontentPages";
        let replacedContent = form;

        /*
        for (const [placeholder, value] of Object.entries(svgImports)) {
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            replacedContent = replacedContent.replace(regex, value);
        }
        */
        document.getElementById(IDofElement).innerHTML += replacedContent;

        //const imageInput = document.getElementById("profilePicture");
        //imageInput.addEventListener("change", previewImage);

        const signupForm = document.getElementById("SETTINGSsignupForm");
        signupForm.addEventListener("submit", signup);

    }, 1);
}


function previewImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const file = input.files[0];

        // Check the image size before converting to Base64
        if (file.size > 5 * 1024 * 1024) {
            const errorMessage = "Image size exceeds 5 MB limit";
            //console.log(errorMessage);
            alert(errorMessage);
            const imageInput = document.getElementById("profilePicture");
            imageInput.value = ""; // Clear the file selection by setting the value to an empty string
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("previewImage");
            preview.src = e.target.result;
        };

        // Read the image file as a data URL.
        reader.readAsDataURL(file);
    }
}



async function signup(event) {
    console.log("the signup event was caught")

    event.preventDefault();
    startSpinner();

    const form = document.getElementById("SETTINGSsignupForm");
    const formData = {};

    // Function to convert the selected image to Base64
    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Check the image size before converting to Base64
            if (file.size > 5 * 1024 * 1024) {
                //console.log("Image size exceeds 5 MB limit");
                reject("Image size exceeds 5 MB limit");
                return;
            }

            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.readAsDataURL(file);
        });
    };

    try {
        // Step 1: Send only the email field first
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
            // Handle error response from the server if needed
            const errorData = await response.json();
            //console.error(errorData);

            stopSpinner();
            loginErrorAnimation()

            const errorMessage = "There was an error with the email, check that the details are correct.";
            alert(errorMessage);

        } else {
            // If the email is valid, continue with the second step
            const responseData = await response.json();

            // Step 2: Update formData with the received token and send the rest of the form data
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
            // Send the rest of the form data
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
                // Handle error response from the server if needed
                const errorData = await secondResponse.json();
                //console.error(errorData);

                const errorMessage = "There was an error, try again";
                alert(errorMessage);
            } else {
                // Handle successful response from the server if needed
                const responseData = await secondResponse.json();
                // Do something with the response, e.g., show a success message to the user

                stopSpinner();
                loginSuccessAnimation()

                setTimeout(function() {
                    console.log("signup very successful move to normal pages and stuff")
                    window.location.href = '/';
                }, 2000);

            }
        }
    } catch (error) {
        // Handle network errors or other exceptions
        //console.error(error);
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