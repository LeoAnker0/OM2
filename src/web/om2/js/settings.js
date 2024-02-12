import { getUserDetail, get_users_table, updateUserDetailsAdmin } from './network_requests.js';
import admin_p_users_table_row from '../html/settings_views_admin_p_users_table_row.html?raw';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import admin_protected_view from '../html/settings_views_admin_protected.html?raw';
import admin_default_view from '../html/settings_views_admin_default.html?raw';
import { detect_when_image_is_interacted } from './image_upload_listeners.js';
import { HandleCreateNotification } from './notificationDisplayManager.js';
import general_view from '../html/settings_views_general.html?raw';
import user_view from '../html/settings_views_user.html?raw';
import settings_body from '../html/settings_body.html?raw';
import { users_image } from './loadAccountImage.js';
import { formatFileSizeBytes } from './om2.js';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';

let current_view = "general";
const views = [{
    name: "general",
    markup: general_view,
    button_id: "settings_button_general",
    function: views_general
}, {
    name: "user",
    markup: user_view,
    button_id: "settings_button_user",
    function: views_user
}, {
    name: "admin",
    markup: admin_default_view,
    button_id: "settings_button_admin",
    function: views_admin
}]

export function show_settings() {
    const contentContainer = document.getElementById("MAINcontentPages");
    let replacedContent = settings_body;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    contentContainer.innerHTML = replacedContent;

    const settings_go_to_other_content_button = document.getElementById("settings_go_to_other_content_button");

    load_view(current_view);

    /* add event listeners to the buttons and then when clicked get them to open their view */
    for (var i = views.length - 1; i >= 0; i--) {
        const button = views[i].button_id
        const button_element = document.getElementById(button);
        button_element.addEventListener('click', function(event) {
            const button_id = event.srcElement.id;
            const wanted_view = views.find(obj => obj.button_id === button_id);
            const name = wanted_view.name;
            load_view(name);
        })
    }

    settings_go_to_other_content_button.addEventListener("click", function() {
        handleRoute('/');
    })

}

export function hide_settings() {
    const contentContainer = document.getElementById("MAINcontentPages");
    contentContainer.innerHTML = "";
}

function load_view(view) {
    current_view = view;
    const things_to_replace = ['users_img'];
    const view_container = document.getElementById("view_container");
    const wanted_view = views.find(obj => obj.name === view);
    let replacedContent = wanted_view.markup;

    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    for (let i = 0; i < things_to_replace.length; i++) {
        const placeholder = things_to_replace[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'users_img') {
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${users_image}/4/`;
            value = image;
        }

        replacedContent = replacedContent.replace(regex, value);
    }
    view_container.innerHTML = replacedContent;

    wanted_view.function();
}

function views_general() {
    //console.log("general")
}

function views_user() {
    detect_when_image_is_interacted("user-id", "settings_views_user_pfp_img", "update_user_pfp");
}

let user_table_select_ids = [];
async function views_admin() {

    /*auth*/
    const allowed = await getUserDetail("admin")
    if (allowed !== "true") {
        return
    }

    /*loading in the proper markup*/
    const things_to_replace = ['users_img'];
    const view_container = document.getElementById("view_container");
    let replacedContent = admin_protected_view;

    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    for (let i = 0; i < things_to_replace.length; i++) {
        const placeholder = things_to_replace[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'users_img') {
            const image = `${MAIN_CONST_EXPORT_mediaPath}/${users_image}/4/`;
            value = image;
        }

        replacedContent = replacedContent.replace(regex, value);
    }
    view_container.innerHTML = replacedContent;

    // Load users table from the server
    loadUsersTable()



    /* detect when a column is requested to be updated for the users that has been selected */
    const submitButton = document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button");
    submitButton.addEventListener('click', function(event) {
        const columnToUpdate = document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated");
        const newData = document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");

        if ((columnToUpdate.value == "") || (newData.value == "")) {
            HandleCreateNotification("Error Updating Column: empty inputs", "error")
        } else {
            for (var i = user_table_select_ids.length - 1; i >= 0; i--) {
                const uuid = user_table_select_ids[i];
                updateUserDetailsAdmin(uuid, columnToUpdate.value, newData.value)
            }
        }
    });



    function delete_user() {
        console.log("what i said");

        /* implement a delete token, and tie it in with the other deleting business, 
        and add our own confirmation menu so that it's not the browser one and so 
        that people get the same experience everywhere, and so that the browser doesn't 
        trigger any anti spam measures. */
    }

}


let parsed_table;

/* load the users table from the server */
export async function loadUsersTable() {
    const users_table = await get_users_table();
    parsed_table = JSON.parse(users_table);
    const usersTableEnvironment = document.getElementById("usersTableInforRowsContainer")
    usersTableEnvironment.innerHTML = "";

    /* process the json and display it as html */
    for (let i = 0; i < parsed_table.length; i++) {
        const listOfThings = ['Username', 'Email', 'UUID', 'Verified', 'Space_Used', 'Storage_Allowance', 'profile_picture_url', 'checkbox_number', 'Admin'];
        const username = parsed_table[i].username;
        const uuid = parsed_table[i].uuid;
        const verified = parsed_table[i].verified;
        const email = parsed_table[i].email;
        let storage_allowance = parsed_table[i].storage_allowance;
        storage_allowance = formatFileSizeBytes(storage_allowance);
        const admin = parsed_table[i].admin;
        const index_of_table = i;
        let space_used = parsed_table[i].storage_used;
        space_used = formatFileSizeBytes(space_used);
        let replacedContent = admin_p_users_table_row;
        let profile_picture = parsed_table[i].profile_picture;
        profile_picture = `${MAIN_CONST_EXPORT_mediaPath}/${profile_picture}/1/`;


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
                value = space_used;
            } else if (placeholder === 'Storage_Allowance') {
                value = storage_allowance;
            } else if (placeholder === 'profile_picture_url') {
                value = profile_picture;
            } else if (placeholder === 'checkbox_number') {
                value = index_of_table;
            } else if (placeholder === 'Admin') {
                value = admin;
            }

            replacedContent = replacedContent.replace(regex, value);
        }
        usersTableEnvironment.innerHTML += replacedContent;
    }

    /* add event listeners for when the checkbox in the table is clicked */
    usersTableEnvironment.addEventListener('change', function(event) {
        if (event.target && event.target.type === 'checkbox') {
            detect_when_items_in_table_clicked();
        }
    });
}



/* detect when the a user is selected from the table */
function detect_when_items_in_table_clicked() {
    user_table_select_ids = [];
    const parentElement = usersTableEnvironment
    const checkboxes = parentElement.querySelectorAll('input[type="checkbox"]');
    const selectedItems = [];
    const selectedItems_visualtion = document.getElementById("settings_admin_selected_items_visualition");

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            const checkbox_id = checkbox.id;
            const user_table_number = checkbox_id.replace("admin_users_table_check_box_", "");
            const checkboxInfo = {
                id: user_table_number,
                value: checkbox.value,
            };

            selectedItems.push(checkboxInfo);
        }
    });

    selectedItems.forEach(function(item) {
        const table_item = parsed_table[item.id]
        const uuid = table_item.uuid
        user_table_select_ids.push(uuid);
    })
    selectedItems_visualtion.innerHTML = `Selected Items: ${user_table_select_ids.length}`
}



























/**/