(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ve="/assets/menu_options_button-a1d7bbe3.svg",xt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Dt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,Rt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,At="/assets/volume_null-e39cf06f.svg",Nt="/assets/recently_added-a0a983c6.svg",jt="/assets/volume_3-c8ab0a75.svg",Ut="/assets/orange_music_text_logo_black-12e7386c.svg",kt="/assets/volume_2-cfdac9da.svg",Gt="/assets/browse_2-85030bba.svg",Jt="/assets/volume_1-27e93416.svg",Yt="/assets/orange_music_logo_white-2a680ea2.svg",qt="/assets/search_icon-4f5e4381.svg",Ht="/assets/orange_music_text_logo_black-91f9e706.png",$t="/assets/up_next_queue_button-14fedba2.svg",Ft="/assets/orange_music_logo_yellow-a109ff64.svg",Qt="/assets/playlist-c6e9024f.svg",Vt="/assets/loop_button-aef56865.svg",zt="/assets/help_icon-867fec9d.svg",Kt="/assets/play_button-b1e2d3a4.svg",Wt="/assets/browse-14744f27.svg",Xt="/assets/orange_music_text_logo_white-7f0ba909.svg",Zt="/assets/back_button-8128cade.svg",en="/assets/Albums-2e81dc74.svg",tn="/assets/songs-016b7188.svg",nn="/assets/orange_music_logo_black-4d7e4591.svg",on="/assets/your_uploaded_songs-06535705.svg",sn="/assets/artist-ab677d43.svg",an="/assets/shuffle_button-c2f06bc4.svg",rn="/assets/orange_music_text_logo_white-4907051e.png",cn="/assets/listen_now-c7438154.svg",dn="/assets/derpy-21c20ae5.svg",ln="/assets/next_button-9a850710.svg",un="/assets/recently_added-7ff28139.svg",mn="/assets/play_button-5eeedbe6.svg",pn="/assets/browse-e8be8609.svg",_n="/assets/albums-681507b8.svg",gn="/assets/listen_now.2-bfa293ac.svg",fn="/assets/your_uploads-02e5c93c.svg",vn="/assets/play_button.2-fc90fac7.svg",En="/assets/listen_now-fb02ffce.svg",yn="/assets/browse.2-15b501dd.svg",bn="/assets/place_holder_image-d4006a96.svg",hn="/assets/icons_MOGitems_add-19e679f7.svg",Tn="/assets/back-9279721d.svg",In="/assets/forwards-605bd405.svg",Cn="/assets/icons_close-57e87944.svg",wn="/assets/icons_pause-8012f8cc.svg",Ln="/assets/icons_loop-32d1576c.svg",Pn="/assets/icons_loop_song-87f53dc7.svg",Bn="/assets/icons_play-a5074c5b.svg",On="/assets/icons_settings-793063fb.svg",Mn="/assets/love-07ac5006.svg",Sn="/assets/upload-3bad9145.svg",E={icons_volumeNull:At,icons_recentlyAdded:Nt,icons_volume3:jt,icons_orangeMusicTextLogoBlack:Ut,icons_volume2:kt,icons_browse2:Gt,icons_volume1:Jt,icons_orangeMusicLogoWhite:Yt,icons_searchIcon:qt,icons_orangeMusicTextLogoBlackPng:Ht,icons_queueButton:$t,icons_orangeMusicLogoYellow:Ft,icons_playlist:Qt,icons_loopButton:Vt,icons_helpIcon:zt,icons_playButton:Kt,icons_browse:Wt,icons_menuOptionsButton:Ve,icons_orangeMusicTextLogoWhite:Xt,icons_backButton:Zt,icons_Albums:en,icons_songs:tn,icons_orangeMusicLogoBlack:nn,icons_yourUploadedSongs:on,icons_artist:sn,icons_shuffleButton:an,icons_orangeMusicTextLogoWhitePng:rn,icons_listenNow:cn,icons_derpy:dn,icons_nextButton:ln,icons_recentlyAddedV2:un,icons_playButtonV2:mn,icons_browseV2:pn,icons_albumsV2:_n,icons_listenNow2V2:gn,icons_yourUploads:fn,icons_playButton2:vn,icons_listenNowV2:En,icons_browse2V2:yn,v3_placeholder:bn,icons_MOGitems_add:hn,icons_back:Tn,icons_forwards:In,icons_close:Cn,icons_pause:wn,icons_loop:Ln,icons_loop_song:Pn,icons_play:Bn,icons_settings:On,current_year:new Date().getFullYear(),icons_love:Mn,icons_upload:Sn};function xn(){let e="topleftContentArea",t=xt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Dn(){let e="toprightContentArea",t=Dt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Rn(){let e="MAINcontentContainer",t=Rt;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const An=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function M(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function ze(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Nn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Pe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function jn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Ke(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ve(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Un(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=kn(o,i,s),r=_e(a[0]),c=_e(a[1]),l=_e(a[2]);return Gn({r,g:c,b:l})}function kn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function _e(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Gn(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Jn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Yn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,qn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,Hn=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,$n=`
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
`;let he=!1;function Fn(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=Hn,n.addEventListener("click",function(o){he==!1?Qn(o):Ee()}),t.innerHTML=$n}let Be;function Qn(e){he=!0,Be=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",Ee),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const m=Be.getBoundingClientRect();t=m.left+window.scrollX,n=m.top+window.scrollY;let y=t+"px",b=n+"px";o.style.left=y,o.style.top=b}const r=o.offsetWidth,c=o.offsetHeight,l=ut("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),l.xOverflow==!0&&(i=t-r+"px",o.style.left=i),l.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(m){(m.key==="Escape"||m.keyCode===27)&&(document.removeEventListener("keydown",u),Ee())}}function Ee(){he=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}const Oe=1500;let We=0,ye=[],ge;function A(e,t){const o=new Date().getTime();ye.push({notificationText:e,notificationType:t,time:o}),Xe()}function Xe(){const t=new Date().getTime(),n=ye.at(We);ye.length>1?t-ge>Oe?(Me(n.notificationText,n.notificationType),ge=t):setTimeout(Xe,Oe):(Me(n.notificationText,n.notificationType),ge=t)}function Me(e,t){const n=document.getElementById("noticationContainer");let o;We+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Vn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,zn=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Kn=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Ze=30;let W=0;async function Wn(){try{const e=document.getElementById("MAINcontentPages");Xn();const t=await at(Ze,W);W+=t.length,Zn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function et(){W=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",tt),e.innerHTML=""}function Xn(){let e="MAINcontentPages",t=Vn;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Zn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=zn;for(const[a,r]of Object.entries(E)){const c=new RegExp(`\\{${a}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,Se(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){tt(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const l=a.target.id.split("-")[1],u=r[l].project_id;console.log(u),nt(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const l=await at(Ze,W);W+=l.length,l.length>0&&Se(l)}})}function Se(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,c=e[o].bottom,l=e[o].days,u=jn(l);let m=Kn;for(const[y,b]of Object.entries(E)){const B=new RegExp(`\\{${y}\\}`,"g");m=m.replace(B,b)}for(let y=0;y<i.length;y++){const b=i[y].toString(),B=new RegExp(`\\{${b}\\}`,"g");let _="";b==="MOG_image"?_=`${v}/${a}/3`:b==="MOG_text1"?_=r:b==="MOG_text2"?_=c:b==="MOG_checkedDate"?_=u:b==="MOGI_placeholder_itemID"&&(_=s),m=m.replace(B,_)}t.innerHTML+=m}}async function tt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await de(i),a=JSON.parse(s);a.ProjectID=i,vt(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;nt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;N(`/projects/${i}`)}n.id==="MOGaddNewItem"&&eo()}function nt(e,t){e.stopPropagation(),q([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function eo(){N("/new-project/")}const to=`<div class="ADMINusersTableInfoRow">
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
</div>`,no=`<h1>Admin</h1>
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
</details>`,oo=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function io(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){so(a,r,c)}}function so(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),q(o,e,n)}const ao=`<h1>General</h1>
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
<p>Thank you for using OM2 <img style="filter: var(--make-svg-orange);" src="{icons_love}" height="20"></p>`,ro=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>`,co=`<div class="settings_container">
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
</div>`;let Te;async function lo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ie("profile_picture"),n=`${v}/${t}/1`;Te=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",uo)}catch(t){console.error("Error initializing account image:",t)}}function uo(e){e.stopPropagation(),mo(e)}function mo(e){q([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function po(){await Bo()}let ot="general";const re=[{name:"general",markup:ao,button_id:"settings_button_general",function:go},{name:"user",markup:ro,button_id:"settings_button_user",function:fo},{name:"admin",markup:oo,button_id:"settings_button_admin",function:vo}];function _o(){const e=document.getElementById("MAINcontentPages");let t=co;for(const[i,s]of Object.entries(E)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");xe(ot);for(var o=re.length-1;o>=0;o--){const i=re[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,l=re.find(u=>u.button_id===r).name;xe(l)})}n.addEventListener("click",function(){N("/")})}function it(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function xe(e){ot=e;const t=["users_img"],n=document.getElementById("view_container"),o=re.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(E)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${v}/${Te}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function go(){}function fo(){io("user-id","settings_views_user_pfp_img","update_user_pfp")}let K=[];async function vo(){if(await Ie("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=no;for(const[s,a]of Object.entries(E)){const r=new RegExp(`\\{${s}\\}`,"g");o=o.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${v}/${Te}/4/`),o=o.replace(r,c)}n.innerHTML=o,st(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const a=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(a.value==""||r.value=="")A("Error Updating Column: empty inputs","error");else for(var c=K.length-1;c>=0;c--){const l=K[c];Po(l,a.value,r.value)}})}let R;async function st(){const e=await Lo();R=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<R.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=R[n].username,s=R[n].uuid,a=R[n].verified,r=R[n].email;let c=R[n].storage_allowance;c=ve(c);const l=R[n].admin,u=n;let m=R[n].storage_used;m=ve(m);let y=to,b=R[n].profile_picture;b=`${v}/${b}/1/`;for(let B=0;B<o.length;B++){const _=o[B].toString(),O=new RegExp(`\\{${_}\\}`,"g");let I="";_==="Username"?I=i:_==="Email"?I=r:_==="UUID"?I=s:_==="Verified"?I=a:_==="Space_Used"?I=m:_==="Storage_Allowance"?I=c:_==="profile_picture_url"?I=b:_==="checkbox_number"?I=u:_==="Admin"&&(I=l),y=y.replace(O,I)}t.innerHTML+=y}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Eo()})}function Eo(){K=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=R[i.id].uuid;K.push(a)}),o.innerHTML=`Selected Items: ${K.length}`}async function yo(){const e=await Ie("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;N(r),wi(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=d,l=p,u=xi();u.current_path=r,u.current_queue=c,u.current_index=l;const m=i(u);m!==o&&(Io("last_state",u),o=m,n.set("playback_states",m))}function a(){N(currentPath)}}function bo(){ct(),it(),Wn()}function ho(e){et(),it(),xo(e)}function De(){et(),ct(),_o()}const Re={"/":bo,"/new-project/":se,"/new-project":se,"/new/":se,"/new":se,"/projects/:projectID":ho,"/settings/":De,"/settings":De};function To(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){N("/")}}function N(e){const t=Object.keys(Re);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Re[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}To()}async function Io(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${P}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Co(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${P}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&A("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Ie(e){try{return(await(await fetch(`${P}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function wo(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${P}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function de(e){try{return(await(await fetch(`${P}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function at(e,t){try{const i=(await(await fetch(`${P}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function se(){try{const o=`/projects/${(await(await fetch(`${P}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;N(o)}catch(e){console.error("Error:",e)}}async function Lo(){try{return(await(await fetch(`${P}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Po(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${P}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){A("Table Updated Successfully","success"),st();return}else{A(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){A(`Error Updating Column ${t}: ${o}`,"error");return}}async function Bo(){try{const t=await(await fetch(`${P}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const Oo=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Mo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,So=`<div class="PROJECTviewContainerEnvironment">
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
</div>`;let Ae;function rt(e){return new Promise((t,n)=>{Ae=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){Ne(),t("delete")}function l(){Ae.focus(),Ne(),t("cancel")}i.addEventListener("click",u=>{const m=u.target;m===a?c():(m===r||m===i)&&l()}),o==="keyboard"&&!M()?r.focus():o=="mouse"&&!M()&&(G(),r.focus(),r.blur())})}function Ne(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}let je=!1,f,Ce=!1;async function xo(e){let t;Ce=!0,ze()==!0?t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"..",ProjectContributors:"...",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Ao(t),sessionStorage.setItem("description","."),Ue(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{N("/")});const o=await de(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,f=s,i(),Ro()}function i(){document.getElementById("PROJECTview_upload_area_files_upload_box").remove(),Do(),sessionStorage.setItem("description",f.Description),Ue(),No(),Uo(),ko(),Go(),lt(),zo(),Vo(f.ProjectName)}}function ct(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",Ce=!1}async function dt(){if(!Ce)return;const e=f.ProjectID,t=await de(e);if(t!=""){const n=JSON.parse(t);n.ProjectID=e,f=n,lt();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${v}/${f.PictureURL}/5`;o.src=i}}function Do(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),i=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year"),s=`${v}/${f.PictureURL}/5`;e.innerText=f.ProjectName,t.innerText=f.ProjectContributors,n.src=s,o.innerText=f.ProjectName,i.innerText=`${f.ProjectContributors} | ${Ke(f.TimeCreated)}`}function Ro(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");document.getElementById("PROJECTviewDisplayTitleH1").innerText,document.getElementById("PROJECTviewDisplayTitleH3").innerText;{e.contentEditable=!1,t.contentEditable=!1;return}}function Ao(e){let t="MAINcontentPages",n=So;for(const[i,s]of Object.entries(E)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=Ke(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${v}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function Ue(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function No(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",M()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function jo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Uo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function ko(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){ke(f)}),t.addEventListener("click",function(n){n.target===t&&ke(f)})}function ke(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),wo(e.ProjectID,"description",n),o.style.display="none",jo(),i.style.zIndex=""}async function Go(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){vt(f)}),t.addEventListener("click",function(){Ci(f)}),n.addEventListener("click",function(){Ge(event)}),o.addEventListener("click",function(){Ge(event)})}function Ge(e){e.stopPropagation(),e.target;const t=f.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],q(n,e)}async function Jo(e){const t=`Are you sure that you want to delete <em><b>${f.ProjectName}</b></em>? This action is not reversable.`,n=await rt(t);if(n==="cancel")G();else if(n==="delete"){const o="/";await Yo(),G(),N(o)}else G()}async function Yo(e){const t=f.ProjectID;try{const o=await(await fetch(`${P}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function lt(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Fo();const t=document.getElementById("PROJECTview-projectTable"),n=f.ProjectJSON;if(Un("--orange"),n==null)return;const o=[];if(n)for(const i of n)o.push({img:f.PictureURL,songTitle:i.SongName,artistName:f.ProjectContributors,projectName:ve(i.FolderSize),songDuration:`${Math.floor(i.Duration/60)}:${(i.Duration%60).toString().padStart(2,"0")}`,songSequence:i.SongSequence,version:i.Version,url:i.URL});for(let i=0;i<o.length;i++){o[i].ProjectID=i;const s=o[i],a=Qo(s);t.insertAdjacentHTML("beforeend",a),t.lastElementChild}t.addEventListener("click",function(i){const s=i.target;if(i.stopPropagation(),s.tagName==="BUTTON"){const a=s.closest(".PROJECTview-projectTable-rowContainer");a&&(a.getAttribute("data-row-id"),qo(i))}})}function qo(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id");t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let o;o=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}}],q(o,e)}function Ho(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=f;const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,Pi(i,o)}async function $o(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`,n=await rt(t);n==="cancel"||(n==="delete"?(await Co(f.ProjectID,e.songID),G(),dt()):console.error("a statement was returned that isn't valid"))}function Fo(){let e="PROJECTview_projectAreaContainer",t=Oo;for(const[n,o]of Object.entries(E)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Qo(e){let t=Mo;for(const[o,i]of Object.entries(E)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${v}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&je===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&je===!1&&(a=!1),t=t.replace(s,a)}return t}function Vo(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function zo(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&M()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!M()||!r.isIntersecting&&!M()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&M()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Ko=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Wo(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&A("Storage limit reached","error"),n!=="update_user_pfp"?ni():(oi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${P}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Xo(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Wo(o,t,n)}const Zo=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let ce,Y=!1;function q(e,t,n){n===void 0?ti(e,t):n!==void 0&&n==="update_project_image"?Je(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Je(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?ei():console.log("invalid menu display inputs")}function ei(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=qn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;M()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[w,x]of Object.entries(E)){const D=new RegExp(`\\{${w}\\}`,"g");i=i.replace(D,x)}o.style.display="block",o.innerHTML=i;const l=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),y=s.duration,B=s.currentTime/y*100,_=document.getElementById("LCDMB_seek_input"),O=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const I=document.getElementById("LCDMB_back"),C=document.getElementById("LCDMB_play"),j=document.getElementById("LCDMB_play_icon"),U=document.getElementById("LCDMB_next"),h=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{L(),Y===!0&&k()}),L(),S(),O.style.width=`${B}%`,s.addEventListener("timeupdate",()=>{const w=s.duration,D=s.currentTime/w*100;O.style.width=`${D}%`}),_.addEventListener("input",function(){const w=s.duration,x=_.value;s.currentTime=w*(x/100)}),I.addEventListener("click",()=>{yt(),L(),Y===!0&&k()}),C.addEventListener("click",()=>{ue(),L(),S()}),U.addEventListener("click",()=>{Et(),L(),Y===!0&&k()}),h.addEventListener("click",()=>{Y===!1?(we(),Y=!0):(Le(),Y=!1)}),Y===!0?we():Le(),o.addEventListener("touchstart",Z,!1),o.addEventListener("touchmove",ee,!1),o.addEventListener("touchend",te,!1);function L(){m.src=_t,l.innerText=gt,u.innerText=ft}function S(){s.paused?j.src=E.icons_playButtonV2:j.src=E.icons_derpy}function k(){const w=document.getElementById("LCD_mobile_queue_content_container");w.innerHTML="";for(let x=p+1;x<d.length;x++){const D=d[x],ne=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],z=D.img,Ot=D.song_name,Mt=D.project_contributors;let me=Yn;for(let pe=0;pe<ne.length;pe++){const oe=ne[pe].toString(),St=new RegExp(`\\{${oe}\\}`,"g");let ie="";oe==="queue_item_img"?ie=`${v}/${z}/3`:oe==="queue_item_song_name"?ie=Ot:oe==="queue_item_song_artist"&&(ie=Mt),me=me.replace(St,ie)}w.innerHTML+=me}}function we(){function w(x){x.forEach(D=>{document.querySelectorAll("."+D).forEach(z=>{z.classList.add("queue_visible")})})}w(a),o.removeEventListener("touchstart",Z),o.removeEventListener("touchmove",ee),o.removeEventListener("touchend",te),k()}function Le(){function w(x){x.forEach(D=>{document.querySelectorAll("."+D).forEach(z=>{z.classList.remove("queue_visible")})})}w(a),o.addEventListener("touchstart",Z,!1),o.addEventListener("touchmove",ee,!1),o.addEventListener("touchend",te,!1)}function Z(w){Y===!1&&(r=w.touches[0].clientY)}function ee(w){w.preventDefault()}function te(w){c=w.changedTouches[0].clientY,c-r>70&&(G(),o.removeEventListener("touchstart",Z),o.removeEventListener("touchmove",ee),o.removeEventListener("touchend",te))}}function ti(e,t){ce=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");M()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Zo,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",l=o+"px";a.addEventListener("click",mt),r.style.left=c,r.style.top=l;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const C=ce.getBoundingClientRect();n=C.left+window.scrollX,o=C.top+window.scrollY;let j=n+"px",U=o+"px";r.style.left=j,r.style.top=U}for(let C=0;C<e.length;C++)ii(e[C]);const y=r.children[0],b=r.offsetWidth,B=r.offsetHeight,_=ut("MENUmodalBody"),O=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!M()?y.focus():u=="mouse"&&!M()&&(y.focus(),y.blur()),document.addEventListener("keydown",I),_.xOverflow==!0&&(c=n-b+"px",r.style.left=c),_.yOverflow==!0&&(l=o-B+"px",r.style.top=l);for(let C=0;C<O.length;C++){const j=O[C];j.setAttribute("data-menu-item-id",C),j.addEventListener("click",function(U){U.stopPropagation();const L=U.target.getAttribute("data-menu-item-id"),S=e[L].function,k=e[L].optionalParams;if(S=="TEST")console.log("the button worked",k);else if(S!="None"){si[S](k);return}else return})}function I(C){(C.key==="Escape"||C.keyCode===27)&&(document.removeEventListener("keydown",I),G())}}function Je(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",l=i+"px";M()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=Jn,r.style.display="block",r.addEventListener("click",mt);const u=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),y=document.getElementById("MENUmodalBody_image_select_file_select_button"),b=document.getElementById("MENUmodalBody_image_select_preview_area"),B=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=l;let O,I;function C(h,L){return function(){const S=this,k=arguments;clearTimeout(I),I=setTimeout(()=>{h.apply(S,k)},L)}}function j(h,L,S){C(Xo,100)(h,L,S)}function U(h){if(O){const L=URL.createObjectURL(O),S=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");b.src=L,B.style.visibility="visible",_.style.outline="3px solid var(--primary)",B.addEventListener("click",()=>{j(O,h.project_id,h.MenuType),S.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",h=>{h.preventDefault()}),m.addEventListener("drop",h=>{h.preventDefault(),O=h.dataTransfer.files[0],U(e)}),y.addEventListener("click",()=>{const h=document.createElement("input");h.type="file",h.accept="image/*",h.addEventListener("change",L=>{O=L.target.files[0],U(e)}),h.click()})}function ni(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G(),dt()}function oi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G()}function ut(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,l=r+a;let u=!1,m=!1;return c>n&&(u=!0),l>o&&(m=!0),{xOverflow:u,yOverflow:m}}function ii(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",M()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=Ko.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,l]of Object.entries(E)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,l)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function mt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function G(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),ce&&ce.focus()}const si={PROJECT_VIEW_delete_project(e){Jo()},PLAYBACK_add_songs_to_queue(e){Li(e)},SIGN_OUT_USER(e){po()},OPEN_SETTINGS_PAGE(e){N("/settings/")},PROJECT_VIEW_delete_song(e){$o(e)},PROJECT_VIEW_add_song_to_queue(e){Ho(e)}};let H="hidden";function ai(){Rn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");be(H),e.addEventListener("click",ri),t.addEventListener("click",ci),J()}function ri(){if(H==="hidden"){H="visible",be(H);return}if(H==="visible"){H="hidden",be(H);return}}function be(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",ze&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function J(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=p+1;t<d.length;t++){d[t].id=t;const n=d[t],o=gi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",_i),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",mi),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&pi(r)}),i.addEventListener("dragstart",di),i.addEventListener("dragover",li),i.addEventListener("drop",ui),e.appendChild(i)}}function ci(){const e=p+1;e>=0&&e<d.length?d.splice(e):d.length=0,J()}function di(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function li(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function ui(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=d.find(r=>r.id===parseInt(t)),i=d.find(r=>r.id===parseInt(n.dataset.songId)),s=d.indexOf(o),a=d.indexOf(i);s!==-1&&a!==-1&&(d.splice(s,1),d.splice(a,0,o),g.splice(s,1),g.splice(a,0,o),J())}function mi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=d.findIndex(i=>i.id===n);o!==-1&&(d.splice(o,1),g.splice(o,1)),J()}function pi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];q(o,e)}function _i(e){}function gi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=An;for(let c=0;c<t.length;c++){const l=t[c].toString(),u=new RegExp(`\\{${l}\\}`,"g");let m="";l==="QUEUE_item_image"?m=`${v}/${n}/3`:l==="QUEUE_item_title"?m=o:l==="QUEUE_item_artist"?m=i:l==="icons_menuOptionsButton"?m=Ve:l==="QUEUE_item_timeIndicator"&&(m=s),a=a.replace(u,m)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const fi=`<div class="LCDbody">
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
</div>`;function vi(){yi(),pt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){bi(t)}),hi(),M()&&document.getElementById("LCDbody").addEventListener("click",Ei)}function Ei(e){e.stopPropagation(),q({param:"cheese"},e,"lcd_mobile_body")}function yi(){let e="LCDbody",t=fi;for(const[o,i]of Object.entries(E)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function pt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,l,u;e=n.clientWidth,l=s(),u=e/o,u>l?c=l+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),l=document.createElement("span");l.style.visibility="hidden",l.style.whiteSpace="nowrap",l.textContent=c.textContent,document.body.appendChild(l);const u=l.offsetWidth;return document.body.removeChild(l),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function bi(e){e.stopPropagation(),e.target,q([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function hi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Ti)})}function Ti(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Mi(n)}function Ii(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let d=[],g=[],p=0,_t="",gt="",ft="";document.getElementById("audio");document.getElementById("PLAYERsource");let T="off",$="off",X="paused";function vt(e){d=[],p=0,d=le(e),d.length>0&&(X="playing",F())}function Ci(e){d=[],p=0,d=le(e),d.length>0&&($="off",bt(),X="playing",F())}function le(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,l=a.URL;t.push({img:i,song_name:r,url:l,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function wi(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;d=t,p=n,ji(o),d!==void 0&&d.length>0&&Di(i)}async function Li(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await de(t),i=JSON.parse(o);i.ProjectID=t;const s=le(i);if(n==="later")d=d.concat(s),g=g.concat(s);else if(n==="next"){let a=d.slice(0,p+1),r=d.slice(p+1);d=a,d=d.concat(s),d=d.concat(r),a=g.slice(0,p+1),r=g.slice(p+1),g=a,g=g.concat(s),g=g.concat(r)}J()}async function Pi(e,t){const n=le(e);if(t==="later")d=d.concat(n),g=g.concat(n);else if(t==="next"){let o=d.slice(0,p+1),i=d.slice(p+1);d=o,d=d.concat(n),d=d.concat(i),o=g.slice(0,p+1),i=g.slice(p+1),g=o,g=g.concat(n),g=g.concat(i)}J()}function ue(){Bi()}function Bi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(V("playing"),X="playing",e.play().then(n=>It()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(X="paused",V("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){ue()});navigator.mediaSession.setActionHandler("pause",function(){ue()});function Et(){wt()}function yt(){Lt()}function Oi(){document.getElementById("audio").addEventListener("ended",Ai)}function Mi(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Si(){Ni()}function xi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:T,PLAYBACK_shuffle_state:$,progress:t}}function bt(){if($==="off"){$="on",Ye($);const t=p+1;g=[...d],d.slice(0,p);const n=d.slice(t);Nn(n);const o=n.length;d.splice(p,o,...n),J()}else{$="off",Ye($);const t=[...g],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];d=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(p=e);J()}}function F(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${v}/${d[p].url}/3`,e.load(),X==="playing"?(e.play().then(o=>It()).catch(o=>console.log(o)),V("playing")):V("paused"),Tt(),ht()}function Di(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${v}/${d[p].url}/3`,t.load(),t.currentTime=e,V("paused"),Tt(),ht()}function ht(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Pe(s)}"`,c=`"${Pe(Math.floor(i))}"`,l=i/o*100,u=`${l}%`;Ii(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=l,Ct()})}function Tt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=d[p].song_name,t.innerHTML=d[p].song_name,n.innerHTML=d[p].project_contributors,pt(),o.src=`${v}/${d[p].img}/3`,i.src=`${v}/${d[p].img}/3`,_t=`${v}/${d[p].img}/5`,gt=d[p].song_name,ft=d[p].project_contributors,J()}function It(){let e=d[p];const t=[{src:`${v}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${v}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${v}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${v}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${v}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${v}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Ct()}function Ct(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Ri(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",V("paused"),d=[],g=[],p=0,t.src="http://null.com/null"}function Ai(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=d.length;e.pause(),t>p+1&&(T=="off"||T=="on")?(p+=1,F()):T=="song"?F():t==p+1&&T=="on"?(p=0,F()):Ri()}function wt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),d.length>p+1&&(e.pause(),p+=1,F())}navigator.mediaSession.setActionHandler("nexttrack",function(){wt()});function Lt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),d.length,e.currentTime>2){e.currentTime=0;return}else if(p>0){e.pause(),p-=1,F();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Lt()});function Ni(){T=="off"?(T="on",Q(T)):T=="on"?(T="song",Q(T)):(T="off",Q(T))}function ji(e){e=="off"?(T="off",Q(T)):e=="on"?(T="on",Q(T)):(e="song",T="on",Q(T))}function Ui(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",ki),t.addEventListener("click",Gi),n.addEventListener("click",Ji),o.addEventListener("click",Yi),i.addEventListener("click",qi)}function ki(){bt()}function Gi(){yt()}function Ji(){ue()}function Yi(){Et()}function qi(){Si()}function Ye(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function Q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=E.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=E.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=E.icons_loop_song;return}}function V(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=E.icons_pause;return}if(e=="paused"){t.src=E.icons_play;return}}function Hi(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Pt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",$i)})}function $i(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Pt(n)}function Pt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Fi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--text-third)",n.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="",n.style.backgroundColor="",e.style.opacity="0%"})}const Qi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Vi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function zi(){setTimeout(()=>{let e="MAINcontentPages",t=Vi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Ki)},1)}async function Ki(e){console.log("the signup event was caught"),e.preventDefault(),Wi();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${P}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const c=await convertImageToBase64(r);n[a.name]=c}}else n[a.name]=a.value;const s=await fetch(`${P}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();fe(),Xi(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";fe(),qe(),alert(s)}}catch{fe(),qe(),alert("There was an error, try again")}}function Wi(){const e=document.getElementById("spinner");e.style.display="block"}function fe(){const e=document.getElementById("spinner");e.style.display="none"}function Xi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function qe(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ae=!1,He=!1,$e=!1,Fe=!1;async function Zi(){await ns()?Bt():He||(es(),He=!0)}function es(){os();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${P}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Qe(),zi()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ae)return!1;ae=!0;const a=o.value,r=i.value;try{await ts(a,r)?(Fe=!0,A("Login Successful","success"),Bt(),Qe()):(Fe=!1,A("Error Logging In","error")),ae=!1}catch(c){console.error("Error:",c),ae=!1}return!1})}async function ts(e,t){try{return(await(await fetch(`${P}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?A("The server is down","error"):console.error(n),!1}}async function ns(){try{const e=await fetch(`${P}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&A("The server is down","error")}}function os(){let e="MAINcontentPages",t=Qi;document.getElementById(e).innerHTML+=t}function Qe(){if($e===!0)return;$e=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const P="/apis",v="/media";async function Bt(){Oi(),xn(),Dn(),vi(),Ui(),Fi(),Hi(),lo(),ai(),yo(),Fn()}window.hasCodeRun||(Zi(),window.hasCodeRun=!0);
