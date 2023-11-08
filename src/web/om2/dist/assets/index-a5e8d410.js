(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const xe="/assets/menu_options_button-a1d7bbe3.svg",mt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,pt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,gt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,_t="/assets/volume_null-e39cf06f.svg",vt="/assets/recently_added-a0a983c6.svg",ft="/assets/volume_3-c8ab0a75.svg",Et="/assets/orange_music_text_logo_black-12e7386c.svg",yt="/assets/volume_2-cfdac9da.svg",bt="/assets/browse_2-85030bba.svg",Tt="/assets/volume_1-27e93416.svg",ht="/assets/orange_music_logo_white-2a680ea2.svg",It="/assets/search_icon-4f5e4381.svg",wt="/assets/orange_music_text_logo_black-91f9e706.png",Ct="/assets/up_next_queue_button-14fedba2.svg",Lt="/assets/orange_music_logo_yellow-a109ff64.svg",Bt="/assets/playlist-c6e9024f.svg",Pt="/assets/loop_button-aef56865.svg",Ot="/assets/help_icon-867fec9d.svg",St="/assets/play_button-b1e2d3a4.svg",Mt="/assets/browse-14744f27.svg",xt="/assets/orange_music_text_logo_white-7f0ba909.svg",Rt="/assets/back_button-8128cade.svg",Dt="/assets/Albums-2e81dc74.svg",At="/assets/songs-016b7188.svg",Nt="/assets/orange_music_logo_black-4d7e4591.svg",jt="/assets/your_uploaded_songs-06535705.svg",kt="/assets/artist-ab677d43.svg",Ut="/assets/shuffle_button-c2f06bc4.svg",Gt="/assets/orange_music_text_logo_white-4907051e.png",Jt="/assets/listen_now-c7438154.svg",qt="/assets/derpy-21c20ae5.svg",Yt="/assets/next_button-9a850710.svg",Ht="/assets/recently_added-7ff28139.svg",$t="/assets/play_button-5eeedbe6.svg",Qt="/assets/browse-e8be8609.svg",zt="/assets/albums-681507b8.svg",Ft="/assets/listen_now.2-bfa293ac.svg",Kt="/assets/your_uploads-02e5c93c.svg",Vt="/assets/play_button.2-fc90fac7.svg",Wt="/assets/listen_now-fb02ffce.svg",Zt="/assets/browse.2-15b501dd.svg",Xt="/assets/place_holder_image-d4006a96.svg",en="/assets/icons_MOGitems_add-19e679f7.svg",tn="/assets/back-9279721d.svg",nn="/assets/forwards-605bd405.svg",on="/assets/icons_close-57e87944.svg",sn="/assets/icons_pause-8012f8cc.svg",an="/assets/icons_loop-32d1576c.svg",cn="/assets/icons_loop_song-87f53dc7.svg",rn="/assets/icons_play-a5074c5b.svg",ln="/assets/icons_settings-793063fb.svg",dn="/assets/love-07ac5006.svg",E={icons_volumeNull:_t,icons_recentlyAdded:vt,icons_volume3:ft,icons_orangeMusicTextLogoBlack:Et,icons_volume2:yt,icons_browse2:bt,icons_volume1:Tt,icons_orangeMusicLogoWhite:ht,icons_searchIcon:It,icons_orangeMusicTextLogoBlackPng:wt,icons_queueButton:Ct,icons_orangeMusicLogoYellow:Lt,icons_playlist:Bt,icons_loopButton:Pt,icons_helpIcon:Ot,icons_playButton:St,icons_browse:Mt,icons_menuOptionsButton:xe,icons_orangeMusicTextLogoWhite:xt,icons_backButton:Rt,icons_Albums:Dt,icons_songs:At,icons_orangeMusicLogoBlack:Nt,icons_yourUploadedSongs:jt,icons_artist:kt,icons_shuffleButton:Ut,icons_orangeMusicTextLogoWhitePng:Gt,icons_listenNow:Jt,icons_derpy:qt,icons_nextButton:Yt,icons_recentlyAddedV2:Ht,icons_playButtonV2:$t,icons_browseV2:Qt,icons_albumsV2:zt,icons_listenNow2V2:Ft,icons_yourUploads:Kt,icons_playButton2:Vt,icons_listenNowV2:Wt,icons_browse2V2:Zt,v3_placeholder:Xt,icons_MOGitems_add:en,icons_back:tn,icons_forwards:nn,icons_close:on,icons_pause:sn,icons_loop:an,icons_loop_song:cn,icons_play:rn,icons_settings:ln,current_year:new Date().getFullYear(),icons_love:dn};function un(){let e="topleftContentArea",t=mt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function mn(){let e="toprightContentArea",t=pt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function pn(){let e="MAINcontentContainer",t=gt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const gn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function _n(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function vn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function be(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function fn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function En(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ge(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}const yn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,bn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,Tn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,hn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,In=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,wn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Re=15;let z=0;async function Cn(){try{const e=document.getElementById("MAINcontentPages");Ln();const t=await Ue(Re,z);z+=t.length,Bn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function De(){z=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ae),e.innerHTML=""}function Ln(){let e="MAINcontentPages",t=hn;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Bn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=In;for(const[a,c]of Object.entries(E)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Te(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Ae(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],d=c[r].project_id;console.log(d),Ne(a,d)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await Ue(Re,z);z+=r.length,r.length>0&&Te(r)}})}function Te(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,c=e[o].top,l=e[o].bottom,r=e[o].days,d=fn(r);let m=wn;for(const[_,g]of Object.entries(E)){const B=new RegExp(`\\{${_}\\}`,"g");m=m.replace(B,g)}for(let _=0;_<i.length;_++){const g=i[_].toString(),B=new RegExp(`\\{${g}\\}`,"g");let b="";g==="MOG_image"?b=`${y}/${a}/4/`:g==="MOG_text1"?b=c:g==="MOG_text2"?b=l:g==="MOG_checkedDate"?b=d:g==="MOGI_placeholder_itemID"&&(b=s),m=m.replace(B,b)}t.innerHTML+=m}}async function Ae(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await H(i);We(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Ne(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;A(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Pn()}function Ne(e,t){e.stopPropagation(),k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Pn(){A("/new-project/")}const On=`<div class="ADMINusersTableInfoRow">
    <div>
        <input id="admin_users_table_check_box_{checkbox_number}" type="checkbox" class="admin_users_table_checkbox">
        <label style="display: none; visibility: hidden;" for="admin_users_table_check_box_{checkbox_number}">
            Select User
        </label>
    </div>
    <div class="settings_admin_views_users_table_view USERNAMEfieldWithImageContainer">
        <img src="{profile_picture_url}">
        <div>{Username}</div>
    </div>
    <div class="settings_admin_views_users_table_view"> {Email}</div>
    <div class="settings_admin_views_users_table_view"> {UUID}</div>
    <div class="settings_admin_views_users_table_view"> {Verified}</div>
    <div class="settings_admin_views_users_table_view"> {Admin}</div>
    <div class="settings_admin_views_users_table_view"> {Space_Used}</div>
</div>`,Sn=`<h1>Admin</h1>
<p>You are an admin user</p>
<br>
<p id="settings_admin_selected_items_visualition">Selected Items: 0</p>
<div class="ADMINusersTableEnvironment" id="usersTableEnvironment">
    <div class="ADMINusersTableTopRow">
        <div></div>
        <div>Username</div>
        <div>Email</div>
        <div>UUID</div>
        <div>Payee</div>
        <admin>Admin</admin>
        <div>Bytes</div>
    </div>
    <div class="ADMINusersTableInforRowsContainer" id="usersTableInforRowsContainer">
    </div>
</div>
<br><br>
<form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
    <label for="user_to_delete" class="SETTINGSmodalFormAreaText">DELETE: User ID</label><br>
    <input type="text" name="user_to_delete" id="user_to_delete" class="SETTINGSmodalFormInput" required>
    <br><br>
    <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
</form>`,Mn=`<h1>Admin</h1>
<p>You are not an admin user</p>`,xn=`<h1>General</h1>
<div class="settings_all_colours_display">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<p>OM2 is a project made by <a href="https://github.com/LeoAnker0">Leo Anker</a></p>
<p>OM2 is on <a href="https://github.com/LeoAnker0/Orange-Music-2">github</a></p>
<p>&copy 2023-{current_year} Leo Anker</p>
<br>
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Rn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,Dn=`<div class="settings_container">
    <div class="settings_body_top_banner">
        <button id="settings_go_to_other_content_button">
            <img src="{icons_back}" height="16" width="16">
        </button>
    </div>
    <div class="settings_content">
        <div class="settings_views_container">
            <div class="settings_views_positioner">
                <h1>Settings</h1>
                <div class="settings_views_list">
                    <button class="settings_views_list_item" id="settings_button_general">
                        General
                    </button>
                    <button class="settings_views_list_item" id="settings_button_user">
                        User
                    </button>
                    <button class="settings_views_list_item" id="settings_button_admin">
                        Admin
                    </button>
                </div>
            </div>
        </div>
        <div class="settings_interaction_view">
            <div class="settings_interaction_container" id="view_container">
            </div>
        </div>
    </div>
</div>`;let _e;async function An(){const e=document.getElementById("TOPRIGHTaccountImg");try{const n=(await ve("profile_picture"))[0].profile_picture;_e=n;const o=`${y}/${n}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=o,i.addEventListener("click",Nn)}catch(t){console.error("Error initializing account image:",t)}}function Nn(e){e.stopPropagation(),jn(e)}function jn(e){k([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function kn(){localStorage.clear(),location.reload()}let je="admin";const ie=[{name:"general",markup:xn,button_id:"settings_button_general",function:Gn},{name:"user",markup:Rn,button_id:"settings_button_user",function:Jn},{name:"admin",markup:Mn,button_id:"settings_button_admin",function:qn}];function Un(){const e=document.getElementById("MAINcontentPages");let t=Dn;for(const[i,s]of Object.entries(E)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");he(je);for(var o=ie.length-1;o>=0;o--){const i=ie[o].button_id;document.getElementById(i).addEventListener("click",function(a){const c=a.srcElement.id,r=ie.find(d=>d.button_id===c).name;he(r)})}n.addEventListener("click",function(){A("/")})}function ke(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function he(e){je=e;const t=["users_img"],n=document.getElementById("view_container"),o=ie.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(E)){const c=new RegExp(`\\{${s}\\}`,"g");i=i.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${y}/${_e}/4/`),i=i.replace(c,l)}n.innerHTML=i,o.function()}function Gn(){console.log("general")}function Jn(){console.log("user")}async function qn(){if((await ve("admin"))[0].admin!==!0)return;const n=["users_img"],o=document.getElementById("view_container");let i=Sn,s=[];for(const[r,d]of Object.entries(E)){const m=new RegExp(`\\{${r}\\}`,"g");i=i.replace(m,d)}for(let r=0;r<n.length;r++){const d=n[r].toString(),m=new RegExp(`\\{${d}\\}`,"g");let _="";d==="users_img"&&(_=`${y}/${_e}/4/`),i=i.replace(m,_)}o.innerHTML=i;const a=await Vn(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const d=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],m=a[r].username,_=a[r].uuid,g=a[r].verified,B=a[r].email,b=a[r].admin,v=r;let C=a[r].storage_used;C=ge(C);let f=On,P=a[r].profile_picture;P=`${y}/${P}/1/`;for(let x=0;x<d.length;x++){const S=d[x].toString(),R=new RegExp(`\\{${S}\\}`,"g");let I="";S==="Username"?I=m:S==="Email"?I=B:S==="UUID"?I=_:S==="Verified"?I=g:S==="Space_Used"?I=C:S==="profile_picture_url"?I=P:S==="checkbox_number"?I=v:S==="Admin"&&(I=b),f=f.replace(R,I)}c.innerHTML+=f}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const d=c.querySelectorAll('input[type="checkbox"]'),m=[],_=document.getElementById("settings_admin_selected_items_visualition");d.forEach(function(g){if(g.checked){const v={id:g.id.replace("admin_users_table_check_box_",""),value:g.value};m.push(v)}}),m.forEach(function(g){const b=a[g.id].uuid;s.push(b)}),_.innerHTML=`Selected Items: ${s.length}`}}async function Yn(){const e=await ve("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;A(c),Vo(t)}else a();function i(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=u,r=p,d=ni();d.current_path=c,d.current_queue=l,d.current_index=r;const m=i(d);m!==o&&(Fn("last_state",d),o=m,n.set("playback_states",m))}function a(){A(currentPath)}}function Hn(){Ge(),ke(),Cn()}function $n(e){console.log("handle project view called"),De(),ke(),eo(e)}function Qn(){De(),Ge(),Un()}const Ie={"/":Hn,"/new-project/":Kn,"/projects/:projectID":$n,"/settings/":Qn};function zn(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${y}/assets/hippo.webp">
    `;function n(){A("/")}}function A(e){const t=Object.keys(Ie);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ie[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}zn()}async function Fn(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${w}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function ve(e){try{const t={wanted_column:e};return(await(await fetch(`${w}/users/get_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()).response}catch(t){console.error("Error:",t)}}async function de(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${w}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function H(e){try{return(await(await fetch(`${w}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ue(e,t){try{const n={library_items_to_request_at_a_time:e,no_library_datas_collected:t},s=(await(await fetch(`${w}/projects/get_projects`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).projects;return Array.isArray(s)?s.map(c=>({img:c.PictureURL,top:c.ProjectName,bottom:c.ProjectContributors,days:c.TimeCreated,project_id:c.ProjectID})):(console.log("Projects is not an array:",s),[])}catch(n){return console.error("Error:",n),[]}}async function Kn(){try{const o=`/projects/${(await(await fetch(`${w}/projects/new-project-id/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;A(o)}catch(e){console.error("Error:",e)}}async function Vn(){try{return(await(await fetch(`${w}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}const Wn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Zn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`,Xn=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,se=[];let ue=!1;async function eo(e){setTimeout(async()=>{console.log("projectID: ",e);const n=await H(e);n.project_id=e,t(n),no(n)},1);function t(n){oo(n);const o=n.description;sessionStorage.setItem("description",o),io(),so(),co(),ro(n),lo(n),po(n),_o(n),fo(),$e(n.project_name),Eo(n.project_id)}}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function to(){Je();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await H(t)).picture_url,s=`${y}/${i}/5/`;n.src=s}function no(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(o){const i=t.innerText;$e(i),de(e.project_id,"project_name",i)}),n.addEventListener("blur",function(o){const i=n.innerText;de(e.project_id,"project_contributors",i)})}function oo(e){let t="MAINcontentPages",n=Xn;for(const[i,s]of Object.entries(E)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=En(e.time_created):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${y}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function io(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function so(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",D()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function ao(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function co(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function ro(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){we(e)}),n.addEventListener("click",function(o){o.target===n&&we(e)})}function we(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),de(e.project_id,"description",n),o.style.display="none",ao(),i.style.zIndex="1"}async function lo(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await H(e.project_id);t.addEventListener("click",function(){We(a)}),n.addEventListener("click",function(){Ko(a)}),o.addEventListener("click",function(){Ce(event)}),i.addEventListener("click",function(){Ce(event)}),s.addEventListener("click",()=>{A("/")})}function Ce(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function uo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";mo(e),F(),A(t)}else F()}async function mo(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${w}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function po(e){document.getElementById("PROJECTview_projectAreaContainer"),go();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n;if(o!=="{}"){const i=o.songs_json,s=[];if(i)for(const a of i)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:ge(a.song_size),songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];Ye(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const l=c.closest(".PROJECTview-projectTable-rowContainer");l&&(l.getAttribute("data-row-id"),qe(a))}})}}async function Je(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await H(n);o.project_id=n;const i=o,s=i.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const d of a)c.push({img:i.picture_url,songTitle:d.song_name,artistName:i.project_contributors,projectName:ge(d.song_size),songDuration:`${Math.floor(d.duration/60)}:${(d.duration%60).toString().padStart(2,"0")}`,song_sequence:d.song_sequence,url:d.url});const l=document.getElementById("PROJECTview-projectTable"),r=l.children;for(let d=r.length-1;d>0;d--)l.removeChild(r[d]);for(let d=0;d<c.length;d++){c[d].projectID=d;const m=c[d];Ye(m)}e.addEventListener("click",function(d){const m=d.target;if(d.stopPropagation(),m.tagName==="BUTTON"){const _=m.closest(".PROJECTview-projectTable-rowContainer");if(_){const g=_.getAttribute("data-row-id");qe(d),console.log(`Button in row ${g} clicked.`)}}})}function qe(e){e.stopPropagation(),e.target,k([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function go(){let e="PROJECTview_projectAreaContainer",t=Wn;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Ye(e){let t="PROJECTview-projectTable",n=Zn;for(const[i,s]of Object.entries(E)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${y}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function _o(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);vo(o,i)}}async function He(e,t,n,o){const i=new FormData,s=localStorage.getItem("JWT"),a=new XMLHttpRequest,c=document.createElement("div"),l=document.createElement("div");ue=!0,i.append("file",e),i.append("project_id",o.project_id),i.append("jwt",s),c.classList.add("progress-bar"),l.classList.add("progress-fill"),c.appendChild(l),t.appendChild(c),a.upload.onprogress=function(r){if(r.lengthComputable){const d=r.loaded/r.total*100;l.style.width=d+"%",d===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",l.classList.add("complete"),n.textContent=`${e.name}`,Je(),ue=!1,se.length>0){const r=se.shift();await He(r.file,r.uploadBox,r.fileNameLabel,r.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",l.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${w}/files/upload/audio/`,!0),a.send(i)}async function vo(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div"),s=document.createElement("div");i.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i);const a={file:o,uploadBox:i,fileNameLabel:s,details:t};if(se.push(a),!ue){const c=se.shift();await He(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function $e(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function fo(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!D()||!c.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function Eo(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){yo(i,s)}}function yo(e,t){e.target;const n="update_project_image",o={project_id:t};e.stopPropagation(),k(o,e,n)}const bo=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function To(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){Bo()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${w}/files/upload/photo/`,!0),n.send(o)}async function ho(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await To(n,t)}const Io='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let Q,N=!1;function k(e,t,n){n===void 0&&Co(e,t),n!==void 0&&n==="update_project_image"&&Lo(e,t),n!==void 0&&n==="lcd_mobile_body"&&wo()}function wo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=Tn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[h,O]of Object.entries(E)){const M=new RegExp(`\\{${h}\\}`,"g");i=i.replace(M,O)}o.style.display="block",o.innerHTML=i;const r=document.getElementById("LCD_mobile_body_song_title"),d=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),_=s.duration,B=s.currentTime/_*100,b=document.getElementById("LCDMB_seek_input"),v=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const C=document.getElementById("LCDMB_back"),f=document.getElementById("LCDMB_play"),P=document.getElementById("LCDMB_play_icon"),x=document.getElementById("LCDMB_next"),S=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{R(),N===!0&&q()}),R(),I(),v.style.width=`${B}%`,s.addEventListener("timeupdate",()=>{const h=s.duration,M=s.currentTime/h*100;v.style.width=`${M}%`}),b.addEventListener("input",function(){const h=s.duration,O=b.value;s.currentTime=h*(O/100)}),C.addEventListener("click",()=>{Xe(),R(),N===!0&&q()}),f.addEventListener("click",()=>{ae(),R(),I()}),x.addEventListener("click",()=>{Ze(),R(),N===!0&&q()}),S.addEventListener("click",()=>{N===!1?(Ee(),N=!0):(ye(),N=!1)}),N===!0?Ee():ye(),o.addEventListener("touchstart",W,!1),o.addEventListener("touchmove",Z,!1),o.addEventListener("touchend",X,!1);function R(){m.src=Fe,r.innerText=Ke,d.innerText=Ve}function I(){s.paused?P.src=E.icons_playButtonV2:P.src=E.icons_derpy}function q(){const h=document.getElementById("LCD_mobile_queue_content_container");h.innerHTML="";for(let O=p+1;O<u.length;O++){const M=u[O],ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],$=M.img,lt=M.song_name,dt=M.project_contributors;let ce=bn;for(let re=0;re<ee.length;re++){const te=ee[re].toString(),ut=new RegExp(`\\{${te}\\}`,"g");let ne="";te==="queue_item_img"?ne=`${y}/${$}/3/`:te==="queue_item_song_name"?ne=lt:te==="queue_item_song_artist"&&(ne=dt),ce=ce.replace(ut,ne)}h.innerHTML+=ce}}function Ee(){function h(O){O.forEach(M=>{document.querySelectorAll("."+M).forEach($=>{$.classList.add("queue_visible")})})}h(a),o.removeEventListener("touchstart",W),o.removeEventListener("touchmove",Z),o.removeEventListener("touchend",X),q()}function ye(){function h(O){O.forEach(M=>{document.querySelectorAll("."+M).forEach($=>{$.classList.remove("queue_visible")})})}h(a),o.addEventListener("touchstart",W,!1),o.addEventListener("touchmove",Z,!1),o.addEventListener("touchend",X,!1)}function W(h){N===!1&&(c=h.touches[0].clientY)}function Z(h){h.preventDefault()}function X(h){l=h.changedTouches[0].clientY,l-c>70&&(F(),o.removeEventListener("touchstart",W),o.removeEventListener("touchmove",Z),o.removeEventListener("touchend",X))}}function Co(e,t){Q=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=Io,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=o+"px",d=i+"px";if(c.addEventListener("click",Qe),l.style.left=r,l.style.top=d,Q&&n===""){const f=Q.getBoundingClientRect();o=f.left+window.scrollX,i=f.top+window.scrollY;let P=o+"px",x=i+"px";l.style.left=P,l.style.top=x}for(let f=0;f<e.length;f++)Oo(e[f]);const _=l.children[0],g=l.offsetWidth,B=l.offsetHeight,b=Po("MENUmodalBody"),v=l.getElementsByClassName("MENUmodalItemContainer");n===""?_.focus():n==="mouse"&&(_.focus(),_.blur()),document.addEventListener("keydown",C),b.xOverflow==!0&&(r=o-g+"px",l.style.left=r),b.yOverflow==!0&&(d=i-B+"px",l.style.top=d);for(let f=0;f<v.length;f++){const P=v[f];P.setAttribute("data-menu-item-id",f),P.addEventListener("click",function(x){x.stopPropagation();const R=x.target.getAttribute("data-menu-item-id"),I=e[R].function,q=e[R].optionalParams;if(I=="TEST")console.log("the button worked");else if(I!="None"){So[I](q);return}else return})}function C(f){(f.key==="Escape"||f.keyCode===27)&&(document.removeEventListener("keydown",C),F())}}function Lo(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",l=o+"px";D()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2",a.innerHTML=yn,a.style.display="block",a.addEventListener("click",Qe);const r=document.getElementById("MENUmodalBody"),d=document.getElementById("MENUmodalBody_image_select_file_drop_area"),m=document.getElementById("MENUmodalBody_image_select_file_select_button"),_=document.getElementById("MENUmodalBody_image_select_preview_area"),g=document.getElementById("MENUmodalBody_image_select_submit_button"),B=document.getElementById("MENUmodalBody_image_select_submit_button_container");r.style.left=c,r.style.top=l;function b(v,C){if(v){const f=URL.createObjectURL(v),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");_.src=f,g.style.visibility="visible",B.style.outline="3px solid var(--primary)",g.addEventListener("click",()=>{ho(v,C.project_id),P.style.visibility="visible"})}else console.log("No file selected.")}d.addEventListener("dragover",v=>{v.preventDefault()}),d.addEventListener("drop",v=>{v.preventDefault();const C=v.dataTransfer.files;b(C[0],e)}),m.addEventListener("click",()=>{const v=document.createElement("input");v.type="file",v.accept="image/*",v.addEventListener("change",C=>{const f=C.target.files[0];b(f,e)}),v.click()})}function Bo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F(),to()}function Po(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=i+s,r=c+a;let d=!1,m=!1;return l>n&&(d=!0),r>o&&(m=!0),{xOverflow:d,yOverflow:m}}function Oo(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",D()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=bo.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(E)){const d=new RegExp(`\\{${l}\\}`,"g");a=a.replace(d,r)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Qe(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function F(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Q&&Q.focus()}const So={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){uo(e)},PLAYBACK_add_songs_to_queue(e){Wo(e)},SIGN_OUT_USER(e){kn()},OPEN_SETTINGS_PAGE(e){A("/settings/")}};let U="hidden";function Mo(){pn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");me(U),e.addEventListener("click",xo),t.addEventListener("click",Ro),j()}function xo(){if(U==="hidden"){U="visible",me(U);return}if(U==="visible"){U="hidden",me(U);return}}function me(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",_n&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function j(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=p+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Go(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Uo),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",jo),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&ko(c)}),i.addEventListener("dragstart",Do),i.addEventListener("dragover",Ao),i.addEventListener("drop",No),e.appendChild(i)}}function Ro(){const e=p+1;e>=0&&e<u.length?u.splice(e):u.length=0,j()}function Do(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ao(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function No(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),L.splice(s,1),L.splice(a,0,o),j())}function jo(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),L.splice(o,1)),j()}function ko(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];k(o,e)}function Uo(e){}function Go(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=gn;for(let l=0;l<t.length;l++){const r=t[l].toString(),d=new RegExp(`\\{${r}\\}`,"g");let m="";r==="QUEUE_item_image"?m=`${y}/${n}/3/`:r==="QUEUE_item_title"?m=o:r==="QUEUE_item_artist"?m=i:r==="icons_menuOptionsButton"?m=xe:r==="QUEUE_item_timeIndicator"&&(m=s),a=a.replace(d,m)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const Jo=`<div class="LCDbody">
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
</div>`;function qo(){Ho(),ze(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){$o(t)}),Qo(),D()&&document.getElementById("LCDbody").addEventListener("click",Yo)}function Yo(e){e.stopPropagation(),k({param:"cheese"},e,"lcd_mobile_body")}function Ho(){let e="LCDbody",t=Jo;for(const[o,i]of Object.entries(E)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function ze(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let l,r,d;e=n.clientWidth,r=s(),d=e/o,d>r?l=r+10:l=d,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const d=r.offsetWidth;return document.body.removeChild(r),d}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function $o(e){e.stopPropagation(),e.target,k([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Qo(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",zo)})}function zo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),ei(n)}function Fo(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],L=[],p=0,Fe="",Ke="",Ve="";document.getElementById("audio");document.getElementById("PLAYERsource");let T="off",G="off",K="paused";function We(e){u=[],p=0,u=fe(e),u.length>0&&(K="playing",J())}function Ko(e){u=[],p=0,u=fe(e),u.length>0&&(G="off",et(),K="playing",J())}function fe(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,s=e.songs_json;try{for(const a of s){const c=a.song_name,l=a.duration,r=a.url;t.push({img:i,song_name:c,url:r,duration:l,project_name:o,project_contributors:n})}}catch{}return t}function Vo(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,p=n,ci(o),u.length>0&&oi(i)}async function Wo(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await H(t),i=fe(o);if(n==="later")u=u.concat(i),L=L.concat(i);else if(n==="next"){let s=u.slice(0,p+1),a=u.slice(p+1);u=s,u=u.concat(i),u=u.concat(a),s=L.slice(0,p+1),a=L.slice(p+1),L=s,L=L.concat(i),L=L.concat(a)}j()}function ae(){Zo()}function Zo(){const e=document.getElementById("audio");e.paused?(V("playing"),K="playing",e.play().then(t=>ot()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",V("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ae()});navigator.mediaSession.setActionHandler("pause",function(){ae()});function Ze(){st()}function Xe(){at()}function Xo(){document.getElementById("audio").addEventListener("ended",si)}function ei(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function ti(){ai()}function ni(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:T,PLAYBACK_shuffle_state:G,progress:t}}function et(){if(G==="off"){G="on",Le(G);const t=p+1;L=[...u],u.slice(0,p);const n=u.slice(t);vn(n);const o=n.length;u.splice(p,o,...n),j()}else{G="off",Le(G);const t=[...L],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(p=e);j()}}function J(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${y}/${u[p].url}/3/`,e.load(),K==="playing"?(e.play().then(n=>ot()).catch(n=>console.log(n)),V("playing")):V("paused"),nt(),tt()}function oi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${y}/${u[p].url}/3/`,t.load(),t.currentTime=e,V("paused"),nt(),tt()}function tt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${be(s)}"`,l=`"${be(Math.floor(i))}"`,r=i/o*100,d=`${r}%`;Fo(l,a),t.style.setProperty("--LCD-seekbar-width",d),t.style.setProperty("--LCD-seekbar-indicator-left",d),n.value=r,it()})}function nt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[p].song_name,t.innerHTML=u[p].song_name,n.innerHTML=u[p].project_contributors,ze(),o.src=`${y}/${u[p].img}/3/`,i.src=`${y}/${u[p].img}/3/`,Fe=`${y}/${u[p].img}/5/`,Ke=u[p].song_name,Ve=u[p].project_contributors,j()}function ot(){let e=u[p];const t=[{src:`${y}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${y}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${y}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${y}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${y}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${y}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),it()}function it(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ii(){console.log("PLAYBACK_stop_playback, clear top")}function si(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>p+1&&(T=="off"||T=="on")?(p+=1,J()):T=="song"?J():t==p+1&&T=="on"?(p=0,J()):ii()}function st(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>p+1&&(e.pause(),p+=1,J())}navigator.mediaSession.setActionHandler("nexttrack",function(){st()});function at(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,p>0&&(e.pause(),p-=1,J())}navigator.mediaSession.setActionHandler("previoustrack",function(){at()});function ai(){T=="off"?(T="on",Y(T)):T=="on"?(T="song",Y(T)):(T="off",Y(T))}function ci(e){e=="off"?(T="off",Y(T)):e=="on"?(T="on",Y(T)):(e="song",T="on",Y(T))}function ri(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",li),t.addEventListener("click",di),n.addEventListener("click",ui),o.addEventListener("click",mi),i.addEventListener("click",pi)}function li(){et()}function di(){Xe()}function ui(){ae()}function mi(){Ze()}function pi(){ti()}function Le(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function Y(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=E.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=E.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=E.icons_loop_song;return}}function V(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=E.icons_pause;return}if(e=="paused"){t.src=E.icons_play;return}}function gi(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){ct(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",_i)})}function _i(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;ct(n)}function ct(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function vi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const fi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Ei=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function yi(){setTimeout(()=>{let e="MAINcontentPages",t=Ei;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",bi)},1)}async function bi(e){console.log("the signup event was caught"),e.preventDefault(),Ti();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${w}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${w}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();le(),hi(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";le(),Be(),alert(s)}}catch{le(),Be(),alert("There was an error, try again")}}function Ti(){const e=document.getElementById("spinner");e.style.display="block"}function le(){const e=document.getElementById("spinner");e.style.display="none"}function hi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Be(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let oe=!1,Pe=!1,Oe=!1,Se=!1;async function Ii(){await Li()?rt():Pe||(wi(),Pe=!0)}function wi(){Bi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${w}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Me(),yi()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),oe)return!1;oe=!0;const a=o.value,c=i.value;try{await Ci(a,c)?(Se=!0,Pi(),rt(),setTimeout(Me,2e3)):(Se=!1,Oi(),console.log("Login failed. Retry!")),oe=!1}catch(l){console.error("Error:",l),oe=!1}return!1})}async function Ci(e,t){try{const o=await(await fetch(`${w}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(o.Authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.Authenticated}catch(n){return console.error(n),!1}}async function Li(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT"),n=await(await fetch(`${w}/users/prelogin`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({jwt:e})})).json();return console.log(n),n.Authenticated}catch(e){return console.error("Error:",e),!1}}function Bi(){let e="MAINcontentPages",t=fi;document.getElementById(e).innerHTML+=t}function Me(){if(Oe===!0)return;Oe=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function Pi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Oi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Si=`<!-- audio tag -->
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
</div>`;const w="/apis",y="/media";async function rt(){Xo(),un(),mn(),qo(),ri(),vi(),gi(),An(),Mo(),Yn()}let pe=Si;for(const[e,t]of Object.entries(E)){const n=new RegExp(`\\{${e}\\}`,"g");pe=pe.replace(n,t)}document.getElementById("app").innerHTML=pe;Ii();
