(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Ee=`<!-- audio tag -->
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
</main>`,ye=`<div class="topleft-searchbarContainer">
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
</div>`,Te=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,_e=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Ie="/assets/volume_null-e39cf06f.svg",he="/assets/recently_added-a0a983c6.svg",we="/assets/volume_3-c8ab0a75.svg",Ce="/assets/orange_music_text_logo_black-12e7386c.svg",be="/assets/volume_2-cfdac9da.svg",Le="/assets/browse_2-85030bba.svg",Pe="/assets/volume_1-27e93416.svg",Oe="/assets/orange_music_logo_white-2a680ea2.svg",Me="/assets/search_icon-4f5e4381.svg",Be="/assets/orange_music_text_logo_black-91f9e706.png",Se="/assets/up_next_queue_button-14fedba2.svg",Re="/assets/orange_music_logo_yellow-a109ff64.svg",xe="/assets/playlist-c6e9024f.svg",je="/assets/loop_button-aef56865.svg",Ne="/assets/help_icon-867fec9d.svg",De="/assets/play_button-b1e2d3a4.svg",Ae="/assets/browse-14744f27.svg",X="/assets/menu_options_button-a1d7bbe3.svg",ke="/assets/orange_music_text_logo_white-7f0ba909.svg",Ge="/assets/back_button-8128cade.svg",Je="/assets/Albums-2e81dc74.svg",Ue="/assets/songs-016b7188.svg",He="/assets/orange_music_logo_black-4d7e4591.svg",$e="/assets/your_uploaded_songs-06535705.svg",Ye="/assets/artist-ab677d43.svg",qe="/assets/shuffle_button-c2f06bc4.svg",ze="/assets/orange_music_text_logo_white-4907051e.png",Fe="/assets/listen_now-c7438154.svg",Qe="/assets/derpy-21c20ae5.svg",Ve="/assets/next_button-9a850710.svg",We="/assets/recently_added-7ff28139.svg",Ke="/assets/play_button-5eeedbe6.svg",Ze="/assets/browse-e8be8609.svg",Xe="/assets/albums-681507b8.svg",et="/assets/listen_now.2-bfa293ac.svg",tt="/assets/your_uploads-02e5c93c.svg",nt="/assets/play_button.2-fc90fac7.svg",ot="/assets/listen_now-fb02ffce.svg",it="/assets/browse.2-15b501dd.svg",st="/assets/place_holder_image-d4006a96.svg",at="/assets/icons_MOGitems_add-19e679f7.svg",I={icons_volumeNull:Ie,icons_recentlyAdded:he,icons_volume3:we,icons_orangeMusicTextLogoBlack:Ce,icons_volume2:be,icons_browse2:Le,icons_volume1:Pe,icons_orangeMusicLogoWhite:Oe,icons_searchIcon:Me,icons_orangeMusicTextLogoBlackPng:Be,icons_queueButton:Se,icons_orangeMusicLogoYellow:Re,icons_playlist:xe,icons_loopButton:je,icons_helpIcon:Ne,icons_playButton:De,icons_browse:Ae,icons_menuOptionsButton:X,icons_orangeMusicTextLogoWhite:ke,icons_backButton:Ge,icons_Albums:Je,icons_songs:Ue,icons_orangeMusicLogoBlack:He,icons_yourUploadedSongs:$e,icons_artist:Ye,icons_shuffleButton:qe,icons_orangeMusicTextLogoWhitePng:ze,icons_listenNow:Fe,icons_derpy:Qe,icons_nextButton:Ve,icons_recentlyAddedV2:We,icons_playButtonV2:Ke,icons_browseV2:Ze,icons_albumsV2:Xe,icons_listenNow2V2:et,icons_yourUploads:tt,icons_playButton2:nt,icons_listenNowV2:ot,icons_browse2V2:it,v3_placeholder:st,icons_MOGitems_add:at};function ct(){let e="topleftContentArea",t=ye;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function rt(){let e="toprightContentArea",t=Te;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function lt(){let e="MAINcontentContainer",t=_e;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const dt=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,ut='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',mt=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;async function pt(e,t){const n=new XMLHttpRequest,i=new FormData,o=localStorage.getItem("JWT");i.append("file",e),i.append("project_id",t),i.append("jwt",o),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){qt()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${h}/files/upload/photo/`,!0),n.send(i)}async function gt(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await pt(n,t)}async function ee(e,t,n){try{const i=localStorage.getItem("JWT");if(!i){console.log("no jwt");return}const o={"access-token":i,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(i){console.error("Error:",i)}}async function vt(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const i={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${h}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function ft(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${h}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}const Et=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,yt=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Tt=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function _t(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;P(s)}catch(e){console.error("Error:",e)}}async function N(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function It(e){setTimeout(async()=>{const i=window.location.pathname.replace(/^\/projects\//,""),o=await N(i);o.project_id=i,t(o),Ct(o)},1);function t(n){bt(n);const i=n.description;sessionStorage.setItem("description",i),Lt(),Pt(),Mt(),Bt(n),St(n),jt(n),Dt(n),Gt(),ie(n.project_name),Jt(n.project_id)}}function ht(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function wt(){te();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=(await N(t)).picture_url,s=`${T}/${o}/5/`;n.src=s}function Ct(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const i=t.innerText;ie(i),ee(e.project_id,"project_name",i)})}function bt(e){let t="MAINcontentPages",n=Et;for(const[o,s]of Object.entries(I)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${T}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Lt(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){k()})}}const t=e();window.addEventListener("resize",t),k()}function k(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const i=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),a=[];i.textContent="";for(const y of s){const _=document.createElement("span");_.textContent=y+" ",i.appendChild(_);const f=_.getBoundingClientRect(),E=i.getBoundingClientRect();if(f.bottom<=E.bottom&&f.top>=E.top&&f.left>=E.left&&f.right<=E.right)a.unshift(y);else break}const r=a.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),p=d.split("");let g=l;for(let y=0;y<p.length;y++){const _=p[y],f=`<span class="PROJECTopacity${9-y}">${_}</span>`;g=g+f}i.innerHTML=g}function Pt(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");function s(){n.style.display="grid",o.matches&&(i.style.zIndex="40")}e.addEventListener("click",function(){s()}),t.addEventListener("dblclick",function(){s()});let a=0;t.addEventListener("touchend",function(c){const r=new Date().getTime();r-a<300&&(c.stopPropagation(),s()),a=r})}function Ot(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Mt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Bt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){Y(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(i){i.target===n&&Y(e)})}function Y(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),ee(e.project_id,"description",n);const i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");i.style.display="none",Ot(),k();const o=document.querySelector("main");o.style.zIndex="1"}async function St(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await N(e.project_id);t.addEventListener("click",function(){ce(a)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),i.addEventListener("click",function(){q(event)}),o.addEventListener("click",function(){q(event)}),s.addEventListener("click",()=>{P("/")})}function q(e,t){e.stopPropagation(),e.target;const i=window.location.pathname.replace(/^\/projects\//,"");O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:i},colour:"hsl(180, 100%, 80%)"}],e)}function Rt(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),xt(e),G(),P("/")):G()}async function xt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},o=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(o)}catch(t){console.error("Error:",t)}}function jt(e){document.getElementById("PROJECTview_projectAreaContainer"),Nt();const t=document.getElementById("PROJECTview-projectTable"),n=e,i=n.project_json;if(i!=="{}"){const o=JSON.parse(i).songs_json,s=[];for(const a of o)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];oe(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");ne(a),console.log(`Button in row ${d} clicked.`)}}})}}async function te(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await N(n);i.project_id=n;const o=i,s=o.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:o.picture_url,songTitle:l.song_name,artistName:o.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const p=c[l];oe(p)}e.addEventListener("click",function(l){const p=l.target;if(l.stopPropagation(),p.tagName==="BUTTON"){const g=p.closest(".PROJECTview-projectTable-rowContainer");if(g){const y=g.getAttribute("data-row-id");ne(l),console.log(`Button in row ${y} clicked.`)}}})}function ne(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Nt(){let e="PROJECTview_projectAreaContainer",t=yt;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function oe(e){let t="PROJECTview-projectTable",n=Tt;for(const[o,s]of Object.entries(I)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${T}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Dt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",i=>{i.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",i=>{i.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("dragover");const o=i.dataTransfer.files;n(o,e)}),t.addEventListener("click",()=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{const o=i.files;n(o,e)}),i.click()});function n(i,o){for(const s of i);kt(i,o)}}async function At(e,t,n,i){const o=new FormData;o.append("file",e),o.append("project_id",i.project_id);const s=localStorage.getItem("JWT");o.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,te(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${h}/files/upload/audio/`,!0),a.send(o)}async function kt(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div");o.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o),await At(i,o,s,t)}}function ie(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Gt(){const e=new IntersectionObserver(s,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.observe(t);function s(a,c){a.forEach(r=>{o.matches&&console.log("media query matches"),r.isIntersecting&&o.matches?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):r.isIntersecting&&!o.matches||!r.isIntersecting&&!o.matches?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!r.isIntersecting&&o.matches&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",i.style.visibility="visible")})}}function Jt(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){Ut(o,s)}}function Ut(e,t){e.stopPropagation(),e.target,O({project_id:t},e,"update_project_image")}const Ht=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`;function O(e,t,n){n===void 0&&$t(e,t),n!==void 0&&n==="update_project_image"&&Yt(e,t)}function $t(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=ut,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",se);let d=n+"px",l=i+"px";r.style.left=d,r.style.top=l;for(let f=0;f<e.length;f++)Ft(e[f]);const p=r.offsetWidth,g=r.offsetHeight,y=zt("MENUmodalBody");y.xOverflow==!0&&(d=n-p+"px",r.style.left=d),y.yOverflow==!0&&(l=i-g+"px",r.style.top=l);const _=r.getElementsByClassName("MENUmodalItemContainer");for(let f=0;f<_.length;f++){const E=_[f];E.setAttribute("data-menu-item-id",f),E.addEventListener("click",function(m){m.stopPropagation();const w=m.target.getAttribute("data-menu-item-id"),M=e[w].function,fe=e[w].optionalParams;if(M=="TEST")console.log("the button worked");else if(M!="None"){Qt[M](fe);return}else return})}}function Yt(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=mt,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",se);let d=n+"px",l=i+"px";r.style.left=d,r.style.top=l;const p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),g=document.getElementById("MENUmodalBody_image_select_file_select_button"),y=document.getElementById("MENUmodalBody_image_select_preview_area"),_=document.getElementById("MENUmodalBody_image_select_submit_button"),f=document.getElementById("MENUmodalBody_image_select_submit_button_container");function E(m,b){if(m){const w=URL.createObjectURL(m),M=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");y.src=w,_.style.visibility="visible",f.style.outline="1px solid red",_.addEventListener("click",()=>{gt(m,b.project_id),M.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",m=>{m.preventDefault()}),p.addEventListener("drop",m=>{m.preventDefault();const b=m.dataTransfer.files;E(b[0],e)}),g.addEventListener("click",()=>{const m=document.createElement("input");m.type="file",m.accept="image/*",m.addEventListener("change",b=>{const w=b.target.files[0];E(w,e)}),m.click()})}function qt(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G(),wt()}function zt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=o+s,d=c+a;let l=!1,p=!1;return r>n&&(l=!0),d>i&&(p=!0),{xOverflow:l,yOverflow:p}}function Ft(e){const t=e.displayText,n=e.optionalSVG;let i;"colour"in e?i=e.colour:i="white";const o=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=Ht.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(I)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function se(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function G(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10")}const Qt={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Rt(e)}};let L="hidden";function Vt(){lt();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");J(L),e.addEventListener("click",Wt),t.addEventListener("click",Kt),S()}function Wt(){if(L==="hidden"){L="visible",J(L);return}if(L==="visible"){L="hidden",J(L);return}}function J(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function S(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],i=on(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){const d=c.target.dataset.songId;z(d)}),o.dataset.songId=n.id,o.addEventListener("click",z),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",tn),s.dataset.songID=n.id;const a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&nn(c)}),o.addEventListener("dragstart",Zt),o.addEventListener("dragover",Xt),o.addEventListener("drop",en),e.appendChild(o)}}function Kt(){songs=[],S()}function Zt(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Xt(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function en(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=u.find(c=>c.id===parseInt(t)),o=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(i),a=u.indexOf(o);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,i),S())}function tn(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=u.findIndex(o=>o.id===n);i!==-1&&u.splice(i,1),S()}function nn(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];O(i,e)}function z(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function on(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=dt;for(let d=0;d<t.length;d++){const l=t[d].toString(),p=new RegExp(`\\{${l}\\}`,"g");let g="";l==="QUEUE_item_image"?g=`${T}/${n}/3/`:l==="QUEUE_item_title"?g=i:l==="QUEUE_item_artist"?g=o:l==="icons_menuOptionsButton"?g=X:l==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(p,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),c.innerHTML}const sn=`<div class="LCDbody">
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
</div>`;function an(){cn(),U(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){rn(t)}),ln()}function cn(){let e="LCDbody",t=sn;for(const[i,o]of Object.entries(I)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function U(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let r,d,l;e=n.clientWidth,d=s(),l=e/i,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function rn(e){e.stopPropagation(),e.target,O([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function ln(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",dn)})}function dn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),En(n)}function ae(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],v=0;document.getElementById("audio");document.getElementById("PLAYERsource");let C="off",un="off";function x(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function ce(e){u=[],v=0;const t=e.project_contributors,n=e.project_name,i=e.picture_url,o=JSON.parse(e.project_json).songs_json;for(const s of o){const a=s.song_name,c=s.duration,r=s.url;u.push({img:i,song_name:a,url:r,duration:c,project_name:n,project_contributors:t})}B()}function mn(e){const t=e.current_queue,n=e.current_index;e.PLAYBACK_loop_state,e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,ue(),u.length>0&&_n(i)}function H(){console.log("play clicked"),pn()}function pn(){const e=document.getElementById("audio");e.paused?(j("playing"),e.play().then(t=>re()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(j("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){H()});navigator.mediaSession.setActionHandler("pause",function(){H()});function gn(){le()}function vn(){de()}function fn(){document.getElementById("audio").addEventListener("ended",hn)}function En(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function yn(){ue()}function Tn(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:C,PLAYBACK_shuffle_state:un,progress:t}}function B(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),o=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${T}/${u[v].url}/3/`,e.load(),e.play().then(d=>re()).catch(d=>console.log(d)),n.innerHTML=u[v].song_name,i.innerHTML=u[v].song_name,o.innerHTML=u[v].project_contributors,U(),S(),j("playing"),c.src=`${T}/${u[v].img}/3/`,r.src=`${T}/${u[v].img}/3/`,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,p=Math.floor(d)-l,g=`"-${x(p)}"`,_=`"${x(Math.floor(l))}"`,f=l/d*100,E=`${f}%`;ae(_,g),s.style.setProperty("--LCD-seekbar-width",E),s.style.setProperty("--LCD-seekbar-indicator-left",E),a.value=f,$()})}function _n(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),i=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),a=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${T}/${u[v].url}/3/`,t.load(),t.currentTime=e,i.innerHTML=u[v].song_name,o.innerHTML=u[v].song_name,s.innerHTML=u[v].project_contributors,U(),S(),j("paused"),r.src=`${T}/${u[v].img}/3/`,d.src=`${T}/${u[v].img}/3/`,t.addEventListener("timeupdate",()=>{const l=t.duration,p=t.currentTime,g=Math.floor(l)-p,y=`"-${x(g)}"`,f=`"${x(Math.floor(p))}"`,E=p/l*100,m=`${E}%`;ae(f,y),a.style.setProperty("--LCD-seekbar-width",m),a.style.setProperty("--LCD-seekbar-indicator-left",m),c.value=E,$()})}function re(){let e=u[v];const t=[{src:`${T}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),$()}function $(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function In(){console.log("PLAYBACK_stop_playback, clear top")}function hn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(C=="off"||C=="on")?(v+=1,B()):C=="song"?B():t==v+1&&C=="on"?(v=0,B()):In()}function le(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.paused||e.pause(),v+=1,B())}navigator.mediaSession.setActionHandler("nexttrack",function(){le()});function de(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,v>0&&(e.pause(),v-=1,B())}navigator.mediaSession.setActionHandler("previoustrack",function(){de()});function ue(){C=="off"?(C="on",D(C)):C=="on"?(C="song",D(C)):(C="off",D(C))}function wn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Cn),t.addEventListener("click",bn),n.addEventListener("click",Ln),i.addEventListener("click",Pn),o.addEventListener("click",On)}function Cn(){console.log("shuffleClicked")}function bn(){vn()}function Ln(){H()}function Pn(){gn()}function On(){yn()}function D(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=I.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=I.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=I.icons_derpy;return}}function j(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=I.icons_derpy;return}if(e=="paused"){t.src=I.icons_playButtonV2;return}}function Mn(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){me(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Bn)})}function Bn(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;me(n)}function me(e){function t(o,s,a){return o>=s&&o<=a}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=o&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Sn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function Rn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await xn(),n=`${T}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",jn)}catch(t){console.error("Error initializing account image:",t)}}async function xn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${h}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function jn(e){e.stopPropagation(),Nn(e)}function Nn(e){O([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Dn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,An=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,kn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function Gn(){try{const e=document.getElementById("MAINcontentPages");Hn();const t=await Un();$n(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Jn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",pe),e.innerHTML=""}async function Un(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},o=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",o),[])}catch(e){return console.error("Error:",e),[]}}function Hn(){let e="MAINcontentPages",t=Dn;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function $n(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=kn;for(const[r,d]of Object.entries(I)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const i=e.length;for(var o=0;o<=i-1;o++){let r=An;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=o,p=e[o].img,g=e[o].top,y=e[o].bottom,_=e[o].days,f=qn(_);for(const[E,m]of Object.entries(I)){const b=new RegExp(`\\{${E}\\}`,"g");r=r.replace(b,m)}for(let E=0;E<d.length;E++){const m=d[E].toString(),b=new RegExp(`\\{${m}\\}`,"g");let w="";m==="MOG_image"?w=`${T}/${p}/4/`:m==="MOG_text1"?w=g:m==="MOG_text2"?w=y:m==="MOG_checkedDate"?w=f:m==="MOGI_placeholder_itemID"&&(w=l),r=r.replace(b,w)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){pe(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,d){navigator.vibrate(1e3);const p=r.target.id.split("-")[1],g=d[p].project_id;console.log(g),ge(r)}}async function Yn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function pe(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await Yn(o);ce(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1];t[i].project_id,ge(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;P(`/projects/${o}`)}else n.id==="MOGaddNewItem"&&zn()}function ge(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function qn(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function zn(){P("/new-project/")}const Fn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Qn(){setTimeout(()=>{let e="MAINcontentPages",t=Fn;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Vn)},1)}async function Vn(e){console.log("the signup event was caught"),e.preventDefault(),Wn();const t=document.getElementById("SETTINGSsignupForm"),n={},i=o=>new Promise((s,a)=>{const c=new FileReader;if(o.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(o)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const o=await fetch(`${h}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const s=await o.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const d=await i(r);n[c.name]=d}}else n[c.name]=c.value;const a=await fetch(`${h}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();A(),Kn(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await o.json();A(),F(),alert("There was an error with the email, check that the details are correct.")}}catch{A(),F(),alert("There was an error, try again")}}function Wn(){const e=document.getElementById("spinner");e.style.display="block"}function A(){const e=document.getElementById("spinner");e.style.display="none"}function Kn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function F(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Zn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let R=!1,Q=!1,V=!1;async function Xn(){await no()?ve():V||(eo(),V=!0)}function eo(){oo();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${h}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),K(),Qn()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),R)return!1;R=!0;const a=i.value,c=o.value;try{await to(a,c)?(Q=!0,io(),ve(),setTimeout(K,2e3)):(Q=!1,so(),console.log("Login failed. Retry!")),R=!1}catch(r){console.error("Error:",r),R=!1}return!1})}async function to(e,t){try{const i=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(i.authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.authenticated}catch(n){return console.error("Error:",n),!1}}async function no(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function oo(){let e="MAINcontentPages",t=Zn;document.getElementById(e).innerHTML+=t}let W=!1;function K(){if(W===!0)return;document.getElementById("SETTINGSmodalID").remove(),W=!0}function io(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function so(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="https://om2apis.la0.uk",T="https://om2media.la0.uk";async function ve(){fn(),ct(),rt(),an(),wn(),Sn(),Mn(),Rn(),Vt();function e(){const o=window.location.pathname;P(o)}window.addEventListener("popstate",e);const t=await ft("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const o=n.current_path;P(o),mn(n)}else e();function i(){const o=window.location.pathname,s=u,a=v,c=Tn();c.current_path=o,c.current_queue=s,c.current_index=a,vt("last_state",c)}setInterval(i,2e4)}function ao(){ht(),Gn()}function co(e){Jn(),It()}const Z={"/":ao,"/new-project/":_t,"/projects/:projectID":co};function ro(){console.log("notFoundHandler")}function P(e){const t=Object.keys(Z);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=Z[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}ro()}document.getElementById("app").innerHTML=Ee;Xn();
