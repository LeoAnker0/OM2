(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Oe=`<!-- audio tag -->
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
</div>`,xe=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,je="/assets/volume_null-e39cf06f.svg",De="/assets/recently_added-a0a983c6.svg",Ne="/assets/volume_3-c8ab0a75.svg",Ae="/assets/orange_music_text_logo_black-12e7386c.svg",ke="/assets/volume_2-cfdac9da.svg",Ge="/assets/browse_2-85030bba.svg",Je="/assets/volume_1-27e93416.svg",Ue="/assets/orange_music_logo_white-2a680ea2.svg",He="/assets/search_icon-4f5e4381.svg",$e="/assets/orange_music_text_logo_black-91f9e706.png",Ye="/assets/up_next_queue_button-14fedba2.svg",qe="/assets/orange_music_logo_yellow-a109ff64.svg",ze="/assets/playlist-c6e9024f.svg",Fe="/assets/loop_button-aef56865.svg",Qe="/assets/help_icon-867fec9d.svg",Ve="/assets/play_button-b1e2d3a4.svg",We="/assets/browse-14744f27.svg",ue="/assets/menu_options_button-a1d7bbe3.svg",Ke="/assets/orange_music_text_logo_white-7f0ba909.svg",Ze="/assets/back_button-8128cade.svg",Xe="/assets/Albums-2e81dc74.svg",et="/assets/songs-016b7188.svg",tt="/assets/orange_music_logo_black-4d7e4591.svg",nt="/assets/your_uploaded_songs-06535705.svg",ot="/assets/artist-ab677d43.svg",it="/assets/shuffle_button-c2f06bc4.svg",st="/assets/orange_music_text_logo_white-4907051e.png",ct="/assets/listen_now-c7438154.svg",at="/assets/derpy-21c20ae5.svg",rt="/assets/next_button-9a850710.svg",lt="/assets/recently_added-7ff28139.svg",dt="/assets/play_button-5eeedbe6.svg",ut="/assets/browse-e8be8609.svg",mt="/assets/albums-681507b8.svg",pt="/assets/listen_now.2-bfa293ac.svg",gt="/assets/your_uploads-02e5c93c.svg",vt="/assets/play_button.2-fc90fac7.svg",ft="/assets/listen_now-fb02ffce.svg",Et="/assets/browse.2-15b501dd.svg",_t="/assets/place_holder_image-d4006a96.svg",yt="/assets/icons_MOGitems_add-19e679f7.svg",I={icons_volumeNull:je,icons_recentlyAdded:De,icons_volume3:Ne,icons_orangeMusicTextLogoBlack:Ae,icons_volume2:ke,icons_browse2:Ge,icons_volume1:Je,icons_orangeMusicLogoWhite:Ue,icons_searchIcon:He,icons_orangeMusicTextLogoBlackPng:$e,icons_queueButton:Ye,icons_orangeMusicLogoYellow:qe,icons_playlist:ze,icons_loopButton:Fe,icons_helpIcon:Qe,icons_playButton:Ve,icons_browse:We,icons_menuOptionsButton:ue,icons_orangeMusicTextLogoWhite:Ke,icons_backButton:Ze,icons_Albums:Xe,icons_songs:et,icons_orangeMusicLogoBlack:tt,icons_yourUploadedSongs:nt,icons_artist:ot,icons_shuffleButton:it,icons_orangeMusicTextLogoWhitePng:st,icons_listenNow:ct,icons_derpy:at,icons_nextButton:rt,icons_recentlyAddedV2:lt,icons_playButtonV2:dt,icons_browseV2:ut,icons_albumsV2:mt,icons_listenNow2V2:pt,icons_yourUploads:gt,icons_playButton2:vt,icons_listenNowV2:ft,icons_browse2V2:Et,v3_placeholder:_t,icons_MOGitems_add:yt};function Tt(){let e="topleftContentArea",t=Se;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function It(){let e="toprightContentArea",t=Re;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ht(){let e="MAINcontentContainer",t=xe;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Ct=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,bt='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',wt=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;async function Pt(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){an()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${h}/files/upload/photo/`,!0),n.send(o)}async function Mt(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await Pt(n,t)}async function me(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function Ot(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${h}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function St(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${h}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}const Rt=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,jt=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function Dt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;O(s)}catch(e){console.error("Error:",e)}}async function J(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Nt(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await J(o);i.project_id=o,t(i),Gt(i)},1);function t(n){Jt(n);const o=n.description;sessionStorage.setItem("description",o),Ut(),Ht(),Yt(),qt(n),zt(n),Vt(n),Kt(n),en(),fe(n.project_name),tn(n.project_id)}}function At(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function kt(){pe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await J(t)).picture_url,s=`${T}/${i}/5/`;n.src=s}function Gt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const o=t.innerText;fe(o),me(e.project_id,"project_name",o)})}function Jt(e){let t="MAINcontentPages",n=Rt;for(const[i,s]of Object.entries(I)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewMOREtitle"?a=e.project_name:s==="PROJECTviewMOREartist"?a=e.project_contributors:s==="PROJECTviewMOREyear"?a=e.time_created:s==="MOG_checkedDate"?a="checkedIndicator":s==="MOGI_placeholder_itemID"?a="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(a=`${T}/${e.picture_url}/5/`),n=n.replace(c,a)}document.getElementById(t).innerHTML=n}function Ut(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){Y()})}}const t=e();window.addEventListener("resize",t),Y()}function Y(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const o=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),c=[];o.textContent="";for(const f of s){const E=document.createElement("span");E.textContent=f+" ",o.appendChild(E);const _=E.getBoundingClientRect(),u=o.getBoundingClientRect();if(_.bottom<=u.bottom&&_.top>=u.top&&_.left>=u.left&&_.right<=u.right)c.unshift(f);else break}const r=c.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),v=d.split("");let p=l;for(let f=0;f<v.length;f++){const E=v[f],_=`<span class="PROJECTopacity${9-f}">${E}</span>`;p=p+_}o.innerHTML=p}function Ht(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",B()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(c){const a=new Date().getTime();a-s<300&&(c.stopPropagation(),i()),s=a})}function $t(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Yt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function qt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){ne(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&ne(e)})}function ne(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),me(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",$t(),Y();const i=document.querySelector("main");i.style.zIndex="1"}async function zt(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),c=await J(e.project_id);t.addEventListener("click",function(){ye(c)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){oe(event)}),i.addEventListener("click",function(){oe(event)}),s.addEventListener("click",()=>{O("/")})}function oe(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(180, 100%, 80%)"}],e)}function Ft(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Qt(e),A(),O("/")):A()}async function Qt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(i)}catch(t){console.error("Error:",t)}}function Vt(e){document.getElementById("PROJECTview_projectAreaContainer"),Wt();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,s=[];for(const c of i)s.push({img:n.picture_url,songTitle:c.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(c.duration/60)}:${(c.duration%60).toString().padStart(2,"0")}`,song_sequence:c.song_sequence,url:c.url});for(let c=0;c<s.length;c++){s[c].projectID=c;const a=s[c];ve(a)}t.addEventListener("click",function(c){const a=c.target;if(c.stopPropagation(),a.tagName==="BUTTON"){const r=a.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");ge(c),console.log(`Button in row ${d} clicked.`)}}})}}async function pe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await J(n);o.project_id=n;const i=o,s=i.project_json,c=JSON.parse(s).songs_json,a=[];if(Array.isArray(c))for(const l of c)a.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<a.length;l++){a[l].projectID=l;const v=a[l];ve(v)}e.addEventListener("click",function(l){const v=l.target;if(l.stopPropagation(),v.tagName==="BUTTON"){const p=v.closest(".PROJECTview-projectTable-rowContainer");if(p){const f=p.getAttribute("data-row-id");ge(l),console.log(`Button in row ${f} clicked.`)}}})}function ge(e){e.stopPropagation(),e.target,P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Wt(){let e="PROJECTview_projectAreaContainer",t=xt;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function ve(e){let t="PROJECTview-projectTable",n=jt;for(const[i,s]of Object.entries(I)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewRow_img"?a=`${T}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?a=e.songTitle:s==="PROJECTviewRow_artistName"?a=e.artistName:s==="PROJECTviewRow_projectName"?a=e.projectName:s==="PROJECTviewRow_songDuration"?a=e.songDuration:s==="PROJECTviewRow_projectID"&&(a=e.projectID),n=n.replace(c,a)}document.getElementById(t).innerHTML+=n}function Kt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Xt(o,i)}}async function Zt(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const c=new XMLHttpRequest,a=document.createElement("div");a.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),a.appendChild(r),t.appendChild(a),c.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&a.classList.add("opacity-animation")}},c.onload=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,pe(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.onerror=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.open("POST",`${h}/files/upload/audio/`,!0),c.send(i)}async function Xt(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i),await Zt(o,i,s,t)}}function fe(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function en(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,c){s.forEach(a=>{B()&&console.log("media query matches"),a.isIntersecting&&B()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):a.isIntersecting&&!B()||!a.isIntersecting&&!B()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!a.isIntersecting&&B()&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",o.style.visibility="visible")})}}function tn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){nn(i,s)}}function nn(e,t){e.stopPropagation(),e.target,P({project_id:t},e,"update_project_image")}function P(e,t,n){n===void 0&&sn(e,t),n!==void 0&&n==="update_project_image"&&cn(e,t),n!==void 0&&n==="lcd_mobile_body"&&on()}function on(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");B()&&(t.style.zIndex="40",n.style.zIndex="0");const o=document.getElementById("MENUmodalEnvironment");o.style.display="block";let i=Bt;for(const[L,x]of Object.entries(I)){const D=new RegExp(`\\{${L}\\}`,"g");i=i.replace(D,x)}o.innerHTML=i;const s=document.getElementById("LCDMB_seek_input"),c=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const a=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),v=document.getElementById("LCDMB_queue_button"),p=document.getElementById("audio"),f=document.getElementById("LCD_mobile_body_song_title"),E=document.getElementById("LCD_mobile_body_artist_title"),_=document.getElementById("LCD_mobile_body_img");function u(){_.src=F,f.innerText=Q,E.innerText=V}p.addEventListener("ended",()=>{u()}),u();function y(){p.paused?(console.log("audio is paused"),d.src=I.icons_playButtonV2):(console.log("audio is playing"),d.src=I.icons_derpy)}y();const w=p.duration,j=p.currentTime/w*100;c.style.width=`${j}%`,p.addEventListener("timeupdate",()=>{const L=p.duration,D=p.currentTime/L*100;c.style.width=`${D}%`}),s.addEventListener("input",function(){const L=p.duration,x=s.value;p.currentTime=L*(x/100)}),a.addEventListener("click",()=>{Ie(),u()}),r.addEventListener("click",()=>{U(),u(),y()}),l.addEventListener("click",()=>{Te(),u()}),v.addEventListener("click",()=>{console.log("queueButton was clicked")}),o.addEventListener("touchstart",X,!1),o.addEventListener("touchmove",ee,!1),o.addEventListener("touchend",te,!1);let K=0,Z=0;function X(L){K=L.touches[0].clientY}function ee(L){L.preventDefault()}function te(L){Z=L.changedTouches[0].clientY,Z-K>70&&(console.log("Down swipe detected!"),A(),document.removeEventListener("touchstart",X),document.removeEventListener("touchmove",ee),document.removeEventListener("touchend",te))}}function sn(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(i.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=bt,c.style.display="block";const a=document.getElementById("MENUmodalBody");c.addEventListener("click",Ee);let r=n+"px",d=o+"px";a.style.left=r,a.style.top=d;for(let E=0;E<e.length;E++)ln(e[E]);const l=a.offsetWidth,v=a.offsetHeight,p=rn("MENUmodalBody");p.xOverflow==!0&&(r=n-l+"px",a.style.left=r),p.yOverflow==!0&&(d=o-v+"px",a.style.top=d);const f=a.getElementsByClassName("MENUmodalItemContainer");for(let E=0;E<f.length;E++){const _=f[E];_.setAttribute("data-menu-item-id",E),_.addEventListener("click",function(u){u.stopPropagation();const w=u.target.getAttribute("data-menu-item-id"),C=e[w].function,j=e[w].optionalParams;if(C=="TEST")console.log("the button worked");else if(C!="None"){dn[C](j);return}else return})}}function cn(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(i.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=wt,c.style.display="block";const a=document.getElementById("MENUmodalBody");c.addEventListener("click",Ee);let r=n+"px",d=o+"px";a.style.left=r,a.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),v=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),E=document.getElementById("MENUmodalBody_image_select_submit_button_container");function _(u,y){if(u){const w=URL.createObjectURL(u),C=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=w,f.style.visibility="visible",E.style.outline="1px solid red",f.addEventListener("click",()=>{Mt(u,y.project_id),C.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",u=>{u.preventDefault()}),l.addEventListener("drop",u=>{u.preventDefault();const y=u.dataTransfer.files;_(y[0],e)}),v.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",y=>{const w=y.target.files[0];_(w,e)}),u.click()})}function an(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",A(),kt()}function rn(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,c=t.getBoundingClientRect().top,a=t.getBoundingClientRect().height,r=i+s,d=a+c;let l=!1,v=!1;return r>n&&(l=!0),d>o&&(v=!0),{xOverflow:l,yOverflow:v}}function ln(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:o="white";const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),c=Lt.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),c=c.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const a="{"+n+"}";c=c.replace(s,a);for(const[r,d]of Object.entries(I)){const l=new RegExp(`\\{${r}\\}`,"g");c=c.replace(l,d)}i.innerHTML+=c;return}else{c=c.replace(/<img[^>]+>/g,""),i.innerHTML+=c;return}}function Ee(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function A(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10")}const dn={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Ft(e)}};let M="hidden";function un(){ht();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");q(M),e.addEventListener("click",mn),t.addEventListener("click",pn),R()}function mn(){if(M==="hidden"){M="visible",q(M);return}if(M==="visible"){M="hidden",q(M);return}}function q(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function R(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=g+1;t<m.length;t++){m[t].id=t;const n=m[t],o=yn(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(a){const d=a.target.dataset.songId;ie(d)}),i.dataset.songId=n.id,i.addEventListener("click",ie),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",En),s.dataset.songID=n.id;const c=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");c.dataset.songSet=n.id,c.addEventListener("click",function(a){a.target===c&&_n(a)}),i.addEventListener("dragstart",gn),i.addEventListener("dragover",vn),i.addEventListener("drop",fn),e.appendChild(i)}}function pn(){songs=[],R()}function gn(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function vn(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function fn(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(a=>a.id===parseInt(t)),i=m.find(a=>a.id===parseInt(n.dataset.songId)),s=m.indexOf(o),c=m.indexOf(i);s!==-1&&c!==-1&&(m.splice(s,1),m.splice(c,0,o),R())}function En(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&m.splice(o,1),R()}function _n(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];P(o,e)}function ie(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function yn(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let c=Ct;for(let d=0;d<t.length;d++){const l=t[d].toString(),v=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${T}/${n}/3/`:l==="QUEUE_item_title"?p=o:l==="QUEUE_item_artist"?p=i:l==="icons_menuOptionsButton"?p=ue:l==="QUEUE_item_timeIndicator"&&(p=s),c=c.replace(v,p)}c=c.replace("<div",`<div data-song-id="${e.id}"`);const a=document.createElement("div");return a.innerHTML=c,a.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),a.innerHTML}const Tn=`<div class="LCDbody">
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
</div>`;function In(){Cn(),z(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){bn(t)}),wn(),B()&&document.getElementById("LCDbody").addEventListener("click",hn)}function hn(e){console.log("open mobile lcd body"),e.stopPropagation(),P({param:"cheese"},e,"lcd_mobile_body")}function Cn(){let e="LCDbody",t=Tn;for(const[o,i]of Object.entries(I)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let c="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(c=""),t=t.replace(s,c)}document.getElementById(e).innerHTML=t}function z(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function c(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const a=c();window.addEventListener("resize",a),i()}function bn(e){e.stopPropagation(),e.target,P([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function wn(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Ln)})}function Ln(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Sn(n)}function _e(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let m=[],g=0,F="",Q="",V="";document.getElementById("audio");document.getElementById("PLAYERsource");let b="off",Bn="off";function k(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function ye(e){m=[],g=0;const t=e.project_contributors,n=e.project_name,o=e.picture_url,i=JSON.parse(e.project_json).songs_json;for(const s of i){const c=s.song_name,a=s.duration,r=s.url;m.push({img:o,song_name:c,url:r,duration:a,project_name:n,project_contributors:t})}S()}function Pn(e){const t=e.current_queue,n=e.current_index;e.PLAYBACK_loop_state,e.PLAYBACK_shuffle_state;const o=e.progress;m=t,g=n,we(),m.length>0&&jn(o)}function U(){console.log("play clicked"),Mn()}function Mn(){const e=document.getElementById("audio");e.paused?(G("playing"),e.play().then(t=>he()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(G("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){U()});navigator.mediaSession.setActionHandler("pause",function(){U()});function Te(){Ce()}function Ie(){be()}function On(){document.getElementById("audio").addEventListener("ended",Nn)}function Sn(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Rn(){we()}function xn(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:b,PLAYBACK_shuffle_state:Bn,progress:t}}function S(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,c=document.getElementById("LCDseekBar"),a=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${T}/${m[g].url}/3/`,e.load(),e.play().then(d=>he()).catch(d=>console.log(d)),n.innerHTML=m[g].song_name,o.innerHTML=m[g].song_name,i.innerHTML=m[g].project_contributors,z(),R(),G("playing"),a.src=`${T}/${m[g].img}/3/`,r.src=`${T}/${m[g].img}/3/`,F=`${T}/${m[g].img}/5/`,Q=m[g].song_name,V=m[g].project_contributors,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,v=Math.floor(d)-l,p=`"-${k(v)}"`,E=`"${k(Math.floor(l))}"`,_=l/d*100,u=`${_}%`;_e(E,p),s.style.setProperty("--LCD-seekbar-width",u),s.style.setProperty("--LCD-seekbar-indicator-left",u),c.value=_,W()})}function jn(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),c=document.documentElement,a=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${T}/${m[g].url}/3/`,t.load(),t.currentTime=e,o.innerHTML=m[g].song_name,i.innerHTML=m[g].song_name,s.innerHTML=m[g].project_contributors,z(),R(),G("paused"),r.src=`${T}/${m[g].img}/3/`,d.src=`${T}/${m[g].img}/3/`,F=`${T}/${m[g].img}/5/`,Q=m[g].song_name,V=m[g].project_contributors,t.addEventListener("timeupdate",()=>{const l=t.duration,v=t.currentTime,p=Math.floor(l)-v,f=`"-${k(p)}"`,_=`"${k(Math.floor(v))}"`,u=v/l*100,y=`${u}%`;_e(_,f),c.style.setProperty("--LCD-seekbar-width",y),c.style.setProperty("--LCD-seekbar-indicator-left",y),a.value=u,W()})}function he(){let e=m[g];const t=[{src:`${T}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),W()}function W(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Dn(){console.log("PLAYBACK_stop_playback, clear top")}function Nn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>g+1&&(b=="off"||b=="on")?(g+=1,S()):b=="song"?S():t==g+1&&b=="on"?(g=0,S()):Dn()}function Ce(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>g+1&&(e.paused||e.pause(),g+=1,S())}navigator.mediaSession.setActionHandler("nexttrack",function(){Ce()});function be(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length,g>0&&(e.pause(),g-=1,S())}navigator.mediaSession.setActionHandler("previoustrack",function(){be()});function we(){b=="off"?(b="on",H(b)):b=="on"?(b="song",H(b)):(b="off",H(b))}function An(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",kn),t.addEventListener("click",Gn),n.addEventListener("click",Jn),o.addEventListener("click",Un),i.addEventListener("click",Hn)}function kn(){console.log("shuffleClicked")}function Gn(){Ie()}function Jn(){U()}function Un(){Te()}function Hn(){Rn()}function H(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=I.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=I.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=I.icons_derpy;return}}function G(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=I.icons_derpy;return}if(e=="paused"){t.src=I.icons_playButtonV2;return}}function $n(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Le(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Yn)})}function Yn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Le(n)}function Le(e){function t(i,s,c){return i>=s&&i<=c}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let c=0;c<4;c++){let a=s[c];a!=i&&(document.getElementById(a).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function qn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function zn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Fn(),n=`${T}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Qn)}catch(t){console.error("Error initializing account image:",t)}}async function Fn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${h}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function Qn(e){e.stopPropagation(),Vn(e)}function Vn(e){P([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Wn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Kn=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,Zn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function Xn(){try{const e=document.getElementById("MAINcontentPages");no();const t=await to();oo(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function eo(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Be),e.innerHTML=""}async function to(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(c=>({img:c.picture_url,top:c.project_name,bottom:c.project_contributors,days:c.time_created,project_id:c.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function no(){let e="MAINcontentPages",t=Wn;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function oo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Zn;for(const[r,d]of Object.entries(I)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=Kn;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,v=e[i].img,p=e[i].top,f=e[i].bottom,E=e[i].days,_=so(E);for(const[u,y]of Object.entries(I)){const w=new RegExp(`\\{${u}\\}`,"g");r=r.replace(w,y)}for(let u=0;u<d.length;u++){const y=d[u].toString(),w=new RegExp(`\\{${y}\\}`,"g");let C="";y==="MOG_image"?C=`${T}/${v}/4/`:y==="MOG_text1"?C=p:y==="MOG_text2"?C=f:y==="MOG_checkedDate"?C=_:y==="MOGI_placeholder_itemID"&&(C=l),r=r.replace(w,C)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){Be(r,e)});let c;s.addEventListener("touchstart",function(r){r.timeStamp,c=setTimeout(function(){a(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(c)});function a(r,d){navigator.vibrate(1e3);const v=r.target.id.split("-")[1],p=d[v].project_id;console.log(p),Pe(r)}}async function io(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Be(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await io(i);ye(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1];t[o].project_id,Pe(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;O(`/projects/${i}`)}else n.id==="MOGaddNewItem"&&co()}function Pe(e){e.stopPropagation(),e.target,P([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function so(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function co(){O("/new-project/")}const ao=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ro(){setTimeout(()=>{let e="MAINcontentPages",t=ao;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",lo)},1)}async function lo(e){console.log("the signup event was caught"),e.preventDefault(),uo();const t=document.getElementById("SETTINGSsignupForm"),n={},o=i=>new Promise((s,c)=>{const a=new FileReader;if(i.size>5*1024*1024){c("Image size exceeds 5 MB limit");return}a.onloadend=()=>s(a.result.split(",")[1]),a.readAsDataURL(i)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const i=await fetch(`${h}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const s=await i.json();n.token=s.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const d=await o(r);n[a.name]=d}}else n[a.name]=a.value;const c=await fetch(`${h}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(c.ok){const a=await c.json();$(),mo(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await c.json();alert("There was an error, try again")}}else{const s=await i.json();$(),se(),alert("There was an error with the email, check that the details are correct.")}}catch{$(),se(),alert("There was an error, try again")}}function uo(){const e=document.getElementById("spinner");e.style.display="block"}function $(){const e=document.getElementById("spinner");e.style.display="none"}function mo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function se(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const po=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let N=!1,ce=!1,ae=!1;async function go(){await Eo()?Me():ae||(vo(),ae=!0)}function vo(){_o();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${h}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),le(),ro()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),N)return!1;N=!0;const c=o.value,a=i.value;try{await fo(c,a)?(ce=!0,yo(),Me(),setTimeout(le,2e3)):(ce=!1,To(),console.log("Login failed. Retry!")),N=!1}catch(r){console.error("Error:",r),N=!1}return!1})}async function fo(e,t){try{const o=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function Eo(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function _o(){let e="MAINcontentPages",t=po;document.getElementById(e).innerHTML+=t}let re=!1;function le(){if(re===!0)return;document.getElementById("SETTINGSmodalID").remove(),re=!0}function yo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function To(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="https://om2apis.la0.uk",T="https://om2media.la0.uk";async function Me(){On(),Tt(),It(),In(),An(),qn(),$n(),zn(),un();function e(){const i=window.location.pathname;O(i)}window.addEventListener("popstate",e);const t=await St("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const i=n.current_path;O(i),Pn(n)}else e();function o(){const i=window.location.pathname,s=m,c=g,a=xn();a.current_path=i,a.current_queue=s,a.current_index=c,Ot("last_state",a)}setInterval(o,2e4)}function Io(){At(),Xn()}function ho(e){eo(),Nt()}const de={"/":Io,"/new-project/":Dt,"/projects/:projectID":ho};function Co(){console.log("notFoundHandler")}function O(e){const t=Object.keys(de);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=de[n],c=i.slice(1);s(...c),e!=="/new-project/"&&history.pushState({},"",e);return}}Co()}document.getElementById("app").innerHTML=Oe;go();
