import './css/style.css';
import './css/sketch.css';
import './css/materials.css';
import './css/layout.css';
import './css/topleft.css';
import './css/topright.css';

//logic for loading content into the dom

import layout from './html/layout.html?raw';
document.getElementById('app').innerHTML = layout;


import { loadMAINtopleft, loadMAINtopright } from './js/exportHTMLchunks.js';
loadMAINtopleft();
loadMAINtopright();

import { setEventListenersForSearchbar } from './js/search.js';
setEventListenersForSearchbar();