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

/* immediate priority 

we need real icons for loop song, and also pause

*/

/* imports in the most basic-ist of html which constitutes the rough layout of the page */
import layout from './html/layout.html?raw';

/* build in the different sections of the webpage, with modification of the src 
names so that they point somewhere */
import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';

/* creates event listeners for the playback controls as well as
creating functions that set the different states of the playback buttons,
so fx: changing the filter of the buttons, or changing out the button for a different one
*/
import { setEventListenersForPlaybackcontrols, setEventListenersForVolume /*these probably shouldn't be imported here, but oh well..., shuffleStateChange, loopStateChange, playStateChange*/ } from './js/playbackControls.js';

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
import { initProjectView, hideProjectView } from './js/projectView.js';


export function main() {

    //await initSettings();


    loadMAINtopleft();
    loadMAINtopright();
    initialiseLCD();
    setEventListenersForPlaybackcontrols();
    setEventListenersForSearchbar();
    setEventListenersForVolume();
    initAccountImg();
    initialiseQueue();









    //PAGES --------------------  

    //initMusicObjectsGrid();
    //hideMusicObjectsGrid();
    //initProjectView();
    //hideProjectView();
    /*
     */

    function handleUrlChange() {
        const currentPath = window.location.pathname;
        handleRoute(currentPath);
    }

    window.addEventListener('popstate', handleUrlChange);

    handleUrlChange();
}

function handleMusicObjectsGrid() {
    hideProjectView();
    initMusicObjectsGrid();
}

function handleProjectView() {
    hideMusicObjectsGrid();
    initProjectView();
}

const routeHandlers = {
    '/': handleMusicObjectsGrid,
    '/projects/': handleProjectView,
    // Add more routes and handlers as needed
};

export function handleRoute(route) {
    const handler = routeHandlers[route] || notFoundHandler;
    handler();

    // Update browser's history
    history.pushState({}, '', route);
}

import { initSettings } from './js/settings.js';

document.getElementById('app').innerHTML = layout;
initSettings();






/**/