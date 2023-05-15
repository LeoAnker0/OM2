import './style.css';
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

import icons_volumeNull from './assets/icons/volume_null.svg';
import icons_recentlyAdded from './assets/icons/recently_added.svg';
import icons_volume3 from './assets/icons/volume_3.svg';
import icons_orangeMusicTextLogoBlack from './assets/icons/orange_music_text_logo_black.svg';
import icons_volume2 from './assets/icons/volume_2.svg';
import icons_browse2 from './assets/icons/browse_2.svg';
import icons_volume1 from './assets/icons/volume_1.svg';
import icons_orangeMusicLogoWhite from './assets/icons/orange_music_logo_white.svg';
import icons_searchIcon from './assets/icons/search_icon.svg';
import icons_orangeMusicTextLogoBlackPng from './assets/icons/orange_music_text_logo_black.png';
import icons_upNextQueueButton from './assets/icons/up_next_queue_button.svg';
import icons_orangeMusicLogoYellow from './assets/icons/orange_music_logo_yellow.svg';
import icons_playlist from './assets/icons/playlist.svg';
import icons_loopButton from './assets/icons/loop_button.svg';
import icons_helpIcon from './assets/icons/help_icon.svg';
import icons_playButton from './assets/icons/play_button.svg';
import icons_browse from './assets/icons/browse.svg';
import icons_menuOptionsButton from './assets/icons/menu_options_button.svg';
import icons_orangeMusicTextLogoWhite from './assets/icons/orange_music_text_logo_white.svg';
import icons_backButton from './assets/icons/back_button.svg';
import icons_Albums from './assets/icons/Albums.svg';
import icons_songs from './assets/icons/songs.svg';
import icons_orangeMusicLogoBlack from './assets/icons/orange_music_logo_black.svg';
import icons_yourUploadedSongs from './assets/icons/your_uploaded_songs.svg';
import icons_artist from './assets/icons/artist.svg';
import icons_shuffleButton from './assets/icons/shuffle_button.svg';
import icons_orangeMusicTextLogoWhitePng from './assets/icons/orange_music_text_logo_white.png';
import icons_listenNow from './assets/icons/listen_now.svg';
import icons_derpy from './assets/icons/derpy.svg';
import icons_nextButton from './assets/icons/next_button.svg';
import icons_recentlyAddedV2 from './assets/iconsv2/recently_added.svg';
import icons_playButtonV2 from './assets/iconsv2/play_button.svg';
import icons_browseV2 from './assets/iconsv2/browse.svg';
import icons_albumsV2 from './assets/iconsv2/albums.svg';
import icons_listenNow2V2 from './assets/iconsv2/listen_now.2.svg';
import icons_yourUploads from './assets/iconsv2/your_uploads.svg';
import icons_playButton2 from './assets/iconsv2/play_button.2.svg';
import icons_listenNowV2 from './assets/iconsv2/listen_now.svg';
import icons_browse2V2 from './assets/iconsv2/browse.2.svg';




import main from './html/main.html?raw';

const imports = {
    icons_volumeNull,
    icons_recentlyAdded,
    icons_volume3,
    icons_orangeMusicTextLogoBlack,
    icons_volume2,
    icons_browse2,
    icons_volume1,
    icons_orangeMusicLogoWhite,
    icons_searchIcon,
    icons_orangeMusicTextLogoBlackPng,
    icons_upNextQueueButton,
    icons_orangeMusicLogoYellow,
    icons_playlist,
    icons_loopButton,
    icons_helpIcon,
    icons_playButton,
    icons_browse,
    icons_menuOptionsButton,
    icons_orangeMusicTextLogoWhite,
    icons_backButton,
    icons_Albums,
    icons_songs,
    icons_orangeMusicLogoBlack,
    icons_yourUploadedSongs,
    icons_artist,
    icons_shuffleButton,
    icons_orangeMusicTextLogoWhitePng,
    icons_listenNow,
    icons_derpy,
    icons_nextButton,
    icons_recentlyAddedV2,
    icons_playButtonV2,
    icons_browseV2,
    icons_albumsV2,
    icons_listenNow2V2,
    icons_yourUploads,
    icons_playButton2,
    icons_listenNowV2,
    icons_browse2V2
};

let replacedContent = main;
for (const [placeholder, value] of Object.entries(imports)) {
    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
    replacedContent = replacedContent.replace(regex, value);
}


document.getElementById('app').innerHTML = replacedContent;


//import { hydrateNav } from './js/hydrateNav.js';
import { getUsersProfilePicAddress } from './js/loadAccountImage.js';
import { inputDetect } from './js/inputDetect.js';
//import { hydrateExpandedMusicObjects } from './js/hydrateExpandedMusicObject.js';


function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = "js/" + jsFilePath;

    document.body.appendChild(js);
}

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


loadInMyJS()


//hydrateNav();
getUsersProfilePicAddress("uuid");
inputDetect();
//hydrateExpandedMusicObjects();


//setupCounter(document.querySelector('#counter'))