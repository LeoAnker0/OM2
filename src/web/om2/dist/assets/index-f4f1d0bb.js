(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const nt="/assets/menu_options_button-a1d7bbe3.svg",Jt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Ht=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,qt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,$t="/assets/volume_null-e39cf06f.svg",Yt="/assets/recently_added-a0a983c6.svg",Ft="/assets/volume_3-c8ab0a75.svg",Qt="/assets/orange_music_text_logo_black-12e7386c.svg",zt="/assets/volume_2-cfdac9da.svg",Vt="/assets/browse_2-85030bba.svg",Kt="/assets/volume_1-27e93416.svg",Wt="/assets/orange_music_logo_white-2a680ea2.svg",Xt="/assets/search_icon-4f5e4381.svg",Zt="/assets/orange_music_text_logo_black-91f9e706.png",en="/assets/up_next_queue_button-14fedba2.svg",tn="/assets/orange_music_logo_yellow-a109ff64.svg",nn="/assets/playlist-c6e9024f.svg",on="/assets/loop_button-aef56865.svg",sn="/assets/help_icon-867fec9d.svg",an="/assets/play_button-b1e2d3a4.svg",rn="/assets/browse-14744f27.svg",cn="/assets/orange_music_text_logo_white-7f0ba909.svg",dn="/assets/back_button-8128cade.svg",ln="/assets/Albums-2e81dc74.svg",un="/assets/songs-016b7188.svg",mn="/assets/orange_music_logo_black-4d7e4591.svg",pn="/assets/your_uploaded_songs-06535705.svg",gn="/assets/artist-ab677d43.svg",_n="/assets/shuffle_button-c2f06bc4.svg",fn="/assets/orange_music_text_logo_white-4907051e.png",vn="/assets/listen_now-c7438154.svg",En="/assets/derpy-21c20ae5.svg",yn="/assets/next_button-9a850710.svg",bn="/assets/recently_added-7ff28139.svg",hn="/assets/play_button-5eeedbe6.svg",Tn="/assets/browse-e8be8609.svg",In="/assets/albums-681507b8.svg",wn="/assets/listen_now.2-bfa293ac.svg",Cn="/assets/your_uploads-02e5c93c.svg",Ln="/assets/play_button.2-fc90fac7.svg",Pn="/assets/listen_now-fb02ffce.svg",On="/assets/browse.2-15b501dd.svg",Bn="/assets/place_holder_image-d4006a96.svg",Mn="/assets/icons_MOGitems_add-19e679f7.svg",Sn="/assets/back-9279721d.svg",xn="/assets/forwards-605bd405.svg",Dn="/assets/icons_close-57e87944.svg",Rn="/assets/icons_pause-8012f8cc.svg",An="/assets/icons_loop-32d1576c.svg",Nn="/assets/icons_loop_song-87f53dc7.svg",Un="/assets/icons_play-a5074c5b.svg",jn="/assets/icons_settings-793063fb.svg",kn="/assets/love-07ac5006.svg",Gn="/assets/upload-3bad9145.svg",I={icons_volumeNull:$t,icons_recentlyAdded:Yt,icons_volume3:Ft,icons_orangeMusicTextLogoBlack:Qt,icons_volume2:zt,icons_browse2:Vt,icons_volume1:Kt,icons_orangeMusicLogoWhite:Wt,icons_searchIcon:Xt,icons_orangeMusicTextLogoBlackPng:Zt,icons_queueButton:en,icons_orangeMusicLogoYellow:tn,icons_playlist:nn,icons_loopButton:on,icons_helpIcon:sn,icons_playButton:an,icons_browse:rn,icons_menuOptionsButton:nt,icons_orangeMusicTextLogoWhite:cn,icons_backButton:dn,icons_Albums:ln,icons_songs:un,icons_orangeMusicLogoBlack:mn,icons_yourUploadedSongs:pn,icons_artist:gn,icons_shuffleButton:_n,icons_orangeMusicTextLogoWhitePng:fn,icons_listenNow:vn,icons_derpy:En,icons_nextButton:yn,icons_recentlyAddedV2:bn,icons_playButtonV2:hn,icons_browseV2:Tn,icons_albumsV2:In,icons_listenNow2V2:wn,icons_yourUploads:Cn,icons_playButton2:Ln,icons_listenNowV2:Pn,icons_browse2V2:On,v3_placeholder:Bn,icons_MOGitems_add:Mn,icons_back:Sn,icons_forwards:xn,icons_close:Dn,icons_pause:Rn,icons_loop:An,icons_loop_song:Nn,icons_play:Un,icons_settings:jn,current_year:new Date().getFullYear(),icons_love:kn,icons_upload:Gn};function Jn(){let e="topleftContentArea",t=Jt;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Hn(){let e="toprightContentArea",t=Ht;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function qn(){let e="MAINcontentContainer",t=qt;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const $n=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function ot(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Yn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function De(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Fn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Qn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function X(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function zn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Vn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Re;const M=new Map;function Kn(e,t,n){M.has(e)||M.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!M.has(e))return;const r=Math.min(a/500,1);if(!M.has(e))return;const c=Wn(M.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||M.get(e).isChanging?M.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",M.delete(e))}clearTimeout(Re),Re=setTimeout(()=>{M.has(e)&&!M.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(M.get(e).animationFrameId),M.delete(e))},500),M.get(e).isChanging=!0;const i=Date.now();M.get(e).animationFrameId=requestAnimationFrame(o)}function Wn(e,t,n){return Xn(n,e,t)}function Xn(e,t,n){const o=function(E){return E=E.toString(16),E.length===1?"0"+E:E},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),m=Math.round(i*(1-n)+r*n),p=Math.round(s*(1-n)+c*n),v=Math.round(a*(1-n)+d*n);return"#"+o(m)+o(p)+o(v)}function Zn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=eo(o,i,s),r=Ie(a[0]),c=Ie(a[1]),d=Ie(a[2]);return to({r,g:c,b:d})}function eo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Ie(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function to(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const no=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,oo=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,io=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,so=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,ao=`
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
            <div class="estimatedSize">Estimated Size - <span id="UPLOADQUEUEBOTTOM_fileSize">200mb</span></div>
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
`;let fe=!1;function ro(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=so,n.addEventListener("click",function(o){fe==!1?lo(o):ge()}),t.innerHTML=ao}function co(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Ae(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",fe==!0&&x.length>0||ge()}function de(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(x.length>0){t.innerHTML=x[0].file.name,n.innerHTML=X(x[0].file.size*1.75),uo(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=x.length-1;o>=1;o--){const a=x[o].file.name,r=X(x[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}}let Ne;function lo(e){fe=!0,Ne=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",ge),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const p=Ne.getBoundingClientRect();t=p.left+window.scrollX,n=p.top+window.scrollY;let v=t+"px",E=n+"px";o.style.left=v,o.style.top=E}const r=o.offsetWidth,c=o.offsetHeight,d=bt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",m),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function m(p){(p.key==="Escape"||p.keyCode===27)&&(document.removeEventListener("keydown",m),ge())}}function ge(){fe=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function uo(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Ue=1500;let it=0,Le=[],we;function j(e,t){const o=new Date().getTime();Le.push({notificationText:e,notificationType:t,time:o}),st()}function st(){const t=new Date().getTime(),n=Le.at(it);Le.length>1?t-we>Ue?(je(n.notificationText,n.notificationType),we=t):setTimeout(st,Ue):(je(n.notificationText,n.notificationType),we=t)}function je(e,t){const n=document.getElementById("noticationContainer");let o;it+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const mo=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,po=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,go=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,at=15;let Z=0;async function _o(){try{const e=document.getElementById("MAINcontentPages");fo();const t=await gt(at,Z);Z+=t.length,vo(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function rt(){Z=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",ct),e.innerHTML=""}function fo(){let e="MAINcontentPages",t=mo;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function vo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=po;for(const[a,r]of Object.entries(I)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,ke(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){ct(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],m=r[d].project_id;console.log(m),dt(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await gt(at,Z);Z+=d.length,d.length>0&&ke(d)}})}function ke(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,m=Fn(d);let p=go;for(const[v,E]of Object.entries(I)){const l=new RegExp(`\\{${v}\\}`,"g");p=p.replace(l,E)}for(let v=0;v<i.length;v++){const E=i[v].toString(),l=new RegExp(`\\{${E}\\}`,"g");let g="";E==="MOG_image"?g=`${T}/${a}/3`:E==="MOG_text1"?g=r:E==="MOG_text2"?g=c:E==="MOG_checkedDate"?g=m:E==="MOGI_placeholder_itemID"&&(g=s),p=p.replace(l,g)}t.innerHTML+=p}}async function ct(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await ve(i);Lt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;dt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;G(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Eo()}function dt(e,t){e.stopPropagation(),Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Eo(){G("/new-project/")}const yo=`<div class="ADMINusersTableInfoRow">
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
</div>`,bo=`<h1>Admin</h1>
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
</details>`,ho=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function lt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){To(a,r,c)}}function To(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),Y(o,e,n)}const Io=`<h1>General</h1>
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
<p>Thank you for using OM2 <img style="filter: var(--make-svg-orange);" src="{icons_love}" height="20"></p>`,wo=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>`,Co=`<div class="settings_container">
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
</div>`;let Oe;async function Lo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Be("profile_picture"),n=`${T}/${t}/1`;Oe=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Po)}catch(t){console.error("Error initializing account image:",t)}}function Po(e){e.stopPropagation(),Oo(e)}function Oo(e){Y([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Bo(){await qo()}let ut="general";const me=[{name:"general",markup:Io,button_id:"settings_button_general",function:So},{name:"user",markup:wo,button_id:"settings_button_user",function:xo},{name:"admin",markup:ho,button_id:"settings_button_admin",function:Do}];function Mo(){const e=document.getElementById("MAINcontentPages");let t=Co;for(const[i,s]of Object.entries(I)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Ge(ut);for(var o=me.length-1;o>=0;o--){const i=me[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=me.find(m=>m.button_id===r).name;Ge(d)})}n.addEventListener("click",function(){G("/")})}function mt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Ge(e){ut=e;const t=["users_img"],n=document.getElementById("view_container"),o=me.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(I)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${T}/${Oe}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function So(){}function xo(){lt("user-id","settings_views_user_pfp_img","update_user_pfp")}let W=[];async function Do(){if(await Be("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=bo;for(const[s,a]of Object.entries(I)){const r=new RegExp(`\\{${s}\\}`,"g");o=o.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${T}/${Oe}/4/`),o=o.replace(r,c)}n.innerHTML=o,pt(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const a=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(a.value==""||r.value=="")j("Error Updating Column: empty inputs","error");else for(var c=W.length-1;c>=0;c--){const d=W[c];Ho(d,a.value,r.value)}})}let k;async function pt(){const e=await Jo();k=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<k.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=k[n].username,s=k[n].uuid,a=k[n].verified,r=k[n].email;let c=k[n].storage_allowance;c=X(c);const d=k[n].admin,m=n;let p=k[n].storage_used;p=X(p);let v=yo,E=k[n].profile_picture;E=`${T}/${E}/1/`;for(let l=0;l<o.length;l++){const g=o[l].toString(),y=new RegExp(`\\{${g}\\}`,"g");let f="";g==="Username"?f=i:g==="Email"?f=r:g==="UUID"?f=s:g==="Verified"?f=a:g==="Space_Used"?f=p:g==="Storage_Allowance"?f=c:g==="profile_picture_url"?f=E:g==="checkbox_number"?f=m:g==="Admin"&&(f=d),v=v.replace(y,f)}t.innerHTML+=v}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Ro()})}function Ro(){W=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=k[i.id].uuid;W.push(a)}),o.innerHTML=`Selected Items: ${W.length}`}async function Ao(){const e=await Be("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;G(r),Gi(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=u,d=_,m=Fi();m.current_path=r,m.current_queue=c,m.current_index=d;const p=i(m);p!==o&&(ko("last_state",m),o=p,n.set("playback_states",p))}function a(){G(currentPath)}}function No(){ft(),mt(),_o()}function Uo(e){rt(),mt(),Qo(e)}function Je(){rt(),ft(),Mo()}const He={"/":No,"/new-project/":le,"/new-project":le,"/new/":le,"/new":le,"/projects/:projectID":Uo,"/settings/":Je,"/settings":Je};function jo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){G("/")}}function G(e){const t=Object.keys(He);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=He[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}jo()}async function ko(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${O}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Go(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${O}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&j("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Be(e){try{return(await(await fetch(`${O}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ee(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${O}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function ve(e){try{return(await(await fetch(`${O}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function gt(e,t){try{const i=(await(await fetch(`${O}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function le(){try{const o=`/projects/${(await(await fetch(`${O}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;G(o)}catch(e){console.error("Error:",e)}}async function Jo(){try{return(await(await fetch(`${O}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Ho(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${O}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){j("Table Updated Successfully","success"),pt();return}else{j(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){j(`Error Updating Column ${t}: ${o}`,"error");return}}async function qo(){try{const t=await(await fetch(`${O}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const $o=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Yo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Fo=`<div class="PROJECTviewContainerEnvironment">
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
</div>`;let qe;function _t(e){return new Promise((t,n)=>{qe=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){$e(),t("delete")}function d(){qe.focus(),$e(),t("cancel")}i.addEventListener("click",m=>{const p=m.target;p===a?c():(p===r||p===i)&&d()}),o==="keyboard"&&!D()?r.focus():o=="mouse"&&!D()&&(J(),r.focus(),r.blur())})}function $e(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const x=[];let pe=!1,Ye=!0,b,Ee=!1;async function Qo(e){let t;Ee=!0,ot()==!0?t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Ko(t),sessionStorage.setItem("description","Wonderful notes are loading..."),Fe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{G("/")});const o=await ve(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,b=s,i(),Vo()}function i(){zo(),sessionStorage.setItem("description",b.Description),Fe(),Wo(),Zo(),ei(),ti(),vt(),li(),yt(b.ProjectName),lt(b.ProjectID,"PROJECTviewDisplayImage","update_project_image"),ci()}}function ft(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Ee=!1}async function ye(){if(!Ee)return;const e=b.ProjectID,t=await ve(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,b=n,vt();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${T}/${b.PictureURL}/5`;o.src=i}}function zo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${T}/${b.PictureURL}/5`;e.innerText=b.ProjectName,t.innerText=b.ProjectContributors,n.src=o}function Vo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(yt(s),ee(b.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(ee(b.ProjectID,"project_contributors",s),o=s)})}function Ko(e){let t="MAINcontentPages",n=Fo;for(const[i,s]of Object.entries(I)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=Qn(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${T}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function Fe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Wo(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",D()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Xo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Zo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function ei(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Qe(b)}),t.addEventListener("click",function(n){n.target===t&&Qe(b)})}function Qe(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),ee(e.ProjectID,"description",n),o.style.display="none",Xo(),i.style.zIndex="1"}async function ti(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){Lt(b)}),t.addEventListener("click",function(){ki(b)}),n.addEventListener("click",function(){ze(event)}),o.addEventListener("click",function(){ze(event)})}function ze(e){e.stopPropagation(),e.target;const t=b.ProjectID;Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}async function ni(e){const t=`Are you sure that you want to delete <em><b>${b.ProjectName}</b></em>? This action is not reversable.`,n=await _t(t);if(n==="cancel")J();else if(n==="delete"){const o="/";await oi(),J(),G(o)}else J()}async function oi(e){const t=b.ProjectID;try{const o=await(await fetch(`${O}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function vt(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),ai();const t=document.getElementById("PROJECTview-projectTable"),n=b.ProjectJSON,o=Zn("--orange"),i=l=>`#${l.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(g=>parseInt(g,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const l of n)a.push({img:b.PictureURL,songTitle:l.SongName,artistName:b.ProjectContributors,projectName:X(l.FolderSize),songDuration:`${Math.floor(l.Duration/60)}:${(l.Duration%60).toString().padStart(2,"0")}`,songSequence:l.SongSequence,version:l.Version,url:l.URL});for(let l=0;l<a.length;l++){a[l].ProjectID=l;const g=a[l],y=ri(g);t.insertAdjacentHTML("beforeend",y);const f=t.lastElementChild;f.addEventListener("dragstart",r),f.addEventListener("dragover",d),f.addEventListener("drop",m)}function r(l){l.dataTransfer.setData("text/plain",l.target.dataset.rowId),l.dataTransfer.getData("text/plain"),s=l.srcElement,zn(l.srcElement)}const c=Vn(Kn,0);function d(l){l.preventDefault(),l.dataTransfer.dropEffect="move";const g=l.target.closest(".PROJECTview-projectTable-rowContainer");if(g!==s){const y=getComputedStyle(g).backgroundColor,f=i(y);c(g,f,o)}}function m(l){l.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const g=l.dataTransfer.getData("text/plain"),y=document.querySelector(`[data-row-id="${g}"]`),f=l.target.closest(".PROJECTview-projectTable-rowContainer");if(f){const h=f.getAttribute("data-row-id");f.before(y);const N=`${g}|${h}`;setTimeout(async()=>{await ee(b.ProjectID,"SongsTableChangeSongSequenceOrder",N),ye()},1)}}t.addEventListener("click",function(l){const g=l.target;if(l.stopPropagation(),g.tagName==="BUTTON"){const y=g.closest(".PROJECTview-projectTable-rowContainer");y&&(y.getAttribute("data-row-id"),ii(l))}});const p=t.querySelectorAll("[contenteditable]"),v=[],E=l=>{const y=l.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),f=l.target.textContent,h=v.find(C=>C.dataRowIDField===y);if((h?h.currentText:"Row ID not found")==f)return;for(var B=v.length-1;B>=0;B--)v[B].dataRowIDField===y&&(v[B].currentText=f);const w=`${y}-${f}`;ee(b.ProjectID,"project_song_title",w)};p.forEach(l=>{l.addEventListener("blur",E),v.push({dataRowIDField:l.parentElement.parentElement.getAttribute("data-row-id"),currentText:l.innerText})})}function ii(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;Y([{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o}}],e)}async function si(e){const t=`Are you sure that you want to delete <em><b>${e.songName}</b></em>? This action is not reversable.`,n=await _t(t);n==="cancel"||(n==="delete"?(await Go(b.ProjectID,e.songID),J(),ye()):console.error("a statement was returned that isn't valid"))}function ai(){let e="PROJECTview_projectAreaContainer",t=$o;for(const[n,o]of Object.entries(I)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function ri(e){let t=Yo;for(const[o,i]of Object.entries(I)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${T}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Ye===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Ye===!1&&(a=!1),t=t.replace(s,a)}return t}function ci(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){di(o)}}async function Et(e,t){const n=new FormData,o=new XMLHttpRequest;pe=!0,co(),n.append("file",e),n.append("project_id",t),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;de(s),s===100&&de(s)}},o.onload=async function(){if(o.responseText=="StorageLimit Reached"){j("Storage limit reached","error");for(var s=x.length-1;s>=0;s--)x.shift();pe=!1,Ae(),de(0)}if(pe=!1,x.shift(),Ae(),de(0),x.length>0){const a=x[0];await Et(a.file,a.ProjectID)}b.ProjectID==t&&Ee==!0&&ye()},o.onerror=function(){j("Upload Failed","error")},o.open("POST",`${O}/files/upload_audio/${t}`,!0),o.send(n)}async function di(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:b.ProjectID,file:n};if(x.push(o),!pe){const i=x[0];await Et(i.file,i.ProjectID)}}}function yt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function li(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!D()||!r.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const ui=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function mi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&j("Storage limit reached","error"),n!=="update_user_pfp"?vi():(Ei(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${O}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function pi(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await mi(o,t,n)}const gi=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let _e,q=!1;function Y(e,t,n){n===void 0?fi(e,t):n!==void 0&&n==="update_project_image"?Ve(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Ve(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?_i():console.log("invalid menu display inputs")}function _i(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=io;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[P,A]of Object.entries(I)){const U=new RegExp(`\\{${P}\\}`,"g");i=i.replace(U,A)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),v=s.duration,l=s.currentTime/v*100,g=document.getElementById("LCDMB_seek_input"),y=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const f=document.getElementById("LCDMB_back"),h=document.getElementById("LCDMB_play"),N=document.getElementById("LCDMB_play_icon"),B=document.getElementById("LCDMB_next"),w=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{C(),q===!0&&H()}),C(),R(),y.style.width=`${l}%`,s.addEventListener("timeupdate",()=>{const P=s.duration,U=s.currentTime/P*100;y.style.width=`${U}%`}),g.addEventListener("input",function(){const P=s.duration,A=g.value;s.currentTime=P*(A/100)}),f.addEventListener("click",()=>{Ot(),C(),q===!0&&H()}),h.addEventListener("click",()=>{be(),C(),R()}),B.addEventListener("click",()=>{Pt(),C(),q===!0&&H()}),w.addEventListener("click",()=>{q===!1?(Se(),q=!0):(xe(),q=!1)}),q===!0?Se():xe(),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1);function C(){p.src=It,d.innerText=wt,m.innerText=Ct}function R(){s.paused?N.src=I.icons_playButtonV2:N.src=I.icons_derpy}function H(){const P=document.getElementById("LCD_mobile_queue_content_container");P.innerHTML="";for(let A=_+1;A<u.length;A++){const U=u[A],ae=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],K=U.img,jt=U.song_name,kt=U.project_contributors;let he=oo;for(let Te=0;Te<ae.length;Te++){const re=ae[Te].toString(),Gt=new RegExp(`\\{${re}\\}`,"g");let ce="";re==="queue_item_img"?ce=`${T}/${K}/3`:re==="queue_item_song_name"?ce=jt:re==="queue_item_song_artist"&&(ce=kt),he=he.replace(Gt,ce)}P.innerHTML+=he}}function Se(){function P(A){A.forEach(U=>{document.querySelectorAll("."+U).forEach(K=>{K.classList.add("queue_visible")})})}P(a),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se),H()}function xe(){function P(A){A.forEach(U=>{document.querySelectorAll("."+U).forEach(K=>{K.classList.remove("queue_visible")})})}P(a),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1)}function oe(P){q===!1&&(r=P.touches[0].clientY)}function ie(P){P.preventDefault()}function se(P){c=P.changedTouches[0].clientY,c-r>70&&(J(),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se))}}function fi(e,t){_e=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");D()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=gi,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",ht),r.style.left=c,r.style.top=d;let m="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(m="keyboard"):t.pointerType!=="mouse"&&(m="keyboard"),m=="keyboard"){const h=_e.getBoundingClientRect();n=h.left+window.scrollX,o=h.top+window.scrollY;let N=n+"px",B=o+"px";r.style.left=N,r.style.top=B}for(let h=0;h<e.length;h++)yi(e[h]);const v=r.children[0],E=r.offsetWidth,l=r.offsetHeight,g=bt("MENUmodalBody"),y=r.getElementsByClassName("MENUmodalItemContainer");m==="keyboard"&&!D()?v.focus():m=="mouse"&&!D()&&(v.focus(),v.blur()),document.addEventListener("keydown",f),g.xOverflow==!0&&(c=n-E+"px",r.style.left=c),g.yOverflow==!0&&(d=o-l+"px",r.style.top=d);for(let h=0;h<y.length;h++){const N=y[h];N.setAttribute("data-menu-item-id",h),N.addEventListener("click",function(B){B.stopPropagation();const C=B.target.getAttribute("data-menu-item-id"),R=e[C].function,H=e[C].optionalParams;if(R=="TEST")console.log("the button worked");else if(R!="None"){bi[R](H);return}else return})}function f(h){(h.key==="Escape"||h.keyCode===27)&&(document.removeEventListener("keydown",f),J())}}function Ve(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";D()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=no,r.style.display="block",r.addEventListener("click",ht);const m=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),v=document.getElementById("MENUmodalBody_image_select_file_select_button"),E=document.getElementById("MENUmodalBody_image_select_preview_area"),l=document.getElementById("MENUmodalBody_image_select_submit_button"),g=document.getElementById("MENUmodalBody_image_select_submit_button_container");m.style.left=c,m.style.top=d;let y,f;function h(w,C){return function(){const R=this,H=arguments;clearTimeout(f),f=setTimeout(()=>{w.apply(R,H)},C)}}function N(w,C,R){h(pi,100)(w,C,R)}function B(w){if(y){const C=URL.createObjectURL(y),R=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");E.src=C,l.style.visibility="visible",g.style.outline="3px solid var(--primary)",l.addEventListener("click",()=>{N(y,w.project_id,w.MenuType),R.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",w=>{w.preventDefault()}),p.addEventListener("drop",w=>{w.preventDefault(),y=w.dataTransfer.files[0],B(e)}),v.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept="image/*",w.addEventListener("change",C=>{y=C.target.files[0],B(e)}),w.click()})}function vi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",J(),ye()}function Ei(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",J()}function bt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let m=!1,p=!1;return c>n&&(m=!0),d>o&&(p=!0),{xOverflow:m,yOverflow:p}}function yi(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",D()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=ui.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(I)){const m=new RegExp(`\\{${c}\\}`,"g");a=a.replace(m,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function ht(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function J(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),_e&&_e.focus()}const bi={PROJECT_VIEW_delete_project(e){ni()},PLAYBACK_add_songs_to_queue(e){Ji(e)},SIGN_OUT_USER(e){Bo()},OPEN_SETTINGS_PAGE(e){G("/settings/")},PROJECT_VIEW_delete_song(e){si(e)}};let F="hidden";function hi(){qn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Pe(F),e.addEventListener("click",Ti),t.addEventListener("click",Ii),$()}function Ti(){if(F==="hidden"){F="visible",Pe(F);return}if(F==="visible"){F="hidden",Pe(F);return}}function Pe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",ot&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function $(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=_+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Mi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Bi),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Pi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Oi(r)}),i.addEventListener("dragstart",wi),i.addEventListener("dragover",Ci),i.addEventListener("drop",Li),e.appendChild(i)}}function Ii(){const e=_+1;e>=0&&e<u.length?u.splice(e):u.length=0,$()}function wi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ci(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Li(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(r=>r.id===parseInt(t)),i=u.find(r=>r.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),S.splice(s,1),S.splice(a,0,o),$())}function Pi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),S.splice(o,1)),$()}function Oi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];Y(o,e)}function Bi(e){}function Mi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=$n;for(let c=0;c<t.length;c++){const d=t[c].toString(),m=new RegExp(`\\{${d}\\}`,"g");let p="";d==="QUEUE_item_image"?p=`${T}/${n}/3`:d==="QUEUE_item_title"?p=o:d==="QUEUE_item_artist"?p=i:d==="icons_menuOptionsButton"?p=nt:d==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(m,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Si=`<div class="LCDbody">
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
</div>`;function xi(){Ri(),Tt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ai(t)}),Ni(),D()&&document.getElementById("LCDbody").addEventListener("click",Di)}function Di(e){e.stopPropagation(),Y({param:"cheese"},e,"lcd_mobile_body")}function Ri(){let e="LCDbody",t=Si;for(const[o,i]of Object.entries(I)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Tt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,m;e=n.clientWidth,d=s(),m=e/o,m>d?c=d+10:c=m,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const m=d.offsetWidth;return document.body.removeChild(d),m}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Ai(e){e.stopPropagation(),e.target,Y([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Ni(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Ui)})}function Ui(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),$i(n)}function ji(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],S=[],_=0,It="",wt="",Ct="";document.getElementById("audio");document.getElementById("PLAYERsource");let L="off",Q="off",te="paused";function Lt(e){u=[],_=0,u=Me(e),u.length>0&&(te="playing",z())}function ki(e){u=[],_=0,u=Me(e),u.length>0&&(Q="off",Bt(),te="playing",z())}function Me(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Gi(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,_=n,Wi(o),u!==void 0&&u.length>0&&Qi(i)}async function Ji(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await ve(t),i=Me(o);if(n==="later")u=u.concat(i),S=S.concat(i);else if(n==="next"){let s=u.slice(0,_+1),a=u.slice(_+1);u=s,u=u.concat(i),u=u.concat(a),s=S.slice(0,_+1),a=S.slice(_+1),S=s,S=S.concat(i),S=S.concat(a)}$()}function be(){Hi()}function Hi(){const e=document.getElementById("audio");e.paused?(ne("playing"),te="playing",e.play().then(t=>xt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(te="paused",ne("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){be()});navigator.mediaSession.setActionHandler("pause",function(){be()});function Pt(){Rt()}function Ot(){At()}function qi(){document.getElementById("audio").addEventListener("ended",Vi)}function $i(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Yi(){Ki()}function Fi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:L,PLAYBACK_shuffle_state:Q,progress:t}}function Bt(){if(Q==="off"){Q="on",Ke(Q);const t=_+1;S=[...u],u.slice(0,_);const n=u.slice(t);Yn(n);const o=n.length;u.splice(_,o,...n),$()}else{Q="off",Ke(Q);const t=[...S],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(_=e);$()}}function z(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${T}/${u[_].url}/3`,e.load(),te==="playing"?(e.play().then(n=>xt()).catch(n=>console.log(n)),ne("playing")):ne("paused"),St(),Mt()}function Qi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${T}/${u[_].url}/3`,t.load(),t.currentTime=e,ne("paused"),St(),Mt()}function Mt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${De(s)}"`,c=`"${De(Math.floor(i))}"`,d=i/o*100,m=`${d}%`;ji(c,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=d,Dt()})}function St(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[_].song_name,t.innerHTML=u[_].song_name,n.innerHTML=u[_].project_contributors,Tt(),o.src=`${T}/${u[_].img}/3`,i.src=`${T}/${u[_].img}/3`,It=`${T}/${u[_].img}/5`,wt=u[_].song_name,Ct=u[_].project_contributors,$()}function xt(){let e=u[_];const t=[{src:`${T}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${T}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${T}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${T}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${T}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${T}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Dt()}function Dt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function zi(){console.log("PLAYBACK_stop_playback, clear top")}function Vi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>_+1&&(L=="off"||L=="on")?(_+=1,z()):L=="song"?z():t==_+1&&L=="on"?(_=0,z()):zi()}function Rt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>_+1&&(e.pause(),_+=1,z())}navigator.mediaSession.setActionHandler("nexttrack",function(){Rt()});function At(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,_>0&&(e.pause(),_-=1,z())}navigator.mediaSession.setActionHandler("previoustrack",function(){At()});function Ki(){L=="off"?(L="on",V(L)):L=="on"?(L="song",V(L)):(L="off",V(L))}function Wi(e){e=="off"?(L="off",V(L)):e=="on"?(L="on",V(L)):(e="song",L="on",V(L))}function Xi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Zi),t.addEventListener("click",es),n.addEventListener("click",ts),o.addEventListener("click",ns),i.addEventListener("click",os)}function Zi(){Bt()}function es(){Ot()}function ts(){be()}function ns(){Pt()}function os(){Yi()}function Ke(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function V(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=I.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=I.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=I.icons_loop_song;return}}function ne(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=I.icons_pause;return}if(e=="paused"){t.src=I.icons_play;return}}function is(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Nt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ss)})}function ss(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Nt(n)}function Nt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function as(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--text-third)",n.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="",n.style.backgroundColor="",e.style.opacity="0%"})}const rs=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,cs=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ds(){setTimeout(()=>{let e="MAINcontentPages",t=cs;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ls)},1)}async function ls(e){console.log("the signup event was caught"),e.preventDefault(),us();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${O}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const c=await convertImageToBase64(r);n[a.name]=c}}else n[a.name]=a.value;const s=await fetch(`${O}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();Ce(),ms(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";Ce(),We(),alert(s)}}catch{Ce(),We(),alert("There was an error, try again")}}function us(){const e=document.getElementById("spinner");e.style.display="block"}function Ce(){const e=document.getElementById("spinner");e.style.display="none"}function ms(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function We(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ue=!1,Xe=!1,Ze=!1,et=!1;async function ps(){await fs()?Ut():Xe||(gs(),Xe=!0)}function gs(){vs();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${O}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),tt(),ds()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ue)return!1;ue=!0;const a=o.value,r=i.value;try{await _s(a,r)?(et=!0,j("Login Successful","success"),Ut(),tt()):(et=!1,j("Error Logging In","error")),ue=!1}catch(c){console.error("Error:",c),ue=!1}return!1})}async function _s(e,t){try{return(await(await fetch(`${O}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?j("The server is down","error"):console.error(n),!1}}async function fs(){try{const e=await fetch(`${O}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&j("The server is down","error")}}function vs(){let e="MAINcontentPages",t=rs;document.getElementById(e).innerHTML+=t}function tt(){if(Ze===!0)return;Ze=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const O="/apis",T="/media";async function Ut(){qi(),Jn(),Hn(),xi(),Xi(),as(),is(),Lo(),hi(),Ao(),ro()}window.hasCodeRun||(ps(),window.hasCodeRun=!0);
