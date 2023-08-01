import './signupPage.css'
import form from './html/signupForm.html?raw';

document.querySelector('#app').innerHTML = form

const imageInput = document.getElementById("profilePicture");
imageInput.addEventListener("change", previewImage);

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

const signupForm = document.getElementById("SETTINGSloginForm");
signupForm.addEventListener("submit", signup);

async function signup(event) {
    event.preventDefault();
    startSpinner();

    const form = document.getElementById("SETTINGSloginForm");
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

        const response = await fetch("https://om2apis.la0.uk/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            // Handle error response from the server if needed
            const errorData = await response.json();
            console.error(errorData);

            console.log("email error")
            stopSpinner();
            loginErrorAnimation()

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
                "https://om2apis.la0.uk/signup/complete/", {
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
                console.error(errorData);
            } else {
                // Handle successful response from the server if needed
                const responseData = await secondResponse.json();
                // Do something with the response, e.g., show a success message to the user

                stopSpinner();
                loginSuccessAnimation()

                setTimeout(function() {
                    redirectToPage("http://localhost:5175");
                }, 3000);

            }
        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error(error);
        stopSpinner();
        loginErrorAnimation()


        console.log("there was an error, lets try again")
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

function redirectToPage(url) {
    window.location.href = url;
}