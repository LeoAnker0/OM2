import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

import { hydrateNav } from './js/hydrateNav.js';
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

document.querySelector('#app').innerHTML = `
  
    <!-- audio tag -->
    <audio id="audio" preload>
        <source id="PLAYERsource" src="" /></audio>
    <!-- VERTICAL navbar -->
    <nav class="navbar">
        <div class="navbar-nav-top">
            <!-- orange music logo -->
            <div class="orange-music-logo-box-relative">
                <div class="orange-music-logo-box-absolute">
                    <img src="assets/icons/orange%20music%20text%20logo%20white.png" alt="orange music logo, with an orange placed next to text saying Music" height="25" />
                </div>
            </div>
            <!-- search bar -->
            <div class="search-bar-wrapper">
                <!-- ignore the label, it's for accessibility -->
                <label for="searchBar" class="hideLabels">Search Bar</label>
                <input class="search" placeholder="Search" type="text" id="searchBar">
                <img class="search-icon" src="assets/icons/search%20icon.svg" alt="search icon" />
                <img class="clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" />
            </div>
        </div><br class="navbar-br">
        <div class="scrolling-navbar">
            <!-- main orange music nav areas ----------------------------------------------------------------------------------------------------------------------------------- -->
            <ul class="navbar-nav">
                <!--
              <li class="nav-item">
                  <a class="nav-link" onclick="window.history.pushState(null, null, 'listenNow')">
                      <span class="link-text">Listen Now</span>
                      <div class="navbar-nav-item-svg-locator">
                          <div class="svg-image-buttons-relative-container">
                              <div class="svg-image-buttons-absolute-container">
                                <img
                                     src="assets/iconsv2/listen%20now.svg"
                                     height="15"
                                     alt="Listen Now"
                                />
                              </div>

                          </div>
                      </div>
                  </a>
              </li>-->
                <li class="nav-item">
                    <a onclick="window.history.pushState(null, null, 'browse')" class="nav-link">
                        <span class="link-text">Browse</span>
                        <div class="navbar-nav-item-svg-locator">
                            <div class="svg-image-buttons-relative-container">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/iconsv2/browse.svg" height="15" alt="Browse" />
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="sharenow.html" class="nav-link">
                        <span class="link-text">Share Now</span>
                        <div class="navbar-nav-item-svg-locator">
                            <div class="svg-image-buttons-relative-container">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/icons/derpy.svg" height="15" alt="Share Now" />
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul><br class="navbar-br">
            <!-- library location actions ---------------------------------------------------------------------------------------------------- -->
            <ul class="navbar-nav-library">
                <li class="nav-item" id="nav-link">
                    <a class="nav-link-hint">
                        <span class="link-text-hint">Library</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a onclick="window.history.pushState(null, null, 'library')" class="nav-link">
                        <span class="link-text">Recently Added</span>
                        <div class="navbar-nav-item-svg-locator">
                            <div class="svg-image-buttons-relative-container">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/iconsv2/recently%20added.svg" height="15" alt="Recently Added" />
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <!--
              <li class="nav-item">
                  <a onclick="window.history.pushState(null, null, 'artists')" class="nav-link">
                      <span class="link-text">Artists</span>
                      <div class="navbar-nav-item-svg-locator">
                          <div class="svg-image-buttons-relative-container">
                              <div class="svg-image-buttons-absolute-container">
                                <img
                                     src="assets/icons/artist.svg"
                                     height="15"
                                     alt="Artists"
                                 />
                              </div>

                          </div>
                      </div>
                  </a>
              </li>-->
                <!--
              <li class="nav-item">
                  <a onclick="window.history.pushState(null, null, 'albums')" class="nav-link">
                      <span class="link-text">Albums</span>
                      <div class="navbar-nav-item-svg-locator">
                          <div class="svg-image-buttons-relative-container">
                              <div class="svg-image-buttons-absolute-container">
                                <img
                                     src="assets/iconsv2/albums.svg"
                                     height="15"
                                     alt="Albums"
                                 />
                              </div>

                          </div>
                      </div>
                  </a>
              </li>-->
                <!--
              <li class="nav-item">
                  <a href="#" class="nav-link">
                      <span class="link-text">Songs</span>
                      <div class="navbar-nav-item-svg-locator">
                          <div class="svg-image-buttons-relative-container">
                              <div class="svg-image-buttons-absolute-container">
                                <img
                                     src="assets/icons/songs.svg"
                                     height="15"
                                     alt="Songs"
                                 />
                              </div>

                          </div>
                      </div>
                  </a>
              </li>-->
                <!--
              <li class="nav-item">
                  <a onclick="window.history.pushState(null, null, 'yourUploads')" class="nav-link">
                      <span class="link-text">Your Uploads</span>
                      <div class="navbar-nav-item-svg-locator">
                          <div class="svg-image-buttons-relative-container">
                              <div class="svg-image-buttons-absolute-container">
                                <img
                                     src="assets/iconsv2/your%20uploads.svg"
                                     height="15"
                                     alt="Your Uploads"
                                 />
                              </div>

                          </div>
                      </div>
                  </a>
              </li>-->
            </ul><br class="navbar-br">
            <!-- playlist -------------------------------------------------------------------------------------- -->
            <ul class="navbar-nav-playlists" id="playlistContainer">
                <li class="nav-item" id="nav-link"><a class="nav-link-hint"><span class="link-text-hint">Playlists</span></a></li>
            </ul>
        </div>
    </nav>
    <!-- the top bar navigation -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
    <div class="top-music-player">
        <div class="top-music-player-blur-box">
            <!-- the div below provides the blue -->
            <div class="top-music-player-blur-area">
            </div>
        </div>
        <!-- and then this div prodives the content, absoluted onto the top of the blur -->
        <div class="top-music-player-bar">
            <div class="flex-class-top-music-items">
                <!-- music button row -------------------------------------------------------- -->
                <div class="top-music-button-row">
                    <div class="button-displacement">
                        <!-- shuffle -->
                        <div class="svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                            <div class="svg-image-buttons-absolute-container">
                                <img src="assets/icons/shuffle%20button.svg" alt="shuffle icon" height="12" />
                            </div>
                        </div>
                        <!-- last -->
                        <div class="svg-image-buttons-relative-container" id="PLAYERlastButton">
                            <div class="svg-image-buttons-absolute-container">
                                <img src="assets/icons/back%20button.svg" alt="back icon" height="13" />
                            </div>
                        </div>
                        <!-- play -->
                        <div class="svg-image-buttons-relative-container" id="PLAYERplayButton">
                            <div class="svg-image-buttons-absolute-container">
                                <img src="assets/iconsv2/play%20button.2.svg" alt="play icon" height="18" id="PLAYERplayIcon" />
                            </div>
                        </div>
                        <!-- pause -->
                        <!-- next -->
                        <div class="svg-image-buttons-relative-container" id="PLAYERnextButton">
                            <div class="svg-image-buttons-absolute-container">
                                <img src="assets/icons/next%20button.svg" alt="next icon" height="13" />
                            </div>
                        </div>
                        <!-- loop -->
                        <div class="svg-image-buttons-relative-container" id="PLAYERloopButton">
                            <div class="svg-image-buttons-absolute-container">
                                <img src="assets/icons/loop%20button.svg" alt="loop icon" height="12" id="PLAYERloopSVG" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- top music display ------------------------------------------------------- -->
                <div class="top-music-button-music-display">
                    <div class="music-lcd-bar-cover" id="lcdBarDummy">
                        <div class="dark-music-icon">
                            <div class="dark-music-icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 48" aria-role="presentation" focusable="false" height="24">
                                    <path fill-rule="evenodd" d="M36.15 0c-.18.02-1.76.3-1.95.33l-19.7 3.7c-.58.13-1.03.32-1.37.6a2.1 2.1 0 0 0-.74 1.36c-.02.12-.05.36-.05.72v26.81c0 1.18-.9 2.16-2.1 2.38l-5.27.86A6 6 0 0 0 0 42.57C0 45.63 2.6 48 5.64 48c.37 0 .74-.04 1.11-.1l1.82-.36a7.13 7.13 0 0 0 5.8-7.08V17.25c0-1.22.4-1.54 1.42-1.78 0 0 17.52-3.52 18.37-3.68.22-.04.43-.07.61-.07.78 0 1.17.4 1.17 1.36v15.47c0 1.18-.89 2.16-2.1 2.39l-4.86.95c-3.1.55-5.35 2.97-5.35 5.77 0 3.04 2.8 5.4 6.08 5.4.4 0 .8-.03 1.2-.1l1.96-.35c4.23-1.2 5.13-5.07 5.13-7.75v-33C38 .74 37.41 0 36.36 0h-.2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="dark-music-icon-logo-container">
                            <img src="assets/icons/orange music logo black.svg" alt="orange music logo" height="35" />
                        </div>
                    </div>
                    <div class="music-lcd-bar">
                        <div class="music-lcd-bar-display-picture">
                            <div class="music-lcd-picture-container">
                                <img src="images/square-image-5-min.avif" class="music-lcd-picture-class" alt="*alt things*" id="PLAYERimage" />
                            </div>
                        </div>
                        <div class="music-lcd-bar-display-song-title-box">
                            <!-- the box that holds the song title  along with a ... menu for options-->
                            <div class="music-lcd-bar-display-song-title">
                                <span class="lcd-song-title-display" id="LCDsongTitle">A Little Place Called The Moon</span>
                                <span class="lcd-menu-icon" id="lcdMenuIcon" onclick="loadContextMenu(this, 'musicID', 'TYPEsong')">
                                    <img src="assets/icons/menu%20options%20button.svg" alt="menu button" width="15" />
                                </span>
                            </div>
                            <div class="music-lcd-bar-display-song-information">
                                <div class="song-title-h1">
                                    <span id="LCDaristName">AURORA</span> - <span id="LCDalbumName">The Gods We Can Touch </span>
                                </div>
                            </div>
                            <div class="music-lcd-bar-display-song-progress">
                                <div class="song-progress-bar-progressed" id="PLAYERseekTimeRangeIndicator"></div>
                            </div>
                            <!-- box that contains the indication of time for how far through the song it is  -->
                            <div class="time-indicator-absolute-box">
                                <span class="time-indicator-span" id="timeIndicatorLeft">00:00</span>
                                <span class="time-indicator-span" id="timeIndicatorRight">11:00</span>
                            </div>
                            <div class="music-lcd-bar-seek-slider">
                                <input type="range" value="0" min="0" max="100" step="0.1" id="PLAYERseekTimeRangeSlider" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- meta content area ------------------------------------------------------- -->
                <div class="top-music-button-meta-content">
                    <div class="meta-content-area">
                        <!-- volume icon -->
                        <div class="meta-content-volume-control">
                            <div class="volume-control-indicator-container" id="volumeControlZero">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/icons/volume%20null.svg" alt="volume null" height="10" />
                                </div>
                            </div>
                            <div class="volume-control-indicator-container" id="volumeControlOne">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/icons/volume%201.svg" alt="volume quiet" height="10" />
                                </div>
                            </div>
                            <div class="volume-control-indicator-container" id="volumeControlTwo">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/icons/volume%202.svg" alt="volume medium" height="10" />
                                </div>
                            </div>
                            <div class="volume-control-indicator-container" id="volumeControlThree">
                                <div class="svg-image-buttons-absolute-container">
                                    <img src="assets/icons/volume%203.svg" alt="volume loud" height="10" />
                                </div>
                            </div>
                        </div>
                        <!-- volume slider -->
                        <label for="volumeRangeSlider" class="hideLabels">Range Slider</label>
                        <div id="volumeSliderID">
                            <input type="range" min="1" max="100" value="100" id="volumeRangeSlider">
                        </div>
                        <div class="theThreeButtons">
                            <div class="meta-content-up-next-queue" id="upNextQueueButton">
                                <div class="svg-image-buttons-relative-container">
                                    <div class="svg-image-buttons-absolute-container" id="upNextQueueButtonBackground">
                                        <img src="assets/icons/up%20next%20queue%20button.svg" alt="next up queue icon" height="10" id="queueIcon" />
                                    </div>
                                </div>
                            </div>
                            <!-- again... evetually i will make this thing work, and add an image and all the handling that has to go with that, but as it stands, i will just leave it as and hope that it isn't too much of a pain to implemtn later.... -->
                            <div class="meta-content-account-circle">
                                <div class="account-circle-image">
                                    <img src="" id="accountProfilePicImageID" class="account-profile-picture-img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- main content aka the visual bits that aren't naviagation and music players ------------------------------------------------------------------------------------------------------------------------------------------ -->
    <main class="main-area" id="main">
        <!-- up next queue slide out area -->
        <div class="up-next-queue-container" id="upNextQueueContainer">
            <div class="up-next-queue-blur-box">
                <!-- the head area of the up next queue area -->
                <div class="queue-top-area-colour-block"></div>
                <div class="queue-top-area">
                    <div class="queue-top-area-left queue-top">Up next</div>
                    <div class="queue-top-area-right queue-top"><span id="QUEUEclearButton" onclick="QUEUEclearList()">Clear</span></div>
                </div>
                <!-- the list of the different items in the up next queue -->
                <div class="up-next-queue-list" id="upNextQueueItemContainer">
                </div>
            </div>
        </div>
        <!-- expanded music object view -->
        <div class="expanded-music-object-view" id="expandedMusicObjectView">
        </div>
        <!-- music objects grid container, this little remnant has to remain for whilst it isn't populated -->
        <div class="music-objects-grid-container" id="musicObjectsGridContainer">
        </div>
        <!-- footer ---------------------------------------------------------------------------------------------------------------------------- -->
        <footer>
            <div class="footer-text-top">
                <span class="footer-span-grey-text">Copyright &copy </span><span class="footer-span-white-text">2023 Orange Inc.</span><span class="footer-span-grey-text"> All rights reserved.</span>
            </div>
            <div class="footer-text-bottom">
                <span class="footer-span-white-text" onclick="window.alert('Internet Service Terms:\nTry not to break things :)')">Internet Service Terms</span><span class="footer-span-dark-grey-text">|</span>
                <span class="footer-span-white-text" onclick="window.alert('We *respect* your pricacy')">Orange Music &amp; Privacy</span><span class="footer-span-dark-grey-text">|</span>
                <span class="footer-span-white-text" onclick="window.alert('Cookie Warning:\nWe use no cookies')">Cookie Warning</span><span class="footer-span-dark-grey-text">|</span>
                <span class="footer-span-white-text"><a class="footer-span-white-text" href="reset.html">Sign Out</a></span><span class="footer-span-dark-grey-text">|</span>
                <span class="footer-span-white-text"><a class="footer-span-white-text" href="feedback.html">Feedback</a></span>
            </div>
            <div class="footer-spacer"></div>
        </footer>
    </main>
    <!-- the mobile navbar, so that only the relevant things for that show -------------------------------------------------------------------------------------------------------------------------- -->
    <div class="navbar-nav-mobile">
        <div class="mobile-controls-container">
            <!-- insert the music controls here, they should hopefully carry  over perfectly?? -->
            <div class="button-displacement">
                <!-- shuffle -->
                <div class="svg-image-buttons-relative-container" id="PLAYERshuffleButton2">
                    <div class="svg-image-buttons-absolute-container">
                        <img src="assets/icons/shuffle%20button.svg" alt="shuffle icon" height="18" />
                    </div>
                </div>
                <!-- last -->
                <div class="svg-image-buttons-relative-container" id="PLAYERlastButton2">
                    <div class="svg-image-buttons-absolute-container">
                        <img src="assets/icons/back%20button.svg" alt="back icon" height="20" />
                    </div>
                </div>
                <!-- play -->
                <div class="svg-image-buttons-relative-container" id="PLAYERplayButton2">
                    <div class="svg-image-buttons-absolute-container">
                        <img src="assets/iconsv2/play%20button.2.svg" alt="play icon" height="28" id="PLAYERplayIcon" />
                    </div>
                </div>
                <!-- pause -->
                <!-- next -->
                <div class="svg-image-buttons-relative-container" id="PLAYERnextButton2">
                    <div class="svg-image-buttons-absolute-container">
                        <img src="assets/icons/next%20button.svg" alt="next icon" height="20" />
                    </div>
                </div>
                <!-- loop -->
                <div class="svg-image-buttons-relative-container" id="PLAYERloopButton2">
                    <div class="svg-image-buttons-absolute-container">
                        <img src="assets/icons/loop%20button.svg" alt="loop icon" height="18" id="PLAYERloopSVG" />
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-nav-mobile-navigation-container">
            <img src="assets/icons/search%20icon.svg" alt="search icon" onclick="window.history.pushState(null, null, 'searchPage')" height="150" />
            <img src="assets/iconsv2/browse.svg" height="15" alt="Browse" onclick="window.history.pushState(null, null, 'browse')" />
            <a href="sharenow.html">
                <img src="assets/icons/derpy.svg" height="15" alt="Share Now" />
            </a>
            <img src="assets/iconsv2/recently%20added.svg" height="15" alt="Recently Added" onclick="window.history.pushState(null, null, 'library')" />
            <img src="assets/iconsv2/your%20uploads.svg" height="15" alt="Your Uploads" onclick="window.history.pushState(null, null, 'yourUploads')" />
        </div>
    </div>
    <!-- "shadow dom", really just an absoluted box at the bottom that is just there -->
    <div>
        <div id="shadowDOM" onclick="hideShadowDOM()"></div>
        <div id="shadowMenuPopup"></div>
        <div id="shadowMenuPopupPlaylist"></div>
    </div>`

hydrateNav();
getUsersProfilePicAddress("uuid");
inputDetect();
//hydrateExpandedMusicObjects();


//setupCounter(document.querySelector('#counter'))