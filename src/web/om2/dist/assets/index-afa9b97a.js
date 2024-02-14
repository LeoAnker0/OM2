(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const We="/assets/menu_options_button-a1d7bbe3.svg",jt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,kt=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <button tabindex="0" class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" id="PLAYERshuffleIcon" />
                </div>
            </button>
            <!-- last -->
            <button tabindex="0" class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERbackButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_backButton}" alt="back icon" height="13" />
                </div>
            </button>
            <!-- play -->
            <button tabindex="0" class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERplayButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_play}" alt="play icon" height="20" id="PLAYERplayIcon" />
                </div>
            </button>
            <!-- next -->
            <button tabindex="0" class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERnextButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_nextButton}" alt="next icon" height="13" />
                </div>
            </button>
            <!-- loop -->
            <button tabindex="0" class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERloopButton">
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
            <div class="TOPRIGHT-accountcontrols-buttonarea-uploadQueue-container" id="uploadQueueButtonContainer">
                <button tabindex="0" class="TOPRIGHT-accountcontrols-buttonarea-uploadQueue-positioner" id="uploadQueueButton">
                    <div>
                        <img src="{icons_upload}" alt="upload queue icon" height="23" id="uploadIcon" style="filter: var(--make-svg-black);" />
                    </div>
                </button>
            </div>
            <div class="TOPRIGHT-accountcontrols-buttonarea-queue-container">
                <button tabindex="0" class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <div>
                        <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                    </div>
                </button>
            </div>
            <button tabindex="0" class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg" alt="user profile account image">
                </div>
            </button>
        </div>
    </div>
