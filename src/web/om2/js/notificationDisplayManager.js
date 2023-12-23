const waitTime = 1500;
let notificationsManaged = 0;
let notificationQueue = [];
let lastTime;

export function HandleCreateNotification(notificationText, notificationType) {
    const date = new Date();
    const time = date.getTime();

    notificationQueue.push({
        notificationText,
        notificationType,
        time
    })

    manageNotifications();
}

function manageNotifications() {
    const date = new Date();
    const time = date.getTime();
    const currentNotification = notificationQueue.at(notificationsManaged);

    if (notificationQueue.length > 1) {
        const lastNotification = notificationQueue.at((notificationsManaged - 1));

        if ((time - lastTime) > waitTime) {
            // When notifications !collide, create them;
            createNotification(currentNotification.notificationText, currentNotification.notificationType);
            lastTime = time;

        } else {
            // When notificaitons collide, wait for waitTime, using *recursion*
            setTimeout(manageNotifications, waitTime);
        }

    } else {
        createNotification(currentNotification.notificationText, currentNotification.notificationType);
        lastTime = time;
    }
}


function createNotification(notificationText, notificationType) {
    const notificationContainer = document.getElementById("noticationContainer");
    let backgroundColour;
    notificationsManaged += 1;

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