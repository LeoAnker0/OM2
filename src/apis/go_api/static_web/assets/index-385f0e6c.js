(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const bt="/assets/menu_options_button-a1d7bbe3.svg",an=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,rn=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,cn=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,dn="/assets/volume_null-e39cf06f.svg",ln="/assets/recently_added-a0a983c6.svg",un="/assets/volume_3-c8ab0a75.svg",mn="/assets/orange_music_text_logo_black-12e7386c.svg",pn="/assets/volume_2-cfdac9da.svg",gn="/assets/browse_2-85030bba.svg",_n="/assets/volume_1-27e93416.svg",fn="/assets/orange_music_logo_white-2a680ea2.svg",vn="/assets/search_icon-4f5e4381.svg",En="/assets/orange_music_text_logo_black-91f9e706.png",bn="/assets/up_next_queue_button-14fedba2.svg",yn="/assets/orange_music_logo_yellow-a109ff64.svg",hn="/assets/playlist-c6e9024f.svg",Tn="/assets/loop_button-aef56865.svg",In="/assets/help_icon-867fec9d.svg",Cn="/assets/play_button-b1e2d3a4.svg",wn="/assets/browse-14744f27.svg",Ln="/assets/orange_music_text_logo_white-7f0ba909.svg",Pn="/assets/back_button-8128cade.svg",Sn="/assets/Albums-2e81dc74.svg",On="/assets/songs-016b7188.svg",Bn="/assets/orange_music_logo_black-4d7e4591.svg",Dn="/assets/your_uploaded_songs-06535705.svg",Mn="/assets/artist-ab677d43.svg",xn="/assets/shuffle_button-c2f06bc4.svg",Rn="/assets/orange_music_text_logo_white-4907051e.png",An="/assets/listen_now-c7438154.svg",Nn="/assets/derpy-21c20ae5.svg",Un="/assets/next_button-9a850710.svg",jn="/assets/recently_added-7ff28139.svg",kn="/assets/play_button-5eeedbe6.svg",Jn="/assets/browse-e8be8609.svg",Gn="/assets/albums-681507b8.svg",Hn="/assets/listen_now.2-bfa293ac.svg",$n="/assets/your_uploads-02e5c93c.svg",qn="/assets/play_button.2-fc90fac7.svg",Yn="/assets/listen_now-fb02ffce.svg",Fn="/assets/browse.2-15b501dd.svg",Qn="/assets/place_holder_image-d4006a96.svg",Vn="/assets/icons_MOGitems_add-19e679f7.svg",zn="/assets/back-9279721d.svg",Kn="/assets/forwards-605bd405.svg",Wn="/assets/icons_close-57e87944.svg",Xn="/assets/icons_pause-8012f8cc.svg",Zn="/assets/icons_loop-32d1576c.svg",eo="/assets/icons_loop_song-87f53dc7.svg",to="/assets/icons_play-a5074c5b.svg",no="/assets/icons_settings-793063fb.svg",oo="/assets/love-07ac5006.svg",io="/assets/upload-3bad9145.svg",P={icons_volumeNull:dn,icons_recentlyAdded:ln,icons_volume3:un,icons_orangeMusicTextLogoBlack:mn,icons_volume2:pn,icons_browse2:gn,icons_volume1:_n,icons_orangeMusicLogoWhite:fn,icons_searchIcon:vn,icons_orangeMusicTextLogoBlackPng:En,icons_queueButton:bn,icons_orangeMusicLogoYellow:yn,icons_playlist:hn,icons_loopButton:Tn,icons_helpIcon:In,icons_playButton:Cn,icons_browse:wn,icons_menuOptionsButton:bt,icons_orangeMusicTextLogoWhite:Ln,icons_backButton:Pn,icons_Albums:Sn,icons_songs:On,icons_orangeMusicLogoBlack:Bn,icons_yourUploadedSongs:Dn,icons_artist:Mn,icons_shuffleButton:xn,icons_orangeMusicTextLogoWhitePng:Rn,icons_listenNow:An,icons_derpy:Nn,icons_nextButton:Un,icons_recentlyAddedV2:jn,icons_playButtonV2:kn,icons_browseV2:Jn,icons_albumsV2:Gn,icons_listenNow2V2:Hn,icons_yourUploads:$n,icons_playButton2:qn,icons_listenNowV2:Yn,icons_browse2V2:Fn,v3_placeholder:Qn,icons_MOGitems_add:Vn,icons_back:zn,icons_forwards:Kn,icons_close:Wn,icons_pause:Xn,icons_loop:Zn,icons_loop_song:eo,icons_play:to,icons_settings:no,current_year:new Date().getFullYear(),icons_love:oo,icons_upload:io};function so(){let e="topleftContentArea",t=an;for(const[n,o]of Object.entries(P)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ao(){let e="toprightContentArea",t=rn;for(const[n,o]of Object.entries(P)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ro(){let e="MAINcontentContainer",t=cn;for(const[n,o]of Object.entries(P)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const co=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function M(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function yt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function ke(e){for(const[t,n]of Object.entries(P)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function ht(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function lo(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function ze(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function uo(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Tt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function oe(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function mo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function It(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function po(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function Ke(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let ye;const b=new Map;function go(e,t,n){b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!b.has(e))return;const r=Math.min(a/500,1);if(!b.has(e))return;const c=Ct(b.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||b.get(e).isChanging)&&(b.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(ye),ye=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},500),b.get(e).isChanging=!0;const i=Date.now();b.get(e).animationFrameId=requestAnimationFrame(o)}function _o(e,t,n,o,i){const s=i||2500;b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!b.has(e))return;const u=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!b.has(e))return;let m;o==="hardNewToOld"&&u<1?m=n:m=Ct(b.get(e).originalColor,Math.min(u,1),n),e.style.backgroundColor=m,u<1||b.get(e).isChanging?b.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",b.delete(e)),u==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(ye),ye=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},s),b.get(e).isChanging=!0;const r=Date.now();b.get(e).animationFrameId=requestAnimationFrame(a)}function fo(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function Ct(e,t,n){return vo(n,e,t)}function vo(e,t,n){const o=function(p){return p=p.toString(16),p.length===1?"0"+p:p},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),m=Math.round(s*(1-n)+c*n),h=Math.round(a*(1-n)+d*n);return"#"+o(u)+o(m)+o(h)}function wt(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Eo(o,i,s),r=Ue(a[0]),c=Ue(a[1]),d=Ue(a[2]);return bo({r,g:c,b:d})}function Eo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Ue(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function bo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const yo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,ho=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,To=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,Io=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,Co=`
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
`;let Pe=!1;function wo(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=Io,n.addEventListener("click",function(o){Pe==!1?Po(o):he()}),t.innerHTML=Co}function Lo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function We(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Pe==!0&&k.length>0||he()}function ge(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(k.length>0){t.innerHTML=k[0].file.name,n.innerHTML=oe(k[0].file.size*1.75),So(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=k.length-1;o>=1;o--){const a=k[o].file.name,r=oe(k[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let Xe;function Po(e){Pe=!0,Xe=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",he),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const m=Xe.getBoundingClientRect();t=m.left+window.scrollX,n=m.top+window.scrollY;let h=t+"px",p=n+"px";o.style.left=h,o.style.top=p}const r=o.offsetWidth,c=o.offsetHeight,d=jt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(m){(m.key==="Escape"||m.keyCode===27)&&(document.removeEventListener("keydown",u),he())}}function he(){Pe=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function So(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Ze=1500;let Lt=0,Je=[],je;function O(e,t){const o=new Date().getTime();Je.push({notificationText:e,notificationType:t,time:o}),Pt()}function Pt(){const t=new Date().getTime(),n=Je.at(Lt);Je.length>1?t-je>Ze?(et(n.notificationText,n.notificationType),je=t):setTimeout(Pt,Ze):(et(n.notificationText,n.notificationType),je=t)}function et(e,t){const n=document.getElementById("noticationContainer");let o;Lt+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Oo=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`;let Se;async function Bo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Oe("profile_picture"),n=`${C}/${t}/3`;Se=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Do)}catch(t){console.error("Error initializing account image:",t)}}function Do(e){e.stopPropagation(),Mo(e)}function Mo(e){q([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function xo(){await gi(),location.reload()}function Ro(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${C}/${Se}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",Ao)}function Ao(e){e.stopPropagation(),No(e)}function No(e){q([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Uo=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
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
</button>`,St=30;let ie=0;async function ko(){try{const e=document.getElementById("MAINcontentPages");Jo();const t=await Rt(St,ie);ie+=t.length,Go(t),M()&&Ro()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Ot(){ie=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Bt),e.innerHTML=""}function Jo(){let e="MAINcontentPages",t=Oo;for(const[n,o]of Object.entries(P)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Go(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Uo;for(const[a,r]of Object.entries(P)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,tt(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Bt(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],u=r[d].project_id;Dt(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await Rt(St,ie);ie+=d.length,d.length>0&&tt(d)}})}function tt(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,u=uo(d);let m=jo;for(const[h,p]of Object.entries(P)){const E=new RegExp(`\\{${h}\\}`,"g");m=m.replace(E,p)}for(let h=0;h<i.length;h++){const p=i[h].toString(),E=new RegExp(`\\{${p}\\}`,"g");let _="";p==="MOG_image"?_=`${C}/${a}/3`:p==="MOG_text1"?_=r:p==="MOG_text2"?_=c:p==="MOG_checkedDate"?_=u:p==="MOGI_placeholder_itemID"&&(_=s),m=m.replace(E,_)}t.innerHTML+=m}}async function Bt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Be(i),a=JSON.parse(s);a.ProjectID=i,qt(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Dt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;N(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Ho()}function Dt(e,t){e.stopPropagation(),q([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Ho(){N("/new-project/")}let nt;function Ve(e){return new Promise((t,n)=>{nt=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){ot(),t("delete")}function d(){nt.focus(),ot(),t("cancel")}i.addEventListener("click",u=>{const m=u.target;m===a?c():(m===r||m===i)&&d()}),o==="keyboard"&&!M()?r.focus():o=="mouse"&&!M()&&(G(),r.focus(),r.blur())})}function ot(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const $o=`<div class="ADMINusersTableInfoRow">
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
<br><br>`,it=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Mt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){Yo(a,r,c)}}function Yo(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),q(o,e,n)}const st=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,_e=`<h1>General</h1>
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
<br><br>`,at=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,Fo=`<div class="settings_container">
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
</div>`;let Te="general",F;async function Qo(){const e=await Oe("admin");e=="true"&&!M()?(Te="admin",F=[{name:"general",markup:_e,button_id:"settings_button_general",function:fe},{name:"user",markup:at,button_id:"settings_button_user",function:ve},{name:"admin",markup:it,button_id:"settings_button_admin",function:ct}]):e=="false"&&!M()?F=[{name:"general",markup:_e,button_id:"settings_button_general",function:fe},{name:"user",markup:at,button_id:"settings_button_user",function:ve}]:M()&&e=="true"?(Te="admin",F=[{name:"general",markup:_e,button_id:"settings_button_general",function:fe},{name:"user",markup:st,button_id:"settings_button_user",function:ve},{name:"admin",markup:it,button_id:"settings_button_admin",function:ct}]):F=[{name:"general",markup:_e,button_id:"settings_button_general",function:fe},{name:"user",markup:st,button_id:"settings_button_user",function:ve}]}async function Vo(){await Qo();const e=document.getElementById("MAINcontentPages");let t=Fo;for(const[i,s]of Object.entries(P)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");rt(Te);for(var o=F.length-1;o>=0;o--){const i=F[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=F.find(u=>u.button_id===r).name;rt(d)})}n.addEventListener("click",function(){N("/")})}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function rt(e){Te=e;const t=["users_img"],n=document.getElementById("view_container"),o=F.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(P)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${C}/${Se}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function fe(){}function ve(){Mt("user-id","settings_views_user_pfp_img","update_user_pfp")}let te=[];async function ct(){if(await Oe("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=qo;for(const[a,r]of Object.entries(P)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${C}/${Se}/4/`),o=o.replace(c,d)}n.innerHTML=o,He(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")O("Error Updating Column: empty inputs","error");else for(var d=te.length-1;d>=0;d--){const u=te[d];pi(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){O("Error Deleting User: user UUID is empty","error");return}let c=null;for(let m=0;m<A.length;m++)A[m].uuid==r&&(c=A[m].username);if(c===null){O("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await Ve(d);u==="cancel"||u==="delete"&&((await li(r)).success=="success"?O("Successfully deleted the user","success"):O("Failed to delete the user","error"),He())})}let A;async function He(){const e=await mi();A=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<A.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=A[n].username,s=A[n].uuid,a=A[n].verified,r=A[n].email;let c=A[n].storage_allowance;c=oe(c);const d=A[n].admin,u=n;let m=A[n].storage_used;m=oe(m);let h=$o,p=A[n].profile_picture;p=`${C}/${p}/3`;for(let E=0;E<o.length;E++){const _=o[E].toString(),y=new RegExp(`\\{${_}\\}`,"g");let v="";_==="Username"?v=i:_==="Email"?v=r:_==="UUID"?v=s:_==="Verified"?v=a:_==="Space_Used"?v=m:_==="Storage_Allowance"?v=c:_==="profile_picture_url"?v=p:_==="checkbox_number"?v=u:_==="Admin"&&(v=d),h=h.replace(y,v)}t.innerHTML+=h}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&zo()})}function zo(){te=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=A[i.id].uuid;te.push(a)}),o.innerHTML=`Selected Users: ${te.length}`}const Ko=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Wo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Xo(){let e="MAINcontentPages",t=Wo;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Zo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){N("/")})}async function Zo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${B}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)O(`There was an error, ${o}`,"error");else{const i=o;O("Sign up Successful, Log in now","success"),N("/")}}catch{O("There was an error, try again","error")}}let ee=!1,Ie=!1,$e=!1,Ce=!1;async function ei(){await oi()?(tn(),Ce=!0):Ie||(xt(),Ie=!0)}async function ti(){Ie=!1,ee=!1,$e=!1,xt(),Ie=!0}function xt(){ii();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${B}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{dt(),Xo()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),ee)return!1;ee=!0;const s=n.value,a=o.value;try{await ni(s,a)?(Ce=!0,O("Login Successful","success"),tn(),dt()):(Ce=!1,O("Error Logging In","error")),ee=!1}catch(r){console.error("Error:",r),ee=!1}return!1})}async function ni(e,t){try{return(await(await fetch(`${B}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?O("The server is down","error"):console.error(n),!1}}async function oi(){try{const e=await fetch(`${B}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&O("The server is down","error")}}function ii(){let e="MAINcontentPages",t=Ko;document.getElementById(e).innerHTML+=t}function dt(){if($e===!0)return;$e=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function si(){const e=await Oe("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;N(r),us(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=l,d=f,u=Es();u.current_path=r,u.current_queue=c,u.current_index=d;const m=i(u);m!==o&&(ci("last_state",u),o=m,n.set("playback_states",m))}function a(){N(currentPath)}}function ai(){Ce==!1?(Ge(),ti()):(At(),Ge(),ko())}function lt(e,t){Ot(),Ge(),t!==null?pt(e,t):pt(e)}function ut(){Ot(),At(),Vo()}const mt={"/":ai,"/new-project/":Ee,"/new-project":Ee,"/new/":Ee,"/new":Ee,"/projects/:projectID":lt,"/projects/:projectID/:songURL":lt,"/settings/":ut,"/settings":ut};function ri(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){N("/")}}function N(e){const t=Object.keys(mt);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=mt[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}ri()}async function ci(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${B}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function di(e){try{const t={searchQuery:e};return await(await fetch(`${B}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function li(e){try{const t={uuid:e};return await(await fetch(`${B}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ui(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${B}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&O("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Oe(e){try{return(await(await fetch(`${B}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function se(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${B}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Be(e){try{return(await(await fetch(`${B}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Rt(e,t){try{const i=(await(await fetch(`${B}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function Ee(){try{const o=`/projects/${(await(await fetch(`${B}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;N(o)}catch(e){console.error("Error:",e)}}async function mi(){try{return(await(await fetch(`${B}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function pi(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${B}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){O("Table Updated Successfully","success"),He();return}else{O(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){O(`Error Updating Column ${t}: ${o}`,"error");return}}async function gi(){try{const t=await(await fetch(`${B}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const _i=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function qe(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=_i}}const fi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,vi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Ei=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,k=[];let be=!1,bi=!0,g,De=!1;async function pt(e,t){let n;De=!0,yt()==!0?n={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:n={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Ti(n),qe("","blank"),sessionStorage.setItem("description","."),gt(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{N("/")});const i=await Be(e);if(i==""){console.error("Unable to load project details");return}const s=JSON.parse(i);s.ProjectID=e,g=s,a(),hi();function a(){if(Ye(),sessionStorage.setItem("description",g.Description),gt(),Ii(),wi(),Li(),Pi(),Fe(),Ai(),Ut(g.ProjectName),Mt(g.ProjectID,"PROJECTviewDisplayImage","update_project_image"),xi(),qe(g,"full"),t!=null){for(var r=g.ProjectJSON.length-1;r>=0;r--)if(g.ProjectJSON[r].URL==t){const d=`${g.ProjectJSON[r].SongSequence}-${g.ProjectJSON[r].Version}`;yi(d)}}}}function At(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",De=!1}async function Me(){if(!De)return;const e=g.ProjectID,t=await Be(e);if(t=="")return;const n=structuredClone(g),o=JSON.parse(t);if(o.ProjectID=e,g=o,n.Description!==g.Description&&console.log("there has been a change in the Description"),n.PictureURL!==g.PictureURL){console.log("there has been a change in the PictureURL");const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${C}/${g.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==g.ProjectContributors&&console.log("there has been a change in the ProjectContributors"),n.ProjectName!==g.ProjectName&&console.log("there has been a change in the ProjectName"),n.ProjectJSON!==g.ProjectJSON)if(n.ProjectJSON.length!==g.ProjectJSON.length)Fe();else{let s=0;for(var i=g.ProjectJSON.length-1;i>=0;i--)g.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&Fe()}qe(g,"full")}function yi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=It(_o,0),o=wt("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),fo(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function Ye(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),i=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year"),s=`${C}/${g.PictureURL}/5`;e.innerText=g.ProjectName,t.innerText=g.ProjectContributors,n.src=s,o.innerText=g.ProjectName,i.innerText=`${g.ProjectContributors} | ${Tt(g.TimeCreated)}`}function hi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(Ut(s),se(g.ProjectID,"project_name",s),g.ProjectName=s,Ye())}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(se(g.ProjectID,"project_contributors",s),g.ProjectContributors=s,Ye())})}function Ti(e){let t=ke(Ei);const n={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${Tt(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${C}/${e.PictureURL}/5`]]};t=ht(t,n),document.getElementById("MAINcontentPages").innerHTML=t}function gt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Ii(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",M()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Ci(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function wi(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Li(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){_t(g)}),t.addEventListener("click",function(n){n.target===t&&_t(g)})}function _t(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),se(e.ProjectID,"description",n),o.style.display="none",Ci(),i.style.zIndex=""}async function Pi(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){qt(g)}),t.addEventListener("click",function(){ls(g)}),n.addEventListener("click",function(){ft(event)}),o.addEventListener("click",function(){ft(event)})}function ft(e){e.stopPropagation(),e.target;const t=g.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],q(n,e)}async function Si(e){const t=`Are you sure that you want to delete <em><b>${g.ProjectName}</b></em>? This action is not reversable.`;if(await Ve(t)==="delete"){await Oi(),G(),N("/");return}G()}async function Oi(e){const t=g.ProjectID;try{const o=await(await fetch(`${B}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function Fe(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=ke(fi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(g.ProjectJSON);const o=wt("--orange"),i=p=>`#${p.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(E=>parseInt(E,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let p=0;p<n.length;p++){let E=ke(vi);const _=n[p],y={itemsToReplace:[["PROJECTviewRow_img",`${C}/${g.PictureURL}/3`],["PROJECTviewRow_songTitle",`${_.SongName}`],["PROJECTviewRow_artistName",`${g.ProjectContributors}`],["PROJECTviewRow_projectName",`${oe(_.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(_.Duration/60)}:${(_.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${_.SongSequence}-${_.Version}`],["PROJECTviewRow_contentEditable",`${bi}`]]};E=ht(E,y),t.insertAdjacentHTML("beforeend",E);{const v=t.lastElementChild;v.addEventListener("dragstart",a),v.addEventListener("dragover",c),v.addEventListener("drop",d)}}function a(p){p.dataTransfer.setData("text/plain",p.target.dataset.rowId),p.dataTransfer.getData("text/plain"),s=p.srcElement,mo(p.srcElement)}const r=It(go,0);function c(p){p.preventDefault(),p.dataTransfer.dropEffect="move";const E=p.target.closest(".PROJECTview-projectTable-rowContainer");if(E!==s){const _=getComputedStyle(E).backgroundColor,y=i(_);r(E,y,o)}}function d(p){p.preventDefault();const E=p.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${E}"]`),y=p.target.closest(".PROJECTview-projectTable-rowContainer");if(y){const w=structuredClone(g),x=y.getAttribute("data-row-id");y.before(_);const U=`${E}|${x}`;setTimeout(async()=>{await se(g.ProjectID,"SongsTableChangeSongSequenceOrder",U),Me()},1);let T=[];for(var v=0;v<t.children.length;v++){if(v==0)continue;const L=t.children[v],re=L.dataset.rowId.split("-")[0];let X=w.ProjectJSON[re-1];X.SongSequence=v,T.push(X),L.style.backgroundColor="",L.dataset.rowId=`${v}-1`}g.ProjectJSON=T}}t.addEventListener("click",function(p){const E=p.target;if(p.stopPropagation(),E.tagName==="BUTTON"){const _=E.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),Bi(p))}});const u=t.querySelectorAll("[contenteditable]"),m=[],h=p=>{const _=p.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),y=p.target.textContent,v=m.find(T=>T.dataRowIDField===_);if((v?v.currentText:"Row ID not found")==y)return;for(var x=m.length-1;x>=0;x--)m[x].dataRowIDField===_&&(m[x].currentText=y);const U=`${_}-${y}`;se(g.ProjectID,"project_song_title",U)};u.forEach(p=>{p.addEventListener("blur",h),m.push({dataRowIDField:p.parentElement.parentElement.getAttribute("data-row-id"),currentText:p.innerText})})}function Bi(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],q(i,e)}function Di(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(g);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,ps(i,o)}async function Mi(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`,n=await Ve(t);n==="cancel"||(n==="delete"?(await ui(g.ProjectID,e.songID),G(),Me()):console.error("a statement was returned that isn't valid"))}function xi(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){Ri(o)}}async function Nt(){const e=k[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;be=!0,Lo(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;ge(a),a===100&&ge(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){O("Storage limit reached","error");for(var a=k.length-1;a>=0;a--)k.shift();be=!1,We(),ge(0)}be=!1,k.shift(),We(),ge(0),k.length>0&&await Nt(),g.ProjectID==n&&De==!0&&Me()},i.onerror=function(){O("Upload Failed","error")},i.open("POST",`${B}/files/upload_audio/${n}`,!0),i.send(o)}async function Ri(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:g.ProjectID,file:n};k.push(o),be||await Nt()}}function Ut(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Ai(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&M()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!M()||!r.isIntersecting&&!M()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&M()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Ni=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Ui(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&O("Storage limit reached","error"),n!=="update_user_pfp"?Hi():($i(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${B}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function ji(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Ui(o,t,n)}const ki=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let we,Y=!1;function q(e,t,n){n===void 0?Gi(e,t):n!==void 0&&n==="update_project_image"?vt(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?vt(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Ji():console.log("invalid menu display inputs")}function Ji(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=To;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;M()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[D,j]of Object.entries(P)){const J=new RegExp(`\\{${D}\\}`,"g");i=i.replace(J,j)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),h=s.duration,E=s.currentTime/h*100,_=document.getElementById("LCDMB_seek_input"),y=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const v=document.getElementById("LCDMB_back"),w=document.getElementById("LCDMB_play"),x=document.getElementById("LCDMB_play_icon"),U=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{L(),Y===!0&&H()}),L(),R(),y.style.width=`${E}%`,s.addEventListener("timeupdate",()=>{const D=s.duration,J=s.currentTime/D*100;y.style.width=`${J}%`}),_.addEventListener("input",function(){const D=s.duration,j=_.value;s.currentTime=D*(j/100)}),v.addEventListener("click",()=>{Ft(),L(),Y===!0&&H()}),w.addEventListener("click",()=>{Re(),L(),R()}),U.addEventListener("click",()=>{Yt(),L(),Y===!0&&H()}),T.addEventListener("click",()=>{Y===!1?(re(),Y=!0):(X(),Y=!1)}),Y===!0?re():X(),o.addEventListener("touchstart",ce,!1),o.addEventListener("touchmove",de,!1),o.addEventListener("touchend",le,!1);function L(){m.src=Gt,d.innerText=Ht,u.innerText=$t}function R(){s.paused?x.src=P.icons_playButtonV2:x.src=P.icons_derpy}function H(){const D=document.getElementById("LCD_mobile_queue_content_container");D.innerHTML="";for(let j=f+1;j<l.length;j++){const J=l[j],ue=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Z=J.img,nn=J.song_name,on=J.project_contributors;let Ae=ho;for(let Ne=0;Ne<ue.length;Ne++){const me=ue[Ne].toString(),sn=new RegExp(`\\{${me}\\}`,"g");let pe="";me==="queue_item_img"?pe=`${C}/${Z}/3`:me==="queue_item_song_name"?pe=nn:me==="queue_item_song_artist"&&(pe=on),Ae=Ae.replace(sn,pe)}D.innerHTML+=Ae}}function re(){function D(j){j.forEach(J=>{document.querySelectorAll("."+J).forEach(Z=>{Z.classList.add("queue_visible")})})}D(a),o.removeEventListener("touchstart",ce),o.removeEventListener("touchmove",de),o.removeEventListener("touchend",le),H()}function X(){function D(j){j.forEach(J=>{document.querySelectorAll("."+J).forEach(Z=>{Z.classList.remove("queue_visible")})})}D(a),o.addEventListener("touchstart",ce,!1),o.addEventListener("touchmove",de,!1),o.addEventListener("touchend",le,!1)}function ce(D){Y===!1&&(r=D.touches[0].clientY)}function de(D){D.preventDefault()}function le(D){c=D.changedTouches[0].clientY,c-r>70&&(G(),o.removeEventListener("touchstart",ce),o.removeEventListener("touchmove",de),o.removeEventListener("touchend",le))}}function Gi(e,t){we=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");M()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=ki,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",kt),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const w=we.getBoundingClientRect();n=w.left+window.scrollX,o=w.top+window.scrollY;let x=n+"px",U=o+"px";r.style.left=x,r.style.top=U}for(let w=0;w<e.length;w++)qi(e[w]);const h=r.children[0],p=r.offsetWidth,E=r.offsetHeight,_=jt("MENUmodalBody"),y=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!M()?h.focus():u=="mouse"&&!M()&&(h.focus(),h.blur()),document.addEventListener("keydown",v),_.xOverflow==!0&&(c=n-p+"px",r.style.left=c),_.yOverflow==!0&&(d=o-E+"px",r.style.top=d);for(let w=0;w<y.length;w++){const x=y[w];x.setAttribute("data-menu-item-id",w),x.addEventListener("click",function(U){U.stopPropagation();const L=U.target.getAttribute("data-menu-item-id"),R=e[L].function,H=e[L].optionalParams;if(R=="TEST")console.log("the button worked",H);else if(R!="None"){Yi[R](H);return}else return})}function v(w){(w.key==="Escape"||w.keyCode===27)&&(document.removeEventListener("keydown",v),G())}}function vt(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";M()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=yo,r.style.display="block",r.addEventListener("click",kt);const u=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),h=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),E=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let y,v;function w(T,L){return function(){const R=this,H=arguments;clearTimeout(v),v=setTimeout(()=>{T.apply(R,H)},L)}}function x(T,L,R){w(ji,100)(T,L,R)}function U(T){if(y){const L=URL.createObjectURL(y),R=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=L,E.style.visibility="visible",_.style.outline="3px solid var(--primary)",E.addEventListener("click",()=>{x(y,T.project_id,T.MenuType),R.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",T=>{T.preventDefault()}),m.addEventListener("drop",T=>{T.preventDefault(),y=T.dataTransfer.files[0],U(e)}),h.addEventListener("click",()=>{const T=document.createElement("input");T.type="file",T.accept="image/*",T.addEventListener("change",L=>{y=L.target.files[0],U(e)}),T.click()})}function Hi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G(),Me()}function $i(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G()}function jt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let u=!1,m=!1;return c>n&&(u=!0),d>o&&(m=!0),{xOverflow:u,yOverflow:m}}function qi(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Ni.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(P)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function kt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function G(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),we&&we.focus()}const Yi={PROJECT_VIEW_delete_project(e){Si(),G()},PLAYBACK_add_songs_to_queue(e){ms(e),G()},SIGN_OUT_USER(e){G(),xo()},OPEN_SETTINGS_PAGE(e){G(),N("/settings/")},PROJECT_VIEW_delete_song(e){Mi(e)},PROJECT_VIEW_add_song_to_queue(e){Di(e)}};let Q="hidden";function Fi(){ro();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Qe(Q),e.addEventListener("click",Qi),t.addEventListener("click",Vi),$()}function Qi(){if(Q==="hidden"){Q="visible",Qe(Q);return}if(Q==="visible"){Q="hidden",Qe(Q);return}}function Qe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",yt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function $(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<l.length;t++){l[t].id=t;const n=l[t],o=ts(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",es),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Xi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Zi(r)}),i.addEventListener("dragstart",zi),i.addEventListener("dragover",Ki),i.addEventListener("drop",Wi),e.appendChild(i)}}function Vi(){const e=f+1;e>=0&&e<l.length?l.splice(e):l.length=0,$()}function zi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ki(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Wi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=l.find(r=>r.id===parseInt(t)),i=l.find(r=>r.id===parseInt(n.dataset.songId)),s=l.indexOf(o),a=l.indexOf(i);s!==-1&&a!==-1&&(l.splice(s,1),l.splice(a,0,o),I.splice(s,1),I.splice(a,0,o),$())}function Xi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=l.findIndex(i=>i.id===n);o!==-1&&(l.splice(o,1),I.splice(o,1)),$()}function Zi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];q(o,e)}function es(e){}function ts(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=co;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let m="";d==="QUEUE_item_image"?m=`${C}/${n}/3`:d==="QUEUE_item_title"?m=o:d==="QUEUE_item_artist"?m=i:d==="icons_menuOptionsButton"?m=bt:d==="QUEUE_item_timeIndicator"&&(m=s),a=a.replace(u,m)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const ns=`<div class="LCDbody">
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
</div>`;function os(){ss(),Jt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){as(t)}),rs(),M()&&document.getElementById("LCDbody").addEventListener("click",is)}function is(e){e.stopPropagation(),q({param:"cheese"},e,"lcd_mobile_body")}function ss(){let e="LCDbody",t=ns;for(const[o,i]of Object.entries(P)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Jt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=s(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function as(e){e.stopPropagation(),e.target,q([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function rs(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",cs)})}function cs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),fs(n)}function ds(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let l=[],I=[],f=0,Gt="",Ht="",$t="";document.getElementById("audio");document.getElementById("PLAYERsource");let S="off",V="off",ae="paused";function qt(e){l=[],f=0,l=xe(e),l.length>0&&(ae="playing",z())}function ls(e){l=[],f=0,l=xe(e),l.length>0&&(V="off",Qt(),ae="playing",z())}function xe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function us(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;l=t,f=n,Is(o),l!==void 0&&l.length>0&&bs(i)}async function ms(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Be(t),i=JSON.parse(o);i.ProjectID=t;const s=xe(i);if(n==="later")l=l.concat(s),I=I.concat(s);else if(n==="next"){let a=l.slice(0,f+1),r=l.slice(f+1);l=a,l=l.concat(s),l=l.concat(r),a=I.slice(0,f+1),r=I.slice(f+1),I=a,I=I.concat(s),I=I.concat(r)}$()}async function ps(e,t){const n=xe(e);if(t==="later")l=l.concat(n),I=I.concat(n);else if(t==="next"){let o=l.slice(0,f+1),i=l.slice(f+1);l=o,l=l.concat(n),l=l.concat(i),o=I.slice(0,f+1),i=I.slice(f+1),I=o,I=I.concat(n),I=I.concat(i)}$()}function Re(){gs()}function gs(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(W("playing"),ae="playing",e.play().then(n=>Kt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(ae="paused",W("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){Re()});navigator.mediaSession.setActionHandler("pause",function(){Re()});function Yt(){Xt()}function Ft(){Zt()}function _s(){document.getElementById("audio").addEventListener("ended",hs)}function fs(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function vs(){Ts()}function Es(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:S,PLAYBACK_shuffle_state:V,progress:t}}function Qt(){if(V==="off"){V="on",Et(V);const t=f+1;I=[...l],l.slice(0,f);const n=l.slice(t);lo(n);const o=n.length;l.splice(f,o,...n),$()}else{V="off",Et(V);const t=[...I],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];l=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(f=e);$()}}function z(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${C}/${l[f].url}/3`,e.load(),ae==="playing"?(e.play().then(o=>Kt()).catch(o=>console.log(o)),W("playing")):W("paused"),zt(),Vt()}function bs(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${C}/${l[f].url}/3`,t.load(),t.currentTime=e,W("paused"),zt(),Vt()}function Vt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${ze(s)}"`,c=`"${ze(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;ds(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,Wt()})}function zt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=l[f].song_name,t.innerHTML=l[f].song_name,n.innerHTML=l[f].project_contributors,Jt(),o.src=`${C}/${l[f].img}/3`,i.src=`${C}/${l[f].img}/3`,Gt=`${C}/${l[f].img}/5`,Ht=l[f].song_name,$t=l[f].project_contributors,$()}function Kt(){let e=l[f];const t=[{src:`${C}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${C}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${C}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${C}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${C}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${C}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Wt()}function Wt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ys(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",W("paused"),l=[],I=[],f=0,t.src="http://null.com/null"}function hs(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=l.length;e.pause(),t>f+1&&(S=="off"||S=="on")?(f+=1,z()):S=="song"?z():t==f+1&&S=="on"?(f=0,z()):ys()}function Xt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),l.length>f+1&&(e.pause(),f+=1,z())}navigator.mediaSession.setActionHandler("nexttrack",function(){Xt()});function Zt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),l.length,e.currentTime>2){e.currentTime=0;return}else if(f>0){e.pause(),f-=1,z();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Zt()});function Ts(){S=="off"?(S="on",K(S)):S=="on"?(S="song",K(S)):(S="off",K(S))}function Is(e){e=="off"?(S="off",K(S)):e=="on"?(S="on",K(S)):(e="song",S="on",K(S))}function Cs(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",ws),t.addEventListener("click",Ls),n.addEventListener("click",Ps),o.addEventListener("click",Ss),i.addEventListener("click",Os)}function ws(){Qt()}function Ls(){Ft()}function Ps(){Re()}function Ss(){Yt()}function Os(){vs()}function Et(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function K(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=P.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=P.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=P.icons_loop_song;return}}function W(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=P.icons_pause;return}if(e=="paused"){t.src=P.icons_play;return}}function Bs(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){en(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Ds)})}function Ds(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;en(n)}function en(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ms(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=po(Rs,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Le==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&Le==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",ne()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function xs(e){ne(),Le=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=Ke();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{N(`/projects/${i}/${s}`),ne()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=Ke();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{N(`/projects/${i}`),ne()})}}}async function Rs(e,t){if(t.value==""){ne();return}const n=await di(t.value);xs(n)}let Le=!1;function ne(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Le=!1}const B="/apis",C="/media";async function tn(){_s(),so(),ao(),os(),Cs(),Ms(),Bs(),Bo(),Fi(),si(),wo()}window.hasCodeRun||(ei(),window.hasCodeRun=!0);
