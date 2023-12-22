export function HandleCreateNotification(notificationText, notificationType) {
    createNotification(notificationText, notificationType);
}


function createNotification(notificationText, notificationType) {
    const notificationContainer = document.getElementById("noticationContainer");
    let backgroundColour;

    if (notificationType == "error") {
        backgroundColour = "var(--whoopsie)";
    } else if (notificationType == "success") {
        backgroundColour = "var(--success)";
    } else if (notificationType == "background") {
        backgroundColour = "var(--background)";
    } else if (notificationType == "orange") {
        backgroundColour = "var(--orange)";
    } else if (notificationType == "primary") {
        backgroundColour = "var(--primary)";
    } else if (notificationType == "secondary") {
        backgroundColour = "var(--secondary)";
    }

    // Create a new div element
    const newNotification = document.createElement('div');
    newNotification.style.backgroundColor = backgroundColour;
    newNotification.textContent = notificationText;

    // Append the div to the body (or any other desired parent element)
    notificationContainer.appendChild(newNotification);
}