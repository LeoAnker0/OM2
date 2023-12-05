(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Ae="/assets/menu_options_button-a1d7bbe3.svg",Tt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,ht=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,It=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Ct="/assets/volume_null-e39cf06f.svg",wt="/assets/recently_added-a0a983c6.svg",Lt="/assets/volume_3-c8ab0a75.svg",Pt="/assets/orange_music_text_logo_black-12e7386c.svg",Bt="/assets/volume_2-cfdac9da.svg",Ot="/assets/browse_2-85030bba.svg",St="/assets/volume_1-27e93416.svg",Mt="/assets/orange_music_logo_white-2a680ea2.svg",Rt="/assets/search_icon-4f5e4381.svg",xt="/assets/orange_music_text_logo_black-91f9e706.png",Dt="/assets/up_next_queue_button-14fedba2.svg",Nt="/assets/orange_music_logo_yellow-a109ff64.svg",At="/assets/playlist-c6e9024f.svg",jt="/assets/loop_button-aef56865.svg",kt="/assets/help_icon-867fec9d.svg",Ut="/assets/play_button-b1e2d3a4.svg",Gt="/assets/browse-14744f27.svg",Jt="/assets/orange_music_text_logo_white-7f0ba909.svg",$t="/assets/back_button-8128cade.svg",Ht="/assets/Albums-2e81dc74.svg",qt="/assets/songs-016b7188.svg",Yt="/assets/orange_music_logo_black-4d7e4591.svg",Ft="/assets/your_uploaded_songs-06535705.svg",Qt="/assets/artist-ab677d43.svg",zt="/assets/shuffle_button-c2f06bc4.svg",Vt="/assets/orange_music_text_logo_white-4907051e.png",Kt="/assets/listen_now-c7438154.svg",Wt="/assets/derpy-21c20ae5.svg",Xt="/assets/next_button-9a850710.svg",Zt="/assets/recently_added-7ff28139.svg",en="/assets/play_button-5eeedbe6.svg",tn="/assets/browse-e8be8609.svg",nn="/assets/albums-681507b8.svg",on="/assets/listen_now.2-bfa293ac.svg",sn="/assets/your_uploads-02e5c93c.svg",an="/assets/play_button.2-fc90fac7.svg",cn="/assets/listen_now-fb02ffce.svg",rn="/assets/browse.2-15b501dd.svg",ln="/assets/place_holder_image-d4006a96.svg",dn="/assets/icons_MOGitems_add-19e679f7.svg",un="/assets/back-9279721d.svg",mn="/assets/forwards-605bd405.svg",gn="/assets/icons_close-57e87944.svg",pn="/assets/icons_pause-8012f8cc.svg",_n="/assets/icons_loop-32d1576c.svg",fn="/assets/icons_loop_song-87f53dc7.svg",vn="/assets/icons_play-a5074c5b.svg",En="/assets/icons_settings-793063fb.svg",yn="/assets/love-07ac5006.svg",C={icons_volumeNull:Ct,icons_recentlyAdded:wt,icons_volume3:Lt,icons_orangeMusicTextLogoBlack:Pt,icons_volume2:Bt,icons_browse2:Ot,icons_volume1:St,icons_orangeMusicLogoWhite:Mt,icons_searchIcon:Rt,icons_orangeMusicTextLogoBlackPng:xt,icons_queueButton:Dt,icons_orangeMusicLogoYellow:Nt,icons_playlist:At,icons_loopButton:jt,icons_helpIcon:kt,icons_playButton:Ut,icons_browse:Gt,icons_menuOptionsButton:Ae,icons_orangeMusicTextLogoWhite:Jt,icons_backButton:$t,icons_Albums:Ht,icons_songs:qt,icons_orangeMusicLogoBlack:Yt,icons_yourUploadedSongs:Ft,icons_artist:Qt,icons_shuffleButton:zt,icons_orangeMusicTextLogoWhitePng:Vt,icons_listenNow:Kt,icons_derpy:Wt,icons_nextButton:Xt,icons_recentlyAddedV2:Zt,icons_playButtonV2:en,icons_browseV2:tn,icons_albumsV2:nn,icons_listenNow2V2:on,icons_yourUploads:sn,icons_playButton2:an,icons_listenNowV2:cn,icons_browse2V2:rn,v3_placeholder:ln,icons_MOGitems_add:dn,icons_back:un,icons_forwards:mn,icons_close:gn,icons_pause:pn,icons_loop:_n,icons_loop_song:fn,icons_play:vn,icons_settings:En,current_year:new Date().getFullYear(),icons_love:yn};function bn(){let e="topleftContentArea",t=Tt;for(const[n,i]of Object.entries(C)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function Tn(){let e="toprightContentArea",t=ht;for(const[n,i]of Object.entries(C)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function hn(){let e="MAINcontentContainer",t=It;for(const[n,i]of Object.entries(C)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const In=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Cn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function wn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Te(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function Ln(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function Pn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const i=Math.floor(n/60);return`${i} minute${i>1?"s":""} ago`}else if(n<86400){const i=Math.floor(n/3600);return`${i} hour${i>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const i=Math.floor(n/86400);return`${i} day${i>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function _e(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Bn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function On(e,t){let n;return function(){const i=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(i,o)},t)}}let he,de=!1;function Sn(e,t,n){const i=Date.now();function o(){const l=Date.now()-i,r=Math.min(l/1e3,1),d=s(t,r,n);console.log(d),e.style.backgroundColor=`${d}`,r<1||de?requestAnimationFrame(o):e.style.backgroundColor=t}function s(c,l,r){return a(r,c,l)}function a(c,l,r){const d=function(f){return f=f.toString(16),f.length===1?"0"+f:f},u=parseInt(c.substring(1,3),16),b=parseInt(c.substring(3,5),16),v=parseInt(c.substring(5,7),16),g=parseInt(l.substring(1,3),16),p=parseInt(l.substring(3,5),16),_=parseInt(l.substring(5,7),16),y=Math.round(u*(1-r)+g*r),T=Math.round(b*(1-r)+p*r),L=Math.round(v*(1-r)+_*r);return"#"+d(y)+d(T)+d(L)}clearTimeout(he),he=setTimeout(()=>{de=!1},500),de=!0,o()}function Mn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let i,o,s;i=parseInt(n[1],10),o=parseInt(n[2],10),o=o/100,s=parseInt(n[3],10),s=s/100;const a=Rn(i,o,s),c=ue(a[0]),l=ue(a[1]),r=ue(a[2]);return xn({r:c,g:l,b:r})}function Rn(e,t,n){let i=t*Math.min(n,1-n),o=(s,a=(s+e/30)%12)=>n-i*Math.max(Math.min(a-3,9-a,1),-1);return[o(0),o(8),o(4)]}function ue(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function xn(e){const t=n=>{const i=n.toString(16);return i.length===1?"0"+i:i};return"#"+t(e.r)+t(e.g)+t(e.b)}const Dn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Nn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,An=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,jn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,kn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Un=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,je=15;let z=0;async function Gn(){try{const e=document.getElementById("MAINcontentPages");Jn();const t=await qe(je,z);z+=t.length,$n(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function ke(){z=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ue),e.innerHTML=""}function Jn(){let e="MAINcontentPages",t=jn;for(const[n,i]of Object.entries(C)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function $n(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=kn;for(const[a,c]of Object.entries(C)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Ie(e);const i=document.getElementById("MOGcontainer");i.addEventListener("click",function(a){Ue(a,e)});let o;i.addEventListener("touchstart",function(a){a.timeStamp,o=setTimeout(function(){s(a,e)},500)}),i.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(o)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],d=c[r].project_id;console.log(d),Ge(a,d)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await qe(je,z);z+=r.length,r.length>0&&Ie(r)}})}function Ie(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var i=0;i<=n-1;i++){const o=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=i,a=e[i].img,c=e[i].top,l=e[i].bottom,r=e[i].days,d=Ln(r);let u=Un;for(const[b,v]of Object.entries(C)){const g=new RegExp(`\\{${b}\\}`,"g");u=u.replace(g,v)}for(let b=0;b<o.length;b++){const v=o[b].toString(),g=new RegExp(`\\{${v}\\}`,"g");let p="";v==="MOG_image"?p=`${I}/${a}/4/`:v==="MOG_text1"?p=c:v==="MOG_text2"?p=l:v==="MOG_checkedDate"?p=d:v==="MOGI_placeholder_itemID"&&(p=s),u=u.replace(g,p)}t.innerHTML+=u}}async function Ue(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await F(o);at(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1],o=t[i].project_id;Ge(e,o)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;N(`/projects/${o}`)}n.id==="MOGaddNewItem"&&Hn()}function Ge(e,t){e.stopPropagation(),k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Hn(){N("/new-project/")}const qn=`<div class="ADMINusersTableInfoRow">
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
</div>`,Yn=`<h1>Admin</h1>
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
</form>`,Fn=`<h1>Admin</h1>
<p>You are not an admin user</p>`,Qn=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,zn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,Vn=`<div class="settings_container">
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
</div>`;let Je;async function Kn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await fe("profile_picture"),n=`${I}/${t}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,i.addEventListener("click",Wn)}catch(t){console.error("Error initializing account image:",t)}}function Wn(e){e.stopPropagation(),Xn(e)}function Xn(e){k([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Zn(){await go()}let $e="admin";const ie=[{name:"general",markup:Qn,button_id:"settings_button_general",function:to},{name:"user",markup:zn,button_id:"settings_button_user",function:no},{name:"admin",markup:Fn,button_id:"settings_button_admin",function:oo}];function eo(){const e=document.getElementById("MAINcontentPages");let t=Vn;for(const[o,s]of Object.entries(C)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Ce($e);for(var i=ie.length-1;i>=0;i--){const o=ie[i].button_id;document.getElementById(o).addEventListener("click",function(a){const c=a.srcElement.id,r=ie.find(d=>d.button_id===c).name;Ce(r)})}n.addEventListener("click",function(){N("/")})}function He(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Ce(e){$e=e;const t=["users_img"],n=document.getElementById("view_container"),i=ie.find(s=>s.name===e);let o=i.markup;for(const[s,a]of Object.entries(C)){const c=new RegExp(`\\{${s}\\}`,"g");o=o.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${I}/${Je}/4/`),o=o.replace(c,l)}n.innerHTML=o,i.function()}function to(){console.log("general")}function no(){console.log("user")}async function oo(){if((await fe("admin"))[0].admin!==!0)return;const n=["users_img"],i=document.getElementById("view_container");let o=Yn,s=[];for(const[r,d]of Object.entries(C)){const u=new RegExp(`\\{${r}\\}`,"g");o=o.replace(u,d)}for(let r=0;r<n.length;r++){const d=n[r].toString(),u=new RegExp(`\\{${d}\\}`,"g");let b="";d==="users_img"&&(b=`${I}/${Je}/4/`),o=o.replace(u,b)}i.innerHTML=o;const a=await mo(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const d=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],u=a[r].username,b=a[r].uuid,v=a[r].verified,g=a[r].email,p=a[r].admin,_=r;let y=a[r].storage_used;y=_e(y);let T=qn,L=a[r].profile_picture;L=`${I}/${L}/1/`;for(let f=0;f<d.length;f++){const h=d[f].toString(),O=new RegExp(`\\{${h}\\}`,"g");let P="";h==="Username"?P=u:h==="Email"?P=g:h==="UUID"?P=b:h==="Verified"?P=v:h==="Space_Used"?P=y:h==="profile_picture_url"?P=L:h==="checkbox_number"?P=_:h==="Admin"&&(P=p),T=T.replace(O,P)}c.innerHTML+=T}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const d=c.querySelectorAll('input[type="checkbox"]'),u=[],b=document.getElementById("settings_admin_selected_items_visualition");d.forEach(function(v){if(v.checked){const _={id:v.id.replace("admin_users_table_check_box_",""),value:v.value};u.push(_)}}),u.forEach(function(v){const p=a[v.id].uuid;s.push(p)}),b.innerHTML=`Selected Items: ${s.length}`}}async function io(){const e=await fe("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let i="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;N(c),li(t)}else a();function o(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=m,r=E,d=_i();d.current_path=c,d.current_queue=l,d.current_index=r;const u=o(d);u!==i&&(lo("last_state",d),i=u,n.set("playback_states",u))}function a(){N(currentPath)}}function so(){Fe(),He(),Gn()}function ao(e){ke(),He(),vo(e)}function co(){ke(),Fe(),eo()}const we={"/":so,"/new-project/":uo,"/projects/:projectID":ao,"/settings/":co};function ro(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${I}/assets/hippo.webp">
    `;function n(){N("/")}}function N(e){const t=Object.keys(we);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=we[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}ro()}async function lo(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${S}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function fe(e){try{return(await(await fetch(`${S}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function se(e,t,n){try{const i={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${S}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error, yes")}catch(i){console.error("Error:",i)}}async function F(e){try{return(await(await fetch(`${S}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function qe(e,t){try{const o=(await(await fetch(`${S}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):(console.log("Projects is not an array:",o),[])}catch(n){return console.error("Error:",n),[]}}async function uo(){try{const i=`/projects/${(await(await fetch(`${S}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;N(i)}catch(e){console.error("Error:",e)}}async function mo(){try{return(await(await fetch(`${S}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function go(){try{const t=await(await fetch(`${S}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const po=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,_o=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}">
    <div class="PROJECTview-projectTable-rowItem-1" style="user-select: none;">
        <img src="{PROJECTviewRow_img}" style="user-select: none; pointer-events: none;">
        <div contenteditable="{PROJECTviewRow_contentEditable}" data-is-title="true" draggable="false">{PROJECTviewRow_songTitle}</div>
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
</div>`,fo=`<div class="PROJECTviewContainerEnvironment">
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
            <div class="PROJECTview-projectArea-uploadArea" id="PROJECTview_upload_area_files_upload_box">
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
</div>`,ae=[];let ge=!1,Le=!0,Ye;async function vo(e){To({ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/default_pfp"}),sessionStorage.setItem("description","Wonderful notes are loading..."),Pe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{N("/")}),setTimeout(async()=>{const o=await F(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,Ye=s,i(s),bo(s)}},1);function i(o){const s=o.Description;yo(o),sessionStorage.setItem("description",s),Pe(),ho(),Co(),wo(o),Lo(o),Oo(o),xo(),We(o.ProjectName),Do(o.ProjectID),Mo(o)}}function Fe(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function Eo(){Qe();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=await F(t),s=JSON.parse(i).PictureURL,a=`${I}/${s}/5/`;n.src=a}function yo(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3"),i=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${I}/${e.PictureURL}/5/`;t.innerText=e.ProjectName,n.innerText=e.ProjectContributors,i.src=o}function bo(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(i){const o=t.innerText;We(o),se(e.ProjectID,"project_name",o)}),n.addEventListener("blur",function(i){const o=n.innerText;se(e.ProjectID,"project_contributors",o)})}function To(e){let t="MAINcontentPages",n=fo;for(const[o,s]of Object.entries(C)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=Pn(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${I}/${e.PictureURL}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Pe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function ho(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function o(){n.style.display="grid",D()&&(i.style.zIndex="40")}e.addEventListener("click",function(){o()}),t.addEventListener("dblclick",function(){o()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),o()),s=c})}function Io(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Co(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function wo(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){Be(e)}),n.addEventListener("click",function(i){i.target===n&&Be(e)})}function Be(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");sessionStorage.setItem("description",n),se(e.ProjectID,"description",n),i.style.display="none",Io(),o.style.zIndex="1"}async function Lo(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=await F(e.ProjectID);t.addEventListener("click",function(){at(s)}),n.addEventListener("click",function(){ri(s)}),i.addEventListener("click",function(){Oe(event,s)}),o.addEventListener("click",function(){Oe(event,s)})}function Oe(e,t){e.stopPropagation(),t=JSON.parse(t),e.target;const i=window.location.pathname.split("/"),o=i[i.length-1];k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function Po(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";Bo(e),Y(),N(t)}else Y()}async function Bo(e){e=e.PROJECT_ID;try{const n=await(await fetch(`${S}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error("Error:",t)}}function Oo(e){document.getElementById("PROJECTview_projectAreaContainer"),So();const t=document.getElementById("PROJECTview-projectTable"),n=e.ProjectJSON,i=Mn("--orange"),o=r=>`#${r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(d=>parseInt(d,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n!==null){let d=function(g){g.dataTransfer.setData("text/plain",g.target.dataset.rowId),g.dataTransfer.getData("text/plain"),s=g.srcElement,s.style.backgroundColor="hsl(0, 0%, 65%)",Bn(g.srcElement)},u=function(g){g.preventDefault();const p=g.target.closest(".PROJECTview-projectTable-rowContainer");if(p!==s){const _=getComputedStyle(p).backgroundColor,y=o(_);Sn(p,y,i)}},v=function(g){g.preventDefault(),s.style,s.style.backgroundColor="";const p=g.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${p}"]`),y=g.target.closest(".PROJECTview-projectTable-rowContainer");y&&(y.getAttribute("data-row-id"),y.before(_))};var a=d,c=u,l=v;const r=[];if(n)for(const g of n)r.push({img:e.PictureURL,songTitle:g.SongName,artistName:e.ProjectContributors,projectName:_e(g.FolderSize),songDuration:`${Math.floor(g.Duration/60)}:${(g.Duration%60).toString().padStart(2,"0")}`,songSequence:g.SongSequence,version:g.Version,url:g.URL});for(let g=0;g<r.length;g++){r[g].ProjectID=g;const p=r[g];Ve(p)}const b=On(u,10);t.addEventListener("click",function(g){const p=g.target;if(g.stopPropagation(),p.tagName==="BUTTON"){const _=p.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),ze(g))}});{const g=t.querySelectorAll("[contenteditable]"),p=y=>{const f=`${y.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id")}-${y.target.textContent}`;se(Ye.ProjectID,"project_song_title",f)};g.forEach(y=>{y.addEventListener("blur",p)}),document.querySelectorAll(".PROJECTview-projectTable-rowContainer").forEach(y=>{y.draggable=!0,y.addEventListener("dragstart",d),y.addEventListener("dragover",b),y.addEventListener("drop",v)})}}}async function Qe(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await F(n),o=JSON.parse(i);o.ProjectID=n;const s=o,a=s.ProjectJSON,c=JSON.parse(a).songs_json,l=[];if(Array.isArray(c))for(const u of c)l.push({img:s.PictureURL,songTitle:u.song_name,artistName:s.ProjectContributors,projectName:_e(u.SongSize),songDuration:`${Math.floor(u.duration/60)}:${(u.duration%60).toString().padStart(2,"0")}`,song_sequence:u.song_sequence,url:u.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let u=d.length-1;u>0;u--)r.removeChild(d[u]);for(let u=0;u<l.length;u++){l[u].projectID=u;const b=l[u];Ve(b)}e.addEventListener("click",function(u){const b=u.target;if(u.stopPropagation(),b.tagName==="BUTTON"){const v=b.closest(".PROJECTview-projectTable-rowContainer");if(v){const g=v.getAttribute("data-row-id");ze(u),console.log(`Button in row ${g} clicked.`)}}})}function ze(e){e.stopPropagation(),e.target,k([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function So(){let e="PROJECTview_projectAreaContainer",t=po;for(const[n,i]of Object.entries(C)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function Ve(e){let t="PROJECTview-projectTable",n=_o;for(const[o,s]of Object.entries(C)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${I}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"?c=`${e.songSequence}-${e.version}`:s==="PROJECTviewRow_contentEditable"&&Le===!0?c=!0:s==="PROJECTviewRow_contentEditable"&&Le===!1&&(c=!1),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Mo(e){const t=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const s=o.dataTransfer.files;i(s,e)});let n=[];t.addEventListener("click",o=>{const s=o.target.id,a=document.createElement("input");s!=="PROJECTview_dropArea_submit_button"?(a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{n=a.files,console.log(n)}),a.click()):(console.log("the submit files button was clicked ",n),i(n,e))});function i(o,s){for(const a of o);Ro(o,s)}}async function Ke(e,t,n,i){const o=new FormData,s=localStorage.getItem("JWT"),a=new XMLHttpRequest,c=document.createElement("div"),l=document.createElement("div");ge=!0,o.append("file",e),o.append("project_id",i.project_id),o.append("jwt",s),c.classList.add("progress-bar"),l.classList.add("progress-fill"),c.appendChild(l),t.appendChild(c),a.upload.onprogress=function(r){if(r.lengthComputable){const d=r.loaded/r.total*100;l.style.width=d+"%",d===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",l.classList.add("complete"),n.textContent=`${e.name}`,Qe(),ge=!1,ae.length>0){const r=ae.shift();await Ke(r.file,r.uploadBox,r.fileNameLabel,r.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",l.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${S}/files/upload_audio/${i.ProjectID}`,!0),a.send(o)}async function Ro(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div"),s=document.createElement("div");o.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o);const a={file:i,uploadBox:o,fileNameLabel:s,details:t};if(ae.push(a),!ge){const c=ae.shift();await Ke(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function We(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function xo(){const e=new IntersectionObserver(o,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function o(s,a){s.forEach(c=>{c.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):c.isIntersecting&&!D()||!c.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!c.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",i.style.visibility="visible")})}}function Do(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){No(o,s)}}function No(e,t){e.target;const n="update_project_image",i={project_id:t};e.stopPropagation(),k(i,e,n)}const Ao=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function jo(e,t){const n=new XMLHttpRequest,i=new FormData;localStorage.getItem("JWT"),i.append("file",e),n.upload.onprogress=function(o){o.lengthComputable&&o.loaded/o.total*100},n.onload=function(){Ho()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${S}/files/upload_photo/${t}`,!0),n.send(i)}async function ko(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await jo(n,t)}const Xe='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let J,A=!1;function k(e,t,n){n===void 0&&Jo(e,t),n!==void 0&&n==="update_project_image"&&$o(e,t),n!==void 0&&n==="lcd_mobile_body"&&Go(),n!==void 0&&n==="notice"&&Uo(e)}function Uo(e,t){let n=20,i=80;const o=document.querySelector("main"),s=document.querySelector(".topHalf-container");D()&&(o.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Xe,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=i+"px";if(a.addEventListener("click",ve),c.style.left=l,c.style.top=r,c.style.padding="5px",J&&pointerType===""){const _=J.getBoundingClientRect();n=_.left+window.scrollX,i=_.top+window.scrollY;let y=n+"px",T=i+"px";c.style.left=y,c.style.top=T}for(let _=0;_<e.length;_++)et(e[_]);c.children[0];const u=c.offsetWidth,b=c.offsetHeight,v=Ze("MENUmodalBody"),g=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",p),v.xOverflow==!0&&(l=n-u+"px",c.style.left=l),v.yOverflow==!0&&(r=i-b+"px",c.style.top=r);for(let _=0;_<g.length;_++){const y=g[_];y.setAttribute("data-menu-item-id",_),y.addEventListener("click",function(T){T.stopPropagation();const f=T.target.getAttribute("data-menu-item-id"),h=e[f].function,O=e[f].optionalParams;if(h=="TEST")console.log("the button worked");else if(h!="None"){tt[h](O);return}else return})}function p(_){(_.key==="Escape"||_.keyCode===27)&&(document.removeEventListener("keydown",p),Y())}}function Go(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),i=document.getElementById("MENUmodalEnvironment");let o=An;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[B,R]of Object.entries(C)){const x=new RegExp(`\\{${B}\\}`,"g");o=o.replace(x,R)}i.style.display="block",i.innerHTML=o;const r=document.getElementById("LCD_mobile_body_song_title"),d=document.getElementById("LCD_mobile_body_artist_title"),u=document.getElementById("LCD_mobile_body_img"),b=s.duration,g=s.currentTime/b*100,p=document.getElementById("LCDMB_seek_input"),_=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const y=document.getElementById("LCDMB_back"),T=document.getElementById("LCDMB_play"),L=document.getElementById("LCDMB_play_icon"),f=document.getElementById("LCDMB_next"),h=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{O(),A===!0&&H()}),O(),P(),_.style.width=`${g}%`,s.addEventListener("timeupdate",()=>{const B=s.duration,x=s.currentTime/B*100;_.style.width=`${x}%`}),p.addEventListener("input",function(){const B=s.duration,R=p.value;s.currentTime=B*(R/100)}),y.addEventListener("click",()=>{rt(),O(),A===!0&&H()}),T.addEventListener("click",()=>{ce(),O(),P()}),f.addEventListener("click",()=>{ct(),O(),A===!0&&H()}),h.addEventListener("click",()=>{A===!1?(ye(),A=!0):(be(),A=!1)}),A===!0?ye():be(),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1);function O(){u.src=ot,r.innerText=it,d.innerText=st}function P(){s.paused?L.src=C.icons_playButtonV2:L.src=C.icons_derpy}function H(){const B=document.getElementById("LCD_mobile_queue_content_container");B.innerHTML="";for(let R=E+1;R<m.length;R++){const x=m[R],ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Q=x.img,Et=x.song_name,yt=x.project_contributors;let re=Nn;for(let le=0;le<ee.length;le++){const te=ee[le].toString(),bt=new RegExp(`\\{${te}\\}`,"g");let ne="";te==="queue_item_img"?ne=`${I}/${Q}/3/`:te==="queue_item_song_name"?ne=Et:te==="queue_item_song_artist"&&(ne=yt),re=re.replace(bt,ne)}B.innerHTML+=re}}function ye(){function B(R){R.forEach(x=>{document.querySelectorAll("."+x).forEach(Q=>{Q.classList.add("queue_visible")})})}B(a),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z),H()}function be(){function B(R){R.forEach(x=>{document.querySelectorAll("."+x).forEach(Q=>{Q.classList.remove("queue_visible")})})}B(a),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1)}function W(B){A===!1&&(c=B.touches[0].clientY)}function X(B){B.preventDefault()}function Z(B){l=B.changedTouches[0].clientY,l-c>70&&(Y(),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z))}}function Jo(e,t){J=document.activeElement;const n=t.pointerType;let i=t.clientX,o=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=Xe,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=i+"px",d=o+"px";if(c.addEventListener("click",ve),l.style.left=r,l.style.top=d,J&&n===""){const T=J.getBoundingClientRect();i=T.left+window.scrollX,o=T.top+window.scrollY;let L=i+"px",f=o+"px";l.style.left=L,l.style.top=f}for(let T=0;T<e.length;T++)et(e[T]);const b=l.children[0],v=l.offsetWidth,g=l.offsetHeight,p=Ze("MENUmodalBody"),_=l.getElementsByClassName("MENUmodalItemContainer");n===""?b.focus():n==="mouse"&&(b.focus(),b.blur()),document.addEventListener("keydown",y),p.xOverflow==!0&&(r=i-v+"px",l.style.left=r),p.yOverflow==!0&&(d=o-g+"px",l.style.top=d);for(let T=0;T<_.length;T++){const L=_[T];L.setAttribute("data-menu-item-id",T),L.addEventListener("click",function(f){f.stopPropagation();const O=f.target.getAttribute("data-menu-item-id"),P=e[O].function,H=e[O].optionalParams;if(P=="TEST")console.log("the button worked");else if(P!="None"){tt[P](H);return}else return})}function y(T){(T.key==="Escape"||T.keyCode===27)&&(document.removeEventListener("keydown",y),Y())}}function $o(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",l=i+"px";D()&&(o.style.zIndex="40",s.style.zIndex="0"),o.style.zIndex="2",a.innerHTML=Dn,a.style.display="block",a.addEventListener("click",ve);const r=document.getElementById("MENUmodalBody"),d=document.getElementById("MENUmodalBody_image_select_file_drop_area"),u=document.getElementById("MENUmodalBody_image_select_file_select_button"),b=document.getElementById("MENUmodalBody_image_select_preview_area"),v=document.getElementById("MENUmodalBody_image_select_submit_button"),g=document.getElementById("MENUmodalBody_image_select_submit_button_container");r.style.left=c,r.style.top=l;let p,_;function y(f,h){return function(){const O=this,P=arguments;clearTimeout(_),_=setTimeout(()=>{f.apply(O,P)},h)}}function T(f,h){y(ko,100)(f,h)}function L(f){if(p){const h=URL.createObjectURL(p),O=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");b.src=h,v.style.visibility="visible",g.style.outline="3px solid var(--primary)",v.addEventListener("click",()=>{T(p,f.project_id),O.style.visibility="visible"})}else console.log("No file selected.")}d.addEventListener("dragover",f=>{f.preventDefault()}),d.addEventListener("drop",f=>{f.preventDefault(),p=f.dataTransfer.files[0],L(e)}),u.addEventListener("click",()=>{const f=document.createElement("input");f.type="file",f.accept="image/*",f.addEventListener("change",h=>{p=h.target.files[0],L(e)}),f.click()})}function Ho(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Y(),Eo()}function Ze(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=o+s,r=c+a;let d=!1,u=!1;return l>n&&(d=!0),r>i&&(u=!0),{xOverflow:d,yOverflow:u}}function et(e){const t=e.displayText,n=e.optionalSVG,i=document.getElementById("MENUmodalBody");let o;"colour"in e?o=e.colour:(o="var(--text)",D()&&(o="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=Ao.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(C)){const d=new RegExp(`\\{${l}\\}`,"g");a=a.replace(d,r)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function ve(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function Y(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10"),J&&J.focus()}const tt={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Po(e)},PLAYBACK_add_songs_to_queue(e){di(e)},SIGN_OUT_USER(e){Zn()},OPEN_SETTINGS_PAGE(e){N("/settings/")}};let U="hidden";function qo(){hn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");pe(U),e.addEventListener("click",Yo),t.addEventListener("click",Fo),j()}function Yo(){if(U==="hidden"){U="visible",pe(U);return}if(U==="visible"){U="hidden",pe(U);return}}function pe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Cn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function j(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=E+1;t<m.length;t++){m[t].id=t;const n=m[t],i=Zo(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){c.target.dataset.songId}),o.dataset.songId=n.id,o.addEventListener("click",Xo),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator"),a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Ko),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&Wo(c)}),o.addEventListener("dragstart",Qo),o.addEventListener("dragover",zo),o.addEventListener("drop",Vo),e.appendChild(o)}}function Fo(){const e=E+1;e>=0&&e<m.length?m.splice(e):m.length=0,j()}function Qo(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function zo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Vo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=m.find(c=>c.id===parseInt(t)),o=m.find(c=>c.id===parseInt(n.dataset.songId)),s=m.indexOf(i),a=m.indexOf(o);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,i),M.splice(s,1),M.splice(a,0,i),j())}function Ko(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=m.findIndex(o=>o.id===n);i!==-1&&(m.splice(i,1),M.splice(i,1)),j()}function Wo(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];k(i,e)}function Xo(e){}function Zo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=In;for(let l=0;l<t.length;l++){const r=t[l].toString(),d=new RegExp(`\\{${r}\\}`,"g");let u="";r==="QUEUE_item_image"?u=`${I}/${n}/3/`:r==="QUEUE_item_title"?u=i:r==="QUEUE_item_artist"?u=o:r==="icons_menuOptionsButton"?u=Ae:r==="QUEUE_item_timeIndicator"&&(u=s),a=a.replace(d,u)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const ei=`<div class="LCDbody">
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
</div>`;function ti(){oi(),nt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){ii(t)}),si(),D()&&document.getElementById("LCDbody").addEventListener("click",ni)}function ni(e){e.stopPropagation(),k({param:"cheese"},e,"lcd_mobile_body")}function oi(){let e="LCDbody",t=ei;for(const[i,o]of Object.entries(C)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function nt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let l,r,d;e=n.clientWidth,r=s(),d=e/i,d>r?l=r+10:l=d,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const d=r.offsetWidth;return document.body.removeChild(r),d}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function ii(e){e.stopPropagation(),e.target,k([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function si(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",ai)})}function ai(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),gi(n)}function ci(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let m=[],M=[],E=0,ot="",it="",st="";document.getElementById("audio");document.getElementById("PLAYERsource");let w="off",G="off",V="paused";function at(e){m=[],E=0,m=Ee(e),m.length>0&&(V="playing",$())}function ri(e){m=[],E=0,m=Ee(e),m.length>0&&(G="off",lt(),V="playing",$())}function Ee(e){e=JSON.parse(e);const t=[],n=e.ProjectContributors,i=e.ProjectName,o=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:o,song_name:c,url:r,duration:l,project_name:i,project_contributors:n})}}catch(a){console.log(a)}return t}function li(e){const t=e.current_queue,n=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const o=e.progress;m=t,E=n,bi(i),m!==void 0&&m.length>0&&fi(o)}async function di(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,i=await F(t),o=Ee(i);if(n==="later")m=m.concat(o),M=M.concat(o);else if(n==="next"){let s=m.slice(0,E+1),a=m.slice(E+1);m=s,m=m.concat(o),m=m.concat(a),s=M.slice(0,E+1),a=M.slice(E+1),M=s,M=M.concat(o),M=M.concat(a)}j()}function ce(){ui()}function ui(){const e=document.getElementById("audio");e.paused?(K("playing"),V="playing",e.play().then(t=>mt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(V="paused",K("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ce()});navigator.mediaSession.setActionHandler("pause",function(){ce()});function ct(){pt()}function rt(){_t()}function mi(){document.getElementById("audio").addEventListener("ended",Ei)}function gi(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function pi(){yi()}function _i(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:w,PLAYBACK_shuffle_state:G,progress:t}}function lt(){if(G==="off"){G="on",Se(G);const t=E+1;M=[...m],m.slice(0,E);const n=m.slice(t);wn(n);const i=n.length;m.splice(E,i,...n),j()}else{G="off",Se(G);const t=[...M],o=document.getElementById("PLAYERsource").src.split("/"),s=o[o.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(E=e);j()}}function $(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${I}/${m[E].url}/3/`,e.load(),V==="playing"?(e.play().then(n=>mt()).catch(n=>console.log(n)),K("playing")):K("paused"),ut(),dt()}function fi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${I}/${m[E].url}/3/`,t.load(),t.currentTime=e,K("paused"),ut(),dt()}function dt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const i=e.duration,o=e.currentTime,s=Math.floor(i)-o,a=`"-${Te(s)}"`,l=`"${Te(Math.floor(o))}"`,r=o/i*100,d=`${r}%`;ci(l,a),t.style.setProperty("--LCD-seekbar-width",d),t.style.setProperty("--LCD-seekbar-indicator-left",d),n.value=r,gt()})}function ut(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),i=document.getElementById("LCDimage"),o=document.getElementById("LCDimageMobile");e.innerHTML=m[E].song_name,t.innerHTML=m[E].song_name,n.innerHTML=m[E].project_contributors,nt(),i.src=`${I}/${m[E].img}/3/`,o.src=`${I}/${m[E].img}/3/`,ot=`${I}/${m[E].img}/5/`,it=m[E].song_name,st=m[E].project_contributors,j()}function mt(){let e=m[E];const t=[{src:`${I}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),gt()}function gt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function vi(){console.log("PLAYBACK_stop_playback, clear top")}function Ei(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>E+1&&(w=="off"||w=="on")?(E+=1,$()):w=="song"?$():t==E+1&&w=="on"?(E=0,$()):vi()}function pt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>E+1&&(e.pause(),E+=1,$())}navigator.mediaSession.setActionHandler("nexttrack",function(){pt()});function _t(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length,E>0&&(e.pause(),E-=1,$())}navigator.mediaSession.setActionHandler("previoustrack",function(){_t()});function yi(){w=="off"?(w="on",q(w)):w=="on"?(w="song",q(w)):(w="off",q(w))}function bi(e){e=="off"?(w="off",q(w)):e=="on"?(w="on",q(w)):(e="song",w="on",q(w))}function Ti(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",hi),t.addEventListener("click",Ii),n.addEventListener("click",Ci),i.addEventListener("click",wi),o.addEventListener("click",Li)}function hi(){lt()}function Ii(){rt()}function Ci(){ce()}function wi(){ct()}function Li(){pi()}function Se(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function K(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function Pi(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){ft(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Bi)})}function Bi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;ft(n)}function ft(e){function t(o,s,a){return o>=s&&o<=a}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=o&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Oi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Si=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Mi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ri(){setTimeout(()=>{let e="MAINcontentPages",t=Mi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",xi)},1)}async function xi(e){console.log("the signup event was caught"),e.preventDefault(),Di();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const o of t.elements)o.type==="email"&&(n[o.name]=o.value);const i=await fetch(`${S}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const o=await i.json();n.token=o.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${S}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();me(),Ni(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const o=await i.json(),s="There was an error with the email, check that the details are correct.";me(),Me(),alert(s)}}catch{me(),Me(),alert("There was an error, try again")}}function Di(){const e=document.getElementById("spinner");e.style.display="block"}function me(){const e=document.getElementById("spinner");e.style.display="none"}function Ni(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Me(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let oe=!1,Re=!1,xe=!1,De=!1;async function Ai(){await Ui()?vt():Re||(ji(),Re=!0)}function ji(){Gi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${S}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Ne(),Ri()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),oe)return!1;oe=!0;const a=i.value,c=o.value;try{await ki(a,c)?(De=!0,Ji(),vt(),setTimeout(Ne,2e3)):(De=!1,$i(),console.log("Login failed. Retry!")),oe=!1}catch(l){console.error("Error:",l),oe=!1}return!1})}async function ki(e,t){try{const i=await(await fetch(`${S}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(i.Authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.Authenticated}catch(n){return console.error(n),!1}}async function Ui(){const e=await fetch(`${S}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function Gi(){let e="MAINcontentPages",t=Si;document.getElementById(e).innerHTML+=t}function Ne(){if(xe===!0)return;xe=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function Ji(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function $i(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Hi=`<!-- audio tag -->
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
</div>`;const S="/apis",I="/media";async function vt(){mi(),bn(),Tn(),ti(),Ti(),Oi(),Pi(),Kn(),qo(),io()}if(!window.hasCodeRun){let e=Hi;for(const[t,n]of Object.entries(C)){const i=new RegExp(`\\{${t}\\}`,"g");e=e.replace(i,n)}document.getElementById("app").innerHTML=e,Ai(),window.hasCodeRun=!0}
