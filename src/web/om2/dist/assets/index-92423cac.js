(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ot="/assets/menu_options_button-a1d7bbe3.svg",Ht=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Yt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,$t=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Ft="/assets/volume_null-e39cf06f.svg",Qt="/assets/recently_added-a0a983c6.svg",Vt="/assets/volume_3-c8ab0a75.svg",zt="/assets/orange_music_text_logo_black-12e7386c.svg",Kt="/assets/volume_2-cfdac9da.svg",Wt="/assets/browse_2-85030bba.svg",Xt="/assets/volume_1-27e93416.svg",Zt="/assets/orange_music_logo_white-2a680ea2.svg",en="/assets/search_icon-4f5e4381.svg",tn="/assets/orange_music_text_logo_black-91f9e706.png",nn="/assets/up_next_queue_button-14fedba2.svg",on="/assets/orange_music_logo_yellow-a109ff64.svg",sn="/assets/playlist-c6e9024f.svg",an="/assets/loop_button-aef56865.svg",rn="/assets/help_icon-867fec9d.svg",cn="/assets/play_button-b1e2d3a4.svg",dn="/assets/browse-14744f27.svg",ln="/assets/orange_music_text_logo_white-7f0ba909.svg",un="/assets/back_button-8128cade.svg",mn="/assets/Albums-2e81dc74.svg",pn="/assets/songs-016b7188.svg",gn="/assets/orange_music_logo_black-4d7e4591.svg",_n="/assets/your_uploaded_songs-06535705.svg",fn="/assets/artist-ab677d43.svg",vn="/assets/shuffle_button-c2f06bc4.svg",En="/assets/orange_music_text_logo_white-4907051e.png",yn="/assets/listen_now-c7438154.svg",bn="/assets/derpy-21c20ae5.svg",hn="/assets/next_button-9a850710.svg",Tn="/assets/recently_added-7ff28139.svg",In="/assets/play_button-5eeedbe6.svg",Cn="/assets/browse-e8be8609.svg",wn="/assets/albums-681507b8.svg",Ln="/assets/listen_now.2-bfa293ac.svg",Pn="/assets/your_uploads-02e5c93c.svg",On="/assets/play_button.2-fc90fac7.svg",Bn="/assets/listen_now-fb02ffce.svg",Sn="/assets/browse.2-15b501dd.svg",Mn="/assets/place_holder_image-d4006a96.svg",xn="/assets/icons_MOGitems_add-19e679f7.svg",Dn="/assets/back-9279721d.svg",Rn="/assets/forwards-605bd405.svg",An="/assets/icons_close-57e87944.svg",Nn="/assets/icons_pause-8012f8cc.svg",jn="/assets/icons_loop-32d1576c.svg",Un="/assets/icons_loop_song-87f53dc7.svg",kn="/assets/icons_play-a5074c5b.svg",Gn="/assets/icons_settings-793063fb.svg",Jn="/assets/love-07ac5006.svg",qn="/assets/upload-3bad9145.svg",C={icons_volumeNull:Ft,icons_recentlyAdded:Qt,icons_volume3:Vt,icons_orangeMusicTextLogoBlack:zt,icons_volume2:Kt,icons_browse2:Wt,icons_volume1:Xt,icons_orangeMusicLogoWhite:Zt,icons_searchIcon:en,icons_orangeMusicTextLogoBlackPng:tn,icons_queueButton:nn,icons_orangeMusicLogoYellow:on,icons_playlist:sn,icons_loopButton:an,icons_helpIcon:rn,icons_playButton:cn,icons_browse:dn,icons_menuOptionsButton:ot,icons_orangeMusicTextLogoWhite:ln,icons_backButton:un,icons_Albums:mn,icons_songs:pn,icons_orangeMusicLogoBlack:gn,icons_yourUploadedSongs:_n,icons_artist:fn,icons_shuffleButton:vn,icons_orangeMusicTextLogoWhitePng:En,icons_listenNow:yn,icons_derpy:bn,icons_nextButton:hn,icons_recentlyAddedV2:Tn,icons_playButtonV2:In,icons_browseV2:Cn,icons_albumsV2:wn,icons_listenNow2V2:Ln,icons_yourUploads:Pn,icons_playButton2:On,icons_listenNowV2:Bn,icons_browse2V2:Sn,v3_placeholder:Mn,icons_MOGitems_add:xn,icons_back:Dn,icons_forwards:Rn,icons_close:An,icons_pause:Nn,icons_loop:jn,icons_loop_song:Un,icons_play:kn,icons_settings:Gn,current_year:new Date().getFullYear(),icons_love:Jn,icons_upload:qn};function Hn(){let e="topleftContentArea",t=Ht;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Yn(){let e="toprightContentArea",t=Yt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function $n(){let e="MAINcontentContainer",t=$t;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Fn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function it(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Qn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Re(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Vn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function st(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function Z(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function zn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Kn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Ae;const M=new Map;function Wn(e,t,n){M.has(e)||M.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!M.has(e))return;const r=Math.min(a/500,1);if(!M.has(e))return;const c=Xn(M.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||M.get(e).isChanging?M.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",M.delete(e))}clearTimeout(Ae),Ae=setTimeout(()=>{M.has(e)&&!M.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(M.get(e).animationFrameId),M.delete(e))},500),M.get(e).isChanging=!0;const i=Date.now();M.get(e).animationFrameId=requestAnimationFrame(o)}function Xn(e,t,n){return Zn(n,e,t)}function Zn(e,t,n){const o=function(y){return y=y.toString(16),y.length===1?"0"+y:y},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),m=Math.round(i*(1-n)+r*n),p=Math.round(s*(1-n)+c*n),E=Math.round(a*(1-n)+d*n);return"#"+o(m)+o(p)+o(E)}function eo(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=to(o,i,s),r=Ce(a[0]),c=Ce(a[1]),d=Ce(a[2]);return no({r,g:c,b:d})}function to(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Ce(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function no(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const oo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,io=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,so=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,ao=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,ro=`
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
`;let fe=!1;function co(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=ao,n.addEventListener("click",function(o){fe==!1?uo(o):ge()}),t.innerHTML=ro}function lo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Ne(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",fe==!0&&x.length>0||ge()}function de(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(x.length>0){t.innerHTML=x[0].file.name,n.innerHTML=Z(x[0].file.size*1.75),mo(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=x.length-1;o>=1;o--){const a=x[o].file.name,r=Z(x[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}}let je;function uo(e){fe=!0,je=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",ge),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const p=je.getBoundingClientRect();t=p.left+window.scrollX,n=p.top+window.scrollY;let E=t+"px",y=n+"px";o.style.left=E,o.style.top=y}const r=o.offsetWidth,c=o.offsetHeight,d=Tt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",m),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function m(p){(p.key==="Escape"||p.keyCode===27)&&(document.removeEventListener("keydown",m),ge())}}function ge(){fe=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function mo(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Ue=1500;let at=0,Pe=[],we;function U(e,t){const o=new Date().getTime();Pe.push({notificationText:e,notificationType:t,time:o}),rt()}function rt(){const t=new Date().getTime(),n=Pe.at(at);Pe.length>1?t-we>Ue?(ke(n.notificationText,n.notificationType),we=t):setTimeout(rt,Ue):(ke(n.notificationText,n.notificationType),we=t)}function ke(e,t){const n=document.getElementById("noticationContainer");let o;at+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const po=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,go=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,_o=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,ct=30;let ee=0;async function fo(){try{const e=document.getElementById("MAINcontentPages");vo();const t=await ft(ct,ee);ee+=t.length,Eo(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function dt(){ee=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",lt),e.innerHTML=""}function vo(){let e="MAINcontentPages",t=po;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Eo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=go;for(const[a,r]of Object.entries(C)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Ge(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){lt(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],m=r[d].project_id;console.log(m),ut(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await ft(ct,ee);ee+=d.length,d.length>0&&Ge(d)}})}function Ge(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,m=Vn(d);let p=_o;for(const[E,y]of Object.entries(C)){const u=new RegExp(`\\{${E}\\}`,"g");p=p.replace(u,y)}for(let E=0;E<i.length;E++){const y=i[E].toString(),u=new RegExp(`\\{${y}\\}`,"g");let g="";y==="MOG_image"?g=`${I}/${a}/3`:y==="MOG_text1"?g=r:y==="MOG_text2"?g=c:y==="MOG_checkedDate"?g=m:y==="MOGI_placeholder_itemID"&&(g=s),p=p.replace(u,g)}t.innerHTML+=p}}async function lt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await ve(i),a=JSON.parse(s);a.ProjectID=i,Ot(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;ut(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;G(`/projects/${i}`)}n.id==="MOGaddNewItem"&&yo()}function ut(e,t){e.stopPropagation(),$([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function yo(){G("/new-project/")}const bo=`<div class="ADMINusersTableInfoRow">
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
</div>`,ho=`<h1>Admin</h1>
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
</details>`,To=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function mt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){Io(a,r,c)}}function Io(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),$(o,e,n)}const Co=`<h1>General</h1>
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
<p>Double click your profile picture to change it.</p>`,Lo=`<div class="settings_container">
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
</div>`;let Se;async function Po(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Me("profile_picture"),n=`${I}/${t}/1`;Se=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Oo)}catch(t){console.error("Error initializing account image:",t)}}function Oo(e){e.stopPropagation(),Bo(e)}function Bo(e){$([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function So(){await Yo()}let pt="general";const me=[{name:"general",markup:Co,button_id:"settings_button_general",function:xo},{name:"user",markup:wo,button_id:"settings_button_user",function:Do},{name:"admin",markup:To,button_id:"settings_button_admin",function:Ro}];function Mo(){const e=document.getElementById("MAINcontentPages");let t=Lo;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Je(pt);for(var o=me.length-1;o>=0;o--){const i=me[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=me.find(m=>m.button_id===r).name;Je(d)})}n.addEventListener("click",function(){G("/")})}function gt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Je(e){pt=e;const t=["users_img"],n=document.getElementById("view_container"),o=me.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${I}/${Se}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function xo(){}function Do(){mt("user-id","settings_views_user_pfp_img","update_user_pfp")}let X=[];async function Ro(){if(await Me("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=ho;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");o=o.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${I}/${Se}/4/`),o=o.replace(r,c)}n.innerHTML=o,_t(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const a=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(a.value==""||r.value=="")U("Error Updating Column: empty inputs","error");else for(var c=X.length-1;c>=0;c--){const d=X[c];Ho(d,a.value,r.value)}})}let k;async function _t(){const e=await qo();k=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<k.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=k[n].username,s=k[n].uuid,a=k[n].verified,r=k[n].email;let c=k[n].storage_allowance;c=Z(c);const d=k[n].admin,m=n;let p=k[n].storage_used;p=Z(p);let E=bo,y=k[n].profile_picture;y=`${I}/${y}/1/`;for(let u=0;u<o.length;u++){const g=o[u].toString(),b=new RegExp(`\\{${g}\\}`,"g");let v="";g==="Username"?v=i:g==="Email"?v=r:g==="UUID"?v=s:g==="Verified"?v=a:g==="Space_Used"?v=p:g==="Storage_Allowance"?v=c:g==="profile_picture_url"?v=y:g==="checkbox_number"?v=m:g==="Admin"&&(v=d),E=E.replace(b,v)}t.innerHTML+=E}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Ao()})}function Ao(){X=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=k[i.id].uuid;X.push(a)}),o.innerHTML=`Selected Items: ${X.length}`}async function No(){const e=await Me("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;G(r),Ji(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=l,d=_,m=Vi();m.current_path=r,m.current_queue=c,m.current_index=d;const p=i(m);p!==o&&(Go("last_state",m),o=p,n.set("playback_states",p))}function a(){G(currentPath)}}function jo(){Et(),gt(),fo()}function Uo(e){dt(),gt(),Vo(e)}function qe(){dt(),Et(),Mo()}const He={"/":jo,"/new-project/":le,"/new-project":le,"/new/":le,"/new":le,"/projects/:projectID":Uo,"/settings/":qe,"/settings":qe};function ko(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){G("/")}}function G(e){const t=Object.keys(He);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=He[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}ko()}async function Go(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${B}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Jo(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${B}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&U("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Me(e){try{return(await(await fetch(`${B}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function te(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${B}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function ve(e){try{return(await(await fetch(`${B}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function ft(e,t){try{const i=(await(await fetch(`${B}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function le(){try{const o=`/projects/${(await(await fetch(`${B}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;G(o)}catch(e){console.error("Error:",e)}}async function qo(){try{return(await(await fetch(`${B}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Ho(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${B}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){U("Table Updated Successfully","success"),_t();return}else{U(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){U(`Error Updating Column ${t}: ${o}`,"error");return}}async function Yo(){try{const t=await(await fetch(`${B}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const $o=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Fo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Qo=`<div class="PROJECTviewContainerEnvironment">
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
        <div style="position: relative; height: 20rem; width: calc(100% - 2rem); background: var(--grey); border-radius: 2px 2px 0px 0px; padding: 1rem; overflow: hidden;"></div>
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
</div>`;let Ye;function vt(e){return new Promise((t,n)=>{Ye=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){$e(),t("delete")}function d(){Ye.focus(),$e(),t("cancel")}i.addEventListener("click",m=>{const p=m.target;p===a?c():(p===r||p===i)&&d()}),o==="keyboard"&&!D()?r.focus():o=="mouse"&&!D()&&(q(),r.focus(),r.blur())})}function $e(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const x=[];let pe=!1,Fe=!0,f,Ee=!1;async function Vo(e){let t;Ee=!0,it()==!0?t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Ko(t),sessionStorage.setItem("description","."),Qe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{G("/")});const o=await ve(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,f=s,i(),zo()}function i(){Oe(),sessionStorage.setItem("description",f.Description),Qe(),Wo(),Zo(),ei(),ti(),yt(),ui(),ht(f.ProjectName),mt(f.ProjectID,"PROJECTviewDisplayImage","update_project_image"),di()}}function Et(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Ee=!1}async function ye(){if(!Ee)return;const e=f.ProjectID,t=await ve(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,f=n,yt();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${I}/${f.PictureURL}/5`;o.src=i}}function Oe(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),i=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year"),s=`${I}/${f.PictureURL}/5`;e.innerText=f.ProjectName,t.innerText=f.ProjectContributors,n.src=s,o.innerText=f.ProjectName,i.innerText=`${f.ProjectContributors} | ${st(f.TimeCreated)}`}function zo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(ht(s),te(f.ProjectID,"project_name",s),f.ProjectName=s,Oe())}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(te(f.ProjectID,"project_contributors",s),f.ProjectContributors=s,Oe())})}function Ko(e){let t="MAINcontentPages",n=Qo;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=st(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${I}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function Qe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Wo(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",D()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Xo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Zo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function ei(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Ve(f)}),t.addEventListener("click",function(n){n.target===t&&Ve(f)})}function Ve(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),te(e.ProjectID,"description",n),o.style.display="none",Xo(),i.style.zIndex=""}async function ti(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){Ot(f)}),t.addEventListener("click",function(){Gi(f)}),n.addEventListener("click",function(){ze(event)}),o.addEventListener("click",function(){ze(event)})}function ze(e){e.stopPropagation(),e.target;const t=f.ProjectID;$([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],e)}async function ni(e){const t=`Are you sure that you want to delete <em><b>${f.ProjectName}</b></em>? This action is not reversable.`,n=await vt(t);if(n==="cancel")q();else if(n==="delete"){const o="/";await oi(),q(),G(o)}else q()}async function oi(e){const t=f.ProjectID;try{const o=await(await fetch(`${B}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function yt(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),ri();const t=document.getElementById("PROJECTview-projectTable"),n=f.ProjectJSON,o=eo("--orange"),i=u=>`#${u.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(g=>parseInt(g,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const u of n)a.push({img:f.PictureURL,songTitle:u.SongName,artistName:f.ProjectContributors,projectName:Z(u.FolderSize),songDuration:`${Math.floor(u.Duration/60)}:${(u.Duration%60).toString().padStart(2,"0")}`,songSequence:u.SongSequence,version:u.Version,url:u.URL});for(let u=0;u<a.length;u++){a[u].ProjectID=u;const g=a[u],b=ci(g);t.insertAdjacentHTML("beforeend",b);const v=t.lastElementChild;v.addEventListener("dragstart",r),v.addEventListener("dragover",d),v.addEventListener("drop",m)}function r(u){u.dataTransfer.setData("text/plain",u.target.dataset.rowId),u.dataTransfer.getData("text/plain"),s=u.srcElement,zn(u.srcElement)}const c=Kn(Wn,0);function d(u){u.preventDefault(),u.dataTransfer.dropEffect="move";const g=u.target.closest(".PROJECTview-projectTable-rowContainer");if(g!==s){const b=getComputedStyle(g).backgroundColor,v=i(b);c(g,v,o)}}function m(u){u.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const g=u.dataTransfer.getData("text/plain"),b=document.querySelector(`[data-row-id="${g}"]`),v=u.target.closest(".PROJECTview-projectTable-rowContainer");if(v){const T=v.getAttribute("data-row-id");v.before(b);const N=`${g}|${T}`;setTimeout(async()=>{await te(f.ProjectID,"SongsTableChangeSongSequenceOrder",N),ye()},1)}}t.addEventListener("click",function(u){const g=u.target;if(u.stopPropagation(),g.tagName==="BUTTON"){const b=g.closest(".PROJECTview-projectTable-rowContainer");b&&(b.getAttribute("data-row-id"),ii(u))}});const p=t.querySelectorAll("[contenteditable]"),E=[],y=u=>{const b=u.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),v=u.target.textContent,T=E.find(L=>L.dataRowIDField===b);if((T?T.currentText:"Row ID not found")==v)return;for(var S=E.length-1;S>=0;S--)E[S].dataRowIDField===b&&(E[S].currentText=v);const w=`${b}-${v}`;te(f.ProjectID,"project_song_title",w)};p.forEach(u=>{u.addEventListener("blur",y),E.push({dataRowIDField:u.parentElement.parentElement.getAttribute("data-row-id"),currentText:u.innerText})})}function ii(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;$([{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],e)}function si(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=f;const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,Hi(i,o)}async function ai(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`,n=await vt(t);n==="cancel"||(n==="delete"?(await Jo(f.ProjectID,e.songID),q(),ye()):console.error("a statement was returned that isn't valid"))}function ri(){let e="PROJECTview_projectAreaContainer",t=$o;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function ci(e){let t=Fo;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${I}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Fe===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Fe===!1&&(a=!1),t=t.replace(s,a)}return t}function di(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){li(o)}}async function bt(e,t){const n=new FormData,o=new XMLHttpRequest;pe=!0,lo(),n.append("file",e),n.append("project_id",t),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;de(s),s===100&&de(s)}},o.onload=async function(){if(o.responseText=="StorageLimit Reached"){U("Storage limit reached","error");for(var s=x.length-1;s>=0;s--)x.shift();pe=!1,Ne(),de(0)}if(pe=!1,x.shift(),Ne(),de(0),x.length>0){const a=x[0];await bt(a.file,a.ProjectID)}f.ProjectID==t&&Ee==!0&&ye()},o.onerror=function(){U("Upload Failed","error")},o.open("POST",`${B}/files/upload_audio/${t}`,!0),o.send(n)}async function li(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:f.ProjectID,file:n};if(x.push(o),!pe){const i=x[0];await bt(i.file,i.ProjectID)}}}function ht(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function ui(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!D()||!r.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const mi=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function pi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&U("Storage limit reached","error"),n!=="update_user_pfp"?Ei():(yi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${B}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function gi(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await pi(o,t,n)}const _i=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let _e,Y=!1;function $(e,t,n){n===void 0?vi(e,t):n!==void 0&&n==="update_project_image"?Ke(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Ke(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?fi():console.log("invalid menu display inputs")}function fi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=so;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[O,A]of Object.entries(C)){const j=new RegExp(`\\{${O}\\}`,"g");i=i.replace(j,A)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),E=s.duration,u=s.currentTime/E*100,g=document.getElementById("LCDMB_seek_input"),b=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const v=document.getElementById("LCDMB_back"),T=document.getElementById("LCDMB_play"),N=document.getElementById("LCDMB_play_icon"),S=document.getElementById("LCDMB_next"),w=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{L(),Y===!0&&J()}),L(),R(),b.style.width=`${u}%`,s.addEventListener("timeupdate",()=>{const O=s.duration,j=s.currentTime/O*100;b.style.width=`${j}%`}),g.addEventListener("input",function(){const O=s.duration,A=g.value;s.currentTime=O*(A/100)}),v.addEventListener("click",()=>{St(),L(),Y===!0&&J()}),T.addEventListener("click",()=>{he(),L(),R()}),S.addEventListener("click",()=>{Bt(),L(),Y===!0&&J()}),w.addEventListener("click",()=>{Y===!1?(xe(),Y=!0):(De(),Y=!1)}),Y===!0?xe():De(),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1);function L(){p.src=wt,d.innerText=Lt,m.innerText=Pt}function R(){s.paused?N.src=C.icons_playButtonV2:N.src=C.icons_derpy}function J(){const O=document.getElementById("LCD_mobile_queue_content_container");O.innerHTML="";for(let A=_+1;A<l.length;A++){const j=l[A],ae=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],W=j.img,Gt=j.song_name,Jt=j.project_contributors;let Te=io;for(let Ie=0;Ie<ae.length;Ie++){const re=ae[Ie].toString(),qt=new RegExp(`\\{${re}\\}`,"g");let ce="";re==="queue_item_img"?ce=`${I}/${W}/3`:re==="queue_item_song_name"?ce=Gt:re==="queue_item_song_artist"&&(ce=Jt),Te=Te.replace(qt,ce)}O.innerHTML+=Te}}function xe(){function O(A){A.forEach(j=>{document.querySelectorAll("."+j).forEach(W=>{W.classList.add("queue_visible")})})}O(a),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se),J()}function De(){function O(A){A.forEach(j=>{document.querySelectorAll("."+j).forEach(W=>{W.classList.remove("queue_visible")})})}O(a),o.addEventListener("touchstart",oe,!1),o.addEventListener("touchmove",ie,!1),o.addEventListener("touchend",se,!1)}function oe(O){Y===!1&&(r=O.touches[0].clientY)}function ie(O){O.preventDefault()}function se(O){c=O.changedTouches[0].clientY,c-r>70&&(q(),o.removeEventListener("touchstart",oe),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",se))}}function vi(e,t){_e=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");D()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=_i,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",It),r.style.left=c,r.style.top=d;let m="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(m="keyboard"):t.pointerType!=="mouse"&&(m="keyboard"),m=="keyboard"){const T=_e.getBoundingClientRect();n=T.left+window.scrollX,o=T.top+window.scrollY;let N=n+"px",S=o+"px";r.style.left=N,r.style.top=S}for(let T=0;T<e.length;T++)bi(e[T]);const E=r.children[0],y=r.offsetWidth,u=r.offsetHeight,g=Tt("MENUmodalBody"),b=r.getElementsByClassName("MENUmodalItemContainer");m==="keyboard"&&!D()?E.focus():m=="mouse"&&!D()&&(E.focus(),E.blur()),document.addEventListener("keydown",v),g.xOverflow==!0&&(c=n-y+"px",r.style.left=c),g.yOverflow==!0&&(d=o-u+"px",r.style.top=d);for(let T=0;T<b.length;T++){const N=b[T];N.setAttribute("data-menu-item-id",T),N.addEventListener("click",function(S){S.stopPropagation();const L=S.target.getAttribute("data-menu-item-id"),R=e[L].function,J=e[L].optionalParams;if(R=="TEST")console.log("the button worked",J);else if(R!="None"){hi[R](J);return}else return})}function v(T){(T.key==="Escape"||T.keyCode===27)&&(document.removeEventListener("keydown",v),q())}}function Ke(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";D()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=oo,r.style.display="block",r.addEventListener("click",It);const m=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),E=document.getElementById("MENUmodalBody_image_select_file_select_button"),y=document.getElementById("MENUmodalBody_image_select_preview_area"),u=document.getElementById("MENUmodalBody_image_select_submit_button"),g=document.getElementById("MENUmodalBody_image_select_submit_button_container");m.style.left=c,m.style.top=d;let b,v;function T(w,L){return function(){const R=this,J=arguments;clearTimeout(v),v=setTimeout(()=>{w.apply(R,J)},L)}}function N(w,L,R){T(gi,100)(w,L,R)}function S(w){if(b){const L=URL.createObjectURL(b),R=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");y.src=L,u.style.visibility="visible",g.style.outline="3px solid var(--primary)",u.addEventListener("click",()=>{N(b,w.project_id,w.MenuType),R.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",w=>{w.preventDefault()}),p.addEventListener("drop",w=>{w.preventDefault(),b=w.dataTransfer.files[0],S(e)}),E.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept="image/*",w.addEventListener("change",L=>{b=L.target.files[0],S(e)}),w.click()})}function Ei(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",q(),ye()}function yi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",q()}function Tt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let m=!1,p=!1;return c>n&&(m=!0),d>o&&(p=!0),{xOverflow:m,yOverflow:p}}function bi(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",D()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=mi.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(C)){const m=new RegExp(`\\{${c}\\}`,"g");a=a.replace(m,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function It(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function q(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),_e&&_e.focus()}const hi={PROJECT_VIEW_delete_project(e){ni()},PLAYBACK_add_songs_to_queue(e){qi(e)},SIGN_OUT_USER(e){So()},OPEN_SETTINGS_PAGE(e){G("/settings/")},PROJECT_VIEW_delete_song(e){ai(e)},PROJECT_VIEW_add_song_to_queue(e){si(e)}};let F="hidden";function Ti(){$n();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Be(F),e.addEventListener("click",Ii),t.addEventListener("click",Ci),H()}function Ii(){if(F==="hidden"){F="visible",Be(F);return}if(F==="visible"){F="hidden",Be(F);return}}function Be(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",it&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function H(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=_+1;t<l.length;t++){l[t].id=t;const n=l[t],o=Mi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Si),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Oi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Bi(r)}),i.addEventListener("dragstart",wi),i.addEventListener("dragover",Li),i.addEventListener("drop",Pi),e.appendChild(i)}}function Ci(){const e=_+1;e>=0&&e<l.length?l.splice(e):l.length=0,H()}function wi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Li(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Pi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=l.find(r=>r.id===parseInt(t)),i=l.find(r=>r.id===parseInt(n.dataset.songId)),s=l.indexOf(o),a=l.indexOf(i);s!==-1&&a!==-1&&(l.splice(s,1),l.splice(a,0,o),h.splice(s,1),h.splice(a,0,o),H())}function Oi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=l.findIndex(i=>i.id===n);o!==-1&&(l.splice(o,1),h.splice(o,1)),H()}function Bi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];$(o,e)}function Si(e){}function Mi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Fn;for(let c=0;c<t.length;c++){const d=t[c].toString(),m=new RegExp(`\\{${d}\\}`,"g");let p="";d==="QUEUE_item_image"?p=`${I}/${n}/3`:d==="QUEUE_item_title"?p=o:d==="QUEUE_item_artist"?p=i:d==="icons_menuOptionsButton"?p=ot:d==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(m,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const xi=`<div class="LCDbody">
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
</div>`;function Di(){Ai(),Ct(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ni(t)}),ji(),D()&&document.getElementById("LCDbody").addEventListener("click",Ri)}function Ri(e){e.stopPropagation(),$({param:"cheese"},e,"lcd_mobile_body")}function Ai(){let e="LCDbody",t=xi;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Ct(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,m;e=n.clientWidth,d=s(),m=e/o,m>d?c=d+10:c=m,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const m=d.offsetWidth;return document.body.removeChild(d),m}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Ni(e){e.stopPropagation(),e.target,$([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function ji(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Ui)})}function Ui(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Fi(n)}function ki(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let l=[],h=[],_=0,wt="",Lt="",Pt="";document.getElementById("audio");document.getElementById("PLAYERsource");let P="off",Q="off",ne="paused";function Ot(e){l=[],_=0,l=be(e),l.length>0&&(ne="playing",V())}function Gi(e){l=[],_=0,l=be(e),l.length>0&&(Q="off",Mt(),ne="playing",V())}function be(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Ji(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;l=t,_=n,Zi(o),l!==void 0&&l.length>0&&zi(i)}async function qi(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await ve(t),i=JSON.parse(o);i.ProjectID=t;const s=be(i);if(n==="later")l=l.concat(s),h=h.concat(s);else if(n==="next"){let a=l.slice(0,_+1),r=l.slice(_+1);l=a,l=l.concat(s),l=l.concat(r),a=h.slice(0,_+1),r=h.slice(_+1),h=a,h=h.concat(s),h=h.concat(r)}H()}async function Hi(e,t){const n=be(e);if(t==="later")l=l.concat(n),h=h.concat(n);else if(t==="next"){let o=l.slice(0,_+1),i=l.slice(_+1);l=o,l=l.concat(n),l=l.concat(i),o=h.slice(0,_+1),i=h.slice(_+1),h=o,h=h.concat(n),h=h.concat(i)}H()}function he(){Yi()}function Yi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(K("playing"),ne="playing",e.play().then(n=>Rt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(ne="paused",K("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){he()});navigator.mediaSession.setActionHandler("pause",function(){he()});function Bt(){Nt()}function St(){jt()}function $i(){document.getElementById("audio").addEventListener("ended",Wi)}function Fi(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Qi(){Xi()}function Vi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:P,PLAYBACK_shuffle_state:Q,progress:t}}function Mt(){if(Q==="off"){Q="on",We(Q);const t=_+1;h=[...l],l.slice(0,_);const n=l.slice(t);Qn(n);const o=n.length;l.splice(_,o,...n),H()}else{Q="off",We(Q);const t=[...h],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];l=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(_=e);H()}}function V(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${I}/${l[_].url}/3`,e.load(),ne==="playing"?(e.play().then(o=>Rt()).catch(o=>console.log(o)),K("playing")):K("paused"),Dt(),xt()}function zi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${I}/${l[_].url}/3`,t.load(),t.currentTime=e,K("paused"),Dt(),xt()}function xt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Re(s)}"`,c=`"${Re(Math.floor(i))}"`,d=i/o*100,m=`${d}%`;ki(c,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=d,At()})}function Dt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=l[_].song_name,t.innerHTML=l[_].song_name,n.innerHTML=l[_].project_contributors,Ct(),o.src=`${I}/${l[_].img}/3`,i.src=`${I}/${l[_].img}/3`,wt=`${I}/${l[_].img}/5`,Lt=l[_].song_name,Pt=l[_].project_contributors,H()}function Rt(){let e=l[_];const t=[{src:`${I}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),At()}function At(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Ki(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",K("paused"),l=[],h=[],_=0,t.src="http://null.com/null"}function Wi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=l.length;e.pause(),t>_+1&&(P=="off"||P=="on")?(_+=1,V()):P=="song"?V():t==_+1&&P=="on"?(_=0,V()):Ki()}function Nt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),l.length>_+1&&(e.pause(),_+=1,V())}navigator.mediaSession.setActionHandler("nexttrack",function(){Nt()});function jt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),l.length,e.currentTime>2){e.currentTime=0;return}else if(_>0){e.pause(),_-=1,V();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){jt()});function Xi(){P=="off"?(P="on",z(P)):P=="on"?(P="song",z(P)):(P="off",z(P))}function Zi(e){e=="off"?(P="off",z(P)):e=="on"?(P="on",z(P)):(e="song",P="on",z(P))}function es(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",ts),t.addEventListener("click",ns),n.addEventListener("click",os),o.addEventListener("click",is),i.addEventListener("click",ss)}function ts(){Mt()}function ns(){St()}function os(){he()}function is(){Bt()}function ss(){Qi()}function We(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function z(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function K(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function as(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Ut(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",rs)})}function rs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Ut(n)}function Ut(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function cs(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--text-third)",n.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="",n.style.backgroundColor="",e.style.opacity="0%"})}const ds=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,ls=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function us(){setTimeout(()=>{let e="MAINcontentPages",t=ls;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ms)},1)}async function ms(e){console.log("the signup event was caught"),e.preventDefault(),ps();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${B}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const c=await convertImageToBase64(r);n[a.name]=c}}else n[a.name]=a.value;const s=await fetch(`${B}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();Le(),gs(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";Le(),Xe(),alert(s)}}catch{Le(),Xe(),alert("There was an error, try again")}}function ps(){const e=document.getElementById("spinner");e.style.display="block"}function Le(){const e=document.getElementById("spinner");e.style.display="none"}function gs(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Xe(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ue=!1,Ze=!1,et=!1,tt=!1;async function _s(){await Es()?kt():Ze||(fs(),Ze=!0)}function fs(){ys();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${B}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),nt(),us()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ue)return!1;ue=!0;const a=o.value,r=i.value;try{await vs(a,r)?(tt=!0,U("Login Successful","success"),kt(),nt()):(tt=!1,U("Error Logging In","error")),ue=!1}catch(c){console.error("Error:",c),ue=!1}return!1})}async function vs(e,t){try{return(await(await fetch(`${B}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?U("The server is down","error"):console.error(n),!1}}async function Es(){try{const e=await fetch(`${B}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&U("The server is down","error")}}function ys(){let e="MAINcontentPages",t=ds;document.getElementById(e).innerHTML+=t}function nt(){if(et===!0)return;et=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const B="/apis",I="/media";async function kt(){$i(),Hn(),Yn(),Di(),es(),cs(),as(),Po(),Ti(),No(),co()}window.hasCodeRun||(_s(),window.hasCodeRun=!0);