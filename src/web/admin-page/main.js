import './admin.css'
import form from './html/delete_user.html?raw';

document.querySelector('#app').innerHTML = form

import userRow from './html/usersTableRow.html?raw';

const usersTableEnvironment = document.getElementById("usersTableInforRowsContainer")


async function loadTable() {
    //get the list of users from the server
    try {
        const response = await fetch("http://localhost:10001/retrieve_users_table/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            // Handle error response from the server if needed
            const errorData = await response.json();
            console.error(errorData);

            console.log("error")
        } else {
            const responseData = await response.json();
            const usersTable = responseData.response;
            const usersTableLength = usersTable.length;

            usersTableEnvironment.innerHTML = "";
            for (let i = 0; i < usersTableLength; i++) {
                const listOfThings = ['Username', 'Email', 'UUID', 'Verified', 'Space_Used'];

                const username = usersTable[i].username;
                const uuid = usersTable[i].uuid;
                const verified = usersTable[i].verified;
                const email = usersTable[i].email;


                let replacedContent = userRow;

                for (let i = 0; i < listOfThings.length; i++) {
                    const placeholder = listOfThings[i].toString();
                    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
                    let value = '';

                    if (placeholder === 'Username') {
                        value = username;
                    } else if (placeholder === 'Email') {
                        value = email;
                    } else if (placeholder === 'UUID') {
                        value = uuid;
                    } else if (placeholder === 'Verified') {
                        value = verified;
                    } else if (placeholder === 'Space_Used') {
                        value = "5mb";
                    }

                    replacedContent = replacedContent.replace(regex, value);
                }
                usersTableEnvironment.innerHTML += replacedContent

                // Add the event listener to the parent container <div>
                usersTableEnvironment.addEventListener("dblclick", (event) => {
                    const target = event.target.closest(".cell");
                    if (target.classList.contains("cell")) {
                        event.stopPropagation(); // Prevent event propagation
                        copyToClipboard(target.textContent.trim());
                    }
                });
            }
        }

    } catch (error) {
        // Handle network errors or other exceptions
        console.error(error);

        console.log("there was an error, lets try again")
    }
}

async function copyToClipboard(rowElement) {
    const textarea = document.createElement("textarea");
    textarea.value = rowElement;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to clipboard
    document.execCommand("copy");

    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);
}
loadTable()

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