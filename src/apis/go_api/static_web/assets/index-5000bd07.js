(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Et="/assets/menu_options_button-a1d7bbe3.svg",sn=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,an=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,rn=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,cn="/assets/volume_null-e39cf06f.svg",dn="/assets/recently_added-a0a983c6.svg",ln="/assets/volume_3-c8ab0a75.svg",un="/assets/orange_music_text_logo_black-12e7386c.svg",mn="/assets/volume_2-cfdac9da.svg",gn="/assets/browse_2-85030bba.svg",pn="/assets/volume_1-27e93416.svg",_n="/assets/orange_music_logo_white-2a680ea2.svg",fn="/assets/search_icon-4f5e4381.svg",vn="/assets/orange_music_text_logo_black-91f9e706.png",En="/assets/up_next_queue_button-14fedba2.svg",yn="/assets/orange_music_logo_yellow-a109ff64.svg",bn="/assets/playlist-c6e9024f.svg",hn="/assets/loop_button-aef56865.svg",Tn="/assets/help_icon-867fec9d.svg",In="/assets/play_button-b1e2d3a4.svg",Cn="/assets/browse-14744f27.svg",wn="/assets/orange_music_text_logo_white-7f0ba909.svg",Ln="/assets/back_button-8128cade.svg",Pn="/assets/Albums-2e81dc74.svg",On="/assets/songs-016b7188.svg",Bn="/assets/orange_music_logo_black-4d7e4591.svg",Sn="/assets/your_uploaded_songs-06535705.svg",Mn="/assets/artist-ab677d43.svg",Dn="/assets/shuffle_button-c2f06bc4.svg",xn="/assets/orange_music_text_logo_white-4907051e.png",Rn="/assets/listen_now-c7438154.svg",An="/assets/derpy-21c20ae5.svg",Nn="/assets/next_button-9a850710.svg",Un="/assets/recently_added-7ff28139.svg",jn="/assets/play_button-5eeedbe6.svg",kn="/assets/browse-e8be8609.svg",Jn="/assets/albums-681507b8.svg",Gn="/assets/listen_now.2-bfa293ac.svg",Hn="/assets/your_uploads-02e5c93c.svg",qn="/assets/play_button.2-fc90fac7.svg",$n="/assets/listen_now-fb02ffce.svg",Yn="/assets/browse.2-15b501dd.svg",Fn="/assets/place_holder_image-d4006a96.svg",Qn="/assets/icons_MOGitems_add-19e679f7.svg",Vn="/assets/back-9279721d.svg",zn="/assets/forwards-605bd405.svg",Kn="/assets/icons_close-57e87944.svg",Wn="/assets/icons_pause-8012f8cc.svg",Xn="/assets/icons_loop-32d1576c.svg",Zn="/assets/icons_loop_song-87f53dc7.svg",eo="/assets/icons_play-a5074c5b.svg",to="/assets/icons_settings-793063fb.svg",no="/assets/love-07ac5006.svg",oo="/assets/upload-3bad9145.svg",w={icons_volumeNull:cn,icons_recentlyAdded:dn,icons_volume3:ln,icons_orangeMusicTextLogoBlack:un,icons_volume2:mn,icons_browse2:gn,icons_volume1:pn,icons_orangeMusicLogoWhite:_n,icons_searchIcon:fn,icons_orangeMusicTextLogoBlackPng:vn,icons_queueButton:En,icons_orangeMusicLogoYellow:yn,icons_playlist:bn,icons_loopButton:hn,icons_helpIcon:Tn,icons_playButton:In,icons_browse:Cn,icons_menuOptionsButton:Et,icons_orangeMusicTextLogoWhite:wn,icons_backButton:Ln,icons_Albums:Pn,icons_songs:On,icons_orangeMusicLogoBlack:Bn,icons_yourUploadedSongs:Sn,icons_artist:Mn,icons_shuffleButton:Dn,icons_orangeMusicTextLogoWhitePng:xn,icons_listenNow:Rn,icons_derpy:An,icons_nextButton:Nn,icons_recentlyAddedV2:Un,icons_playButtonV2:jn,icons_browseV2:kn,icons_albumsV2:Jn,icons_listenNow2V2:Gn,icons_yourUploads:Hn,icons_playButton2:qn,icons_listenNowV2:$n,icons_browse2V2:Yn,v3_placeholder:Fn,icons_MOGitems_add:Qn,icons_back:Vn,icons_forwards:zn,icons_close:Kn,icons_pause:Wn,icons_loop:Xn,icons_loop_song:Zn,icons_play:eo,icons_settings:to,current_year:new Date().getFullYear(),icons_love:no,icons_upload:oo};function io(){let e="topleftContentArea",t=sn;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function so(){let e="toprightContentArea",t=an;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ao(){let e="MAINcontentContainer",t=rn;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ro=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function yt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function co(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Qe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function lo(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function bt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ne(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function uo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function ht(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function mo(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function Ve(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let Ee;const y=new Map;function go(e,t,n){y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const s=Date.now()-i;if(!y.has(e))return;const r=Math.min(s/500,1);if(!y.has(e))return;const c=Tt(y.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||y.get(e).isChanging?y.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",y.delete(e))}clearTimeout(Ee),Ee=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},500),y.get(e).isChanging=!0;const i=Date.now();y.get(e).animationFrameId=requestAnimationFrame(o)}function po(e,t,n,o,i){const a=i||2500;y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function s(){const d=Date.now()-r;if(!y.has(e))return;const u=Math.min(d/(o==="hardNewToOld"?a*4/5:500),1);if(!y.has(e))return;let g;o==="hardNewToOld"&&u<1?g=n:g=Tt(y.get(e).originalColor,Math.min(u,1),n),e.style.backgroundColor=g,u<1||y.get(e).isChanging?y.get(e).animationFrameId=requestAnimationFrame(s):(e.style.backgroundColor="",y.delete(e))}clearTimeout(Ee),Ee=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},a),y.get(e).isChanging=!0;const r=Date.now();y.get(e).animationFrameId=requestAnimationFrame(s)}function _o(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function Tt(e,t,n){return fo(n,e,t)}function fo(e,t,n){const o=function(b){return b=b.toString(16),b.length===1?"0"+b:b},i=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),g=Math.round(a*(1-n)+c*n),E=Math.round(s*(1-n)+d*n);return"#"+o(u)+o(g)+o(E)}function It(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,a;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,a=parseInt(n[3],10),a=a/100;const s=vo(o,i,a),r=Ae(s[0]),c=Ae(s[1]),d=Ae(s[2]);return Eo({r,g:c,b:d})}function vo(e,t,n){let o=t*Math.min(n,1-n),i=(a,s=(a+e/30)%12)=>n-o*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function Ae(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Eo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const yo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,bo=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,ho=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,To=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,Io=`
<div class="UPLOADQUEUE-containerL2">
    <div class="UPLOADQUEUE-top">
        <div class="UPLOADQUEUE-top-text">
            <span class="UPLOADQUEUE-top-text-title">Upload Queue</span>
            <span class="UPLOADQUEUE-top-text-clear" id="UPLOADQUEUEclearQueueButton">Cancel</span>
        </div>
    </div>
    <div class="UPLOADQUEUE-bottom" id="UPLOADQUEUEbottomContainer">
        <div class="UPLOADQUEUE-bottom-currentlyUploadingItem">
            <div class="fileName" id="UPLOADQUEUEBOTTOM_songName">Song.mp3</div>
            <div class="estimatedSize" id="UPLOADQUEUEBOTTOM_bottom_text">Estimated Size - <span id="UPLOADQUEUEBOTTOM_fileSize">200mb</span></div>
            <div class="percentUploaded">
                <div id="specificChart" class="donut-size">
                    <div class="pie-wrapper">
                        <span class="label">
                            <span class="num">0</span><span class="smaller">%</span>
                        </span>
                        <div class="pie">
                            <div class="left-side half-circle"></div>
                            <div class="right-side half-circle"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;let we=!1;function Co(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=To,n.addEventListener("click",function(o){we==!1?Lo(o):ye()}),t.innerHTML=Io}function wo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function ze(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",we==!0&&j.length>0||ye()}function me(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(j.length>0){t.innerHTML=j[0].file.name,n.innerHTML=ne(j[0].file.size*1.75),Po(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let a="";for(var o=j.length-1;o>=1;o--){const s=j[o].file.name,r=ne(j[o].file.size*1.75);a+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${s}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=a}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let Ke;function Lo(e){we=!0,Ke=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",a=n+"px";MENUmodalEnvironment.addEventListener("click",ye),o.style.left=i,o.style.top=a;let s="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(s="keyboard"):e.pointerType!=="mouse"&&(s="keyboard"),s=="keyboard"){const g=Ke.getBoundingClientRect();t=g.left+window.scrollX,n=g.top+window.scrollY;let E=t+"px",b=n+"px";o.style.left=E,o.style.top=b}const r=o.offsetWidth,c=o.offsetHeight,d=Ut("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(a=n-c+"px",o.style.top=a);function u(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",u),ye())}}function ye(){we=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function Po(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),a=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",a.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",a.style.transform="rotate(0deg)"),n?(a.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(a.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const We=1500;let Ct=0,Ue=[],Ne;function B(e,t){const o=new Date().getTime();Ue.push({notificationText:e,notificationType:t,time:o}),wt()}function wt(){const t=new Date().getTime(),n=Ue.at(Ct);Ue.length>1?t-Ne>We?(Xe(n.notificationText,n.notificationType),Ne=t):setTimeout(wt,We):(Xe(n.notificationText,n.notificationType),Ne=t)}function Xe(e,t){const n=document.getElementById("noticationContainer");let o;Ct+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Oo=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`;let Le;async function Bo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Pe("profile_picture"),n=`${C}/${t}/3`;Le=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",So)}catch(t){console.error("Error initializing account image:",t)}}function So(e){e.stopPropagation(),Mo(e)}function Mo(e){$([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Do(){await gi(),location.reload()}function xo(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${C}/${Le}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",Ro)}function Ro(e){e.stopPropagation(),Ao(e)}function Ao(e){$([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const No=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Uo=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Lt=30;let oe=0;async function jo(){try{const e=document.getElementById("MAINcontentPages");ko();const t=await Dt(Lt,oe);oe+=t.length,Jo(t),D()&&xo()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Pt(){oe=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ot),e.innerHTML=""}function ko(){let e="MAINcontentPages",t=Oo;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Jo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=No;for(const[s,r]of Object.entries(w)){const c=new RegExp(`\\{${s}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Ze(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(s){Ot(s,e)});let i;o.addEventListener("touchstart",function(s){s.timeStamp,i=setTimeout(function(){a(s,e)},500)}),o.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(i)});function a(s,r){navigator.vibrate(1e3);const d=s.target.id.split("-")[1],u=r[d].project_id;Bt(s,u)}t.addEventListener("scroll",async function(){const s=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(s>=r-c){const d=await Dt(Lt,oe);oe+=d.length,d.length>0&&Ze(d)}})}function Ze(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],a=o,s=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,u=lo(d);let g=Uo;for(const[E,b]of Object.entries(w)){const m=new RegExp(`\\{${E}\\}`,"g");g=g.replace(m,b)}for(let E=0;E<i.length;E++){const b=i[E].toString(),m=new RegExp(`\\{${b}\\}`,"g");let p="";b==="MOG_image"?p=`${C}/${s}/3`:b==="MOG_text1"?p=r:b==="MOG_text2"?p=c:b==="MOG_checkedDate"?p=u:b==="MOGI_placeholder_itemID"&&(p=a),g=g.replace(m,p)}t.innerHTML+=g}}async function Ot(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,a=await Oe(i),s=JSON.parse(a);s.ProjectID=i,qt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Bt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;A(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Go()}function Bt(e,t){e.stopPropagation(),$([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Go(){A("/new-project/")}let et;function $e(e){return new Promise((t,n)=>{et=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),a=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=a,i.style.visibility="visible";const s=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){tt(),t("delete")}function d(){et.focus(),tt(),t("cancel")}i.addEventListener("click",u=>{const g=u.target;g===s?c():(g===r||g===i)&&d()}),o==="keyboard"&&!D()?r.focus():o=="mouse"&&!D()&&(k(),r.focus(),r.blur())})}function tt(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const Ho=`<div class="ADMINusersTableInfoRow">
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
</div>`,qo=`<h1>Admin</h1>
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
                    <td>cache_state</td>
                    <td>bool</td>
                    <td>true/false</td>
                    <td></td>
                    <td>Wether or not the file is in the cache</td>
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
                    <td>last_time_accessed</td>
                    <td>bigint</td>
                    <td><code>1702417839517</code></td>
                    <td></td>
                    <td>The time that the file was last accessed by anybody, is used for the purposes of cache pruning</td>
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
<p id="settings_admin_selected_items_visualition">Selected Users: 0</p>
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
<br>
<br>
<details>
    <summary><b style="font-size: 1.2rem;">Update column for selected users:</b></summary>
    <p>First select the users from the table above, then choose a column to update, and the new data to be put there instead.</p>
    <div>
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
</details>
<br><br>
<details>
    <summary><b style="font-size: 1.2rem;">DELETE USER BY ID</b></summary>
    <p>Warning, once you delete a user, they are gone, and all their data goes with them, and if there are any shared projects where they are an owner, that project will be deleted, and all the files with it, only do so if you want to completely delete this user and <b>FULLY UNDERSTAND THE CONSEQUENCES</b></p>
    <div class="SETTINGSmodalFormAreaContainer" id="SETTINGSdeleteForm">
        <label for="user_to_delete" class="SETTINGSmodalFormAreaText">DELETE: User ID</label><br>
        <input type="text" name="user_to_delete" id="SETTINGS_ADMIN_DELETE_USER_user_to_delete" class="SETTINGSmodalFormInput" required>
        <br><br>
        <button id="SETTINGS_ADMIN_DELETE_USER_submit_button" class="SETTINGSmodalSubmit">DELETE USER</button>
    </div>
</details>
<!-- keep six of these at the bottom so that all content can be seen -->
<br><br>
<br><br>
<br><br>`,nt=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function St(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(s){s.timeStamp,i=setTimeout(function(){a(s,e,n)},500)}),o.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(s){a(s,e,n)});function a(s,r,c){$o(s,r,c)}}function $o(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),$(o,e,n)}const ot=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,ge=`<h1>General</h1>
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
<p>Thank you for using OM2 <img style="filter: var(--make-svg-orange);" src="{icons_love}" height="20"></p>
<br><br>
<br><br>
<br><br>`,it=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,Yo=`<div class="settings_container">
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
</div>`;let be="general",F;async function Fo(){const e=await Pe("admin");e=="true"&&!D()?(be="admin",F=[{name:"general",markup:ge,button_id:"settings_button_general",function:pe},{name:"user",markup:it,button_id:"settings_button_user",function:_e},{name:"admin",markup:nt,button_id:"settings_button_admin",function:at}]):e=="false"&&!D()?F=[{name:"general",markup:ge,button_id:"settings_button_general",function:pe},{name:"user",markup:it,button_id:"settings_button_user",function:_e}]:D()&&e=="true"?(be="admin",F=[{name:"general",markup:ge,button_id:"settings_button_general",function:pe},{name:"user",markup:ot,button_id:"settings_button_user",function:_e},{name:"admin",markup:nt,button_id:"settings_button_admin",function:at}]):F=[{name:"general",markup:ge,button_id:"settings_button_general",function:pe},{name:"user",markup:ot,button_id:"settings_button_user",function:_e}]}async function Qo(){await Fo();const e=document.getElementById("MAINcontentPages");let t=Yo;for(const[i,a]of Object.entries(w)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,a)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");st(be);for(var o=F.length-1;o>=0;o--){const i=F[o].button_id;document.getElementById(i).addEventListener("click",function(s){const r=s.srcElement.id,d=F.find(u=>u.button_id===r).name;st(d)})}n.addEventListener("click",function(){A("/")})}function je(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function st(e){be=e;const t=["users_img"],n=document.getElementById("view_container"),o=F.find(a=>a.name===e);let i=o.markup;for(const[a,s]of Object.entries(w)){const r=new RegExp(`\\{${a}\\}`,"g");i=i.replace(r,s)}for(let a=0;a<t.length;a++){const s=t[a].toString(),r=new RegExp(`\\{${s}\\}`,"g");let c="";s==="users_img"&&(c=`${C}/${Le}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function pe(){}function _e(){St("user-id","settings_views_user_pfp_img","update_user_pfp")}let ee=[];async function at(){if(await Pe("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=qo;for(const[s,r]of Object.entries(w)){const c=new RegExp(`\\{${s}\\}`,"g");o=o.replace(c,r)}for(let s=0;s<t.length;s++){const r=t[s].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${C}/${Le}/4/`),o=o.replace(c,d)}n.innerHTML=o,ke(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")B("Error Updating Column: empty inputs","error");else for(var d=ee.length-1;d>=0;d--){const u=ee[d];mi(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(s){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){B("Error Deleting User: user UUID is empty","error");return}let c=null;for(let g=0;g<R.length;g++)R[g].uuid==r&&(c=R[g].username);if(c===null){B("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await $e(d);u==="cancel"||u==="delete"&&((await di(r)).success=="success"?B("Successfully deleted the user","success"):B("Failed to delete the user","error"),ke())})}let R;async function ke(){const e=await ui();R=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<R.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=R[n].username,a=R[n].uuid,s=R[n].verified,r=R[n].email;let c=R[n].storage_allowance;c=ne(c);const d=R[n].admin,u=n;let g=R[n].storage_used;g=ne(g);let E=Ho,b=R[n].profile_picture;b=`${C}/${b}/3`;for(let m=0;m<o.length;m++){const p=o[m].toString(),h=new RegExp(`\\{${p}\\}`,"g");let v="";p==="Username"?v=i:p==="Email"?v=r:p==="UUID"?v=a:p==="Verified"?v=s:p==="Space_Used"?v=g:p==="Storage_Allowance"?v=c:p==="profile_picture_url"?v=b:p==="checkbox_number"?v=u:p==="Admin"&&(v=d),E=E.replace(h,v)}t.innerHTML+=E}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Vo()})}function Vo(){ee=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const s=R[i.id].uuid;ee.push(s)}),o.innerHTML=`Selected Users: ${ee.length}`}const zo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
            <button class="SETTINGSmodalSignup" tabindex="0" id="SETTINGSmodalSignupButton">Signup?</button>
        </form>
    </div>
    <div>
        <p style="color: var(--grey);">
            This Service uses a cookie.
        </p>
    </div>
</div>`,Ko=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer SETTINGSsignupContainer">
        <a id="SIGNUPMODAL_return_to_login_button" style="text-decoration: none; color: var(--text-3);cursor: pointer;">
            <p style="padding-left: 1rem; position: relative;">Return to Login</p>
        </a>
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
    </div>
</div>`;function Wo(){let e="MAINcontentPages",t=Ko;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Xo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){A("/")})}async function Xo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${S}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)B(`There was an error, ${o}`,"error");else{const i=o;B("Sign up Successful, Log in now","success"),A("/")}}catch{B("There was an error, try again","error")}}let Z=!1,he=!1,Je=!1,Te=!1;async function Zo(){await ni()?(en(),Te=!0):he||(Mt(),he=!0)}async function ei(){he=!1,Z=!1,Je=!1,Mt(),he=!0}function Mt(){oi();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${S}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{rt(),Wo()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),Z)return!1;Z=!0;const a=n.value,s=o.value;try{await ti(a,s)?(Te=!0,B("Login Successful","success"),en(),rt()):(Te=!1,B("Error Logging In","error")),Z=!1}catch(r){console.error("Error:",r),Z=!1}return!1})}async function ti(e,t){try{return(await(await fetch(`${S}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?B("The server is down","error"):console.error(n),!1}}async function ni(){try{const e=await fetch(`${S}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&B("The server is down","error")}}function oi(){let e="MAINcontentPages",t=zo;document.getElementById(e).innerHTML+=t}function rt(){if(Je===!0)return;Je=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function ii(){const e=await Pe("last_state"),t=JSON.parse(e),n=new Map;setInterval(a,1e4);let o=i(t);if(window.addEventListener("popstate",s),t!=null){const r=window.location.pathname;A(r),us(t)}else s();function i(r){return JSON.stringify(r)}function a(){const r=window.location.pathname,c=l,d=f,u=Es();u.current_path=r,u.current_queue=c,u.current_index=d;const g=i(u);g!==o&&(ri("last_state",u),o=g,n.set("playback_states",g))}function s(){A(currentPath)}}function si(){Te==!1?(je(),ei()):(xt(),je(),jo())}function ct(e,t){Pt(),je(),t!==null?mt(e,t):mt(e)}function dt(){Pt(),xt(),Qo()}const lt={"/":si,"/new-project/":fe,"/new-project":fe,"/new/":fe,"/new":fe,"/projects/:projectID":ct,"/projects/:projectID/:songURL":ct,"/settings/":dt,"/settings":dt};function ai(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){A("/")}}function A(e){const t=Object.keys(lt);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const a=lt[n],s=i.slice(1);a(...s),e!=="/new-project/"&&history.pushState({},"",e);return}}ai()}async function ri(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${S}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function ci(e){try{const t={searchQuery:e};return await(await fetch(`${S}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function di(e){try{const t={uuid:e};return await(await fetch(`${S}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function li(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${S}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&B("There was an error deleting the song","error");return}catch(a){console.error("Error:",a);return}}async function Pe(e){try{return(await(await fetch(`${S}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ie(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${S}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Oe(e){try{return(await(await fetch(`${S}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Dt(e,t){try{const i=(await(await fetch(`${S}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(s=>({img:s.PictureURL,top:s.ProjectName,bottom:s.ProjectContributors,days:s.TimeCreated,project_id:s.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function fe(){try{const o=`/projects/${(await(await fetch(`${S}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;A(o)}catch(e){console.error("Error:",e)}}async function ui(){try{return(await(await fetch(`${S}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function mi(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},a=await(await fetch(`${S}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(a.updated==="success"){B("Table Updated Successfully","success"),ke();return}else{B(`Error Updating Column ${t}: ${a.Error}`,"error");return}}catch(o){B(`Error Updating Column ${t}: ${o}`,"error");return}}async function gi(){try{const t=await(await fetch(`${S}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const pi=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function Ge(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=pi}}const _i=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,fi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
    <div class="PROJECTview-projectTable-rowItem-4">
        <div>{PROJECTviewRow_songDuration}</div>
        <button tabindex="0">
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,vi=`<div class="PROJECTviewContainerEnvironment">
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
        <!--
        <div class="PROJECTVIEW-SettingsBox-Environment" id="PROJECTVIEW_settingBox_environment"></div>-->
    </div>
    <div class="PROJECTviewMOREdescriptionboxEnvironment" id="PROJECTviewMOREdescriptionboxEnvironment">
        <div class="PROJECTviewMOREdescriptionContainer">
            <button tabindex="0" class="PROJECTviewMOREcloseButton" id="PROJECTviewMOREcloseButton">
                <img src="{icons_close}" width="20" height="20">
            </button>
            <div class="PROJECTviewMOREdescriptionHeaderContainer">
                <h1 id="PROJECTVIEW_DESCRIPTION_more_title">{PROJECTviewMOREtitle}</h1>
                <h3 id="PROJECTVIEW_DESCRIPTION_more_artist_year">{PROJECTviewMOREartist} | {PROJECTviewMOREyear}</h3>
            </div>
            <div class="PROJECTviewMOREdescriptionContentContainer" contenteditable="true" id="PROJECTviewMOREdescriptionC">
                <textarea id="PROJECTviewMOREdescriptionP"></textarea>
            </div>
        </div>
    </div>
</div>`,j=[];let ve=!1,ut=!0,_,Be=!1;async function mt(e,t){let n;Be=!0,yt()==!0?n={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:n={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_light"},bi(n),Ge("","blank"),sessionStorage.setItem("description","."),gt(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{A("/")});const i=await Oe(e);if(i=="")console.log(i);else{const s=JSON.parse(i);s.ProjectID=e,_=s,a(),yi()}function a(){if(He(),sessionStorage.setItem("description",_.Description),gt(),hi(),Ii(),Ci(),wi(),Rt(),Ai(),Nt(_.ProjectName),St(_.ProjectID,"PROJECTviewDisplayImage","update_project_image"),xi(),Ge(_,"full"),t!=null){for(var s=_.ProjectJSON.length-1;s>=0;s--)if(_.ProjectJSON[s].URL==t){const d=`${_.ProjectJSON[s].SongSequence}-${_.ProjectJSON[s].Version}`;Ei(d)}const r=document.getElementById("PROJECTviewMobileStickyHeader");D()||(r.style.marginTop="32px")}}}function xt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Be=!1}async function Se(){if(!Be)return;const e=_.ProjectID,t=await Oe(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,_=n,Rt();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${C}/${_.PictureURL}/5`;o.src=i,Ge(_,"full")}}function Ei(e){const t=s=>`#${s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=ht(po,0),o=It("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var a=i.children.length-1;a>=0;a--){const s=i.children[a].dataset.rowId;if(s!==null&&s==e){const r=i.children[a].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),_o(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function He(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),i=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year"),a=`${C}/${_.PictureURL}/5`;e.innerText=_.ProjectName,t.innerText=_.ProjectContributors,n.src=a,o.innerText=_.ProjectName,i.innerText=`${_.ProjectContributors} | ${bt(_.TimeCreated)}`}function yi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const a=e.innerText;a!==n&&(Nt(a),ie(_.ProjectID,"project_name",a),_.ProjectName=a,He())}),t.addEventListener("blur",function(i){const a=t.innerText;a!==o&&(ie(_.ProjectID,"project_contributors",a),_.ProjectContributors=a,He())})}function bi(e){let t="MAINcontentPages",n=vi;for(const[i,a]of Object.entries(w)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,a)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const a=o[i].toString(),s=new RegExp(`\\{${a}\\}`,"g");let r="";a==="PROJECTviewMOREtitle"?r=e.ProjectName:a==="PROJECTviewMOREartist"?r=e.ProjectContributors:a==="PROJECTviewMOREyear"?r=bt(e.TimeCreated):a==="MOG_checkedDate"?r="checkedIndicator":a==="MOGI_placeholder_itemID"?r="temporaryIidentifier":a==="PROJECTviewDisplayImage"&&(r=`${C}/${e.PictureURL}/5`),n=n.replace(s,r)}document.getElementById(t).innerHTML=n}function gt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function hi(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",D()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let a=0;t.addEventListener("touchend",function(s){const r=new Date().getTime();r-a<300&&(s.stopPropagation(),i()),a=r})}function Ti(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Ii(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Ci(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){pt(_)}),t.addEventListener("click",function(n){n.target===t&&pt(_)})}function pt(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),ie(e.ProjectID,"description",n),o.style.display="none",Ti(),i.style.zIndex=""}async function wi(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){qt(_)}),t.addEventListener("click",function(){ls(_)}),n.addEventListener("click",function(){_t(event)}),o.addEventListener("click",function(){_t(event)})}function _t(e){e.stopPropagation(),e.target;const t=_.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],$(n,e)}async function Li(e){const t=`Are you sure that you want to delete <em><b>${_.ProjectName}</b></em>? This action is not reversable.`,n=await $e(t);if(n==="cancel")k();else if(n==="delete"){const o="/";await Pi(),k(),A(o)}else k()}async function Pi(e){const t=_.ProjectID;try{const o=await(await fetch(`${S}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function Rt(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Mi();const t=document.getElementById("PROJECTview-projectTable"),n=_.ProjectJSON,o=It("--orange"),i=m=>`#${m.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(p=>parseInt(p,10).toString(16).padStart(2,"0")).join("")}`;let a;if(n==null)return;const s=[];if(n)for(const m of n)s.push({img:_.PictureURL,songTitle:m.SongName,artistName:_.ProjectContributors,projectName:ne(m.FolderSize),songDuration:`${Math.floor(m.Duration/60)}:${(m.Duration%60).toString().padStart(2,"0")}`,songSequence:m.SongSequence,version:m.Version,url:m.URL});for(let m=0;m<s.length;m++){s[m].ProjectID=m;const p=s[m],h=Di(p);t.insertAdjacentHTML("beforeend",h);const v=t.lastElementChild;v.addEventListener("dragstart",r),v.addEventListener("dragover",d),v.addEventListener("drop",u)}function r(m){m.dataTransfer.setData("text/plain",m.target.dataset.rowId),m.dataTransfer.getData("text/plain"),a=m.srcElement,uo(m.srcElement)}const c=ht(go,0);function d(m){m.preventDefault(),m.dataTransfer.dropEffect="move";const p=m.target.closest(".PROJECTview-projectTable-rowContainer");if(p!==a){const h=getComputedStyle(p).backgroundColor,v=i(h);c(p,v,o)}}function u(m){m.preventDefault(),a.style,a.style.backgroundColor="yellow !important";const p=m.dataTransfer.getData("text/plain"),h=document.querySelector(`[data-row-id="${p}"]`),v=m.target.closest(".PROJECTview-projectTable-rowContainer");if(v){const I=v.getAttribute("data-row-id");v.before(h);const J=`${p}|${I}`;setTimeout(async()=>{await ie(_.ProjectID,"SongsTableChangeSongSequenceOrder",J),Se()},1)}}t.addEventListener("click",function(m){const p=m.target;if(m.stopPropagation(),p.tagName==="BUTTON"){const h=p.closest(".PROJECTview-projectTable-rowContainer");h&&(h.getAttribute("data-row-id"),Oi(m))}});const g=t.querySelectorAll("[contenteditable]"),E=[],b=m=>{const h=m.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),v=m.target.textContent,I=E.find(P=>P.dataRowIDField===h);if((I?I.currentText:"Row ID not found")==v)return;for(var x=E.length-1;x>=0;x--)E[x].dataRowIDField===h&&(E[x].currentText=v);const L=`${h}-${v}`;ie(_.ProjectID,"project_song_title",L)};g.forEach(m=>{m.addEventListener("blur",b),E.push({dataRowIDField:m.parentElement.parentElement.getAttribute("data-row-id"),currentText:m.innerText})})}function Oi(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],$(i,e)}function Bi(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=_;const a=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=a,gs(i,o)}async function Si(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`,n=await $e(t);n==="cancel"||(n==="delete"?(await li(_.ProjectID,e.songID),k(),Se()):console.error("a statement was returned that isn't valid"))}function Mi(){let e="PROJECTview_projectAreaContainer",t=_i;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Di(e){let t=fi;for(const[o,i]of Object.entries(w)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),a=new RegExp(`\\{${i}\\}`,"g");let s="";i==="PROJECTviewRow_img"?s=`${C}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?s=e.songTitle:i==="PROJECTviewRow_artistName"?s=e.artistName:i==="PROJECTviewRow_projectName"?s=e.projectName:i==="PROJECTviewRow_songDuration"?s=e.songDuration:i==="PROJECTviewRow_projectID"?s=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&ut===!0?s=!0:i==="PROJECTviewRow_contentEditable"&&ut===!1&&(s=!1),t=t.replace(a,s)}return t}function xi(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,a=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{t=a.files}),a.click()):n(t)});function n(o,i){Ri(o)}}async function At(){const e=j[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;ve=!0,wo(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(a){if(a.lengthComputable){const s=a.loaded/a.total*100;me(s),s===100&&me(s)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){B("Storage limit reached","error");for(var s=j.length-1;s>=0;s--)j.shift();ve=!1,ze(),me(0)}ve=!1,j.shift(),ze(),me(0),j.length>0&&await At(),_.ProjectID==n&&Be==!0&&Se()},i.onerror=function(){B("Upload Failed","error")},i.open("POST",`${S}/files/upload_audio/${n}`,!0),i.send(o)}async function Ri(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:_.ProjectID,file:n};j.push(o),ve||await At()}}function Nt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Ai(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(a,s){a.forEach(r=>{r.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!D()||!r.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Ni=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Ui(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(a){a.lengthComputable&&a.loaded/a.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&B("Storage limit reached","error"),n!=="update_user_pfp"?Hi():(qi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${S}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function ji(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Ui(o,t,n)}const ki=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Ie,Y=!1;function $(e,t,n){n===void 0?Gi(e,t):n!==void 0&&n==="update_project_image"?ft(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?ft(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Ji():console.log("invalid menu display inputs")}function Ji(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=ho;const a=document.getElementById("audio"),s=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[M,U]of Object.entries(w)){const G=new RegExp(`\\{${M}\\}`,"g");i=i.replace(G,U)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),g=document.getElementById("LCD_mobile_body_img"),E=a.duration,m=a.currentTime/E*100,p=document.getElementById("LCDMB_seek_input"),h=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const v=document.getElementById("LCDMB_back"),I=document.getElementById("LCDMB_play"),J=document.getElementById("LCDMB_play_icon"),x=document.getElementById("LCDMB_next"),L=document.getElementById("LCDMB_queue_button");a.addEventListener("ended",()=>{P(),Y===!0&&H()}),P(),N(),h.style.width=`${m}%`,a.addEventListener("timeupdate",()=>{const M=a.duration,G=a.currentTime/M*100;h.style.width=`${G}%`}),p.addEventListener("input",function(){const M=a.duration,U=p.value;a.currentTime=M*(U/100)}),v.addEventListener("click",()=>{Yt(),P(),Y===!0&&H()}),I.addEventListener("click",()=>{De(),P(),N()}),x.addEventListener("click",()=>{$t(),P(),Y===!0&&H()}),L.addEventListener("click",()=>{Y===!1?(Ye(),Y=!0):(Fe(),Y=!1)}),Y===!0?Ye():Fe(),o.addEventListener("touchstart",ae,!1),o.addEventListener("touchmove",re,!1),o.addEventListener("touchend",ce,!1);function P(){g.src=Jt,d.innerText=Gt,u.innerText=Ht}function N(){a.paused?J.src=w.icons_playButtonV2:J.src=w.icons_derpy}function H(){const M=document.getElementById("LCD_mobile_queue_content_container");M.innerHTML="";for(let U=f+1;U<l.length;U++){const G=l[U],de=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],X=G.img,tn=G.song_name,nn=G.project_contributors;let xe=bo;for(let Re=0;Re<de.length;Re++){const le=de[Re].toString(),on=new RegExp(`\\{${le}\\}`,"g");let ue="";le==="queue_item_img"?ue=`${C}/${X}/3`:le==="queue_item_song_name"?ue=tn:le==="queue_item_song_artist"&&(ue=nn),xe=xe.replace(on,ue)}M.innerHTML+=xe}}function Ye(){function M(U){U.forEach(G=>{document.querySelectorAll("."+G).forEach(X=>{X.classList.add("queue_visible")})})}M(s),o.removeEventListener("touchstart",ae),o.removeEventListener("touchmove",re),o.removeEventListener("touchend",ce),H()}function Fe(){function M(U){U.forEach(G=>{document.querySelectorAll("."+G).forEach(X=>{X.classList.remove("queue_visible")})})}M(s),o.addEventListener("touchstart",ae,!1),o.addEventListener("touchmove",re,!1),o.addEventListener("touchend",ce,!1)}function ae(M){Y===!1&&(r=M.touches[0].clientY)}function re(M){M.preventDefault()}function ce(M){c=M.changedTouches[0].clientY,c-r>70&&(k(),o.removeEventListener("touchstart",ae),o.removeEventListener("touchmove",re),o.removeEventListener("touchend",ce))}}function Gi(e,t){Ie=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(i.style.zIndex="40",a.style.zIndex="0");const s=document.getElementById("MENUmodalEnvironment");s.innerHTML=ki,s.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";s.addEventListener("click",jt),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const I=Ie.getBoundingClientRect();n=I.left+window.scrollX,o=I.top+window.scrollY;let J=n+"px",x=o+"px";r.style.left=J,r.style.top=x}for(let I=0;I<e.length;I++)$i(e[I]);const E=r.children[0],b=r.offsetWidth,m=r.offsetHeight,p=Ut("MENUmodalBody"),h=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!D()?E.focus():u=="mouse"&&!D()&&(E.focus(),E.blur()),document.addEventListener("keydown",v),p.xOverflow==!0&&(c=n-b+"px",r.style.left=c),p.yOverflow==!0&&(d=o-m+"px",r.style.top=d);for(let I=0;I<h.length;I++){const J=h[I];J.setAttribute("data-menu-item-id",I),J.addEventListener("click",function(x){x.stopPropagation();const P=x.target.getAttribute("data-menu-item-id"),N=e[P].function,H=e[P].optionalParams;if(N=="TEST")console.log("the button worked",H);else if(N!="None"){Yi[N](H);return}else return})}function v(I){(I.key==="Escape"||I.keyCode===27)&&(document.removeEventListener("keydown",v),k())}}function ft(e,t,n){const o=t.clientX,i=t.clientY,a=document.querySelector("main"),s=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";D()&&(a.style.zIndex="40",s.style.zIndex="0"),e.MenuType=n,a.style.zIndex="2",r.innerHTML=yo,r.style.display="block",r.addEventListener("click",jt);const u=document.getElementById("MENUmodalBody"),g=document.getElementById("MENUmodalBody_image_select_file_drop_area"),E=document.getElementById("MENUmodalBody_image_select_file_select_button"),b=document.getElementById("MENUmodalBody_image_select_preview_area"),m=document.getElementById("MENUmodalBody_image_select_submit_button"),p=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let h,v;function I(L,P){return function(){const N=this,H=arguments;clearTimeout(v),v=setTimeout(()=>{L.apply(N,H)},P)}}function J(L,P,N){I(ji,100)(L,P,N)}function x(L){if(h){const P=URL.createObjectURL(h),N=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");b.src=P,m.style.visibility="visible",p.style.outline="3px solid var(--primary)",m.addEventListener("click",()=>{J(h,L.project_id,L.MenuType),N.style.visibility="visible"})}else console.log("No file selected.")}g.addEventListener("dragover",L=>{L.preventDefault()}),g.addEventListener("drop",L=>{L.preventDefault(),h=L.dataTransfer.files[0],x(e)}),E.addEventListener("click",()=>{const L=document.createElement("input");L.type="file",L.accept="image/*",L.addEventListener("change",P=>{h=P.target.files[0],x(e)}),L.click()})}function Hi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",k(),Se()}function qi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",k()}function Ut(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,a=t.getBoundingClientRect().left,s=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+a,d=r+s;let u=!1,g=!1;return c>n&&(u=!0),d>o&&(g=!0),{xOverflow:u,yOverflow:g}}function $i(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let a=new RegExp("\\{MENU_item_text\\}","g"),s=Ni.replace(a,t);if(a=new RegExp("\\{MENU_item_colour\\}","g"),s=s.replace(a,i),n!=="None"){a=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";s=s.replace(a,r);for(const[c,d]of Object.entries(w)){const u=new RegExp(`\\{${c}\\}`,"g");s=s.replace(u,d)}o.innerHTML+=s;return}else{s=s.replace(/<img[^>]+>/g,""),o.innerHTML+=s;return}}function jt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function k(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Ie&&Ie.focus()}const Yi={PROJECT_VIEW_delete_project(e){Li(),k()},PLAYBACK_add_songs_to_queue(e){ms(e),k()},SIGN_OUT_USER(e){k(),Do()},OPEN_SETTINGS_PAGE(e){k(),A("/settings/")},PROJECT_VIEW_delete_song(e){Si(e)},PROJECT_VIEW_add_song_to_queue(e){Bi(e)}};let Q="hidden";function Fi(){ao();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");qe(Q),e.addEventListener("click",Qi),t.addEventListener("click",Vi),q()}function Qi(){if(Q==="hidden"){Q="visible",qe(Q);return}if(Q==="visible"){Q="hidden",qe(Q);return}}function qe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",yt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function q(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<l.length;t++){l[t].id=t;const n=l[t],o=ts(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",es),i.dataset.songId=n.id;const a=i.querySelector(".QUEUE-item-image-removeIndicator"),s=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.addEventListener("click",Xi),a.dataset.songID=n.id,s.dataset.songSet=n.id,s.addEventListener("click",function(r){r.target===s&&Zi(r)}),i.addEventListener("dragstart",zi),i.addEventListener("dragover",Ki),i.addEventListener("drop",Wi),e.appendChild(i)}}function Vi(){const e=f+1;e>=0&&e<l.length?l.splice(e):l.length=0,q()}function zi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ki(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Wi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=l.find(r=>r.id===parseInt(t)),i=l.find(r=>r.id===parseInt(n.dataset.songId)),a=l.indexOf(o),s=l.indexOf(i);a!==-1&&s!==-1&&(l.splice(a,1),l.splice(s,0,o),T.splice(a,1),T.splice(s,0,o),q())}function Xi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=l.findIndex(i=>i.id===n);o!==-1&&(l.splice(o,1),T.splice(o,1)),q()}function Zi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];$(o,e)}function es(e){}function ts(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,a=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let s=ro;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let g="";d==="QUEUE_item_image"?g=`${C}/${n}/3`:d==="QUEUE_item_title"?g=o:d==="QUEUE_item_artist"?g=i:d==="icons_menuOptionsButton"?g=Et:d==="QUEUE_item_timeIndicator"&&(g=a),s=s.replace(u,g)}s=s.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=s,r.innerHTML}const ns=`<div class="LCDbody">
    <div class="LCDPlaybackStoppedContainer" id="LCDPlaybackStoppedContainer">
        <div class="image"></div>
        <div class="title">
            <h1>LA Music</h1>
        </div>
        <div class="other"></div>
    </div>
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
</div>`;function os(){ss(),kt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){as(t)}),rs(),D()&&document.getElementById("LCDbody").addEventListener("click",is)}function is(e){e.stopPropagation(),$({param:"cheese"},e,"lcd_mobile_body")}function ss(){let e="LCDbody",t=ns;for(const[o,i]of Object.entries(w)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),a=new RegExp(`\\{${i}\\}`,"g");let s="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(s=""),t=t.replace(a,s)}document.getElementById(e).innerHTML=t}function kt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=a(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function a(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function s(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=s();window.addEventListener("resize",r),i()}function as(e){e.stopPropagation(),e.target,$([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function rs(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",cs)})}function cs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),fs(n)}function ds(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let l=[],T=[],f=0,Jt="",Gt="",Ht="";document.getElementById("audio");document.getElementById("PLAYERsource");let O="off",V="off",se="paused";function qt(e){l=[],f=0,l=Me(e),l.length>0&&(se="playing",z())}function ls(e){l=[],f=0,l=Me(e),l.length>0&&(V="off",Ft(),se="playing",z())}function Me(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let a=e.ProjectJSON;try{for(const s of a){const r=s.SongName,c=s.Duration,d=s.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(s){console.log(s)}return t}function us(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;l=t,f=n,Is(o),l!==void 0&&l.length>0&&ys(i)}async function ms(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Oe(t),i=JSON.parse(o);i.ProjectID=t;const a=Me(i);if(n==="later")l=l.concat(a),T=T.concat(a);else if(n==="next"){let s=l.slice(0,f+1),r=l.slice(f+1);l=s,l=l.concat(a),l=l.concat(r),s=T.slice(0,f+1),r=T.slice(f+1),T=s,T=T.concat(a),T=T.concat(r)}q()}async function gs(e,t){const n=Me(e);if(t==="later")l=l.concat(n),T=T.concat(n);else if(t==="next"){let o=l.slice(0,f+1),i=l.slice(f+1);l=o,l=l.concat(n),l=l.concat(i),o=T.slice(0,f+1),i=T.slice(f+1),T=o,T=T.concat(n),T=T.concat(i)}q()}function De(){ps()}function ps(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(W("playing"),se="playing",e.play().then(n=>zt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(se="paused",W("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){De()});navigator.mediaSession.setActionHandler("pause",function(){De()});function $t(){Wt()}function Yt(){Xt()}function _s(){document.getElementById("audio").addEventListener("ended",hs)}function fs(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function vs(){Ts()}function Es(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:O,PLAYBACK_shuffle_state:V,progress:t}}function Ft(){if(V==="off"){V="on",vt(V);const t=f+1;T=[...l],l.slice(0,f);const n=l.slice(t);co(n);const o=n.length;l.splice(f,o,...n),q()}else{V="off",vt(V);const t=[...T],i=document.getElementById("PLAYERsource").src.split("/"),a=i[i.length-3];l=t;for(var e=t.length-1;e>=0;e--)t[e].url===a&&(f=e);q()}}function z(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${C}/${l[f].url}/3`,e.load(),se==="playing"?(e.play().then(o=>zt()).catch(o=>console.log(o)),W("playing")):W("paused"),Vt(),Qt()}function ys(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${C}/${l[f].url}/3`,t.load(),t.currentTime=e,W("paused"),Vt(),Qt()}function Qt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,a=Math.floor(o)-i,s=`"-${Qe(a)}"`,c=`"${Qe(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;ds(c,s),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,Kt()})}function Vt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=l[f].song_name,t.innerHTML=l[f].song_name,n.innerHTML=l[f].project_contributors,kt(),o.src=`${C}/${l[f].img}/3`,i.src=`${C}/${l[f].img}/3`,Jt=`${C}/${l[f].img}/5`,Gt=l[f].song_name,Ht=l[f].project_contributors,q()}function zt(){let e=l[f];const t=[{src:`${C}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${C}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${C}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${C}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${C}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${C}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Kt()}function Kt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function bs(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",W("paused"),l=[],T=[],f=0,t.src="http://null.com/null"}function hs(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=l.length;e.pause(),t>f+1&&(O=="off"||O=="on")?(f+=1,z()):O=="song"?z():t==f+1&&O=="on"?(f=0,z()):bs()}function Wt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),l.length>f+1&&(e.pause(),f+=1,z())}navigator.mediaSession.setActionHandler("nexttrack",function(){Wt()});function Xt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),l.length,e.currentTime>2){e.currentTime=0;return}else if(f>0){e.pause(),f-=1,z();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Xt()});function Ts(){O=="off"?(O="on",K(O)):O=="on"?(O="song",K(O)):(O="off",K(O))}function Is(e){e=="off"?(O="off",K(O)):e=="on"?(O="on",K(O)):(e="song",O="on",K(O))}function Cs(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",ws),t.addEventListener("click",Ls),n.addEventListener("click",Ps),o.addEventListener("click",Os),i.addEventListener("click",Bs)}function ws(){Ft()}function Ls(){Yt()}function Ps(){De()}function Os(){$t()}function Bs(){vs()}function vt(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function K(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=w.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=w.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=w.icons_loop_song;return}}function W(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=w.icons_pause;return}if(e=="paused"){t.src=w.icons_play;return}}function Ss(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Zt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Ms)})}function Ms(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Zt(n)}function Zt(e){function t(i,a,s){return i>=a&&i<=s}function n(i){const a=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let s=0;s<4;s++){let r=a[s];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ds(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=mo(Rs,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Ce==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const s=document.getElementById("SEARCH_responseEnvironment").lastChild;s.addEventListener("keydown",function(r){r.key==="Tab"&&Ce==!0&&(r.preventDefault(),s.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",te()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const a=t.value;console.log(a),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function xs(e){te(),Ce=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,a=o.om2SearchObjectSongurl,s=Ve();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{A(`/projects/${i}/${a}`),te()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,a=Ve();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{A(`/projects/${i}`),te()})}}}async function Rs(e,t){if(t.value==""){te();return}const n=await ci(t.value);xs(n)}let Ce=!1;function te(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Ce=!1}const S="/apis",C="/media";async function en(){_s(),io(),so(),os(),Cs(),Ds(),Ss(),Bo(),Fi(),ii(),Co()}window.hasCodeRun||(Zo(),window.hasCodeRun=!0);
