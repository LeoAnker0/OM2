/* loading in the menu modal, and that alone ------------ */
import menuModal from '../html/menuModal.html?raw';
import update_project_imageModal from '../html/update_project_imageModal.html?raw';
import { is_mobile } from './om2.js';
import menuItem from '../html/menuModalItem.html?raw';
import { svgImports } from './importAssets.js';
import lcd_mobile_body from '../html/lcd_mobile_body.html?raw';
import { PLAYBACK_current_img, PLAYBACK_current_song_title, PLAYBACK_current_song_artist, PLAYBACK_handle_PLAYER_nextButton, PLAYBACK_handle_PLAYER_playButton, PLAYBACK_handle_PLAYER_backButton, PLAYBACK_songs_array, PLAYBACK_songs_array_index } from './playback.js';
import lcd_mobile_queue_item from '../html/lcd_mobile_queue_item.html?raw';
import { MAIN_CONST_EXPORT_mediaPath, MAIN_CONST_EXPORT_apiPath } from '../main.js';



export function MENUdisplay(params, event, menu_type) {

    //undefined    
    if (menu_type === undefined) {
        handle_normal_context_menu(params, event);
    }

    //defined and type == update_project_image
    if ((menu_type !== undefined) && menu_type === "update_project_image") {
        handle_update_project_image(params, event);
    }
    //defined and type == lcd_mobile_body
    if ((menu_type !== undefined) && menu_type === "lcd_mobile_body") {
        handle_lcd_mobile_body(params, event);
    }
}


let queue_displayed = false;

