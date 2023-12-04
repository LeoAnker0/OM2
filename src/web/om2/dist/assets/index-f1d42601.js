(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Me="/assets/menu_options_button-a1d7bbe3.svg",gt=`<div class="topleft-searchbarContainer">
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
</div>`,_t=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,ft="/assets/volume_null-e39cf06f.svg",vt="/assets/recently_added-a0a983c6.svg",Et="/assets/volume_3-c8ab0a75.svg",yt="/assets/orange_music_text_logo_black-12e7386c.svg",bt="/assets/volume_2-cfdac9da.svg",Tt="/assets/browse_2-85030bba.svg",ht="/assets/volume_1-27e93416.svg",It="/assets/orange_music_logo_white-2a680ea2.svg",wt="/assets/search_icon-4f5e4381.svg",Ct="/assets/orange_music_text_logo_black-91f9e706.png",Lt="/assets/up_next_queue_button-14fedba2.svg",Pt="/assets/orange_music_logo_yellow-a109ff64.svg",Bt="/assets/playlist-c6e9024f.svg",Ot="/assets/loop_button-aef56865.svg",St="/assets/help_icon-867fec9d.svg",Mt="/assets/play_button-b1e2d3a4.svg",xt="/assets/browse-14744f27.svg",Rt="/assets/orange_music_text_logo_white-7f0ba909.svg",Dt="/assets/back_button-8128cade.svg",Nt="/assets/Albums-2e81dc74.svg",At="/assets/songs-016b7188.svg",kt="/assets/orange_music_logo_black-4d7e4591.svg",jt="/assets/your_uploaded_songs-06535705.svg",Ut="/assets/artist-ab677d43.svg",Gt="/assets/shuffle_button-c2f06bc4.svg",Jt="/assets/orange_music_text_logo_white-4907051e.png",Ht="/assets/listen_now-c7438154.svg",Yt="/assets/derpy-21c20ae5.svg",qt="/assets/next_button-9a850710.svg",$t="/assets/recently_added-7ff28139.svg",zt="/assets/play_button-5eeedbe6.svg",Qt="/assets/browse-e8be8609.svg",Ft="/assets/albums-681507b8.svg",Kt="/assets/listen_now.2-bfa293ac.svg",Vt="/assets/your_uploads-02e5c93c.svg",Wt="/assets/play_button.2-fc90fac7.svg",Xt="/assets/listen_now-fb02ffce.svg",Zt="/assets/browse.2-15b501dd.svg",en="/assets/place_holder_image-d4006a96.svg",tn="/assets/icons_MOGitems_add-19e679f7.svg",nn="/assets/back-9279721d.svg",on="/assets/forwards-605bd405.svg",sn="/assets/icons_close-57e87944.svg",an="/assets/icons_pause-8012f8cc.svg",cn="/assets/icons_loop-32d1576c.svg",rn="/assets/icons_loop_song-87f53dc7.svg",ln="/assets/icons_play-a5074c5b.svg",dn="/assets/icons_settings-793063fb.svg",un="/assets/love-07ac5006.svg",h={icons_volumeNull:ft,icons_recentlyAdded:vt,icons_volume3:Et,icons_orangeMusicTextLogoBlack:yt,icons_volume2:bt,icons_browse2:Tt,icons_volume1:ht,icons_orangeMusicLogoWhite:It,icons_searchIcon:wt,icons_orangeMusicTextLogoBlackPng:Ct,icons_queueButton:Lt,icons_orangeMusicLogoYellow:Pt,icons_playlist:Bt,icons_loopButton:Ot,icons_helpIcon:St,icons_playButton:Mt,icons_browse:xt,icons_menuOptionsButton:Me,icons_orangeMusicTextLogoWhite:Rt,icons_backButton:Dt,icons_Albums:Nt,icons_songs:At,icons_orangeMusicLogoBlack:kt,icons_yourUploadedSongs:jt,icons_artist:Ut,icons_shuffleButton:Gt,icons_orangeMusicTextLogoWhitePng:Jt,icons_listenNow:Ht,icons_derpy:Yt,icons_nextButton:qt,icons_recentlyAddedV2:$t,icons_playButtonV2:zt,icons_browseV2:Qt,icons_albumsV2:Ft,icons_listenNow2V2:Kt,icons_yourUploads:Vt,icons_playButton2:Wt,icons_listenNowV2:Xt,icons_browse2V2:Zt,v3_placeholder:en,icons_MOGitems_add:tn,icons_back:nn,icons_forwards:on,icons_close:sn,icons_pause:an,icons_loop:cn,icons_loop_song:rn,icons_play:ln,icons_settings:dn,current_year:new Date().getFullYear(),icons_love:un};function mn(){let e="topleftContentArea",t=gt;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function gn(){let e="toprightContentArea",t=pt;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function pn(){let e="MAINcontentContainer",t=_t;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const _n=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function fn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function vn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function ve(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function En(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function yn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const i=Math.floor(n/60);return`${i} minute${i>1?"s":""} ago`}else if(n<86400){const i=Math.floor(n/3600);return`${i} hour${i>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const i=Math.floor(n/86400);return`${i} day${i>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ue(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}const bn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Tn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,hn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,In=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,wn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Cn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,xe=15;let F=0;async function Ln(){try{const e=document.getElementById("MAINcontentPages");Pn();const t=await Ue(xe,F);F+=t.length,Bn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Re(){F=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",De),e.innerHTML=""}function Pn(){let e="MAINcontentPages",t=In;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function Bn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=wn;for(const[a,c]of Object.entries(h)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Ee(e);const i=document.getElementById("MOGcontainer");i.addEventListener("click",function(a){De(a,e)});let o;i.addEventListener("touchstart",function(a){a.timeStamp,o=setTimeout(function(){s(a,e)},500)}),i.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(o)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],m=c[r].project_id;console.log(m),Ne(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await Ue(xe,F);F+=r.length,r.length>0&&Ee(r)}})}function Ee(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var i=0;i<=n-1;i++){const o=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=i,a=e[i].img,c=e[i].top,l=e[i].bottom,r=e[i].days,m=En(r);let d=Cn;for(const[f,p]of Object.entries(h)){const w=new RegExp(`\\{${f}\\}`,"g");d=d.replace(w,p)}for(let f=0;f<o.length;f++){const p=o[f].toString(),w=new RegExp(`\\{${p}\\}`,"g");let y="";p==="MOG_image"?y=`${T}/${a}/4/`:p==="MOG_text1"?y=c:p==="MOG_text2"?y=l:p==="MOG_checkedDate"?y=m:p==="MOGI_placeholder_itemID"&&(y=s),d=d.replace(w,y)}t.innerHTML+=d}}async function De(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await z(o);Xe(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1],o=t[i].project_id;Ne(e,o)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;N(`/projects/${o}`)}n.id==="MOGaddNewItem"&&On()}function Ne(e,t){e.stopPropagation(),j([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function On(){N("/new-project/")}const Sn=`<div class="ADMINusersTableInfoRow">
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
</div>`,Mn=`<h1>Admin</h1>
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
</form>`,xn=`<h1>Admin</h1>
<p>You are not an admin user</p>`,Rn=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Dn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,Nn=`<div class="settings_container">
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
</div>`;let Ae;async function An(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await me("profile_picture"),n=`${T}/${t}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,i.addEventListener("click",kn)}catch(t){console.error("Error initializing account image:",t)}}function kn(e){e.stopPropagation(),jn(e)}function jn(e){j([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Un(){await Xn()}let ke="admin";const ie=[{name:"general",markup:Rn,button_id:"settings_button_general",function:Jn},{name:"user",markup:Dn,button_id:"settings_button_user",function:Hn},{name:"admin",markup:xn,button_id:"settings_button_admin",function:Yn}];function Gn(){const e=document.getElementById("MAINcontentPages");let t=Nn;for(const[o,s]of Object.entries(h)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");ye(ke);for(var i=ie.length-1;i>=0;i--){const o=ie[i].button_id;document.getElementById(o).addEventListener("click",function(a){const c=a.srcElement.id,r=ie.find(m=>m.button_id===c).name;ye(r)})}n.addEventListener("click",function(){N("/")})}function je(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function ye(e){ke=e;const t=["users_img"],n=document.getElementById("view_container"),i=ie.find(s=>s.name===e);let o=i.markup;for(const[s,a]of Object.entries(h)){const c=new RegExp(`\\{${s}\\}`,"g");o=o.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${T}/${Ae}/4/`),o=o.replace(c,l)}n.innerHTML=o,i.function()}function Jn(){console.log("general")}function Hn(){console.log("user")}async function Yn(){if((await me("admin"))[0].admin!==!0)return;const n=["users_img"],i=document.getElementById("view_container");let o=Mn,s=[];for(const[r,m]of Object.entries(h)){const d=new RegExp(`\\{${r}\\}`,"g");o=o.replace(d,m)}for(let r=0;r<n.length;r++){const m=n[r].toString(),d=new RegExp(`\\{${m}\\}`,"g");let f="";m==="users_img"&&(f=`${T}/${Ae}/4/`),o=o.replace(d,f)}i.innerHTML=o;const a=await Wn(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const m=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],d=a[r].username,f=a[r].uuid,p=a[r].verified,w=a[r].email,y=a[r].admin,v=r;let B=a[r].storage_used;B=ue(B);let E=Sn,O=a[r].profile_picture;O=`${T}/${O}/1/`;for(let _=0;_<m.length;_++){const b=m[_].toString(),P=new RegExp(`\\{${b}\\}`,"g");let C="";b==="Username"?C=d:b==="Email"?C=w:b==="UUID"?C=f:b==="Verified"?C=p:b==="Space_Used"?C=B:b==="profile_picture_url"?C=O:b==="checkbox_number"?C=v:b==="Admin"&&(C=y),E=E.replace(P,C)}c.innerHTML+=E}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const m=c.querySelectorAll('input[type="checkbox"]'),d=[],f=document.getElementById("settings_admin_selected_items_visualition");m.forEach(function(p){if(p.checked){const v={id:p.id.replace("admin_users_table_check_box_",""),value:p.value};d.push(v)}}),d.forEach(function(p){const y=a[p.id].uuid;s.push(y)}),f.innerHTML=`Selected Items: ${s.length}`}}async function qn(){const e=await me("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let i="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;N(c),zo(t)}else a();function o(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=u,r=g,m=Xo();m.current_path=c,m.current_queue=l,m.current_index=r;const d=o(m);d!==i&&(Kn("last_state",m),i=d,n.set("playback_states",d))}function a(){N(currentPath)}}function $n(){Ge(),je(),Ln()}function zn(e){Re(),je(),no(e)}function Qn(){Re(),Ge(),Gn()}const be={"/":$n,"/new-project/":Vn,"/projects/:projectID":zn,"/settings/":Qn};function Fn(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${T}/assets/hippo.webp">
    `;function n(){N("/")}}function N(e){const t=Object.keys(be);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=be[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Fn()}async function Kn(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${S}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function me(e){try{return(await(await fetch(`${S}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function le(e,t,n){try{const i={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${S}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error, yes")}catch(i){console.error("Error:",i)}}async function z(e){try{return(await(await fetch(`${S}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ue(e,t){try{const o=(await(await fetch(`${S}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):(console.log("Projects is not an array:",o),[])}catch(n){return console.error("Error:",n),[]}}async function Vn(){try{const i=`/projects/${(await(await fetch(`${S}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;N(i)}catch(e){console.error("Error:",e)}}async function Wn(){try{return(await(await fetch(`${S}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Xn(){try{const t=await(await fetch(`${S}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const Zn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,eo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
    <div class="PROJECTview-projectTable-rowItem-1">
        <img src="{PROJECTviewRow_img}">
        <div contenteditable="{PROJECTviewRow_contentEditable}" data-is-title="true">{PROJECTviewRow_songTitle}</div>
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
</div>`,to=`<div class="PROJECTviewContainerEnvironment">
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
                    <button>
                        <p>Drag and drop files here or click to select files.</p>
                    </button>
                    <br>
                    <br>
                    <button id="PROJECTview_dropArea_submit_button">Submit Files</button>
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
</div>`;let Te=!1;async function no(e){ao({ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/default_pfp"}),sessionStorage.setItem("description","If this is taking a very long time to load, consider reloading the page, this might be an error from our side."),he(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{N("/")}),setTimeout(async()=>{const o=await z(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,i(s),so(s)}},1);function i(o){const s=o.Description;io(o),sessionStorage.setItem("description",s),he(),co(),lo(),uo(o),mo(o),_o(o),Eo(),Ye(o.ProjectName)}}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function oo(){fo();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=await z(t),s=JSON.parse(i).PictureURL,a=`${T}/${s}/5/`;n.src=a}function io(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3"),i=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${T}/${e.PictureURL}/5/`;t.innerText=e.ProjectName,n.innerText=e.ProjectContributors,i.src=o}function so(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.contentEditable=!1,n.contentEditable=!1,t.addEventListener("blur",function(i){const o=t.innerText;Ye(o),le(e.ProjectID,"project_name",o)}),n.addEventListener("blur",function(i){const o=n.innerText;le(e.ProjectID,"project_contributors",o)})}function ao(e){let t="MAINcontentPages",n=to;for(const[o,s]of Object.entries(h)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=yn(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${T}/${e.PictureURL}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function he(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function co(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function o(){n.style.display="grid",D()&&(i.style.zIndex="40")}e.addEventListener("click",function(){o()}),t.addEventListener("dblclick",function(){o()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),o()),s=c})}function ro(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function lo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function uo(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){Ie(e)}),n.addEventListener("click",function(i){i.target===n&&Ie(e)})}function Ie(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");sessionStorage.setItem("description",n),le(e.ProjectID,"description",n),i.style.display="none",ro(),o.style.zIndex="1"}async function mo(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=await z(e.ProjectID);t.addEventListener("click",function(){Xe(s)}),n.addEventListener("click",function(){$o(s)}),i.addEventListener("click",function(){we(event,s)}),o.addEventListener("click",function(){we(event,s)})}function we(e,t){e.stopPropagation(),t=JSON.parse(t),e.target;const i=window.location.pathname.split("/"),o=i[i.length-1];j([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function go(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";po(e),$(),N(t)}else $()}async function po(e){e=e.PROJECT_ID;try{const n=await(await fetch(`${S}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error("Error:",t)}}function _o(e){document.getElementById("PROJECTview_projectAreaContainer"),vo();const t=document.getElementById("PROJECTview-projectTable"),n=e.ProjectJSON;if(n!==null){const i=[];if(n)for(const o of n)i.push({img:e.PictureURL,songTitle:o.SongName,artistName:e.ProjectContributors,projectName:ue(o.FolderSize),songDuration:`${Math.floor(o.Duration/60)}:${(o.Duration%60).toString().padStart(2,"0")}`,song_sequence:o.SongSequence,url:o.URL});for(let o=0;o<i.length;o++){i[o].ProjectID=o;const s=i[o];He(s)}t.addEventListener("click",function(o){const s=o.target;if(o.stopPropagation(),s.tagName==="BUTTON"){const a=s.closest(".PROJECTview-projectTable-rowContainer");a&&(a.getAttribute("data-row-id"),Je(o))}})}}async function fo(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await z(n),o=JSON.parse(i);o.ProjectID=n;const s=o,a=s.ProjectJSON,c=JSON.parse(a).songs_json,l=[];if(Array.isArray(c))for(const d of c)l.push({img:s.PictureURL,songTitle:d.song_name,artistName:s.ProjectContributors,projectName:ue(d.SongSize),songDuration:`${Math.floor(d.duration/60)}:${(d.duration%60).toString().padStart(2,"0")}`,song_sequence:d.song_sequence,url:d.url});const r=document.getElementById("PROJECTview-projectTable"),m=r.children;for(let d=m.length-1;d>0;d--)r.removeChild(m[d]);for(let d=0;d<l.length;d++){l[d].projectID=d;const f=l[d];He(f)}e.addEventListener("click",function(d){const f=d.target;if(d.stopPropagation(),f.tagName==="BUTTON"){const p=f.closest(".PROJECTview-projectTable-rowContainer");if(p){const w=p.getAttribute("data-row-id");Je(d),console.log(`Button in row ${w} clicked.`)}}})}function Je(e){e.stopPropagation(),e.target,j([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function vo(){let e="PROJECTview_projectAreaContainer",t=Zn;for(const[n,i]of Object.entries(h)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function He(e){let t="PROJECTview-projectTable",n=eo;for(const[o,s]of Object.entries(h)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${T}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"?c=e.ProjectID:s==="PROJECTviewRow_contentEditable"&&Te===!0?c=!0:s==="PROJECTviewRow_contentEditable"&&Te===!1&&(c=!1),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Ye(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Eo(){const e=new IntersectionObserver(o,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function o(s,a){s.forEach(c=>{c.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):c.isIntersecting&&!D()||!c.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!c.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",i.style.visibility="visible")})}}const yo=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function bo(e,t){const n=new XMLHttpRequest,i=new FormData;localStorage.getItem("JWT"),i.append("file",e),n.upload.onprogress=function(o){o.lengthComputable&&o.loaded/o.total*100},n.onload=function(){Lo()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${S}/files/upload_photo/${t}`,!0),n.send(i)}async function To(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await bo(n,t)}const qe='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let J,A=!1;function j(e,t,n){n===void 0&&wo(e,t),n!==void 0&&n==="update_project_image"&&Co(e,t),n!==void 0&&n==="lcd_mobile_body"&&Io(),n!==void 0&&n==="notice"&&ho(e)}function ho(e,t){let n=20,i=80;const o=document.querySelector("main"),s=document.querySelector(".topHalf-container");D()&&(o.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=qe,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=i+"px";if(a.addEventListener("click",ge),c.style.left=l,c.style.top=r,c.style.padding="5px",J&&pointerType===""){const v=J.getBoundingClientRect();n=v.left+window.scrollX,i=v.top+window.scrollY;let B=n+"px",E=i+"px";c.style.left=B,c.style.top=E}for(let v=0;v<e.length;v++)ze(e[v]);c.children[0];const d=c.offsetWidth,f=c.offsetHeight,p=$e("MENUmodalBody"),w=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",y),p.xOverflow==!0&&(l=n-d+"px",c.style.left=l),p.yOverflow==!0&&(r=i-f+"px",c.style.top=r);for(let v=0;v<w.length;v++){const B=w[v];B.setAttribute("data-menu-item-id",v),B.addEventListener("click",function(E){E.stopPropagation();const _=E.target.getAttribute("data-menu-item-id"),b=e[_].function,P=e[_].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){Qe[b](P);return}else return})}function y(v){(v.key==="Escape"||v.keyCode===27)&&(document.removeEventListener("keydown",y),$())}}function Io(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),i=document.getElementById("MENUmodalEnvironment");let o=hn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[L,x]of Object.entries(h)){const R=new RegExp(`\\{${L}\\}`,"g");o=o.replace(R,x)}i.style.display="block",i.innerHTML=o;const r=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),d=document.getElementById("LCD_mobile_body_img"),f=s.duration,w=s.currentTime/f*100,y=document.getElementById("LCDMB_seek_input"),v=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const B=document.getElementById("LCDMB_back"),E=document.getElementById("LCDMB_play"),O=document.getElementById("LCDMB_play_icon"),_=document.getElementById("LCDMB_next"),b=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{P(),A===!0&&Y()}),P(),C(),v.style.width=`${w}%`,s.addEventListener("timeupdate",()=>{const L=s.duration,R=s.currentTime/L*100;v.style.width=`${R}%`}),y.addEventListener("input",function(){const L=s.duration,x=y.value;s.currentTime=L*(x/100)}),B.addEventListener("click",()=>{et(),P(),A===!0&&Y()}),E.addEventListener("click",()=>{se(),P(),C()}),_.addEventListener("click",()=>{Ze(),P(),A===!0&&Y()}),b.addEventListener("click",()=>{A===!1?(_e(),A=!0):(fe(),A=!1)}),A===!0?_e():fe(),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1);function P(){d.src=Ke,r.innerText=Ve,m.innerText=We}function C(){s.paused?O.src=h.icons_playButtonV2:O.src=h.icons_derpy}function Y(){const L=document.getElementById("LCD_mobile_queue_content_container");L.innerHTML="";for(let x=g+1;x<u.length;x++){const R=u[x],ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Q=R.img,dt=R.song_name,ut=R.project_contributors;let ae=Tn;for(let ce=0;ce<ee.length;ce++){const te=ee[ce].toString(),mt=new RegExp(`\\{${te}\\}`,"g");let ne="";te==="queue_item_img"?ne=`${T}/${Q}/3/`:te==="queue_item_song_name"?ne=dt:te==="queue_item_song_artist"&&(ne=ut),ae=ae.replace(mt,ne)}L.innerHTML+=ae}}function _e(){function L(x){x.forEach(R=>{document.querySelectorAll("."+R).forEach(Q=>{Q.classList.add("queue_visible")})})}L(a),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z),Y()}function fe(){function L(x){x.forEach(R=>{document.querySelectorAll("."+R).forEach(Q=>{Q.classList.remove("queue_visible")})})}L(a),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1)}function W(L){A===!1&&(c=L.touches[0].clientY)}function X(L){L.preventDefault()}function Z(L){l=L.changedTouches[0].clientY,l-c>70&&($(),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z))}}function wo(e,t){J=document.activeElement;const n=t.pointerType;let i=t.clientX,o=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=qe,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=i+"px",m=o+"px";if(c.addEventListener("click",ge),l.style.left=r,l.style.top=m,J&&n===""){const E=J.getBoundingClientRect();i=E.left+window.scrollX,o=E.top+window.scrollY;let O=i+"px",_=o+"px";l.style.left=O,l.style.top=_}for(let E=0;E<e.length;E++)ze(e[E]);const f=l.children[0],p=l.offsetWidth,w=l.offsetHeight,y=$e("MENUmodalBody"),v=l.getElementsByClassName("MENUmodalItemContainer");n===""?f.focus():n==="mouse"&&(f.focus(),f.blur()),document.addEventListener("keydown",B),y.xOverflow==!0&&(r=i-p+"px",l.style.left=r),y.yOverflow==!0&&(m=o-w+"px",l.style.top=m);for(let E=0;E<v.length;E++){const O=v[E];O.setAttribute("data-menu-item-id",E),O.addEventListener("click",function(_){_.stopPropagation();const P=_.target.getAttribute("data-menu-item-id"),C=e[P].function,Y=e[P].optionalParams;if(C=="TEST")console.log("the button worked");else if(C!="None"){Qe[C](Y);return}else return})}function B(E){(E.key==="Escape"||E.keyCode===27)&&(document.removeEventListener("keydown",B),$())}}function Co(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",l=i+"px";D()&&(o.style.zIndex="40",s.style.zIndex="0"),o.style.zIndex="2",a.innerHTML=bn,a.style.display="block",a.addEventListener("click",ge);const r=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),d=document.getElementById("MENUmodalBody_image_select_file_select_button"),f=document.getElementById("MENUmodalBody_image_select_preview_area"),p=document.getElementById("MENUmodalBody_image_select_submit_button"),w=document.getElementById("MENUmodalBody_image_select_submit_button_container");r.style.left=c,r.style.top=l;let y,v;function B(_,b){return function(){const P=this,C=arguments;clearTimeout(v),v=setTimeout(()=>{_.apply(P,C)},b)}}function E(_,b){B(To,100)(_,b)}function O(_){if(y){const b=URL.createObjectURL(y),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");f.src=b,p.style.visibility="visible",w.style.outline="3px solid var(--primary)",p.addEventListener("click",()=>{E(y,_.project_id),P.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",_=>{_.preventDefault()}),m.addEventListener("drop",_=>{_.preventDefault(),y=_.dataTransfer.files[0],O(e)}),d.addEventListener("click",()=>{const _=document.createElement("input");_.type="file",_.accept="image/*",_.addEventListener("change",b=>{y=b.target.files[0],O(e)}),_.click()})}function Lo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",$(),oo()}function $e(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=o+s,r=c+a;let m=!1,d=!1;return l>n&&(m=!0),r>i&&(d=!0),{xOverflow:m,yOverflow:d}}function ze(e){const t=e.displayText,n=e.optionalSVG,i=document.getElementById("MENUmodalBody");let o;"colour"in e?o=e.colour:(o="var(--text)",D()&&(o="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=yo.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(h)){const m=new RegExp(`\\{${l}\\}`,"g");a=a.replace(m,r)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function ge(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function $(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10"),J&&J.focus()}const Qe={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){go(e)},PLAYBACK_add_songs_to_queue(e){Qo(e)},SIGN_OUT_USER(e){Un()},OPEN_SETTINGS_PAGE(e){N("/settings/")}};let U="hidden";function Po(){pn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");de(U),e.addEventListener("click",Bo),t.addEventListener("click",Oo),k()}function Bo(){if(U==="hidden"){U="visible",de(U);return}if(U==="visible"){U="hidden",de(U);return}}function de(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",fn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function k(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=g+1;t<u.length;t++){u[t].id=t;const n=u[t],i=Ao(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){c.target.dataset.songId}),o.dataset.songId=n.id,o.addEventListener("click",No),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator"),a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Ro),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&Do(c)}),o.addEventListener("dragstart",So),o.addEventListener("dragover",Mo),o.addEventListener("drop",xo),e.appendChild(o)}}function Oo(){const e=g+1;e>=0&&e<u.length?u.splice(e):u.length=0,k()}function So(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Mo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function xo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=u.find(c=>c.id===parseInt(t)),o=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(i),a=u.indexOf(o);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,i),M.splice(s,1),M.splice(a,0,i),k())}function Ro(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=u.findIndex(o=>o.id===n);i!==-1&&(u.splice(i,1),M.splice(i,1)),k()}function Do(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];j(i,e)}function No(e){}function Ao(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=_n;for(let l=0;l<t.length;l++){const r=t[l].toString(),m=new RegExp(`\\{${r}\\}`,"g");let d="";r==="QUEUE_item_image"?d=`${T}/${n}/3/`:r==="QUEUE_item_title"?d=i:r==="QUEUE_item_artist"?d=o:r==="icons_menuOptionsButton"?d=Me:r==="QUEUE_item_timeIndicator"&&(d=s),a=a.replace(m,d)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const ko=`<div class="LCDbody">
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
</div>`;function jo(){Go(),Fe(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Jo(t)}),Ho(),D()&&document.getElementById("LCDbody").addEventListener("click",Uo)}function Uo(e){e.stopPropagation(),j({param:"cheese"},e,"lcd_mobile_body")}function Go(){let e="LCDbody",t=ko;for(const[i,o]of Object.entries(h)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Fe(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let l,r,m;e=n.clientWidth,r=s(),m=e/i,m>r?l=r+10:l=m,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const m=r.offsetWidth;return document.body.removeChild(r),m}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function Jo(e){e.stopPropagation(),e.target,j([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Ho(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Yo)})}function Yo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),Vo(n)}function qo(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],M=[],g=0,Ke="",Ve="",We="";document.getElementById("audio");document.getElementById("PLAYERsource");let I="off",G="off",K="paused";function Xe(e){u=[],g=0,u=pe(e),u.length>0&&(K="playing",H())}function $o(e){u=[],g=0,u=pe(e),u.length>0&&(G="off",tt(),K="playing",H())}function pe(e){e=JSON.parse(e);const t=[],n=e.ProjectContributors,i=e.ProjectName,o=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:o,song_name:c,url:r,duration:l,project_name:i,project_contributors:n})}}catch(a){console.log(a)}return t}function zo(e){const t=e.current_queue,n=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const o=e.progress;u=t,g=n,oi(i),u!==void 0&&u.length>0&&Zo(o)}async function Qo(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,i=await z(t),o=pe(i);if(n==="later")u=u.concat(o),M=M.concat(o);else if(n==="next"){let s=u.slice(0,g+1),a=u.slice(g+1);u=s,u=u.concat(o),u=u.concat(a),s=M.slice(0,g+1),a=M.slice(g+1),M=s,M=M.concat(o),M=M.concat(a)}k()}function se(){Fo()}function Fo(){const e=document.getElementById("audio");e.paused?(V("playing"),K="playing",e.play().then(t=>it()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",V("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){se()});navigator.mediaSession.setActionHandler("pause",function(){se()});function Ze(){at()}function et(){ct()}function Ko(){document.getElementById("audio").addEventListener("ended",ti)}function Vo(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function Wo(){ni()}function Xo(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:I,PLAYBACK_shuffle_state:G,progress:t}}function tt(){if(G==="off"){G="on",Ce(G);const t=g+1;M=[...u],u.slice(0,g);const n=u.slice(t);vn(n);const i=n.length;u.splice(g,i,...n),k()}else{G="off",Ce(G);const t=[...M],o=document.getElementById("PLAYERsource").src.split("/"),s=o[o.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(g=e);k()}}function H(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${T}/${u[g].url}/3/`,e.load(),K==="playing"?(e.play().then(n=>it()).catch(n=>console.log(n)),V("playing")):V("paused"),ot(),nt()}function Zo(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${T}/${u[g].url}/3/`,t.load(),t.currentTime=e,V("paused"),ot(),nt()}function nt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const i=e.duration,o=e.currentTime,s=Math.floor(i)-o,a=`"-${ve(s)}"`,l=`"${ve(Math.floor(o))}"`,r=o/i*100,m=`${r}%`;qo(l,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=r,st()})}function ot(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),i=document.getElementById("LCDimage"),o=document.getElementById("LCDimageMobile");e.innerHTML=u[g].song_name,t.innerHTML=u[g].song_name,n.innerHTML=u[g].project_contributors,Fe(),i.src=`${T}/${u[g].img}/3/`,o.src=`${T}/${u[g].img}/3/`,Ke=`${T}/${u[g].img}/5/`,Ve=u[g].song_name,We=u[g].project_contributors,k()}function it(){let e=u[g];const t=[{src:`${T}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),st()}function st(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ei(){console.log("PLAYBACK_stop_playback, clear top")}function ti(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>g+1&&(I=="off"||I=="on")?(g+=1,H()):I=="song"?H():t==g+1&&I=="on"?(g=0,H()):ei()}function at(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>g+1&&(e.pause(),g+=1,H())}navigator.mediaSession.setActionHandler("nexttrack",function(){at()});function ct(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,g>0&&(e.pause(),g-=1,H())}navigator.mediaSession.setActionHandler("previoustrack",function(){ct()});function ni(){I=="off"?(I="on",q(I)):I=="on"?(I="song",q(I)):(I="off",q(I))}function oi(e){e=="off"?(I="off",q(I)):e=="on"?(I="on",q(I)):(e="song",I="on",q(I))}function ii(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",si),t.addEventListener("click",ai),n.addEventListener("click",ci),i.addEventListener("click",ri),o.addEventListener("click",li)}function si(){tt()}function ai(){et()}function ci(){se()}function ri(){Ze()}function li(){Wo()}function Ce(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=h.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=h.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=h.icons_loop_song;return}}function V(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=h.icons_pause;return}if(e=="paused"){t.src=h.icons_play;return}}function di(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){rt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ui)})}function ui(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;rt(n)}function rt(e){function t(o,s,a){return o>=s&&o<=a}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=o&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function mi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const gi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,pi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function _i(){setTimeout(()=>{let e="MAINcontentPages",t=pi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",fi)},1)}async function fi(e){console.log("the signup event was caught"),e.preventDefault(),vi();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const o of t.elements)o.type==="email"&&(n[o.name]=o.value);const i=await fetch(`${S}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const o=await i.json();n.token=o.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${S}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();re(),Ei(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const o=await i.json(),s="There was an error with the email, check that the details are correct.";re(),Le(),alert(s)}}catch{re(),Le(),alert("There was an error, try again")}}function vi(){const e=document.getElementById("spinner");e.style.display="block"}function re(){const e=document.getElementById("spinner");e.style.display="none"}function Ei(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Le(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let oe=!1,Pe=!1,Be=!1,Oe=!1;async function yi(){await hi()?lt():Pe||(bi(),Pe=!0)}function bi(){wi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${S}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Se(),_i()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),oe)return!1;oe=!0;const a=i.value,c=o.value;try{await Ti(a,c)?(Oe=!0,Ci(),lt(),setTimeout(Se,2e3)):(Oe=!1,Li(),console.log("Login failed. Retry!")),oe=!1}catch(l){console.error("Error:",l),oe=!1}return!1})}async function Ti(e,t){try{const i=await(await fetch(`${S}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(i.Authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.Authenticated}catch(n){return console.error(n),!1}}async function hi(){const e=await fetch(`${S}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?(Ii("event"),!1):e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function Ii(e,t){j([{displayText:"Your JWT has expired, please sign in.",optionalSVG:"None",function:"None"}],e,"notice")}function wi(){let e="MAINcontentPages",t=gi;document.getElementById(e).innerHTML+=t}function Se(){if(Be===!0)return;Be=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function Ci(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Li(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Pi=`<!-- audio tag -->
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
</div>`;const S="/apis",T="/media";async function lt(){Ko(),mn(),gn(),jo(),ii(),mi(),di(),An(),Po(),qn()}if(!window.hasCodeRun){let e=Pi;for(const[t,n]of Object.entries(h)){const i=new RegExp(`\\{${t}\\}`,"g");e=e.replace(i,n)}document.getElementById("app").innerHTML=e,yi(),window.hasCodeRun=!0}
