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

/* immediate priority 

we need real icons for loop song, and also pause

*/


/* imports in the most basic-ist of html which constitutes the rough layout of the page */
import layout from './html/layout.html?raw';
document.getElementById('app').innerHTML = layout;

/* build in the different sections of the webpage, with modification of the src 
names so that they point somewhere */
import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';
loadMAINtopleft();
loadMAINtopright();

/* load in the lcd and related items */
import { initialiseLCD } from './js/lcd.js';
initialiseLCD();


/* creates event listeners for the playback controls as well as
creating functions that set the different states of the playback buttons,
so fx: changing the filter of the buttons, or changing out the button for a different one
*/
import { setEventListenersForPlaybackcontrols, setEventListenersForVolume /*these probably shouldn't be imported here, but oh well..., shuffleStateChange, loopStateChange, playStateChange*/ } from './js/playbackControls.js';
setEventListenersForPlaybackcontrols();
setEventListenersForVolume();


/* starts the event listeners for the search bar */
import { setEventListenersForSearchbar } from './js/search.js';
setEventListenersForSearchbar();


/* queue display code */
import { initialiseQueue } from './js/queue.js';
initialiseQueue();

/* account img and menu stuff */
import { initAccountImg } from './js/loadAccountImage.js';
initAccountImg();

















/**/