function handle_lcd_mobile_body(params) {
    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    // check if mobile
    if (is_mobile()) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }
    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.style.display = "block";

    let replacedContent = lcd_mobile_body;

    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    MENUmodalEnvironment.innerHTML = replacedContent;
    /* all content above is mostly template ------------------------------------------ */

    /* handle the main mobile lcd page */

    const playbackSeek = document.getElementById("LCDMB_seek_input");
    const playbackSeekIndicator = document.getElementById("LCDMB_seek_indicator");
    const menuButton = document.getElementById("LCDMB_menu_button");
    const backButton = document.getElementById("LCDMB_back");
    const playButton = document.getElementById("LCDMB_play");
    const playIcon = document.getElementById("LCDMB_play_icon");
    const nextButton = document.getElementById("LCDMB_next");
    const queueButton = document.getElementById("LCDMB_queue_button");

    const PLAYBACK_audio_tag = document.getElementById("audio");
    const title = document.getElementById("LCD_mobile_body_song_title");
    const artist = document.getElementById("LCD_mobile_body_artist_title");
    const image = document.getElementById("LCD_mobile_body_img");

    /* on load get the most recent details, and then add an event listener for the end of the song, 
    to then get new details again.
     */
    function update_display() {
        image.src = PLAYBACK_current_img;
        title.innerText = PLAYBACK_current_song_title;
        artist.innerText = PLAYBACK_current_song_artist;
    }
    PLAYBACK_audio_tag.addEventListener('ended', () => {
        update_display();
        if (queue_displayed === true) {
            load_mobile_queue();
        }
    });

    update_display();

    /* check if  audo is playing */
    function is_audio_paused() {
        if (PLAYBACK_audio_tag.paused) {
            playIcon.src = svgImports["icons_playButtonV2"];
        } else {
            playIcon.src = svgImports["icons_derpy"];
        }

    }

    is_audio_paused();



    const endOfAudio = PLAYBACK_audio_tag.duration;
    const currentTime = PLAYBACK_audio_tag.currentTime;
    //const timeRight = Math.floor(endOfAudio) - currentTime;
    //const timeRightFormatted = `"-${formatTime(timeRight)}"`;
    //const timeLeft = formatTime(Math.floor(currentTime));
    //const timeLeftFormatted = `"${timeLeft}"`
    const progressPercent = (currentTime / endOfAudio) * 100;
    playbackSeekIndicator.style.width = `${progressPercent}%`;

    PLAYBACK_audio_tag.addEventListener("timeupdate", () => {
        const endOfAudio = PLAYBACK_audio_tag.duration;
        const currentTime = PLAYBACK_audio_tag.currentTime;
        //const timeRight = Math.floor(endOfAudio) - currentTime;
        //const timeRightFormatted = `"-${formatTime(timeRight)}"`;
        //const timeLeft = formatTime(Math.floor(currentTime));
        //const timeLeftFormatted = `"${timeLeft}"`
        const progressPercent = (currentTime / endOfAudio) * 100;
        playbackSeekIndicator.style.width = `${progressPercent}%`;
    });


    playbackSeek.addEventListener("input", function() {
        const endOfAudio = PLAYBACK_audio_tag.duration;
        const value = playbackSeek.value;
        PLAYBACK_audio_tag.currentTime = ((endOfAudio) * (value / 100));
    });


    backButton.addEventListener('click', () => {
        PLAYBACK_handle_PLAYER_backButton()
        update_display();
        if (queue_displayed === true) {
            load_mobile_queue();
        }
    })

    playButton.addEventListener('click', () => {
        PLAYBACK_handle_PLAYER_playButton();
        update_display();
        is_audio_paused();
    })

    nextButton.addEventListener('click', () => {
        PLAYBACK_handle_PLAYER_nextButton();
        update_display();
        if (queue_displayed === true) {
            load_mobile_queue();
        }
    })
    const classesToTarget = [
        'LCD_mobile_body_container_l2', 'LCD_mobile_body_img',
        'LCD_mobile_body_title_area_container', 'LCD_mobile_body_song_title',
        'LCD_mobile_body_artist_title', 'LCD_mobile_body_progress_bar',
        'LCD_mobile_body_menu', 'LCD_mobile_body_queue_container', 'LCD_mobile_body_secondary_seek_indicator'
    ];

    queueButton.addEventListener('click', () => {
        if (queue_displayed === false) {
            display_mobile_queue();
            queue_displayed = true
        } else {
            hide_mobile_queue();
            queue_displayed = false;
        }

    })
    if (queue_displayed === true) {
        display_mobile_queue();
    } else {
        hide_mobile_queue();
    }

    function load_mobile_queue() {
        const mobile_queue_container = document.getElementById("LCD_mobile_queue_content_container");

        mobile_queue_container.innerHTML = "";


        for (let i = (PLAYBACK_songs_array_index + 1); i < PLAYBACK_songs_array.length; i++) {
            const song = PLAYBACK_songs_array[i];

            const listOfThings = ['queue_item_img', 'queue_item_song_name', 'queue_item_song_artist', 'icons_menuOptionsButton', 'QUEUE_item_timeIndicator'];
            const imgSrc = song.img;
            const songTitle = song.song_name;
            const songArtist = song.project_contributors;
            //const songDuration = `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`;

            let replacedContent = lcd_mobile_queue_item;

            for (let i = 0; i < listOfThings.length; i++) {
                const placeholder = listOfThings[i].toString();
                const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
                let value = '';

                if (placeholder === 'queue_item_img') {
                    const image = `${MAIN_CONST_EXPORT_mediaPath}/${imgSrc}/3/`;

                    value = image;
                } else if (placeholder === 'queue_item_song_name') {
                    value = songTitle;
                } else if (placeholder === 'queue_item_song_artist') {
                    value = songArtist;
                }

                replacedContent = replacedContent.replace(regex, value);
            }

            mobile_queue_container.innerHTML += replacedContent;
        }
    }



    function display_mobile_queue() {
        // Function to add the .queue_visible class to elements with specified classes
        function addQueueVisibleClassToElements(classes) {
            classes.forEach(className => {
                const elementsWithClass = document.querySelectorAll('.' + className);
                elementsWithClass.forEach(element => {
                    element.classList.add('queue_visible');
                });
            });
        }
        addQueueVisibleClassToElements(classesToTarget);
        MENUmodalEnvironment.removeEventListener('touchstart', handleTouchStart);
        MENUmodalEnvironment.removeEventListener('touchmove', handleTouchMove);
        MENUmodalEnvironment.removeEventListener('touchend', handleTouchEnd);
        load_mobile_queue();







    }

    function hide_mobile_queue() {

        // Function to remove the .queue_visible class to elements with specified classes
        function removeQueueVisibleClassToElements(classes) {
            classes.forEach(className => {
                const elementsWithClass = document.querySelectorAll('.' + className);
                elementsWithClass.forEach(element => {
                    element.classList.remove('queue_visible');
                });
            });
        }

        removeQueueVisibleClassToElements(classesToTarget);
        MENUmodalEnvironment.addEventListener('touchstart', handleTouchStart, false);
        MENUmodalEnvironment.addEventListener('touchmove', handleTouchMove, false);
        MENUmodalEnvironment.addEventListener('touchend', handleTouchEnd, false);


    }




    /* the code for getting the whole view to hide itself again -------------------------- -- -- -- -- -- */
    MENUmodalEnvironment.addEventListener('touchstart', handleTouchStart, false);
    MENUmodalEnvironment.addEventListener('touchmove', handleTouchMove, false);
    MENUmodalEnvironment.addEventListener('touchend', handleTouchEnd, false);

    let touchStartY = 0;
    let touchEndY = 0;

    function handleTouchStart(event) {
        if (queue_displayed === false) {
            touchStartY = event.touches[0].clientY;

        }

    }

    function handleTouchMove(event) {
        // Prevent scrolling while swiping
        event.preventDefault();
    }

    function handleTouchEnd(event) {
        touchEndY = event.changedTouches[0].clientY;

        // Calculate the vertical distance moved during the swipe
        const deltaY = touchEndY - touchStartY;

        // Set a threshold for swipe detection
        const swipeThreshold = 70; // Adjust this value as needed

        // Check if the vertical distance is greater than the threshold
        if (deltaY > swipeThreshold) {
            // Perform your desired action when a down swipe is detected
            // Add your code here
            menuHide_foreign();

            MENUmodalEnvironment.removeEventListener('touchstart', handleTouchStart);
            MENUmodalEnvironment.removeEventListener('touchmove', handleTouchMove);
            MENUmodalEnvironment.removeEventListener('touchend', handleTouchEnd);

        }
    }

}

