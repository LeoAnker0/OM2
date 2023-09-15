/* loads in all the css */
import './css/style.css';
import './css/sketch.css';
import './css/materials.css';
import './css/layout.css';
import './css/topleft.css';
import './css/topright.css';
import './css/queue.css';
import './css/menu.css';
import './css/lcd.css';
import './css/musicObjectGrid.css';
import './css/settings.css';
import './css/projectView.css';
import './css/lcd_mobile_body.css';

export const MAIN_CONST_EXPORT_apiPath = "https://om2apis.la0.uk";
export const MAIN_CONST_EXPORT_mediaPath = "https://om2media.la0.uk";

/* imports in the most basic-ist of html which constitutes the rough layout of the page */
import layout from './html/layout.html?raw';

/* build in the different sections of the webpage, with modification of the src 
names so that they point somewhere */
import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';

import { svgImports } from './js/importAssets.js';

/* creates event listeners for the playback controls as well as
creating functions that set the different states of the playback buttons,
so fx: changing the filter of the buttons, or changing out the button for a different one
*/
import { setEventListenersForPlaybackcontrols, setEventListenersForVolume } from './js/playbackControls.js';

/* load in the lcd and related items */
import { initialiseLCD } from './js/lcd.js';

/* starts the event listeners for the search bar */
import { setEventListenersForSearchbar } from './js/search.js';

/* queue display code */
import { initialiseQueue } from './js/queue.js';

/* account img and menu stuff */
import { initAccountImg } from './js/loadAccountImage.js';

/* music object grid */
import { initMusicObjectsGrid, hideMusicObjectsGrid } from './js/musicObjectGrid.js';

/* project view */
import { initProjectView, hideProjectView, createNewProjectID } from './js/projectView.js';

import { PLAYBACK_init, PLAYBACK_songs_array, PLAYBACK_songs_array_index, PLAYBACK_GET_progress, PLAYBACK_handle_input_sync_state } from './js/playback.js';

import { updateUserDetails, getUserDetail } from './js/network_requests.js';

import { init_routing } from './js/routing.js';

export async function main() {
    PLAYBACK_init();
    loadMAINtopleft();
    loadMAINtopright();
    initialiseLCD();
    setEventListenersForPlaybackcontrols();
    setEventListenersForSearchbar();
    setEventListenersForVolume();
    initAccountImg();
    initialiseQueue();
    init_routing();
}

/* start the whole site */
import { initSettings } from './js/settings.js';

let replacedContent = layout;
for (const [placeholder, value] of Object.entries(svgImports)) {
    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
    replacedContent = replacedContent.replace(regex, value);
}

document.getElementById('app').innerHTML = replacedContent;
initSettings();






/**/