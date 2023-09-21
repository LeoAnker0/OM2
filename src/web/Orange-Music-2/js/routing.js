import { updateUserDetails, getUserDetail } from './network_requests.js';
import { initProjectView, hideProjectView, createNewProjectID } from './projectView.js';
import { initMusicObjectsGrid, hideMusicObjectsGrid } from './musicObjectGrid.js';
import { PLAYBACK_init, PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_GET_progress, PLAYBACK_handle_input_sync_state } from './playback.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';



export async function init_routing() {
    /* detects change in the url when the page has loaded, and triggers */
    function handleUrlChange() {
        const currentPath = window.location.pathname;
        handleRoute(currentPath);
    }
    window.addEventListener('popstate', handleUrlChange);


    /* when the page loads this will trigger, and get the sync details, and if they are valid, start with the sync details, else just handle the url */
    const lastStateRecord = await getUserDetail("last_state");
    const lastState = JSON.parse(lastStateRecord[0].last_state);
    if (lastState != null) {
        //const current_path = lastState.current_path;
        const current_path = window.location.pathname;

        handleRoute(current_path);
        PLAYBACK_handle_input_sync_state(lastState);

    } else {
        handleUrlChange();

    }


    /* checks what the state of the syncable user details

    in the future i might add a toggle that allows the user to enable sync, 
        and perhaps there will also be one for the server side if they want
        to avoid that, however for the moment I evaluating wether or not I like it.
        And so far I don't see any reason not to have it on.
     */
    let last_hashed_playback_states = ""; // Initialize the last hashed value

    // Create a Map to store hashed values
    const hashedValuesMap = new Map();

    function hashObject(obj) {
        // Convert the object to a JSON string and hash it using the built-in Map hash function
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

        // Hash the playback_states object
        const hashedPlaybackStates = hashObject(playback_states);

        // Compare with the last hashed value
        if (hashedPlaybackStates !== last_hashed_playback_states) {
            /* update the details */
            updateUserDetails("last_state", playback_states);

            // Update the last hashed value
            last_hashed_playback_states = hashedPlaybackStates;

            // Store the hashed value in the Map for future reference
            hashedValuesMap.set('playback_states', hashedPlaybackStates);
        }
    }

    /* triggers the sync every 20 seconds */
    const intervalId = setInterval(update_user_sync, 10000);
}


/* route handlers */
function handleMusicObjectsGrid() {
    hideProjectView();
    initMusicObjectsGrid();
}

function handleProjectView(projectID) {
    hideMusicObjectsGrid();
    initProjectView(projectID);
}


const routeHandlers = {
    '/': handleMusicObjectsGrid,
    '/new-project/': createNewProjectID,
    '/projects/:projectID': handleProjectView,
    // Add more routes and handlers as needed
};

function notFoundHandler() {
    console.log("notFoundHandler")

    /* add a 404 page */

    /* after like 3-5 seconds of 404 page do

    handleRoute("/")''

     */
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

            // Update browser's history
            if (route !== "/new-project/") {
                history.pushState({}, '', route);
            }

            return;
        }
    }

    notFoundHandler(); // Route not recognized
}