</div>`,Ut=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Gt="/assets/volume_null-e39cf06f.svg",Jt="/assets/recently_added-a0a983c6.svg",Ht="/assets/volume_3-c8ab0a75.svg",qt="/assets/orange_music_text_logo_black-12e7386c.svg",Yt="/assets/volume_2-cfdac9da.svg",$t="/assets/browse_2-85030bba.svg",Ft="/assets/volume_1-27e93416.svg",Qt="/assets/orange_music_logo_white-2a680ea2.svg",zt="/assets/search_icon-4f5e4381.svg",Vt="/assets/orange_music_text_logo_black-91f9e706.png",Kt="/assets/up_next_queue_button-14fedba2.svg",Wt="/assets/orange_music_logo_yellow-a109ff64.svg",Xt="/assets/playlist-c6e9024f.svg",Zt="/assets/loop_button-aef56865.svg",en="/assets/help_icon-867fec9d.svg",tn="/assets/play_button-b1e2d3a4.svg",nn="/assets/browse-14744f27.svg",on="/assets/orange_music_text_logo_white-7f0ba909.svg",sn="/assets/back_button-8128cade.svg",an="/assets/Albums-2e81dc74.svg",rn="/assets/songs-016b7188.svg",cn="/assets/orange_music_logo_black-4d7e4591.svg",dn="/assets/your_uploaded_songs-06535705.svg",ln="/assets/artist-ab677d43.svg",un="/assets/shuffle_button-c2f06bc4.svg",mn="/assets/orange_music_text_logo_white-4907051e.png",pn="/assets/listen_now-c7438154.svg",gn="/assets/derpy-21c20ae5.svg",_n="/assets/next_button-9a850710.svg",fn="/assets/recently_added-7ff28139.svg",vn="/assets/play_button-5eeedbe6.svg",En="/assets/browse-e8be8609.svg",yn="/assets/albums-681507b8.svg",hn="/assets/listen_now.2-bfa293ac.svg",bn="/assets/your_uploads-02e5c93c.svg",Tn="/assets/play_button.2-fc90fac7.svg",In="/assets/listen_now-fb02ffce.svg",wn="/assets/browse.2-15b501dd.svg",Cn="/assets/place_holder_image-d4006a96.svg",Ln="/assets/icons_MOGitems_add-19e679f7.svg",Pn="/assets/back-9279721d.svg",Bn="/assets/forwards-605bd405.svg",xn="/assets/icons_close-57e87944.svg",Sn="/assets/icons_pause-8012f8cc.svg",Mn="/assets/icons_loop-32d1576c.svg",On="/assets/icons_loop_song-87f53dc7.svg",Dn="/assets/icons_play-a5074c5b.svg",Rn="/assets/icons_settings-793063fb.svg",An="/assets/love-07ac5006.svg",Nn="/assets/upload-3bad9145.svg",C={icons_volumeNull:Gt,icons_recentlyAdded:Jt,icons_volume3:Ht,icons_orangeMusicTextLogoBlack:qt,icons_volume2:Yt,icons_browse2:$t,icons_volume1:Ft,icons_orangeMusicLogoWhite:Qt,icons_searchIcon:zt,icons_orangeMusicTextLogoBlackPng:Vt,icons_queueButton:Kt,icons_orangeMusicLogoYellow:Wt,icons_playlist:Xt,icons_loopButton:Zt,icons_helpIcon:en,icons_playButton:tn,icons_browse:nn,icons_menuOptionsButton:We,icons_orangeMusicTextLogoWhite:on,icons_backButton:sn,icons_Albums:an,icons_songs:rn,icons_orangeMusicLogoBlack:cn,icons_yourUploadedSongs:dn,icons_artist:ln,icons_shuffleButton:un,icons_orangeMusicTextLogoWhitePng:mn,icons_listenNow:pn,icons_derpy:gn,icons_nextButton:_n,icons_recentlyAddedV2:fn,icons_playButtonV2:vn,icons_browseV2:En,icons_albumsV2:yn,icons_listenNow2V2:hn,icons_yourUploads:bn,icons_playButton2:Tn,icons_listenNowV2:In,icons_browse2V2:wn,v3_placeholder:Cn,icons_MOGitems_add:Ln,icons_back:Pn,icons_forwards:Bn,icons_close:xn,icons_pause:Sn,icons_loop:Mn,icons_loop_song:On,icons_play:Dn,icons_settings:Rn,current_year:new Date().getFullYear(),icons_love:An,icons_upload:Nn};function jn(){let e="topleftContentArea",t=jt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function kn(){let e="toprightContentArea",t=kt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Un(){let e="MAINcontentContainer",t=Ut;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Gn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function j(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Xe(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Jn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Oe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Hn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function qn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function he(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Yn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function $n(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let De;const S=new Map;function Fn(e,t,n){S.has(e)||S.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!S.has(e))return;const r=Math.min(a/500,1);if(!S.has(e))return;const c=Qn(S.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||S.get(e).isChanging?S.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",S.delete(e))}clearTimeout(De),De=setTimeout(()=>{S.has(e)&&!S.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(S.get(e).animationFrameId),S.delete(e))},500),S.get(e).isChanging=!0;const i=Date.now();S.get(e).animationFrameId=requestAnimationFrame(o)}function Qn(e,t,n){return zn(n,e,t)}function zn(e,t,n){const o=function(y){return y=y.toString(16),y.length===1?"0"+y:y},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),m=Math.round(i*(1-n)+r*n),f=Math.round(s*(1-n)+c*n),E=Math.round(a*(1-n)+d*n);return"#"+o(m)+o(f)+o(E)}function Vn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Kn(o,i,s),r=fe(a[0]),c=fe(a[1]),d=fe(a[2]);return Wn({r,g:c,b:d})}function Kn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function fe(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Wn(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Xn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Zn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,eo=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,to=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="container">
        <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>`;function no(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueButton");e.innerHTML+=to,t.addEventListener("click",function(n){so()})}function oo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function io(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",ao()}function ve(e){const t=document.getElementById("UPLOAD_INDICATOR_container");t.style.width=`${e}%`}function so(e){console.log("displayUploadMenu");for(var t=V.length-1;t>=0;t--)V[t].file.name}function ao(){console.log("hide uploadMenu")}const Re=1500;let Ze=0,be=[],Ee;function k(e,t){const o=new Date().getTime();be.push({notificationText:e,notificationType:t,time:o}),et()}function et(){const t=new Date().getTime(),n=be.at(Ze);be.length>1?t-Ee>Re?(Ae(n.notificationText,n.notificationType),Ee=t):setTimeout(et,Re):(Ae(n.notificationText,n.notificationType),Ee=t)}function Ae(e,t){const n=document.getElementById("noticationContainer");let o;Ze+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const ro=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,co=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,lo=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
    </div>
    <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play">
        <div>
            <img src="{icons_playButtonV2}">
        </div>
    </div>
    <div aria-label="Display Menu" id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu">
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
</button>`,tt=15;let Z=0;async function uo(){try{const e=document.getElementById("MAINcontentPages");mo();const t=await dt(tt,Z);Z+=t.length,po(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function nt(){Z=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",ot),e.innerHTML=""}function mo(){let e="MAINcontentPages",t=ro;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function po(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=co;for(const[a,r]of Object.entries(C)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Ne(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){ot(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],m=r[d].project_id;console.log(m),it(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await dt(tt,Z);Z+=d.length,d.length>0&&Ne(d)}})}function Ne(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,m=Hn(d);let f=lo;for(const[E,y]of Object.entries(C)){const l=new RegExp(`\\{${E}\\}`,"g");f=f.replace(l,y)}for(let E=0;E<i.length;E++){const y=i[E].toString(),l=new RegExp(`\\{${y}\\}`,"g");let p="";y==="MOG_image"?p=`${w}/${a}/3`:y==="MOG_text1"?p=r:y==="MOG_text2"?p=c:y==="MOG_checkedDate"?p=m:y==="MOGI_placeholder_itemID"&&(p=s),f=f.replace(l,p)}t.innerHTML+=f}}async function ot(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await me(i);Tt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;it(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;U(`/projects/${i}`)}n.id==="MOGaddNewItem"&&go()}function it(e,t){e.stopPropagation(),q([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function go(){U("/new-project/")}const _o=`<div class="ADMINusersTableInfoRow">
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
    <div class="settings_admin_views_users_table_view"> {Storage_Allowance}</div>
    <div class="settings_admin_views_users_table_view"> {Space_Used}</div>
</div>`,fo=`<h1>Admin</h1>
<br>
<details>
    <div class="SETTINGSdatabaseSchema">
        <details>
            <summary>Songs Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>URL</td>
                    <td>text</td>
                    <td><code>tQtTKehfwEBfxmUwHPWCRcrhqJiDoAjbcpWExRwPopqnwfrlaXRMahnibgdPmOfoWnmcwmzrtChTvhuiNWLOzAjMhjhjvKMJ</code></td>
                    <td>PRIMARY KEY</td>
                    <td>The songs URL/ID in the files table</td>
                </tr>
                <tr>
                    <td>ProjectID</td>
                    <td>text</td>
                    <td><code>dbd</code></td>
                    <td></td>
                    <td>The project that the song belongs too</td>
                </tr>
                <tr>
                    <td>SongName</td>
                    <td>text</td>
                    <td>Soft Universe</td>
                    <td></td>
                    <td>The songs name</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>int</td>
                    <td><code>296</code></td>
                    <td></td>
                    <td>The duration of a song in seconds</td>
                </tr>
                <tr>
                    <td>SongSequence</td>
                    <td>int</td>
                    <td><code>5</code></td>
                    <td></td>
                    <td>The sequence of the song (in the project)</td>
                </tr>
                <tr>
                    <td>Favourited</td>
                    <td>boolean</td>
                    <td><code>false</code></td>
                    <td></td>
                    <td>Wether or not the song is favourited (not currently functional)</td>
                </tr>
                <tr>
                    <td>FolderSize</td>
                    <td>bigint</td>
                    <td><code>13806435</code></td>
                    <td></td>
                    <td>The cumulative size of all the different qualites of audio that are processed for this song</td>
                </tr>
                <tr>
                    <td>Version</td>
                    <td>int</td>
                    <td><code>1</code></td>
                    <td></td>
                    <td>The version of the song (not currently functional)</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>Projects Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>project_id</td>
                    <td>text</td>
                    <td>ab4</td>
                    <td>PRIMARY KEY</td>
                    <td>A projects ID</td>
                </tr>
                <tr>
                    <td>time_created</td>
                    <td>bigint</td>
                    <td><code>1702417770167</code></td>
                    <td></td>
                    <td>The time that the project was created in unix millis</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>text</td>
                    <td>Notes...</td>
                    <td></td>
                    <td>A description for the project</td>
                </tr>
                <tr>
                    <td>picture_url</td>
                    <td>text</td>
                    <td><code>CDyCMSzihsIvggZyyjKNSBlhThRSmhfTKPVFLFgPNiNadZvtHxhbPRplabkURoqBFooqetnFtbIJnCVmTbVjdxDUOSLiHoPq</code></td>
                    <td></td>
                    <td>The ID/URL of the image that is used for the project</td>
                </tr>
                <tr>
                    <td>project_name</td>
                    <td>text</td>
                    <td>Cool Project</td>
                    <td></td>
                    <td>The name of the project</td>
                </tr>
                <tr>
                    <td>project_contributors</td>
                    <td>text</td>
                    <td>Cool Person, Other...</td>
                    <td></td>
                    <td>A string of the project contributors</td>
                </tr>
                <tr>
                    <td>owner</td>
                    <td>json[]</td>
                    <td><code>{"{\\"owner\\":\\"1849b930-da1f-4c06-8506-19ffea24752f\\",\\"permissions\\":\\"owner\\"}"}</code></td>
                    <td></td>
                    <td>A json of what permissions a user has with the project</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>Files Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>file_url</td>
                    <td>text</td>
                    <td><code>mdHzETrbYJFLDjFSilFKBhurwxGXWZYGfyQskQnQhfJhMtHyQCsLUzDdwbGZXbJogwvBSDQhcjpIVqHezKOrepzhMjYmSEtK</code></td>
                    <td>PRIMARY KEY</td>
                    <td>The ID/URL of the file</td>
                </tr>
                <tr>
                    <td>processed_state</td>
                    <td>text</td>
                    <td>finished</td>
                    <td></td>
                    <td>The files processing state, currently not all that useful, however might become moreso in the future if video support is added</td>
                </tr>
                <tr>
                    <td>owner</td>
                    <td>json[]</td>
                    <td><code>{"{\\"owner\\":\\"5859b930-da1f-4c06-8506-19ffea24752f\\",\\"permissions\\":\\"owner\\"}"}</code></td>
                    <td></td>
                    <td>A json of the ownership status of the file</td>
                </tr>
                <tr>
                    <td>file_type</td>
                    <td>text</td>
                    <td>local/image</td>
                    <td></td>
                    <td>The file type(but not format/extension) and location of the file (could be cloud/audio for example)</td>
                </tr>
                <tr>
                    <td>file_created_time</td>
                    <td>bigint</td>
                    <td><code>1702417809517</code></td>
                    <td></td>
                    <td>The time that the file was created in unix millis</td>
                </tr>
                <tr>
                    <td>file_size</td>
                    <td>bigint</td>
                    <td><code>18650630</code></td>
                    <td></td>
                    <td>The size of the combined different qualities of the file</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>User Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>uuid</td>
                    <td>text</td>
                    <td><code>5859b930-db1f-1c06-8506-19efea24752f</code></td>
                    <td>PRIMARY KEY</td>
                    <td>A users true ID, should never be publically exposed</td>
                </tr>
                <tr>
                    <td>username</td>
                    <td>text</td>
                    <td>username?</td>
                    <td></td>
                    <td>A users display name, and since a user will log in with their email, there could be an infinite amount of Taylor Swifts...</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>text</td>
                    <td><code>$2a$10$...</code></td>
                    <td></td>
                    <td>Hashed and salted users password</td>
                </tr>
                <tr>
                    <td>profile_picture</td>
                    <td>text</td>
                    <td><code>sXFQzaXHHODDsYijvleRNYKxLUxPYpfVkluCdkPjTFXdonxbVtqjyIWRoKLWWutBPWLcNNqqzfiSmIUTWnNulhfKUMOQoqcU</code></td>
                    <td></td>
                    <td>The file ID for the users current profile picture</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>text</td>
                    <td><code>email@example.com</code></td>
                    <td></td>
                    <td>The users email address</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>text</td>
                    <td>greetings humans of the homo sapient race</td>
                    <td></td>
                    <td>The users text description, not currently changeable/accessible by the user</td>
                </tr>
                <tr>
                    <td>verified</td>
                    <td>boolean</td>
                    <td><code>true</code></td>
                    <td></td>
                    <td>Wether or not a user is meant to be on the service/paying</td>
                </tr>
                <tr>
                    <td>last_logged_in</td>
                    <td>bigint</td>
                    <td><code>0</code></td>
                    <td></td>
                    <td>Should be updated every time the user logs in/does an action</td>
                </tr>
                <tr>
                    <td>date_joined</td>
                    <td>bigint</td>
                    <td><code>1702226385860</code></td>
                    <td></td>
                    <td>The time that the user joined in unix millis</td>
                </tr>
                <tr>
                    <td>last_state</td>
                    <td>text</td>
                    <td><code>{"PLAYBACK_loop_state":"off","PLAYBACK_shuffle_state":"off","progress":0,"current_path":"/settings/","current_queue":[],"current_index":0}</code></td>
                    <td></td>
                    <td>A json of the users last state which is retrieved every time they open a page to enable sync</td>
                </tr>
                <tr>
                    <td>admin</td>
                    <td>boolean</td>
                    <td><code>true</code></td>
                    <td>DEFAULT false</td>
                    <td>Should only be true for the admin user/users</td>
                </tr>
                <tr>
                    <td>storage_allowance</td>
                    <td>bigint</td>
                    <td>473741824</td>
                    <td></td>
                    <td>A given users storage allowance in bytes</td>
                </tr>
            </table>
        </details>
    </div>
    <summary style="font-weight: bolder;font-size: 1.3rem; margin-bottom: 1rem;">
        Tables schema
    </summary>
</details>
<br>
<h2>Users</h2>
<p id="settings_admin_selected_items_visualition">Selected Items: 0</p>
<div class="ADMINusersTableEnvironment" id="usersTableEnvironment">
    <div class="ADMINusersTableTopRow">
        <div></div>
        <div>Username</div>
        <div>Email</div>
        <div>UUID</div>
        <div>Payee</div>
        <admin>Admin</admin>
        <admin>Allowance</admin>
        <div>Used</div>
    </div>
    <div class="ADMINusersTableInforRowsContainer" id="usersTableInforRowsContainer">
    </div>
</div>
<br>
<div>
    <h3>Update column for selected users:</h3>
    <div class="SETTINGSmodalFormAreaContainer">
        <label for="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" class="SETTINGSmodalFormAreaText">Column To Update</label><br>
        <input type="text" name="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" id="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" class="SETTINGSmodalFormInput" required>
        <br><br>
        <label for="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" class="SETTINGSmodalFormAreaText">New Data</label><br>
        <input type="text" name="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" id="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" class="SETTINGSmodalFormInput" required>
        <br><br>
        <button id="SETTINGS_ADMIN_UPDATE_COLUMN_submit_button" class="SETTINGSmodalSubmit">Update</button>
    </div>
</div>
<br><br>
<br><br>
<details>
    <summary><b>DELETE USER BY ID</b></summary>
    <p>Warning, once you delete a user, they are gone, and all their data goes with them, and if there are any shared projects where they are an owner, that project will be deleted, and all the files with it, only do so if you want to completely delete this user and <b>FULLY UNDERSTAND THE CONSEQUENCES</b>.</p>
    <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSdeleteForm">
        <label for="user_to_delete" class="SETTINGSmodalFormAreaText">DELETE: User ID</label><br>
        <input type="text" name="user_to_delete" id="user_to_delete" class="SETTINGSmodalFormInput" required>
        <br><br>
        <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
    </form>
</details>`,vo=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function st(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){Eo(a,r,c)}}function Eo(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),q(o,e,n)}const yo=`<h1>General</h1>
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
<p>Thank you for using OM2 <img style="filter: var(--make-svg-orange);" src="{icons_love}" height="20"></p>`,ho=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>`,bo=`<div class="settings_container">
    <div class="settings_body_top_banner">
        <button tabindex="0" id="settings_go_to_other_content_button">
            <img src="{icons_back}" height="16" width="16">
        </button>
    </div>
    <div class="settings_content">
        <div class="settings_views_container">
            <div class="settings_views_positioner">
                <h1>Settings</h1>
                <div class="settings_views_list">
                    <button tabindex="0" class="settings_views_list_item" id="settings_button_general">
                        General
                    </button>
                    <button tabindex="0" class="settings_views_list_item" id="settings_button_user">
                        User
                    </button>
                    <button tabindex="0" class="settings_views_list_item" id="settings_button_admin">
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
</div>`;let we;async function To(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ce("profile_picture"),n=`${w}/${t}/1`;we=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Io)}catch(t){console.error("Error initializing account image:",t)}}function Io(e){e.stopPropagation(),wo(e)}function wo(e){q([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Co(){await ko()}let at="general";const ue=[{name:"general",markup:yo,button_id:"settings_button_general",function:Po},{name:"user",markup:ho,button_id:"settings_button_user",function:Bo},{name:"admin",markup:vo,button_id:"settings_button_admin",function:xo}];function Lo(){const e=document.getElementById("MAINcontentPages");let t=bo;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");je(at);for(var o=ue.length-1;o>=0;o--){const i=ue[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=ue.find(m=>m.button_id===r).name;je(d)})}n.addEventListener("click",function(){U("/")})}function rt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function je(e){at=e;const t=["users_img"],n=document.getElementById("view_container"),o=ue.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${w}/${we}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function Po(){}function Bo(){st("user-id","settings_views_user_pfp_img","update_user_pfp")}let X=[];async function xo(){if(await Ce("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=fo;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");o=o.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${w}/${we}/4/`),o=o.replace(r,c)}n.innerHTML=o,ct(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const a=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(a.value==""||r.value=="")k("Error Updating Column: empty inputs","error");else for(var c=X.length-1;c>=0;c--){const d=X[c];jo(d,a.value,r.value)}})}let N;async function ct(){const e=await No();N=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<N.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=N[n].username,s=N[n].uuid,a=N[n].verified,r=N[n].email;let c=N[n].storage_allowance;c=he(c);const d=N[n].admin,m=n;let f=N[n].storage_used;f=he(f);let E=_o,y=N[n].profile_picture;y=`${w}/${y}/1/`;for(let l=0;l<o.length;l++){const p=o[l].toString(),g=new RegExp(`\\{${p}\\}`,"g");let _="";p==="Username"?_=i:p==="Email"?_=r:p==="UUID"?_=s:p==="Verified"?_=a:p==="Space_Used"?_=f:p==="Storage_Allowance"?_=c:p==="profile_picture_url"?_=y:p==="checkbox_number"?_=m:p==="Admin"&&(_=d),E=E.replace(g,_)}t.innerHTML+=E}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&So()})}function So(){X=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=N[i.id].uuid;X.push(a)}),o.innerHTML=`Selected Items: ${X.length}`}async function Mo(){const e=await Ce("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;U(r),Oi(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=u,d=v,m=ki();m.current_path=r,m.current_queue=c,m.current_index=d;const f=i(m);f!==o&&(Ao("last_state",m),o=f,n.set("playback_states",f))}function a(){U(currentPath)}}function Oo(){lt(),rt(),uo()}function Do(e){nt(),rt(),Ho(e)}function ke(){nt(),lt(),Lo()}const Ue={"/":Oo,"/new-project/":de,"/new-project":de,"/new/":de,"/new":de,"/projects/:projectID":Do,"/settings/":ke,"/settings":ke};function Ro(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){U("/")}}function U(e){const t=Object.keys(Ue);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ue[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Ro()}async function Ao(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${x}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Ce(e){try{return(await(await fetch(`${x}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ee(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${x}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function me(e){try{return(await(await fetch(`${x}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function dt(e,t){try{const i=(await(await fetch(`${x}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function de(){try{const o=`/projects/${(await(await fetch(`${x}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;U(o)}catch(e){console.error("Error:",e)}}async function No(){try{return(await(await fetch(`${x}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function jo(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${x}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){ct();return}else{console.log("there was an error",s),k(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){console.error("Error:",o),k(`Error Updating Column: ${o}`,"error");return}}async function ko(){try{const t=await(await fetch(`${x}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const Uo=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Go=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
    <div class="PROJECTview-projectTable-rowItem-1" style="user-select: none; pointer-events: none;">
        <img src="{PROJECTviewRow_img}" style="user-select: none; pointer-events: none;">
        <div contenteditable="{PROJECTviewRow_contentEditable}" data-is-title="true" draggable="false" style="user-select: auto; pointer-events: auto;">{PROJECTviewRow_songTitle}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-2" style="user-select: none; pointer-events: none;">
        <div style="user-select: none; pointer-events: none;">{PROJECTviewRow_artistName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-3" style="user-select: none; pointer-events: none;">
        <div style="user-select: none; pointer-events: none;">{PROJECTviewRow_projectName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-4" style="user-select: none; pointer-events: none;">
        <div style="user-select: none; pointer-events: none;">{PROJECTviewRow_songDuration}</div>
        <button tabindex="0">
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,Jo=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader" id="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button tabindex="0" id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_back}" height="16" width="16">
            </button>
        </div>
        <div class="PROJECTviewMobileStickyHeaderProjectNameContainer" id="PROJECTviewMobileStickyHeaderProjectNameContainer">
        </div>
        <div class="PROJECTviewMobileStickyHeaderMenuButton">
            <button tabindex="0" id="PROJECTviewMobileStickyHeaderMenuButton">
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
                <button tabindex="0" class="PROJECTviewDescriptionMoreButton" id="PROJECTviewDescriptionMoreButton">MORE</button>
            </div>
            <div class="PROJECTviewDisplayButtons PROJECTviewTopItem-6">
                <button tabindex="0" id="PROJECTviewDescriptionTopPlayButton">
                    <img src="{icons_playButton}" height="16" width="16">
                    <div>Play</div>
                </button>
                <button tabindex="0" id="PROJECTviewDescriptionTopShuffleButton">
                    <img src="{icons_shuffleButton}" height="16" width="16">
                    <div>Shuffle</div>
                </button>
            </div>
            <div class="PROJECTviewDisplayMenu  PROJECTviewTopItem-7">
                <button tabindex="0" id="PROJECTviewDisplayMenuButton">
                    <img src="{icons_menuOptionsButton}" width="20" height="20">
                </button>
            </div>
        </div>
        <div class="PROJECTview-projectAreaContainer" id="PROJECTview_projectAreaContainer">
            <div class="PROJECTview-projectArea-uploadArea" id="PROJECTview_upload_area_files_upload_box">
                <div class="PROJECTview_dropArea" id="PROJECTview_dropArea">
                    <button tabindex="0">
                        <p>Drag and drop files here or click to select files.</p>
                    </button>
                    <br>
                    <br>
                    <button tabindex="0" id="PROJECTview_dropArea_submit_button">Submit Files</button>
                    <div id="uploadsContainer" class="uploadsContainer"></div>
                </div>
            </div>
        </div>
        <div class="PROJECTview-filesAreaContainer"></div>
    </div>
    <div class="PROJECTviewMOREdescriptionboxEnvironment" id="PROJECTviewMOREdescriptionboxEnvironment">
        <div class="PROJECTviewMOREdescriptionContainer">
            <button tabindex="0" class="PROJECTviewMOREcloseButton" id="PROJECTviewMOREcloseButton">
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
</div>`,V=[];let Te=!1,Ge=!0,T,Le=!1;async function Ho(e){let t;Le=!0,Xe()==!0?t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_light"},$o(t),sessionStorage.setItem("description","Wonderful notes are loading..."),Je(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{U("/")});const o=await me(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,T=s,i(),Yo()}function i(){qo(),sessionStorage.setItem("description",T.Description),Je(),Fo(),zo(),Vo(),Ko(),ut(),ii(),pt(T.ProjectName),st(T.ProjectID,"PROJECTviewDisplayImage","update_project_image"),ni()}}function lt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Le=!1}async function Pe(){const e=T.ProjectID,t=await me(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,T=n,ut();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${w}/${T.PictureURL}/5`;o.src=i}}function qo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${w}/${T.PictureURL}/5`;e.innerText=T.ProjectName,t.innerText=T.ProjectContributors,n.src=o}function Yo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(pt(s),ee(T.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(ee(T.ProjectID,"project_contributors",s),o=s)})}function $o(e){let t="MAINcontentPages",n=Jo;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=qn(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${w}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function Je(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Fo(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",j()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Qo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function zo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Vo(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){He(T)}),t.addEventListener("click",function(n){n.target===t&&He(T)})}function He(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),ee(e.ProjectID,"description",n),o.style.display="none",Qo(),i.style.zIndex="1"}async function Ko(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){Tt(T)}),t.addEventListener("click",function(){Mi(T)}),n.addEventListener("click",function(){qe(event)}),o.addEventListener("click",function(){qe(event)})}function qe(e){e.stopPropagation(),e.target;const t=T.ProjectID;q([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}function Wo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";Xo(),Q(),U(t)}else Q()}async function Xo(e){const t=T.ProjectID;try{const o=await(await fetch(`${x}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function ut(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),ei();const t=document.getElementById("PROJECTview-projectTable"),n=T.ProjectJSON,o=Vn("--orange"),i=l=>`#${l.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(p=>parseInt(p,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const l of n)a.push({img:T.PictureURL,songTitle:l.SongName,artistName:T.ProjectContributors,projectName:he(l.FolderSize),songDuration:`${Math.floor(l.Duration/60)}:${(l.Duration%60).toString().padStart(2,"0")}`,songSequence:l.SongSequence,version:l.Version,url:l.URL});for(let l=0;l<a.length;l++){a[l].ProjectID=l;const p=a[l],g=ti(p);t.insertAdjacentHTML("beforeend",g);const _=t.lastElementChild;_.addEventListener("dragstart",r),_.addEventListener("dragover",d),_.addEventListener("drop",m)}function r(l){l.dataTransfer.setData("text/plain",l.target.dataset.rowId),l.dataTransfer.getData("text/plain"),s=l.srcElement,Yn(l.srcElement)}const c=$n(Fn,0);function d(l){l.preventDefault(),l.dataTransfer.dropEffect="move";const p=l.target.closest(".PROJECTview-projectTable-rowContainer");if(p!==s){const g=getComputedStyle(p).backgroundColor,_=i(g);c(p,_,o)}}function m(l){l.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const p=l.dataTransfer.getData("text/plain"),g=document.querySelector(`[data-row-id="${p}"]`),_=l.target.closest(".PROJECTview-projectTable-rowContainer");if(_){const h=_.getAttribute("data-row-id");_.before(g);const O=`${p}|${h}`;setTimeout(async()=>{await ee(T.ProjectID,"SongsTableChangeSongSequenceOrder",O),Pe()},1)}}t.addEventListener("click",function(l){const p=l.target;if(l.stopPropagation(),p.tagName==="BUTTON"){const g=p.closest(".PROJECTview-projectTable-rowContainer");g&&(g.getAttribute("data-row-id"),Zo(l))}});const f=t.querySelectorAll("[contenteditable]"),E=[],y=l=>{const g=l.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),_=l.target.textContent,h=E.find(I=>I.dataRowIDField===g);if((h?h.currentText:"Row ID not found")==_)return;for(var B=E.length-1;B>=0;B--)E[B].dataRowIDField===g&&(E[B].currentText=_);const b=`${g}-${_}`;ee(T.ProjectID,"project_song_title",b)};f.forEach(l=>{l.addEventListener("blur",y),E.push({dataRowIDField:l.parentElement.parentElement.getAttribute("data-row-id"),currentText:l.innerText})})}function Zo(e){e.stopPropagation(),e.target,q([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function ei(){let e="PROJECTview_projectAreaContainer",t=Uo;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function ti(e){let t=Go;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${w}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Ge===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Ge===!1&&(a=!1),t=t.replace(s,a)}return t}function ni(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){oi(o)}}async function mt(e,t){const n=new FormData,o=new XMLHttpRequest;Te=!0,oo(),n.append("file",e),n.append("project_id",t),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;ve(s),s===100&&ve(s)}},o.onload=async function(){if(o.responseText=="StorageLimit Reached"&&k("Storage limit reached","error"),Te=!1,io(),ve(0),V.length>0){const s=V.shift();await mt(s.file,s.ProjectID)}T.ProjectID==t&&Le==!0&&Pe()},o.onerror=function(){k("Upload Failed","error")},o.open("POST",`${x}/files/upload_audio/${t}`,!0),o.send(n)}async function oi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:T.ProjectID,file:n};if(V.push(o),!Te){const i=V.shift();await mt(i.file,i.ProjectID)}}}function pt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function ii(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&j()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!j()||!r.isIntersecting&&!j()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&j()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const si=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function ai(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&k("Storage limit reached","error"),n!=="update_user_pfp"?ui():(mi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${x}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function ri(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await ai(o,t,n)}const gt=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let K,J=!1;function q(e,t,n){n===void 0?li(e,t):n!==void 0&&n==="update_project_image"?Ye(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Ye(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?di():n!==void 0&&n==="notice"?ci(e):console.log("invalid menu display inputs")}function ci(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=gt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";if(a.addEventListener("click",Be),r.style.left=c,r.style.top=d,r.style.padding="5px",K&&pointerType===""){const g=K.getBoundingClientRect();n=g.left+window.scrollX,o=g.top+window.scrollY;let _=n+"px",h=o+"px";r.style.left=_,r.style.top=h}for(let g=0;g<e.length;g++)ft(e[g]);r.children[0];const f=r.offsetWidth,E=r.offsetHeight,y=_t("MENUmodalBody"),l=r.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",p),y.xOverflow==!0&&(c=n-f+"px",r.style.left=c),y.yOverflow==!0&&(d=o-E+"px",r.style.top=d);for(let g=0;g<l.length;g++){const _=l[g];_.setAttribute("data-menu-item-id",g),_.addEventListener("click",function(h){h.stopPropagation();const B=h.target.getAttribute("data-menu-item-id"),b=e[B].function,I=e[B].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){vt[b](I);return}else return})}function p(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",p),Q())}}function di(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=eo;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;j()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[P,R]of Object.entries(C)){const A=new RegExp(`\\{${P}\\}`,"g");i=i.replace(A,R)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),f=document.getElementById("LCD_mobile_body_img"),E=s.duration,l=s.currentTime/E*100,p=document.getElementById("LCDMB_seek_input"),g=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const _=document.getElementById("LCDMB_back"),h=document.getElementById("LCDMB_play"),O=document.getElementById("LCDMB_play_icon"),B=document.getElementById("LCDMB_next"),b=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{I(),J===!0&&G()}),I(),D(),g.style.width=`${l}%`,s.addEventListener("timeupdate",()=>{const P=s.duration,A=s.currentTime/P*100;g.style.width=`${A}%`}),p.addEventListener("input",function(){const P=s.duration,R=p.value;s.currentTime=P*(R/100)}),_.addEventListener("click",()=>{wt(),I(),J===!0&&G()}),h.addEventListener("click",()=>{pe(),I(),D()}),B.addEventListener("click",()=>{It(),I(),J===!0&&G()}),b.addEventListener("click",()=>{J===!1?(Se(),J=!0):(Me(),J=!1)}),J===!0?Se():Me(),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1);function I(){f.src=yt,d.innerText=ht,m.innerText=bt}function D(){s.paused?O.src=C.icons_playButtonV2:O.src=C.icons_derpy}function G(){const P=document.getElementById("LCD_mobile_queue_content_container");P.innerHTML="";for(let R=v+1;R<u.length;R++){const A=u[R],ae=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],W=A.img,Rt=A.song_name,At=A.project_contributors;let ge=Zn;for(let _e=0;_e<ae.length;_e++){const re=ae[_e].toString(),Nt=new RegExp(`\\{${re}\\}`,"g");let ce="";re==="queue_item_img"?ce=`${w}/${W}/3`:re==="queue_item_song_name"?ce=Rt:re==="queue_item_song_artist"&&(ce=At),ge=ge.replace(Nt,ce)}P.innerHTML+=ge}}function Se(){function P(R){R.forEach(A=>{document.querySelectorAll("."+A).forEach(W=>{W.classList.add("queue_visible")})})}P(a),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se),G()}function Me(){function P(R){R.forEach(A=>{document.querySelectorAll("."+A).forEach(W=>{W.classList.remove("queue_visible")})})}P(a),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1)}function oe(P){J===!1&&(r=P.touches[0].clientY)}function ie(P){P.preventDefault()}function se(P){c=P.changedTouches[0].clientY,c-r>70&&(Q(),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se))}}function li(e,t){K=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=gt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",Be),r.style.left=c,r.style.top=d;let m="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(m="keyboard"):t.pointerType!=="mouse"&&(m="keyboard"),m=="keyboard"){const h=K.getBoundingClientRect();n=h.left+window.scrollX,o=h.top+window.scrollY;let O=n+"px",B=o+"px";r.style.left=O,r.style.top=B}for(let h=0;h<e.length;h++)ft(e[h]);const E=r.children[0],y=r.offsetWidth,l=r.offsetHeight,p=_t("MENUmodalBody"),g=r.getElementsByClassName("MENUmodalItemContainer");m==="keyboard"?E.focus():m=="mouse"&&(E.focus(),E.blur()),document.addEventListener("keydown",_),p.xOverflow==!0&&(c=n-y+"px",r.style.left=c),p.yOverflow==!0&&(d=o-l+"px",r.style.top=d);for(let h=0;h<g.length;h++){const O=g[h];O.setAttribute("data-menu-item-id",h),O.addEventListener("click",function(B){B.stopPropagation();const I=B.target.getAttribute("data-menu-item-id"),D=e[I].function,G=e[I].optionalParams;if(D=="TEST")console.log("the button worked");else if(D!="None"){vt[D](G);return}else return})}function _(h){(h.key==="Escape"||h.keyCode===27)&&(document.removeEventListener("keydown",_),Q())}}function Ye(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";j()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=Xn,r.style.display="block",r.addEventListener("click",Be);const m=document.getElementById("MENUmodalBody"),f=document.getElementById("MENUmodalBody_image_select_file_drop_area"),E=document.getElementById("MENUmodalBody_image_select_file_select_button"),y=document.getElementById("MENUmodalBody_image_select_preview_area"),l=document.getElementById("MENUmodalBody_image_select_submit_button"),p=document.getElementById("MENUmodalBody_image_select_submit_button_container");m.style.left=c,m.style.top=d;let g,_;function h(b,I){return function(){const D=this,G=arguments;clearTimeout(_),_=setTimeout(()=>{b.apply(D,G)},I)}}function O(b,I,D){h(ri,100)(b,I,D)}function B(b){if(g){const I=URL.createObjectURL(g),D=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");y.src=I,l.style.visibility="visible",p.style.outline="3px solid var(--primary)",l.addEventListener("click",()=>{O(g,b.project_id,b.MenuType),D.style.visibility="visible"})}else console.log("No file selected.")}f.addEventListener("dragover",b=>{b.preventDefault()}),f.addEventListener("drop",b=>{b.preventDefault(),g=b.dataTransfer.files[0],B(e)}),E.addEventListener("click",()=>{const b=document.createElement("input");b.type="file",b.accept="image/*",b.addEventListener("change",I=>{g=I.target.files[0],B(e)}),b.click()})}function ui(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Q(),Pe()}function mi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Q()}function _t(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let m=!1,f=!1;return c>n&&(m=!0),d>o&&(f=!0),{xOverflow:m,yOverflow:f}}function ft(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",j()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=si.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(C)){const m=new RegExp(`\\{${c}\\}`,"g");a=a.replace(m,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Be(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function Q(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),K&&K.focus()}const vt={PROJECT_VIEW_delete_project(e){Wo()},PLAYBACK_add_songs_to_queue(e){Di(e)},SIGN_OUT_USER(e){Co()},OPEN_SETTINGS_PAGE(e){U("/settings/")}};let Y="hidden";function pi(){Un();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ie(Y),e.addEventListener("click",gi),t.addEventListener("click",_i),H()}function gi(){if(Y==="hidden"){Y="visible",Ie(Y);return}if(Y==="visible"){Y="hidden",Ie(Y);return}}function Ie(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Xe&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function H(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Ti(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",bi),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",yi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&hi(r)}),i.addEventListener("dragstart",fi),i.addEventListener("dragover",vi),i.addEventListener("drop",Ei),e.appendChild(i)}}function _i(){const e=v+1;e>=0&&e<u.length?u.splice(e):u.length=0,H()}function fi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function vi(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Ei(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(r=>r.id===parseInt(t)),i=u.find(r=>r.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),M.splice(s,1),M.splice(a,0,o),H())}function yi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),M.splice(o,1)),H()}function hi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];q(o,e)}function bi(e){}function Ti(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Gn;for(let c=0;c<t.length;c++){const d=t[c].toString(),m=new RegExp(`\\{${d}\\}`,"g");let f="";d==="QUEUE_item_image"?f=`${w}/${n}/3`:d==="QUEUE_item_title"?f=o:d==="QUEUE_item_artist"?f=i:d==="icons_menuOptionsButton"?f=We:d==="QUEUE_item_timeIndicator"&&(f=s),a=a.replace(m,f)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Ii=`<div class="LCDbody">
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
</div>`;function wi(){Li(),Et(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Pi(t)}),Bi(),j()&&document.getElementById("LCDbody").addEventListener("click",Ci)}function Ci(e){e.stopPropagation(),q({param:"cheese"},e,"lcd_mobile_body")}function Li(){let e="LCDbody",t=Ii;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Et(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,m;e=n.clientWidth,d=s(),m=e/o,m>d?c=d+10:c=m,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const m=d.offsetWidth;return document.body.removeChild(d),m}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Pi(e){e.stopPropagation(),e.target,q([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Bi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",xi)})}function xi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ni(n)}function Si(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],M=[],v=0,yt="",ht="",bt="";document.getElementById("audio");document.getElementById("PLAYERsource");let L="off",$="off",te="paused";function Tt(e){u=[],v=0,u=xe(e),u.length>0&&(te="playing",F())}function Mi(e){u=[],v=0,u=xe(e),u.length>0&&($="off",Ct(),te="playing",F())}function xe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Oi(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,qi(o),u!==void 0&&u.length>0&&Ui(i)}async function Di(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await me(t),i=xe(o);if(n==="later")u=u.concat(i),M=M.concat(i);else if(n==="next"){let s=u.slice(0,v+1),a=u.slice(v+1);u=s,u=u.concat(i),u=u.concat(a),s=M.slice(0,v+1),a=M.slice(v+1),M=s,M=M.concat(i),M=M.concat(a)}H()}function pe(){Ri()}function Ri(){const e=document.getElementById("audio");e.paused?(ne("playing"),te="playing",e.play().then(t=>Bt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(te="paused",ne("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){pe()});navigator.mediaSession.setActionHandler("pause",function(){pe()});function It(){St()}function wt(){Mt()}function Ai(){document.getElementById("audio").addEventListener("ended",Ji)}function Ni(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function ji(){Hi()}function ki(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:L,PLAYBACK_shuffle_state:$,progress:t}}function Ct(){if($==="off"){$="on",$e($);const t=v+1;M=[...u],u.slice(0,v);const n=u.slice(t);Jn(n);const o=n.length;u.splice(v,o,...n),H()}else{$="off",$e($);const t=[...M],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);H()}}function F(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${w}/${u[v].url}/3`,e.load(),te==="playing"?(e.play().then(n=>Bt()).catch(n=>console.log(n)),ne("playing")):ne("paused"),Pt(),Lt()}function Ui(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${w}/${u[v].url}/3`,t.load(),t.currentTime=e,ne("paused"),Pt(),Lt()}function Lt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Oe(s)}"`,c=`"${Oe(Math.floor(i))}"`,d=i/o*100,m=`${d}%`;Si(c,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=d,xt()})}function Pt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[v].song_name,t.innerHTML=u[v].song_name,n.innerHTML=u[v].project_contributors,Et(),o.src=`${w}/${u[v].img}/3`,i.src=`${w}/${u[v].img}/3`,yt=`${w}/${u[v].img}/5`,ht=u[v].song_name,bt=u[v].project_contributors,H()}function Bt(){let e=u[v];const t=[{src:`${w}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${w}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${w}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${w}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${w}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${w}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),xt()}function xt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Gi(){console.log("PLAYBACK_stop_playback, clear top")}function Ji(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(L=="off"||L=="on")?(v+=1,F()):L=="song"?F():t==v+1&&L=="on"?(v=0,F()):Gi()}function St(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.pause(),v+=1,F())}navigator.mediaSession.setActionHandler("nexttrack",function(){St()});function Mt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,v>0&&(e.pause(),v-=1,F())}navigator.mediaSession.setActionHandler("previoustrack",function(){Mt()});function Hi(){L=="off"?(L="on",z(L)):L=="on"?(L="song",z(L)):(L="off",z(L))}function qi(e){e=="off"?(L="off",z(L)):e=="on"?(L="on",z(L)):(e="song",L="on",z(L))}function Yi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",$i),t.addEventListener("click",Fi),n.addEventListener("click",Qi),o.addEventListener("click",zi),i.addEventListener("click",Vi)}function $i(){Ct()}function Fi(){wt()}function Qi(){pe()}function zi(){It()}function Vi(){ji()}function $e(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function z(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function ne(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function Ki(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Ot(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Wi)})}function Wi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Ot(n)}function Ot(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Xi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--text-third)",n.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="",n.style.backgroundColor="",e.style.opacity="0%"})}const Zi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" tabindex="0" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" tabindex="0" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" tabindex="0" name="Submit" value="Submit">
            <!--
            <button class="SETTINGSmodalSignup" tabindex="0" id="SETTINGSmodalSignupButton">Signup?</button>
        -->
        </form>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
    <div>
        <p style="color: var(--grey);">
            This Service uses a cookie.
        </p>
    </div>
</div>`,es=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ts(){setTimeout(()=>{let e="MAINcontentPages",t=es;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ns)},1)}async function ns(e){console.log("the signup event was caught"),e.preventDefault(),os();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${x}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const c=await convertImageToBase64(r);n[a.name]=c}}else n[a.name]=a.value;const s=await fetch(`${x}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();ye(),is(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";ye(),Fe(),alert(s)}}catch{ye(),Fe(),alert("There was an error, try again")}}function os(){const e=document.getElementById("spinner");e.style.display="block"}function ye(){const e=document.getElementById("spinner");e.style.display="none"}function is(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Fe(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let le=!1,Qe=!1,ze=!1,Ve=!1;async function ss(){await cs()?Dt():Qe||(as(),Qe=!0)}function as(){ds();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${x}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Ke(),ts()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),le)return!1;le=!0;const a=o.value,r=i.value;try{await rs(a,r)?(Ve=!0,k("Login Successful","success"),Dt(),Ke()):(Ve=!1,k("Error Logging In","error")),le=!1}catch(c){console.error("Error:",c),le=!1}return!1})}async function rs(e,t){try{return(await(await fetch(`${x}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?k("The server is down","error"):console.error(n),!1}}async function cs(){try{const e=await fetch(`${x}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&k("The server is down","error")}}function ds(){let e="MAINcontentPages",t=Zi;document.getElementById(e).innerHTML+=t}function Ke(){if(ze===!0)return;ze=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const x="/apis",w="/media";async function Dt(){Ai(),jn(),kn(),wi(),Yi(),Xi(),Ki(),To(),pi(),Mo(),no()}window.hasCodeRun||(ss(),window.hasCodeRun=!0);
