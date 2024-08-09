/* menu.js */

import { PLAYBACK_current_img, PLAYBACK_current_song_title, PLAYBACK_current_song_artist, PLAYBACK_handle_PLAYER_nextButton, PLAYBACK_handle_PLAYER_playButton, PLAYBACK_handle_PLAYER_backButton, PLAYBACK_songs_array, PLAYBACK_songs_array_index } from './playback.js';
import { MAIN_CONST_EXPORT_mediaPath, MAIN_CONST_EXPORT_apiPath } from '../main.js';
import update_project_imageModal from '../html/update_project_imageModal.html?raw';
import lcd_mobile_queue_item from '../html/lcd_mobile_queue_item.html?raw';
import uploadQueueModalHTML from '../html/upload_queue_body.html?raw';
import lcd_mobile_body from '../html/lcd_mobile_body.html?raw';
import { getKeyColoursFromImage } from './getImageColours.js';
import { attachVisualiserToRoot } from './visualiser.js';
import { PROJECTVIEW_update } from './projectView.js';
import menuItem from '../html/menuModalItem.html?raw';
import { upload_image_files } from './file_upload.js';
import menuModal from '../html/menuModal.html?raw';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';
import { is_mobile } from './om2.js';



let previously_focused_element;
let queue_displayed = false;

export async function MENUdisplay(params, event, menu_type) {
    //undefined    
    if (menu_type === undefined) {
        handle_normal_context_menu(params, event, false);
    }

    //defined and type == update_project_image
    else if ((menu_type !== undefined) && menu_type === "update_project_image") {
        handle_update_project_image(params, event, "update_project_image");
    } else if ((menu_type !== undefined) && menu_type === "update_user_pfp") {
        handle_update_project_image(params, event, "update_user_pfp");
    }

    // defined and type == return_promise
    else if ((menu_type !== undefined) && menu_type === "return_promise") {
        const result = await handle_normal_context_menu(params, event, true)
        return result;
    }


}

async function handle_normal_context_menu(params, event, returnPromise) {
    return new Promise((resolve, reject) => {
        previously_focused_element = document.activeElement;
        let X = event.clientX;
        let Y = event.clientY;
        const main = document.querySelector("main");
        const navBar = document.querySelector(".topHalf-container");

        if (is_mobile()) {
            main.style.zIndex = "40";
            navBar.style.zIndex = "0";
        }

        const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
        MENUmodalEnvironment.innerHTML = menuModal;
        MENUmodalEnvironment.style.display = "block";

        const MENUmodalBody = document.getElementById('MENUmodalBody');
        let x = X + "px";
        let y = Y + "px";

        MENUmodalEnvironment.addEventListener('click', menuHide);
        MENUmodalBody.style.left = x;
        MENUmodalBody.style.top = y;

        let interactType = "mouse";

        if ((event.webkitForce == 1) || (event.webkitForce == 0)) {
            if (event.webkitForce == 0) {
                interactType = "keyboard";
            }
        } else {
            if (event.pointerType !== "mouse") {
                interactType = "keyboard";
            }
        }

        if (interactType === "keyboard") {
            const rect = previously_focused_element.getBoundingClientRect();
            X = rect.left + window.scrollX;
            Y = rect.top + window.scrollY;
            x = X + "px";
            y = Y + "px";
            MENUmodalBody.style.left = x;
            MENUmodalBody.style.top = y;
        }

        for (let i = 0; i < params.length; i++) {
            addModalItem(params[i]);
        }

        const children = MENUmodalBody.children;
        const first_button = children[0];
        const MENUmodalBodyWidth = MENUmodalBody.offsetWidth;
        const MENUmodalBodyHeight = MENUmodalBody.offsetHeight;
        const overflowStates = showElementDetails('MENUmodalBody');
        const menuItems = MENUmodalBody.getElementsByClassName('MENUmodalItemContainer');

        if (interactType === "keyboard" && !is_mobile()) {
            first_button.focus();
        } else if (interactType == "mouse" && !is_mobile()) {
            first_button.focus();
            first_button.blur();
        }

        document.addEventListener('keydown', handleEscapeKey);

        if (overflowStates.xOverflow === true) {
            x = (X - MENUmodalBodyWidth) + "px";
            MENUmodalBody.style.left = x;
        }
        if (overflowStates.yOverflow === true) {
            y = (Y - MENUmodalBodyHeight) + "px";
            MENUmodalBody.style.top = y;
        }

        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            menuItem.setAttribute('data-menu-item-id', i);

            menuItem.addEventListener('click', function(event) {
                event.stopPropagation();
                const clickedElement = event.target;
                const menuItemId = clickedElement.getAttribute('data-menu-item-id');
                const functionToCall = params[menuItemId].function;
                const optionalParams = params[menuItemId].optionalParams;

                if (functionToCall == "TEST") {
                    console.log("the button worked", optionalParams);
                } else if (functionToCall != "None") {
                    if (returnPromise === true) {
                        const condition = params[menuItemId].condition;
                        const returnStruct = { condition, optionalParams };
                        resolve(returnStruct); // Resolve the promise with the return value
                        return;
                    }

                    MENU_ACTION_FUNCTIONS[functionToCall](optionalParams);
                    return;
                } else {
                    return;
                }
            });
        }

        function handleEscapeKey(event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                document.removeEventListener('keydown', handleEscapeKey);
                menuHide_foreign();
            }
        }
    });
}

