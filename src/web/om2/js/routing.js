import { PLAYBACK_init, PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_GET_progress, PLAYBACK_handle_input_sync_state } from './playback.js';
import { updateUserDetails, getUserDetail, createNewProjectID } from './network_requests.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { initMusicObjectsGrid, hideMusicObjectsGrid } from './musicObjectGrid.js';
import { initProjectView, hideProjectView } from './projectView.js';
import { show_settings, hide_settings } from './settings.js';
import { signedIn, loginAttempted, loginFormLoaded, containerHid, initLoginForeign } from './login.js';

export async function init_routing() {
    const lastStateRecord = await getUserDetail("last_state");
    const lastState = JSON.parse(lastStateRecord);
    const hashedValuesMap = new Map();
    const intervalId = setInterval(update_user_sync, 10000);
    // setting last_hashed_playback_states to hashObject(lastState), means that if the user logs in and doesn't do anything, that state won't be sent to the server
    let last_hashed_playback_states = hashObject(lastState);

    window.addEventListener('popstate', handleUrlChange);
    if (lastState != null) {
        const current_path = window.location.pathname;
        handleRoute(current_path);
        PLAYBACK_handle_input_sync_state(lastState);
    } else {
        handleUrlChange();
    }

    function hashObject(obj) {
        const objString = JSON.stringify(obj);
        return objString;
    }

    function update_user_sync() {
        const current_path = window.location.pathname;
        const current_queue = PLAYBACK_songs_array;
        const current_index = PLAYBACK_songs_array_index;
        const playback_states = PLAYBACK_GET_progress();
        playback_states.current_path = current_path;
        playback_states.current_queue = current_queue;
        playback_states.current_index = current_index;

        const hashedPlaybackStates = hashObject(playback_states);

        if (hashedPlaybackStates !== last_hashed_playback_states) {
            updateUserDetails("last_state", playback_states);
            last_hashed_playback_states = hashedPlaybackStates;
            hashedValuesMap.set('playback_states', hashedPlaybackStates);
        }
    }

    function handleUrlChange() {
        const currentpath = window.location.pathname;
        handleRoute(currentPath);
    }
}

function handleMusicObjectsGrid() {
        if (signedIn == false) {
        hide_settings();
        initLoginForeign();
    } else {
        hideProjectView();
        hide_settings();
        initMusicObjectsGrid();
    }
}

function handleProjectView(projectID, songURL) {
    hideMusicObjectsGrid();
    hide_settings();

    if (songURL !== null) {
        initProjectView(projectID, songURL);
    } else {
        initProjectView(projectID);

    }

}

function handleSettingsView() {
    hideMusicObjectsGrid();
    hideProjectView();
    show_settings();
}

const routeHandlers = {
    '/': handleMusicObjectsGrid,
    '/new-project/': createNewProjectID,
    '/new-project': createNewProjectID,
    '/new/': createNewProjectID,
    '/new': createNewProjectID,
    '/projects/:projectID': handleProjectView,
    '/projects/:projectID/:songURL': handleProjectView,
    '/settings/': handleSettingsView,
    '/settings': handleSettingsView,
};

function notFoundHandler() {
    const currentpath = window.location.pathname;
    const contentContainer = document.getElementById("MAINcontentPages");

    setTimeout(return_to_charted_paths, 4000);
    contentContainer.innerHTML += `
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${currentpath}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `

    function return_to_charted_paths() {
        handleRoute("/");
    }
}

export function handleRoute(route) {
    const handlerKeys = Object.keys(routeHandlers);
    for (const key of handlerKeys) {
        const pattern = new RegExp(`^${key.replace(/:[^\s/]+/g, '([^/]+)')}$`);
        const match = route.match(pattern);

        if (match) {
            const handler = routeHandlers[key];
            const parameters = match.slice(1);

            handler(...parameters);
            if (route !== "/new-project/") {
                history.pushState({}, '', route);
            }
            return;
        }
    }
    notFoundHandler(); // Route not recognized
}