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
</div>`,Yt="/assets/volume_null-e39cf06f.svg",$t="/assets/recently_added-a0a983c6.svg",Qt="/assets/volume_3-c8ab0a75.svg",Ft="/assets/orange_music_text_logo_black-12e7386c.svg",zt="/assets/volume_2-cfdac9da.svg",Vt="/assets/browse_2-85030bba.svg",Kt="/assets/volume_1-27e93416.svg",Wt="/assets/orange_music_logo_white-2a680ea2.svg",Xt="/assets/search_icon-4f5e4381.svg",Zt="/assets/orange_music_text_logo_black-91f9e706.png",en="/assets/up_next_queue_button-14fedba2.svg",tn="/assets/orange_music_logo_yellow-a109ff64.svg",nn="/assets/playlist-c6e9024f.svg",on="/assets/loop_button-aef56865.svg",sn="/assets/help_icon-867fec9d.svg",an="/assets/play_button-b1e2d3a4.svg",rn="/assets/browse-14744f27.svg",cn="/assets/orange_music_text_logo_white-7f0ba909.svg",dn="/assets/back_button-8128cade.svg",ln="/assets/Albums-2e81dc74.svg",un="/assets/songs-016b7188.svg",mn="/assets/orange_music_logo_black-4d7e4591.svg",pn="/assets/your_uploaded_songs-06535705.svg",gn="/assets/artist-ab677d43.svg",_n="/assets/shuffle_button-c2f06bc4.svg",fn="/assets/orange_music_text_logo_white-4907051e.png",vn="/assets/listen_now-c7438154.svg",En="/assets/derpy-21c20ae5.svg",yn="/assets/next_button-9a850710.svg",hn="/assets/recently_added-7ff28139.svg",bn="/assets/play_button-5eeedbe6.svg",Tn="/assets/browse-e8be8609.svg",In="/assets/albums-681507b8.svg",wn="/assets/listen_now.2-bfa293ac.svg",Cn="/assets/your_uploads-02e5c93c.svg",Ln="/assets/play_button.2-fc90fac7.svg",Pn="/assets/listen_now-fb02ffce.svg",Bn="/assets/browse.2-15b501dd.svg",On="/assets/place_holder_image-d4006a96.svg",Sn="/assets/icons_MOGitems_add-19e679f7.svg",Mn="/assets/back-9279721d.svg",xn="/assets/forwards-605bd405.svg",Dn="/assets/icons_close-57e87944.svg",Rn="/assets/icons_pause-8012f8cc.svg",An="/assets/icons_loop-32d1576c.svg",Nn="/assets/icons_loop_song-87f53dc7.svg",Un="/assets/icons_play-a5074c5b.svg",jn="/assets/icons_settings-793063fb.svg",kn="/assets/love-07ac5006.svg",Gn="/assets/upload-3bad9145.svg",C={icons_volumeNull:Yt,icons_recentlyAdded:$t,icons_volume3:Qt,icons_orangeMusicTextLogoBlack:Ft,icons_volume2:zt,icons_browse2:Vt,icons_volume1:Kt,icons_orangeMusicLogoWhite:Wt,icons_searchIcon:Xt,icons_orangeMusicTextLogoBlackPng:Zt,icons_queueButton:en,icons_orangeMusicLogoYellow:tn,icons_playlist:nn,icons_loopButton:on,icons_helpIcon:sn,icons_playButton:an,icons_browse:rn,icons_menuOptionsButton:nt,icons_orangeMusicTextLogoWhite:cn,icons_backButton:dn,icons_Albums:ln,icons_songs:un,icons_orangeMusicLogoBlack:mn,icons_yourUploadedSongs:pn,icons_artist:gn,icons_shuffleButton:_n,icons_orangeMusicTextLogoWhitePng:fn,icons_listenNow:vn,icons_derpy:En,icons_nextButton:yn,icons_recentlyAddedV2:hn,icons_playButtonV2:bn,icons_browseV2:Tn,icons_albumsV2:In,icons_listenNow2V2:wn,icons_yourUploads:Cn,icons_playButton2:Ln,icons_listenNowV2:Pn,icons_browse2V2:Bn,v3_placeholder:On,icons_MOGitems_add:Sn,icons_back:Mn,icons_forwards:xn,icons_close:Dn,icons_pause:Rn,icons_loop:An,icons_loop_song:Nn,icons_play:Un,icons_settings:jn,current_year:new Date().getFullYear(),icons_love:kn,icons_upload:Gn};function Jn(){let e="topleftContentArea",t=Jt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Hn(){let e="toprightContentArea",t=Ht;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function qn(){let e="MAINcontentContainer",t=qt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Yn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function j(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function ot(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function $n(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Ae(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Qn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Fn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function Z(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function zn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Vn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Ne;const S=new Map;function Kn(e,t,n){S.has(e)||S.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!S.has(e))return;const r=Math.min(a/500,1);if(!S.has(e))return;const c=Wn(S.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||S.get(e).isChanging?S.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",S.delete(e))}clearTimeout(Ne),Ne=setTimeout(()=>{S.has(e)&&!S.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(S.get(e).animationFrameId),S.delete(e))},500),S.get(e).isChanging=!0;const i=Date.now();S.get(e).animationFrameId=requestAnimationFrame(o)}function Wn(e,t,n){return Xn(n,e,t)}function Xn(e,t,n){const o=function(y){return y=y.toString(16),y.length===1?"0"+y:y},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),m=Math.round(i*(1-n)+r*n),g=Math.round(s*(1-n)+c*n),E=Math.round(a*(1-n)+d*n);return"#"+o(m)+o(g)+o(E)}function Zn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=eo(o,i,s),r=be(a[0]),c=be(a[1]),d=be(a[2]);return to({r,g:c,b:d})}function eo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function be(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function to(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const no=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
`;let fe=!1;function ro(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=so,n.addEventListener("click",function(o){fe==!1?lo(o):_e()}),t.innerHTML=ao}function co(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Ue(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",fe==!0&&x.length>0||_e()}function le(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(x.length>0){t.innerHTML=x[0].file.name,n.innerHTML=Z(x[0].file.size*1.75),uo(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=x.length-1;o>=1;o--){const a=x[o].file.name,r=Z(x[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}}let je;function lo(e){fe=!0,je=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",_e),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const g=je.getBoundingClientRect();t=g.left+window.scrollX,n=g.top+window.scrollY;let E=t+"px",y=n+"px";o.style.left=E,o.style.top=y}const r=o.offsetWidth,c=o.offsetHeight,d=Se("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",m),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function m(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",m),_e())}}function _e(){fe=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function uo(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const ke=1500;let it=0,we=[],Te;function k(e,t){const o=new Date().getTime();we.push({notificationText:e,notificationType:t,time:o}),st()}function st(){const t=new Date().getTime(),n=we.at(it);we.length>1?t-Te>ke?(Ge(n.notificationText,n.notificationType),Te=t):setTimeout(st,ke):(Ge(n.notificationText,n.notificationType),Te=t)}function Ge(e,t){const n=document.getElementById("noticationContainer");let o;it+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const mo=`<div class="MOG-container" id="MOGcontainer">
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
</button>`,at=15;let ee=0;async function _o(){try{const e=document.getElementById("MAINcontentPages");fo();const t=await gt(at,ee);ee+=t.length,vo(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function rt(){ee=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",ct),e.innerHTML=""}function fo(){let e="MAINcontentPages",t=mo;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function vo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=po;for(const[a,r]of Object.entries(C)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Je(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){ct(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],m=r[d].project_id;console.log(m),dt(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await gt(at,ee);ee+=d.length,d.length>0&&Je(d)}})}function Je(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,m=Qn(d);let g=go;for(const[E,y]of Object.entries(C)){const l=new RegExp(`\\{${E}\\}`,"g");g=g.replace(l,y)}for(let E=0;E<i.length;E++){const y=i[E].toString(),l=new RegExp(`\\{${y}\\}`,"g");let p="";y==="MOG_image"?p=`${w}/${a}/3`:y==="MOG_text1"?p=r:y==="MOG_text2"?p=c:y==="MOG_checkedDate"?p=m:y==="MOGI_placeholder_itemID"&&(p=s),g=g.replace(l,p)}t.innerHTML+=g}}async function ct(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await ve(i);Lt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;dt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;G(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Eo()}function dt(e,t){e.stopPropagation(),Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Eo(){G("/new-project/")}const yo=`<div class="ADMINusersTableInfoRow">
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
</details>`,bo=`<h1>Admin</h1>
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
</div>`;let Le;async function Lo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Pe("profile_picture"),n=`${w}/${t}/1`;Le=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Po)}catch(t){console.error("Error initializing account image:",t)}}function Po(e){e.stopPropagation(),Bo(e)}function Bo(e){Y([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Oo(){await Ho()}let ut="general";const pe=[{name:"general",markup:Io,button_id:"settings_button_general",function:Mo},{name:"user",markup:wo,button_id:"settings_button_user",function:xo},{name:"admin",markup:bo,button_id:"settings_button_admin",function:Do}];function So(){const e=document.getElementById("MAINcontentPages");let t=Co;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");He(ut);for(var o=pe.length-1;o>=0;o--){const i=pe[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=pe.find(m=>m.button_id===r).name;He(d)})}n.addEventListener("click",function(){G("/")})}function mt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function He(e){ut=e;const t=["users_img"],n=document.getElementById("view_container"),o=pe.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${w}/${Le}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function Mo(){}function xo(){lt("user-id","settings_views_user_pfp_img","update_user_pfp")}let X=[];async function Do(){if(await Pe("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=ho;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");o=o.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${w}/${Le}/4/`),o=o.replace(r,c)}n.innerHTML=o,pt(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const a=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(a.value==""||r.value=="")k("Error Updating Column: empty inputs","error");else for(var c=X.length-1;c>=0;c--){const d=X[c];Jo(d,a.value,r.value)}})}let U;async function pt(){const e=await Go();U=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<U.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=U[n].username,s=U[n].uuid,a=U[n].verified,r=U[n].email;let c=U[n].storage_allowance;c=Z(c);const d=U[n].admin,m=n;let g=U[n].storage_used;g=Z(g);let E=yo,y=U[n].profile_picture;y=`${w}/${y}/1/`;for(let l=0;l<o.length;l++){const p=o[l].toString(),_=new RegExp(`\\{${p}\\}`,"g");let f="";p==="Username"?f=i:p==="Email"?f=r:p==="UUID"?f=s:p==="Verified"?f=a:p==="Space_Used"?f=g:p==="Storage_Allowance"?f=c:p==="profile_picture_url"?f=y:p==="checkbox_number"?f=m:p==="Admin"&&(f=d),E=E.replace(_,f)}t.innerHTML+=E}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Ro()})}function Ro(){X=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=U[i.id].uuid;X.push(a)}),o.innerHTML=`Selected Items: ${X.length}`}async function Ao(){const e=await Pe("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;G(r),Ni(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=u,d=v,m=Hi();m.current_path=r,m.current_queue=c,m.current_index=d;const g=i(m);g!==o&&(ko("last_state",m),o=g,n.set("playback_states",g))}function a(){G(currentPath)}}function No(){_t(),mt(),_o()}function Uo(e){rt(),mt(),Qo(e)}function qe(){rt(),_t(),So()}const Ye={"/":No,"/new-project/":ue,"/new-project":ue,"/new/":ue,"/new":ue,"/projects/:projectID":Uo,"/settings/":qe,"/settings":qe};function jo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){G("/")}}function G(e){const t=Object.keys(Ye);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ye[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}jo()}async function ko(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${O}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Pe(e){try{return(await(await fetch(`${O}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function te(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${O}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function ve(e){try{return(await(await fetch(`${O}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function gt(e,t){try{const i=(await(await fetch(`${O}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function ue(){try{const o=`/projects/${(await(await fetch(`${O}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;G(o)}catch(e){console.error("Error:",e)}}async function Go(){try{return(await(await fetch(`${O}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Jo(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${O}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){k("Table Updated Successfully","success"),pt();return}else{k(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){k(`Error Updating Column ${t}: ${o}`,"error");return}}async function Ho(){try{const t=await(await fetch(`${O}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const qo=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
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
    <div class="PROJECTview-projectTable-rowItem-4" style="user-select: none; pointer-events: none;">
        <div style="user-select: none; pointer-events: none;">{PROJECTviewRow_songDuration}</div>
        <button tabindex="0">
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,$o=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,x=[];let ge=!1,$e=!0,T,Be=!1;async function Qo(e){let t;Be=!0,ot()==!0?t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Hi!",ProjectContributors:"Loading",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Vo(t),sessionStorage.setItem("description","Wonderful notes are loading..."),Qe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{G("/")});const o=await ve(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,T=s,i(),zo()}function i(){Fo(),sessionStorage.setItem("description",T.Description),Qe(),Ko(),Xo(),Zo(),ei(),ft(),ci(),Et(T.ProjectName),lt(T.ProjectID,"PROJECTviewDisplayImage","update_project_image"),ai()}}function _t(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Be=!1}async function Oe(){const e=T.ProjectID,t=await ve(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,T=n,ft();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${w}/${T.PictureURL}/5`;o.src=i}}function Fo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${w}/${T.PictureURL}/5`;e.innerText=T.ProjectName,t.innerText=T.ProjectContributors,n.src=o}function zo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(Et(s),te(T.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(te(T.ProjectID,"project_contributors",s),o=s)})}function Vo(e){let t="MAINcontentPages",n=$o;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=Fn(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${w}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function Qe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Ko(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",j()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Wo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Xo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Zo(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Fe(T)}),t.addEventListener("click",function(n){n.target===t&&Fe(T)})}function Fe(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),te(e.ProjectID,"description",n),o.style.display="none",Wo(),i.style.zIndex="1"}async function ei(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){Lt(T)}),t.addEventListener("click",function(){Ai(T)}),n.addEventListener("click",function(){ze(event)}),o.addEventListener("click",function(){ze(event)})}function ze(e){e.stopPropagation(),e.target;const t=T.ProjectID;Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}function ti(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";ni(),z(),G(t)}else z()}async function ni(e){const t=T.ProjectID;try{const o=await(await fetch(`${O}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function ft(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),ii();const t=document.getElementById("PROJECTview-projectTable"),n=T.ProjectJSON,o=Zn("--orange"),i=l=>`#${l.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(p=>parseInt(p,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const l of n)a.push({img:T.PictureURL,songTitle:l.SongName,artistName:T.ProjectContributors,projectName:Z(l.FolderSize),songDuration:`${Math.floor(l.Duration/60)}:${(l.Duration%60).toString().padStart(2,"0")}`,songSequence:l.SongSequence,version:l.Version,url:l.URL});for(let l=0;l<a.length;l++){a[l].ProjectID=l;const p=a[l],_=si(p);t.insertAdjacentHTML("beforeend",_);const f=t.lastElementChild;f.addEventListener("dragstart",r),f.addEventListener("dragover",d),f.addEventListener("drop",m)}function r(l){l.dataTransfer.setData("text/plain",l.target.dataset.rowId),l.dataTransfer.getData("text/plain"),s=l.srcElement,zn(l.srcElement)}const c=Vn(Kn,0);function d(l){l.preventDefault(),l.dataTransfer.dropEffect="move";const p=l.target.closest(".PROJECTview-projectTable-rowContainer");if(p!==s){const _=getComputedStyle(p).backgroundColor,f=i(_);c(p,f,o)}}function m(l){l.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const p=l.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${p}"]`),f=l.target.closest(".PROJECTview-projectTable-rowContainer");if(f){const h=f.getAttribute("data-row-id");f.before(_);const D=`${p}|${h}`;setTimeout(async()=>{await te(T.ProjectID,"SongsTableChangeSongSequenceOrder",D),Oe()},1)}}t.addEventListener("click",function(l){const p=l.target;if(l.stopPropagation(),p.tagName==="BUTTON"){const _=p.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),oi(l))}});const g=t.querySelectorAll("[contenteditable]"),E=[],y=l=>{const _=l.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),f=l.target.textContent,h=E.find(I=>I.dataRowIDField===_);if((h?h.currentText:"Row ID not found")==f)return;for(var B=E.length-1;B>=0;B--)E[B].dataRowIDField===_&&(E[B].currentText=f);const b=`${_}-${f}`;te(T.ProjectID,"project_song_title",b)};g.forEach(l=>{l.addEventListener("blur",y),E.push({dataRowIDField:l.parentElement.parentElement.getAttribute("data-row-id"),currentText:l.innerText})})}function oi(e){e.stopPropagation(),e.target,Y([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function ii(){let e="PROJECTview_projectAreaContainer",t=qo;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function si(e){let t=Yo;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${w}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&$e===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&$e===!1&&(a=!1),t=t.replace(s,a)}return t}function ai(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){ri(o)}}async function vt(e,t){const n=new FormData,o=new XMLHttpRequest;ge=!0,co(),n.append("file",e),n.append("project_id",t),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;le(s),s===100&&le(s)}},o.onload=async function(){if(o.responseText=="StorageLimit Reached"){k("Storage limit reached","error");for(var s=x.length-1;s>=0;s--)x.shift();ge=!1,Ue(),le(0)}if(ge=!1,x.shift(),Ue(),le(0),x.length>0){const a=x[0];await vt(a.file,a.ProjectID)}T.ProjectID==t&&Be==!0&&Oe()},o.onerror=function(){k("Upload Failed","error")},o.open("POST",`${O}/files/upload_audio/${t}`,!0),o.send(n)}async function ri(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:T.ProjectID,file:n};if(x.push(o),!ge){const i=x[0];await vt(i.file,i.ProjectID)}}}function Et(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function ci(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&j()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!j()||!r.isIntersecting&&!j()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&j()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const di=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function li(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&k("Storage limit reached","error"),n!=="update_user_pfp"?_i():(fi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${O}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function ui(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await li(o,t,n)}const yt=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let K,H=!1;function Y(e,t,n){n===void 0?gi(e,t):n!==void 0&&n==="update_project_image"?Ve(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Ve(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?pi():n!==void 0&&n==="notice"?mi(e):console.log("invalid menu display inputs")}function mi(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=yt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";if(a.addEventListener("click",Me),r.style.left=c,r.style.top=d,r.style.padding="5px",K&&pointerType===""){const _=K.getBoundingClientRect();n=_.left+window.scrollX,o=_.top+window.scrollY;let f=n+"px",h=o+"px";r.style.left=f,r.style.top=h}for(let _=0;_<e.length;_++)ht(e[_]);r.children[0];const g=r.offsetWidth,E=r.offsetHeight,y=Se("MENUmodalBody"),l=r.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",p),y.xOverflow==!0&&(c=n-g+"px",r.style.left=c),y.yOverflow==!0&&(d=o-E+"px",r.style.top=d);for(let _=0;_<l.length;_++){const f=l[_];f.setAttribute("data-menu-item-id",_),f.addEventListener("click",function(h){h.stopPropagation();const B=h.target.getAttribute("data-menu-item-id"),b=e[B].function,I=e[B].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){bt[b](I);return}else return})}function p(_){(_.key==="Escape"||_.keyCode===27)&&(document.removeEventListener("keydown",p),z())}}function pi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=io;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;j()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[P,A]of Object.entries(C)){const N=new RegExp(`\\{${P}\\}`,"g");i=i.replace(N,A)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),g=document.getElementById("LCD_mobile_body_img"),E=s.duration,l=s.currentTime/E*100,p=document.getElementById("LCDMB_seek_input"),_=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const f=document.getElementById("LCDMB_back"),h=document.getElementById("LCDMB_play"),D=document.getElementById("LCDMB_play_icon"),B=document.getElementById("LCDMB_next"),b=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{I(),H===!0&&J()}),I(),R(),_.style.width=`${l}%`,s.addEventListener("timeupdate",()=>{const P=s.duration,N=s.currentTime/P*100;_.style.width=`${N}%`}),p.addEventListener("input",function(){const P=s.duration,A=p.value;s.currentTime=P*(A/100)}),f.addEventListener("click",()=>{Bt(),I(),H===!0&&J()}),h.addEventListener("click",()=>{Ee(),I(),R()}),B.addEventListener("click",()=>{Pt(),I(),H===!0&&J()}),b.addEventListener("click",()=>{H===!1?(De(),H=!0):(Re(),H=!1)}),H===!0?De():Re(),o.addEventListener("touchstart",ie,!1),o.addEventListener("touchmove",se,!1),o.addEventListener("touchend",ae,!1);function I(){g.src=It,d.innerText=wt,m.innerText=Ct}function R(){s.paused?D.src=C.icons_playButtonV2:D.src=C.icons_derpy}function J(){const P=document.getElementById("LCD_mobile_queue_content_container");P.innerHTML="";for(let A=v+1;A<u.length;A++){const N=u[A],re=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],W=N.img,jt=N.song_name,kt=N.project_contributors;let ye=oo;for(let he=0;he<re.length;he++){const ce=re[he].toString(),Gt=new RegExp(`\\{${ce}\\}`,"g");let de="";ce==="queue_item_img"?de=`${w}/${W}/3`:ce==="queue_item_song_name"?de=jt:ce==="queue_item_song_artist"&&(de=kt),ye=ye.replace(Gt,de)}P.innerHTML+=ye}}function De(){function P(A){A.forEach(N=>{document.querySelectorAll("."+N).forEach(W=>{W.classList.add("queue_visible")})})}P(a),o.removeEventListener("touchstart",ie),o.removeEventListener("touchmove",se),o.removeEventListener("touchend",ae),J()}function Re(){function P(A){A.forEach(N=>{document.querySelectorAll("."+N).forEach(W=>{W.classList.remove("queue_visible")})})}P(a),o.addEventListener("touchstart",ie,!1),o.addEventListener("touchmove",se,!1),o.addEventListener("touchend",ae,!1)}function ie(P){H===!1&&(r=P.touches[0].clientY)}function se(P){P.preventDefault()}function ae(P){c=P.changedTouches[0].clientY,c-r>70&&(z(),o.removeEventListener("touchstart",ie),o.removeEventListener("touchmove",se),o.removeEventListener("touchend",ae))}}function gi(e,t){K=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=yt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",Me),r.style.left=c,r.style.top=d;let m="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(m="keyboard"):t.pointerType!=="mouse"&&(m="keyboard"),m=="keyboard"){const h=K.getBoundingClientRect();n=h.left+window.scrollX,o=h.top+window.scrollY;let D=n+"px",B=o+"px";r.style.left=D,r.style.top=B}for(let h=0;h<e.length;h++)ht(e[h]);const E=r.children[0],y=r.offsetWidth,l=r.offsetHeight,p=Se("MENUmodalBody"),_=r.getElementsByClassName("MENUmodalItemContainer");m==="keyboard"?E.focus():m=="mouse"&&(E.focus(),E.blur()),document.addEventListener("keydown",f),p.xOverflow==!0&&(c=n-y+"px",r.style.left=c),p.yOverflow==!0&&(d=o-l+"px",r.style.top=d);for(let h=0;h<_.length;h++){const D=_[h];D.setAttribute("data-menu-item-id",h),D.addEventListener("click",function(B){B.stopPropagation();const I=B.target.getAttribute("data-menu-item-id"),R=e[I].function,J=e[I].optionalParams;if(R=="TEST")console.log("the button worked");else if(R!="None"){bt[R](J);return}else return})}function f(h){(h.key==="Escape"||h.keyCode===27)&&(document.removeEventListener("keydown",f),z())}}function Ve(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";j()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=no,r.style.display="block",r.addEventListener("click",Me);const m=document.getElementById("MENUmodalBody"),g=document.getElementById("MENUmodalBody_image_select_file_drop_area"),E=document.getElementById("MENUmodalBody_image_select_file_select_button"),y=document.getElementById("MENUmodalBody_image_select_preview_area"),l=document.getElementById("MENUmodalBody_image_select_submit_button"),p=document.getElementById("MENUmodalBody_image_select_submit_button_container");m.style.left=c,m.style.top=d;let _,f;function h(b,I){return function(){const R=this,J=arguments;clearTimeout(f),f=setTimeout(()=>{b.apply(R,J)},I)}}function D(b,I,R){h(ui,100)(b,I,R)}function B(b){if(_){const I=URL.createObjectURL(_),R=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");y.src=I,l.style.visibility="visible",p.style.outline="3px solid var(--primary)",l.addEventListener("click",()=>{D(_,b.project_id,b.MenuType),R.style.visibility="visible"})}else console.log("No file selected.")}g.addEventListener("dragover",b=>{b.preventDefault()}),g.addEventListener("drop",b=>{b.preventDefault(),_=b.dataTransfer.files[0],B(e)}),E.addEventListener("click",()=>{const b=document.createElement("input");b.type="file",b.accept="image/*",b.addEventListener("change",I=>{_=I.target.files[0],B(e)}),b.click()})}function _i(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",z(),Oe()}function fi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",z()}function Se(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let m=!1,g=!1;return c>n&&(m=!0),d>o&&(g=!0),{xOverflow:m,yOverflow:g}}function ht(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",j()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=di.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(C)){const m=new RegExp(`\\{${c}\\}`,"g");a=a.replace(m,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Me(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function z(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),K&&K.focus()}const bt={PROJECT_VIEW_delete_project(e){ti()},PLAYBACK_add_songs_to_queue(e){Ui(e)},SIGN_OUT_USER(e){Oo()},OPEN_SETTINGS_PAGE(e){G("/settings/")}};let $="hidden";function vi(){qn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ce($),e.addEventListener("click",Ei),t.addEventListener("click",yi),q()}function Ei(){if($==="hidden"){$="visible",Ce($);return}if($==="visible"){$="hidden",Ce($);return}}function Ce(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",ot&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function q(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Li(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Ci),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Ii),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&wi(r)}),i.addEventListener("dragstart",hi),i.addEventListener("dragover",bi),i.addEventListener("drop",Ti),e.appendChild(i)}}function yi(){const e=v+1;e>=0&&e<u.length?u.splice(e):u.length=0,q()}function hi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function bi(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Ti(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(r=>r.id===parseInt(t)),i=u.find(r=>r.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),M.splice(s,1),M.splice(a,0,o),q())}function Ii(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),M.splice(o,1)),q()}function wi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];Y(o,e)}function Ci(e){}function Li(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Yn;for(let c=0;c<t.length;c++){const d=t[c].toString(),m=new RegExp(`\\{${d}\\}`,"g");let g="";d==="QUEUE_item_image"?g=`${w}/${n}/3`:d==="QUEUE_item_title"?g=o:d==="QUEUE_item_artist"?g=i:d==="icons_menuOptionsButton"?g=nt:d==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(m,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Pi=`<div class="LCDbody">
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
</div>`;function Bi(){Si(),Tt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Mi(t)}),xi(),j()&&document.getElementById("LCDbody").addEventListener("click",Oi)}function Oi(e){e.stopPropagation(),Y({param:"cheese"},e,"lcd_mobile_body")}function Si(){let e="LCDbody",t=Pi;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Tt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,m;e=n.clientWidth,d=s(),m=e/o,m>d?c=d+10:c=m,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const m=d.offsetWidth;return document.body.removeChild(d),m}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function Mi(e){e.stopPropagation(),e.target,Y([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function xi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Di)})}function Di(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Gi(n)}function Ri(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],M=[],v=0,It="",wt="",Ct="";document.getElementById("audio");document.getElementById("PLAYERsource");let L="off",Q="off",ne="paused";function Lt(e){u=[],v=0,u=xe(e),u.length>0&&(ne="playing",F())}function Ai(e){u=[],v=0,u=xe(e),u.length>0&&(Q="off",Ot(),ne="playing",F())}function xe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Ni(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,Fi(o),u!==void 0&&u.length>0&&qi(i)}async function Ui(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await ve(t),i=xe(o);if(n==="later")u=u.concat(i),M=M.concat(i);else if(n==="next"){let s=u.slice(0,v+1),a=u.slice(v+1);u=s,u=u.concat(i),u=u.concat(a),s=M.slice(0,v+1),a=M.slice(v+1),M=s,M=M.concat(i),M=M.concat(a)}q()}function Ee(){ji()}function ji(){const e=document.getElementById("audio");e.paused?(oe("playing"),ne="playing",e.play().then(t=>xt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(ne="paused",oe("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){Ee()});navigator.mediaSession.setActionHandler("pause",function(){Ee()});function Pt(){Rt()}function Bt(){At()}function ki(){document.getElementById("audio").addEventListener("ended",$i)}function Gi(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ji(){Qi()}function Hi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:L,PLAYBACK_shuffle_state:Q,progress:t}}function Ot(){if(Q==="off"){Q="on",Ke(Q);const t=v+1;M=[...u],u.slice(0,v);const n=u.slice(t);$n(n);const o=n.length;u.splice(v,o,...n),q()}else{Q="off",Ke(Q);const t=[...M],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);q()}}function F(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${w}/${u[v].url}/3`,e.load(),ne==="playing"?(e.play().then(n=>xt()).catch(n=>console.log(n)),oe("playing")):oe("paused"),Mt(),St()}function qi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${w}/${u[v].url}/3`,t.load(),t.currentTime=e,oe("paused"),Mt(),St()}function St(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Ae(s)}"`,c=`"${Ae(Math.floor(i))}"`,d=i/o*100,m=`${d}%`;Ri(c,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=d,Dt()})}function Mt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[v].song_name,t.innerHTML=u[v].song_name,n.innerHTML=u[v].project_contributors,Tt(),o.src=`${w}/${u[v].img}/3`,i.src=`${w}/${u[v].img}/3`,It=`${w}/${u[v].img}/5`,wt=u[v].song_name,Ct=u[v].project_contributors,q()}function xt(){let e=u[v];const t=[{src:`${w}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${w}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${w}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${w}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${w}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${w}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Dt()}function Dt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Yi(){console.log("PLAYBACK_stop_playback, clear top")}function $i(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(L=="off"||L=="on")?(v+=1,F()):L=="song"?F():t==v+1&&L=="on"?(v=0,F()):Yi()}function Rt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.pause(),v+=1,F())}navigator.mediaSession.setActionHandler("nexttrack",function(){Rt()});function At(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,v>0&&(e.pause(),v-=1,F())}navigator.mediaSession.setActionHandler("previoustrack",function(){At()});function Qi(){L=="off"?(L="on",V(L)):L=="on"?(L="song",V(L)):(L="off",V(L))}function Fi(e){e=="off"?(L="off",V(L)):e=="on"?(L="on",V(L)):(e="song",L="on",V(L))}function zi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Vi),t.addEventListener("click",Ki),n.addEventListener("click",Wi),o.addEventListener("click",Xi),i.addEventListener("click",Zi)}function Vi(){Ot()}function Ki(){Bt()}function Wi(){Ee()}function Xi(){Pt()}function Zi(){Ji()}function Ke(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function V(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function oe(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function es(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Nt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ts)})}function ts(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Nt(n)}function Nt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function ns(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--text-third)",n.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="",n.style.backgroundColor="",e.style.opacity="0%"})}const os=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,is=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ss(){setTimeout(()=>{let e="MAINcontentPages",t=is;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",as)},1)}async function as(e){console.log("the signup event was caught"),e.preventDefault(),rs();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${O}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const c=await convertImageToBase64(r);n[a.name]=c}}else n[a.name]=a.value;const s=await fetch(`${O}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();Ie(),cs(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";Ie(),We(),alert(s)}}catch{Ie(),We(),alert("There was an error, try again")}}function rs(){const e=document.getElementById("spinner");e.style.display="block"}function Ie(){const e=document.getElementById("spinner");e.style.display="none"}function cs(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function We(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let me=!1,Xe=!1,Ze=!1,et=!1;async function ds(){await ms()?Ut():Xe||(ls(),Xe=!0)}function ls(){ps();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${O}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),tt(),ss()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),me)return!1;me=!0;const a=o.value,r=i.value;try{await us(a,r)?(et=!0,k("Login Successful","success"),Ut(),tt()):(et=!1,k("Error Logging In","error")),me=!1}catch(c){console.error("Error:",c),me=!1}return!1})}async function us(e,t){try{return(await(await fetch(`${O}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?k("The server is down","error"):console.error(n),!1}}async function ms(){try{const e=await fetch(`${O}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&k("The server is down","error")}}function ps(){let e="MAINcontentPages",t=os;document.getElementById(e).innerHTML+=t}function tt(){if(Ze===!0)return;Ze=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const O="/apis",w="/media";async function Ut(){ki(),Jn(),Hn(),Bi(),zi(),ns(),es(),Lo(),vi(),Ao(),ro()}window.hasCodeRun||(ds(),window.hasCodeRun=!0);
