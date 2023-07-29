import './signupPage.css'
import form from './html/signupForm.html?raw';

document.querySelector('#app').innerHTML = form

const imageInput = document.getElementById("profilePicture");
imageInput.addEventListener("change", previewImage);

function previewImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const file = input.files[0];
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

    const form = document.getElementById("SETTINGSloginForm");
    const formData = {};

    // Function to convert the selected image to Base64
    const convertImageToBase64 = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
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
        } else {
            // If the email is valid, continue with the second step
            const responseData = await response.json();
            console.log("First step response:", responseData);

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
                console.log("Second step response:", responseData);
                // Do something with the response, e.g., show a success message to the user

                console.log("lets move to the normal site")
            }
        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error(error);

        console.log("there was an error, lets try again")
    }
}