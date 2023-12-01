(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const Re="/assets/menu_options_button-a1d7bbe3.svg",gt=`<div class="topleft-searchbarContainer">
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
</div>`,ft="/assets/volume_null-e39cf06f.svg",vt="/assets/recently_added-a0a983c6.svg",Et="/assets/volume_3-c8ab0a75.svg",yt="/assets/orange_music_text_logo_black-12e7386c.svg",bt="/assets/volume_2-cfdac9da.svg",Tt="/assets/browse_2-85030bba.svg",ht="/assets/volume_1-27e93416.svg",It="/assets/orange_music_logo_white-2a680ea2.svg",wt="/assets/search_icon-4f5e4381.svg",Ct="/assets/orange_music_text_logo_black-91f9e706.png",Lt="/assets/up_next_queue_button-14fedba2.svg",Pt="/assets/orange_music_logo_yellow-a109ff64.svg",Bt="/assets/playlist-c6e9024f.svg",Ot="/assets/loop_button-aef56865.svg",St="/assets/help_icon-867fec9d.svg",Mt="/assets/play_button-b1e2d3a4.svg",Rt="/assets/browse-14744f27.svg",xt="/assets/orange_music_text_logo_white-7f0ba909.svg",Dt="/assets/back_button-8128cade.svg",At="/assets/Albums-2e81dc74.svg",Nt="/assets/songs-016b7188.svg",jt="/assets/orange_music_logo_black-4d7e4591.svg",kt="/assets/your_uploaded_songs-06535705.svg",Ut="/assets/artist-ab677d43.svg",Gt="/assets/shuffle_button-c2f06bc4.svg",Jt="/assets/orange_music_text_logo_white-4907051e.png",$t="/assets/listen_now-c7438154.svg",qt="/assets/derpy-21c20ae5.svg",Ht="/assets/next_button-9a850710.svg",Yt="/assets/recently_added-7ff28139.svg",Ft="/assets/play_button-5eeedbe6.svg",Qt="/assets/browse-e8be8609.svg",zt="/assets/albums-681507b8.svg",Kt="/assets/listen_now.2-bfa293ac.svg",Vt="/assets/your_uploads-02e5c93c.svg",Wt="/assets/play_button.2-fc90fac7.svg",Zt="/assets/listen_now-fb02ffce.svg",Xt="/assets/browse.2-15b501dd.svg",en="/assets/place_holder_image-d4006a96.svg",tn="/assets/icons_MOGitems_add-19e679f7.svg",nn="/assets/back-9279721d.svg",on="/assets/forwards-605bd405.svg",sn="/assets/icons_close-57e87944.svg",an="/assets/icons_pause-8012f8cc.svg",cn="/assets/icons_loop-32d1576c.svg",rn="/assets/icons_loop_song-87f53dc7.svg",ln="/assets/icons_play-a5074c5b.svg",dn="/assets/icons_settings-793063fb.svg",un="/assets/love-07ac5006.svg",y={icons_volumeNull:ft,icons_recentlyAdded:vt,icons_volume3:Et,icons_orangeMusicTextLogoBlack:yt,icons_volume2:bt,icons_browse2:Tt,icons_volume1:ht,icons_orangeMusicLogoWhite:It,icons_searchIcon:wt,icons_orangeMusicTextLogoBlackPng:Ct,icons_queueButton:Lt,icons_orangeMusicLogoYellow:Pt,icons_playlist:Bt,icons_loopButton:Ot,icons_helpIcon:St,icons_playButton:Mt,icons_browse:Rt,icons_menuOptionsButton:Re,icons_orangeMusicTextLogoWhite:xt,icons_backButton:Dt,icons_Albums:At,icons_songs:Nt,icons_orangeMusicLogoBlack:jt,icons_yourUploadedSongs:kt,icons_artist:Ut,icons_shuffleButton:Gt,icons_orangeMusicTextLogoWhitePng:Jt,icons_listenNow:$t,icons_derpy:qt,icons_nextButton:Ht,icons_recentlyAddedV2:Yt,icons_playButtonV2:Ft,icons_browseV2:Qt,icons_albumsV2:zt,icons_listenNow2V2:Kt,icons_yourUploads:Vt,icons_playButton2:Wt,icons_listenNowV2:Zt,icons_browse2V2:Xt,v3_placeholder:en,icons_MOGitems_add:tn,icons_back:nn,icons_forwards:on,icons_close:sn,icons_pause:an,icons_loop:cn,icons_loop_song:rn,icons_play:ln,icons_settings:dn,current_year:new Date().getFullYear(),icons_love:un};function mn(){let e="topleftContentArea",t=gt;for(const[o,i]of Object.entries(y)){const n=new RegExp(`\\{${o}\\}`,"g");t=t.replace(n,i)}document.getElementById(e).innerHTML=t}function gn(){let e="toprightContentArea",t=pt;for(const[o,i]of Object.entries(y)){const n=new RegExp(`\\{${o}\\}`,"g");t=t.replace(n,i)}document.getElementById(e).innerHTML=t}function pn(){let e="MAINcontentContainer",t=_t;for(const[o,i]of Object.entries(y)){const n=new RegExp(`\\{${o}\\}`,"g");t=t.replace(n,i)}document.getElementById(e).innerHTML+=t}const _n=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function fn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function vn(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}}function Ee(e){let t=0,o=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(o=parseInt(e/60,10),e-=o*60),i=e,e=t>0?t+":":"",e+=o>0?(o<10&&t>0?"0":"")+o+":":"0:",e+=(i<10?"0":"")+i,e}function En(e){const o=(Date.now()-e)/(1e3*60*60*24);let i;return o<.01||o<1?(i="Now",i):o<8?(i=Math.floor(o)+"d",i):o<29?(i=Math.floor(o/7)+"w",i):o<365?(i=Math.floor(o/28)+"m",i):(i=Math.floor(o/365)+"y",i)}function yn(e){const o=(Date.now()-e)/1e3;if(o<60)return"Now";if(o<3600){const i=Math.floor(o/60);return`${i} minute${i>1?"s":""} ago`}else if(o<86400){const i=Math.floor(o/3600);return`${i} hour${i>1?"s":""} ago`}else{if(o<172800)return"Yesterday";if(o<31536e3){const i=Math.floor(o/86400);return`${i} day${i>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ge(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}const bn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</button>`,xe=15;let Q=0;async function Ln(){try{const e=document.getElementById("MAINcontentPages");Pn();const t=await Ge(xe,Q);Q+=t.length,Bn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function De(){Q=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ae),e.innerHTML=""}function Pn(){let e="MAINcontentPages",t=In;for(const[o,i]of Object.entries(y)){const n=new RegExp(`\\{${o}\\}`,"g");t=t.replace(n,i)}document.getElementById(e).innerHTML+=t}function Bn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let o=wn;for(const[a,c]of Object.entries(y)){const r=new RegExp(`\\{${a}\\}`,"g");o=o.replace(r,c)}t.innerHTML+=o,ye(e);const i=document.getElementById("MOGcontainer");i.addEventListener("click",function(a){Ae(a,e)});let n;i.addEventListener("touchstart",function(a){a.timeStamp,n=setTimeout(function(){s(a,e)},500)}),i.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(n)});function s(a,c){navigator.vibrate(1e3);const l=a.target.id.split("-")[1],m=c[l].project_id;console.log(m),Ne(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,r=t.clientHeight;if(a>=c-r){const l=await Ge(xe,Q);Q+=l.length,l.length>0&&ye(l)}})}function ye(e){const t=document.getElementById("MOGgridContainer"),o=e.length;for(var i=0;i<=o-1;i++){const n=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=i,a=e[i].img,c=e[i].top,r=e[i].bottom,l=e[i].days,m=En(l);let d=Cn;for(const[p,_]of Object.entries(y)){const C=new RegExp(`\\{${p}\\}`,"g");d=d.replace(C,_)}for(let p=0;p<n.length;p++){const _=n[p].toString(),C=new RegExp(`\\{${_}\\}`,"g");let v="";_==="MOG_image"?v=`${E}/${a}/4/`:_==="MOG_text1"?v=c:_==="MOG_text2"?v=r:_==="MOG_checkedDate"?v=m:_==="MOGI_placeholder_itemID"&&(v=s),d=d.replace(C,v)}t.innerHTML+=d}}async function Ae(e,t){const o=e.target;if(o.classList.contains("MOG-item-controls-play")){const i=o.id.split("-")[1],n=t[i].project_id,s=await H(n);Ze(s)}if(o.classList.contains("MOG-item-controls-menu")){const i=o.id.split("-")[1],n=t[i].project_id;Ne(e,n)}if(o.classList.contains("MOG-itemContainer")&&o.id!=="MOGaddNewItem"){const i=o.id.split("-")[1],n=t[i].project_id;A(`/projects/${n}`)}o.id==="MOGaddNewItem"&&On()}function Ne(e,t){e.stopPropagation(),k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function On(){A("/new-project/")}const Sn=`<div class="ADMINusersTableInfoRow">
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
</form>`,Rn=`<h1>Admin</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Dn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,An=`<div class="settings_container">
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
</div>`;let je;async function Nn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await pe("profile_picture"),o=`${E}/${t}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=o,i.addEventListener("click",jn)}catch(t){console.error("Error initializing account image:",t)}}function jn(e){e.stopPropagation(),kn(e)}function kn(e){k([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function Un(){localStorage.clear(),location.reload()}let ke="admin";const ie=[{name:"general",markup:xn,button_id:"settings_button_general",function:Jn},{name:"user",markup:Dn,button_id:"settings_button_user",function:$n},{name:"admin",markup:Rn,button_id:"settings_button_admin",function:qn}];function Gn(){const e=document.getElementById("MAINcontentPages");let t=An;for(const[n,s]of Object.entries(y)){const a=new RegExp(`\\{${n}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const o=document.getElementById("settings_go_to_other_content_button");be(ke);for(var i=ie.length-1;i>=0;i--){const n=ie[i].button_id;document.getElementById(n).addEventListener("click",function(a){const c=a.srcElement.id,l=ie.find(m=>m.button_id===c).name;be(l)})}o.addEventListener("click",function(){A("/")})}function Ue(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function be(e){ke=e;const t=["users_img"],o=document.getElementById("view_container"),i=ie.find(s=>s.name===e);let n=i.markup;for(const[s,a]of Object.entries(y)){const c=new RegExp(`\\{${s}\\}`,"g");n=n.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let r="";a==="users_img"&&(r=`${E}/${je}/4/`),n=n.replace(c,r)}o.innerHTML=n,i.function()}function Jn(){console.log("general")}function $n(){console.log("user")}async function qn(){if((await pe("admin"))[0].admin!==!0)return;const o=["users_img"],i=document.getElementById("view_container");let n=Mn,s=[];for(const[l,m]of Object.entries(y)){const d=new RegExp(`\\{${l}\\}`,"g");n=n.replace(d,m)}for(let l=0;l<o.length;l++){const m=o[l].toString(),d=new RegExp(`\\{${m}\\}`,"g");let p="";m==="users_img"&&(p=`${E}/${je}/4/`),n=n.replace(d,p)}i.innerHTML=n;const a=await Wn(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let l=0;l<a.length;l++){const m=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],d=a[l].username,p=a[l].uuid,_=a[l].verified,C=a[l].email,v=a[l].admin,S=l;let x=a[l].storage_used;x=ge(x);let b=Sn,B=a[l].profile_picture;B=`${E}/${B}/1/`;for(let f=0;f<m.length;f++){const T=m[f].toString(),L=new RegExp(`\\{${T}\\}`,"g");let I="";T==="Username"?I=d:T==="Email"?I=C:T==="UUID"?I=p:T==="Verified"?I=_:T==="Space_Used"?I=x:T==="profile_picture_url"?I=B:T==="checkbox_number"?I=S:T==="Admin"&&(I=v),b=b.replace(L,I)}c.innerHTML+=b}c.addEventListener("change",function(l){l.target&&l.target.type==="checkbox"&&r()});function r(){s=[];const m=c.querySelectorAll('input[type="checkbox"]'),d=[],p=document.getElementById("settings_admin_selected_items_visualition");m.forEach(function(_){if(_.checked){const S={id:_.id.replace("admin_users_table_check_box_",""),value:_.value};d.push(S)}}),d.forEach(function(_){const v=a[_.id].uuid;s.push(v)}),p.innerHTML=`Selected Items: ${s.length}`}}async function Hn(){const e=await pe("last_state"),t=JSON.parse(e),o=new Map;setInterval(s,1e4);let i="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;A(c),Wo(t)}else a();function n(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,r=u,l=g,m=oi();m.current_path=c,m.current_queue=r,m.current_index=l;const d=n(m);d!==i&&(Kn("last_state",m),i=d,o.set("playback_states",d))}function a(){A(currentPath)}}function Yn(){Je(),Ue(),Ln()}function Fn(e){De(),Ue(),to(e)}function Qn(){De(),Je(),Gn()}const Te={"/":Yn,"/new-project/":Vn,"/projects/:projectID":Fn,"/settings/":Qn};function zn(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(o,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${E}/assets/hippo.webp">
    `;function o(){A("/")}}function A(e){const t=Object.keys(Te);for(const o of t){const i=new RegExp(`^${o.replace(/:[^\s/]+/g,"([^/]+)")}$`),n=e.match(i);if(n){const s=Te[o],a=n.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}zn()}async function Kn(e,t){try{const o={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${P}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function pe(e){try{return(await(await fetch(`${P}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function de(e,t,o){try{const i={project_id:e,column_to_be_updated:t,new_data:o};if((await(await fetch(`${P}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error, yes")}catch(i){console.error("Error:",i)}}async function H(e){try{return(await(await fetch(`${P}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ge(e,t){try{const n=(await(await fetch(`${P}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(n)?n.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):(console.log("Projects is not an array:",n),[])}catch(o){return console.error("Error:",o),[]}}async function Vn(){try{const i=`/projects/${(await(await fetch(`${P}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;A(i)}catch(e){console.error("Error:",e)}}async function Wn(){try{return(await(await fetch(`${P}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}const Zn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Xn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`,eo=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,se=[];let ue=!1,he=!0;async function to(e){so({ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/default_pfp"}),sessionStorage.setItem("description","If this is taking a very long time to load, consider reloading the page, this might be an error from our side."),Ie(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{A("/")}),setTimeout(async()=>{const n=await H(e);if(n=="")console.log(n);else{const s=JSON.parse(n);s.ProjectID=e,i(s),io(s)}},1);function i(n){const s=n.Description;oo(n),sessionStorage.setItem("description",s),Ie(),ao(),ro(),lo(n),uo(n),po(n),fo(n),Eo(),Fe(n.ProjectName),yo(n.ProjectID)}}function Je(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function no(){$e();const t=window.location.pathname.replace(/^\/projects\//,""),o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=await H(t),s=JSON.parse(i).PictureURL,a=`${E}/${s}/5/`;o.src=a}function oo(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),o=document.getElementById("PROJECTviewDisplayTitleH3"),i=document.getElementById("PROJECTviewDisplayImage_imgTag"),n=`${E}/${e.PictureURL}/5/`;t.innerText=e.ProjectName,o.innerText=e.ProjectContributors,i.src=n}function io(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),o=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(i){const n=t.innerText;Fe(n),de(e.ProjectID,"project_name",n)}),o.addEventListener("blur",function(i){const n=o.innerText;de(e.ProjectID,"project_contributors",n)})}function so(e){let t="MAINcontentPages",o=eo;for(const[n,s]of Object.entries(y)){const a=new RegExp(`\\{${n}\\}`,"g");o=o.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let n=0;n<i.length;n++){const s=i[n].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=yn(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${E}/${e.PictureURL}/5/`),o=o.replace(a,c)}document.getElementById(t).innerHTML=o}function Ie(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function ao(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function n(){o.style.display="grid",D()&&(i.style.zIndex="40")}e.addEventListener("click",function(){n()}),t.addEventListener("dblclick",function(){n()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),n()),s=c})}function co(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function ro(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function lo(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){we(e)}),o.addEventListener("click",function(i){i.target===o&&we(e)})}function we(e){const o=document.getElementById("PROJECTviewMOREdescriptionP").value,i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),n=document.querySelector("main");sessionStorage.setItem("description",o),de(e.ProjectID,"description",o),i.style.display="none",co(),n.style.zIndex="1"}async function uo(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),o=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),n=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=await H(e.ProjectID);t.addEventListener("click",function(){Ze(s)}),o.addEventListener("click",function(){Vo(s)}),i.addEventListener("click",function(){Ce(event,s)}),n.addEventListener("click",function(){Ce(event,s)})}function Ce(e,t){e.stopPropagation(),t=JSON.parse(t),e.target;const i=window.location.pathname.split("/"),n=i[i.length-1];k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:n,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:n,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:n},colour:"hsl(0, 100%, 55%)"}],e)}function mo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";go(e),z(),A(t)}else z()}async function go(e){e=e.PROJECT_ID;try{const o=await(await fetch(`${P}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error("Error:",t)}}function po(e){document.getElementById("PROJECTview_projectAreaContainer"),_o();const t=document.getElementById("PROJECTview-projectTable"),o=e.ProjectJSON;if(o!==null){const i=[];if(o)for(const n of o)i.push({img:e.PictureURL,songTitle:n.SongName,artistName:e.ProjectContributors,projectName:ge(n.FolderSize),songDuration:`${Math.floor(n.Duration/60)}:${(n.Duration%60).toString().padStart(2,"0")}`,song_sequence:n.SongSequence,url:n.URL});for(let n=0;n<i.length;n++){i[n].ProjectID=n;const s=i[n];He(s)}t.addEventListener("click",function(n){const s=n.target;if(n.stopPropagation(),s.tagName==="BUTTON"){const a=s.closest(".PROJECTview-projectTable-rowContainer");a&&(a.getAttribute("data-row-id"),qe(n))}}),t.addEventListener("click",function(n){const s=n.target;if(s.tagName==="DIV"&&s.isContentEditable){const a=s.getAttribute("data-is-title");if(a==="true"){const c=s.closest(".PROJECTview-projectTable-rowContainer");if(c){const r=c.getAttribute("data-row-id");console.log("Change",r,"New value:",s.textContent)}}else{console.log(a);const c=s.closest(".PROJECTview-projectTable-rowContainer");if(c){const r=c.getAttribute("data-row-id");console.log(r,"New value:",s.textContent)}}}}),t.addEventListener("blur",function(n){const s=n.target;if(n.stopPropagation(),console.log("change",n),s.tagName==="DIV"){const a=s.getAttribute("data-is-title");if(a===!0){const c=s.closest(".PROJECTview-projectTable-rowContainer");if(c){const r=c.getAttribute("data-row-id");console.log("Change",r)}}else{console.log(a);const c=s.closest(".PROJECTview-projectTable-rowContainer");if(c){const r=c.getAttribute("data-row-id");console.log(r)}}}})}}async function $e(){const e=document.getElementById("PROJECTview-projectTable"),o=window.location.pathname.replace(/^\/projects\//,""),i=await H(o),n=JSON.parse(i);n.ProjectID=o;const s=n,a=s.ProjectJSON,c=JSON.parse(a).songs_json,r=[];if(Array.isArray(c))for(const d of c)r.push({img:s.PictureURL,songTitle:d.song_name,artistName:s.ProjectContributors,projectName:ge(d.SongSize),songDuration:`${Math.floor(d.duration/60)}:${(d.duration%60).toString().padStart(2,"0")}`,song_sequence:d.song_sequence,url:d.url});const l=document.getElementById("PROJECTview-projectTable"),m=l.children;for(let d=m.length-1;d>0;d--)l.removeChild(m[d]);for(let d=0;d<r.length;d++){r[d].projectID=d;const p=r[d];He(p)}e.addEventListener("click",function(d){const p=d.target;if(d.stopPropagation(),p.tagName==="BUTTON"){const _=p.closest(".PROJECTview-projectTable-rowContainer");if(_){const C=_.getAttribute("data-row-id");qe(d),console.log(`Button in row ${C} clicked.`)}}})}function qe(e){e.stopPropagation(),e.target,k([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function _o(){let e="PROJECTview_projectAreaContainer",t=Zn;for(const[o,i]of Object.entries(y)){const n=new RegExp(`\\{${o}\\}`,"g");t=t.replace(n,i)}document.getElementById(e).innerHTML+=t}function He(e){let t="PROJECTview-projectTable",o=Xn;for(const[n,s]of Object.entries(y)){const a=new RegExp(`\\{${n}\\}`,"g");o=o.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let n=0;n<i.length;n++){const s=i[n].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${E}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"?c=e.ProjectID:s==="PROJECTviewRow_contentEditable"&&he===!0?c=!0:s==="PROJECTviewRow_contentEditable"&&he===!1&&(c=!1),o=o.replace(a,c)}document.getElementById(t).innerHTML+=o}function fo(e){const t=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),t.addEventListener("dragenter",n=>{n.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",n=>{n.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",n=>{n.preventDefault(),t.classList.remove("dragover");const s=n.dataTransfer.files;i(s,e)});let o=[];t.addEventListener("click",n=>{const s=n.target.id,a=document.createElement("input");s!=="PROJECTview_dropArea_submit_button"?(a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{o=a.files,console.log(o)}),a.click()):(console.log("the submit files button was clicked ",o),i(o,e))});function i(n,s){for(const a of n);vo(n,s)}}async function Ye(e,t,o,i){const n=new FormData,s=localStorage.getItem("JWT"),a=new XMLHttpRequest,c=document.createElement("div"),r=document.createElement("div");ue=!0,n.append("file",e),n.append("project_id",i.project_id),n.append("jwt",s),c.classList.add("progress-bar"),r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(l){if(l.lengthComputable){const m=l.loaded/l.total*100;r.style.width=m+"%",m===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),o.textContent=`${e.name}`,$e(),ue=!1,se.length>0){const l=se.shift();await Ye(l.file,l.uploadBox,l.fileNameLabel,l.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${P}/files/upload_audio/${i.ProjectID}`,!0),a.send(n)}async function vo(e,t){const o=document.getElementById("uploadsContainer");for(const i of e){const n=document.createElement("div"),s=document.createElement("div");n.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,n.appendChild(s),o.appendChild(n);const a={file:i,uploadBox:n,fileNameLabel:s,details:t};if(se.push(a),!ue){const c=se.shift();await Ye(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function Fe(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Eo(){const e=new IntersectionObserver(n,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),o=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function n(s,a){s.forEach(c=>{c.isIntersecting&&D()?(o.style.backdropFilter="none",o.style.backgroundColor="transparent",i.style.visibility="hidden"):c.isIntersecting&&!D()||!c.isIntersecting&&!D()?(o.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!c.isIntersecting&&D()&&(o.style.backdropFilter="blur(15px)",o.style.backgroundColor="var(--background-transparent)",i.style.visibility="visible")})}}function yo(e){const t=document.getElementById("PROJECTviewDisplayImage");let o;t.addEventListener("touchstart",function(n){n.timeStamp,o=setTimeout(function(){i(n,e)},500)}),t.addEventListener("touchend",function(n){n.timeStamp,clearTimeout(o)}),t.addEventListener("dblclick",function(n){i(n,e)});function i(n,s){bo(n,s)}}function bo(e,t){e.target;const o="update_project_image",i={project_id:t};e.stopPropagation(),k(i,e,o)}const To=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function ho(e,t){const o=new XMLHttpRequest,i=new FormData;localStorage.getItem("JWT"),i.append("file",e),o.upload.onprogress=function(n){n.lengthComputable&&n.loaded/n.total*100},o.onload=function(){Bo()},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${P}/files/upload_photo/${t}`,!0),o.send(i)}async function Io(e,t){Array.isArray(e)||(e=[e]);for(const o of e)await ho(o,t)}const wo='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let F,N=!1;function k(e,t,o){o===void 0&&Lo(e,t),o!==void 0&&o==="update_project_image"&&Po(e,t),o!==void 0&&o==="lcd_mobile_body"&&Co()}function Co(e){const t=document.querySelector("main"),o=document.querySelector(".topHalf-container"),i=document.getElementById("MENUmodalEnvironment");let n=hn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,r=0;D()&&(t.style.zIndex="40",o.style.zIndex="0");for(const[w,M]of Object.entries(y)){const R=new RegExp(`\\{${w}\\}`,"g");n=n.replace(R,M)}i.style.display="block",i.innerHTML=n;const l=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),d=document.getElementById("LCD_mobile_body_img"),p=s.duration,C=s.currentTime/p*100,v=document.getElementById("LCDMB_seek_input"),S=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const x=document.getElementById("LCDMB_back"),b=document.getElementById("LCDMB_play"),B=document.getElementById("LCDMB_play_icon"),f=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{L(),N===!0&&$()}),L(),I(),S.style.width=`${C}%`,s.addEventListener("timeupdate",()=>{const w=s.duration,R=s.currentTime/w*100;S.style.width=`${R}%`}),v.addEventListener("input",function(){const w=s.duration,M=v.value;s.currentTime=w*(M/100)}),x.addEventListener("click",()=>{et(),L(),N===!0&&$()}),b.addEventListener("click",()=>{ae(),L(),I()}),f.addEventListener("click",()=>{Xe(),L(),N===!0&&$()}),T.addEventListener("click",()=>{N===!1?(fe(),N=!0):(ve(),N=!1)}),N===!0?fe():ve(),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",Z,!1),i.addEventListener("touchend",X,!1);function L(){d.src=Ke,l.innerText=Ve,m.innerText=We}function I(){s.paused?B.src=y.icons_playButtonV2:B.src=y.icons_derpy}function $(){const w=document.getElementById("LCD_mobile_queue_content_container");w.innerHTML="";for(let M=g+1;M<u.length;M++){const R=u[M],ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Y=R.img,dt=R.song_name,ut=R.project_contributors;let ce=Tn;for(let re=0;re<ee.length;re++){const te=ee[re].toString(),mt=new RegExp(`\\{${te}\\}`,"g");let ne="";te==="queue_item_img"?ne=`${E}/${Y}/3/`:te==="queue_item_song_name"?ne=dt:te==="queue_item_song_artist"&&(ne=ut),ce=ce.replace(mt,ne)}w.innerHTML+=ce}}function fe(){function w(M){M.forEach(R=>{document.querySelectorAll("."+R).forEach(Y=>{Y.classList.add("queue_visible")})})}w(a),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",Z),i.removeEventListener("touchend",X),$()}function ve(){function w(M){M.forEach(R=>{document.querySelectorAll("."+R).forEach(Y=>{Y.classList.remove("queue_visible")})})}w(a),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",Z,!1),i.addEventListener("touchend",X,!1)}function W(w){N===!1&&(c=w.touches[0].clientY)}function Z(w){w.preventDefault()}function X(w){r=w.changedTouches[0].clientY,r-c>70&&(z(),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",Z),i.removeEventListener("touchend",X))}}function Lo(e,t){F=document.activeElement;const o=t.pointerType;let i=t.clientX,n=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=wo,c.style.display="block";const r=document.getElementById("MENUmodalBody");let l=i+"px",m=n+"px";if(c.addEventListener("click",Qe),r.style.left=l,r.style.top=m,F&&o===""){const b=F.getBoundingClientRect();i=b.left+window.scrollX,n=b.top+window.scrollY;let B=i+"px",f=n+"px";r.style.left=B,r.style.top=f}for(let b=0;b<e.length;b++)So(e[b]);const p=r.children[0],_=r.offsetWidth,C=r.offsetHeight,v=Oo("MENUmodalBody"),S=r.getElementsByClassName("MENUmodalItemContainer");o===""?p.focus():o==="mouse"&&(p.focus(),p.blur()),document.addEventListener("keydown",x),v.xOverflow==!0&&(l=i-_+"px",r.style.left=l),v.yOverflow==!0&&(m=n-C+"px",r.style.top=m);for(let b=0;b<S.length;b++){const B=S[b];B.setAttribute("data-menu-item-id",b),B.addEventListener("click",function(f){f.stopPropagation();const L=f.target.getAttribute("data-menu-item-id"),I=e[L].function,$=e[L].optionalParams;if(I=="TEST")console.log("the button worked");else if(I!="None"){Mo[I]($);return}else return})}function x(b){(b.key==="Escape"||b.keyCode===27)&&(document.removeEventListener("keydown",x),z())}}function Po(e,t){const o=t.clientX,i=t.clientY,n=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=o+"px",r=i+"px";D()&&(n.style.zIndex="40",s.style.zIndex="0"),n.style.zIndex="2",a.innerHTML=bn,a.style.display="block",a.addEventListener("click",Qe);const l=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),d=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),_=document.getElementById("MENUmodalBody_image_select_submit_button"),C=document.getElementById("MENUmodalBody_image_select_submit_button_container");l.style.left=c,l.style.top=r;let v,S;function x(f,T){return function(){const L=this,I=arguments;clearTimeout(S),S=setTimeout(()=>{f.apply(L,I)},T)}}function b(f,T){x(Io,100)(f,T)}function B(f){if(v){const T=URL.createObjectURL(v),L=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=T,_.style.visibility="visible",C.style.outline="3px solid var(--primary)",_.addEventListener("click",()=>{b(v,f.project_id),L.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",f=>{f.preventDefault()}),m.addEventListener("drop",f=>{f.preventDefault(),v=f.dataTransfer.files[0],B(e)}),d.addEventListener("click",()=>{const f=document.createElement("input");f.type="file",f.accept="image/*",f.addEventListener("change",T=>{v=T.target.files[0],B(e)}),f.click()})}function Bo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",z(),no()}function Oo(e){const t=document.getElementById(e),o=document.documentElement.clientWidth,i=document.documentElement.clientHeight,n=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=n+s,l=c+a;let m=!1,d=!1;return r>o&&(m=!0),l>i&&(d=!0),{xOverflow:m,yOverflow:d}}function So(e){const t=e.displayText,o=e.optionalSVG,i=document.getElementById("MENUmodalBody");let n;"colour"in e?n=e.colour:(n="var(--text)",D()&&(n="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=To.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,n),o!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+o+"}";a=a.replace(s,c);for(const[r,l]of Object.entries(y)){const m=new RegExp(`\\{${r}\\}`,"g");a=a.replace(m,l)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function Qe(e){const t=document.getElementById("MENUmodalEnvironment"),o=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),n=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(o.style.zIndex="1",n.style.zIndex="10");return}}function z(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",o.matches&&(t.style.zIndex="1",i.style.zIndex="10"),F&&F.focus()}const Mo={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){mo(e)},PLAYBACK_add_songs_to_queue(e){Zo(e)},SIGN_OUT_USER(e){Un()},OPEN_SETTINGS_PAGE(e){A("/settings/")}};let U="hidden";function Ro(){pn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");me(U),e.addEventListener("click",xo),t.addEventListener("click",Do),j()}function xo(){if(U==="hidden"){U="visible",me(U);return}if(U==="visible"){U="hidden",me(U);return}}function me(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),o=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",o.style.right="0%",fn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",o.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function j(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=g+1;t<u.length;t++){u[t].id=t;const o=u[t],i=Jo(o),n=document.createElement("div");n.innerHTML=i,n.addEventListener("click",function(c){c.target.dataset.songId}),n.dataset.songId=o.id,n.addEventListener("click",Go),n.dataset.songId=o.id;const s=n.querySelector(".QUEUE-item-image-removeIndicator"),a=n.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",ko),s.dataset.songID=o.id,a.dataset.songSet=o.id,a.addEventListener("click",function(c){c.target===a&&Uo(c)}),n.addEventListener("dragstart",Ao),n.addEventListener("dragover",No),n.addEventListener("drop",jo),e.appendChild(n)}}function Do(){const e=g+1;e>=0&&e<u.length?u.splice(e):u.length=0,j()}function Ao(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function No(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function jo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),o=e.target,i=u.find(c=>c.id===parseInt(t)),n=u.find(c=>c.id===parseInt(o.dataset.songId)),s=u.indexOf(i),a=u.indexOf(n);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,i),O.splice(s,1),O.splice(a,0,i),j())}function ko(e){e.stopPropagation();const t=e.target,o=parseInt(t.dataset.songID),i=u.findIndex(n=>n.id===o);i!==-1&&(u.splice(i,1),O.splice(i,1)),j()}function Uo(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];k(i,e)}function Go(e){}function Jo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],o=e.img,i=e.song_name,n=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=_n;for(let r=0;r<t.length;r++){const l=t[r].toString(),m=new RegExp(`\\{${l}\\}`,"g");let d="";l==="QUEUE_item_image"?d=`${E}/${o}/3/`:l==="QUEUE_item_title"?d=i:l==="QUEUE_item_artist"?d=n:l==="icons_menuOptionsButton"?d=Re:l==="QUEUE_item_timeIndicator"&&(d=s),a=a.replace(m,d)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const $o=`<div class="LCDbody">
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
</div>`;function qo(){Yo(),ze(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Fo(t)}),Qo(),D()&&document.getElementById("LCDbody").addEventListener("click",Ho)}function Ho(e){e.stopPropagation(),k({param:"cheese"},e,"lcd_mobile_body")}function Yo(){let e="LCDbody",t=$o;for(const[i,n]of Object.entries(y)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,n)}const o=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<o.length;i++){const n=o[i].toString(),s=new RegExp(`\\{${n}\\}`,"g");let a="";(n==="LCD_titleText_placeholder"||n==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function ze(){let e;const t=document.getElementById("LCDtitleText"),o=document.getElementById("LCDrightcontent"),i=1.4;function n(){let r,l,m;e=o.clientWidth,l=s(),m=e/i,m>l?r=l+10:r=m,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),l=document.createElement("span");l.style.visibility="hidden",l.style.whiteSpace="nowrap",l.textContent=r.textContent,document.body.appendChild(l);const m=l.offsetWidth;return document.body.removeChild(l),m}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(n)}}const c=a();window.addEventListener("resize",c),n()}function Fo(e){e.stopPropagation(),e.target,k([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Qo(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",zo)})}function zo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const o=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),ti(o)}function Ko(e,t){const o=document.documentElement;o.style.setProperty("--LCD-afterContent-bottom-left",e),o.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],O=[],g=0,Ke="",Ve="",We="";document.getElementById("audio");document.getElementById("PLAYERsource");let h="off",G="off",K="paused";function Ze(e){u=[],g=0,u=_e(e),u.length>0&&(K="playing",J())}function Vo(e){u=[],g=0,u=_e(e),u.length>0&&(G="off",tt(),K="playing",J())}function _e(e){e=JSON.parse(e);const t=[],o=e.ProjectContributors,i=e.ProjectName,n=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,r=a.Duration,l=a.URL;t.push({img:n,song_name:c,url:l,duration:r,project_name:i,project_contributors:o})}}catch(a){console.log(a)}return t}function Wo(e){const t=e.current_queue,o=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const n=e.progress;u=t,g=o,ri(i),u!==void 0&&u.length>0&&ii(n)}async function Zo(e){const t=e.PROJECT_ID,o=e.QUEUE_POSITION,i=await H(t),n=_e(i);if(o==="later")u=u.concat(n),O=O.concat(n);else if(o==="next"){let s=u.slice(0,g+1),a=u.slice(g+1);u=s,u=u.concat(n),u=u.concat(a),s=O.slice(0,g+1),a=O.slice(g+1),O=s,O=O.concat(n),O=O.concat(a)}j()}function ae(){Xo()}function Xo(){const e=document.getElementById("audio");e.paused?(V("playing"),K="playing",e.play().then(t=>it()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",V("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ae()});navigator.mediaSession.setActionHandler("pause",function(){ae()});function Xe(){at()}function et(){ct()}function ei(){document.getElementById("audio").addEventListener("ended",ai)}function ti(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function ni(){ci()}function oi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:h,PLAYBACK_shuffle_state:G,progress:t}}function tt(){if(G==="off"){G="on",Le(G);const t=g+1;O=[...u],u.slice(0,g);const o=u.slice(t);vn(o);const i=o.length;u.splice(g,i,...o),j()}else{G="off",Le(G);const t=[...O],n=document.getElementById("PLAYERsource").src.split("/"),s=n[n.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(g=e);j()}}function J(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${E}/${u[g].url}/3/`,e.load(),K==="playing"?(e.play().then(o=>it()).catch(o=>console.log(o)),V("playing")):V("paused"),ot(),nt()}function ii(e){const t=document.getElementById("audio"),o=document.getElementById("PLAYERsource");o.src=`${E}/${u[g].url}/3/`,t.load(),t.currentTime=e,V("paused"),ot(),nt()}function nt(){const e=document.getElementById("audio"),t=document.documentElement,o=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const i=e.duration,n=e.currentTime,s=Math.floor(i)-n,a=`"-${Ee(s)}"`,r=`"${Ee(Math.floor(n))}"`,l=n/i*100,m=`${l}%`;Ko(r,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),o.value=l,st()})}function ot(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),o=document.getElementById("LCDbottomText"),i=document.getElementById("LCDimage"),n=document.getElementById("LCDimageMobile");e.innerHTML=u[g].song_name,t.innerHTML=u[g].song_name,o.innerHTML=u[g].project_contributors,ze(),i.src=`${E}/${u[g].img}/3/`,n.src=`${E}/${u[g].img}/3/`,Ke=`${E}/${u[g].img}/5/`,Ve=u[g].song_name,We=u[g].project_contributors,j()}function it(){let e=u[g];const t=[{src:`${E}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${E}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${E}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${E}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${E}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${E}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),st()}function st(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function si(){console.log("PLAYBACK_stop_playback, clear top")}function ai(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>g+1&&(h=="off"||h=="on")?(g+=1,J()):h=="song"?J():t==g+1&&h=="on"?(g=0,J()):si()}function at(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>g+1&&(e.pause(),g+=1,J())}navigator.mediaSession.setActionHandler("nexttrack",function(){at()});function ct(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,g>0&&(e.pause(),g-=1,J())}navigator.mediaSession.setActionHandler("previoustrack",function(){ct()});function ci(){h=="off"?(h="on",q(h)):h=="on"?(h="song",q(h)):(h="off",q(h))}function ri(e){e=="off"?(h="off",q(h)):e=="on"?(h="on",q(h)):(e="song",h="on",q(h))}function li(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),o=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),n=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",di),t.addEventListener("click",ui),o.addEventListener("click",mi),i.addEventListener("click",gi),n.addEventListener("click",pi)}function di(){tt()}function ui(){et()}function mi(){ae()}function gi(){Xe()}function pi(){ni()}function Le(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=y.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=y.icons_loop_song;return}}function V(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=y.icons_pause;return}if(e=="paused"){t.src=y.icons_play;return}}function _i(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){rt(e);const o=document.getElementById("volumeRangeSlider");o.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(o=>{o.addEventListener("input",fi)})}function fi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const o=t.value;rt(o)}function rt(e){function t(n,s,a){return n>=s&&n<=a}function o(n){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=n&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(n).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){o("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){o("volumeControlOne");return}if(t(e,34,66)){o("volumeControlTwo");return}if(t(e,67,100)){o("volumeControlThree");return}}function vi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const n=t.value;console.log(n),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Ei=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,yi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function bi(){setTimeout(()=>{let e="MAINcontentPages",t=yi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Ti)},1)}async function Ti(e){console.log("the signup event was caught"),e.preventDefault(),hi();const t=document.getElementById("SETTINGSsignupForm"),o={};try{for(const n of t.elements)n.type==="email"&&(o[n.name]=n.value);const i=await fetch(`${P}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(i.ok){const n=await i.json();o.token=n.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const r=await convertImageToBase64(c);o[a.name]=r}}else o[a.name]=a.value;const s=await fetch(`${P}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(s.ok){const a=await s.json();le(),Ii(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const n=await i.json(),s="There was an error with the email, check that the details are correct.";le(),Pe(),alert(s)}}catch{le(),Pe(),alert("There was an error, try again")}}function hi(){const e=document.getElementById("spinner");e.style.display="block"}function le(){const e=document.getElementById("spinner");e.style.display="none"}function Ii(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Pe(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let oe=!1,Be=!1,Oe=!1,Se=!1;async function wi(){await Pi()?lt():Be||(Ci(),Be=!0)}function Ci(){Bi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${P}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Me(),bi()}))}).catch(s=>{console.error("Fetch error:",s)});const o=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),n=document.getElementById("password");o.addEventListener("submit",async s=>{if(s.preventDefault(),oe)return!1;oe=!0;const a=i.value,c=n.value;try{await Li(a,c)?(Se=!0,Oi(),lt(),setTimeout(Me,2e3)):(Se=!1,Si(),console.log("Login failed. Retry!")),oe=!1}catch(r){console.error("Error:",r),oe=!1}return!1})}async function Li(e,t){try{const i=await(await fetch(`${P}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(i.Authenticated===!0){const n=i.jwt;localStorage.setItem("JWT",n)}return i.Authenticated}catch(o){return console.error(o),!1}}async function Pi(){const e=await fetch(`${P}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?(console.log("Deal with JWT not valid"),!1):e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function Bi(){let e="MAINcontentPages",t=Ei;document.getElementById(e).innerHTML+=t}function Me(){if(Oe===!0)return;Oe=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function Oi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Si(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Mi=`<!-- audio tag -->
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
</div>`;const P="/apis",E="/media";async function lt(){ei(),mn(),gn(),qo(),li(),vi(),_i(),Nn(),Ro(),Hn()}if(!window.hasCodeRun){let e=Mi;for(const[t,o]of Object.entries(y)){const i=new RegExp(`\\{${t}\\}`,"g");e=e.replace(i,o)}document.getElementById("app").innerHTML=e,wi(),window.hasCodeRun=!0}
