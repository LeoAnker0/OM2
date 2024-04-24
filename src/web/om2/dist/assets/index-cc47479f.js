(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Et="/assets/menu_options_button-a1d7bbe3.svg",sn=`<div class="topleft-searchbarContainer">
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
</div>`,cn="/assets/volume_null-e39cf06f.svg",dn="/assets/recently_added-a0a983c6.svg",ln="/assets/volume_3-c8ab0a75.svg",un="/assets/orange_music_text_logo_black-12e7386c.svg",mn="/assets/volume_2-cfdac9da.svg",gn="/assets/browse_2-85030bba.svg",pn="/assets/volume_1-27e93416.svg",_n="/assets/orange_music_logo_white-2a680ea2.svg",fn="/assets/search_icon-4f5e4381.svg",vn="/assets/orange_music_text_logo_black-91f9e706.png",En="/assets/up_next_queue_button-14fedba2.svg",yn="/assets/orange_music_logo_yellow-a109ff64.svg",bn="/assets/playlist-c6e9024f.svg",hn="/assets/loop_button-aef56865.svg",Tn="/assets/help_icon-867fec9d.svg",In="/assets/play_button-b1e2d3a4.svg",Cn="/assets/browse-14744f27.svg",wn="/assets/orange_music_text_logo_white-7f0ba909.svg",Ln="/assets/back_button-8128cade.svg",Pn="/assets/Albums-2e81dc74.svg",Sn="/assets/songs-016b7188.svg",On="/assets/orange_music_logo_black-4d7e4591.svg",Bn="/assets/your_uploaded_songs-06535705.svg",Dn="/assets/artist-ab677d43.svg",Mn="/assets/shuffle_button-c2f06bc4.svg",xn="/assets/orange_music_text_logo_white-4907051e.png",Rn="/assets/listen_now-c7438154.svg",An="/assets/derpy-21c20ae5.svg",Nn="/assets/next_button-9a850710.svg",jn="/assets/recently_added-7ff28139.svg",Un="/assets/play_button-5eeedbe6.svg",kn="/assets/browse-e8be8609.svg",Jn="/assets/albums-681507b8.svg",Gn="/assets/listen_now.2-bfa293ac.svg",$n="/assets/your_uploads-02e5c93c.svg",Hn="/assets/play_button.2-fc90fac7.svg",qn="/assets/listen_now-fb02ffce.svg",Yn="/assets/browse.2-15b501dd.svg",Fn="/assets/place_holder_image-d4006a96.svg",Qn="/assets/icons_MOGitems_add-19e679f7.svg",Vn="/assets/back-9279721d.svg",zn="/assets/forwards-605bd405.svg",Kn="/assets/icons_close-57e87944.svg",Wn="/assets/icons_pause-8012f8cc.svg",Xn="/assets/icons_loop-32d1576c.svg",Zn="/assets/icons_loop_song-87f53dc7.svg",eo="/assets/icons_play-a5074c5b.svg",to="/assets/icons_settings-793063fb.svg",no="/assets/love-07ac5006.svg",oo="/assets/upload-3bad9145.svg",N={icons_volumeNull:cn,icons_recentlyAdded:dn,icons_volume3:ln,icons_orangeMusicTextLogoBlack:un,icons_volume2:mn,icons_browse2:gn,icons_volume1:pn,icons_orangeMusicLogoWhite:_n,icons_searchIcon:fn,icons_orangeMusicTextLogoBlackPng:vn,icons_queueButton:En,icons_orangeMusicLogoYellow:yn,icons_playlist:bn,icons_loopButton:hn,icons_helpIcon:Tn,icons_playButton:In,icons_browse:Cn,icons_menuOptionsButton:Et,icons_orangeMusicTextLogoWhite:wn,icons_backButton:Ln,icons_Albums:Pn,icons_songs:Sn,icons_orangeMusicLogoBlack:On,icons_yourUploadedSongs:Bn,icons_artist:Dn,icons_shuffleButton:Mn,icons_orangeMusicTextLogoWhitePng:xn,icons_listenNow:Rn,icons_derpy:An,icons_nextButton:Nn,icons_recentlyAddedV2:jn,icons_playButtonV2:Un,icons_browseV2:kn,icons_albumsV2:Jn,icons_listenNow2V2:Gn,icons_yourUploads:$n,icons_playButton2:Hn,icons_listenNowV2:qn,icons_browse2V2:Yn,v3_placeholder:Fn,icons_MOGitems_add:Qn,icons_back:Vn,icons_forwards:zn,icons_close:Kn,icons_pause:Wn,icons_loop:Xn,icons_loop_song:Zn,icons_play:eo,icons_settings:to,current_year:new Date().getFullYear(),icons_love:no,icons_upload:oo};function io(){let e="topleftContentArea",t=sn;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function so(){let e="toprightContentArea",t=an;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ao(){let e="MAINcontentContainer",t=rn;for(const[n,o]of Object.entries(N)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ro=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function A(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function yt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function X(e){for(const[t,n]of Object.entries(N)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function Fe(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function co(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function ze(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function lo(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function bt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ae(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function uo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function ht(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function mo(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function Ke(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let Ie;const b=new Map;function go(e,t,n){b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!b.has(e))return;const r=Math.min(a/500,1);if(!b.has(e))return;const c=Tt(b.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||b.get(e).isChanging)&&(b.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(Ie),Ie=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},500),b.get(e).isChanging=!0;const i=Date.now();b.get(e).animationFrameId=requestAnimationFrame(o)}function po(e,t,n,o,i){const s=i||2500;b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!b.has(e))return;const u=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!b.has(e))return;let m;o==="hardNewToOld"&&u<1?m=n:m=Tt(b.get(e).originalColor,Math.min(u,1),n),e.style.backgroundColor=m,u<1||b.get(e).isChanging?b.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",b.delete(e)),u==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(Ie),Ie=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},s),b.get(e).isChanging=!0;const r=Date.now();b.get(e).animationFrameId=requestAnimationFrame(a)}function _o(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function Tt(e,t,n){return fo(n,e,t)}function fo(e,t,n){const o=function(p){return p=p.toString(16),p.length===1?"0"+p:p},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),m=Math.round(s*(1-n)+c*n),S=Math.round(a*(1-n)+d*n);return"#"+o(u)+o(m)+o(S)}function It(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=vo(o,i,s),r=Ue(a[0]),c=Ue(a[1]),d=Ue(a[2]);return Eo({r,g:c,b:d})}function vo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Ue(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Eo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const yo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
`;let Be=!1;function Co(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=To,n.addEventListener("click",function(o){Be==!1?Lo(o):Ce()}),t.innerHTML=Io}function wo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function We(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Be==!0&&J.length>0||Ce()}function fe(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(J.length>0){t.innerHTML=J[0].file.name,n.innerHTML=ae(J[0].file.size*1.75),Po(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=J.length-1;o>=1;o--){const a=J[o].file.name,r=ae(J[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let Xe;function Lo(e){Be=!0,Xe=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",Ce),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const m=Xe.getBoundingClientRect();t=m.left+window.scrollX,n=m.top+window.scrollY;let S=t+"px",p=n+"px";o.style.left=S,o.style.top=p}const r=o.offsetWidth,c=o.offsetHeight,d=jt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(m){(m.key==="Escape"||m.keyCode===27)&&(document.removeEventListener("keydown",u),Ce())}}function Ce(){Be=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function Po(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Ze=1500;let Ct=0,Je=[],ke;function D(e,t){const o=new Date().getTime();Je.push({notificationText:e,notificationType:t,time:o}),wt()}function wt(){const t=new Date().getTime(),n=Je.at(Ct);Je.length>1?t-ke>Ze?(et(n.notificationText,n.notificationType),ke=t):setTimeout(wt,Ze):(et(n.notificationText,n.notificationType),ke=t)}function et(e,t){const n=document.getElementById("noticationContainer");let o;Ct+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}let De;async function So(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Me("profile_picture"),n=`${P}/${t}/3`;De=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Oo)}catch(t){console.error("Error initializing account image:",t)}}function Oo(e){e.stopPropagation(),Bo(e)}function Bo(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Do(){await li(),localStorage.clear(),location.reload()}function Mo(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${P}/${De}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",xo)}function xo(e){e.stopPropagation(),Ro(e)}function Ro(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Ao=`<div class="MOG-container" id="MOGcontainer">
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
</button>`,Lt=30;let re=0;async function Uo(){try{if(document.getElementById("MAINcontentPages").innerHTML+=X(Ao),localStorage.getItem("MOGitems")!=null){const t=JSON.parse(localStorage.getItem("MOGitems"));re+=t.length,tt(t)}const e=await Mt(Lt,0);JSON.stringify(e)!=localStorage.getItem("MOGitems")&&(re+=e.length,tt(e),localStorage.setItem("MOGitems",JSON.stringify(e))),A()&&Mo()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Pt(){re=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",St),e.innerHTML=""}function tt(e){const t=document.getElementById("MOGgridContainer");t.innerHTML=X(No),nt(e);const n=document.getElementById("MOGcontainer");n.addEventListener("click",function(s){St(s,e)});let o;n.addEventListener("touchstart",function(s){s.timeStamp,o=setTimeout(function(){i(s,e)},500)}),n.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(o)});function i(s,a){navigator.vibrate(1e3);const c=s.target.id.split("-")[1],d=a[c].project_id;Ot(s,d)}t.addEventListener("scroll",async function(){const s=t.scrollTop,a=t.scrollHeight,r=t.clientHeight;if(s>=a-r){const c=await Mt(Lt,re);re+=c.length,c.length>0&&nt(c)}})}function nt(e){const t=document.getElementById("MOGgridContainer"),n=e.length,o=X(jo);for(var i=0;i<=n-1;i++){const s=i,a=e[i].img,r=e[i].top,c=e[i].bottom,d=e[i].days,u=lo(d),m={itemsToReplace:[["MOG_image",`${P}/${a}/3`],["MOG_text1",`${r}`],["MOG_text2",`${c}`],["MOG_checkedDate",`${u}`],["MOGI_placeholder_itemID",`${s}`]]};t.innerHTML+=Fe(o,m)}}async function St(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Ve(i),a=JSON.parse(s);a.ProjectID=i,Ht(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Ot(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;U(`/projects/${i}`)}n.id==="MOGaddNewItem"&&U("/new-project/")}function Ot(e,t){e.stopPropagation(),Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}let ot;function Qe(e){return new Promise((t,n)=>{ot=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){it(),t("delete")}function d(){ot.focus(),it(),t("cancel")}i.addEventListener("click",u=>{const m=u.target;m===a?c():(m===r||m===i)&&d()}),o==="keyboard"&&!A()?r.focus():o=="mouse"&&!A()&&($(),r.focus(),r.blur())})}function it(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const ko=`<div class="ADMINusersTableInfoRow">
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
<br><br>`,st=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Bt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){Go(a,r,c)}}function Go(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),Y(o,e,n)}const at=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,ve=`<h1>General</h1>
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
<br><br>`,rt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,$o=`<div class="settings_container">
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
</div>`;let we="general",Q;async function Ho(){const e=await Me("admin");e=="true"&&!A()?(we="admin",Q=[{name:"general",markup:ve,button_id:"settings_button_general",function:Ee},{name:"user",markup:rt,button_id:"settings_button_user",function:ye},{name:"admin",markup:st,button_id:"settings_button_admin",function:dt}]):e=="false"&&!A()?Q=[{name:"general",markup:ve,button_id:"settings_button_general",function:Ee},{name:"user",markup:rt,button_id:"settings_button_user",function:ye}]:A()&&e=="true"?(we="admin",Q=[{name:"general",markup:ve,button_id:"settings_button_general",function:Ee},{name:"user",markup:at,button_id:"settings_button_user",function:ye},{name:"admin",markup:st,button_id:"settings_button_admin",function:dt}]):Q=[{name:"general",markup:ve,button_id:"settings_button_general",function:Ee},{name:"user",markup:at,button_id:"settings_button_user",function:ye}]}async function qo(){await Ho();const e=document.getElementById("MAINcontentPages");let t=$o;for(const[i,s]of Object.entries(N)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");ct(we);for(var o=Q.length-1;o>=0;o--){const i=Q[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=Q.find(u=>u.button_id===r).name;ct(d)})}n.addEventListener("click",function(){U("/")})}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function ct(e){we=e;const t=["users_img"],n=document.getElementById("view_container"),o=Q.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(N)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${P}/${De}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function Ee(){}function ye(){Bt("user-id","settings_views_user_pfp_img","update_user_pfp")}let oe=[];async function dt(){if(await Me("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=Jo;for(const[a,r]of Object.entries(N)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${P}/${De}/4/`),o=o.replace(c,d)}n.innerHTML=o,$e(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")D("Error Updating Column: empty inputs","error");else for(var d=oe.length-1;d>=0;d--){const u=oe[d];di(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){D("Error Deleting User: user UUID is empty","error");return}let c=null;for(let m=0;m<j.length;m++)j[m].uuid==r&&(c=j[m].username);if(c===null){D("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await Qe(d);u==="cancel"||u==="delete"&&((await ai(r)).success=="success"?D("Successfully deleted the user","success"):D("Failed to delete the user","error"),$e())})}let j;async function $e(){const e=await ci();j=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<j.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=j[n].username,s=j[n].uuid,a=j[n].verified,r=j[n].email;let c=j[n].storage_allowance;c=ae(c);const d=j[n].admin,u=n;let m=j[n].storage_used;m=ae(m);let S=ko,p=j[n].profile_picture;p=`${P}/${p}/3`;for(let v=0;v<o.length;v++){const _=o[v].toString(),y=new RegExp(`\\{${_}\\}`,"g");let E="";_==="Username"?E=i:_==="Email"?E=r:_==="UUID"?E=s:_==="Verified"?E=a:_==="Space_Used"?E=m:_==="Storage_Allowance"?E=c:_==="profile_picture_url"?E=p:_==="checkbox_number"?E=u:_==="Admin"&&(E=d),S=S.replace(y,E)}t.innerHTML+=S}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Yo()})}function Yo(){oe=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=j[i.id].uuid;oe.push(a)}),o.innerHTML=`Selected Users: ${oe.length}`}const Fo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Vo(){let e="MAINcontentPages",t=Qo;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",zo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){U("/")})}async function zo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${M}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)D(`There was an error, ${o}`,"error");else{const i=o;D("Sign up Successful, Log in now","success"),U("/")}}catch{D("There was an error, try again","error")}}let ne=!1,Le=!1,He=!1,Pe=!1;async function Ko(){await Zo()?(en(),Pe=!0):Le||(Dt(),Le=!0)}async function Wo(){Le=!1,ne=!1,He=!1,Dt(),Le=!0}function Dt(){ei();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${M}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{lt(),Vo()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),ne)return!1;ne=!0;const s=n.value,a=o.value;try{await Xo(s,a)?(Pe=!0,D("Login Successful","success"),en(),lt()):(Pe=!1,D("Error Logging In","error")),ne=!1}catch(r){console.error("Error:",r),ne=!1}return!1})}async function Xo(e,t){try{return(await(await fetch(`${M}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?D("The server is down","error"):console.error(n),!1}}async function Zo(){try{const e=await fetch(`${M}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&D("The server is down","error")}}function ei(){let e="MAINcontentPages",t=Fo;document.getElementById(e).innerHTML+=t}function lt(){if(He===!0)return;He=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function ti(){const e=await Me("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;U(r),ts(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=l,d=f,u=cs();u.current_path=r,u.current_queue=c,u.current_index=d;const m=i(u);m!==o&&(ii("last_state",u),o=m,n.set("playback_states",m))}function a(){U(currentPath)}}function ni(){Pe==!1?(Ge(),Wo()):(xt(),Ge(),Uo())}function ut(e,t){Pt(),Ge(),t!==null?pt(e,t):pt(e)}function mt(){Pt(),xt(),qo()}const gt={"/":ni,"/new-project/":be,"/new-project":be,"/new/":be,"/new":be,"/projects/:projectID":ut,"/projects/:projectID/:songURL":ut,"/settings/":mt,"/settings":mt};function oi(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){U("/")}}function U(e){const t=Object.keys(gt);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=gt[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}oi()}async function ii(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${M}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function si(e){try{const t={searchQuery:e};return await(await fetch(`${M}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ai(e){try{const t={uuid:e};return await(await fetch(`${M}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ri(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${M}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&D("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Me(e){try{return(await(await fetch(`${M}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ie(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${M}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Ve(e){try{return(await(await fetch(`${M}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Mt(e,t){try{const i=(await(await fetch(`${M}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function be(){try{const o=`/projects/${(await(await fetch(`${M}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;U(o)}catch(e){console.error("Error:",e)}}async function ci(){try{return(await(await fetch(`${M}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function di(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${M}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){D("Table Updated Successfully","success"),$e();return}else{D(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){D(`Error Updating Column ${t}: ${o}`,"error");return}}async function li(){try{const t=await(await fetch(`${M}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const ui=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function qe(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=ui}}const mi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
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
</div>`,J=[];let xe=!1,he=!1,_i=!0,g;async function pt(e,t){xe=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?g=JSON.parse(n):yt()==!0?g={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0}:g={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0},Ei(g),qe("","blank"),sessionStorage.setItem("description",g.Description),Rt(),Te(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{U("/")}),await de(),At(g.ProjectName),vi(),Bt(g.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Ci(),qe(g,"full"),t!=null){for(var i=g.ProjectJSON.length-1;i>=0;i--)if(g.ProjectJSON[i].URL==t){const a=`${g.ProjectJSON[i].SongSequence}-${g.ProjectJSON[i].Version}`;fi(a)}}}function xt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",xe=!1}async function de(){if(!xe)return;const e=g.ProjectID,t=await Ve(e);if(t=="")return;const n=structuredClone(g),o=JSON.parse(t);if(o.ProjectID=e,g=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(g)}`),n.Description!==g.Description){const s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");s.innerText=g.ProjectName,a.innerText=`${g.ProjectContributors} | ${bt(g.TimeCreated)}`,sessionStorage.setItem("description",g.Description),Rt()}if(n.PictureURL!==g.PictureURL){const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${P}/${g.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==g.ProjectContributors){const s=document.getElementById("PROJECTviewDisplayTitleH3");s.innerText=g.ProjectContributors}if(n.ProjectName!==g.ProjectName){const s=document.getElementById("PROJECTviewDisplayTitleH1");s.innerText=g.ProjectName}if(n.ProjectJSON!==g.ProjectJSON)if(n.ProjectJSON==null||g.ProjectJSON==null)Te();else if(n.ProjectJSON.length!==g.ProjectJSON.length)Te();else{let s=0;for(var i=g.ProjectJSON.length-1;i>=0;i--)g.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&Te()}qe(g,"full")}function fi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=ht(po,0),o=It("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),_o(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function vi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),s=document.getElementById("PROJECTviewDisplayDescription"),a=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),u=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),m=document.getElementById("PROJECTviewDisplayMenuButton"),S=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),p=document.querySelector(".PROJECTviewDisplayImage"),v=document.getElementById("PROJECTviewMobileStickyHeader"),_=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const y=document.getElementById("PROJECTviewMOREdescriptionP"),E=new IntersectionObserver(h,{threshold:.1}),L=sessionStorage.getItem("description");y.innerText=L,i.addEventListener("click",function(){R()}),s.addEventListener("dblclick",function(){R()});let O=0;s.addEventListener("touchend",function(C){const T=new Date().getTime();T-O<300&&(C.stopPropagation(),R()),O=T}),c.addEventListener("click",function(){I(g)}),a.addEventListener("click",function(C){C.target===a&&I(g)}),d.addEventListener("click",function(){Ht(g)}),u.addEventListener("click",function(){es(g)}),m.addEventListener("click",function(){_t(event)}),S.addEventListener("click",function(){_t(event)}),E.observe(p),e.addEventListener("blur",function(C){const T=e.innerText;T!==n&&(At(T),ie(g.ProjectID,"project_name",T),g.ProjectName=T)}),t.addEventListener("blur",function(C){const T=t.innerText;T!==o&&(ie(g.ProjectID,"project_contributors",T),g.ProjectContributors=T)});function R(){a.style.display="grid",A()&&(r.style.zIndex="40")}function h(C,T){C.forEach(H=>{H.isIntersecting&&A()?(v.style.backdropFilter="none",v.style.backgroundColor="transparent",_.style.visibility="hidden"):H.isIntersecting&&!A()||!H.isIntersecting&&!A()?(v.style.backdropFilter="",v.style.backgroundColor="",_.style.visibility=""):!H.isIntersecting&&A()&&(v.style.backdropFilter="blur(15px)",v.style.backgroundColor="var(--background-transparent)",_.style.visibility="visible")})}function I(C){const T=y.value;sessionStorage.setItem("description",T),ie(C.ProjectID,"description",T),a.style.display="none",y.innerText=T,r.style.zIndex=""}}function Ei(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${bt(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${P}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=Fe(X(pi),t)}function Rt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function At(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function _t(e){e.stopPropagation(),e.target;const t=g.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],Y(n,e)}async function yi(e){const t=`Are you sure that you want to delete <em><b>${g.ProjectName}</b></em>? This action is not reversable.`;if(await Qe(t)==="delete"){await bi(),$(),U("/");return}$()}async function bi(){const e=g.ProjectID;localStorage.removeItem(`project-${e}`);try{const n=await(await fetch(`${M}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.error("Error:",t)}}function Te(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=X(mi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(g.ProjectJSON);const o=It("--orange"),i=p=>`#${p.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(v=>parseInt(v,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let p=0;p<n.length;p++){let v=X(gi);const _=n[p],y={itemsToReplace:[["PROJECTviewRow_img",`${P}/${g.PictureURL}/3`],["PROJECTviewRow_songTitle",`${_.SongName}`],["PROJECTviewRow_artistName",`${g.ProjectContributors}`],["PROJECTviewRow_projectName",`${ae(_.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(_.Duration/60)}:${(_.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${_.SongSequence}-${_.Version}`],["PROJECTviewRow_contentEditable",`${_i}`]]};v=Fe(v,y),t.insertAdjacentHTML("beforeend",v);{const E=t.lastElementChild;E.addEventListener("dragstart",a),E.addEventListener("dragover",c),E.addEventListener("drop",d)}}function a(p){p.dataTransfer.setData("text/plain",p.target.dataset.rowId),p.dataTransfer.getData("text/plain"),s=p.srcElement,uo(p.srcElement)}const r=ht(go,0);function c(p){p.preventDefault(),p.dataTransfer.dropEffect="move";const v=p.target.closest(".PROJECTview-projectTable-rowContainer");if(v!==s){const _=getComputedStyle(v).backgroundColor,y=i(_);r(v,y,o)}}function d(p){p.preventDefault();const v=p.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${v}"]`),y=p.target.closest(".PROJECTview-projectTable-rowContainer");if(y){const L=structuredClone(g),O=y.getAttribute("data-row-id");y.before(_);const R=`${v}|${O}`;setTimeout(async()=>{await ie(g.ProjectID,"SongsTableChangeSongSequenceOrder",R),de()},1);let h=[];for(var E=0;E<t.children.length;E++){if(E==0)continue;const I=t.children[E],H=I.dataset.rowId.split("-")[0];let ee=L.ProjectJSON[H-1];ee.SongSequence=E,h.push(ee),I.style.backgroundColor="",I.dataset.rowId=`${E}-1`}g.ProjectJSON=h}}t.addEventListener("click",function(p){const v=p.target;if(p.stopPropagation(),v.tagName==="BUTTON"){const _=v.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),hi(p))}});const u=t.querySelectorAll("[contenteditable]"),m=[],S=p=>{const _=p.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),y=p.target.textContent,E=m.find(h=>h.dataRowIDField===_);if((E?E.currentText:"Row ID not found")==y)return;for(var O=m.length-1;O>=0;O--)m[O].dataRowIDField===_&&(m[O].currentText=y);const R=`${_}-${y}`;ie(g.ProjectID,"project_song_title",R)};u.forEach(p=>{p.addEventListener("blur",S),m.push({dataRowIDField:p.parentElement.parentElement.getAttribute("data-row-id"),currentText:p.innerText})})}function hi(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],Y(i,e)}function Ti(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(g);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,os(i,o)}async function Ii(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await Qe(t)==="delete"&&(await ri(g.ProjectID,e.songID),de()),$()}function Ci(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){wi(o)}}async function Nt(){const e=J[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;he=!0,wo(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;fe(a),a===100&&fe(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){D("Storage limit reached","error");for(var a=J.length-1;a>=0;a--)J.shift();he=!1,We(),fe(0)}he=!1,J.shift(),We(),fe(0),J.length>0&&await Nt(),g.ProjectID==n&&xe==!0&&de()},i.onerror=function(){D("Upload Failed","error")},i.open("POST",`${M}/files/upload_audio/${n}`,!0),i.send(o)}async function wi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:g.ProjectID,file:n};J.push(o),he||await Nt()}}const Li=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Pi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&D("Storage limit reached","error"),n!=="update_user_pfp"?Mi():(xi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${M}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Si(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Pi(o,t,n)}const Oi=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Se,F=!1;function Y(e,t,n){n===void 0?Di(e,t):n!==void 0&&n==="update_project_image"?ft(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?ft(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Bi():console.log("invalid menu display inputs")}function Bi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=ho;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;A()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[x,k]of Object.entries(N)){const G=new RegExp(`\\{${x}\\}`,"g");i=i.replace(G,k)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),S=s.duration,v=s.currentTime/S*100,_=document.getElementById("LCDMB_seek_input"),y=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const E=document.getElementById("LCDMB_back"),L=document.getElementById("LCDMB_play"),O=document.getElementById("LCDMB_play_icon"),R=document.getElementById("LCDMB_next"),h=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{I(),F===!0&&T()}),I(),C(),y.style.width=`${v}%`,s.addEventListener("timeupdate",()=>{const x=s.duration,G=s.currentTime/x*100;y.style.width=`${G}%`}),_.addEventListener("input",function(){const x=s.duration,k=_.value;s.currentTime=x*(k/100)}),E.addEventListener("click",()=>{Yt(),I(),F===!0&&T()}),L.addEventListener("click",()=>{Ae(),I(),C()}),R.addEventListener("click",()=>{qt(),I(),F===!0&&T()}),h.addEventListener("click",()=>{F===!1?(H(),F=!0):(ee(),F=!1)}),F===!0?H():ee(),o.addEventListener("touchstart",le,!1),o.addEventListener("touchmove",ue,!1),o.addEventListener("touchend",me,!1);function I(){m.src=Jt,d.innerText=Gt,u.innerText=$t}function C(){s.paused?O.src=N.icons_playButtonV2:O.src=N.icons_derpy}function T(){const x=document.getElementById("LCD_mobile_queue_content_container");x.innerHTML="";for(let k=f+1;k<l.length;k++){const G=l[k],ge=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],te=G.img,tn=G.song_name,nn=G.project_contributors;let Ne=bo;for(let je=0;je<ge.length;je++){const pe=ge[je].toString(),on=new RegExp(`\\{${pe}\\}`,"g");let _e="";pe==="queue_item_img"?_e=`${P}/${te}/3`:pe==="queue_item_song_name"?_e=tn:pe==="queue_item_song_artist"&&(_e=nn),Ne=Ne.replace(on,_e)}x.innerHTML+=Ne}}function H(){function x(k){k.forEach(G=>{document.querySelectorAll("."+G).forEach(te=>{te.classList.add("queue_visible")})})}x(a),o.removeEventListener("touchstart",le),o.removeEventListener("touchmove",ue),o.removeEventListener("touchend",me),T()}function ee(){function x(k){k.forEach(G=>{document.querySelectorAll("."+G).forEach(te=>{te.classList.remove("queue_visible")})})}x(a),o.addEventListener("touchstart",le,!1),o.addEventListener("touchmove",ue,!1),o.addEventListener("touchend",me,!1)}function le(x){F===!1&&(r=x.touches[0].clientY)}function ue(x){x.preventDefault()}function me(x){c=x.changedTouches[0].clientY,c-r>70&&($(),o.removeEventListener("touchstart",le),o.removeEventListener("touchmove",ue),o.removeEventListener("touchend",me))}}function Di(e,t){Se=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");A()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Oi,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",Ut),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const L=Se.getBoundingClientRect();n=L.left+window.scrollX,o=L.top+window.scrollY;let O=n+"px",R=o+"px";r.style.left=O,r.style.top=R}for(let L=0;L<e.length;L++)Ri(e[L]);const S=r.children[0],p=r.offsetWidth,v=r.offsetHeight,_=jt("MENUmodalBody"),y=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!A()?S.focus():u=="mouse"&&!A()&&(S.focus(),S.blur()),document.addEventListener("keydown",E),_.xOverflow==!0&&(c=n-p+"px",r.style.left=c),_.yOverflow==!0&&(d=o-v+"px",r.style.top=d);for(let L=0;L<y.length;L++){const O=y[L];O.setAttribute("data-menu-item-id",L),O.addEventListener("click",function(R){R.stopPropagation();const I=R.target.getAttribute("data-menu-item-id"),C=e[I].function,T=e[I].optionalParams;if(C=="TEST")console.log("the button worked",T);else if(C!="None"){Ai[C](T);return}else return})}function E(L){(L.key==="Escape"||L.keyCode===27)&&(document.removeEventListener("keydown",E),$())}}function ft(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";A()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=yo,r.style.display="block",r.addEventListener("click",Ut);const u=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),S=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),v=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let y,E;function L(h,I){return function(){const C=this,T=arguments;clearTimeout(E),E=setTimeout(()=>{h.apply(C,T)},I)}}function O(h,I,C){L(Si,100)(h,I,C)}function R(h){if(y){const I=URL.createObjectURL(y),C=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=I,v.style.visibility="visible",_.style.outline="3px solid var(--primary)",v.addEventListener("click",()=>{O(y,h.project_id,h.MenuType),C.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",h=>{h.preventDefault()}),m.addEventListener("drop",h=>{h.preventDefault(),y=h.dataTransfer.files[0],R(e)}),S.addEventListener("click",()=>{const h=document.createElement("input");h.type="file",h.accept="image/*",h.addEventListener("change",I=>{y=I.target.files[0],R(e)}),h.click()})}function Mi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",$(),de()}function xi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",$()}function jt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let u=!1,m=!1;return c>n&&(u=!0),d>o&&(m=!0),{xOverflow:u,yOverflow:m}}function Ri(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Li.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(N)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Ut(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function $(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Se&&Se.focus()}const Ai={PROJECT_VIEW_delete_project(e){yi(),$()},PLAYBACK_add_songs_to_queue(e){ns(e),$()},SIGN_OUT_USER(e){$(),Do()},OPEN_SETTINGS_PAGE(e){$(),U("/settings/")},PROJECT_VIEW_delete_song(e){Ii(e)},PROJECT_VIEW_add_song_to_queue(e){Ti(e)}};let V="hidden";function Ni(){ao();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ye(V),e.addEventListener("click",ji),t.addEventListener("click",Ui),q()}function ji(){if(V==="hidden"){V="visible",Ye(V);return}if(V==="visible"){V="hidden",Ye(V);return}}function Ye(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",yt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function q(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<l.length;t++){l[t].id=t;const n=l[t],o=Yi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",qi),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",$i),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Hi(r)}),i.addEventListener("dragstart",ki),i.addEventListener("dragover",Ji),i.addEventListener("drop",Gi),e.appendChild(i)}}function Ui(){const e=f+1;e>=0&&e<l.length?l.splice(e):l.length=0,q()}function ki(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ji(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Gi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=l.find(r=>r.id===parseInt(t)),i=l.find(r=>r.id===parseInt(n.dataset.songId)),s=l.indexOf(o),a=l.indexOf(i);s!==-1&&a!==-1&&(l.splice(s,1),l.splice(a,0,o),w.splice(s,1),w.splice(a,0,o),q())}function $i(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=l.findIndex(i=>i.id===n);o!==-1&&(l.splice(o,1),w.splice(o,1)),q()}function Hi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];Y(o,e)}function qi(e){}function Yi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=ro;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let m="";d==="QUEUE_item_image"?m=`${P}/${n}/3`:d==="QUEUE_item_title"?m=o:d==="QUEUE_item_artist"?m=i:d==="icons_menuOptionsButton"?m=Et:d==="QUEUE_item_timeIndicator"&&(m=s),a=a.replace(u,m)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Fi=`<div class="LCDbody">
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
</div>`;function Qi(){zi(),kt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ki(t)}),Wi(),A()&&document.getElementById("LCDbody").addEventListener("click",Vi)}function Vi(e){e.stopPropagation(),Y({param:"cheese"},e,"lcd_mobile_body")}function zi(){let e="LCDbody",t=Fi;for(const[o,i]of Object.entries(N)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function kt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=s(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Ki(e){e.stopPropagation(),e.target,Y([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Wi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Xi)})}function Xi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),as(n)}function Zi(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let l=[],w=[],f=0,Jt="",Gt="",$t="";document.getElementById("audio");document.getElementById("PLAYERsource");let B="off",z="off",ce="paused";function Ht(e){l=[],f=0,l=Re(e),l.length>0&&(ce="playing",K())}function es(e){l=[],f=0,l=Re(e),l.length>0&&(z="off",Ft(),ce="playing",K())}function Re(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function ts(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;l=t,f=n,gs(o),l!==void 0&&l.length>0&&ds(i)}async function ns(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Ve(t),i=JSON.parse(o);i.ProjectID=t;const s=Re(i);if(n==="later")l=l.concat(s),w=w.concat(s);else if(n==="next"){let a=l.slice(0,f+1),r=l.slice(f+1);l=a,l=l.concat(s),l=l.concat(r),a=w.slice(0,f+1),r=w.slice(f+1),w=a,w=w.concat(s),w=w.concat(r)}q()}async function os(e,t){const n=Re(e);if(t==="later")l=l.concat(n),w=w.concat(n);else if(t==="next"){let o=l.slice(0,f+1),i=l.slice(f+1);l=o,l=l.concat(n),l=l.concat(i),o=w.slice(0,f+1),i=w.slice(f+1),w=o,w=w.concat(n),w=w.concat(i)}q()}function Ae(){is()}function is(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(Z("playing"),ce="playing",e.play().then(n=>zt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(ce="paused",Z("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){Ae()});navigator.mediaSession.setActionHandler("pause",function(){Ae()});function qt(){Wt()}function Yt(){Xt()}function ss(){document.getElementById("audio").addEventListener("ended",us)}function as(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function rs(){ms()}function cs(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:B,PLAYBACK_shuffle_state:z,progress:t}}function Ft(){if(z==="off"){z="on",vt(z);const t=f+1;w=[...l],l.slice(0,f);const n=l.slice(t);co(n);const o=n.length;l.splice(f,o,...n),q()}else{z="off",vt(z);const t=[...w],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];l=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(f=e);q()}}function K(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${P}/${l[f].url}/3`,e.load(),ce==="playing"?(e.play().then(o=>zt()).catch(o=>console.log(o)),Z("playing")):Z("paused"),Vt(),Qt()}function ds(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${P}/${l[f].url}/3`,t.load(),t.currentTime=e,Z("paused"),Vt(),Qt()}function Qt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${ze(s)}"`,c=`"${ze(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;Zi(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,Kt()})}function Vt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=l[f].song_name,t.innerHTML=l[f].song_name,n.innerHTML=l[f].project_contributors,kt(),o.src=`${P}/${l[f].img}/3`,i.src=`${P}/${l[f].img}/3`,Jt=`${P}/${l[f].img}/5`,Gt=l[f].song_name,$t=l[f].project_contributors,q()}function zt(){let e=l[f];const t=[{src:`${P}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${P}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${P}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${P}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${P}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${P}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Kt()}function Kt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ls(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",Z("paused"),l=[],w=[],f=0,t.src="http://null.com/null"}function us(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=l.length;e.pause(),t>f+1&&(B=="off"||B=="on")?(f+=1,K()):B=="song"?K():t==f+1&&B=="on"?(f=0,K()):ls()}function Wt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),l.length>f+1&&(e.pause(),f+=1,K())}navigator.mediaSession.setActionHandler("nexttrack",function(){Wt()});function Xt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),l.length,e.currentTime>2){e.currentTime=0;return}else if(f>0){e.pause(),f-=1,K();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Xt()});function ms(){B=="off"?(B="on",W(B)):B=="on"?(B="song",W(B)):(B="off",W(B))}function gs(e){e=="off"?(B="off",W(B)):e=="on"?(B="on",W(B)):(e="song",B="on",W(B))}function ps(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",_s),t.addEventListener("click",fs),n.addEventListener("click",vs),o.addEventListener("click",Es),i.addEventListener("click",ys)}function _s(){Ft()}function fs(){Yt()}function vs(){Ae()}function Es(){qt()}function ys(){rs()}function vt(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function W(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=N.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=N.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=N.icons_loop_song;return}}function Z(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=N.icons_pause;return}if(e=="paused"){t.src=N.icons_play;return}}function bs(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Zt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",hs)})}function hs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Zt(n)}function Zt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ts(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=mo(Cs,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Oe==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&Oe==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",se()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function Is(e){se(),Oe=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=Ke();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{U(`/projects/${i}/${s}`),se()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=Ke();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{U(`/projects/${i}`),se()})}}}async function Cs(e,t){if(t.value==""){se();return}const n=await si(t.value);Is(n)}let Oe=!1;function se(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Oe=!1}const M="/apis",P="/media";async function en(){ss(),io(),so(),Qi(),ps(),Ts(),bs(),So(),Ni(),ti(),Co()}window.hasCodeRun||(Ko(),window.hasCodeRun=!0);
