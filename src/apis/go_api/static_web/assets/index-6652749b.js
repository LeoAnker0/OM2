(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const pt="/assets/menu_options_button-a1d7bbe3.svg",Wt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Xt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,Zt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,en="/assets/volume_null-e39cf06f.svg",tn="/assets/recently_added-a0a983c6.svg",nn="/assets/volume_3-c8ab0a75.svg",on="/assets/orange_music_text_logo_black-12e7386c.svg",sn="/assets/volume_2-cfdac9da.svg",an="/assets/browse_2-85030bba.svg",rn="/assets/volume_1-27e93416.svg",cn="/assets/orange_music_logo_white-2a680ea2.svg",dn="/assets/search_icon-4f5e4381.svg",ln="/assets/orange_music_text_logo_black-91f9e706.png",un="/assets/up_next_queue_button-14fedba2.svg",mn="/assets/orange_music_logo_yellow-a109ff64.svg",pn="/assets/playlist-c6e9024f.svg",gn="/assets/loop_button-aef56865.svg",_n="/assets/help_icon-867fec9d.svg",fn="/assets/play_button-b1e2d3a4.svg",vn="/assets/browse-14744f27.svg",En="/assets/orange_music_text_logo_white-7f0ba909.svg",bn="/assets/back_button-8128cade.svg",yn="/assets/Albums-2e81dc74.svg",hn="/assets/songs-016b7188.svg",Tn="/assets/orange_music_logo_black-4d7e4591.svg",In="/assets/your_uploaded_songs-06535705.svg",Cn="/assets/artist-ab677d43.svg",wn="/assets/shuffle_button-c2f06bc4.svg",Ln="/assets/orange_music_text_logo_white-4907051e.png",Pn="/assets/listen_now-c7438154.svg",On="/assets/derpy-21c20ae5.svg",Bn="/assets/next_button-9a850710.svg",Mn="/assets/recently_added-7ff28139.svg",Sn="/assets/play_button-5eeedbe6.svg",Dn="/assets/browse-e8be8609.svg",xn="/assets/albums-681507b8.svg",Rn="/assets/listen_now.2-bfa293ac.svg",An="/assets/your_uploads-02e5c93c.svg",Nn="/assets/play_button.2-fc90fac7.svg",Un="/assets/listen_now-fb02ffce.svg",jn="/assets/browse.2-15b501dd.svg",kn="/assets/place_holder_image-d4006a96.svg",Gn="/assets/icons_MOGitems_add-19e679f7.svg",Jn="/assets/back-9279721d.svg",qn="/assets/forwards-605bd405.svg",Hn="/assets/icons_close-57e87944.svg",$n="/assets/icons_pause-8012f8cc.svg",Yn="/assets/icons_loop-32d1576c.svg",Fn="/assets/icons_loop_song-87f53dc7.svg",Qn="/assets/icons_play-a5074c5b.svg",Vn="/assets/icons_settings-793063fb.svg",zn="/assets/love-07ac5006.svg",Kn="/assets/upload-3bad9145.svg",C={icons_volumeNull:en,icons_recentlyAdded:tn,icons_volume3:nn,icons_orangeMusicTextLogoBlack:on,icons_volume2:sn,icons_browse2:an,icons_volume1:rn,icons_orangeMusicLogoWhite:cn,icons_searchIcon:dn,icons_orangeMusicTextLogoBlackPng:ln,icons_queueButton:un,icons_orangeMusicLogoYellow:mn,icons_playlist:pn,icons_loopButton:gn,icons_helpIcon:_n,icons_playButton:fn,icons_browse:vn,icons_menuOptionsButton:pt,icons_orangeMusicTextLogoWhite:En,icons_backButton:bn,icons_Albums:yn,icons_songs:hn,icons_orangeMusicLogoBlack:Tn,icons_yourUploadedSongs:In,icons_artist:Cn,icons_shuffleButton:wn,icons_orangeMusicTextLogoWhitePng:Ln,icons_listenNow:Pn,icons_derpy:On,icons_nextButton:Bn,icons_recentlyAddedV2:Mn,icons_playButtonV2:Sn,icons_browseV2:Dn,icons_albumsV2:xn,icons_listenNow2V2:Rn,icons_yourUploads:An,icons_playButton2:Nn,icons_listenNowV2:Un,icons_browse2V2:jn,v3_placeholder:kn,icons_MOGitems_add:Gn,icons_back:Jn,icons_forwards:qn,icons_close:Hn,icons_pause:$n,icons_loop:Yn,icons_loop_song:Fn,icons_play:Qn,icons_settings:Vn,current_year:new Date().getFullYear(),icons_love:zn,icons_upload:Kn};function Wn(){let e="topleftContentArea",t=Wt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Xn(){let e="toprightContentArea",t=Xt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Zn(){let e="MAINcontentContainer",t=Zt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const eo=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function S(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function gt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function to(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function $e(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function no(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function _t(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function te(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function oo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function io(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function so(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}let Ye;const x=new Map;function ao(e,t,n){x.has(e)||x.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!x.has(e))return;const r=Math.min(a/500,1);if(!x.has(e))return;const c=ro(x.get(e).originalColor,r,n);e.style.backgroundColor=c,r<1||x.get(e).isChanging?x.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",x.delete(e))}clearTimeout(Ye),Ye=setTimeout(()=>{x.has(e)&&!x.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(x.get(e).animationFrameId),x.delete(e))},500),x.get(e).isChanging=!0;const i=Date.now();x.get(e).animationFrameId=requestAnimationFrame(o)}function ro(e,t,n){return co(n,e,t)}function co(e,t,n){const o=function(b){return b=b.toString(16),b.length===1?"0"+b:b},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),p=Math.round(s*(1-n)+c*n),E=Math.round(a*(1-n)+d*n);return"#"+o(u)+o(p)+o(E)}function lo(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=uo(o,i,s),r=De(a[0]),c=De(a[1]),d=De(a[2]);return mo({r,g:c,b:d})}function uo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function De(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function mo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const po=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,go=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,_o=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,fo=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,vo=`
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
`;let Te=!1;function Eo(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=fo,n.addEventListener("click",function(o){Te==!1?yo(o):ve()}),t.innerHTML=vo}function bo(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Fe(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Te==!0&&U.length>0||ve()}function ue(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(U.length>0){t.innerHTML=U[0].file.name,n.innerHTML=te(U[0].file.size*1.75),ho(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=U.length-1;o>=1;o--){const a=U[o].file.name,r=te(U[o].file.size*1.75);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let Qe;function yo(e){Te=!0,Qe=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",ve),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const p=Qe.getBoundingClientRect();t=p.left+window.scrollX,n=p.top+window.scrollY;let E=t+"px",b=n+"px";o.style.left=E,o.style.top=b}const r=o.offsetWidth,c=o.offsetHeight,d=Bt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(p){(p.key==="Escape"||p.keyCode===27)&&(document.removeEventListener("keydown",u),ve())}}function ve(){Te=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function ho(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Ve=1500;let ft=0,Re=[],xe;function O(e,t){const o=new Date().getTime();Re.push({notificationText:e,notificationType:t,time:o}),vt()}function vt(){const t=new Date().getTime(),n=Re.at(ft);Re.length>1?t-xe>Ve?(ze(n.notificationText,n.notificationType),xe=t):setTimeout(vt,Ve):(ze(n.notificationText,n.notificationType),xe=t)}function ze(e,t){const n=document.getElementById("noticationContainer");let o;ft+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const To=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`;let Ie;async function Io(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ce("profile_picture"),n=`${I}/${t}/3`;Ie=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Co)}catch(t){console.error("Error initializing account image:",t)}}function Co(e){e.stopPropagation(),wo(e)}function wo(e){$([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Lo(){await ri(),location.reload()}function Po(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${I}/${Ie}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",Oo)}function Oo(e){e.stopPropagation(),Bo(e)}function Bo(e){$([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Mo=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,So=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Et=30;let ne=0;async function Do(){try{const e=document.getElementById("MAINcontentPages");xo();const t=await Ct(Et,ne);ne+=t.length,Ro(t),S()&&Po()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function bt(){ne=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",yt),e.innerHTML=""}function xo(){let e="MAINcontentPages",t=To;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Ro(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Mo;for(const[a,r]of Object.entries(C)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Ke(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){yt(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],u=r[d].project_id;ht(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await Ct(Et,ne);ne+=d.length,d.length>0&&Ke(d)}})}function Ke(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,u=no(d);let p=So;for(const[E,b]of Object.entries(C)){const m=new RegExp(`\\{${E}\\}`,"g");p=p.replace(m,b)}for(let E=0;E<i.length;E++){const b=i[E].toString(),m=new RegExp(`\\{${b}\\}`,"g");let g="";b==="MOG_image"?g=`${I}/${a}/3`:b==="MOG_text1"?g=r:b==="MOG_text2"?g=c:b==="MOG_checkedDate"?g=u:b==="MOGI_placeholder_itemID"&&(g=s),p=p.replace(m,g)}t.innerHTML+=p}}async function yt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await we(i),a=JSON.parse(s);a.ProjectID=i,At(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;ht(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;J(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Ao()}function ht(e,t){e.stopPropagation(),$([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Ao(){J("/new-project/")}let We;function Je(e){return new Promise((t,n)=>{We=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){Xe(),t("delete")}function d(){We.focus(),Xe(),t("cancel")}i.addEventListener("click",u=>{const p=u.target;p===a?c():(p===r||p===i)&&d()}),o==="keyboard"&&!S()?r.focus():o=="mouse"&&!S()&&(j(),r.focus(),r.blur())})}function Xe(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const No=`<div class="ADMINusersTableInfoRow">
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
</div>`,Uo=`<h1>Admin</h1>
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
<br><br>`,Ze=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Tt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){jo(a,r,c)}}function jo(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),$(o,e,n)}const et=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,me=`<h1>General</h1>
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
<br><br>`,tt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,ko=`<div class="settings_container">
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
</div>`;let Ee="general",F;async function Go(){const e=await Ce("admin");e=="true"&&!S()?(Ee="admin",F=[{name:"general",markup:me,button_id:"settings_button_general",function:pe},{name:"user",markup:tt,button_id:"settings_button_user",function:ge},{name:"admin",markup:Ze,button_id:"settings_button_admin",function:ot}]):e=="false"&&!S()?F=[{name:"general",markup:me,button_id:"settings_button_general",function:pe},{name:"user",markup:tt,button_id:"settings_button_user",function:ge}]:S()&&e=="true"?(Ee="admin",F=[{name:"general",markup:me,button_id:"settings_button_general",function:pe},{name:"user",markup:et,button_id:"settings_button_user",function:ge},{name:"admin",markup:Ze,button_id:"settings_button_admin",function:ot}]):F=[{name:"general",markup:me,button_id:"settings_button_general",function:pe},{name:"user",markup:et,button_id:"settings_button_user",function:ge}]}async function Jo(){await Go();const e=document.getElementById("MAINcontentPages");let t=ko;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");nt(Ee);for(var o=F.length-1;o>=0;o--){const i=F[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=F.find(u=>u.button_id===r).name;nt(d)})}n.addEventListener("click",function(){J("/")})}function Ae(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function nt(e){Ee=e;const t=["users_img"],n=document.getElementById("view_container"),o=F.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${I}/${Ie}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function pe(){}function ge(){Tt("user-id","settings_views_user_pfp_img","update_user_pfp")}let ee=[];async function ot(){if(await Ce("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=Uo;for(const[a,r]of Object.entries(C)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${I}/${Ie}/4/`),o=o.replace(c,d)}n.innerHTML=o,Ne(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")O("Error Updating Column: empty inputs","error");else for(var d=ee.length-1;d>=0;d--){const u=ee[d];ai(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){O("Error Deleting User: user UUID is empty","error");return}let c=null;for(let p=0;p<R.length;p++)R[p].uuid==r&&(c=R[p].username);if(c===null){O("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await Je(d);u==="cancel"||u==="delete"&&((await oi(r)).success=="success"?O("Successfully deleted the user","success"):O("Failed to delete the user","error"),Ne())})}let R;async function Ne(){const e=await si();R=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<R.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=R[n].username,s=R[n].uuid,a=R[n].verified,r=R[n].email;let c=R[n].storage_allowance;c=te(c);const d=R[n].admin,u=n;let p=R[n].storage_used;p=te(p);let E=No,b=R[n].profile_picture;b=`${I}/${b}/3`;for(let m=0;m<o.length;m++){const g=o[m].toString(),y=new RegExp(`\\{${g}\\}`,"g");let v="";g==="Username"?v=i:g==="Email"?v=r:g==="UUID"?v=s:g==="Verified"?v=a:g==="Space_Used"?v=p:g==="Storage_Allowance"?v=c:g==="profile_picture_url"?v=b:g==="checkbox_number"?v=u:g==="Admin"&&(v=d),E=E.replace(y,v)}t.innerHTML+=E}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&qo()})}function qo(){ee=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=R[i.id].uuid;ee.push(a)}),o.innerHTML=`Selected Users: ${ee.length}`}const Ho=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,$o=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Yo(){let e="MAINcontentPages",t=$o;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Fo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){J("/")})}async function Fo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${M}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)O(`There was an error, ${o}`,"error");else{const i=o;O("Sign up Successful, Log in now","success"),J("/")}}catch{O("There was an error, try again","error")}}let Z=!1,be=!1,Ue=!1,ye=!1;async function Qo(){await Ko()?(Qt(),ye=!0):be||(It(),be=!0)}async function Vo(){be=!1,Z=!1,Ue=!1,It(),be=!0}function It(){Wo();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${M}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{it(),Yo()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),Z)return!1;Z=!0;const s=n.value,a=o.value;try{await zo(s,a)?(ye=!0,O("Login Successful","success"),Qt(),it()):(ye=!1,O("Error Logging In","error")),Z=!1}catch(r){console.error("Error:",r),Z=!1}return!1})}async function zo(e,t){try{return(await(await fetch(`${M}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?O("The server is down","error"):console.error(n),!1}}async function Ko(){try{const e=await fetch(`${M}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&O("The server is down","error")}}function Wo(){let e="MAINcontentPages",t=Ho;document.getElementById(e).innerHTML+=t}function it(){if(Ue===!0)return;Ue=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function Xo(){const e=await Ce("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;J(r),ss(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=l,d=_,u=ms();u.current_path=r,u.current_queue=c,u.current_index=d;const p=i(u);p!==o&&(ni("last_state",u),o=p,n.set("playback_states",p))}function a(){J(currentPath)}}function Zo(){ye==!1?(Ae(),Vo()):(wt(),Ae(),Do())}function ei(e){bt(),Ae(),mi(e)}function st(){bt(),wt(),Jo()}const at={"/":Zo,"/new-project/":_e,"/new-project":_e,"/new/":_e,"/new":_e,"/projects/:projectID":ei,"/settings/":st,"/settings":st};function ti(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){J("/")}}function J(e){const t=Object.keys(at);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=at[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}ti()}async function ni(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${M}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function oi(e){try{const t={uuid:e};return await(await fetch(`${M}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ii(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${M}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&O("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Ce(e){try{return(await(await fetch(`${M}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function oe(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${M}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function we(e){try{return(await(await fetch(`${M}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ct(e,t){try{const i=(await(await fetch(`${M}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function _e(){try{const o=`/projects/${(await(await fetch(`${M}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;J(o)}catch(e){console.error("Error:",e)}}async function si(){try{return(await(await fetch(`${M}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function ai(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${M}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){O("Table Updated Successfully","success"),Ne();return}else{O(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){O(`Error Updating Column ${t}: ${o}`,"error");return}}async function ri(){try{const t=await(await fetch(`${M}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const ci=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function je(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=ci}}const di=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,li=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,ui=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,U=[];let fe=!1,rt=!0,f,Le=!1;async function mi(e){let t;Le=!0,gt()==!0?t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_light"},gi(t),je("","blank"),sessionStorage.setItem("description","."),ct(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{J("/")});const o=await we(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,f=s,i(),pi()}function i(){ke(),sessionStorage.setItem("description",f.Description),ct(),_i(),vi(),Ei(),bi(),Lt(),Bi(),Ot(f.ProjectName),Tt(f.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Pi(),je(f,"full")}}function wt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Le=!1}async function Pe(){if(!Le)return;const e=f.ProjectID,t=await we(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,f=n,Lt();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${I}/${f.PictureURL}/5`;o.src=i,je(f,"full")}}function ke(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),i=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year"),s=`${I}/${f.PictureURL}/5`;e.innerText=f.ProjectName,t.innerText=f.ProjectContributors,n.src=s,o.innerText=f.ProjectName,i.innerText=`${f.ProjectContributors} | ${_t(f.TimeCreated)}`}function pi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(Ot(s),oe(f.ProjectID,"project_name",s),f.ProjectName=s,ke())}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(oe(f.ProjectID,"project_contributors",s),f.ProjectContributors=s,ke())})}function gi(e){let t="MAINcontentPages",n=ui;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=_t(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${I}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function ct(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function _i(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",S()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function fi(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function vi(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Ei(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){dt(f)}),t.addEventListener("click",function(n){n.target===t&&dt(f)})}function dt(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),oe(e.ProjectID,"description",n),o.style.display="none",fi(),i.style.zIndex=""}async function bi(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){At(f)}),t.addEventListener("click",function(){is(f)}),n.addEventListener("click",function(){lt(event)}),o.addEventListener("click",function(){lt(event)})}function lt(e){e.stopPropagation(),e.target;const t=f.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],$(n,e)}async function yi(e){const t=`Are you sure that you want to delete <em><b>${f.ProjectName}</b></em>? This action is not reversable.`,n=await Je(t);if(n==="cancel")j();else if(n==="delete"){const o="/";await hi(),j(),J(o)}else j()}async function hi(e){const t=f.ProjectID;try{const o=await(await fetch(`${M}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function Lt(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),wi();const t=document.getElementById("PROJECTview-projectTable"),n=f.ProjectJSON,o=lo("--orange"),i=m=>`#${m.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(g=>parseInt(g,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const m of n)a.push({img:f.PictureURL,songTitle:m.SongName,artistName:f.ProjectContributors,projectName:te(m.FolderSize),songDuration:`${Math.floor(m.Duration/60)}:${(m.Duration%60).toString().padStart(2,"0")}`,songSequence:m.SongSequence,version:m.Version,url:m.URL});for(let m=0;m<a.length;m++){a[m].ProjectID=m;const g=a[m],y=Li(g);t.insertAdjacentHTML("beforeend",y);const v=t.lastElementChild;v.addEventListener("dragstart",r),v.addEventListener("dragover",d),v.addEventListener("drop",u)}function r(m){m.dataTransfer.setData("text/plain",m.target.dataset.rowId),m.dataTransfer.getData("text/plain"),s=m.srcElement,oo(m.srcElement)}const c=io(ao,0);function d(m){m.preventDefault(),m.dataTransfer.dropEffect="move";const g=m.target.closest(".PROJECTview-projectTable-rowContainer");if(g!==s){const y=getComputedStyle(g).backgroundColor,v=i(y);c(g,v,o)}}function u(m){m.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const g=m.dataTransfer.getData("text/plain"),y=document.querySelector(`[data-row-id="${g}"]`),v=m.target.closest(".PROJECTview-projectTable-rowContainer");if(v){const T=v.getAttribute("data-row-id");v.before(y);const k=`${g}|${T}`;setTimeout(async()=>{await oe(f.ProjectID,"SongsTableChangeSongSequenceOrder",k),Pe()},1)}}t.addEventListener("click",function(m){const g=m.target;if(m.stopPropagation(),g.tagName==="BUTTON"){const y=g.closest(".PROJECTview-projectTable-rowContainer");y&&(y.getAttribute("data-row-id"),Ti(m))}});const p=t.querySelectorAll("[contenteditable]"),E=[],b=m=>{const y=m.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),v=m.target.textContent,T=E.find(L=>L.dataRowIDField===y);if((T?T.currentText:"Row ID not found")==v)return;for(var D=E.length-1;D>=0;D--)E[D].dataRowIDField===y&&(E[D].currentText=v);const w=`${y}-${v}`;oe(f.ProjectID,"project_song_title",w)};p.forEach(m=>{m.addEventListener("blur",b),E.push({dataRowIDField:m.parentElement.parentElement.getAttribute("data-row-id"),currentText:m.innerText})})}function Ti(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],$(i,e)}function Ii(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=f;const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,rs(i,o)}async function Ci(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`,n=await Je(t);n==="cancel"||(n==="delete"?(await ii(f.ProjectID,e.songID),j(),Pe()):console.error("a statement was returned that isn't valid"))}function wi(){let e="PROJECTview_projectAreaContainer",t=di;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Li(e){let t=li;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${I}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&rt===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&rt===!1&&(a=!1),t=t.replace(s,a)}return t}function Pi(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){Oi(o)}}async function Pt(){const e=U[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;fe=!0,bo(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;ue(a),a===100&&ue(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){O("Storage limit reached","error");for(var a=U.length-1;a>=0;a--)U.shift();fe=!1,Fe(),ue(0)}fe=!1,U.shift(),Fe(),ue(0),U.length>0&&await Pt(),f.ProjectID==n&&Le==!0&&Pe()},i.onerror=function(){O("Upload Failed","error")},i.open("POST",`${M}/files/upload_audio/${n}`,!0),i.send(o)}async function Oi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:f.ProjectID,file:n};U.push(o),fe||await Pt()}}function Ot(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Bi(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&S()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!S()||!r.isIntersecting&&!S()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&S()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Mi=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Si(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&O("Storage limit reached","error"),n!=="update_user_pfp"?Ni():(Ui(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${M}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Di(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Si(o,t,n)}const xi=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let he,Y=!1;function $(e,t,n){n===void 0?Ai(e,t):n!==void 0&&n==="update_project_image"?ut(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?ut(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Ri():console.log("invalid menu display inputs")}function Ri(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=_o;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;S()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[B,N]of Object.entries(C)){const G=new RegExp(`\\{${B}\\}`,"g");i=i.replace(G,N)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),E=s.duration,m=s.currentTime/E*100,g=document.getElementById("LCDMB_seek_input"),y=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const v=document.getElementById("LCDMB_back"),T=document.getElementById("LCDMB_play"),k=document.getElementById("LCDMB_play_icon"),D=document.getElementById("LCDMB_next"),w=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{L(),Y===!0&&q()}),L(),A(),y.style.width=`${m}%`,s.addEventListener("timeupdate",()=>{const B=s.duration,G=s.currentTime/B*100;y.style.width=`${G}%`}),g.addEventListener("input",function(){const B=s.duration,N=g.value;s.currentTime=B*(N/100)}),v.addEventListener("click",()=>{Ut(),L(),Y===!0&&q()}),T.addEventListener("click",()=>{Be(),L(),A()}),D.addEventListener("click",()=>{Nt(),L(),Y===!0&&q()}),w.addEventListener("click",()=>{Y===!1?(qe(),Y=!0):(He(),Y=!1)}),Y===!0?qe():He(),o.addEventListener("touchstart",se,!1),o.addEventListener("touchmove",ae,!1),o.addEventListener("touchend",re,!1);function L(){p.src=Dt,d.innerText=xt,u.innerText=Rt}function A(){s.paused?k.src=C.icons_playButtonV2:k.src=C.icons_derpy}function q(){const B=document.getElementById("LCD_mobile_queue_content_container");B.innerHTML="";for(let N=_+1;N<l.length;N++){const G=l[N],ce=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],X=G.img,Vt=G.song_name,zt=G.project_contributors;let Me=go;for(let Se=0;Se<ce.length;Se++){const de=ce[Se].toString(),Kt=new RegExp(`\\{${de}\\}`,"g");let le="";de==="queue_item_img"?le=`${I}/${X}/3`:de==="queue_item_song_name"?le=Vt:de==="queue_item_song_artist"&&(le=zt),Me=Me.replace(Kt,le)}B.innerHTML+=Me}}function qe(){function B(N){N.forEach(G=>{document.querySelectorAll("."+G).forEach(X=>{X.classList.add("queue_visible")})})}B(a),o.removeEventListener("touchstart",se),o.removeEventListener("touchmove",ae),o.removeEventListener("touchend",re),q()}function He(){function B(N){N.forEach(G=>{document.querySelectorAll("."+G).forEach(X=>{X.classList.remove("queue_visible")})})}B(a),o.addEventListener("touchstart",se,!1),o.addEventListener("touchmove",ae,!1),o.addEventListener("touchend",re,!1)}function se(B){Y===!1&&(r=B.touches[0].clientY)}function ae(B){B.preventDefault()}function re(B){c=B.changedTouches[0].clientY,c-r>70&&(j(),o.removeEventListener("touchstart",se),o.removeEventListener("touchmove",ae),o.removeEventListener("touchend",re))}}function Ai(e,t){he=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");S()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=xi,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",Mt),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const T=he.getBoundingClientRect();n=T.left+window.scrollX,o=T.top+window.scrollY;let k=n+"px",D=o+"px";r.style.left=k,r.style.top=D}for(let T=0;T<e.length;T++)ji(e[T]);const E=r.children[0],b=r.offsetWidth,m=r.offsetHeight,g=Bt("MENUmodalBody"),y=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!S()?E.focus():u=="mouse"&&!S()&&(E.focus(),E.blur()),document.addEventListener("keydown",v),g.xOverflow==!0&&(c=n-b+"px",r.style.left=c),g.yOverflow==!0&&(d=o-m+"px",r.style.top=d);for(let T=0;T<y.length;T++){const k=y[T];k.setAttribute("data-menu-item-id",T),k.addEventListener("click",function(D){D.stopPropagation();const L=D.target.getAttribute("data-menu-item-id"),A=e[L].function,q=e[L].optionalParams;if(A=="TEST")console.log("the button worked",q);else if(A!="None"){ki[A](q);return}else return})}function v(T){(T.key==="Escape"||T.keyCode===27)&&(document.removeEventListener("keydown",v),j())}}function ut(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";S()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=po,r.style.display="block",r.addEventListener("click",Mt);const u=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),E=document.getElementById("MENUmodalBody_image_select_file_select_button"),b=document.getElementById("MENUmodalBody_image_select_preview_area"),m=document.getElementById("MENUmodalBody_image_select_submit_button"),g=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let y,v;function T(w,L){return function(){const A=this,q=arguments;clearTimeout(v),v=setTimeout(()=>{w.apply(A,q)},L)}}function k(w,L,A){T(Di,100)(w,L,A)}function D(w){if(y){const L=URL.createObjectURL(y),A=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");b.src=L,m.style.visibility="visible",g.style.outline="3px solid var(--primary)",m.addEventListener("click",()=>{k(y,w.project_id,w.MenuType),A.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",w=>{w.preventDefault()}),p.addEventListener("drop",w=>{w.preventDefault(),y=w.dataTransfer.files[0],D(e)}),E.addEventListener("click",()=>{const w=document.createElement("input");w.type="file",w.accept="image/*",w.addEventListener("change",L=>{y=L.target.files[0],D(e)}),w.click()})}function Ni(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",j(),Pe()}function Ui(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",j()}function Bt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let u=!1,p=!1;return c>n&&(u=!0),d>o&&(p=!0),{xOverflow:u,yOverflow:p}}function ji(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Mi.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(C)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Mt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function j(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),he&&he.focus()}const ki={PROJECT_VIEW_delete_project(e){yi(),j()},PLAYBACK_add_songs_to_queue(e){as(e),j()},SIGN_OUT_USER(e){j(),Lo()},OPEN_SETTINGS_PAGE(e){j(),J("/settings/")},PROJECT_VIEW_delete_song(e){Ci(e)},PROJECT_VIEW_add_song_to_queue(e){Ii(e)}};let Q="hidden";function Gi(){Zn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ge(Q),e.addEventListener("click",Ji),t.addEventListener("click",qi),H()}function Ji(){if(Q==="hidden"){Q="visible",Ge(Q);return}if(Q==="visible"){Q="hidden",Ge(Q);return}}function Ge(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",gt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function H(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=_+1;t<l.length;t++){l[t].id=t;const n=l[t],o=zi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Vi),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Fi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Qi(r)}),i.addEventListener("dragstart",Hi),i.addEventListener("dragover",$i),i.addEventListener("drop",Yi),e.appendChild(i)}}function qi(){const e=_+1;e>=0&&e<l.length?l.splice(e):l.length=0,H()}function Hi(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function $i(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Yi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=l.find(r=>r.id===parseInt(t)),i=l.find(r=>r.id===parseInt(n.dataset.songId)),s=l.indexOf(o),a=l.indexOf(i);s!==-1&&a!==-1&&(l.splice(s,1),l.splice(a,0,o),h.splice(s,1),h.splice(a,0,o),H())}function Fi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=l.findIndex(i=>i.id===n);o!==-1&&(l.splice(o,1),h.splice(o,1)),H()}function Qi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];$(o,e)}function Vi(e){}function zi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=eo;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let p="";d==="QUEUE_item_image"?p=`${I}/${n}/3`:d==="QUEUE_item_title"?p=o:d==="QUEUE_item_artist"?p=i:d==="icons_menuOptionsButton"?p=pt:d==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(u,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const Ki=`<div class="LCDbody">
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
</div>`;function Wi(){Zi(),St(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){es(t)}),ts(),S()&&document.getElementById("LCDbody").addEventListener("click",Xi)}function Xi(e){e.stopPropagation(),$({param:"cheese"},e,"lcd_mobile_body")}function Zi(){let e="LCDbody",t=Ki;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function St(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=s(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function es(e){e.stopPropagation(),e.target,$([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function ts(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",ns)})}function ns(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),ls(n)}function os(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let l=[],h=[],_=0,Dt="",xt="",Rt="";document.getElementById("audio");document.getElementById("PLAYERsource");let P="off",V="off",ie="paused";function At(e){l=[],_=0,l=Oe(e),l.length>0&&(ie="playing",z())}function is(e){l=[],_=0,l=Oe(e),l.length>0&&(V="off",jt(),ie="playing",z())}function Oe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function ss(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;l=t,_=n,vs(o),l!==void 0&&l.length>0&&ps(i)}async function as(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await we(t),i=JSON.parse(o);i.ProjectID=t;const s=Oe(i);if(n==="later")l=l.concat(s),h=h.concat(s);else if(n==="next"){let a=l.slice(0,_+1),r=l.slice(_+1);l=a,l=l.concat(s),l=l.concat(r),a=h.slice(0,_+1),r=h.slice(_+1),h=a,h=h.concat(s),h=h.concat(r)}H()}async function rs(e,t){const n=Oe(e);if(t==="later")l=l.concat(n),h=h.concat(n);else if(t==="next"){let o=l.slice(0,_+1),i=l.slice(_+1);l=o,l=l.concat(n),l=l.concat(i),o=h.slice(0,_+1),i=h.slice(_+1),h=o,h=h.concat(n),h=h.concat(i)}H()}function Be(){cs()}function cs(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(W("playing"),ie="playing",e.play().then(n=>Jt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(ie="paused",W("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){Be()});navigator.mediaSession.setActionHandler("pause",function(){Be()});function Nt(){Ht()}function Ut(){$t()}function ds(){document.getElementById("audio").addEventListener("ended",_s)}function ls(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function us(){fs()}function ms(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:P,PLAYBACK_shuffle_state:V,progress:t}}function jt(){if(V==="off"){V="on",mt(V);const t=_+1;h=[...l],l.slice(0,_);const n=l.slice(t);to(n);const o=n.length;l.splice(_,o,...n),H()}else{V="off",mt(V);const t=[...h],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];l=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(_=e);H()}}function z(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${I}/${l[_].url}/3`,e.load(),ie==="playing"?(e.play().then(o=>Jt()).catch(o=>console.log(o)),W("playing")):W("paused"),Gt(),kt()}function ps(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${I}/${l[_].url}/3`,t.load(),t.currentTime=e,W("paused"),Gt(),kt()}function kt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${$e(s)}"`,c=`"${$e(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;os(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,qt()})}function Gt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=l[_].song_name,t.innerHTML=l[_].song_name,n.innerHTML=l[_].project_contributors,St(),o.src=`${I}/${l[_].img}/3`,i.src=`${I}/${l[_].img}/3`,Dt=`${I}/${l[_].img}/5`,xt=l[_].song_name,Rt=l[_].project_contributors,H()}function Jt(){let e=l[_];const t=[{src:`${I}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),qt()}function qt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function gs(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",W("paused"),l=[],h=[],_=0,t.src="http://null.com/null"}function _s(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=l.length;e.pause(),t>_+1&&(P=="off"||P=="on")?(_+=1,z()):P=="song"?z():t==_+1&&P=="on"?(_=0,z()):gs()}function Ht(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),l.length>_+1&&(e.pause(),_+=1,z())}navigator.mediaSession.setActionHandler("nexttrack",function(){Ht()});function $t(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),l.length,e.currentTime>2){e.currentTime=0;return}else if(_>0){e.pause(),_-=1,z();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){$t()});function fs(){P=="off"?(P="on",K(P)):P=="on"?(P="song",K(P)):(P="off",K(P))}function vs(e){e=="off"?(P="off",K(P)):e=="on"?(P="on",K(P)):(e="song",P="on",K(P))}function Es(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",bs),t.addEventListener("click",ys),n.addEventListener("click",hs),o.addEventListener("click",Ts),i.addEventListener("click",Is)}function bs(){jt()}function ys(){Ut()}function hs(){Be()}function Ts(){Nt()}function Is(){us()}function mt(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function K(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function W(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function Cs(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Yt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ws)})}function ws(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Yt(n)}function Yt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ls(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=so(Ps,150);t.addEventListener("keyup",()=>{n(event,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",Ft()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function Ps(e,t){if(t.value==""){Ft();return}console.log(t.value)}function Ft(){console.log("Clear the search results")}const M="/apis",I="/media";async function Qt(){ds(),Wn(),Xn(),Wi(),Es(),Ls(),Cs(),Io(),Gi(),Xo(),Eo()}window.hasCodeRun||(Qo(),window.hasCodeRun=!0);
