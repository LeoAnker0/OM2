(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Oe=`<!-- audio tag -->
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
</div>`,je="/assets/volume_null-e39cf06f.svg",De="/assets/recently_added-a0a983c6.svg",Ne="/assets/volume_3-c8ab0a75.svg",Ae="/assets/orange_music_text_logo_black-12e7386c.svg",ke="/assets/volume_2-cfdac9da.svg",Ge="/assets/browse_2-85030bba.svg",Je="/assets/volume_1-27e93416.svg",Ue="/assets/orange_music_logo_white-2a680ea2.svg",He="/assets/search_icon-4f5e4381.svg",$e="/assets/orange_music_text_logo_black-91f9e706.png",Ye="/assets/up_next_queue_button-14fedba2.svg",qe="/assets/orange_music_logo_yellow-a109ff64.svg",ze="/assets/playlist-c6e9024f.svg",Fe="/assets/loop_button-aef56865.svg",Qe="/assets/help_icon-867fec9d.svg",Ve="/assets/play_button-b1e2d3a4.svg",We="/assets/browse-14744f27.svg",me="/assets/menu_options_button-a1d7bbe3.svg",Ke="/assets/orange_music_text_logo_white-7f0ba909.svg",Ze="/assets/back_button-8128cade.svg",Xe="/assets/Albums-2e81dc74.svg",et="/assets/songs-016b7188.svg",tt="/assets/orange_music_logo_black-4d7e4591.svg",nt="/assets/your_uploaded_songs-06535705.svg",ot="/assets/artist-ab677d43.svg",it="/assets/shuffle_button-c2f06bc4.svg",st="/assets/orange_music_text_logo_white-4907051e.png",ct="/assets/listen_now-c7438154.svg",at="/assets/derpy-21c20ae5.svg",rt="/assets/next_button-9a850710.svg",lt="/assets/recently_added-7ff28139.svg",dt="/assets/play_button-5eeedbe6.svg",ut="/assets/browse-e8be8609.svg",mt="/assets/albums-681507b8.svg",pt="/assets/listen_now.2-bfa293ac.svg",gt="/assets/your_uploads-02e5c93c.svg",vt="/assets/play_button.2-fc90fac7.svg",ft="/assets/listen_now-fb02ffce.svg",Et="/assets/browse.2-15b501dd.svg",_t="/assets/place_holder_image-d4006a96.svg",yt="/assets/icons_MOGitems_add-19e679f7.svg",h={icons_volumeNull:je,icons_recentlyAdded:De,icons_volume3:Ne,icons_orangeMusicTextLogoBlack:Ae,icons_volume2:ke,icons_browse2:Ge,icons_volume1:Je,icons_orangeMusicLogoWhite:Ue,icons_searchIcon:He,icons_orangeMusicTextLogoBlackPng:$e,icons_queueButton:Ye,icons_orangeMusicLogoYellow:qe,icons_playlist:ze,icons_loopButton:Fe,icons_helpIcon:Qe,icons_playButton:Ve,icons_browse:We,icons_menuOptionsButton:me,icons_orangeMusicTextLogoWhite:Ke,icons_backButton:Ze,icons_Albums:Xe,icons_songs:et,icons_orangeMusicLogoBlack:tt,icons_yourUploadedSongs:nt,icons_artist:ot,icons_shuffleButton:it,icons_orangeMusicTextLogoWhitePng:st,icons_listenNow:ct,icons_derpy:at,icons_nextButton:rt,icons_recentlyAddedV2:lt,icons_playButtonV2:dt,icons_browseV2:ut,icons_albumsV2:mt,icons_listenNow2V2:pt,icons_yourUploads:gt,icons_playButton2:vt,icons_listenNowV2:ft,icons_browse2V2:Et,v3_placeholder:_t,icons_MOGitems_add:yt};function Tt(){let e="topleftContentArea",t=Se;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function It(){let e="toprightContentArea",t=Re;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function ht(){let e="MAINcontentContainer",t=xe;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const Ct=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;async function Pt(e,t){const n=new XMLHttpRequest,i=new FormData,o=localStorage.getItem("JWT");i.append("file",e),i.append("project_id",t),i.append("jwt",o),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){an()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${C}/files/upload/photo/`,!0),n.send(i)}async function Mt(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await Pt(n,t)}async function pe(e,t,n){try{const i=localStorage.getItem("JWT");if(!i){console.log("no jwt");return}const o={"access-token":i,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${C}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(i){console.error("Error:",i)}}async function Ot(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const i={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${C}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function St(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${C}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}const Rt=`<div class="PROJECTviewContainerEnvironment">
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
</div>`;async function Dt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${C}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;O(s)}catch(e){console.error("Error:",e)}}async function H(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Nt(e){setTimeout(async()=>{const i=window.location.pathname.replace(/^\/projects\//,""),o=await H(i);o.project_id=i,t(o),Gt(o)},1);function t(n){Jt(n);const i=n.description;sessionStorage.setItem("description",i),Ut(),Ht(),Yt(),qt(n),zt(n),Vt(n),Kt(n),en(),Ee(n.project_name),tn(n.project_id)}}function At(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function kt(){ge();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=(await H(t)).picture_url,s=`${T}/${o}/5/`;n.src=s}function Gt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const i=t.innerText;Ee(i),pe(e.project_id,"project_name",i)})}function Jt(e){let t="MAINcontentPages",n=Rt;for(const[o,s]of Object.entries(h)){const c=new RegExp(`\\{${o}\\}`,"g");n=n.replace(c,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewMOREtitle"?a=e.project_name:s==="PROJECTviewMOREartist"?a=e.project_contributors:s==="PROJECTviewMOREyear"?a=e.time_created:s==="MOG_checkedDate"?a="checkedIndicator":s==="MOGI_placeholder_itemID"?a="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(a=`${T}/${e.picture_url}/5/`),n=n.replace(c,a)}document.getElementById(t).innerHTML=n}function Ut(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){q()})}}const t=e();window.addEventListener("resize",t),q()}function q(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const i=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),c=[];i.textContent="";for(const f of s){const E=document.createElement("span");E.textContent=f+" ",i.appendChild(E);const _=E.getBoundingClientRect(),m=i.getBoundingClientRect();if(_.bottom<=m.bottom&&_.top>=m.top&&_.left>=m.left&&_.right<=m.right)c.unshift(f);else break}const r=c.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),v=d.split("");let p=l;for(let f=0;f<v.length;f++){const E=v[f],_=`<span class="PROJECTopacity${9-f}">${E}</span>`;p=p+_}i.innerHTML=p}function Ht(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function o(){n.style.display="grid",B()&&(i.style.zIndex="40")}e.addEventListener("click",function(){o()}),t.addEventListener("dblclick",function(){o()});let s=0;t.addEventListener("touchend",function(c){const a=new Date().getTime();a-s<300&&(c.stopPropagation(),o()),s=a})}function $t(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Yt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function qt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){oe(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(i){i.target===n&&oe(e)})}function oe(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),pe(e.project_id,"description",n);const i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");i.style.display="none",$t(),q();const o=document.querySelector("main");o.style.zIndex="1"}async function zt(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),c=await H(e.project_id);t.addEventListener("click",function(){Te(c)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),i.addEventListener("click",function(){ie(event)}),o.addEventListener("click",function(){ie(event)}),s.addEventListener("click",()=>{O("/")})}function ie(e,t){e.stopPropagation(),e.target;const i=window.location.pathname.replace(/^\/projects\//,"");P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:i},colour:"hsl(180, 100%, 80%)"}],e)}function Ft(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Qt(e),k(),O("/")):k()}async function Qt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},o=await(await fetch(`${C}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(o)}catch(t){console.error("Error:",t)}}function Vt(e){document.getElementById("PROJECTview_projectAreaContainer"),Wt();const t=document.getElementById("PROJECTview-projectTable"),n=e,i=n.project_json;if(i!=="{}"){const o=JSON.parse(i).songs_json,s=[];for(const c of o)s.push({img:n.picture_url,songTitle:c.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(c.duration/60)}:${(c.duration%60).toString().padStart(2,"0")}`,song_sequence:c.song_sequence,url:c.url});for(let c=0;c<s.length;c++){s[c].projectID=c;const a=s[c];fe(a)}t.addEventListener("click",function(c){const a=c.target;if(c.stopPropagation(),a.tagName==="BUTTON"){const r=a.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");ve(c),console.log(`Button in row ${d} clicked.`)}}})}}async function ge(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await H(n);i.project_id=n;const o=i,s=o.project_json,c=JSON.parse(s).songs_json,a=[];if(Array.isArray(c))for(const l of c)a.push({img:o.picture_url,songTitle:l.song_name,artistName:o.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<a.length;l++){a[l].projectID=l;const v=a[l];fe(v)}e.addEventListener("click",function(l){const v=l.target;if(l.stopPropagation(),v.tagName==="BUTTON"){const p=v.closest(".PROJECTview-projectTable-rowContainer");if(p){const f=p.getAttribute("data-row-id");ve(l),console.log(`Button in row ${f} clicked.`)}}})}function ve(e){e.stopPropagation(),e.target,P([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Wt(){let e="PROJECTview_projectAreaContainer",t=xt;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function fe(e){let t="PROJECTview-projectTable",n=jt;for(const[o,s]of Object.entries(h)){const c=new RegExp(`\\{${o}\\}`,"g");n=n.replace(c,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let o=0;o<i.length;o++){const s=i[o].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewRow_img"?a=`${T}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?a=e.songTitle:s==="PROJECTviewRow_artistName"?a=e.artistName:s==="PROJECTviewRow_projectName"?a=e.projectName:s==="PROJECTviewRow_songDuration"?a=e.songDuration:s==="PROJECTviewRow_projectID"&&(a=e.projectID),n=n.replace(c,a)}document.getElementById(t).innerHTML+=n}function Kt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",i=>{i.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",i=>{i.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("dragover");const o=i.dataTransfer.files;n(o,e)}),t.addEventListener("click",()=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{const o=i.files;n(o,e)}),i.click()});function n(i,o){for(const s of i);Xt(i,o)}}async function Zt(e,t,n,i){const o=new FormData;o.append("file",e),o.append("project_id",i.project_id);const s=localStorage.getItem("JWT");o.append("jwt",s);const c=new XMLHttpRequest,a=document.createElement("div");a.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),a.appendChild(r),t.appendChild(a),c.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&a.classList.add("opacity-animation")}},c.onload=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,ge(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.onerror=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.open("POST",`${C}/files/upload/audio/`,!0),c.send(o)}async function Xt(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div");o.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o),await Zt(i,o,s,t)}}function Ee(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function en(){const e=new IntersectionObserver(o,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function o(s,c){s.forEach(a=>{B()&&console.log("media query matches"),a.isIntersecting&&B()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):a.isIntersecting&&!B()||!a.isIntersecting&&!B()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!a.isIntersecting&&B()&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",i.style.visibility="visible")})}}function tn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){nn(o,s)}}function nn(e,t){e.stopPropagation(),e.target,P({project_id:t},e,"update_project_image")}function P(e,t,n){n===void 0&&sn(e,t),n!==void 0&&n==="update_project_image"&&cn(e,t),n!==void 0&&n==="lcd_mobile_body"&&on()}function on(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");B()&&(t.style.zIndex="40",n.style.zIndex="0");const i=document.getElementById("MENUmodalEnvironment");i.style.display="block";let o=Bt;for(const[L,j]of Object.entries(h)){const N=new RegExp(`\\{${L}\\}`,"g");o=o.replace(N,j)}i.innerHTML=o;const s=document.getElementById("LCDMB_seek_input"),c=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const a=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),v=document.getElementById("LCDMB_queue_button"),p=document.getElementById("audio"),f=document.getElementById("LCD_mobile_body_song_title"),E=document.getElementById("LCD_mobile_body_artist_title"),_=document.getElementById("LCD_mobile_body_img");function m(){_.src=Q,f.innerText=V,E.innerText=W}p.addEventListener("ended",()=>{m()}),m();function y(){p.paused?(console.log("audio is paused"),d.src=h.icons_playButtonV2):(console.log("audio is playing"),d.src=h.icons_derpy)}y();const w=p.duration,D=p.currentTime/w*100;c.style.width=`${D}%`,p.addEventListener("timeupdate",()=>{const L=p.duration,N=p.currentTime/L*100;c.style.width=`${N}%`}),s.addEventListener("input",function(){const L=p.duration,j=s.value;p.currentTime=L*(j/100)}),a.addEventListener("click",()=>{he(),m()}),r.addEventListener("click",()=>{$(),m(),y()}),l.addEventListener("click",()=>{Ie(),m()}),v.addEventListener("click",()=>{console.log("queueButton was clicked")}),i.addEventListener("touchstart",ee,!1),i.addEventListener("touchmove",te,!1),i.addEventListener("touchend",ne,!1);let Z=0,X=0;function ee(L){Z=L.touches[0].clientY}function te(L){L.preventDefault()}function ne(L){X=L.changedTouches[0].clientY,X-Z>70&&(console.log("Down swipe detected!"),k(),document.removeEventListener("touchstart",ee),document.removeEventListener("touchmove",te),document.removeEventListener("touchend",ne))}}function sn(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=bt,c.style.display="block";const a=document.getElementById("MENUmodalBody");c.addEventListener("click",_e);let r=n+"px",d=i+"px";a.style.left=r,a.style.top=d;for(let E=0;E<e.length;E++)ln(e[E]);const l=a.offsetWidth,v=a.offsetHeight,p=rn("MENUmodalBody");p.xOverflow==!0&&(r=n-l+"px",a.style.left=r),p.yOverflow==!0&&(d=i-v+"px",a.style.top=d);const f=a.getElementsByClassName("MENUmodalItemContainer");for(let E=0;E<f.length;E++){const _=f[E];_.setAttribute("data-menu-item-id",E),_.addEventListener("click",function(m){m.stopPropagation();const w=m.target.getAttribute("data-menu-item-id"),b=e[w].function,D=e[w].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){dn[b](D);return}else return})}}function cn(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");B()&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=wt,c.style.display="block";const a=document.getElementById("MENUmodalBody");c.addEventListener("click",_e);let r=n+"px",d=i+"px";a.style.left=r,a.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),v=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),E=document.getElementById("MENUmodalBody_image_select_submit_button_container");function _(m,y){if(m){const w=URL.createObjectURL(m),b=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=w,f.style.visibility="visible",E.style.outline="1px solid red",f.addEventListener("click",()=>{Mt(m,y.project_id),b.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",m=>{m.preventDefault()}),l.addEventListener("drop",m=>{m.preventDefault();const y=m.dataTransfer.files;_(y[0],e)}),v.addEventListener("click",()=>{const m=document.createElement("input");m.type="file",m.accept="image/*",m.addEventListener("change",y=>{const w=y.target.files[0];_(w,e)}),m.click()})}function an(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",k(),kt()}function rn(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,c=t.getBoundingClientRect().top,a=t.getBoundingClientRect().height,r=o+s,d=a+c;let l=!1,v=!1;return r>n&&(l=!0),d>i&&(v=!0),{xOverflow:l,yOverflow:v}}function ln(e){const t=e.displayText,n=e.optionalSVG;let i;"colour"in e?i=e.colour:i="white";const o=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),c=Lt.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),c=c.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const a="{"+n+"}";c=c.replace(s,a);for(const[r,d]of Object.entries(h)){const l=new RegExp(`\\{${r}\\}`,"g");c=c.replace(l,d)}o.innerHTML+=c;return}else{c=c.replace(/<img[^>]+>/g,""),o.innerHTML+=c;return}}function _e(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function k(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10")}const dn={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Ft(e)}};let M="hidden";function un(){ht();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");z(M),e.addEventListener("click",mn),t.addEventListener("click",pn),x()}function mn(){if(M==="hidden"){M="visible",z(M);return}if(M==="visible"){M="hidden",z(M);return}}function z(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function x(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=g+1;t<u.length;t++){u[t].id=t;const n=u[t],i=yn(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(a){const d=a.target.dataset.songId;se(d)}),o.dataset.songId=n.id,o.addEventListener("click",se),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",En),s.dataset.songID=n.id;const c=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");c.dataset.songSet=n.id,c.addEventListener("click",function(a){a.target===c&&_n(a)}),o.addEventListener("dragstart",gn),o.addEventListener("dragover",vn),o.addEventListener("drop",fn),e.appendChild(o)}}function pn(){const e=g+1;e>=0&&e<u.length?u.splice(e):u.length=0,x()}function gn(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function vn(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function fn(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=u.find(a=>a.id===parseInt(t)),o=u.find(a=>a.id===parseInt(n.dataset.songId)),s=u.indexOf(i),c=u.indexOf(o);s!==-1&&c!==-1&&(u.splice(s,1),u.splice(c,0,i),x())}function En(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=u.findIndex(o=>o.id===n);i!==-1&&u.splice(i,1),x()}function _n(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];P(i,e)}function se(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function yn(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let c=Ct;for(let d=0;d<t.length;d++){const l=t[d].toString(),v=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${T}/${n}/3/`:l==="QUEUE_item_title"?p=i:l==="QUEUE_item_artist"?p=o:l==="icons_menuOptionsButton"?p=me:l==="QUEUE_item_timeIndicator"&&(p=s),c=c.replace(v,p)}c=c.replace("<div",`<div data-song-id="${e.id}"`);const a=document.createElement("div");return a.innerHTML=c,a.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),a.innerHTML}const Tn=`<div class="LCDbody">
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
</div>`;function In(){Cn(),F(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){bn(t)}),wn(),B()&&document.getElementById("LCDbody").addEventListener("click",hn)}function hn(e){console.log("open mobile lcd body"),e.stopPropagation(),P({param:"cheese"},e,"lcd_mobile_body")}function Cn(){let e="LCDbody",t=Tn;for(const[i,o]of Object.entries(h)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let c="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(c=""),t=t.replace(s,c)}document.getElementById(e).innerHTML=t}function F(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let r,d,l;e=n.clientWidth,d=s(),l=e/i,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function c(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(o)}}const a=c();window.addEventListener("resize",a),o()}function bn(e){e.stopPropagation(),e.target,P([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function wn(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Ln)})}function Ln(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),Sn(n)}function ye(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],g=0,Q="",V="",W="";document.getElementById("audio");document.getElementById("PLAYERsource");let I="off",Bn="off",G="paused";function J(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function Te(e){u=[],g=0;const t=e.project_contributors,n=e.project_name,i=e.picture_url,o=JSON.parse(e.project_json).songs_json;for(const s of o){const c=s.song_name,a=s.duration,r=s.url;u.push({img:i,song_name:c,url:r,duration:a,project_name:n,project_contributors:t})}G="playing",S()}function Pn(e){const t=e.current_queue,n=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const o=e.progress;u=t,g=n,kn(i),u.length>0&&jn(o)}function $(){Mn()}function Mn(){const e=document.getElementById("audio");e.paused?(U("playing"),G="playing",e.play().then(t=>Ce()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(G="paused",U("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){$()});navigator.mediaSession.setActionHandler("pause",function(){$()});function Ie(){be()}function he(){we()}function On(){document.getElementById("audio").addEventListener("ended",Nn)}function Sn(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function Rn(){An()}function xn(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:I,PLAYBACK_shuffle_state:Bn,progress:t}}function S(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),o=document.getElementById("LCDbottomText"),s=document.documentElement,c=document.getElementById("LCDseekBar"),a=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${T}/${u[g].url}/3/`,e.load(),G==="playing"&&e.play().then(d=>Ce()).catch(d=>console.log(d)),n.innerHTML=u[g].song_name,i.innerHTML=u[g].song_name,o.innerHTML=u[g].project_contributors,F(),x(),U("playing"),a.src=`${T}/${u[g].img}/3/`,r.src=`${T}/${u[g].img}/3/`,Q=`${T}/${u[g].img}/5/`,V=u[g].song_name,W=u[g].project_contributors,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,v=Math.floor(d)-l,p=`"-${J(v)}"`,E=`"${J(Math.floor(l))}"`,_=l/d*100,m=`${_}%`;ye(E,p),s.style.setProperty("--LCD-seekbar-width",m),s.style.setProperty("--LCD-seekbar-indicator-left",m),c.value=_,K()})}function jn(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),i=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),c=document.documentElement,a=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${T}/${u[g].url}/3/`,t.load(),t.currentTime=e,i.innerHTML=u[g].song_name,o.innerHTML=u[g].song_name,s.innerHTML=u[g].project_contributors,F(),x(),U("paused"),r.src=`${T}/${u[g].img}/3/`,d.src=`${T}/${u[g].img}/3/`,Q=`${T}/${u[g].img}/5/`,V=u[g].song_name,W=u[g].project_contributors,t.addEventListener("timeupdate",()=>{const l=t.duration,v=t.currentTime,p=Math.floor(l)-v,f=`"-${J(p)}"`,_=`"${J(Math.floor(v))}"`,m=v/l*100,y=`${m}%`;ye(_,f),c.style.setProperty("--LCD-seekbar-width",y),c.style.setProperty("--LCD-seekbar-indicator-left",y),a.value=m,K()})}function Ce(){let e=u[g];const t=[{src:`${T}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),K()}function K(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Dn(){console.log("PLAYBACK_stop_playback, clear top")}function Nn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>g+1&&(I=="off"||I=="on")?(g+=1,S()):I=="song"?S():t==g+1&&I=="on"?(g=0,S()):Dn()}function be(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>g+1&&(e.paused||e.pause(),g+=1,S())}navigator.mediaSession.setActionHandler("nexttrack",function(){be()});function we(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,g>0&&(e.pause(),g-=1,S())}navigator.mediaSession.setActionHandler("previoustrack",function(){we()});function An(){I=="off"?(I="on",R(I)):I=="on"?(I="song",R(I)):(I="off",R(I))}function kn(e){e=="off"?(I="off",R(I)):e=="on"?(I="on",R(I)):(e="song",I="on",R(I))}function Gn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Jn),t.addEventListener("click",Un),n.addEventListener("click",Hn),i.addEventListener("click",$n),o.addEventListener("click",Yn)}function Jn(){console.log("shuffleClicked")}function Un(){he()}function Hn(){$()}function $n(){Ie()}function Yn(){Rn()}function R(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=h.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=h.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=h.icons_derpy;return}}function U(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=h.icons_derpy;return}if(e=="paused"){t.src=h.icons_playButtonV2;return}}function qn(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Le(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",zn)})}function zn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Le(n)}function Le(e){function t(o,s,c){return o>=s&&o<=c}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let c=0;c<4;c++){let a=s[c];a!=o&&(document.getElementById(a).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Fn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function Qn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Vn(),n=`${T}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Wn)}catch(t){console.error("Error initializing account image:",t)}}async function Vn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${C}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function Wn(e){e.stopPropagation(),Kn(e)}function Kn(e){P([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Zn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Xn=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,eo=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function to(){try{const e=document.getElementById("MAINcontentPages");io();const t=await oo();so(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function no(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Be),e.innerHTML=""}async function oo(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},o=(await(await fetch(`${C}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(o)?o.map(c=>({img:c.picture_url,top:c.project_name,bottom:c.project_contributors,days:c.time_created,project_id:c.project_id})):(console.log("Projects is not an array:",o),[])}catch(e){return console.error("Error:",e),[]}}function io(){let e="MAINcontentPages",t=Zn;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function so(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=eo;for(const[r,d]of Object.entries(h)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const i=e.length;for(var o=0;o<=i-1;o++){let r=Xn;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=o,v=e[o].img,p=e[o].top,f=e[o].bottom,E=e[o].days,_=ao(E);for(const[m,y]of Object.entries(h)){const w=new RegExp(`\\{${m}\\}`,"g");r=r.replace(w,y)}for(let m=0;m<d.length;m++){const y=d[m].toString(),w=new RegExp(`\\{${y}\\}`,"g");let b="";y==="MOG_image"?b=`${T}/${v}/4/`:y==="MOG_text1"?b=p:y==="MOG_text2"?b=f:y==="MOG_checkedDate"?b=_:y==="MOGI_placeholder_itemID"&&(b=l),r=r.replace(w,b)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){Be(r,e)});let c;s.addEventListener("touchstart",function(r){r.timeStamp,c=setTimeout(function(){a(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(c)});function a(r,d){navigator.vibrate(1e3);const v=r.target.id.split("-")[1],p=d[v].project_id;console.log(p),Pe(r)}}async function co(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Be(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await co(o);Te(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1];t[i].project_id,Pe(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;O(`/projects/${o}`)}else n.id==="MOGaddNewItem"&&ro()}function Pe(e){e.stopPropagation(),e.target,P([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function ao(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function ro(){O("/new-project/")}const lo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function uo(){setTimeout(()=>{let e="MAINcontentPages",t=lo;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",mo)},1)}async function mo(e){console.log("the signup event was caught"),e.preventDefault(),po();const t=document.getElementById("SETTINGSsignupForm"),n={},i=o=>new Promise((s,c)=>{const a=new FileReader;if(o.size>5*1024*1024){c("Image size exceeds 5 MB limit");return}a.onloadend=()=>s(a.result.split(",")[1]),a.readAsDataURL(o)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const o=await fetch(`${C}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const s=await o.json();n.token=s.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const d=await i(r);n[a.name]=d}}else n[a.name]=a.value;const c=await fetch(`${C}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(c.ok){const a=await c.json();Y(),go(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await c.json();alert("There was an error, try again")}}else{const s=await o.json();Y(),ce(),alert("There was an error with the email, check that the details are correct.")}}catch{Y(),ce(),alert("There was an error, try again")}}function po(){const e=document.getElementById("spinner");e.style.display="block"}function Y(){const e=document.getElementById("spinner");e.style.display="none"}function go(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function ce(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const vo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let A=!1,ae=!1,re=!1;async function fo(){await yo()?Me():re||(Eo(),re=!0)}function Eo(){To();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${C}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),de(),uo()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),A)return!1;A=!0;const c=i.value,a=o.value;try{await _o(c,a)?(ae=!0,Io(),Me(),setTimeout(de,2e3)):(ae=!1,ho(),console.log("Login failed. Retry!")),A=!1}catch(r){console.error("Error:",r),A=!1}return!1})}async function _o(e,t){try{const i=await(await fetch(`${C}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(i.authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.authenticated}catch(n){return console.error("Error:",n),!1}}async function yo(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${C}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function To(){let e="MAINcontentPages",t=vo;document.getElementById(e).innerHTML+=t}let le=!1;function de(){if(le===!0)return;document.getElementById("SETTINGSmodalID").remove(),le=!0}function Io(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function ho(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const C="https://om2apis.la0.uk",T="https://om2media.la0.uk";async function Me(){On(),Tt(),It(),In(),Gn(),Fn(),qn(),Qn(),un();function e(){const o=window.location.pathname;O(o)}window.addEventListener("popstate",e);const t=await St("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const o=n.current_path;O(o),Pn(n)}else e();function i(){const o=window.location.pathname,s=u,c=g,a=xn();a.current_path=o,a.current_queue=s,a.current_index=c,Ot("last_state",a)}setInterval(i,2e4)}function Co(){At(),to()}function bo(e){no(),Nt()}const ue={"/":Co,"/new-project/":Dt,"/projects/:projectID":bo};function wo(){console.log("notFoundHandler")}function O(e){const t=Object.keys(ue);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=ue[n],c=o.slice(1);s(...c),e!=="/new-project/"&&history.pushState({},"",e);return}}wo()}document.getElementById("app").innerHTML=Oe;fo();
