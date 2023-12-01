import { setEventListenersForPlaybackcontrols, setEventListenersForVolume } from './js/playbackControls.js';
import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';
import { setEventListenersForSearchbar } from './js/search.js';
import { initAccountImg } from './js/loadAccountImage.js';
import { svgImports } from './js/importAssets.js';
import { PLAYBACK_init } from './js/playback.js';
import { initialiseQueue } from './js/queue.js';
import { initSettings } from './js/login.js';
import { init_routing } from './js/routing.js';
import { initialiseLCD } from './js/lcd.js';
import layout from './html/layout.html?raw';
import './css/lcd_mobile_body.css';
import './css/musicObjectGrid.css';
import './css/projectView.css';
import './css/materials.css';
import './css/settings.css';
import './css/topright.css';
import './css/topleft.css';
import './css/layout.css';
import './css/queue.css';
import './css/login.css';
import './css/style.css';
import './css/menu.css';
import './css/lcd.css';

export const MAIN_CONST_EXPORT_apiPath =
    import.meta.env.VITE_API_DOMAIN;

export const MAIN_CONST_EXPORT_mediaPath =
    import.meta.env.VITE_MEDIA_DOMAIN;

/*
import './js/service-worker.js';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}*/

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


// Make sure that all the code only ever runs once.
if (!window.hasCodeRun) {
    // Your code goes here
    let replacedContent = layout;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById('app').innerHTML = replacedContent;
    initSettings();

    // Set the flag to indicate that the code has run
    window.hasCodeRun = true;
}