(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ke=`<!-- audio tag -->
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
</div>`,We=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Ze=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" />
                </div>
            </button>
            <!-- last -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERbackButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_backButton}" alt="back icon" height="13" />
                </div>
            </button>
            <!-- play -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERplayButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_play}" alt="play icon" height="20" id="PLAYERplayIcon" />
                </div>
            </button>
            <!-- next -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERnextButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_nextButton}" alt="next icon" height="13" />
                </div>
            </button>
            <!-- loop -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERloopButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_loop}" alt="loop icon" height="20" id="PLAYERloopIcon" />
                </div>
            </button>
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
                <button class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <div>
                        <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                    </div>
                </button>
            </div>
            <button class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg">
                </div>
            </button>
        </div>
    </div>
</div>`,Xe=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,et="/assets/volume_null-e39cf06f.svg",tt="/assets/recently_added-a0a983c6.svg",nt="/assets/volume_3-c8ab0a75.svg",ot="/assets/orange_music_text_logo_black-12e7386c.svg",it="/assets/volume_2-cfdac9da.svg",st="/assets/browse_2-85030bba.svg",at="/assets/volume_1-27e93416.svg",ct="/assets/orange_music_logo_white-2a680ea2.svg",rt="/assets/search_icon-4f5e4381.svg",lt="/assets/orange_music_text_logo_black-91f9e706.png",dt="/assets/up_next_queue_button-14fedba2.svg",ut="/assets/orange_music_logo_yellow-a109ff64.svg",mt="/assets/playlist-c6e9024f.svg",pt="/assets/loop_button-aef56865.svg",gt="/assets/help_icon-867fec9d.svg",_t="/assets/play_button-b1e2d3a4.svg",ft="/assets/browse-14744f27.svg",Le="/assets/menu_options_button-a1d7bbe3.svg",vt="/assets/orange_music_text_logo_white-7f0ba909.svg",Et="/assets/back_button-8128cade.svg",yt="/assets/Albums-2e81dc74.svg",Tt="/assets/songs-016b7188.svg",bt="/assets/orange_music_logo_black-4d7e4591.svg",It="/assets/your_uploaded_songs-06535705.svg",ht="/assets/artist-ab677d43.svg",Ct="/assets/shuffle_button-c2f06bc4.svg",wt="/assets/orange_music_text_logo_white-4907051e.png",Lt="/assets/listen_now-c7438154.svg",Pt="/assets/derpy-21c20ae5.svg",Bt="/assets/next_button-9a850710.svg",Ot="/assets/recently_added-7ff28139.svg",Mt="/assets/play_button-5eeedbe6.svg",St="/assets/browse-e8be8609.svg",Dt="/assets/albums-681507b8.svg",xt="/assets/listen_now.2-bfa293ac.svg",Rt="/assets/your_uploads-02e5c93c.svg",jt="/assets/play_button.2-fc90fac7.svg",Nt="/assets/listen_now-fb02ffce.svg",At="/assets/browse.2-15b501dd.svg",kt="/assets/place_holder_image-d4006a96.svg",Gt="/assets/icons_MOGitems_add-19e679f7.svg",Jt="/assets/back-9279721d.svg",Ut="/assets/forwards-605bd405.svg",qt="/assets/icons_close-57e87944.svg",Ht="/assets/icons_pause-8012f8cc.svg",Yt="/assets/icons_loop-32d1576c.svg",$t="/assets/icons_loop_song-87f53dc7.svg",Qt="/assets/icons_play-a5074c5b.svg",zt="/assets/icons_settings-793063fb.svg",y={icons_volumeNull:et,icons_recentlyAdded:tt,icons_volume3:nt,icons_orangeMusicTextLogoBlack:ot,icons_volume2:it,icons_browse2:st,icons_volume1:at,icons_orangeMusicLogoWhite:ct,icons_searchIcon:rt,icons_orangeMusicTextLogoBlackPng:lt,icons_queueButton:dt,icons_orangeMusicLogoYellow:ut,icons_playlist:mt,icons_loopButton:pt,icons_helpIcon:gt,icons_playButton:_t,icons_browse:ft,icons_menuOptionsButton:Le,icons_orangeMusicTextLogoWhite:vt,icons_backButton:Et,icons_Albums:yt,icons_songs:Tt,icons_orangeMusicLogoBlack:bt,icons_yourUploadedSongs:It,icons_artist:ht,icons_shuffleButton:Ct,icons_orangeMusicTextLogoWhitePng:wt,icons_listenNow:Lt,icons_derpy:Pt,icons_nextButton:Bt,icons_recentlyAddedV2:Ot,icons_playButtonV2:Mt,icons_browseV2:St,icons_albumsV2:Dt,icons_listenNow2V2:xt,icons_yourUploads:Rt,icons_playButton2:jt,icons_listenNowV2:Nt,icons_browse2V2:At,v3_placeholder:kt,icons_MOGitems_add:Gt,icons_back:Jt,icons_forwards:Ut,icons_close:qt,icons_pause:Ht,icons_loop:Yt,icons_loop_song:$t,icons_play:Qt,icons_settings:zt};function Ft(){let e="topleftContentArea",t=We;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Vt(){let e="toprightContentArea",t=Ze;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Kt(){let e="MAINcontentContainer",t=Xe;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Wt=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,Zt='<div class="MENUmodalBody" id="MENUmodalBody"></div>',Xt=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;function O(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function en(){return!!window.matchMedia("prefers-color-scheme: dark").matches}const tn=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`,nn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,on=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`;async function sn(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){eo()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${h}/files/upload/photo/`,!0),n.send(o)}async function an(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await sn(n,t)}async function ce(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function cn(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${h}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Pe(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${h}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function q(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}const rn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,ln=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
    </div>
    <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play">
        <div>
            <img src="{icons_playButtonV2}">
        </div>
    </div>
    <div role="button" tabindex="0" aria-label="Display Menu" id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu">
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
</button>`,dn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`;async function un(){try{const e=document.getElementById("MAINcontentPages");gn();const t=await pn();_n(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function mn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Be),e.innerHTML=""}async function pn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function gn(){let e="MAINcontentPages",t=rn;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function _n(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=dn;for(const[r,d]of Object.entries(y)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=ln;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,_=e[i].img,p=e[i].top,I=e[i].bottom,B=e[i].days,w=vn(B);for(const[g,v]of Object.entries(y)){const f=new RegExp(`\\{${g}\\}`,"g");r=r.replace(f,v)}for(let g=0;g<d.length;g++){const v=d[g].toString(),f=new RegExp(`\\{${v}\\}`,"g");let C="";v==="MOG_image"?C=`${E}/${_}/4/`:v==="MOG_text1"?C=p:v==="MOG_text2"?C=I:v==="MOG_checkedDate"?C=w:v==="MOGI_placeholder_itemID"&&(C=l),r=r.replace(f,C)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){Be(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,d){navigator.vibrate(1e3);const _=r.target.id.split("-")[1],p=d[_].project_id;console.log(p),Oe(r,p)}}async function fn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Be(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await fn(i);ke(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Oe(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;j(`/projects/${i}`)}n.id==="MOGaddNewItem"&&En()}function Oe(e,t){e.stopPropagation(),S([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function vn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function En(){j("/new-project/")}async function yn(){function e(){const c=window.location.pathname;j(c)}window.addEventListener("popstate",e);const t=await Pe("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const c=window.location.pathname;j(c),ho(n)}else e();let o="";const i=new Map;function s(c){return JSON.stringify(c)}function a(){const c=window.location.pathname,r=u,d=m,l=Oo();l.current_path=c,l.current_queue=r,l.current_index=d;const _=s(l);_!==o&&(cn("last_state",l),o=_,i.set("playback_states",_))}setInterval(a,1e4)}function Tn(){Bn(),un()}function bn(e){mn(),Pn()}const Ee={"/":Tn,"/new-project/":Ln,"/projects/:projectID":bn};function In(){console.log("notFoundHandler")}function j(e){const t=Object.keys(Ee);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ee[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}In()}const hn=`<div class="PROJECTviewContainerEnvironment">
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
<div class="PROJECTview-filesAreaContainer"></div>    </div>
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
</div>`,Cn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,wn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function Ln(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;j(s)}catch(e){console.error("Error:",e)}}async function Pn(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await q(o);i.project_id=o,t(i),Mn(i)},1);function t(n){Sn(n);const o=n.description;sessionStorage.setItem("description",o),Dn(),xn(),jn(),Nn(n),An(n),Jn(n),qn(n),Yn(),je(n.project_name),$n(n.project_id)}}function Bn(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function On(){Me();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await q(t)).picture_url,s=`${E}/${i}/5/`;n.src=s}function Mn(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(o){const i=t.innerText;je(i),ce(e.project_id,"project_name",i)});const n=document.getElementById("PROJECTviewDisplayTitleH3");n.addEventListener("blur",function(o){const i=n.innerText;ce(e.project_id,"project_contributors",i)})}function Sn(e){let t="MAINcontentPages",n=hn;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${E}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Dn(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function xn(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",O()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Rn(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function jn(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Nn(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){ye(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&ye(e)})}function ye(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),ce(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",Rn();const i=document.querySelector("main");i.style.zIndex="1"}async function An(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await q(e.project_id);t.addEventListener("click",function(){ke(a)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){Te(event)}),i.addEventListener("click",function(){Te(event)}),s.addEventListener("click",()=>{j("/")})}function Te(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");S([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function kn(e){window.confirm("Are you sure you want to delete this project?")?(Gn(e),U(),j("/")):U()}async function Gn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function Jn(e){document.getElementById("PROJECTview_projectAreaContainer"),Un();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n;if(o!=="{}"){const i=o.songs_json,s=[];for(const a of i)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:Re(a.song_size),songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];De(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");r&&(r.getAttribute("data-row-id"),Se(a))}})}}async function Me(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await q(n);o.project_id=n;const i=o,s=i.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:Re(l.song_size),songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const _=c[l];De(_)}e.addEventListener("click",function(l){const _=l.target;if(l.stopPropagation(),_.tagName==="BUTTON"){const p=_.closest(".PROJECTview-projectTable-rowContainer");if(p){const I=p.getAttribute("data-row-id");Se(l),console.log(`Button in row ${I} clicked.`)}}})}function Se(e){e.stopPropagation(),e.target,S([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Un(){let e="PROJECTview_projectAreaContainer",t=Cn;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function De(e){let t="PROJECTview-projectTable",n=wn;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${E}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function qn(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Hn(o,i)}}async function xe(e,t,n,o){re=!0;const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,Me(),re=!1,Z.length>0){const d=Z.shift();await xe(d.file,d.uploadBox,d.fileNameLabel,d.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${h}/files/upload/audio/`,!0),a.send(i)}let re=!1;const Z=[];async function Hn(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div"),s=document.createElement("div");i.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i);const a={file:o,uploadBox:i,fileNameLabel:s,details:t};if(Z.push(a),!re){const c=Z.shift();await xe(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function Re(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function je(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Yn(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&O()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!O()||!c.isIntersecting&&!O()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&O()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function $n(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){Qn(i,s)}}function Qn(e,t){e.stopPropagation(),e.target,S({project_id:t},e,"update_project_image")}async function zn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const n=(await Pe("profile_picture"))[0].profile_picture,o=`${E}/${n}/1/`;e.src=o,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Fn)}catch(t){console.error("Error initializing account image:",t)}}function Fn(e){e.stopPropagation(),Vn(e)}function Vn(e){S([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function Kn(){localStorage.clear(),location.reload()}function S(e,t,n){n===void 0&&Zn(e,t),n!==void 0&&n==="update_project_image"&&Xn(e,t),n!==void 0&&n==="lcd_mobile_body"&&Wn()}let M=!1;function Wn(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");O()&&(t.style.zIndex="40",n.style.zIndex="0");const o=document.getElementById("MENUmodalEnvironment");o.style.display="block";let i=nn;for(const[b,L]of Object.entries(y)){const P=new RegExp(`\\{${b}\\}`,"g");i=i.replace(P,L)}o.innerHTML=i;const s=document.getElementById("LCDMB_seek_input"),a=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const c=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),_=document.getElementById("LCDMB_queue_button"),p=document.getElementById("audio"),I=document.getElementById("LCD_mobile_body_song_title"),B=document.getElementById("LCD_mobile_body_artist_title"),w=document.getElementById("LCD_mobile_body_img");function g(){w.src=me,I.innerText=pe,B.innerText=ge}p.addEventListener("ended",()=>{g(),M===!0&&x()}),g();function v(){p.paused?d.src=y.icons_playButtonV2:d.src=y.icons_derpy}v();const f=p.duration,D=p.currentTime/f*100;a.style.width=`${D}%`,p.addEventListener("timeupdate",()=>{const b=p.duration,P=p.currentTime/b*100;a.style.width=`${P}%`}),s.addEventListener("input",function(){const b=p.duration,L=s.value;p.currentTime=b*(L/100)}),c.addEventListener("click",()=>{Ue(),g(),M===!0&&x()}),r.addEventListener("click",()=>{ne(),g(),v()}),l.addEventListener("click",()=>{Je(),g(),M===!0&&x()});const oe=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];_.addEventListener("click",()=>{M===!1?(A(),M=!0):(H(),M=!1)}),M===!0?A():H();function x(){const b=document.getElementById("LCD_mobile_queue_content_container");b.innerHTML="";for(let L=m+1;L<u.length;L++){const P=u[L],z=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],J=P.img,ze=P.song_name,Fe=P.project_contributors;let ie=on;for(let se=0;se<z.length;se++){const F=z[se].toString(),Ve=new RegExp(`\\{${F}\\}`,"g");let V="";F==="queue_item_img"?V=`${E}/${J}/3/`:F==="queue_item_song_name"?V=ze:F==="queue_item_song_artist"&&(V=Fe),ie=ie.replace(Ve,V)}b.innerHTML+=ie}}function A(){function b(L){L.forEach(P=>{document.querySelectorAll("."+P).forEach(J=>{J.classList.add("queue_visible")})})}b(oe),o.removeEventListener("touchstart",Y),o.removeEventListener("touchmove",$),o.removeEventListener("touchend",Q),x()}function H(){function b(L){L.forEach(P=>{document.querySelectorAll("."+P).forEach(J=>{J.classList.remove("queue_visible")})})}b(oe),o.addEventListener("touchstart",Y,!1),o.addEventListener("touchmove",$,!1),o.addEventListener("touchend",Q,!1)}o.addEventListener("touchstart",Y,!1),o.addEventListener("touchmove",$,!1),o.addEventListener("touchend",Q,!1);let fe=0,ve=0;function Y(b){M===!1&&(fe=b.touches[0].clientY)}function $(b){b.preventDefault()}function Q(b){ve=b.changedTouches[0].clientY,ve-fe>70&&(U(),o.removeEventListener("touchstart",Y),o.removeEventListener("touchmove",$),o.removeEventListener("touchend",Q))}}let W;function Zn(e,t){W=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");O()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=Zt,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",Ne);let d=o+"px",l=i+"px";if(r.style.left=d,r.style.top=l,W&&n===""){const f=W.getBoundingClientRect();o=f.left+window.scrollX,i=f.top+window.scrollY;let C=o+"px",D=i+"px";r.style.left=C,r.style.top=D}for(let f=0;f<e.length;f++)no(e[f]);const p=r.children[0];n===""?p.focus():n==="mouse"&&(p.focus(),p.blur());function I(f){(f.key==="Escape"||f.keyCode===27)&&(document.removeEventListener("keydown",I),U())}document.addEventListener("keydown",I);const B=r.offsetWidth,w=r.offsetHeight,g=to("MENUmodalBody");g.xOverflow==!0&&(d=o-B+"px",r.style.left=d),g.yOverflow==!0&&(l=i-w+"px",r.style.top=l);const v=r.getElementsByClassName("MENUmodalItemContainer");for(let f=0;f<v.length;f++){const C=v[f];C.setAttribute("data-menu-item-id",f),C.addEventListener("click",function(D){D.stopPropagation();const x=D.target.getAttribute("data-menu-item-id"),A=e[x].function,H=e[x].optionalParams;if(A=="TEST")console.log("the button worked");else if(A!="None"){oo[A](H);return}else return})}}function Xn(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");O()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2";const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Xt,a.style.display="block";const c=document.getElementById("MENUmodalBody");a.addEventListener("click",Ne);let r=n+"px",d=o+"px";c.style.left=r,c.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),_=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),I=document.getElementById("MENUmodalBody_image_select_submit_button"),B=document.getElementById("MENUmodalBody_image_select_submit_button_container");function w(g,v){if(g){const f=URL.createObjectURL(g),C=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=f,I.style.visibility="visible",B.style.outline="3px solid var(--primary)",I.addEventListener("click",()=>{an(g,v.project_id),C.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",g=>{g.preventDefault()}),l.addEventListener("drop",g=>{g.preventDefault();const v=g.dataTransfer.files;w(v[0],e)}),_.addEventListener("click",()=>{const g=document.createElement("input");g.type="file",g.accept="image/*",g.addEventListener("change",v=>{const f=v.target.files[0];w(f,e)}),g.click()})}function eo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",U(),On()}function to(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=i+s,d=c+a;let l=!1,_=!1;return r>n&&(l=!0),d>o&&(_=!0),{xOverflow:l,yOverflow:_}}function no(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:(o="var(--text)",O()&&(o="var(--text)"));const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=tn.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(y)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function Ne(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function U(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),W.focus()}const oo={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){kn(e)},PLAYBACK_add_songs_to_queue(e){Co(e)},SIGN_OUT_USER(e){Kn()}};let R="hidden";function io(){Kt();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");le(R),e.addEventListener("click",so),t.addEventListener("click",ao),N()}function so(){if(R==="hidden"){R="visible",le(R);return}if(R==="visible"){R="hidden",le(R);return}}function le(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",en&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function N(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=m+1;t<u.length;t++){u[t].id=t;const n=u[t],o=go(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",po),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",uo),s.dataset.songID=n.id;const a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&mo(c)}),i.addEventListener("dragstart",co),i.addEventListener("dragover",ro),i.addEventListener("drop",lo),e.appendChild(i)}}function ao(){const e=m+1;e>=0&&e<u.length?u.splice(e):u.length=0,N()}function co(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function ro(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function lo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),N())}function uo(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&u.splice(o,1),N()}function mo(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];S(o,e)}function po(e){}function go(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Wt;for(let d=0;d<t.length;d++){const l=t[d].toString(),_=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${E}/${n}/3/`:l==="QUEUE_item_title"?p=o:l==="QUEUE_item_artist"?p=i:l==="icons_menuOptionsButton"?p=Le:l==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(_,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),c.innerHTML}const _o=`<div class="LCDbody">
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
</div>`;function fo(){Eo(),ue(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){yo(t)}),To(),O()&&document.getElementById("LCDbody").addEventListener("click",vo)}function vo(e){e.stopPropagation(),S({param:"cheese"},e,"lcd_mobile_body")}function Eo(){let e="LCDbody",t=_o;for(const[o,i]of Object.entries(y)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function ue(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function yo(e){e.stopPropagation(),e.target,S([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function To(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",bo)})}function bo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Po(n)}function Ae(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],m=0,me="",pe="",ge="";document.getElementById("audio");document.getElementById("PLAYERsource");let T="off",Io="off",X="paused";function ee(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function ke(e){u=[],m=0,u=Ge(e),u.length>0&&(X="playing",k())}function Ge(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,s=e.songs_json;try{for(const a of s){const c=a.song_name,r=a.duration,d=a.url;t.push({img:i,song_name:c,url:d,duration:r,project_name:o,project_contributors:n})}}catch{}return t}function ho(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,m=n,Ro(o),u.length>0&&Mo(i)}async function Co(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await q(t),i=Ge(o);if(n==="later")u=u.concat(i);else if(n==="next"){const s=u.slice(0,m+1),a=u.slice(m+1);u=s,u=u.concat(i),u=u.concat(a)}N()}function ne(){wo()}function wo(){const e=document.getElementById("audio");e.paused?(te("playing"),X="playing",e.play().then(t=>qe()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(X="paused",te("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ne()});navigator.mediaSession.setActionHandler("pause",function(){ne()});function Je(){He()}function Ue(){Ye()}function Lo(){document.getElementById("audio").addEventListener("ended",Do)}function Po(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Bo(){xo()}function Oo(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:T,PLAYBACK_shuffle_state:Io,progress:t}}function k(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${E}/${u[m].url}/3/`,e.load(),X==="playing"&&e.play().then(d=>qe()).catch(d=>console.log(d)),n.innerHTML=u[m].song_name,o.innerHTML=u[m].song_name,i.innerHTML=u[m].project_contributors,ue(),N(),te("playing"),c.src=`${E}/${u[m].img}/3/`,r.src=`${E}/${u[m].img}/3/`,me=`${E}/${u[m].img}/5/`,pe=u[m].song_name,ge=u[m].project_contributors,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,_=Math.floor(d)-l,p=`"-${ee(_)}"`,B=`"${ee(Math.floor(l))}"`,w=l/d*100,g=`${w}%`;Ae(B,p),s.style.setProperty("--LCD-seekbar-width",g),s.style.setProperty("--LCD-seekbar-indicator-left",g),a.value=w,_e()})}function Mo(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),a=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),d=document.getElementById("LCDimageMobile");n.src=`${E}/${u[m].url}/3/`,t.load(),t.currentTime=e,o.innerHTML=u[m].song_name,i.innerHTML=u[m].song_name,s.innerHTML=u[m].project_contributors,ue(),N(),te("paused"),r.src=`${E}/${u[m].img}/3/`,d.src=`${E}/${u[m].img}/3/`,me=`${E}/${u[m].img}/5/`,pe=u[m].song_name,ge=u[m].project_contributors,t.addEventListener("timeupdate",()=>{const l=t.duration,_=t.currentTime,p=Math.floor(l)-_,I=`"-${ee(p)}"`,w=`"${ee(Math.floor(_))}"`,g=_/l*100,v=`${g}%`;Ae(w,I),a.style.setProperty("--LCD-seekbar-width",v),a.style.setProperty("--LCD-seekbar-indicator-left",v),c.value=g,_e()})}function qe(){let e=u[m];const t=[{src:`${E}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${E}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${E}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${E}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${E}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${E}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),_e()}function _e(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function So(){console.log("PLAYBACK_stop_playback, clear top")}function Do(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>m+1&&(T=="off"||T=="on")?(m+=1,k()):T=="song"?k():t==m+1&&T=="on"?(m=0,k()):So()}function He(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>m+1&&(e.paused||e.pause(),m+=1,k())}navigator.mediaSession.setActionHandler("nexttrack",function(){He()});function Ye(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,m>0&&(e.pause(),m-=1,k())}navigator.mediaSession.setActionHandler("previoustrack",function(){Ye()});function xo(){T=="off"?(T="on",G(T)):T=="on"?(T="song",G(T)):(T="off",G(T))}function Ro(e){e=="off"?(T="off",G(T)):e=="on"?(T="on",G(T)):(e="song",T="on",G(T))}function jo(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",No),t.addEventListener("click",Ao),n.addEventListener("click",ko),o.addEventListener("click",Go),i.addEventListener("click",Jo)}function No(){console.log("shuffleClicked")}function Ao(){Ue()}function ko(){ne()}function Go(){Je()}function Jo(){Bo()}function G(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=y.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop_song;return}}function te(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=y.icons_pause;return}if(e=="paused"){t.src=y.icons_play;return}}function Uo(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){$e(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",qo)})}function qo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;$e(n)}function $e(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ho(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Yo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function $o(){setTimeout(()=>{let e="MAINcontentPages",t=Yo;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Qo)},1)}async function Qo(e){console.log("the signup event was caught"),e.preventDefault(),zo();const t=document.getElementById("SETTINGSsignupForm"),n={},o=i=>new Promise((s,a)=>{const c=new FileReader;if(i.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(i)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const i=await fetch(`${h}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const s=await i.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const d=await o(r);n[c.name]=d}}else n[c.name]=c.value;const a=await fetch(`${h}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();ae(),Fo(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await i.json();ae(),be(),alert("There was an error with the email, check that the details are correct.")}}catch{ae(),be(),alert("There was an error, try again")}}function zo(){const e=document.getElementById("spinner");e.style.display="block"}function ae(){const e=document.getElementById("spinner");e.style.display="none"}function Fo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function be(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Vo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let K=!1,Ie=!1,he=!1;async function Ko(){await Xo()?Qe():he||(Wo(),he=!0)}function Wo(){ei();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${h}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),we(),$o()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),K)return!1;K=!0;const a=o.value,c=i.value;try{await Zo(a,c)?(Ie=!0,ti(),Qe(),setTimeout(we,2e3)):(Ie=!1,ni(),console.log("Login failed. Retry!")),K=!1}catch(r){console.error("Error:",r),K=!1}return!1})}async function Zo(e,t){try{const o=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function Xo(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function ei(){let e="MAINcontentPages",t=Vo;document.getElementById(e).innerHTML+=t}let Ce=!1;function we(){if(Ce===!0)return;document.getElementById("SETTINGSmodalID").remove(),Ce=!0}function ti(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function ni(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="MAIN_API_DOMAIN",E="MAIN_MEDIA_DOMAIN";async function Qe(){Lo(),Ft(),Vt(),fo(),jo(),Ho(),Uo(),zn(),io(),yn()}let de=Ke;for(const[e,t]of Object.entries(y)){const n=new RegExp(`\\{${e}\\}`,"g");de=de.replace(n,t)}document.getElementById("app").innerHTML=de;Ko();
