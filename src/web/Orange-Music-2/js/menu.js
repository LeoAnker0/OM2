/* loading in the menu modal, and that alone ------------ */
import menuModal from '../html/menuModal.html?raw';
import update_project_imageModal from '../html/update_project_imageModal.html?raw';
export function MENUdisplay(params, event, menu_type) {

    //undefined    
    if (menu_type === undefined) {
        handle_normal_context_menu(params, event);
    }

    //defined and type == update_project_image
    if ((menu_type !== undefined) && menu_type === "update_project_image") {
        handle_update_project_image(params, event);
    }
}

function handle_normal_context_menu(params, event) {

    const X = event.clientX;
    const Y = event.clientY;

    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    // check if mobile
    if (mediaQuery.matches) {
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
    const mediaQuery = window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");
    // check if mobile
    if (mediaQuery.matches) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }



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

            // Set the src attribute of the img element to the image URL
            previewImage.src = imageURL;

            submitButton.style.visibility = "visible";
            submitButtonContainer.style.outline = "1px solid red";

            // Add an event listener to the submit button
            submitButton.addEventListener('click', () => {
                upload_image_files(selectedFile, params.project_id);
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
    console.log("the file has been uploaded")
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


import menuItem from '../html/menuModalItem.html?raw';

import { svgImports } from './importAssets.js';

function addModalItem(param) {
    const displayText = param.displayText
    const displayImage = param.optionalSVG
    let colour;
    if ("colour" in param) {
        colour = param.colour;
    } else {
        colour = "white";
    }

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
    }
};