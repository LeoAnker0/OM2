(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const yt="/assets/menu_options_button-a1d7bbe3.svg",sn=`<div class="topleft-searchbarContainer">
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
</div>`,cn="/assets/volume_null-e39cf06f.svg",dn="/assets/recently_added-a0a983c6.svg",ln="/assets/volume_3-c8ab0a75.svg",un="/assets/orange_music_text_logo_black-12e7386c.svg",mn="/assets/volume_2-cfdac9da.svg",gn="/assets/browse_2-85030bba.svg",pn="/assets/volume_1-27e93416.svg",_n="/assets/orange_music_logo_white-2a680ea2.svg",fn="/assets/search_icon-4f5e4381.svg",vn="/assets/orange_music_text_logo_black-91f9e706.png",En="/assets/up_next_queue_button-14fedba2.svg",yn="/assets/orange_music_logo_yellow-a109ff64.svg",bn="/assets/playlist-c6e9024f.svg",hn="/assets/loop_button-aef56865.svg",Tn="/assets/help_icon-867fec9d.svg",In="/assets/play_button-b1e2d3a4.svg",Cn="/assets/browse-14744f27.svg",wn="/assets/orange_music_text_logo_white-7f0ba909.svg",Ln="/assets/back_button-8128cade.svg",Pn="/assets/Albums-2e81dc74.svg",Sn="/assets/songs-016b7188.svg",On="/assets/orange_music_logo_black-4d7e4591.svg",Bn="/assets/your_uploaded_songs-06535705.svg",Mn="/assets/artist-ab677d43.svg",Dn="/assets/shuffle_button-c2f06bc4.svg",xn="/assets/orange_music_text_logo_white-4907051e.png",An="/assets/listen_now-c7438154.svg",Rn="/assets/derpy-21c20ae5.svg",Nn="/assets/next_button-9a850710.svg",jn="/assets/recently_added-7ff28139.svg",Un="/assets/play_button-5eeedbe6.svg",kn="/assets/browse-e8be8609.svg",Jn="/assets/albums-681507b8.svg",Gn="/assets/listen_now.2-bfa293ac.svg",Hn="/assets/your_uploads-02e5c93c.svg",qn="/assets/play_button.2-fc90fac7.svg",$n="/assets/listen_now-fb02ffce.svg",Yn="/assets/browse.2-15b501dd.svg",Fn="/assets/place_holder_image-d4006a96.svg",Qn="/assets/icons_MOGitems_add-19e679f7.svg",Vn="/assets/back-9279721d.svg",zn="/assets/forwards-605bd405.svg",Kn="/assets/icons_close-57e87944.svg",Wn="/assets/icons_pause-8012f8cc.svg",Xn="/assets/icons_loop-32d1576c.svg",Zn="/assets/icons_loop_song-87f53dc7.svg",eo="/assets/icons_play-a5074c5b.svg",to="/assets/icons_settings-793063fb.svg",no="/assets/love-07ac5006.svg",oo="/assets/upload-3bad9145.svg",N={icons_volumeNull:cn,icons_recentlyAdded:dn,icons_volume3:ln,icons_orangeMusicTextLogoBlack:un,icons_volume2:mn,icons_browse2:gn,icons_volume1:pn,icons_orangeMusicLogoWhite:_n,icons_searchIcon:fn,icons_orangeMusicTextLogoBlackPng:vn,icons_queueButton:En,icons_orangeMusicLogoYellow:yn,icons_playlist:bn,icons_loopButton:hn,icons_helpIcon:Tn,icons_playButton:In,icons_browse:Cn,icons_menuOptionsButton:yt,icons_orangeMusicTextLogoWhite:wn,icons_backButton:Ln,icons_Albums:Pn,icons_songs:Sn,icons_orangeMusicLogoBlack:On,icons_yourUploadedSongs:Bn,icons_artist:Mn,icons_shuffleButton:Dn,icons_orangeMusicTextLogoWhitePng:xn,icons_listenNow:An,icons_derpy:Rn,icons_nextButton:Nn,icons_recentlyAddedV2:jn,icons_playButtonV2:Un,icons_browseV2:kn,icons_albumsV2:Jn,icons_listenNow2V2:Gn,icons_yourUploads:Hn,icons_playButton2:qn,icons_listenNowV2:$n,icons_browse2V2:Yn,v3_placeholder:Fn,icons_MOGitems_add:Qn,icons_back:Vn,icons_forwards:zn,icons_close:Kn,icons_pause:Wn,icons_loop:Xn,icons_loop_song:Zn,icons_play:eo,icons_settings:to,current_year:new Date().getFullYear(),icons_love:no,icons_upload:oo};function io(){let e="topleftContentArea",t=sn;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function so(){let e="toprightContentArea",t=an;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ao(){let e="MAINcontentContainer",t=rn;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ro=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function R(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function bt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function W(e){for(const[t,n]of Object.entries(N)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function Ve(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function co(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function We(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function lo(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function ht(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ae(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function uo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Tt(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function mo(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function Ge(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let Ce;const T=new Map;function go(e,t,n){T.has(e)||T.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!T.has(e))return;const r=Math.min(a/500,1);if(!T.has(e))return;const c=It(T.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||T.get(e).isChanging)&&(T.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",T.delete(e))}clearTimeout(Ce),Ce=setTimeout(()=>{T.has(e)&&!T.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(T.get(e).animationFrameId),T.delete(e))},500),T.get(e).isChanging=!0;const i=Date.now();T.get(e).animationFrameId=requestAnimationFrame(o)}function po(e,t,n,o,i){const s=i||2500;T.has(e)||T.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!T.has(e))return;const u=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!T.has(e))return;let l;o==="hardNewToOld"&&u<1?l=n:l=It(T.get(e).originalColor,Math.min(u,1),n),e.style.backgroundColor=l,u<1||T.get(e).isChanging?T.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",T.delete(e)),u==1&&(e.style.backgroundColor="",T.delete(e))}clearTimeout(Ce),Ce=setTimeout(()=>{T.has(e)&&!T.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(T.get(e).animationFrameId),T.delete(e))},s),T.get(e).isChanging=!0;const r=Date.now();T.get(e).animationFrameId=requestAnimationFrame(a)}function _o(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function It(e,t,n){return fo(n,e,t)}function fo(e,t,n){const o=function(p){return p=p.toString(16),p.length===1?"0"+p:p},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),l=Math.round(s*(1-n)+c*n),O=Math.round(a*(1-n)+d*n);return"#"+o(u)+o(l)+o(O)}function Ct(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=vo(o,i,s),r=ke(a[0]),c=ke(a[1]),d=ke(a[2]);return Eo({r,g:c,b:d})}function vo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function ke(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Eo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const yo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
`;let Me=!1;function Co(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=To,n.addEventListener("click",function(o){Me==!1?Lo(o):we()}),t.innerHTML=Io}function wo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Xe(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Me==!0&&J.length>0||we()}function ve(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(J.length>0){t.innerHTML=J[0].file.name,n.innerHTML=ae(J[0].file.size*1.75),Po(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=J.length-1;o>=1;o--){const a=J[o].file.name,r=ae(J[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let Ze;function Lo(e){Me=!0,Ze=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",we),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const l=Ze.getBoundingClientRect();t=l.left+window.scrollX,n=l.top+window.scrollY;let O=t+"px",p=n+"px";o.style.left=O,o.style.top=p}const r=o.offsetWidth,c=o.offsetHeight,d=Ut("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(l){(l.key==="Escape"||l.keyCode===27)&&(document.removeEventListener("keydown",u),we())}}function we(){Me=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function Po(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const et=1500;let wt=0,He=[],Je;function D(e,t){const o=new Date().getTime();He.push({notificationText:e,notificationType:t,time:o}),Lt()}function Lt(){const t=new Date().getTime(),n=He.at(wt);He.length>1?t-Je>et?(tt(n.notificationText,n.notificationType),Je=t):setTimeout(Lt,et):(tt(n.notificationText,n.notificationType),Je=t)}function tt(e,t){const n=document.getElementById("noticationContainer");let o;wt+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}let De;async function So(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await xe("profile_picture"),n=`${B}/${t}/3`;De=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Oo)}catch(t){console.error("Error initializing account image:",t)}}function Oo(e){e.stopPropagation(),Bo(e)}function Bo(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Mo(){await li(),localStorage.clear(),location.reload()}function Do(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${B}/${De}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",xo)}function xo(e){e.stopPropagation(),Ao(e)}function Ao(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Ro=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,No=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,jo=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Pt=30;let re=0;async function Uo(){try{if(document.getElementById("MAINcontentPages").innerHTML+=W(Ro),localStorage.getItem("MOGitems")!=null){const t=JSON.parse(localStorage.getItem("MOGitems"));re+=t.length,nt(t)}const e=await xt(Pt,0);JSON.stringify(e)!=localStorage.getItem("MOGitems")&&(re+=e.length,nt(e),localStorage.setItem("MOGitems",JSON.stringify(e))),R()&&Do()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function St(){re=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ot),e.innerHTML=""}function nt(e){const t=document.getElementById("MOGgridContainer");t.innerHTML=W(No),ot(e);const n=document.getElementById("MOGcontainer");n.addEventListener("click",function(s){Ot(s,e)});let o;n.addEventListener("touchstart",function(s){s.timeStamp,o=setTimeout(function(){i(s,e)},500)}),n.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(o)});function i(s,a){navigator.vibrate(1e3);const c=s.target.id.split("-")[1],d=a[c].project_id;Bt(s,d)}t.addEventListener("scroll",async function(){const s=t.scrollTop,a=t.scrollHeight,r=t.clientHeight;if(s>=a-r){const c=await xt(Pt,re);re+=c.length,c.length>0&&ot(c)}})}function ot(e){const t=document.getElementById("MOGgridContainer"),n=e.length,o=W(jo);for(var i=0;i<=n-1;i++){const s=i,a=e[i].img,r=e[i].top,c=e[i].bottom,d=e[i].days,u=lo(d),l={itemsToReplace:[["MOG_image",`${B}/${a}/3`],["MOG_text1",`${r}`],["MOG_text2",`${c}`],["MOG_checkedDate",`${u}`],["MOGI_placeholder_itemID",`${s}`]]};t.innerHTML+=Ve(o,l)}}async function Ot(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Ke(i),a=JSON.parse(s);a.ProjectID=i,qt(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Bt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;U(`/projects/${i}`)}n.id==="MOGaddNewItem"&&U("/new-project/")}function Bt(e,t){e.stopPropagation(),Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}let it;function ze(e){return new Promise((t,n)=>{it=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){st(),t("delete")}function d(){it.focus(),st(),t("cancel")}i.addEventListener("click",u=>{const l=u.target;l===a?c():(l===r||l===i)&&d()}),o==="keyboard"&&!R()?r.focus():o=="mouse"&&!R()&&(H(),r.focus(),r.blur())})}function st(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const ko=`<div class="ADMINusersTableInfoRow">
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
</div>`,Jo=`<h1>Admin</h1>
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
<br><br>`,at=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Mt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){Go(a,r,c)}}function Go(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),Y(o,e,n)}const rt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,Ee=`<h1>General</h1>
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
<br><br>`,ct=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,Ho=`<div class="settings_container">
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
</div>`;let Le="general",Q;async function qo(){const e=await xe("admin");e=="true"&&!R()?(Le="admin",Q=[{name:"general",markup:Ee,button_id:"settings_button_general",function:ye},{name:"user",markup:ct,button_id:"settings_button_user",function:be},{name:"admin",markup:at,button_id:"settings_button_admin",function:lt}]):e=="false"&&!R()?Q=[{name:"general",markup:Ee,button_id:"settings_button_general",function:ye},{name:"user",markup:ct,button_id:"settings_button_user",function:be}]:R()&&e=="true"?(Le="admin",Q=[{name:"general",markup:Ee,button_id:"settings_button_general",function:ye},{name:"user",markup:rt,button_id:"settings_button_user",function:be},{name:"admin",markup:at,button_id:"settings_button_admin",function:lt}]):Q=[{name:"general",markup:Ee,button_id:"settings_button_general",function:ye},{name:"user",markup:rt,button_id:"settings_button_user",function:be}]}async function $o(){await qo();const e=document.getElementById("MAINcontentPages");let t=Ho;for(const[i,s]of Object.entries(N)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");dt(Le);for(var o=Q.length-1;o>=0;o--){const i=Q[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=Q.find(u=>u.button_id===r).name;dt(d)})}n.addEventListener("click",function(){U("/")})}function qe(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function dt(e){Le=e;const t=["users_img"],n=document.getElementById("view_container"),o=Q.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(N)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${B}/${De}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function ye(){}function be(){Mt("user-id","settings_views_user_pfp_img","update_user_pfp")}let oe=[];async function lt(){if(await xe("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=Jo;for(const[a,r]of Object.entries(N)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${B}/${De}/4/`),o=o.replace(c,d)}n.innerHTML=o,$e(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")D("Error Updating Column: empty inputs","error");else for(var d=oe.length-1;d>=0;d--){const u=oe[d];console.log(u),di(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){D("Error Deleting User: user UUID is empty","error");return}let c=null;for(let l=0;l<j.length;l++)j[l].uuid==r&&(c=j[l].username);if(c===null){D("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await ze(d);u==="cancel"||u==="delete"&&((await ai(r)).success=="success"?D("Successfully deleted the user","success"):D("Failed to delete the user","error"),$e())})}let j;async function $e(){const e=await ci();j=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<j.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=j[n].username,s=j[n].uuid,a=j[n].verified,r=j[n].email;let c=j[n].storage_allowance;c=ae(c);const d=j[n].admin,u=n;let l=j[n].storage_used;l=ae(l);let O=ko,p=j[n].profile_picture;p=`${B}/${p}/3`;for(let v=0;v<o.length;v++){const f=o[v].toString(),h=new RegExp(`\\{${f}\\}`,"g");let b="";f==="Username"?b=i:f==="Email"?b=r:f==="UUID"?b=s:f==="Verified"?b=a:f==="Space_Used"?b=l:f==="Storage_Allowance"?b=c:f==="profile_picture_url"?b=p:f==="checkbox_number"?b=u:f==="Admin"&&(b=d),O=O.replace(h,b)}t.innerHTML+=O}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Yo()})}function Yo(){oe=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=j[i.id].uuid;oe.push(a)}),o.innerHTML=`Selected Users: ${oe.length}`}const Fo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" tabindex="0" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="current-password" tabindex="0" name="password" id="password" required>
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
</div>`,Qo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
            <label for="new-password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Signup">
        </form>
    </div>
</div>`;function Vo(){let e="MAINcontentPages",t=Qo;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",zo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){U("/")})}async function zo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${x}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)D(`There was an error, ${o}`,"error");else{const i=o;D("Sign up Successful, Log in now","success"),U("/")}}catch{D("There was an error, try again","error")}}let ne=!1,Pe=!1,Ye=!1,Se=!1;async function Ko(){await Zo()?(en(),Se=!0):Pe||(Dt(),Pe=!0)}async function Wo(){Pe=!1,ne=!1,Ye=!1,Dt(),Pe=!0}function Dt(){ei();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${x}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{ut(),Vo()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),ne)return!1;ne=!0;const s=n.value,a=o.value;try{await Xo(s,a)?(Se=!0,D("Login Successful","success"),en(),ut()):(Se=!1,D("Error Logging In","error")),ne=!1}catch(r){console.error("Error:",r),ne=!1}return!1})}async function Xo(e,t){try{return(await(await fetch(`${x}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?D("The server is down","error"):console.error(n),!1}}async function Zo(){try{const e=await fetch(`${x}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&D("The server is down","error")}}function ei(){let e="MAINcontentPages",t=Fo;document.getElementById(e).innerHTML+=t}function ut(){if(Ye===!0)return;Ye=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function ti(){const e=await xe("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;U(r),ts(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=m,d=y,u=cs();u.current_path=r,u.current_queue=c,u.current_index=d;const l=i(u);l!==o&&(ii("last_state",u),o=l,n.set("playback_states",l))}function a(){U(currentPath)}}function ni(){Se==!1?(qe(),Wo()):(At(),qe(),Uo())}function mt(e,t){St(),qe(),t!==null?_t(e,t):_t(e)}function gt(){St(),At(),$o()}const pt={"/":ni,"/new-project/":he,"/new-project":he,"/new/":he,"/new":he,"/projects/:projectID":mt,"/projects/:projectID/:songURL":mt,"/settings/":gt,"/settings":gt};function oi(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){U("/")}}function U(e){const t=Object.keys(pt);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=pt[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}oi()}async function ii(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${x}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function si(e){try{const t={searchQuery:e};return await(await fetch(`${x}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ai(e){try{const t={uuid:e};return await(await fetch(`${x}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ri(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${x}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&D("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function xe(e){try{return(await(await fetch(`${x}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ie(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${x}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Ke(e){try{return(await(await fetch(`${x}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function xt(e,t){try{const i=(await(await fetch(`${x}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function he(){try{const o=`/projects/${(await(await fetch(`${x}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;U(o)}catch(e){console.error("Error:",e)}}async function ci(){try{return(await(await fetch(`${x}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function di(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${x}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){D("Table Updated Successfully","success"),$e();return}else{D(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){D(`Error Updating Column ${t}: ${o}`,"error");return}}async function li(){try{const t=await(await fetch(`${x}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const ui=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function Fe(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=ui}}const mi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,gi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,pi=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,J=[];let Ae=!1,Te=!1,_i=!0,g;async function _t(e,t){Ae=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?g=JSON.parse(n):bt()==!0?g={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0}:g={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0},Ei(g),Fe("","blank"),sessionStorage.setItem("description",g.Description),Rt(),Ie(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{U("/")}),await le(),Nt(g.ProjectName),vi(),Mt(g.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Ci(),Fe(g,"full"),t!=null){for(var i=g.ProjectJSON.length-1;i>=0;i--)if(g.ProjectJSON[i].URL==t){const a=`${g.ProjectJSON[i].SongSequence}-${g.ProjectJSON[i].Version}`;fi(a)}}}function At(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Ae=!1}async function le(){if(!Ae)return;const e=g.ProjectID,t=await Ke(e);if(t=="")return;const n=structuredClone(g),o=JSON.parse(t);if(o.ProjectID=e,g=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(g)}`),n.Description!==g.Description){const s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");s.innerText=g.ProjectName,a.innerText=`${g.ProjectContributors} | ${ht(g.TimeCreated)}`,sessionStorage.setItem("description",g.Description),Rt()}if(n.PictureURL!==g.PictureURL){const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${B}/${g.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==g.ProjectContributors){const s=document.getElementById("PROJECTviewDisplayTitleH3");s.innerText=g.ProjectContributors}if(n.ProjectName!==g.ProjectName){const s=document.getElementById("PROJECTviewDisplayTitleH1");s.innerText=g.ProjectName}if(n.ProjectJSON!==g.ProjectJSON)if(n.ProjectJSON==null||g.ProjectJSON==null)Ie();else if(n.ProjectJSON.length!==g.ProjectJSON.length)Ie();else{let s=0;for(var i=g.ProjectJSON.length-1;i>=0;i--)g.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&Ie()}Fe(g,"full")}function fi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=Tt(po,0),o=Ct("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),_o(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function vi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),s=document.getElementById("PROJECTviewDisplayDescription"),a=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),u=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),l=document.getElementById("PROJECTviewDisplayMenuButton"),O=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),p=document.querySelector(".PROJECTviewDisplayImage"),v=document.getElementById("PROJECTviewMobileStickyHeader"),f=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const h=document.getElementById("PROJECTviewMOREdescriptionP"),b=new IntersectionObserver(E,{threshold:.1}),_=sessionStorage.getItem("description");h.innerText=_,i.addEventListener("click",function(){L()}),s.addEventListener("dblclick",function(){L()});let C=0;s.addEventListener("touchend",function(P){const I=new Date().getTime();I-C<300&&(P.stopPropagation(),L()),C=I}),c.addEventListener("click",function(){w(g)}),a.addEventListener("click",function(P){P.target===a&&w(g)}),d.addEventListener("click",function(){qt(g)}),u.addEventListener("click",function(){es(g)}),l.addEventListener("click",function(){ft(event)}),O.addEventListener("click",function(){ft(event)}),b.observe(p),e.addEventListener("blur",function(P){const I=e.innerText;I!==n&&(Nt(I),ie(g.ProjectID,"project_name",I),g.ProjectName=I)}),t.addEventListener("blur",function(P){const I=t.innerText;I!==o&&(ie(g.ProjectID,"project_contributors",I),g.ProjectContributors=I)});function L(){a.style.display="grid",R()&&(r.style.zIndex="40")}function E(P,I){P.forEach(q=>{q.isIntersecting&&R()?(v.style.backdropFilter="none",v.style.backgroundColor="transparent",f.style.visibility="hidden"):q.isIntersecting&&!R()||!q.isIntersecting&&!R()?(v.style.backdropFilter="",v.style.backgroundColor="",f.style.visibility=""):!q.isIntersecting&&R()&&(v.style.backdropFilter="blur(15px)",v.style.backgroundColor="var(--background-transparent)",f.style.visibility="visible")})}function w(P){const I=h.value;sessionStorage.setItem("description",I),ie(P.ProjectID,"description",I),a.style.display="none",h.innerText=I,r.style.zIndex=""}}function Ei(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${ht(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${B}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=Ve(W(pi),t)}function Rt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Nt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function ft(e){e.stopPropagation(),e.target;const t=g.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],Y(n,e)}async function yi(e){const t=`Are you sure that you want to delete <em><b>${g.ProjectName}</b></em>? This action is not reversable.`;if(await ze(t)==="delete"){await bi(),H(),U("/");return}H()}async function bi(){const e=g.ProjectID;localStorage.removeItem(`project-${e}`);try{const n=await(await fetch(`${x}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.error("Error:",t)}}function Ie(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=W(mi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(g.ProjectJSON);const o=Ct("--orange"),i=p=>`#${p.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(v=>parseInt(v,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let p=0;p<n.length;p++){let v=W(gi);const f=n[p],h={itemsToReplace:[["PROJECTviewRow_img",`${B}/${g.PictureURL}/3`],["PROJECTviewRow_songTitle",`${f.SongName}`],["PROJECTviewRow_artistName",`${g.ProjectContributors}`],["PROJECTviewRow_projectName",`${ae(f.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(f.Duration/60)}:${(f.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${f.SongSequence}-${f.Version}`],["PROJECTviewRow_contentEditable",`${_i}`]]};v=Ve(v,h),t.insertAdjacentHTML("beforeend",v);{const b=t.lastElementChild;b.addEventListener("dragstart",a),b.addEventListener("dragover",c),b.addEventListener("drop",d)}}function a(p){p.dataTransfer.setData("text/plain",p.target.dataset.rowId),p.dataTransfer.getData("text/plain"),s=p.srcElement,uo(p.srcElement)}const r=Tt(go,0);function c(p){p.preventDefault(),p.dataTransfer.dropEffect="move";const v=p.target.closest(".PROJECTview-projectTable-rowContainer");if(v!==s){const f=getComputedStyle(v).backgroundColor,h=i(f);r(v,h,o)}}function d(p){p.preventDefault();const v=p.dataTransfer.getData("text/plain"),f=document.querySelector(`[data-row-id="${v}"]`),h=p.target.closest(".PROJECTview-projectTable-rowContainer");if(h){const _=structuredClone(g),C=h.getAttribute("data-row-id");h.before(f);const L=`${v}|${C}`;setTimeout(async()=>{await ie(g.ProjectID,"SongsTableChangeSongSequenceOrder",L),le()},1);let E=[];for(var b=0;b<t.children.length;b++){if(b==0)continue;const w=t.children[b],q=w.dataset.rowId.split("-")[0];let ee=_.ProjectJSON[q-1];ee.SongSequence=b,E.push(ee),w.style.backgroundColor="",w.dataset.rowId=`${b}-1`}g.ProjectJSON=E}}t.addEventListener("click",function(p){const v=p.target;if(p.stopPropagation(),v.tagName==="BUTTON"){const f=v.closest(".PROJECTview-projectTable-rowContainer");f&&(f.getAttribute("data-row-id"),hi(p))}});const u=t.querySelectorAll("[contenteditable]"),l=[],O=p=>{const f=p.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),h=p.target.textContent,b=l.find(E=>E.dataRowIDField===f);if((b?b.currentText:"Row ID not found")==h)return;for(var C=l.length-1;C>=0;C--)l[C].dataRowIDField===f&&(l[C].currentText=h);const L=`${f}-${h}`;ie(g.ProjectID,"project_song_title",L)};u.forEach(p=>{p.addEventListener("blur",O),l.push({dataRowIDField:p.parentElement.parentElement.getAttribute("data-row-id"),currentText:p.innerText})})}function hi(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],Y(i,e)}function Ti(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(g);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,os(i,o)}async function Ii(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await ze(t)==="delete"&&(await ri(g.ProjectID,e.songID),le()),H()}function Ci(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){wi(o)}}async function jt(){const e=J[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;Te=!0,wo(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;ve(a),a===100&&ve(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){D("Storage limit reached","error");for(var a=J.length-1;a>=0;a--)J.shift();Te=!1,Xe(),ve(0)}Te=!1,J.shift(),Xe(),ve(0),J.length>0&&await jt(),g.ProjectID==n&&Ae==!0&&le()},i.onerror=function(){D("Upload Failed","error")},i.open("POST",`${x}/files/upload_audio/${n}`,!0),i.send(o)}async function wi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:g.ProjectID,file:n};J.push(o),Te||await jt()}}const Li=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Pi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&D("Storage limit reached","error"),n!=="update_user_pfp"?Di():(xi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${x}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Si(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Pi(o,t,n)}const Oi=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Oe,F=!1;function Y(e,t,n){n===void 0?Mi(e,t):n!==void 0&&n==="update_project_image"?vt(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?vt(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Bi():console.log("invalid menu display inputs")}function Bi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=ho;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;R()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[A,k]of Object.entries(N)){const G=new RegExp(`\\{${A}\\}`,"g");i=i.replace(G,k)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),l=document.getElementById("LCD_mobile_body_img"),O=s.duration,v=s.currentTime/O*100,f=document.getElementById("LCDMB_seek_input"),h=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const b=document.getElementById("LCDMB_back"),_=document.getElementById("LCDMB_play"),C=document.getElementById("LCDMB_play_icon"),L=document.getElementById("LCDMB_next"),E=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{w(),F===!0&&I()}),w(),P(),h.style.width=`${v}%`,s.addEventListener("timeupdate",()=>{const A=s.duration,G=s.currentTime/A*100;h.style.width=`${G}%`}),f.addEventListener("input",function(){const A=s.duration,k=f.value;s.currentTime=A*(k/100)}),b.addEventListener("click",()=>{Yt(),w(),F===!0&&I()}),_.addEventListener("click",()=>{Ne(),w(),P()}),L.addEventListener("click",()=>{$t(),w(),F===!0&&I()}),E.addEventListener("click",()=>{F===!1?(q(),F=!0):(ee(),F=!1)}),F===!0?q():ee(),o.addEventListener("touchstart",ue,!1),o.addEventListener("touchmove",me,!1),o.addEventListener("touchend",ge,!1);function w(){l.src=ce,d.innerText=Gt,u.innerText=Ht}function P(){s.paused?C.src=N.icons_playButtonV2:C.src=N.icons_derpy}function I(){const A=document.getElementById("LCD_mobile_queue_content_container");A.innerHTML="";for(let k=y+1;k<m.length;k++){const G=m[k],pe=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],te=G.img,tn=G.song_name,nn=G.project_contributors;let je=bo;for(let Ue=0;Ue<pe.length;Ue++){const _e=pe[Ue].toString(),on=new RegExp(`\\{${_e}\\}`,"g");let fe="";_e==="queue_item_img"?fe=`${B}/${te}/3`:_e==="queue_item_song_name"?fe=tn:_e==="queue_item_song_artist"&&(fe=nn),je=je.replace(on,fe)}A.innerHTML+=je}}function q(){function A(k){k.forEach(G=>{document.querySelectorAll("."+G).forEach(te=>{te.classList.add("queue_visible")})})}A(a),o.removeEventListener("touchstart",ue),o.removeEventListener("touchmove",me),o.removeEventListener("touchend",ge),I()}function ee(){function A(k){k.forEach(G=>{document.querySelectorAll("."+G).forEach(te=>{te.classList.remove("queue_visible")})})}A(a),o.addEventListener("touchstart",ue,!1),o.addEventListener("touchmove",me,!1),o.addEventListener("touchend",ge,!1)}function ue(A){F===!1&&(r=A.touches[0].clientY)}function me(A){A.preventDefault()}function ge(A){c=A.changedTouches[0].clientY,c-r>70&&(H(),o.removeEventListener("touchstart",ue),o.removeEventListener("touchmove",me),o.removeEventListener("touchend",ge))}}function Mi(e,t){Oe=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");R()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Oi,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",kt),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const _=Oe.getBoundingClientRect();n=_.left+window.scrollX,o=_.top+window.scrollY;let C=n+"px",L=o+"px";r.style.left=C,r.style.top=L}for(let _=0;_<e.length;_++)Ai(e[_]);const O=r.children[0],p=r.offsetWidth,v=r.offsetHeight,f=Ut("MENUmodalBody"),h=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!R()?O.focus():u=="mouse"&&!R()&&(O.focus(),O.blur()),document.addEventListener("keydown",b),f.xOverflow==!0&&(c=n-p+"px",r.style.left=c),f.yOverflow==!0&&(d=o-v+"px",r.style.top=d);for(let _=0;_<h.length;_++){const C=h[_];C.setAttribute("data-menu-item-id",_),C.addEventListener("click",function(L){L.stopPropagation();const w=L.target.getAttribute("data-menu-item-id"),P=e[w].function,I=e[w].optionalParams;if(P=="TEST")console.log("the button worked",I);else if(P!="None"){Ri[P](I);return}else return})}function b(_){(_.key==="Escape"||_.keyCode===27)&&(document.removeEventListener("keydown",b),H())}}function vt(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";R()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=yo,r.style.display="block",r.addEventListener("click",kt);const u=document.getElementById("MENUmodalBody"),l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),O=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),v=document.getElementById("MENUmodalBody_image_select_submit_button"),f=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let h,b;function _(E,w){return function(){const P=this,I=arguments;clearTimeout(b),b=setTimeout(()=>{E.apply(P,I)},w)}}function C(E,w,P){_(Si,100)(E,w,P)}function L(E){if(h){const w=URL.createObjectURL(h),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=w,v.style.visibility="visible",f.style.outline="3px solid var(--primary)",v.addEventListener("click",()=>{C(h,E.project_id,E.MenuType),P.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",E=>{E.preventDefault()}),l.addEventListener("drop",E=>{E.preventDefault(),h=E.dataTransfer.files[0],L(e)}),O.addEventListener("click",()=>{const E=document.createElement("input");E.type="file",E.accept="image/*",E.addEventListener("change",w=>{h=w.target.files[0],L(e)}),E.click()})}function Di(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",H(),le()}function xi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",H()}function Ut(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let u=!1,l=!1;return c>n&&(u=!0),d>o&&(l=!0),{xOverflow:u,yOverflow:l}}function Ai(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Li.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(N)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function kt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function H(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Oe&&Oe.focus()}const Ri={PROJECT_VIEW_delete_project(e){yi(),H()},PLAYBACK_add_songs_to_queue(e){ns(e),H()},SIGN_OUT_USER(e){H(),Mo()},OPEN_SETTINGS_PAGE(e){H(),U("/settings/")},PROJECT_VIEW_delete_song(e){Ii(e)},PROJECT_VIEW_add_song_to_queue(e){Ti(e)}};let V="hidden";function Ni(){ao();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Qe(V),e.addEventListener("click",ji),t.addEventListener("click",Ui),$()}function ji(){if(V==="hidden"){V="visible",Qe(V);return}if(V==="visible"){V="hidden",Qe(V);return}}function Qe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",bt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function $(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=y+1;t<m.length;t++){m[t].id=t;const n=m[t],o=Yi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",$i),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Hi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&qi(r)}),i.addEventListener("dragstart",ki),i.addEventListener("dragover",Ji),i.addEventListener("drop",Gi),e.appendChild(i)}}function Ui(){const e=y+1;e>=0&&e<m.length?m.splice(e):m.length=0,$()}function ki(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ji(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Gi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(r=>r.id===parseInt(t)),i=m.find(r=>r.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),S.splice(s,1),S.splice(a,0,o),$())}function Hi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),S.splice(o,1)),$()}function qi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];Y(o,e)}function $i(e){}function Yi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=ro;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let l="";d==="QUEUE_item_image"?l=`${B}/${n}/3`:d==="QUEUE_item_title"?l=o:d==="QUEUE_item_artist"?l=i:d==="icons_menuOptionsButton"?l=yt:d==="QUEUE_item_timeIndicator"&&(l=s),a=a.replace(u,l)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Fi=`<div class="LCDbody">
    <div class="LCDPlaybackStoppedContainer" id="LCDPlaybackStoppedContainer">
        <div class="image"></div>
        <div class="title">
            <h1>LA Music</h1>
        </div>
        <div class="other"></div>
    </div>
    <div class="LCDcontentContainer">
        <div class="LCDleftImage" id="MusicEnjoyOpenButton">
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
</div>`;function Qi(){zi(),Jt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ki(t)}),Wi(),R()&&document.getElementById("LCDbody").addEventListener("click",Vi)}function Vi(e){e.stopPropagation(),Y({param:"cheese"},e,"lcd_mobile_body")}function zi(){let e="LCDbody",t=Fi;for(const[o,i]of Object.entries(N)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Jt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=s(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Ki(e){e.stopPropagation(),e.target,Y([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Wi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Xi)})}function Xi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),as(n)}function Zi(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let m=[],S=[],y=0,ce="",Gt="",Ht="";document.getElementById("audio");document.getElementById("PLAYERsource");let M="off",z="off",de="paused";function qt(e){m=[],y=0,m=Re(e),m.length>0&&(de="playing",K())}function es(e){m=[],y=0,m=Re(e),m.length>0&&(z="off",Ft(),de="playing",K())}function Re(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function ts(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,y=n,gs(o),m!==void 0&&m.length>0&&ds(i)}async function ns(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Ke(t),i=JSON.parse(o);i.ProjectID=t;const s=Re(i);if(n==="later")m=m.concat(s),S=S.concat(s);else if(n==="next"){let a=m.slice(0,y+1),r=m.slice(y+1);m=a,m=m.concat(s),m=m.concat(r),a=S.slice(0,y+1),r=S.slice(y+1),S=a,S=S.concat(s),S=S.concat(r)}$()}async function os(e,t){const n=Re(e);if(t==="later")m=m.concat(n),S=S.concat(n);else if(t==="next"){let o=m.slice(0,y+1),i=m.slice(y+1);m=o,m=m.concat(n),m=m.concat(i),o=S.slice(0,y+1),i=S.slice(y+1),S=o,S=S.concat(n),S=S.concat(i)}$()}function Ne(){is()}function is(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(Z("playing"),de="playing",e.play().then(n=>zt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(de="paused",Z("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){Ne()});navigator.mediaSession.setActionHandler("pause",function(){Ne()});function $t(){Wt()}function Yt(){Xt()}function ss(){document.getElementById("audio").addEventListener("ended",us)}function as(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function rs(){ms()}function cs(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:M,PLAYBACK_shuffle_state:z,progress:t}}function Ft(){if(z==="off"){z="on",Et(z);const t=y+1;S=[...m],m.slice(0,y);const n=m.slice(t);co(n);const o=n.length;m.splice(y,o,...n),$()}else{z="off",Et(z);const t=[...S],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(y=e);$()}}function K(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${B}/${m[y].url}/3`,e.load(),de==="playing"?(e.play().then(o=>zt()).catch(o=>console.log(o)),Z("playing")):Z("paused"),Vt(),Qt()}function ds(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${B}/${m[y].url}/3`,t.load(),t.currentTime=e,Z("paused"),Vt(),Qt()}function Qt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${We(s)}"`,c=`"${We(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;Zi(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,Kt()})}function Vt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=m[y].song_name,t.innerHTML=m[y].song_name,n.innerHTML=m[y].project_contributors,Jt(),o.src=`${B}/${m[y].img}/3`,i.src=`${B}/${m[y].img}/3`,ce=`${B}/${m[y].img}/5`,Gt=m[y].song_name,Ht=m[y].project_contributors,$()}function zt(){let e=m[y];const t=[{src:`${B}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${B}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${B}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${B}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${B}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${B}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Kt()}function Kt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ls(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",Z("paused"),m=[],S=[],y=0,t.src="http://null.com/null"}function us(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>y+1&&(M=="off"||M=="on")?(y+=1,K()):M=="song"?K():t==y+1&&M=="on"?(y=0,K()):ls()}function Wt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>y+1&&(e.pause(),y+=1,K())}navigator.mediaSession.setActionHandler("nexttrack",function(){Wt()});function Xt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),m.length,e.currentTime>2){e.currentTime=0;return}else if(y>0){e.pause(),y-=1,K();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Xt()});function ms(){M=="off"?(M="on",X(M)):M=="on"?(M="song",X(M)):(M="off",X(M))}function gs(e){e=="off"?(M="off",X(M)):e=="on"?(M="on",X(M)):(e="song",M="on",X(M))}function ps(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",_s),t.addEventListener("click",fs),n.addEventListener("click",vs),o.addEventListener("click",Es),i.addEventListener("click",ys)}function _s(){Ft()}function fs(){Yt()}function vs(){Ne()}function Es(){$t()}function ys(){rs()}function Et(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function X(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=N.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=N.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=N.icons_loop_song;return}}function Z(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=N.icons_pause;return}if(e=="paused"){t.src=N.icons_play;return}}function bs(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Zt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",hs)})}function hs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Zt(n)}function Zt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ts(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=mo(Cs,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Be==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&Be==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",se()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function Is(e){se(),Be=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=Ge();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{U(`/projects/${i}/${s}`),se()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=Ge();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{U(`/projects/${i}`),se()})}}}async function Cs(e,t){if(t.value==""){se();return}const n=await si(t.value);Is(n)}let Be=!1;function se(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Be=!1}function ws(e){return new Promise((t,n)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>t(o),o.onerror=i=>n(i),o.src=e})}function Ls(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height).data}function Ps(e,t,n){return`#${(1<<24|e<<16|t<<8|n).toString(16).slice(1)}`}function Ss(e,t,n){e/=255,t/=255,n/=255;const o=Math.max(e,t,n),i=Math.min(e,t,n);let s,a,r=(o+i)/2;if(o===i)s=a=0;else{const c=o-i;switch(a=r>.5?c/(2-o-i):c/(o+i),o){case e:s=(t-n)/c+(t<n?6:0);break;case t:s=(n-e)/c+2;break;case n:s=(e-t)/c+4;break}s/=6}return[s*360,a*100,r*100]}function Os(e,t){const n=[],o=new Array(t);for(let s=0;s<t;s++)n.push(e[Math.floor(Math.random()*e.length)]);let i=!0;for(;i;){i=!1;for(let s=0;s<t;s++)o[s]=[];for(const s of e){let a=1/0,r=-1;for(let c=0;c<t;c++){const d=Bs(s,n[c]);d<a&&(a=d,r=c)}o[r].push(s)}for(let s=0;s<t;s++){const a=Ms(o[s]);Ds(a,n[s])||(n[s]=a,i=!0)}}return n}function Bs(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function Ms(e){const t=e.reduce((n,o)=>(n[0]+=o[0],n[1]+=o[1],n[2]+=o[2],n),[0,0,0]);return[t[0]/e.length,t[1]/e.length,t[2]/e.length]}function Ds(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function xs(e){return e.filter(([t,n,o])=>{const[i,s,a]=Ss(t,n,o);return a>10&&a<93})}function As(e,t=5){const n=[];for(let a=0;a<e.length;a+=4){const r=e[a],c=e[a+1],d=e[a+2];n.push([r,c,d])}const i=xs(n);return Os(i,t).map(([a,r,c])=>Ps(a,r,c))}async function Rs(e,t=5){e=e.slice(0,-1)+"2";try{const n=await ws(e),o=Ls(n);return As(o,t)}catch(n){console.error("Error loading image:",n)}}function Ns(e,t){console.log(e,t);const n=Ge(),o=document.createElement("canvas");o.id=n,e.appendChild(o);const i=document.getElementById(n),s=i.getContext("webgl");if(!s){console.error("WebGL not supported");return}i.width=window.innerWidth,i.height=window.innerHeight,s.viewport(0,0,s.canvas.width,s.canvas.height);const a=`
attribute vec4 a_position;
void main() {
    gl_Position = a_position;
}
`,r=`
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_colors[5];

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 0.05;

    float blob1 = noise(st * 3.0 + vec2(t, t));
    float blob2 = noise(st * 3.0 + vec2(-t, t));
    float blob3 = noise(st * 3.0 + vec2(t, -t));
    float blob4 = noise(st * 3.0 + vec2(-t, -t));
    float blob5 = noise(st * 3.0 + vec2(t, 0.0));

    float blobs = (blob1 + blob2 + blob3 + blob4 + blob5) / 5.0;

    vec3 color = mix(u_colors[0], u_colors[1], abs(sin(t)));
    color = mix(color, u_colors[2], abs(cos(t)));
    color = mix(color, u_colors[3], abs(sin(t * 0.5)));
    color = mix(color, u_colors[4], blobs);

    gl_FragColor = vec4(color, 1.0);
}
`;function c(_,C,L){const E=_.createShader(C);return _.shaderSource(E,L),_.compileShader(E),_.getShaderParameter(E,_.COMPILE_STATUS)?E:(console.error("Error compiling shader:",_.getShaderInfoLog(E)),_.deleteShader(E),null)}const d=c(s,s.VERTEX_SHADER,a),u=c(s,s.FRAGMENT_SHADER,r),l=s.createProgram();s.attachShader(l,d),s.attachShader(l,u),s.linkProgram(l),s.getProgramParameter(l,s.LINK_STATUS)||console.error("Error linking program:",s.getProgramInfoLog(l));const O=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,O);const p=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];s.bufferData(s.ARRAY_BUFFER,new Float32Array(p),s.STATIC_DRAW);const v=s.getAttribLocation(l,"a_position");s.enableVertexAttribArray(v),s.vertexAttribPointer(v,2,s.FLOAT,!1,0,0),window.addEventListener("resize",()=>b(i)),b(i);const f=[];for(let _=0;_<5;_++)f.push(s.getUniformLocation(l,`u_colors[${_}]`));requestAnimationFrame(h);function h(_){_*=.001,b(i),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(l);const C=s.getUniformLocation(l,"u_resolution");s.uniform2f(C,s.canvas.width,s.canvas.height);const L=s.getUniformLocation(l,"u_time");s.uniform1f(L,_);for(let E=0;E<5;E++){const w=js(t[E]);s.uniform3fv(f[E],w)}s.drawArrays(s.TRIANGLES,0,6),requestAnimationFrame(h)}function b(_){const C=_.clientWidth,L=_.clientHeight;(_.width!==C||_.height!==L)&&(_.width=C,_.height=L,s.viewport(0,0,s.canvas.width,s.canvas.height))}}function js(e){e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n/255,o/255,i/255]}const Us=`<div class="MUSICENJOYMODE-container">
    <div class="background" id="MUSICENJOYMODEbackground"></div>
    <div class="topMenuBar">
        <button tabindex="0" id="MUSICENJOYMODEexitButton">
            <img src="{icons_back}" height="16" width="16">
        </button>
    </div>
    <div class="contentArea">
        <div class="image">
            <div class="image-container">
                <img class="a" src="" id="MUSICENJOYMODEcoverImage1">
                <img src="" id="MUSICENJOYMODEcoverImage2">
            </div>
        </div>
        <div class="controls">
            <!--
            <div class="squares-container" id="MUSICENJOYMODEsquares">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        -->
        </div>
    </div>
</div>`;function ks(){const e=document.getElementById("musicEnjoyEnvironment");e.innerHTML=W(Us),document.getElementById("MUSICENJOYMODEexitButton").addEventListener("click",Hs),document.getElementById("MusicEnjoyOpenButton").addEventListener("click",Gs)}async function Js(){const e=await Rs(ce),t=document.getElementById("MUSICENJOYMODEbackground");Ns(t,e)}async function Gs(){const e=document.getElementById("musicEnjoyEnvironment"),t=document.getElementById("MUSICENJOYMODEcoverImage1"),n=document.getElementById("MUSICENJOYMODEcoverImage2");e.style.display="block",t.src=ce,n.src=ce,Js()}function Hs(){const e=document.getElementById("musicEnjoyEnvironment");e.style.display="none"}const x="/apis",B="/media";async function en(){ss(),io(),so(),Qi(),ps(),Ts(),bs(),So(),Ni(),ti(),Co(),ks()}window.hasCodeRun||(Ko(),window.hasCodeRun=!0);
