(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const et=`<!-- audio tag -->
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
</div>`,tt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,nt=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" id="PLAYERshuffleIcon" />
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
</div>`,ot=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,it="/assets/volume_null-e39cf06f.svg",st="/assets/recently_added-a0a983c6.svg",at="/assets/volume_3-c8ab0a75.svg",ct="/assets/orange_music_text_logo_black-12e7386c.svg",rt="/assets/volume_2-cfdac9da.svg",lt="/assets/browse_2-85030bba.svg",dt="/assets/volume_1-27e93416.svg",ut="/assets/orange_music_logo_white-2a680ea2.svg",mt="/assets/search_icon-4f5e4381.svg",pt="/assets/orange_music_text_logo_black-91f9e706.png",gt="/assets/up_next_queue_button-14fedba2.svg",_t="/assets/orange_music_logo_yellow-a109ff64.svg",ft="/assets/playlist-c6e9024f.svg",vt="/assets/loop_button-aef56865.svg",Et="/assets/help_icon-867fec9d.svg",yt="/assets/play_button-b1e2d3a4.svg",Tt="/assets/browse-14744f27.svg",Me="/assets/menu_options_button-a1d7bbe3.svg",bt="/assets/orange_music_text_logo_white-7f0ba909.svg",ht="/assets/back_button-8128cade.svg",It="/assets/Albums-2e81dc74.svg",Ct="/assets/songs-016b7188.svg",wt="/assets/orange_music_logo_black-4d7e4591.svg",Lt="/assets/your_uploaded_songs-06535705.svg",Pt="/assets/artist-ab677d43.svg",Bt="/assets/shuffle_button-c2f06bc4.svg",Ot="/assets/orange_music_text_logo_white-4907051e.png",Mt="/assets/listen_now-c7438154.svg",St="/assets/derpy-21c20ae5.svg",Dt="/assets/next_button-9a850710.svg",Rt="/assets/recently_added-7ff28139.svg",xt="/assets/play_button-5eeedbe6.svg",jt="/assets/browse-e8be8609.svg",Nt="/assets/albums-681507b8.svg",At="/assets/listen_now.2-bfa293ac.svg",kt="/assets/your_uploads-02e5c93c.svg",Gt="/assets/play_button.2-fc90fac7.svg",Jt="/assets/listen_now-fb02ffce.svg",Ut="/assets/browse.2-15b501dd.svg",qt="/assets/place_holder_image-d4006a96.svg",Yt="/assets/icons_MOGitems_add-19e679f7.svg",Ht="/assets/back-9279721d.svg",$t="/assets/forwards-605bd405.svg",Qt="/assets/icons_close-57e87944.svg",zt="/assets/icons_pause-8012f8cc.svg",Ft="/assets/icons_loop-32d1576c.svg",Kt="/assets/icons_loop_song-87f53dc7.svg",Vt="/assets/icons_play-a5074c5b.svg",Wt="/assets/icons_settings-793063fb.svg",y={icons_volumeNull:it,icons_recentlyAdded:st,icons_volume3:at,icons_orangeMusicTextLogoBlack:ct,icons_volume2:rt,icons_browse2:lt,icons_volume1:dt,icons_orangeMusicLogoWhite:ut,icons_searchIcon:mt,icons_orangeMusicTextLogoBlackPng:pt,icons_queueButton:gt,icons_orangeMusicLogoYellow:_t,icons_playlist:ft,icons_loopButton:vt,icons_helpIcon:Et,icons_playButton:yt,icons_browse:Tt,icons_menuOptionsButton:Me,icons_orangeMusicTextLogoWhite:bt,icons_backButton:ht,icons_Albums:It,icons_songs:Ct,icons_orangeMusicLogoBlack:wt,icons_yourUploadedSongs:Lt,icons_artist:Pt,icons_shuffleButton:Bt,icons_orangeMusicTextLogoWhitePng:Ot,icons_listenNow:Mt,icons_derpy:St,icons_nextButton:Dt,icons_recentlyAddedV2:Rt,icons_playButtonV2:xt,icons_browseV2:jt,icons_albumsV2:Nt,icons_listenNow2V2:At,icons_yourUploads:kt,icons_playButton2:Gt,icons_listenNowV2:Jt,icons_browse2V2:Ut,v3_placeholder:qt,icons_MOGitems_add:Yt,icons_back:Ht,icons_forwards:$t,icons_close:Qt,icons_pause:zt,icons_loop:Ft,icons_loop_song:Kt,icons_play:Vt,icons_settings:Wt};function Zt(){let e="topleftContentArea",t=tt;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Xt(){let e="toprightContentArea",t=nt;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function en(){let e="MAINcontentContainer",t=ot;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const tn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,nn='<div class="MENUmodalBody" id="MENUmodalBody"></div>',on=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;function M(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function sn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function an(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}const cn=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`,rn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,ln=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`;async function dn(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){so()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${I}/files/upload/photo/`,!0),n.send(o)}async function un(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await dn(n,t)}async function le(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${I}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function mn(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${I}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Se(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${I}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function $(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${I}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}const pn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,gn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,_n=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`;async function fn(){try{const e=document.getElementById("MAINcontentPages");yn();const t=await En();Tn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function vn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",De),e.innerHTML=""}async function En(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${I}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function yn(){let e="MAINcontentPages",t=pn;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Tn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=_n;for(const[r,l]of Object.entries(y)){const d=new RegExp(`\\{${r}\\}`,"g");n=n.replace(d,l)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=gn;const l=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],d=i,g=e[i].img,_=e[i].top,C=e[i].bottom,O=e[i].days,L=hn(O);for(const[p,v]of Object.entries(y)){const f=new RegExp(`\\{${p}\\}`,"g");r=r.replace(f,v)}for(let p=0;p<l.length;p++){const v=l[p].toString(),f=new RegExp(`\\{${v}\\}`,"g");let w="";v==="MOG_image"?w=`${E}/${g}/4/`:v==="MOG_text1"?w=_:v==="MOG_text2"?w=C:v==="MOG_checkedDate"?w=L:v==="MOGI_placeholder_itemID"&&(w=d),r=r.replace(f,w)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){De(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,l){navigator.vibrate(1e3);const g=r.target.id.split("-")[1],_=l[g].project_id;console.log(_),Re(r,_)}}async function bn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${I}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function De(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await bn(i);qe(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Re(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;G(`/projects/${i}`)}n.id==="MOGaddNewItem"&&In()}function Re(e,t){e.stopPropagation(),R([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function hn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function In(){G("/new-project/")}async function Cn(){function e(){const c=window.location.pathname;G(c)}window.addEventListener("popstate",e);const t=await Se("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const c=window.location.pathname;G(c),Bo(n)}else e();let o="";const i=new Map;function s(c){return JSON.stringify(c)}function a(){const c=window.location.pathname,r=u,l=m,d=xo();d.current_path=c,d.current_queue=r,d.current_index=l;const g=s(d);g!==o&&(mn("last_state",d),o=g,i.set("playback_states",g))}setInterval(a,1e4)}function wn(){Rn(),fn()}function Ln(e){vn(),Dn()}const be={"/":wn,"/new-project/":Sn,"/projects/:projectID":Ln};function Pn(){console.log("notFoundHandler")}function G(e){const t=Object.keys(be);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=be[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Pn()}const Bn=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,On=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Mn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function Sn(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${I}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;G(s)}catch(e){console.error("Error:",e)}}async function Dn(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await $(o);i.project_id=o,t(i),jn(i)},1);function t(n){Nn(n);const o=n.description;sessionStorage.setItem("description",o),An(),kn(),Jn(),Un(n),qn(n),$n(n),zn(n),Kn(),Ge(n.project_name),Vn(n.project_id)}}function Rn(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function xn(){xe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await $(t)).picture_url,s=`${E}/${i}/5/`;n.src=s}function jn(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(o){const i=t.innerText;Ge(i),le(e.project_id,"project_name",i)});const n=document.getElementById("PROJECTviewDisplayTitleH3");n.addEventListener("blur",function(o){const i=n.innerText;le(e.project_id,"project_contributors",i)})}function Nn(e){let t="MAINcontentPages",n=Bn;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${E}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function An(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function kn(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",M()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Gn(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Jn(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Un(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){he(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&he(e)})}function he(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),le(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",Gn();const i=document.querySelector("main");i.style.zIndex="1"}async function qn(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await $(e.project_id);t.addEventListener("click",function(){qe(a)}),n.addEventListener("click",function(){Po(a)}),o.addEventListener("click",function(){Ie(event)}),i.addEventListener("click",function(){Ie(event)}),s.addEventListener("click",()=>{G("/")})}function Ie(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");R([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function Yn(e){window.confirm("Are you sure you want to delete this project?")?(Hn(e),Y(),G("/")):Y()}async function Hn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${I}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function $n(e){document.getElementById("PROJECTview_projectAreaContainer"),Qn();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n;if(o!=="{}"){const i=o.songs_json,s=[];for(const a of i)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:ke(a.song_size),songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];Ne(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");r&&(r.getAttribute("data-row-id"),je(a))}})}}async function xe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await $(n);o.project_id=n;const i=o,s=i.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const d of a)c.push({img:i.picture_url,songTitle:d.song_name,artistName:i.project_contributors,projectName:ke(d.song_size),songDuration:`${Math.floor(d.duration/60)}:${(d.duration%60).toString().padStart(2,"0")}`,song_sequence:d.song_sequence,url:d.url});const r=document.getElementById("PROJECTview-projectTable"),l=r.children;for(let d=l.length-1;d>0;d--)r.removeChild(l[d]);for(let d=0;d<c.length;d++){c[d].projectID=d;const g=c[d];Ne(g)}e.addEventListener("click",function(d){const g=d.target;if(d.stopPropagation(),g.tagName==="BUTTON"){const _=g.closest(".PROJECTview-projectTable-rowContainer");if(_){const C=_.getAttribute("data-row-id");je(d),console.log(`Button in row ${C} clicked.`)}}})}function je(e){e.stopPropagation(),e.target,R([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Qn(){let e="PROJECTview_projectAreaContainer",t=On;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Ne(e){let t="PROJECTview-projectTable",n=Mn;for(const[i,s]of Object.entries(y)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${E}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function zn(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Fn(o,i)}}async function Ae(e,t,n,o){de=!0;const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(l){if(l.lengthComputable){const d=l.loaded/l.total*100;r.style.width=d+"%",d===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,xe(),de=!1,te.length>0){const l=te.shift();await Ae(l.file,l.uploadBox,l.fileNameLabel,l.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${I}/files/upload/audio/`,!0),a.send(i)}let de=!1;const te=[];async function Fn(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div"),s=document.createElement("div");i.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i);const a={file:o,uploadBox:i,fileNameLabel:s,details:t};if(te.push(a),!de){const c=te.shift();await Ae(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function ke(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Ge(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Kn(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&M()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!M()||!c.isIntersecting&&!M()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&M()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function Vn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){Wn(i,s)}}function Wn(e,t){e.stopPropagation(),e.target,R({project_id:t},e,"update_project_image")}async function Zn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const n=(await Se("profile_picture"))[0].profile_picture,o=`${E}/${n}/1/`;e.src=o,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Xn)}catch(t){console.error("Error initializing account image:",t)}}function Xn(e){e.stopPropagation(),eo(e)}function eo(e){R([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function to(){localStorage.clear(),location.reload()}function R(e,t,n){n===void 0&&oo(e,t),n!==void 0&&n==="update_project_image"&&io(e,t),n!==void 0&&n==="lcd_mobile_body"&&no()}let D=!1;function no(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");M()&&(t.style.zIndex="40",n.style.zIndex="0");const o=document.getElementById("MENUmodalEnvironment");o.style.display="block";let i=rn;for(const[b,P]of Object.entries(y)){const B=new RegExp(`\\{${b}\\}`,"g");i=i.replace(B,P)}o.innerHTML=i;const s=document.getElementById("LCDMB_seek_input"),a=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const c=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),l=document.getElementById("LCDMB_play_icon"),d=document.getElementById("LCDMB_next"),g=document.getElementById("LCDMB_queue_button"),_=document.getElementById("audio"),C=document.getElementById("LCD_mobile_body_song_title"),O=document.getElementById("LCD_mobile_body_artist_title"),L=document.getElementById("LCD_mobile_body_img");function p(){L.src=ge,C.innerText=_e,O.innerText=fe}_.addEventListener("ended",()=>{p(),D===!0&&j()}),p();function v(){_.paused?l.src=y.icons_playButtonV2:l.src=y.icons_derpy}v();const f=_.duration,x=_.currentTime/f*100;a.style.width=`${x}%`,_.addEventListener("timeupdate",()=>{const b=_.duration,B=_.currentTime/b*100;a.style.width=`${B}%`}),s.addEventListener("input",function(){const b=_.duration,P=s.value;_.currentTime=b*(P/100)}),c.addEventListener("click",()=>{He(),p(),D===!0&&j()}),r.addEventListener("click",()=>{ie(),p(),v()}),d.addEventListener("click",()=>{Ye(),p(),D===!0&&j()});const se=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];g.addEventListener("click",()=>{D===!1?(J(),D=!0):(Q(),D=!1)}),D===!0?J():Q();function j(){const b=document.getElementById("LCD_mobile_queue_content_container");b.innerHTML="";for(let P=m+1;P<u.length;P++){const B=u[P],V=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],q=B.img,We=B.song_name,Ze=B.project_contributors;let ae=ln;for(let ce=0;ce<V.length;ce++){const W=V[ce].toString(),Xe=new RegExp(`\\{${W}\\}`,"g");let Z="";W==="queue_item_img"?Z=`${E}/${q}/3/`:W==="queue_item_song_name"?Z=We:W==="queue_item_song_artist"&&(Z=Ze),ae=ae.replace(Xe,Z)}b.innerHTML+=ae}}function J(){function b(P){P.forEach(B=>{document.querySelectorAll("."+B).forEach(q=>{q.classList.add("queue_visible")})})}b(se),o.removeEventListener("touchstart",z),o.removeEventListener("touchmove",F),o.removeEventListener("touchend",K),j()}function Q(){function b(P){P.forEach(B=>{document.querySelectorAll("."+B).forEach(q=>{q.classList.remove("queue_visible")})})}b(se),o.addEventListener("touchstart",z,!1),o.addEventListener("touchmove",F,!1),o.addEventListener("touchend",K,!1)}o.addEventListener("touchstart",z,!1),o.addEventListener("touchmove",F,!1),o.addEventListener("touchend",K,!1);let ye=0,Te=0;function z(b){D===!1&&(ye=b.touches[0].clientY)}function F(b){b.preventDefault()}function K(b){Te=b.changedTouches[0].clientY,Te-ye>70&&(Y(),o.removeEventListener("touchstart",z),o.removeEventListener("touchmove",F),o.removeEventListener("touchend",K))}}let ee;function oo(e,t){ee=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");M()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=nn,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",Je);let l=o+"px",d=i+"px";if(r.style.left=l,r.style.top=d,ee&&n===""){const f=ee.getBoundingClientRect();o=f.left+window.scrollX,i=f.top+window.scrollY;let w=o+"px",x=i+"px";r.style.left=w,r.style.top=x}for(let f=0;f<e.length;f++)co(e[f]);const _=r.children[0];n===""?_.focus():n==="mouse"&&(_.focus(),_.blur());function C(f){(f.key==="Escape"||f.keyCode===27)&&(document.removeEventListener("keydown",C),Y())}document.addEventListener("keydown",C);const O=r.offsetWidth,L=r.offsetHeight,p=ao("MENUmodalBody");p.xOverflow==!0&&(l=o-O+"px",r.style.left=l),p.yOverflow==!0&&(d=i-L+"px",r.style.top=d);const v=r.getElementsByClassName("MENUmodalItemContainer");for(let f=0;f<v.length;f++){const w=v[f];w.setAttribute("data-menu-item-id",f),w.addEventListener("click",function(x){x.stopPropagation();const j=x.target.getAttribute("data-menu-item-id"),J=e[j].function,Q=e[j].optionalParams;if(J=="TEST")console.log("the button worked");else if(J!="None"){ro[J](Q);return}else return})}}function io(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");M()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2";const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=on,a.style.display="block";const c=document.getElementById("MENUmodalBody");a.addEventListener("click",Je);let r=n+"px",l=o+"px";c.style.left=r,c.style.top=l;const d=document.getElementById("MENUmodalBody_image_select_file_drop_area"),g=document.getElementById("MENUmodalBody_image_select_file_select_button"),_=document.getElementById("MENUmodalBody_image_select_preview_area"),C=document.getElementById("MENUmodalBody_image_select_submit_button"),O=document.getElementById("MENUmodalBody_image_select_submit_button_container");function L(p,v){if(p){const f=URL.createObjectURL(p),w=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");_.src=f,C.style.visibility="visible",O.style.outline="3px solid var(--primary)",C.addEventListener("click",()=>{un(p,v.project_id),w.style.visibility="visible"})}else console.log("No file selected.")}d.addEventListener("dragover",p=>{p.preventDefault()}),d.addEventListener("drop",p=>{p.preventDefault();const v=p.dataTransfer.files;L(v[0],e)}),g.addEventListener("click",()=>{const p=document.createElement("input");p.type="file",p.accept="image/*",p.addEventListener("change",v=>{const f=v.target.files[0];L(f,e)}),p.click()})}function so(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Y(),xn()}function ao(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=i+s,l=c+a;let d=!1,g=!1;return r>n&&(d=!0),l>o&&(g=!0),{xOverflow:d,yOverflow:g}}function co(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:(o="var(--text)",M()&&(o="var(--text)"));const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=cn.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,l]of Object.entries(y)){const d=new RegExp(`\\{${r}\\}`,"g");a=a.replace(d,l)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function Je(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function Y(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),ee.focus()}const ro={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Yn(e)},PLAYBACK_add_songs_to_queue(e){Oo(e)},SIGN_OUT_USER(e){to()}};let N="hidden";function lo(){en();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");ue(N),e.addEventListener("click",uo),t.addEventListener("click",mo),S()}function uo(){if(N==="hidden"){N="visible",ue(N);return}if(N==="visible"){N="hidden",ue(N);return}}function ue(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",sn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function S(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=m+1;t<u.length;t++){u[t].id=t;const n=u[t],o=yo(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Eo),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",fo),s.dataset.songID=n.id;const a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&vo(c)}),i.addEventListener("dragstart",po),i.addEventListener("dragover",go),i.addEventListener("drop",_o),e.appendChild(i)}}function mo(){const e=m+1;e>=0&&e<u.length?u.splice(e):u.length=0,S()}function po(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function go(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function _o(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),h.splice(s,1),h.splice(a,0,o),S())}function fo(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),h.splice(o,1)),S()}function vo(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];R(o,e)}function Eo(e){}function yo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=tn;for(let r=0;r<t.length;r++){const l=t[r].toString(),d=new RegExp(`\\{${l}\\}`,"g");let g="";l==="QUEUE_item_image"?g=`${E}/${n}/3/`:l==="QUEUE_item_title"?g=o:l==="QUEUE_item_artist"?g=i:l==="icons_menuOptionsButton"?g=Me:l==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(d,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML}const To=`<div class="LCDbody">
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
</div>`;function bo(){Io(),pe(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Co(t)}),wo(),M()&&document.getElementById("LCDbody").addEventListener("click",ho)}function ho(e){e.stopPropagation(),R({param:"cheese"},e,"lcd_mobile_body")}function Io(){let e="LCDbody",t=To;for(const[o,i]of Object.entries(y)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function pe(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,l,d;e=n.clientWidth,l=s(),d=e/o,d>l?r=l+10:r=d,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),l=document.createElement("span");l.style.visibility="hidden",l.style.whiteSpace="nowrap",l.textContent=r.textContent,document.body.appendChild(l);const d=l.offsetWidth;return document.body.removeChild(l),d}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function Co(e){e.stopPropagation(),e.target,R([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function wo(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Lo)})}function Lo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Do(n)}function Ue(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],h=[],m=0,ge="",_e="",fe="";document.getElementById("audio");document.getElementById("PLAYERsource");let T="off",A="off",H="paused";function ne(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function qe(e){u=[],m=0,u=ve(e),u.length>0&&(H="playing",k())}function Po(e){u=[],m=0,u=ve(e),u.length>0&&(A="off",$e(),H="playing",k())}function ve(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,s=e.songs_json;try{for(const a of s){const c=a.song_name,r=a.duration,l=a.url;t.push({img:i,song_name:c,url:l,duration:r,project_name:o,project_contributors:n})}}catch{}return t}function Bo(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,m=n,Go(o),u.length>0&&jo(i)}async function Oo(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await $(t),i=ve(o);if(n==="later")u=u.concat(i),h=h.concat(i);else if(n==="next"){let s=u.slice(0,m+1),a=u.slice(m+1);u=s,u=u.concat(i),u=u.concat(a),s=h.slice(0,m+1),a=h.slice(m+1),h=s,h=h.concat(i),h=h.concat(a)}S()}function ie(){Mo()}function Mo(){const e=document.getElementById("audio");e.paused?(oe("playing"),H="playing",e.play().then(t=>Qe()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(H="paused",oe("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ie()});navigator.mediaSession.setActionHandler("pause",function(){ie()});function Ye(){ze()}function He(){Fe()}function So(){document.getElementById("audio").addEventListener("ended",Ao)}function Do(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ro(){ko()}function xo(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:T,PLAYBACK_shuffle_state:A,progress:t}}function $e(){if(A==="off"){A="on",Ce(A);const e=m+1;h=[...u],u.slice(0,m);const t=u.slice(e);an(t);const n=t.length;u.splice(m,n,...t),S()}else A="off",Ce(A),console.log(u,h),u=h,S()}function k(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${E}/${u[m].url}/3/`,e.load(),H==="playing"&&e.play().then(l=>Qe()).catch(l=>console.log(l)),n.innerHTML=u[m].song_name,o.innerHTML=u[m].song_name,i.innerHTML=u[m].project_contributors,pe(),S(),oe("playing"),c.src=`${E}/${u[m].img}/3/`,r.src=`${E}/${u[m].img}/3/`,ge=`${E}/${u[m].img}/5/`,_e=u[m].song_name,fe=u[m].project_contributors,e.addEventListener("timeupdate",()=>{const l=e.duration,d=e.currentTime,g=Math.floor(l)-d,_=`"-${ne(g)}"`,O=`"${ne(Math.floor(d))}"`,L=d/l*100,p=`${L}%`;Ue(O,_),s.style.setProperty("--LCD-seekbar-width",p),s.style.setProperty("--LCD-seekbar-indicator-left",p),a.value=L,Ee()})}function jo(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),s=document.getElementById("LCDbottomText"),a=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),l=document.getElementById("LCDimageMobile");n.src=`${E}/${u[m].url}/3/`,t.load(),t.currentTime=e,o.innerHTML=u[m].song_name,i.innerHTML=u[m].song_name,s.innerHTML=u[m].project_contributors,pe(),S(),oe("paused"),r.src=`${E}/${u[m].img}/3/`,l.src=`${E}/${u[m].img}/3/`,ge=`${E}/${u[m].img}/5/`,_e=u[m].song_name,fe=u[m].project_contributors,t.addEventListener("timeupdate",()=>{const d=t.duration,g=t.currentTime,_=Math.floor(d)-g,C=`"-${ne(_)}"`,L=`"${ne(Math.floor(g))}"`,p=g/d*100,v=`${p}%`;Ue(L,C),a.style.setProperty("--LCD-seekbar-width",v),a.style.setProperty("--LCD-seekbar-indicator-left",v),c.value=p,Ee()})}function Qe(){let e=u[m];const t=[{src:`${E}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${E}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${E}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${E}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${E}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${E}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Ee()}function Ee(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function No(){console.log("PLAYBACK_stop_playback, clear top")}function Ao(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>m+1&&(T=="off"||T=="on")?(m+=1,k()):T=="song"?k():t==m+1&&T=="on"?(m=0,k()):No()}function ze(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>m+1&&(e.paused||e.pause(),m+=1,k())}navigator.mediaSession.setActionHandler("nexttrack",function(){ze()});function Fe(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,m>0&&(e.pause(),m-=1,k())}navigator.mediaSession.setActionHandler("previoustrack",function(){Fe()});function ko(){T=="off"?(T="on",U(T)):T=="on"?(T="song",U(T)):(T="off",U(T))}function Go(e){e=="off"?(T="off",U(T)):e=="on"?(T="on",U(T)):(e="song",T="on",U(T))}function Jo(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Uo),t.addEventListener("click",qo),n.addEventListener("click",Yo),o.addEventListener("click",Ho),i.addEventListener("click",$o)}function Uo(){$e()}function qo(){He()}function Yo(){ie()}function Ho(){Ye()}function $o(){Ro()}function Ce(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function U(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=y.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop_song;return}}function oe(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=y.icons_pause;return}if(e=="paused"){t.src=y.icons_play;return}}function Qo(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Ke(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",zo)})}function zo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Ke(n)}function Ke(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Fo(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Ko=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Vo(){setTimeout(()=>{let e="MAINcontentPages",t=Ko;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Wo)},1)}async function Wo(e){console.log("the signup event was caught"),e.preventDefault(),Zo();const t=document.getElementById("SETTINGSsignupForm"),n={},o=i=>new Promise((s,a)=>{const c=new FileReader;if(i.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(i)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const i=await fetch(`${I}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const s=await i.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const l=await o(r);n[c.name]=l}}else n[c.name]=c.value;const a=await fetch(`${I}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();re(),Xo(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await i.json();re(),we(),alert("There was an error with the email, check that the details are correct.")}}catch{re(),we(),alert("There was an error, try again")}}function Zo(){const e=document.getElementById("spinner");e.style.display="block"}function re(){const e=document.getElementById("spinner");e.style.display="none"}function Xo(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function we(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const ei=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let X=!1,Le=!1,Pe=!1;async function ti(){await ii()?Ve():Pe||(ni(),Pe=!0)}function ni(){si();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${I}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),Oe(),Vo()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),X)return!1;X=!0;const a=o.value,c=i.value;try{await oi(a,c)?(Le=!0,ai(),Ve(),setTimeout(Oe,2e3)):(Le=!1,ci(),console.log("Login failed. Retry!")),X=!1}catch(r){console.error("Error:",r),X=!1}return!1})}async function oi(e,t){try{const o=await(await fetch(`${I}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function ii(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${I}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function si(){let e="MAINcontentPages",t=ei;document.getElementById(e).innerHTML+=t}let Be=!1;function Oe(){if(Be===!0)return;document.getElementById("SETTINGSmodalID").remove(),Be=!0}function ai(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function ci(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const I="MAIN_API_DOMAIN",E="MAIN_MEDIA_DOMAIN";async function Ve(){So(),Zt(),Xt(),bo(),Jo(),Fo(),Qo(),Zn(),lo(),Cn()}let me=et;for(const[e,t]of Object.entries(y)){const n=new RegExp(`\\{${e}\\}`,"g");me=me.replace(n,t)}document.getElementById("app").innerHTML=me;ti();