function handle_update_project_image(params, event, menu_type) {
    const X = event.clientX;
    const Y = event.clientY;
    const main = document.querySelector("main");
    const navBar = document.querySelector(".topHalf-container");
    const MENUmodalEnvironment = document.getElementById('MENUmodalEnvironment');
    let x = (X) + "px";
    let y = (Y) + "px";

    if (is_mobile()) {
        main.style.zIndex = "40";
        navBar.style.zIndex = "0";
    }

    params.MenuType = menu_type;

    main.style.zIndex = "2";
    MENUmodalEnvironment.innerHTML = update_project_imageModal;
    MENUmodalEnvironment.style.display = "block";
    MENUmodalEnvironment.addEventListener('click', menuHide);

    const MENUmodalBody = document.getElementById('MENUmodalBody');
    const dropArea = document.getElementById('MENUmodalBody_image_select_file_drop_area');
    const fileInputButton = document.getElementById('MENUmodalBody_image_select_file_select_button');
    const previewImage = document.getElementById("MENUmodalBody_image_select_preview_area");
    const submitButton = document.getElementById("MENUmodalBody_image_select_submit_button");
    const submitButtonContainer = document.getElementById("MENUmodalBody_image_select_submit_button_container");

    MENUmodalBody.style.left = x;
    MENUmodalBody.style.top = y;

    let image_upload_file;

    let debounceTimer; // Declare a global debounce timer

    function debounce(func, delay) {
        return function() {
            const context = this;
            const args = arguments;

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    function uploadImageFilesDebounced(file, projectId, menuType) {
        debounce(upload_image_files, 100)(file, projectId, menuType);
    }

    function handleFileSelection(params) {
        if (image_upload_file) {
            const imageURL = URL.createObjectURL(image_upload_file);
            const spinner = document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");

            previewImage.src = imageURL;
            submitButton.style.visibility = "visible";
            submitButtonContainer.style.outline = "3px solid var(--primary)";
            submitButton.addEventListener('click', () => {
                uploadImageFilesDebounced(image_upload_file, params.project_id, params.MenuType);
                spinner.style.visibility = "visible";
            });
        } else {
            console.log('No file selected.');
        }
    }

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        image_upload_file = files[0]
        handleFileSelection(params);
    });

    fileInputButton.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', (e) => {
            const selectedFile = e.target.files[0]; // Get the first selected file
            image_upload_file = selectedFile
            handleFileSelection(params);
        });

        fileInput.click();
    });
}

export function MENU_when_image_has_been_uploaded() {
    const spinner = document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");
    spinner.style.visibility = "hidden";
    menuHide_foreign();
    PROJECTVIEW_update();
}

export function MENU_when_image_has_been_uploaded_pfp() {
    const spinner = document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");
    spinner.style.visibility = "hidden";
    menuHide_foreign();
}

export function showElementDetails(elementId) {
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
    const MENUmodalBody = document.getElementById('MENUmodalBody');
    let colour = "var(--text)";
    if ("colour" in param) {
        colour = param.colour;
    }

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

    if (event.target === background) {
        background.style.display = 'none';
        if (mediaQuery.matches) {
            main.style.zIndex = "";
            navBar.style.zIndex = "";
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

    if (previously_focused_element) {
        previously_focused_element.focus();
    }
    return;
}

import { PROJECT_VIEW_receive_MENU_delete_request, PROJECTVIEW_handle_delete_song, PROJECTVIEW_handle_add_song_to_queue } from './projectView.js';
import { PLAYBACK_handle_add_songs_to_queue } from './playback.js';
import { HANDLE_SIGN_OUT_USER } from './loadAccountImage.js';

/* MENU functions */
const MENU_ACTION_FUNCTIONS = {
    PROJECT_VIEW_delete_project(params) {
        PROJECT_VIEW_receive_MENU_delete_request(params);
        menuHide_foreign();
        return;
    },
    PLAYBACK_add_songs_to_queue(params) {
        PLAYBACK_handle_add_songs_to_queue(params);
        menuHide_foreign();
        return;
    },
    SIGN_OUT_USER(params) {
        menuHide_foreign();
        HANDLE_SIGN_OUT_USER(params);
        return;
    },
    OPEN_SETTINGS_PAGE(params) {
        menuHide_foreign();
        handleRoute("/settings/");
        return
    },
    PROJECT_VIEW_delete_song(params) {
        PROJECTVIEW_handle_delete_song(params)
        return;
    },
    PROJECT_VIEW_add_song_to_queue(params) {
        PROJECTVIEW_handle_add_song_to_queue(params);
        return;
    }
};