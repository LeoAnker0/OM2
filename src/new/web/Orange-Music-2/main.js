import './css/style.css';
import './css/sketch.css';
import './css/materials.css';
import './css/layout.css';
import './css/topleft.css';

//logic for loading content into the dom

import layout from './html/layout.html?raw';
document.getElementById('app').innerHTML = layout;


import { loadMAINtopleft } from './js/exportHTMLchunks.js';
loadMAINtopleft();

import { setEventListenersForSearchbar } from './js/search.js';
setEventListenersForSearchbar();