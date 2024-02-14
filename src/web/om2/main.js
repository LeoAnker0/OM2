import { setEventListenersForPlaybackcontrols, setEventListenersForVolume } from './js/playbackControls.js';
import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';
import { init_upload_indicator } from './js/file_upload_indicator.js';
import { setEventListenersForSearchbar } from './js/search.js';
import { initAccountImg } from './js/loadAccountImage.js';
import { svgImports } from './js/importAssets.js';
import { PLAYBACK_init } from './js/playback.js';
import { initialiseQueue } from './js/queue.js';
import { init_routing } from './js/routing.js';
import { initSettings } from './js/login.js';
import { initialiseLCD } from './js/lcd.js';
import layout from './html/layout.html?raw';
import './css/confirm-action-modal.css';
import './css/notificationStyling.css';
import './css/upload_queue_modal.css';
import './css/upload_indicator.css';
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
    init_upload_indicator()
}

// Make sure that all the code only ever runs once.
if (!window.hasCodeRun) {
    initSettings();

    // Set the flag to indicate that the code has run
    window.hasCodeRun = true;
}