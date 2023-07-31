import './admin.css'
import form from './html/delete_user.html?raw';

document.querySelector('#app').innerHTML = form

const signupForm = document.getElementById("SETTINGSloginForm");
signupForm.addEventListener("submit", signup);

async function signup(event) {
    event.preventDefault();

    const form = document.getElementById("SETTINGSloginForm");
    const formData = {};

    try {
        // Step 1: Send only the email field first
        for (const element of form.elements) {

            formData[element.name] = element.value;
            console.log(element.name, ":", element.value)

        }

        const response = await fetch("http://localhost:10001/send_message/", {
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


        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error(error);

        console.log("there was an error, lets try again")
    }
}