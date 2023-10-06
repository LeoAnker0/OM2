import settings_body from '../html/settings_body.html?raw';
import { svgImports } from './importAssets.js';
import { handleRoute } from './routing.js';
import general_view from '../html/settings_views_general.html?raw';
import user_view from '../html/settings_views_user.html?raw';
import admin_view from '../html/settings_views_admin.html?raw';
import { users_image } from './loadAccountImage.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';



let current_view = "admin";
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
    markup: admin_view,
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



}

function views_general() {
    console.log("general")
}

function views_user() {
    console.log("user")
}

function views_admin() {
    console.log("admin")
}