function handle_normal_context_menu(params, event) {

    const X = event.clientX;
    const Y = event.clientY;

    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    // check if mobile
    if (is_mobile()) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }



    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    MENUmodalEnvironment.innerHTML = menuModal;

    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);

    let x = (X) + "px";
    let y = (Y) + "px";

    MENUmodalBody.style.left = x;
    MENUmodalBody.style.top = y;


    for (let i = 0; i < params.length; i++) {
        addModalItem(params[i]);
    }

    const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
    const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;

    const overflowStates = showElementDetails('MENUmodalBody');
    //console.log(overflowStates);

    if (overflowStates.xOverflow == true) {
        x = (X - MENUmodalBodyWidth) + "px";
        MENUmodalBody.style.left = x;
    }
    if (overflowStates.yOverflow == true) {
        y = (Y - MENUmodalBodyHeight) + "px";
        MENUmodalBody.style.top = y;
    }


    // Attach event listeners to all the dynamically generated divs
    const menuItems = MENUmodalBody.getElementsByClassName('MENUmodalItemContainer');
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.setAttribute('data-menu-item-id', i);

        menuItem.addEventListener('click', function(event) {
            event.stopPropagation();

            // Perform the action here using the parameters
            const clickedElement = event.target;
            const menuItemId = clickedElement.getAttribute('data-menu-item-id');
            const functionToCall = params[menuItemId].function;
            const optionalParams = params[menuItemId].optionalParams;

            if (functionToCall == "TEST") {
                console.log("the button worked");
            } else if (functionToCall != "None") {
                MENU_ACTION_FUNCTIONS[functionToCall](optionalParams);
                return;
            } else {
                return;

            }
        });
    }
}
import { upload_image_files } from './file_upload.js';

function handle_update_project_image(params, event) {
    const X = event.clientX;
    const Y = event.clientY;

    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    // check if mobile
    if (is_mobile()) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }

    main.style.zIndex = "2";

    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');

    MENUmodalEnvironment.innerHTML = update_project_imageModal;
    MENUmodalEnvironment.style.display = "block";

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    MENUmodalEnvironment.addEventListener('click', menuHide);

    let x = (X) + "px";
    let y = (Y) + "px";

    MENUmodalBody.style.left = x;
    MENUmodalBody.style.top = y;

    // Get references to the drop area and file input button
    const dropArea = document.getElementById('MENUmodalBody_image_select_file_drop_area');
    const fileInputButton = document.getElementById('MENUmodalBody_image_select_file_select_button');
    const previewImage = document.getElementById("MENUmodalBody_image_select_preview_area");
    const submitButton = document.getElementById("MENUmodalBody_image_select_submit_button");
    const submitButtonContainer = document.getElementById("MENUmodalBody_image_select_submit_button_container");

    // Function to handle file selection
    function handleFileSelection(selectedFile, params) {
        if (selectedFile) {

            const imageURL = URL.createObjectURL(selectedFile);
            const spinner = document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");

            // Set the src attribute of the img element to the image URL
            previewImage.src = imageURL;

            submitButton.style.visibility = "visible";
            submitButtonContainer.style.outline = "3px solid var(--primary)";

            // Add an event listener to the submit button
            submitButton.addEventListener('click', () => {
                upload_image_files(selectedFile, params.project_id);
                //turn on animation
                spinner.style.visibility = "visible";
            });
        } else {
            console.log('No file selected.');
        }
    }

    // Prevent the default behavior of drag-and-drop events
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Handle the drop event
    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();

        // Get the dropped files
        const files = e.dataTransfer.files;

        // Call the same function to handle the dropped file(s)
        handleFileSelection(files[0], params); // Only handle the first dropped file
    });

    // Open file dialog when the button is clicked
    fileInputButton.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';

        fileInput.accept = 'image/*'; // This allows all image types

        // Handle the file selection
        fileInput.addEventListener('change', (e) => {
            const selectedFile = e.target.files[0]; // Get the first selected file

            // Call the same function to handle the selected file
            handleFileSelection(selectedFile, params);
        });

        // Trigger the file input dialog
        fileInput.click();
    });
}
import { PROJECTVIEW_update } from './projectView.js';
export function MENU_when_image_has_been_uploaded() {
    const spinner = document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");
    spinner.style.visibility = "hidden";
    menuHide_foreign();
    PROJECTVIEW_update();
}

