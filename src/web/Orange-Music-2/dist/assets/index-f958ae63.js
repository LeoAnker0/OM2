(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Me=`<!-- audio tag -->
<audio id="audio" preload>
    <source id="PLAYERsource" src=""></audio>
<!-- noise *generator* -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <filter id="noise1">
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
    <filter id="noise2">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
    <filter id="noise3">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
</svg>
<!-- layout htmls -->
<div class="topHalf-container">
    <div class="topHalf MATERIAL-blur-1">
        <div class="topHalf-left" id="topleftContentArea"></div>
        <div class="topHalf-right" id="toprightContentArea">
        </div>
    </div>
</div>
<main class="MATERIAL-meshBackground">
    <div class="botHalf-left MATERIAL-blur-1">
    </div>
    <div class="contentContainer" id="MAINcontentContainer">
        <div class="content" id="MAINcontentPages">
        </div>
    </div>
    <div class="menuModalEnvironment menuModalBackground" id="MENUmodalEnvironment"></div>
</main>`,Se=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2 MATERIAL-blur-22">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
    <div class="topleft-button-containers">
        <div class="topleft-button-containersL2">
            <!--
            <button class="topleft-button-container-button" id="TOPLEFT_homeButton">
                <div>
                    Home
                </div>
            </button>
            <div class="topleft-button-container-button"></div>
            <div class="topleft-button-container-button"></div>-->
        </div>
    </div>
</div>`,Re=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" />
                </div>
            </div>
            <!-- last -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERbackButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_backButton}" alt="back icon" height="13" />
                </div>
            </div>
            <!-- play -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERplayButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_playButtonV2}" alt="play icon" height="18" id="PLAYERplayIcon" />
                </div>
            </div>
            <!-- next -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERnextButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_nextButton}" alt="next icon" height="13" />
                </div>
            </div>
            <!-- loop -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERloopButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_loopButton}" alt="loop icon" height="12" id="PLAYERloopIcon" />
                </div>
            </div>
        </div>
    </div>
    <!-- lcd -->
    <div class="TOPRIGHT-lcd-container" id="LCDbody"></div>
    <!-- account controls -->
    <div class="TOPRIGHT-accountcontrols-container">
        <div class="TOPRIGHT-accountcontrols-volumeslider-container">
            <div class="TOPRIGHT-accountcontrols-volumeslider-volumeIcons-container">
                <img src="{icons_volumeNull}" alt="volume null" id="volumeControlZero" height="10" />
                <img src="{icons_volume1}" alt="volume quiet" id="volumeControlOne" height="10" />
                <img src="{icons_volume2}" alt="volume medium" id="volumeControlTwo" height="10" />
                <img src="{icons_volume3}" alt="volume loud" id="volumeControlThree" height="10" />
            </div>
            <!-- volume slider -->
            <label for="volumeRangeSlider" class="hideLabels">Range Slider</label>
            <div id="volumeSliderID">
                <input type="range" min="1" max="100" value="100" id="volumeRangeSlider">
            </div>
        </div>
        <div class="TOPRIGHT-accountcontrols-buttonarea-container">
            <div class="TOPRIGHT-accountcontrols-buttonarea-queue-container">
                <div class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                </div>
            </div>
            <div class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg">
                </div>
            </div>
        </div>
    </div>
</div>`,je=`<div class="QUEUE-environment" id="QUEUEenvironment">
    <div class="QUEUE-container-pointer"></div>
    <div class="QUEUE-container MATERIAL-blur-1 ">
        <div class="QUEUE-containerL2">
            <div class="QUEUE-top">
                <div class="QUEUE-top-text">
                    <span class="QUEUE-top-text-title">Up next</span>
                    <span class="QUEUE-top-text-clear" id="QUEUEclearQueueButton">Clear</span>
                </div>
            </div>
            <div class="QUEUE-bottom" id="QUEUEbottomContainer">
            </div>
        </div>
    </div>
</div>`,xe="/assets/volume_null-e39cf06f.svg",De="/assets/recently_added-a0a983c6.svg",Ne="/assets/volume_3-c8ab0a75.svg",Ae="/assets/orange_music_text_logo_black-12e7386c.svg",ke="/assets/volume_2-cfdac9da.svg",Je="/assets/browse_2-85030bba.svg",Ge="/assets/volume_1-27e93416.svg",Ue="/assets/orange_music_logo_white-2a680ea2.svg",He="/assets/search_icon-4f5e4381.svg",$e="/assets/orange_music_text_logo_black-91f9e706.png",Ye="/assets/up_next_queue_button-14fedba2.svg",qe="/assets/orange_music_logo_yellow-a109ff64.svg",ze="/assets/playlist-c6e9024f.svg",Fe="/assets/loop_button-aef56865.svg",Qe="/assets/help_icon-867fec9d.svg",Ve="/assets/play_button-b1e2d3a4.svg",Ke="/assets/browse-14744f27.svg",ue="/assets/menu_options_button-a1d7bbe3.svg",We="/assets/orange_music_text_logo_white-7f0ba909.svg",Ze="/assets/back_button-8128cade.svg",Xe="/assets/Albums-2e81dc74.svg",et="/assets/songs-016b7188.svg",tt="/assets/orange_music_logo_black-4d7e4591.svg",nt="/assets/your_uploaded_songs-06535705.svg",ot="/assets/artist-ab677d43.svg",it="/assets/shuffle_button-c2f06bc4.svg",st="/assets/orange_music_text_logo_white-4907051e.png",at="/assets/listen_now-c7438154.svg",ct="/assets/derpy-21c20ae5.svg",rt="/assets/next_button-9a850710.svg",lt="/assets/recently_added-7ff28139.svg",dt="/assets/play_button-5eeedbe6.svg",ut="/assets/browse-e8be8609.svg",mt="/assets/albums-681507b8.svg",pt="/assets/listen_now.2-bfa293ac.svg",gt="/assets/your_uploads-02e5c93c.svg",vt="/assets/play_button.2-fc90fac7.svg",ft="/assets/listen_now-fb02ffce.svg",_t="/assets/browse.2-15b501dd.svg",Et="/assets/place_holder_image-d4006a96.svg",yt="/assets/icons_MOGitems_add-19e679f7.svg",h={icons_volumeNull:xe,icons_recentlyAdded:De,icons_volume3:Ne,icons_orangeMusicTextLogoBlack:Ae,icons_volume2:ke,icons_browse2:Je,icons_volume1:Ge,icons_orangeMusicLogoWhite:Ue,icons_searchIcon:He,icons_orangeMusicTextLogoBlackPng:$e,icons_queueButton:Ye,icons_orangeMusicLogoYellow:qe,icons_playlist:ze,icons_loopButton:Fe,icons_helpIcon:Qe,icons_playButton:Ve,icons_browse:Ke,icons_menuOptionsButton:ue,icons_orangeMusicTextLogoWhite:We,icons_backButton:Ze,icons_Albums:Xe,icons_songs:et,icons_orangeMusicLogoBlack:tt,icons_yourUploadedSongs:nt,icons_artist:ot,icons_shuffleButton:it,icons_orangeMusicTextLogoWhitePng:st,icons_listenNow:at,icons_derpy:ct,icons_nextButton:rt,icons_recentlyAddedV2:lt,icons_playButtonV2:dt,icons_browseV2:ut,icons_albumsV2:mt,icons_listenNow2V2:pt,icons_yourUploads:gt,icons_playButton2:vt,icons_listenNowV2:ft,icons_browse2V2:_t,v3_placeholder:Et,icons_MOGitems_add:yt};function Tt(){let e="topleftContentArea",t=Se;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function It(){let e="toprightContentArea",t=Re;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function ht(){let e="MAINcontentContainer",t=je;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const Ct=`<div class="QUEUE-item-container" draggable="true">
    <div class="QUEUE-item-up-next-queue-image-container">
        <img src="{QUEUE_item_image}" class="QUEUE-item-up-next-queue-image">
        <div class="QUEUE-item-image-removeIndicator"></div>
    </div>
    <div class="QUEUE-item-up-next-queue-text-container">
        <span class="QUEUE-item-up-next-queue-text-song-title">{QUEUE_item_title}
        </span>
        <span class="QUEUE-item-up-next-queue-text-song-artist">{QUEUE_item_artist}</span>
    </div>
    <div class="QUEUE-item-up-next-queue-time-container">
        <div class="QUEUE-item-up-next-queue-item-context-call" draggable="false">
            <img src="{icons_menuOptionsButton}" alt="menu button" width="15" />
        </div>
        <span class="QUEUE-item-up-next-queue-time-span">{QUEUE_item_timeIndicator}</span>
    </div>
</div>`,bt='<div class="MENUmodalBody" id="MENUmodalBody"></div>',wt=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
    <div class="MENUmodalBody_image_select_file_drop_area" id="MENUmodalBody_image_select_file_drop_area">
        <button id="MENUmodalBody_image_select_file_select_button">
            Drag or click to add files.
        </button>
    </div>
    <div class="MENUmodalBody_image_preview_area">
        <img / id="MENUmodalBody_image_select_preview_area">
    </div>
    <div class="MENUmodalBody_image_submit_area" id="MENUmodalBody_image_select_submit_button_container">
        <button id="MENUmodalBody_image_select_submit_button">
            Submit
        </button>
        <div class="MENUmodalBody_image_submit_area_loader_spinner" id="MENUmodalBody_image_submit_area_loader_spinner">
            <div></div>
        </div>
    </div>
</div>`;function B(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}const Lt=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`,Bt=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
    <div class="LCD_mobile_body_container_l2">
        <div class="LCD_mobile_body_img">
            <img src="" id="LCD_mobile_body_img">
        </div>
        <div class="LCD_mobile_body_title_area_container">
            <div class="LCD_mobile_body_song_title" id="LCD_mobile_body_song_title">Come on, Come on</div>
            <div class="LCD_mobile_body_artist_title" id="LCD_mobile_body_artist_title">Smash Mouth</div>
            <div class="LCD_mobile_body_progress_bar">
                <input type="range" id="LCDMB_seek_input" min="0" max="100" value="0">
                <span id="LCDMB_seek_indicator"></span>
            </div>
            <div class="LCD_mobile_body_menu">
                <button id="LCDMB_menu_button">
                    <img src="{icons_menuOptionsButton}" height="16" width="16">
                </button>
            </div>
        </div>
        <div class="LCD_mobile_body_playback_controls_area_container">
            <div>
                <button id="LCDMB_back">
                    <img src="{icons_backButton}" height="40" width="40">
                </button>
            </div>
            <div>
                <button id="LCDMB_play">
                    <img src="{icons_playButtonV2}" height="40" width="40" id="LCDMB_play_icon">
                </button>
            </div>
            <div>
                <button id="LCDMB_next">
                    <img src="{icons_nextButton}" height="40" width="40">
                </button>
            </div>
        </div>
        <div class="LCD_mobile_body_further_options_button_container">
            <div>
                <button id="" disabled>
                    <img src="{icons_derpy}" height="20" width="20">
                </button>
            </div>
            <div>
            </div>
            <div>
                <button id="LCDMB_queue_button">
                    <img src="{icons_queueButton}" height="20" width="20">
                </button>
            </div>
        </div>
    </div>
</div>`;async function Pt(e,t){const n=new XMLHttpRequest,i=new FormData,o=localStorage.getItem("JWT");i.append("file",e),i.append("project_id",t),i.append("jwt",o),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){rn()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${C}/files/upload/photo/`,!0),n.send(i)}async function Ot(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await Pt(n,t)}async function me(e,t,n){try{const i=localStorage.getItem("JWT");if(!i){console.log("no jwt");return}const o={"access-token":i,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${C}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(i){console.error("Error:",i)}}async function Mt(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const i={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${C}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function St(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${C}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function Rt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}const jt=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader" id="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_derpy}" height="16" width="16">
            </button>
        </div>
        <div class="PROJECTviewMobileStickyHeaderProjectNameContainer" id="PROJECTviewMobileStickyHeaderProjectNameContainer">
        </div>
        <div class="PROJECTviewMobileStickyHeaderMenuButton">
            <button id="PROJECTviewMobileStickyHeaderMenuButton">
                <img src="{icons_menuOptionsButton}" height="16" width="14">
            </button>
        </div>
    </div>
    <div class="PROJECTviewContainer">
        <div class="PROJECTview-topContainer">
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplayImage PROJECTviewTopItem-1" id="PROJECTviewDisplayImage">
                <img src="{PROJECTviewDisplayImage}" id="PROJECTviewDisplayImage_imgTag">
            </div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplaySpacer PROJECTviewTopItem-3 "></div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplaySpacer PROJECTviewTopItem-4 "></div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplayTitle PROJECTviewTopItem-2 ">
                <h1 contenteditable="true" id="PROJECTviewDisplayTitleH1">{PROJECTviewMOREtitle}</h1>
                <h3 contenteditable="false" id="PROJECTviewDisplayTitleH3">{PROJECTviewMOREartist}</h3>
            </div>
            <div class=" PROJECTviewDisplayDescription PROJECTviewTopItem-5 " id="PROJECTviewDisplayDescription">
                <p id="PROJECTviewDescriptionP"></p>
                <button class="PROJECTviewDescriptionMoreButton" id="PROJECTviewDescriptionMoreButton">MORE</button>
            </div>
            <div class="PROJECTviewDisplayButtons PROJECTviewTopItem-6">
                <button id="PROJECTviewDescriptionTopPlayButton">
                    <img src="{icons_playButton}" height="16" width="16">
                    <div>Play</div>
                </button>
                <button id="PROJECTviewDescriptionTopShuffleButton">
                    <img src="{icons_shuffleButton}" height="16" width="16">
                    <div>Shuffle</div>
                </button>
            </div>
            <div class="PROJECTviewDisplayMenu  PROJECTviewTopItem-7">
                <button id="PROJECTviewDisplayMenuButton">
                    <img src="{icons_menuOptionsButton}" width="20" height="20">
                </button>
            </div>
        </div>
        <div class="PROJECTview-projectAreaContainer" id="PROJECTview_projectAreaContainer">
            <div class="PROJECTview-projectArea-uploadArea">
                <div class="PROJECTview_dropArea" id="PROJECTview_dropArea">
                    <p>Drag and drop files here or click to select files.</p>
                    <div id="uploadsContainer" class="uploadsContainer"></div>
                </div>
            </div>
        </div>
        <div class="PROJECTview-filesAreaContainer"></div>
    </div>
    <div class="PROJECTviewMOREdescriptionboxEnvironment" id="PROJECTviewMOREdescriptionboxEnvironment">
        <div class="PROJECTviewMOREdescriptionContainer">
            <button class="PROJECTviewMOREcloseButton" id="PROJECTviewMOREcloseButton">
                <img src="{icons_derpy}" width="20" height="20">
            </button>
            <div class="PROJECTviewMOREdescriptionHeaderContainer">
                <h1>{PROJECTviewMOREtitle}</h1>
                <h3>{PROJECTviewMOREartist} . {PROJECTviewMOREyear}</h3>
            </div>
            <div class="PROJECTviewMOREdescriptionContentContainer" contenteditable="true" id="PROJECTviewMOREdescriptionC">
                <textarea id="PROJECTviewMOREdescriptionP"></textarea>
            </div>
        </div>
    </div>
</div>`,xt=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Dt=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
    <div class="PROJECTview-projectTable-rowItem-1">
        <img src="{PROJECTviewRow_img}">
        <div>{PROJECTviewRow_songTitle}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-2">
        <div>{PROJECTviewRow_artistName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-3">
        <div>{PROJECTviewRow_projectName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-4">
        <div>{PROJECTviewRow_songDuration}</div>
        <button>
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`;async function Nt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${C}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;M(s)}catch(e){console.error("Error:",e)}}async function H(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function At(e){setTimeout(async()=>{const i=window.location.pathname.replace(/^\/projects\//,""),o=await H(i);o.project_id=i,t(o),Gt(o)},1);function t(n){Ut(n);const i=n.description;sessionStorage.setItem("description",i),Ht(),$t(),qt(),zt(n),Ft(n),Kt(n),Zt(n),tn(),fe(n.project_name),nn(n.project_id)}}function kt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function Jt(){pe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=(await H(t)).picture_url,s=`${T}/${o}/5/`;n.src=s}function Gt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const i=t.innerText;fe(i),me(e.project_id,"project_name",i)})}function Ut(e){let t="MAINcontentPages",n=jt;for(const[o,s]of Object.entries(h)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${T}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Ht(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){q()})}}const t=e();window.addEventListener("resize",t),q()}function q(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const i=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),a=[];i.textContent="";for(const f of s){const _=document.createElement("span");_.textContent=f+" ",i.appendChild(_);const E=_.getBoundingClientRect(),m=i.getBoundingClientRect();if(E.bottom<=m.bottom&&E.top>=m.top&&E.left>=m.left&&E.right<=m.right)a.unshift(f);else break}const r=a.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),v=d.split("");let p=l;for(let f=0;f<v.length;f++){const _=v[f],E=`<span class="PROJECTopacity${9-f}">${_}</span>`;p=p+E}i.innerHTML=p}function $t(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function o(){n.style.display="grid",B()&&(i.style.zIndex="40")}e.addEventListener("click",function(){o()}),t.addEventListener("dblclick",function(){o()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),o()),s=c})}function Yt(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function qt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function zt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){oe(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(i){i.target===n&&oe(e)})}function oe(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),me(e.project_id,"description",n);const i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");i.style.display="none",Yt(),q();const o=document.querySelector("main");o.style.zIndex="1"}async function Ft(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await H(e.project_id);t.addEventListener("click",function(){ye(a)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),i.addEventListener("click",function(){ie(event)}),o.addEventListener("click",function(){ie(event)}),s.addEventListener("click",()=>{M("/")})}function ie(e,t){e.stopPropagation(),e.target;const i=window.location.pathname.replace(/^\/projects\//,"");P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:i},colour:"hsl(180, 100%, 80%)"}],e)}function Qt(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Vt(e),k(),M("/")):k()}async function Vt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},o=await(await fetch(`${C}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(o)}catch(t){console.error("Error:",t)}}function Kt(e){document.getElementById("PROJECTview_projectAreaContainer"),Wt();const t=document.getElementById("PROJECTview-projectTable"),n=e,i=n.project_json;if(i!=="{}"){const o=JSON.parse(i).songs_json,s=[];for(const a of o)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];ve(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");ge(a),console.log(`Button in row ${d} clicked.`)}}})}}async function pe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await H(n);i.project_id=n;const o=i,s=o.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:o.picture_url,songTitle:l.song_name,artistName:o.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const v=c[l];ve(v)}e.addEventListener("click",function(l){const v=l.target;if(l.stopPropagation(),v.tagName==="BUTTON"){const p=v.closest(".PROJECTview-projectTable-rowContainer");if(p){const f=p.getAttribute("data-row-id");ge(l),console.log(`Button in row ${f} clicked.`)}}})}function ge(e){e.stopPropagation(),e.target,P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Wt(){let e="PROJECTview_projectAreaContainer",t=xt;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function ve(e){let t="PROJECTview-projectTable",n=Dt;for(const[o,s]of Object.entries(h)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${T}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Zt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",i=>{i.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",i=>{i.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("dragover");const o=i.dataTransfer.files;n(o,e)}),t.addEventListener("click",()=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{const o=i.files;n(o,e)}),i.click()});function n(i,o){for(const s of i);en(i,o)}}async function Xt(e,t,n,i){const o=new FormData;o.append("file",e),o.append("project_id",i.project_id);const s=localStorage.getItem("JWT");o.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,pe(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${C}/files/upload/audio/`,!0),a.send(o)}async function en(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div");o.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o),await Xt(i,o,s,t)}}function fe(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function tn(){const e=new IntersectionObserver(o,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function o(s,a){s.forEach(c=>{B()&&console.log("media query matches"),c.isIntersecting&&B()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):c.isIntersecting&&!B()||!c.isIntersecting&&!B()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!c.isIntersecting&&B()&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",i.style.visibility="visible")})}}function nn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){on(o,s)}}function on(e,t){e.stopPropagation(),e.target,P({project_id:t},e,"update_project_image")}function P(e,t,n){n===void 0&&an(e,t),n!==void 0&&n==="update_project_image"&&cn(e,t),n!==void 0&&n==="lcd_mobile_body"&&sn()}function sn(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");B()&&(t.style.zIndex="40",n.style.zIndex="0");const i=document.getElementById("MENUmodalEnvironment");i.style.display="block";let o=Bt;for(const[L,x]of Object.entries(h)){const N=new RegExp(`\\{${L}\\}`,"g");o=o.replace(N,x)}i.innerHTML=o;const s=document.getElementById("LCDMB_seek_input"),a=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const c=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),v=document.getElementById("LCDMB_queue_button"),p=document.getElementById("audio"),f=document.getElementById("LCD_mobile_body_song_title"),_=document.getElementById("LCD_mobile_body_artist_title"),E=document.getElementById("LCD_mobile_body_img");function m(){E.src=Q,f.innerText=V,_.innerText=K}p.addEventListener("ended",()=>{m()}),m();function y(){p.paused?(console.log("audio is paused"),d.src=h.icons_playButtonV2):(console.log("audio is playing"),d.src=h.icons_derpy)}y();const w=p.duration,D=p.currentTime/w*100;a.style.width=`${D}%`,p.addEventListener("timeupdate",()=>{const L=p.duration,N=p.currentTime/L*100;a.style.width=`${N}%`}),s.addEventListener("input",function(){const L=p.duration,x=s.value;p.currentTime=L*(x/100)}),c.addEventListener("click",()=>{he(),m()}),r.addEventListener("click",()=>{$(),m(),y()}),l.addEventListener("click",()=>{Ie(),m()}),v.addEventListener("click",()=>{console.log("queueButton was clicked")}),i.addEventListener("touchstart",ee,!1),i.addEventListener("touchmove",te,!1),i.addEventListener("touchend",ne,!1);let Z=0,X=0;function ee(L){Z=L.touches[0].clientY}function te(L){L.preventDefault()}function ne(L){X=L.changedTouches[0].clientY,X-Z>70&&(console.log("Down swipe detected!"),k(),document.removeEventListener("touchstart",ee),document.removeEventListener("touchmove",te),document.removeEventListener("touchend",ne))}}function an(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(o.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=bt,a.style.display="block";const c=document.getElementById("MENUmodalBody");a.addEventListener("click",_e);let r=n+"px",d=i+"px";c.style.left=r,c.style.top=d;for(let _=0;_<e.length;_++)dn(e[_]);const l=c.offsetWidth,v=c.offsetHeight,p=ln("MENUmodalBody");p.xOverflow==!0&&(r=n-l+"px",c.style.left=r),p.yOverflow==!0&&(d=i-v+"px",c.style.top=d);const f=c.getElementsByClassName("MENUmodalItemContainer");for(let _=0;_<f.length;_++){const E=f[_];E.setAttribute("data-menu-item-id",_),E.addEventListener("click",function(m){m.stopPropagation();const w=m.target.getAttribute("data-menu-item-id"),b=e[w].function,D=e[w].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){un[b](D);return}else return})}}function cn(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(o.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=wt,a.style.display="block";const c=document.getElementById("MENUmodalBody");a.addEventListener("click",_e);let r=n+"px",d=i+"px";c.style.left=r,c.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),v=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");function E(m,y){if(m){const w=URL.createObjectURL(m),b=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=w,f.style.visibility="visible",_.style.outline="1px solid red",f.addEventListener("click",()=>{Ot(m,y.project_id),b.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",m=>{m.preventDefault()}),l.addEventListener("drop",m=>{m.preventDefault();const y=m.dataTransfer.files;E(y[0],e)}),v.addEventListener("click",()=>{const m=document.createElement("input");m.type="file",m.accept="image/*",m.addEventListener("change",y=>{const w=y.target.files[0];E(w,e)}),m.click()})}function rn(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",k(),Jt()}function ln(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=o+s,d=c+a;let l=!1,v=!1;return r>n&&(l=!0),d>i&&(v=!0),{xOverflow:l,yOverflow:v}}function dn(e){const t=e.displayText,n=e.optionalSVG;let i;"colour"in e?i=e.colour:i="white";const o=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=Lt.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(h)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function _e(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function k(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10")}const un={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Qt(e)},PLAYBACK_add_songs_to_queue(e){Sn(e)}};let O="visible";function mn(){ht();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");z(O),e.addEventListener("click",pn),t.addEventListener("click",gn),S()}function pn(){if(O==="hidden"){O="visible",z(O);return}if(O==="visible"){O="hidden",z(O);return}}function z(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function S(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=g+1;t<u.length;t++){u[t].id=t;const n=u[t],i=In(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){c.target.dataset.songId}),o.dataset.songId=n.id,o.addEventListener("click",Tn),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",En),s.dataset.songID=n.id;const a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&yn(c)}),o.addEventListener("dragstart",vn),o.addEventListener("dragover",fn),o.addEventListener("drop",_n),e.appendChild(o)}}function gn(){const e=g+1;e>=0&&e<u.length?u.splice(e):u.length=0,S()}function vn(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function fn(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function _n(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=u.find(c=>c.id===parseInt(t)),o=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(i),a=u.indexOf(o);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,i),S())}function En(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=u.findIndex(o=>o.id===n);i!==-1&&u.splice(i,1),S()}function yn(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];P(i,e)}function Tn(e){}function In(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Ct;for(let d=0;d<t.length;d++){const l=t[d].toString(),v=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${T}/${n}/3/`:l==="QUEUE_item_title"?p=i:l==="QUEUE_item_artist"?p=o:l==="icons_menuOptionsButton"?p=ue:l==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(v,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),c.innerHTML}const hn=`<div class="LCDbody">
    <div class="LCDcontentContainer MATERIAL-blur-22">
        <div class="LCDleftImage">
            <img src="{v3_placeholder}" id="LCDimage">
        </div>
        <div class="LCDrightContent" id="LCDrightcontent">
            <div class="LCDright-titleTextAndMenuContainer">
                <div class="LCDrightTitleText-centreBox">
                    <div class="LCDrightTitleText-leftSpacer"></div>
                    <div class="LCDrightTitleText-text FADEOUT-right" id="LCDtitleText">{LCD_titleText_placeholder}
                    </div>
                    <div class="LCDrightTitleText-menuContainer" id="LCDmenuButton">
                        <img src="{icons_menuOptionsButton}">
                    </div>
                </div>
            </div>
            <div class="LCDright-bottomTextPlusTimeIndicatorsContainer">
                <div class="LCDright-bottomTextTimeIndicatorsLeft"></div>
                <div class="LCDright-bottomText-text-container">
                    <div class="LCDright-bottomText-text" id="LCDbottomText">
                        {LCD_bottomText_placeholder}</div>
                </div>
                <div class="LCDright-bottomTextTimeIndicatorsRight"></div>
            </div>
            <div class="LCDright-bottom-seekBar">
                <input type="range" value="0" min="0" max="100" step="0.1" id="LCDseekBar" />
                <div class="LCDright-bottom-seekBar-indicator"></div>
            </div>
        </div>
    </div>
    <div class="LCDcontentContainerMobile">
        <div class="LCDleftImage">
            <img src="{v3_placeholder}" id="LCDimageMobile">
        </div>
        <div class="LCDtitleTextMobile" id="LCDtitleTextMobile">{LCD_titleText_placeholder}</div>
    </div>
</div>`;function Cn(){wn(),F(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ln(t)}),Bn(),B()&&document.getElementById("LCDbody").addEventListener("click",bn)}function bn(e){console.log("open mobile lcd body"),e.stopPropagation(),P({param:"cheese"},e,"lcd_mobile_body")}function wn(){let e="LCDbody",t=hn;for(const[i,o]of Object.entries(h)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function F(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let r,d,l;e=n.clientWidth,d=s(),l=e/i,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function Ln(e){e.stopPropagation(),e.target,P([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function Bn(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Pn)})}function Pn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),xn(n)}function Ee(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],g=0,Q="",V="",K="";document.getElementById("audio");document.getElementById("PLAYERsource");let I="off",On="off",J="paused";function G(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function ye(e){u=[],g=0,u=Te(e),u.length>0&&(J="playing",R())}function Te(e){const t=[],n=e.project_contributors,i=e.project_name,o=e.picture_url,s=JSON.parse(e.project_json).songs_json;try{for(const a of s){const c=a.song_name,r=a.duration,d=a.url;t.push({img:o,song_name:c,url:d,duration:r,project_name:i,project_contributors:n})}}catch{}return t}function Mn(e){const t=e.current_queue,n=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const o=e.progress;u=t,g=n,Un(i),console.log("queue:",u),u.length>0&&An(o)}async function Sn(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,i=await Rt(t),o=Te(i);if(n==="later")u=u.concat(o);else if(n==="next"){const s=u.slice(0,g+1),a=u.slice(g+1);u=s,u=u.concat(o),u=u.concat(a)}S()}function $(){Rn()}function Rn(){const e=document.getElementById("audio");e.paused?(U("playing"),J="playing",e.play().then(t=>Ce()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(J="paused",U("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){$()});navigator.mediaSession.setActionHandler("pause",function(){$()});function Ie(){be()}function he(){we()}function jn(){document.getElementById("audio").addEventListener("ended",Jn)}function xn(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function Dn(){Gn()}function Nn(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:I,PLAYBACK_shuffle_state:On,progress:t}}function R(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),o=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${T}/${u[g].url}/3/`,e.load(),J==="playing"&&e.play().then(d=>Ce()).catch(d=>console.log(d)),n.innerHTML=u[g].song_name,i.innerHTML=u[g].song_name,o.innerHTML=u[g].project_contributors,F(),S(),U("playing"),c.src=`${T}/${u[g].img}/3/`,r.src=`${T}/${u[g].img}/3/`,Q=`${T}/${u[g].img}/5/`,V=u[g].song_name,K=u[g].project_contributors,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,v=Math.floor(d)-l,p=`"-${G(v)}"`,_=`"${G(Math.floor(l))}"`,E=l/d*100,m=`${E}%`;Ee(_,p),s.style.setProperty("--LCD-seekbar-width",m),s.style.setProperty("--LCD-seekbar-indicator-left",m),a.value=E,W()})}function An(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),i=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),a=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${T}/${u[g].url}/3/`,t.load(),t.currentTime=e,i.innerHTML=u[g].song_name,o.innerHTML=u[g].song_name,s.innerHTML=u[g].project_contributors,F(),S(),U("paused"),r.src=`${T}/${u[g].img}/3/`,d.src=`${T}/${u[g].img}/3/`,Q=`${T}/${u[g].img}/5/`,V=u[g].song_name,K=u[g].project_contributors,t.addEventListener("timeupdate",()=>{const l=t.duration,v=t.currentTime,p=Math.floor(l)-v,f=`"-${G(p)}"`,E=`"${G(Math.floor(v))}"`,m=v/l*100,y=`${m}%`;Ee(E,f),a.style.setProperty("--LCD-seekbar-width",y),a.style.setProperty("--LCD-seekbar-indicator-left",y),c.value=m,W()})}function Ce(){let e=u[g];const t=[{src:`${T}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),W()}function W(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function kn(){console.log("PLAYBACK_stop_playback, clear top")}function Jn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>g+1&&(I=="off"||I=="on")?(g+=1,R()):I=="song"?R():t==g+1&&I=="on"?(g=0,R()):kn()}function be(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>g+1&&(e.paused||e.pause(),g+=1,R())}navigator.mediaSession.setActionHandler("nexttrack",function(){be()});function we(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,g>0&&(e.pause(),g-=1,R())}navigator.mediaSession.setActionHandler("previoustrack",function(){we()});function Gn(){I=="off"?(I="on",j(I)):I=="on"?(I="song",j(I)):(I="off",j(I))}function Un(e){e=="off"?(I="off",j(I)):e=="on"?(I="on",j(I)):(e="song",I="on",j(I))}function Hn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",$n),t.addEventListener("click",Yn),n.addEventListener("click",qn),i.addEventListener("click",zn),o.addEventListener("click",Fn)}function $n(){console.log("shuffleClicked")}function Yn(){he()}function qn(){$()}function zn(){Ie()}function Fn(){Dn()}function j(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=h.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=h.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=h.icons_derpy;return}}function U(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=h.icons_derpy;return}if(e=="paused"){t.src=h.icons_playButtonV2;return}}function Qn(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Le(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Vn)})}function Vn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Le(n)}function Le(e){function t(o,s,a){return o>=s&&o<=a}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=o&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Kn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function Wn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Zn(),n=`${T}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Xn)}catch(t){console.error("Error initializing account image:",t)}}async function Zn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${C}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function Xn(e){e.stopPropagation(),eo(e)}function eo(e){P([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const to=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,no=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
        <div class="MOG-item-controlsContainer">
            <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play MATERIAL-blur-3">
                <img src="{icons_playButtonV2}">
            </div>
            <div id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu MATERIAL-blur-3">
                <img src="{icons_menuOptionsButton}">
            </div>
        </div>
    </div>
    <div class="MOG-itemTextContainer">
        <div class="MOG-itemTextTop">{MOG_text1}</div>
        <div class="MOG-itemTextBottom">{MOG_text2}</div>
        <div class="MOG-itemCheckedDate">{MOG_checkedDate}</div>
    </div>
</div>`,oo=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function io(){try{const e=document.getElementById("MAINcontentPages");co();const t=await ao();ro(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function so(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Be),e.innerHTML=""}async function ao(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},o=(await(await fetch(`${C}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",o),[])}catch(e){return console.error("Error:",e),[]}}function co(){let e="MAINcontentPages",t=to;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function ro(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=oo;for(const[r,d]of Object.entries(h)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const i=e.length;for(var o=0;o<=i-1;o++){let r=no;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=o,v=e[o].img,p=e[o].top,f=e[o].bottom,_=e[o].days,E=uo(_);for(const[m,y]of Object.entries(h)){const w=new RegExp(`\\{${m}\\}`,"g");r=r.replace(w,y)}for(let m=0;m<d.length;m++){const y=d[m].toString(),w=new RegExp(`\\{${y}\\}`,"g");let b="";y==="MOG_image"?b=`${T}/${v}/4/`:y==="MOG_text1"?b=p:y==="MOG_text2"?b=f:y==="MOG_checkedDate"?b=E:y==="MOGI_placeholder_itemID"&&(b=l),r=r.replace(w,b)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){Be(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,d){navigator.vibrate(1e3);const v=r.target.id.split("-")[1],p=d[v].project_id;console.log(p),Pe(r,p)}}async function lo(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Be(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await lo(o);ye(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1],o=t[i].project_id;Pe(e,o)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;M(`/projects/${o}`)}else n.id==="MOGaddNewItem"&&mo()}function Pe(e,t){e.stopPropagation(),P([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function uo(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function mo(){M("/new-project/")}const po=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer SETTINGSsignupContainer">
        <div class="SETTINGSmodalTopTextContainer">Sign Up</div>
        <form class="SETTINGSmodalFormAreaContainer SETTINGSmodalSignupFormAreaContainer" id="SETTINGSsignupForm">
            <label for="username" class="SETTINGSmodalFormAreaText">Username</label><br>
            <input type="text" name="username" id="username" required>
            <br><br>
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <label for="profilePicture" class="SETTINGSmodalFormAreaText">Profile Picture</label><br>
            <input type="file" name="profilePicture" id="profilePicture" accept=".jpg, .png, .webp" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Signup">
        </form>
        <div class="SETTINGSrandomImage">
            <img id="previewImage" src="https://picsum.photos/400">
        </div>
        <div id="spinner" class="spinner-container">
            <div class="spinner"></div>
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
</div>`;function go(){setTimeout(()=>{let e="MAINcontentPages",t=po;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",vo)},1)}async function vo(e){console.log("the signup event was caught"),e.preventDefault(),fo();const t=document.getElementById("SETTINGSsignupForm"),n={},i=o=>new Promise((s,a)=>{const c=new FileReader;if(o.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(o)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const o=await fetch(`${C}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const s=await o.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const d=await i(r);n[c.name]=d}}else n[c.name]=c.value;const a=await fetch(`${C}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();Y(),_o(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await o.json();Y(),se(),alert("There was an error with the email, check that the details are correct.")}}catch{Y(),se(),alert("There was an error, try again")}}function fo(){const e=document.getElementById("spinner");e.style.display="block"}function Y(){const e=document.getElementById("spinner");e.style.display="none"}function _o(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function se(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Eo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
            <button class="SETTINGSmodalSignup" id="SETTINGSmodalSignupButton">Signup?</button>
        </form>
        <div class="SETTINGSrandomImage">
            <img src="https://picsum.photos/400">
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
</div>`;let A=!1,ae=!1,ce=!1;async function yo(){await ho()?Oe():ce||(To(),ce=!0)}function To(){Co();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${C}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),le(),go()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),A)return!1;A=!0;const a=i.value,c=o.value;try{await Io(a,c)?(ae=!0,bo(),Oe(),setTimeout(le,2e3)):(ae=!1,wo(),console.log("Login failed. Retry!")),A=!1}catch(r){console.error("Error:",r),A=!1}return!1})}async function Io(e,t){try{const i=await(await fetch(`${C}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(i.authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.authenticated}catch(n){return console.error("Error:",n),!1}}async function ho(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${C}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function Co(){let e="MAINcontentPages",t=Eo;document.getElementById(e).innerHTML+=t}let re=!1;function le(){if(re===!0)return;document.getElementById("SETTINGSmodalID").remove(),re=!0}function bo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function wo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const C="https://om2apis.la0.uk",T="https://om2media.la0.uk";async function Oe(){jn(),Tt(),It(),Cn(),Hn(),Kn(),Qn(),Wn(),mn();function e(){const o=window.location.pathname;M(o)}window.addEventListener("popstate",e);const t=await St("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const o=n.current_path;M(o),Mn(n)}else e();function i(){const o=window.location.pathname,s=u,a=g,c=Nn();c.current_path=o,c.current_queue=s,c.current_index=a,Mt("last_state",c)}setInterval(i,2e4)}function Lo(){kt(),io()}function Bo(e){so(),At()}const de={"/":Lo,"/new-project/":Nt,"/projects/:projectID":Bo};function Po(){console.log("notFoundHandler")}function M(e){const t=Object.keys(de);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=de[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Po()}document.getElementById("app").innerHTML=Me;yo();
