import './css/style.css';

//logic for loading content into the dom

import main from './html/main.html?raw';
document.getElementById('app').innerHTML = main;

import { loadMAINnav, loadMAINmusBar, loadMAINcontent /*,loadMAINmobile*/ } from './js/exportHTMLchunks.js';
loadMAINnav();
loadMAINmusBar();
loadMAINcontent();

import './css/expandedMusicObject.css';
import './css/mediaQuery.css';
import './css/musicObjects.css';
import './css/navbar.css';
import './css/popupContextMenu.css';
import './css/shadowDOM.css';
import './css/topMusicBar.css';
import './css/upNextQueue.css';


//specific logic for making things work

//import { hydrateNav } from './js/hydrateNav.js';
import { getUsersProfilePicAddress } from './js/loadAccountImage.js';
import { inputDetect } from './js/inputDetect.js';
getUsersProfilePicAddress("uuid");
inputDetect();




/*
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = "js/" + jsFilePath;

    document.body.appendChild(js);
}*/

/*
function loadInMyJS() {
    //the logic for signingin/up and staying logged in as well
    //includeJs("login.js");

    //the logic for the audio player
    includeJs("audioPlayer.js");
    //the logic for the context menus
    //includeJs("menu.js");

    //the logic for retrieving the account picture
    //includeJs("loadAccountImage.js");

    //for the main library view
    window.LoadedMusicObjects = 0
    includeJs("musicObjects.js");

    //deals with fleshing out the playlists dropdown, as well as the search bar
    //includeJs("hydrateNav.js");
    includeJs("search.js");
    //includeJs("inputDetect.js")

    //for the music object view
    includeJs("hydrateExpandedMusicObject.js");
    //includeJs("hideAndResize.js");

    //for the browse catalogue
    includeJs("browse.js");

    //for the redirector
    includeJs("redirect.js");

    //for the add/remove library functions
    includeJs("addOrRemoveFromLibrary.js");

}
//loadInMyJS()*/