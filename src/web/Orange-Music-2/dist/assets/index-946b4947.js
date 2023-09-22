(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const $e=`<!-- audio tag -->
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
    <div class="topHalf">
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
</main>
<!-- svg masks -->
<div style="display: none;">
    <img src="{icons_shuffleButton}" alt="shuffle icon" id="SVG_mask_shuffle" />
</div>`,ze=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Qe=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,Fe=`<div class="QUEUE-environment" id="QUEUEenvironment">
    <div class="QUEUE-container-pointer"></div>
    <div class="QUEUE-container">
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
</div>`,Ve="/assets/volume_null-e39cf06f.svg",Ke="/assets/recently_added-a0a983c6.svg",We="/assets/volume_3-c8ab0a75.svg",Ze="/assets/orange_music_text_logo_black-12e7386c.svg",Xe="/assets/volume_2-cfdac9da.svg",et="/assets/browse_2-85030bba.svg",tt="/assets/volume_1-27e93416.svg",nt="/assets/orange_music_logo_white-2a680ea2.svg",ot="/assets/search_icon-4f5e4381.svg",it="/assets/orange_music_text_logo_black-91f9e706.png",st="/assets/up_next_queue_button-14fedba2.svg",at="/assets/orange_music_logo_yellow-a109ff64.svg",ct="/assets/playlist-c6e9024f.svg",rt="/assets/loop_button-aef56865.svg",lt="/assets/help_icon-867fec9d.svg",dt="/assets/play_button-b1e2d3a4.svg",ut="/assets/browse-14744f27.svg",Ie="/assets/menu_options_button-a1d7bbe3.svg",mt="/assets/orange_music_text_logo_white-7f0ba909.svg",pt="/assets/back_button-8128cade.svg",gt="/assets/Albums-2e81dc74.svg",_t="/assets/songs-016b7188.svg",vt="/assets/orange_music_logo_black-4d7e4591.svg",ft="/assets/your_uploaded_songs-06535705.svg",Et="/assets/artist-ab677d43.svg",yt="/assets/shuffle_button-c2f06bc4.svg",Tt="/assets/orange_music_text_logo_white-4907051e.png",ht="/assets/listen_now-c7438154.svg",bt="/assets/derpy-21c20ae5.svg",It="/assets/next_button-9a850710.svg",Ct="/assets/recently_added-7ff28139.svg",wt="/assets/play_button-5eeedbe6.svg",Lt="/assets/browse-e8be8609.svg",Pt="/assets/albums-681507b8.svg",Bt="/assets/listen_now.2-bfa293ac.svg",Ot="/assets/your_uploads-02e5c93c.svg",Mt="/assets/play_button.2-fc90fac7.svg",St="/assets/listen_now-fb02ffce.svg",Dt="/assets/browse.2-15b501dd.svg",Rt="/assets/place_holder_image-d4006a96.svg",xt="/assets/icons_MOGitems_add-19e679f7.svg",jt="/assets/back-9279721d.svg",Nt="/assets/forwards-605bd405.svg",At="/assets/icons_close-57e87944.svg",y={icons_volumeNull:Ve,icons_recentlyAdded:Ke,icons_volume3:We,icons_orangeMusicTextLogoBlack:Ze,icons_volume2:Xe,icons_browse2:et,icons_volume1:tt,icons_orangeMusicLogoWhite:nt,icons_searchIcon:ot,icons_orangeMusicTextLogoBlackPng:it,icons_queueButton:st,icons_orangeMusicLogoYellow:at,icons_playlist:ct,icons_loopButton:rt,icons_helpIcon:lt,icons_playButton:dt,icons_browse:ut,icons_menuOptionsButton:Ie,icons_orangeMusicTextLogoWhite:mt,icons_backButton:pt,icons_Albums:gt,icons_songs:_t,icons_orangeMusicLogoBlack:vt,icons_yourUploadedSongs:ft,icons_artist:Et,icons_shuffleButton:yt,icons_orangeMusicTextLogoWhitePng:Tt,icons_listenNow:ht,icons_derpy:bt,icons_nextButton:It,icons_recentlyAddedV2:Ct,icons_playButtonV2:wt,icons_browseV2:Lt,icons_albumsV2:Pt,icons_listenNow2V2:Bt,icons_yourUploads:Ot,icons_playButton2:Mt,icons_listenNowV2:St,icons_browse2V2:Dt,v3_placeholder:Rt,icons_MOGitems_add:xt,icons_back:jt,icons_forwards:Nt,icons_close:At};function kt(){let e="topleftContentArea",t=ze;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Jt(){let e="toprightContentArea",t=Qe;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Gt(){let e="MAINcontentContainer",t=Fe;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Ut=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,qt='<div class="MENUmodalBody" id="MENUmodalBody"></div>',Ht=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;function O(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Yt(){return!!window.matchMedia("prefers-color-scheme: dark").matches}const $t=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`,zt=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
    <div class="LCD_mobile_body_container_l2">
        <div class="LCD_mobile_body_img">
            <img src="" id="LCD_mobile_body_img">
        </div>
        <div class="LCD_mobile_body_title_area_container">
            <div class="LCD_mobile_body_song_title" id="LCD_mobile_body_song_title"></div>
            <div class="LCD_mobile_body_artist_title" id="LCD_mobile_body_artist_title"></div>
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
        <div class="LCD_mobile_body_queue_container">
            <div class="LCD_mobile_queue_top_container">
                <div class="LCD_mobile_body_queue_playing_next">Playing Next</div>
                <div class="LCD_mobile_body_queue_from">From Leo </div>
                <div class="LCD_mobile_body_queue_button_container">
                    <button>
                        <img src="{icons_shuffleButton}" height="16" width="16">
                    </button>
                    <button>
                        <img src="{icons_loopButton}" height="16" width="16">
                    </button>
                </div>
            </div>
            <div class="LCD_mobile_queue_content_container" id="LCD_mobile_queue_content_container">
            </div>
        </div>
        <div class="LCD_mobile_body_secondary_seek_indicator">
            <div class="LCD_mobile_body_progress_bar_secondary">
                <input type="range" id="LCDMB_seek_input_secondary" min="0" max="100" value="0">
                <span id="LCDMB_seek_indicator_secondary"></span>
            </div>
        </div>
    </div>
</div>`,Qt=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`;async function Ft(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){Hn()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${b}/files/upload/photo/`,!0),n.send(o)}async function Vt(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await Ft(n,t)}async function Ce(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${b}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function Kt(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${b}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Wt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${b}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function Zt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${b}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}const Xt=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,en=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
    </div>
    <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play">
        <div>
            <img src="{icons_playButtonV2}">
        </div>
    </div>
    <div id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu">
        <div>
            <img src="{icons_menuOptionsButton}">
        </div>
    </div>
    <div class="MOG-itemTextContainer">
        <div class="MOG-itemTextTop">{MOG_text1}</div>
        <div class="MOG-itemTextBottom">{MOG_text2}</div>
    </div>
    <div class="MOG-itemCheckedDate">
        <div>
            {MOG_checkedDate}
        </div>
    </div>
</button>`,tn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`;async function nn(){try{const e=document.getElementById("MAINcontentPages");an();const t=await sn();cn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function on(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",we),e.innerHTML=""}async function sn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${b}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function an(){let e="MAINcontentPages",t=Xt;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function cn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=tn;for(const[r,d]of Object.entries(y)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=en;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,_=e[i].img,p=e[i].top,I=e[i].bottom,B=e[i].days,w=ln(B);for(const[g,f]of Object.entries(y)){const v=new RegExp(`\\{${g}\\}`,"g");r=r.replace(v,f)}for(let g=0;g<d.length;g++){const f=d[g].toString(),v=new RegExp(`\\{${f}\\}`,"g");let C="";f==="MOG_image"?C=`${E}/${_}/4/`:f==="MOG_text1"?C=p:f==="MOG_text2"?C=I:f==="MOG_checkedDate"?C=w:f==="MOGI_placeholder_itemID"&&(C=l),r=r.replace(v,C)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){we(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,d){navigator.vibrate(1e3);const _=r.target.id.split("-")[1],p=d[_].project_id;console.log(p),Le(r,p)}}async function rn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${b}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function we(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await rn(i);Re(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Le(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;j(`/projects/${i}`)}n.id==="MOGaddNewItem"&&dn()}function Le(e,t){e.stopPropagation(),S([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function ln(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function dn(){j("/new-project/")}async function un(){function e(){const c=window.location.pathname;j(c)}window.addEventListener("popstate",e);const t=await Wt("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const c=window.location.pathname;j(c),mo(n)}else e();let o="";const i=new Map;function s(c){return JSON.stringify(c)}function a(){const c=window.location.pathname,r=u,d=m,l=Eo();l.current_path=c,l.current_queue=r,l.current_index=d;const _=s(l);_!==o&&(Kt("last_state",l),o=_,i.set("playback_states",_))}setInterval(a,1e4)}function mn(){Tn(),nn()}function pn(e){on(),yn()}const _e={"/":mn,"/new-project/":En,"/projects/:projectID":pn};function gn(){console.log("notFoundHandler")}function j(e){const t=Object.keys(_e);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=_e[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}gn()}const _n=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader" id="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_back}" height="16" width="16">
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
                <h3 contenteditable="true" id="PROJECTviewDisplayTitleH3">{PROJECTviewMOREartist}</h3>
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
                <img src="{icons_close}" width="20" height="20">
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
</div>`,vn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,fn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function En(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${b}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;j(s)}catch(e){console.error("Error:",e)}}async function ee(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${b}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function yn(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await ee(o);i.project_id=o,t(i),bn(i)},1);function t(n){In(n);const o=n.description;sessionStorage.setItem("description",o),Cn(),wn(),Pn(),Bn(n),On(n),Dn(n),xn(n),An(),Me(n.project_name),kn(n.project_id)}}function Tn(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function hn(){Pe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await ee(t)).picture_url,s=`${E}/${i}/5/`;n.src=s}function bn(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(o){const i=t.innerText;Me(i),Ce(e.project_id,"project_name",i)});const n=document.getElementById("PROJECTviewDisplayTitleH3");n.addEventListener("blur",function(o){const i=n.innerText;console.log("Content changed:",i)})}function In(e){let t="MAINcontentPages",n=_n;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${E}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Cn(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function wn(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",O()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Ln(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Pn(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Bn(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){ve(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&ve(e)})}function ve(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),Ce(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",Ln();const i=document.querySelector("main");i.style.zIndex="1"}async function On(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await ee(e.project_id);t.addEventListener("click",function(){Re(a)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){fe(event)}),i.addEventListener("click",function(){fe(event)}),s.addEventListener("click",()=>{j("/")})}function fe(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");S([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function Mn(e){window.confirm("Are you sure you want to delete this project?")?(Sn(e),U(),j("/")):U()}async function Sn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${b}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function Dn(e){document.getElementById("PROJECTview_projectAreaContainer"),Rn();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,s=[];for(const a of i)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];Oe(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");r&&(r.getAttribute("data-row-id"),Be(a))}})}}async function Pe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await ee(n);o.project_id=n;const i=o,s=i.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const _=c[l];Oe(_)}e.addEventListener("click",function(l){const _=l.target;if(l.stopPropagation(),_.tagName==="BUTTON"){const p=_.closest(".PROJECTview-projectTable-rowContainer");if(p){const I=p.getAttribute("data-row-id");Be(l),console.log(`Button in row ${I} clicked.`)}}})}function Be(e){e.stopPropagation(),e.target,S([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Rn(){let e="PROJECTview_projectAreaContainer",t=vn;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Oe(e){let t="PROJECTview-projectTable",n=fn;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${E}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function xn(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Nn(o,i)}}async function jn(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,Pe(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${b}/files/upload/audio/`,!0),a.send(i)}async function Nn(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i),await jn(o,i,s,t)}}function Me(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function An(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&O()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!O()||!c.isIntersecting&&!O()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&O()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function kn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){Jn(i,s)}}function Jn(e,t){e.stopPropagation(),e.target,S({project_id:t},e,"update_project_image")}function S(e,t,n){n===void 0&&Un(e,t),n!==void 0&&n==="update_project_image"&&qn(e,t),n!==void 0&&n==="lcd_mobile_body"&&Gn()}let M=!1;function Gn(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");O()&&(t.style.zIndex="40",n.style.zIndex="0");const o=document.getElementById("MENUmodalEnvironment");o.style.display="block";let i=zt;for(const[h,L]of Object.entries(y)){const P=new RegExp(`\\{${h}\\}`,"g");i=i.replace(P,L)}o.innerHTML=i;const s=document.getElementById("LCDMB_seek_input"),a=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const c=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),_=document.getElementById("LCDMB_queue_button"),p=document.getElementById("audio"),I=document.getElementById("LCD_mobile_body_song_title"),B=document.getElementById("LCD_mobile_body_artist_title"),w=document.getElementById("LCD_mobile_body_img");function g(){w.src=le,I.innerText=de,B.innerText=ue}p.addEventListener("ended",()=>{g(),M===!0&&R()}),g();function f(){p.paused?d.src=y.icons_playButtonV2:d.src=y.icons_derpy}f();const v=p.duration,D=p.currentTime/v*100;a.style.width=`${D}%`,p.addEventListener("timeupdate",()=>{const h=p.duration,P=p.currentTime/h*100;a.style.width=`${P}%`}),s.addEventListener("input",function(){const h=p.duration,L=s.value;p.currentTime=h*(L/100)}),c.addEventListener("click",()=>{Ne(),g(),M===!0&&R()}),r.addEventListener("click",()=>{te(),g(),f()}),l.addEventListener("click",()=>{je(),g(),M===!0&&R()});const ne=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];_.addEventListener("click",()=>{M===!1?(A(),M=!0):(q(),M=!1)}),M===!0?A():q();function R(){const h=document.getElementById("LCD_mobile_queue_content_container");h.innerHTML="";for(let L=m+1;L<u.length;L++){const P=u[L],z=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],G=P.img,qe=P.song_name,He=P.project_contributors;let oe=Qt;for(let ie=0;ie<z.length;ie++){const Q=z[ie].toString(),Ye=new RegExp(`\\{${Q}\\}`,"g");let F="";Q==="queue_item_img"?F=`${E}/${G}/3/`:Q==="queue_item_song_name"?F=qe:Q==="queue_item_song_artist"&&(F=He),oe=oe.replace(Ye,F)}h.innerHTML+=oe}}function A(){function h(L){L.forEach(P=>{document.querySelectorAll("."+P).forEach(G=>{G.classList.add("queue_visible")})})}h(ne),o.removeEventListener("touchstart",H),o.removeEventListener("touchmove",Y),o.removeEventListener("touchend",$),R()}function q(){function h(L){L.forEach(P=>{document.querySelectorAll("."+P).forEach(G=>{G.classList.remove("queue_visible")})})}h(ne),o.addEventListener("touchstart",H,!1),o.addEventListener("touchmove",Y,!1),o.addEventListener("touchend",$,!1)}o.addEventListener("touchstart",H,!1),o.addEventListener("touchmove",Y,!1),o.addEventListener("touchend",$,!1);let pe=0,ge=0;function H(h){M===!1&&(pe=h.touches[0].clientY)}function Y(h){h.preventDefault()}function $(h){ge=h.changedTouches[0].clientY,ge-pe>70&&(U(),o.removeEventListener("touchstart",H),o.removeEventListener("touchmove",Y),o.removeEventListener("touchend",$))}}let K;function Un(e,t){K=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");O()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=qt,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",Se);let d=o+"px",l=i+"px";if(r.style.left=d,r.style.top=l,K&&n===""){const v=K.getBoundingClientRect();o=v.left+window.scrollX,i=v.top+window.scrollY;let C=o+"px",D=i+"px";r.style.left=C,r.style.top=D}for(let v=0;v<e.length;v++)$n(e[v]);const p=r.children[0];n===""?p.focus():n==="mouse"&&(p.focus(),p.blur());function I(v){(v.key==="Escape"||v.keyCode===27)&&(document.removeEventListener("keydown",I),U())}document.addEventListener("keydown",I);const B=r.offsetWidth,w=r.offsetHeight,g=Yn("MENUmodalBody");g.xOverflow==!0&&(d=o-B+"px",r.style.left=d),g.yOverflow==!0&&(l=i-w+"px",r.style.top=l);const f=r.getElementsByClassName("MENUmodalItemContainer");for(let v=0;v<f.length;v++){const C=f[v];C.setAttribute("data-menu-item-id",v),C.addEventListener("click",function(D){D.stopPropagation();const R=D.target.getAttribute("data-menu-item-id"),A=e[R].function,q=e[R].optionalParams;if(A=="TEST")console.log("the button worked");else if(A!="None"){zn[A](q);return}else return})}}function qn(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");O()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2";const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Ht,a.style.display="block";const c=document.getElementById("MENUmodalBody");a.addEventListener("click",Se);let r=n+"px",d=o+"px";c.style.left=r,c.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),_=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),I=document.getElementById("MENUmodalBody_image_select_submit_button"),B=document.getElementById("MENUmodalBody_image_select_submit_button_container");function w(g,f){if(g){const v=URL.createObjectURL(g),C=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=v,I.style.visibility="visible",B.style.outline="3px solid var(--primary)",I.addEventListener("click",()=>{Vt(g,f.project_id),C.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",g=>{g.preventDefault()}),l.addEventListener("drop",g=>{g.preventDefault();const f=g.dataTransfer.files;w(f[0],e)}),_.addEventListener("click",()=>{const g=document.createElement("input");g.type="file",g.accept="image/*",g.addEventListener("change",f=>{const v=f.target.files[0];w(v,e)}),g.click()})}function Hn(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",U(),hn()}function Yn(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=i+s,d=c+a;let l=!1,_=!1;return r>n&&(l=!0),d>o&&(_=!0),{xOverflow:l,yOverflow:_}}function $n(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:(o="var(--text)",O()&&(o="var(--text)"));const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=$t.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(y)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function Se(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function U(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),K.focus()}const zn={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Mn(e)},PLAYBACK_add_songs_to_queue(e){po(e)}};let x="hidden";function Qn(){Gt();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");ae(x),e.addEventListener("click",Fn),t.addEventListener("click",Vn),N()}function Fn(){if(x==="hidden"){x="visible",ae(x);return}if(x==="visible"){x="hidden",ae(x);return}}function ae(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Yt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function N(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=m+1;t<u.length;t++){u[t].id=t;const n=u[t],o=no(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",to),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",Xn),s.dataset.songID=n.id;const a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&eo(c)}),i.addEventListener("dragstart",Kn),i.addEventListener("dragover",Wn),i.addEventListener("drop",Zn),e.appendChild(i)}}function Vn(){const e=m+1;e>=0&&e<u.length?u.splice(e):u.length=0,N()}function Kn(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Wn(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Zn(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),N())}function Xn(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&u.splice(o,1),N()}function eo(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];S(o,e)}function to(e){}function no(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Ut;for(let d=0;d<t.length;d++){const l=t[d].toString(),_=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${E}/${n}/3/`:l==="QUEUE_item_title"?p=o:l==="QUEUE_item_artist"?p=i:l==="icons_menuOptionsButton"?p=Ie:l==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(_,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),c.innerHTML}const oo=`<div class="LCDbody">
    <div class="LCDcontentContainer">
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
</div>`;function io(){ao(),re(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){co(t)}),ro(),O()&&document.getElementById("LCDbody").addEventListener("click",so)}function so(e){e.stopPropagation(),S({param:"cheese"},e,"lcd_mobile_body")}function ao(){let e="LCDbody",t=oo;for(const[o,i]of Object.entries(y)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function re(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function co(e){e.stopPropagation(),e.target,S([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function ro(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",lo)})}function lo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),vo(n)}function De(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],m=0,le="",de="",ue="";document.getElementById("audio");document.getElementById("PLAYERsource");let T="off",uo="off",W="paused";function Z(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Re(e){u=[],m=0,u=xe(e),u.length>0&&(W="playing",k())}function xe(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,s=JSON.parse(e.project_json).songs_json;try{for(const a of s){const c=a.song_name,r=a.duration,d=a.url;t.push({img:i,song_name:c,url:d,duration:r,project_name:o,project_contributors:n})}}catch{}return t}function mo(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,m=n,Io(o),u.length>0&&yo(i)}async function po(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Zt(t),i=xe(o);if(n==="later")u=u.concat(i);else if(n==="next"){const s=u.slice(0,m+1),a=u.slice(m+1);u=s,u=u.concat(i),u=u.concat(a)}N()}function te(){go()}function go(){const e=document.getElementById("audio");e.paused?(X("playing"),W="playing",e.play().then(t=>Ae()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(W="paused",X("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){te()});navigator.mediaSession.setActionHandler("pause",function(){te()});function je(){ke()}function Ne(){Je()}function _o(){document.getElementById("audio").addEventListener("ended",ho)}function vo(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function fo(){bo()}function Eo(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:T,PLAYBACK_shuffle_state:uo,progress:t}}function k(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${E}/${u[m].url}/3/`,e.load(),W==="playing"&&e.play().then(d=>Ae()).catch(d=>console.log(d)),n.innerHTML=u[m].song_name,o.innerHTML=u[m].song_name,i.innerHTML=u[m].project_contributors,re(),N(),X("playing"),c.src=`${E}/${u[m].img}/3/`,r.src=`${E}/${u[m].img}/3/`,le=`${E}/${u[m].img}/5/`,de=u[m].song_name,ue=u[m].project_contributors,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,_=Math.floor(d)-l,p=`"-${Z(_)}"`,B=`"${Z(Math.floor(l))}"`,w=l/d*100,g=`${w}%`;De(B,p),s.style.setProperty("--LCD-seekbar-width",g),s.style.setProperty("--LCD-seekbar-indicator-left",g),a.value=w,me()})}function yo(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),a=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${E}/${u[m].url}/3/`,t.load(),t.currentTime=e,o.innerHTML=u[m].song_name,i.innerHTML=u[m].song_name,s.innerHTML=u[m].project_contributors,re(),N(),X("paused"),r.src=`${E}/${u[m].img}/3/`,d.src=`${E}/${u[m].img}/3/`,le=`${E}/${u[m].img}/5/`,de=u[m].song_name,ue=u[m].project_contributors,t.addEventListener("timeupdate",()=>{const l=t.duration,_=t.currentTime,p=Math.floor(l)-_,I=`"-${Z(p)}"`,w=`"${Z(Math.floor(_))}"`,g=_/l*100,f=`${g}%`;De(w,I),a.style.setProperty("--LCD-seekbar-width",f),a.style.setProperty("--LCD-seekbar-indicator-left",f),c.value=g,me()})}function Ae(){let e=u[m];const t=[{src:`${E}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${E}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${E}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${E}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${E}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${E}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),me()}function me(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function To(){console.log("PLAYBACK_stop_playback, clear top")}function ho(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>m+1&&(T=="off"||T=="on")?(m+=1,k()):T=="song"?k():t==m+1&&T=="on"?(m=0,k()):To()}function ke(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>m+1&&(e.paused||e.pause(),m+=1,k())}navigator.mediaSession.setActionHandler("nexttrack",function(){ke()});function Je(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,m>0&&(e.pause(),m-=1,k())}navigator.mediaSession.setActionHandler("previoustrack",function(){Je()});function bo(){T=="off"?(T="on",J(T)):T=="on"?(T="song",J(T)):(T="off",J(T))}function Io(e){e=="off"?(T="off",J(T)):e=="on"?(T="on",J(T)):(e="song",T="on",J(T))}function Co(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",wo),t.addEventListener("click",Lo),n.addEventListener("click",Po),o.addEventListener("click",Bo),i.addEventListener("click",Oo)}function wo(){console.log("shuffleClicked")}function Lo(){Ne()}function Po(){te()}function Bo(){je()}function Oo(){fo()}function J(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",n.src=y.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",n.src=y.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",n.src=y.icons_derpy;return}}function X(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=y.icons_derpy;return}if(e=="paused"){t.src=y.icons_playButtonV2;return}}function Mo(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Ge(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",So)})}function So(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Ge(n)}function Ge(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Do(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function Ro(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await xo(),n=`${E}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",jo)}catch(t){console.error("Error initializing account image:",t)}}async function xo(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${b}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function jo(e){e.stopPropagation(),No(e)}function No(e){S([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Ao=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ko(){setTimeout(()=>{let e="MAINcontentPages",t=Ao;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Jo)},1)}async function Jo(e){console.log("the signup event was caught"),e.preventDefault(),Go();const t=document.getElementById("SETTINGSsignupForm"),n={},o=i=>new Promise((s,a)=>{const c=new FileReader;if(i.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(i)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const i=await fetch(`${b}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const s=await i.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const d=await o(r);n[c.name]=d}}else n[c.name]=c.value;const a=await fetch(`${b}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();se(),Uo(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await i.json();se(),Ee(),alert("There was an error with the email, check that the details are correct.")}}catch{se(),Ee(),alert("There was an error, try again")}}function Go(){const e=document.getElementById("spinner");e.style.display="block"}function se(){const e=document.getElementById("spinner");e.style.display="none"}function Uo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Ee(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const qo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let V=!1,ye=!1,Te=!1;async function Ho(){await zo()?Ue():Te||(Yo(),Te=!0)}function Yo(){Qo();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${b}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),be(),ko()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),V)return!1;V=!0;const a=o.value,c=i.value;try{await $o(a,c)?(ye=!0,Fo(),Ue(),setTimeout(be,2e3)):(ye=!1,Vo(),console.log("Login failed. Retry!")),V=!1}catch(r){console.error("Error:",r),V=!1}return!1})}async function $o(e,t){try{const o=await(await fetch(`${b}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function zo(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${b}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function Qo(){let e="MAINcontentPages",t=qo;document.getElementById(e).innerHTML+=t}let he=!1;function be(){if(he===!0)return;document.getElementById("SETTINGSmodalID").remove(),he=!0}function Fo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Vo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const b="MAIN_API_DOMAIN",E="MAIN_MEDIA_DOMAIN";async function Ue(){_o(),kt(),Jt(),io(),Co(),Do(),Mo(),Ro(),Qn(),un()}let ce=$e;for(const[e,t]of Object.entries(y)){const n=new RegExp(`\\{${e}\\}`,"g");ce=ce.replace(n,t)}document.getElementById("app").innerHTML=ce;Ho();
