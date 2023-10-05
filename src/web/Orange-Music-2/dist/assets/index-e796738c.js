(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const st=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,at=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,ct=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,rt="/assets/volume_null-e39cf06f.svg",lt="/assets/recently_added-a0a983c6.svg",dt="/assets/volume_3-c8ab0a75.svg",ut="/assets/orange_music_text_logo_black-12e7386c.svg",mt="/assets/volume_2-cfdac9da.svg",pt="/assets/browse_2-85030bba.svg",gt="/assets/volume_1-27e93416.svg",_t="/assets/orange_music_logo_white-2a680ea2.svg",ft="/assets/search_icon-4f5e4381.svg",vt="/assets/orange_music_text_logo_black-91f9e706.png",Et="/assets/up_next_queue_button-14fedba2.svg",yt="/assets/orange_music_logo_yellow-a109ff64.svg",Tt="/assets/playlist-c6e9024f.svg",ht="/assets/loop_button-aef56865.svg",bt="/assets/help_icon-867fec9d.svg",It="/assets/play_button-b1e2d3a4.svg",Ct="/assets/browse-14744f27.svg",Be="/assets/menu_options_button-a1d7bbe3.svg",wt="/assets/orange_music_text_logo_white-7f0ba909.svg",Lt="/assets/back_button-8128cade.svg",Bt="/assets/Albums-2e81dc74.svg",Pt="/assets/songs-016b7188.svg",Ot="/assets/orange_music_logo_black-4d7e4591.svg",Mt="/assets/your_uploaded_songs-06535705.svg",St="/assets/artist-ab677d43.svg",Rt="/assets/shuffle_button-c2f06bc4.svg",Dt="/assets/orange_music_text_logo_white-4907051e.png",xt="/assets/listen_now-c7438154.svg",Nt="/assets/derpy-21c20ae5.svg",jt="/assets/next_button-9a850710.svg",At="/assets/recently_added-7ff28139.svg",kt="/assets/play_button-5eeedbe6.svg",Gt="/assets/browse-e8be8609.svg",Ut="/assets/albums-681507b8.svg",Jt="/assets/listen_now.2-bfa293ac.svg",qt="/assets/your_uploads-02e5c93c.svg",Yt="/assets/play_button.2-fc90fac7.svg",Ht="/assets/listen_now-fb02ffce.svg",$t="/assets/browse.2-15b501dd.svg",Qt="/assets/place_holder_image-d4006a96.svg",zt="/assets/icons_MOGitems_add-19e679f7.svg",Ft="/assets/back-9279721d.svg",Kt="/assets/forwards-605bd405.svg",Vt="/assets/icons_close-57e87944.svg",Wt="/assets/icons_pause-8012f8cc.svg",Zt="/assets/icons_loop-32d1576c.svg",Xt="/assets/icons_loop_song-87f53dc7.svg",en="/assets/icons_play-a5074c5b.svg",tn="/assets/icons_settings-793063fb.svg",v={icons_volumeNull:rt,icons_recentlyAdded:lt,icons_volume3:dt,icons_orangeMusicTextLogoBlack:ut,icons_volume2:mt,icons_browse2:pt,icons_volume1:gt,icons_orangeMusicLogoWhite:_t,icons_searchIcon:ft,icons_orangeMusicTextLogoBlackPng:vt,icons_queueButton:Et,icons_orangeMusicLogoYellow:yt,icons_playlist:Tt,icons_loopButton:ht,icons_helpIcon:bt,icons_playButton:It,icons_browse:Ct,icons_menuOptionsButton:Be,icons_orangeMusicTextLogoWhite:wt,icons_backButton:Lt,icons_Albums:Bt,icons_songs:Pt,icons_orangeMusicLogoBlack:Ot,icons_yourUploadedSongs:Mt,icons_artist:St,icons_shuffleButton:Rt,icons_orangeMusicTextLogoWhitePng:Dt,icons_listenNow:xt,icons_derpy:Nt,icons_nextButton:jt,icons_recentlyAddedV2:At,icons_playButtonV2:kt,icons_browseV2:Gt,icons_albumsV2:Ut,icons_listenNow2V2:Jt,icons_yourUploads:qt,icons_playButton2:Yt,icons_listenNowV2:Ht,icons_browse2V2:$t,v3_placeholder:Qt,icons_MOGitems_add:zt,icons_back:Ft,icons_forwards:Kt,icons_close:Vt,icons_pause:Wt,icons_loop:Zt,icons_loop_song:Xt,icons_play:en,icons_settings:tn};function nn(){let e="topleftContentArea",t=st;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function on(){let e="toprightContentArea",t=at;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function sn(){let e="MAINcontentContainer",t=ct;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const an=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,cn='<div class="MENUmodalBody" id="MENUmodalBody"></div>',rn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;function P(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function ln(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function dn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function fe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function un(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function mn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function Pe(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}const pn=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`,gn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,_n=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`;async function fn(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(a){a.lengthComputable&&a.loaded/a.total*100},n.onload=function(){ro()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${I}/files/upload/photo/`,!0),n.send(o)}async function vn(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await fn(n,t)}const En=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,yn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Tn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Oe=15;let $=0;async function hn(){try{const e=document.getElementById("MAINcontentPages");In();const t=await De(Oe,$);$+=t.length,Cn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function bn(){$=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Me),e.innerHTML=""}function In(){let e="MAINcontentPages",t=En;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Cn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=yn;for(const[s,c]of Object.entries(v)){const r=new RegExp(`\\{${s}\\}`,"g");n=n.replace(r,c)}t.innerHTML+=n,ve(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(s){Me(s,e)});let i;o.addEventListener("touchstart",function(s){s.timeStamp,i=setTimeout(function(){a(s,e)},500)}),o.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(i)});function a(s,c){navigator.vibrate(1e3);const d=s.target.id.split("-")[1],l=c[d].project_id;console.log(l),Se(s,l)}t.addEventListener("scroll",async function(){const s=t.scrollTop,c=t.scrollHeight,r=t.clientHeight;if(s>=c-r){const d=await De(Oe,$);$+=d.length,d.length>0&&ve(d)}})}function ve(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],a=o,s=e[o].img,c=e[o].top,r=e[o].bottom,d=e[o].days,l=un(d);let p=Tn;for(const[g,y]of Object.entries(v)){const O=new RegExp(`\\{${g}\\}`,"g");p=p.replace(O,y)}for(let g=0;g<i.length;g++){const y=i[g].toString(),O=new RegExp(`\\{${y}\\}`,"g");let C="";y==="MOG_image"?C=`${h}/${s}/4/`:y==="MOG_text1"?C=c:y==="MOG_text2"?C=r:y==="MOG_checkedDate"?C=l:y==="MOGI_placeholder_itemID"&&(C=a),p=p.replace(O,C)}t.innerHTML+=p}}async function Me(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,a=await q(i);He(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Se(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;k(`/projects/${i}`)}n.id==="MOGaddNewItem"&&wn()}function Se(e,t){e.stopPropagation(),R([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function wn(){k("/new-project/")}async function Ln(){function e(){const c=window.location.pathname;k(c)}window.addEventListener("popstate",e);const t=await Re("last_state"),n=JSON.parse(t[0].last_state);if(n!=null){const c=window.location.pathname;k(c),Ro(n)}else e();let o="";const i=new Map;function a(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,r=u,d=m,l=ko();l.current_path=c,l.current_queue=r,l.current_index=d;const p=a(l);p!==o&&(Mn("last_state",l),o=p,i.set("playback_states",p))}setInterval(s,1e4)}function Bn(){jn(),hn()}function Pn(e){bn(),Nn()}const Ee={"/":Bn,"/new-project/":Sn,"/projects/:projectID":Pn};function On(){console.log("notFoundHandler")}function k(e){const t=Object.keys(Ee);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const a=Ee[n],s=i.slice(1);a(...s),e!=="/new-project/"&&history.pushState({},"",e);return}}On()}async function le(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${I}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function Mn(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${I}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Re(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${I}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function q(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${I}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function De(e,t){try{const n=localStorage.getItem("JWT");if(!n)return console.log("no jwt"),[];const o={"access-token":n,library_items_to_request_at_a_time:e,no_library_datas_collected:t},s=(await(await fetch(`${I}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).projects;return Array.isArray(s)?s.map(r=>({img:r.picture_url,top:r.project_name,bottom:r.project_contributors,days:r.time_created,project_id:r.project_id})):(console.log("Projects is not an array:",s),[])}catch(n){return console.error("Error:",n),[]}}async function Sn(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},a=`/projects/${(await(await fetch(`${I}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;k(a)}catch(e){console.error("Error:",e)}}const Rn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Dn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`,xn=`<div class="PROJECTviewContainerEnvironment">
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
                <h3>{PROJECTviewMOREartist} | {PROJECTviewMOREyear}</h3>
            </div>
            <div class="PROJECTviewMOREdescriptionContentContainer" contenteditable="true" id="PROJECTviewMOREdescriptionC">
                <textarea id="PROJECTviewMOREdescriptionP"></textarea>
            </div>
        </div>
    </div>
</div>`,oe=[];let de=!1;async function Nn(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await q(o);i.project_id=o,t(i),kn(i)},1);function t(n){Gn(n);const o=n.description;sessionStorage.setItem("description",o),Un(),Jn(),Yn(),Hn(n),$n(n),Fn(n),Vn(n),Zn(),ke(n.project_name),Xn(n.project_id)}}function jn(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function An(){xe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await q(t)).picture_url,a=`${h}/${i}/5/`;n.src=a}function kn(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(o){const i=t.innerText;ke(i),le(e.project_id,"project_name",i)}),n.addEventListener("blur",function(o){const i=n.innerText;le(e.project_id,"project_contributors",i)})}function Gn(e){let t="MAINcontentPages",n=xn;for(const[i,a]of Object.entries(v)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,a)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const a=o[i].toString(),s=new RegExp(`\\{${a}\\}`,"g");let c="";a==="PROJECTviewMOREtitle"?c=e.project_name:a==="PROJECTviewMOREartist"?c=e.project_contributors:a==="PROJECTviewMOREyear"?c=mn(e.time_created):a==="MOG_checkedDate"?c="checkedIndicator":a==="MOGI_placeholder_itemID"?c="temporaryIidentifier":a==="PROJECTviewDisplayImage"&&(c=`${h}/${e.picture_url}/5/`),n=n.replace(s,c)}document.getElementById(t).innerHTML=n}function Un(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Jn(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",P()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let a=0;t.addEventListener("touchend",function(s){const c=new Date().getTime();c-a<300&&(s.stopPropagation(),i()),a=c})}function qn(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Yn(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Hn(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){ye(e)}),n.addEventListener("click",function(o){o.target===n&&ye(e)})}function ye(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),le(e.project_id,"description",n),o.style.display="none",qn(),i.style.zIndex="1"}async function $n(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),a=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),s=await q(e.project_id);t.addEventListener("click",function(){He(s)}),n.addEventListener("click",function(){So(s)}),o.addEventListener("click",function(){Te(event)}),i.addEventListener("click",function(){Te(event)}),a.addEventListener("click",()=>{k("/")})}function Te(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");R([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function Qn(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";zn(e),Q(),k(t)}else Q()}async function zn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${I}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function Fn(e){document.getElementById("PROJECTview_projectAreaContainer"),Kn();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n;if(o!=="{}"){const i=o.songs_json,a=[];if(i)for(const s of i)a.push({img:n.picture_url,songTitle:s.song_name,artistName:n.project_contributors,projectName:Pe(s.song_size),songDuration:`${Math.floor(s.duration/60)}:${(s.duration%60).toString().padStart(2,"0")}`,song_sequence:s.song_sequence,url:s.url});for(let s=0;s<a.length;s++){a[s].projectID=s;const c=a[s];je(c)}t.addEventListener("click",function(s){const c=s.target;if(s.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");r&&(r.getAttribute("data-row-id"),Ne(s))}})}}async function xe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await q(n);o.project_id=n;const i=o,a=i.project_json,s=JSON.parse(a).songs_json,c=[];if(Array.isArray(s))for(const l of s)c.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:Pe(l.song_size),songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const p=c[l];je(p)}e.addEventListener("click",function(l){const p=l.target;if(l.stopPropagation(),p.tagName==="BUTTON"){const g=p.closest(".PROJECTview-projectTable-rowContainer");if(g){const y=g.getAttribute("data-row-id");Ne(l),console.log(`Button in row ${y} clicked.`)}}})}function Ne(e){e.stopPropagation(),e.target,R([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Kn(){let e="PROJECTview_projectAreaContainer",t=Rn;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function je(e){let t="PROJECTview-projectTable",n=Dn;for(const[i,a]of Object.entries(v)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,a)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const a=o[i].toString(),s=new RegExp(`\\{${a}\\}`,"g");let c="";a==="PROJECTviewRow_img"?c=`${h}/${e.img}/3/`:a==="PROJECTviewRow_songTitle"?c=e.songTitle:a==="PROJECTviewRow_artistName"?c=e.artistName:a==="PROJECTviewRow_projectName"?c=e.projectName:a==="PROJECTviewRow_songDuration"?c=e.songDuration:a==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(s,c)}document.getElementById(t).innerHTML+=n}function Vn(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const a of o);Wn(o,i)}}async function Ae(e,t,n,o){const i=new FormData,a=localStorage.getItem("JWT"),s=new XMLHttpRequest,c=document.createElement("div"),r=document.createElement("div");de=!0,i.append("file",e),i.append("project_id",o.project_id),i.append("jwt",a),c.classList.add("progress-bar"),r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),s.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},s.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,xe(),de=!1,oe.length>0){const d=oe.shift();await Ae(d.file,d.uploadBox,d.fileNameLabel,d.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.open("POST",`${I}/files/upload/audio/`,!0),s.send(i)}async function Wn(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div"),a=document.createElement("div");i.classList.add("upload-box"),a.classList.add("PROJECTview_upload_nameLabel"),a.textContent=`${o.name}`,i.appendChild(a),n.appendChild(i);const s={file:o,uploadBox:i,fileNameLabel:a,details:t};if(oe.push(s),!de){const c=oe.shift();await Ae(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function ke(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Zn(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(a,s){a.forEach(c=>{c.isIntersecting&&P()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!P()||!c.isIntersecting&&!P()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&P()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function Xn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,a){eo(i,a)}}function eo(e,t){e.target;const n="update_project_image",o={project_id:t};e.stopPropagation(),R(o,e,n)}async function to(){const e=document.getElementById("TOPRIGHTaccountImg");try{const n=(await Re("profile_picture"))[0].profile_picture,o=`${h}/${n}/1/`;e.src=o,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",no)}catch(t){console.error("Error initializing account image:",t)}}function no(e){e.stopPropagation(),oo(e)}function oo(e){R([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function io(){localStorage.clear(),location.reload()}function R(e,t,n){n===void 0&&ao(e,t),n!==void 0&&n==="update_project_image"&&co(e,t),n!==void 0&&n==="lcd_mobile_body"&&so()}let M=!1;function so(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container");P()&&(t.style.zIndex="40",n.style.zIndex="0");const o=document.getElementById("MENUmodalEnvironment");o.style.display="block";let i=gn;for(const[T,w]of Object.entries(v)){const L=new RegExp(`\\{${T}\\}`,"g");i=i.replace(L,w)}o.innerHTML=i;const a=document.getElementById("LCDMB_seek_input"),s=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const c=document.getElementById("LCDMB_back"),r=document.getElementById("LCDMB_play"),d=document.getElementById("LCDMB_play_icon"),l=document.getElementById("LCDMB_next"),p=document.getElementById("LCDMB_queue_button"),g=document.getElementById("audio"),y=document.getElementById("LCD_mobile_body_song_title"),O=document.getElementById("LCD_mobile_body_artist_title"),C=document.getElementById("LCD_mobile_body_img");function _(){C.src=Je,y.innerText=qe,O.innerText=Ye}g.addEventListener("ended",()=>{_(),M===!0&&x()}),_();function B(){g.paused?d.src=v.icons_playButtonV2:d.src=v.icons_derpy}B();const f=g.duration,G=g.currentTime/f*100;s.style.width=`${G}%`,g.addEventListener("timeupdate",()=>{const T=g.duration,L=g.currentTime/T*100;s.style.width=`${L}%`}),a.addEventListener("input",function(){const T=g.duration,w=a.value;g.currentTime=T*(w/100)}),c.addEventListener("click",()=>{Qe(),_(),M===!0&&x()}),r.addEventListener("click",()=>{ie(),_(),B()}),l.addEventListener("click",()=>{$e(),_(),M===!0&&x()});const se=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];p.addEventListener("click",()=>{M===!1?(U(),M=!0):(K(),M=!1)}),M===!0?U():K();function x(){const T=document.getElementById("LCD_mobile_queue_content_container");T.innerHTML="";for(let w=m+1;w<u.length;w++){const L=u[w],X=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Y=L.img,nt=L.song_name,ot=L.project_contributors;let ae=_n;for(let ce=0;ce<X.length;ce++){const ee=X[ce].toString(),it=new RegExp(`\\{${ee}\\}`,"g");let te="";ee==="queue_item_img"?te=`${h}/${Y}/3/`:ee==="queue_item_song_name"?te=nt:ee==="queue_item_song_artist"&&(te=ot),ae=ae.replace(it,te)}T.innerHTML+=ae}}function U(){function T(w){w.forEach(L=>{document.querySelectorAll("."+L).forEach(Y=>{Y.classList.add("queue_visible")})})}T(se),o.removeEventListener("touchstart",V),o.removeEventListener("touchmove",W),o.removeEventListener("touchend",Z),x()}function K(){function T(w){w.forEach(L=>{document.querySelectorAll("."+L).forEach(Y=>{Y.classList.remove("queue_visible")})})}T(se),o.addEventListener("touchstart",V,!1),o.addEventListener("touchmove",W,!1),o.addEventListener("touchend",Z,!1)}o.addEventListener("touchstart",V,!1),o.addEventListener("touchmove",W,!1),o.addEventListener("touchend",Z,!1);let ge=0,_e=0;function V(T){M===!1&&(ge=T.touches[0].clientY)}function W(T){T.preventDefault()}function Z(T){_e=T.changedTouches[0].clientY,_e-ge>70&&(Q(),o.removeEventListener("touchstart",V),o.removeEventListener("touchmove",W),o.removeEventListener("touchend",Z))}}let H;function ao(e,t){H=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const a=document.querySelector("main"),s=document.querySelector(".topHalf-container");P()&&(a.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=cn,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",Ge);let d=o+"px",l=i+"px";if(r.style.left=d,r.style.top=l,H&&n===""){const f=H.getBoundingClientRect();o=f.left+window.scrollX,i=f.top+window.scrollY;let D=o+"px",G=i+"px";r.style.left=D,r.style.top=G}for(let f=0;f<e.length;f++)uo(e[f]);const g=r.children[0];n===""?g.focus():n==="mouse"&&(g.focus(),g.blur());function y(f){(f.key==="Escape"||f.keyCode===27)&&(document.removeEventListener("keydown",y),Q())}document.addEventListener("keydown",y);const O=r.offsetWidth,C=r.offsetHeight,_=lo("MENUmodalBody");_.xOverflow==!0&&(d=o-O+"px",r.style.left=d),_.yOverflow==!0&&(l=i-C+"px",r.style.top=l);const B=r.getElementsByClassName("MENUmodalItemContainer");for(let f=0;f<B.length;f++){const D=B[f];D.setAttribute("data-menu-item-id",f),D.addEventListener("click",function(G){G.stopPropagation();const x=G.target.getAttribute("data-menu-item-id"),U=e[x].function,K=e[x].optionalParams;if(U=="TEST")console.log("the button worked");else if(U!="None"){mo[U](K);return}else return})}}function co(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),a=document.querySelector(".topHalf-container");P()&&(i.style.zIndex="40",a.style.zIndex="0"),i.style.zIndex="2";const s=document.getElementById("MENUmodalEnvironment");s.innerHTML=rn,s.style.display="block";const c=document.getElementById("MENUmodalBody");s.addEventListener("click",Ge);let r=n+"px",d=o+"px";c.style.left=r,c.style.top=d;const l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),p=document.getElementById("MENUmodalBody_image_select_file_select_button"),g=document.getElementById("MENUmodalBody_image_select_preview_area"),y=document.getElementById("MENUmodalBody_image_select_submit_button"),O=document.getElementById("MENUmodalBody_image_select_submit_button_container");function C(_,B){if(_){const f=URL.createObjectURL(_),D=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");g.src=f,y.style.visibility="visible",O.style.outline="3px solid var(--primary)",y.addEventListener("click",()=>{vn(_,B.project_id),D.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",_=>{_.preventDefault()}),l.addEventListener("drop",_=>{_.preventDefault();const B=_.dataTransfer.files;C(B[0],e)}),p.addEventListener("click",()=>{const _=document.createElement("input");_.type="file",_.accept="image/*",_.addEventListener("change",B=>{const f=B.target.files[0];C(f,e)}),_.click()})}function ro(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Q(),An()}function lo(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,a=t.getBoundingClientRect().left,s=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=i+a,d=c+s;let l=!1,p=!1;return r>n&&(l=!0),d>o&&(p=!0),{xOverflow:l,yOverflow:p}}function uo(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:(o="var(--text)",P()&&(o="var(--text)"));const i=document.getElementById("MENUmodalBody");let a=new RegExp("\\{MENU_item_text\\}","g"),s=pn.replace(a,t);if(a=new RegExp("\\{MENU_item_colour\\}","g"),s=s.replace(a,o),n!=="None"){a=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";s=s.replace(a,c);for(const[r,d]of Object.entries(v)){const l=new RegExp(`\\{${r}\\}`,"g");s=s.replace(l,d)}i.innerHTML+=s;return}else{s=s.replace(/<img[^>]+>/g,""),i.innerHTML+=s;return}}function Ge(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function Q(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),H&&H.focus()}const mo={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Qn(e)},PLAYBACK_add_songs_to_queue(e){Do(e)},SIGN_OUT_USER(e){io()}};let N="hidden";function po(){sn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");ue(N),e.addEventListener("click",go),t.addEventListener("click",_o),S()}function go(){if(N==="hidden"){N="visible",ue(N);return}if(N==="visible"){N="hidden",ue(N);return}}function ue(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",ln&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function S(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=m+1;t<u.length;t++){u[t].id=t;const n=u[t],o=bo(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",ho),i.dataset.songId=n.id;const a=i.querySelector(".QUEUE-item-image-removeIndicator");a.addEventListener("click",yo),a.dataset.songID=n.id;const s=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.dataset.songSet=n.id,s.addEventListener("click",function(c){c.target===s&&To(c)}),i.addEventListener("dragstart",fo),i.addEventListener("dragover",vo),i.addEventListener("drop",Eo),e.appendChild(i)}}function _o(){const e=m+1;e>=0&&e<u.length?u.splice(e):u.length=0,S()}function fo(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function vo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Eo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),a=u.indexOf(o),s=u.indexOf(i);a!==-1&&s!==-1&&(u.splice(a,1),u.splice(s,0,o),b.splice(a,1),b.splice(s,0,o),S())}function yo(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),b.splice(o,1)),S()}function To(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];R(o,e)}function ho(e){}function bo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,a=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let s=an;for(let r=0;r<t.length;r++){const d=t[r].toString(),l=new RegExp(`\\{${d}\\}`,"g");let p="";d==="QUEUE_item_image"?p=`${h}/${n}/3/`:d==="QUEUE_item_title"?p=o:d==="QUEUE_item_artist"?p=i:d==="icons_menuOptionsButton"?p=Be:d==="QUEUE_item_timeIndicator"&&(p=a),s=s.replace(l,p)}s=s.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=s,c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML}const Io=`<div class="LCDbody">
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
</div>`;function Co(){Lo(),Ue(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Bo(t)}),Po(),P()&&document.getElementById("LCDbody").addEventListener("click",wo)}function wo(e){e.stopPropagation(),R({param:"cheese"},e,"lcd_mobile_body")}function Lo(){let e="LCDbody",t=Io;for(const[o,i]of Object.entries(v)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),a=new RegExp(`\\{${i}\\}`,"g");let s="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(s=""),t=t.replace(a,s)}document.getElementById(e).innerHTML=t}function Ue(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=a(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function a(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function s(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const c=s();window.addEventListener("resize",c),i()}function Bo(e){e.stopPropagation(),e.target,R([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Po(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Oo)})}function Oo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),jo(n)}function Mo(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],b=[],m=0,Je="",qe="",Ye="";document.getElementById("audio");document.getElementById("PLAYERsource");let E="off",j="off",z="paused";function He(e){u=[],m=0,u=pe(e),u.length>0&&(z="playing",A())}function So(e){u=[],m=0,u=pe(e),u.length>0&&(j="off",ze(),z="playing",A())}function pe(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,a=e.songs_json;try{for(const s of a){const c=s.song_name,r=s.duration,d=s.url;t.push({img:i,song_name:c,url:d,duration:r,project_name:o,project_contributors:n})}}catch{}return t}function Ro(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,m=n,Yo(o),u.length>0&&Go(i)}async function Do(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await q(t),i=pe(o);if(n==="later")u=u.concat(i),b=b.concat(i);else if(n==="next"){let a=u.slice(0,m+1),s=u.slice(m+1);u=a,u=u.concat(i),u=u.concat(s),a=b.slice(0,m+1),s=b.slice(m+1),b=a,b=b.concat(i),b=b.concat(s)}S()}function ie(){xo()}function xo(){const e=document.getElementById("audio");e.paused?(F("playing"),z="playing",e.play().then(t=>Ve()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(z="paused",F("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ie()});navigator.mediaSession.setActionHandler("pause",function(){ie()});function $e(){Ze()}function Qe(){Xe()}function No(){document.getElementById("audio").addEventListener("ended",Jo)}function jo(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ao(){qo()}function ko(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:E,PLAYBACK_shuffle_state:j,progress:t}}function ze(){if(j==="off"){j="on",he(j);const t=m+1;b=[...u],u.slice(0,m);const n=u.slice(t);dn(n);const o=n.length;u.splice(m,o,...n),S()}else{j="off",he(j);const t=[...b],i=document.getElementById("PLAYERsource").src.split("/"),a=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===a&&(m=e);S()}}function A(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${h}/${u[m].url}/3/`,e.load(),z==="playing"?(e.play().then(n=>Ve()).catch(n=>console.log(n)),F("playing")):F("paused"),Ke(),Fe()}function Go(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${h}/${u[m].url}/3/`,t.load(),t.currentTime=e,F("paused"),Ke(),Fe()}function Fe(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,a=Math.floor(o)-i,s=`"-${fe(a)}"`,r=`"${fe(Math.floor(i))}"`,d=i/o*100,l=`${d}%`;Mo(r,s),t.style.setProperty("--LCD-seekbar-width",l),t.style.setProperty("--LCD-seekbar-indicator-left",l),n.value=d,We()})}function Ke(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[m].song_name,t.innerHTML=u[m].song_name,n.innerHTML=u[m].project_contributors,Ue(),o.src=`${h}/${u[m].img}/3/`,i.src=`${h}/${u[m].img}/3/`,Je=`${h}/${u[m].img}/5/`,qe=u[m].song_name,Ye=u[m].project_contributors,S()}function Ve(){let e=u[m];const t=[{src:`${h}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${h}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${h}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${h}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${h}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${h}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),We()}function We(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Uo(){console.log("PLAYBACK_stop_playback, clear top")}function Jo(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>m+1&&(E=="off"||E=="on")?(m+=1,A()):E=="song"?A():t==m+1&&E=="on"?(m=0,A()):Uo()}function Ze(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>m+1&&(e.pause(),m+=1,A())}navigator.mediaSession.setActionHandler("nexttrack",function(){Ze()});function Xe(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,m>0&&(e.pause(),m-=1,A())}navigator.mediaSession.setActionHandler("previoustrack",function(){Xe()});function qo(){E=="off"?(E="on",J(E)):E=="on"?(E="song",J(E)):(E="off",J(E))}function Yo(e){e=="off"?(E="off",J(E)):e=="on"?(E="on",J(E)):(e="song",E="on",J(E))}function Ho(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",$o),t.addEventListener("click",Qo),n.addEventListener("click",zo),o.addEventListener("click",Fo),i.addEventListener("click",Ko)}function $o(){ze()}function Qo(){Qe()}function zo(){ie()}function Fo(){$e()}function Ko(){Ao()}function he(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function J(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=v.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=v.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=v.icons_loop_song;return}}function F(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=v.icons_pause;return}if(e=="paused"){t.src=v.icons_play;return}}function Vo(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){et(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Wo)})}function Wo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;et(n)}function et(e){function t(i,a,s){return i>=a&&i<=s}function n(i){const a=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let s=0;s<4;s++){let c=a[s];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Zo(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Xo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,ei=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ti(){setTimeout(()=>{let e="MAINcontentPages",t=ei;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ni)},1)}async function ni(e){console.log("the signup event was caught"),e.preventDefault(),oi();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${I}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const s of t.elements)if(s.type==="file"){const c=s.files[0];if(c){const r=await convertImageToBase64(c);n[s.name]=r}}else n[s.name]=s.value;const a=await fetch(`${I}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const s=await a.json();re(),ii(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const s=await a.json();alert("There was an error, try again")}}else{const i=await o.json();re(),be(),alert("There was an error with the email, check that the details are correct.")}}catch{re(),be(),alert("There was an error, try again")}}function oi(){const e=document.getElementById("spinner");e.style.display="block"}function re(){const e=document.getElementById("spinner");e.style.display="none"}function ii(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function be(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ne=!1,Ie=!1,Ce=!1,we=!1;async function si(){await ri()?tt():Ie||(ai(),Ie=!0)}function ai(){li();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${I}/status/are_signups_allowed/`).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{t=a.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Le(),ti()}))}).catch(a=>{console.error("Fetch error:",a)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async a=>{if(a.preventDefault(),ne)return!1;ne=!0;const s=o.value,c=i.value;try{await ci(s,c)?(we=!0,di(),tt(),setTimeout(Le,2e3)):(we=!1,ui(),console.log("Login failed. Retry!")),ne=!1}catch(r){console.error("Error:",r),ne=!1}return!1})}async function ci(e,t){try{const o=await(await fetch(`${I}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function ri(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${I}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function li(){let e="MAINcontentPages",t=Xo;document.getElementById(e).innerHTML+=t}function Le(){if(Ce===!0)return;Ce=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function di(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function ui(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const mi=`<!-- audio tag -->
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
</div>`;const I="MAIN_API_DOMAIN",h="MAIN_MEDIA_DOMAIN";async function tt(){No(),nn(),on(),Co(),Ho(),Zo(),Vo(),to(),po(),Ln()}let me=mi;for(const[e,t]of Object.entries(v)){const n=new RegExp(`\\{${e}\\}`,"g");me=me.replace(n,t)}document.getElementById("app").innerHTML=me;si();
