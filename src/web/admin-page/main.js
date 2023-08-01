import './admin.css'
import form from './html/delete_user.html?raw';

document.querySelector('#app').innerHTML = form

import userRow from './html/usersTableRow.html?raw';

const usersTable = document.getElementById("usersTableEnvironment")

//get the list of users from the server
//then for the no of users from the server add those  into the table via this here

for (let i = 0; i < 6; i++) {
    const listOfThings = ['Username', 'Email', 'UUID', 'Verified', 'Space_Used'];

    let replacedContent = userRow;

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'Username') {
            value = "leo";
        } else if (placeholder === 'Email') {
            value = "leo@loe.leo";
        } else if (placeholder === 'UUID') {
            value = "f0d686b0-25fc-4c8c-84c6-a66f23ca8a77";
        } else if (placeholder === 'Verified') {
            value = "False";
        } else if (placeholder === 'Space_Used') {
            value = "5mb";
        }

        replacedContent = replacedContent.replace(regex, value);
    }
    usersTable.innerHTML += replacedContent
}



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
        }

        const response = await fetch("http://localhost:10001/delete_user/", {
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