function showElementDetails(elementId) {
    const element = document.getElementById(elementId);
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    const width = element.offsetWidth;
    const currentPositionLeft = element.getBoundingClientRect().left;
    const currentPositionTop = element.getBoundingClientRect().top;


    const height = element.getBoundingClientRect().height;



    const overflowingLeft = width + currentPositionLeft;
    const overflowingTop = height + currentPositionTop;

    let IsOverflowingLeft = false;
    let IsOverflowingTop = false
    if (overflowingLeft > clientWidth) {
        IsOverflowingLeft = true;
    }
    if (overflowingTop > clientHeight) {
        IsOverflowingTop = true
    }
    return {
        xOverflow: IsOverflowingLeft,
        yOverflow: IsOverflowingTop
    }
}



function addModalItem(param) {
    const displayText = param.displayText
    const displayImage = param.optionalSVG
    let colour;
    if ("colour" in param) {
        colour = param.colour;
    } else {
        colour = "var(--text)";
        if (is_mobile()) {
            colour = "var(--text)";
        }    }

    const MENUmodalBody = document.getElementById('MENUmodalBody');

    let regex = new RegExp(`\\{${"MENU_item_text"}\\}`, 'g');
    let replacedContent = menuItem.replace(regex, displayText);
    regex = new RegExp(`\\{${"MENU_item_colour"}\\}`, 'g');
    replacedContent = replacedContent.replace(regex, colour);

    if (displayImage !== "None") {
        regex = new RegExp(`\\{${"MENU_item_image"}\\}`, 'g');
        const imageReplacement = "{" + displayImage + "}";
        replacedContent = replacedContent.replace(regex, imageReplacement);

        for (const [placeholder, value] of Object.entries(svgImports)) {
            const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
            replacedContent = replacedContent.replace(regex, value);
        }
        MENUmodalBody.innerHTML += replacedContent;
        return;
    } else {
        replacedContent = replacedContent.replace(/<img[^>]+>/g, '');
        MENUmodalBody.innerHTML += replacedContent;
        return;
    }
    return;
}

export function menuHide(event) {
    const background = document.getElementById('MENUmodalEnvironment');
    const main = document.querySelector("main");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    const navBar = document.querySelector(".topHalf-container");



    // Check if the click target is the background itself
    if (event.target === background) {
        background.style.display = 'none';
        // check if mobile
        if (mediaQuery.matches) {
            main.style.zIndex = "1";
            navBar.style.zIndex = "10";
        }

        return;
    }
    return;
}

export function menuHide_foreign() {
    const background = document.getElementById('MENUmodalEnvironment');
    const main = document.querySelector("main");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    const navBar = document.querySelector(".topHalf-container");

    background.style.display = 'none';
    if (mediaQuery.matches) {
        main.style.zIndex = "1";
        navBar.style.zIndex = "10";
    }

    return;
}

import { PROJECT_VIEW_receive_MENU_delete_request } from './projectView.js';
import { PLAYBACK_handle_add_songs_to_queue } from './playback.js';

/* MENU functions */
const MENU_ACTION_FUNCTIONS = {
    MENU_ACTION_playNext(params) {
        console.log(params);
        return;
    },
    MENU_ACTION_playLast() {
        console.log("meny aacction play next");
        return;
    },
    PROJECT_VIEW_delete_project(params) {
        PROJECT_VIEW_receive_MENU_delete_request(params);
        return;
    },
    PLAYBACK_add_songs_to_queue(params) {
        PLAYBACK_handle_add_songs_to_queue(params);
        return;
    },
};