import { MENUdisplay, menuHide_foreign } from './menu.js';

export function detect_when_image_is_interacted(project_id, imageID, menu_type) {
    const image = document.getElementById(imageID);
    let touchStartTimestamp;
    let pressTimer;

    // Add touchstart event listener to record the touch start timestamp
    image.addEventListener('touchstart', function(e) {
        touchStartTimestamp = e.timeStamp;

        // Start the timer for long press
        pressTimer = setTimeout(function() {
            // Long press detected
            show_image_options(e, project_id, menu_type);
        }, 500); // Adjust the time (in milliseconds) for a long press as needed
    });

    // Add touchend event listener to detect when the touch ends
    image.addEventListener('touchend', function(e) {
        // Calculate the duration of the touch event
        const touchEndTimestamp = e.timeStamp;
        const touchDuration = touchEndTimestamp - touchStartTimestamp;

        // Clear the long press timer
        clearTimeout(pressTimer);
    });

    image.addEventListener('dblclick', function(e) {
        show_image_options(e, project_id, menu_type);
    })

    function show_image_options(e, project_id, menu_type) {
        displayMenuImage(e, project_id, menu_type);
    }
}

function displayMenuImage(event, project_id, menu_type) {
    const clickedItem = event.target;
    const params = {
        project_id: project_id
    }

    event.stopPropagation();

    MENUdisplay(params, event, menu_type);
    return;
}