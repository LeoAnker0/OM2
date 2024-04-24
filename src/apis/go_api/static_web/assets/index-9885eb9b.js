(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const ft="/assets/menu_options_button-a1d7bbe3.svg",on=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,sn=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,an=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,rn="/assets/volume_null-e39cf06f.svg",cn="/assets/recently_added-a0a983c6.svg",dn="/assets/volume_3-c8ab0a75.svg",ln="/assets/orange_music_text_logo_black-12e7386c.svg",un="/assets/volume_2-cfdac9da.svg",mn="/assets/browse_2-85030bba.svg",pn="/assets/volume_1-27e93416.svg",gn="/assets/orange_music_logo_white-2a680ea2.svg",_n="/assets/search_icon-4f5e4381.svg",fn="/assets/orange_music_text_logo_black-91f9e706.png",vn="/assets/up_next_queue_button-14fedba2.svg",En="/assets/orange_music_logo_yellow-a109ff64.svg",bn="/assets/playlist-c6e9024f.svg",yn="/assets/loop_button-aef56865.svg",hn="/assets/help_icon-867fec9d.svg",Tn="/assets/play_button-b1e2d3a4.svg",In="/assets/browse-14744f27.svg",Cn="/assets/orange_music_text_logo_white-7f0ba909.svg",wn="/assets/back_button-8128cade.svg",Ln="/assets/Albums-2e81dc74.svg",Pn="/assets/songs-016b7188.svg",Sn="/assets/orange_music_logo_black-4d7e4591.svg",On="/assets/your_uploaded_songs-06535705.svg",Bn="/assets/artist-ab677d43.svg",Dn="/assets/shuffle_button-c2f06bc4.svg",Mn="/assets/orange_music_text_logo_white-4907051e.png",xn="/assets/listen_now-c7438154.svg",Rn="/assets/derpy-21c20ae5.svg",An="/assets/next_button-9a850710.svg",Nn="/assets/recently_added-7ff28139.svg",jn="/assets/play_button-5eeedbe6.svg",Un="/assets/browse-e8be8609.svg",kn="/assets/albums-681507b8.svg",Gn="/assets/listen_now.2-bfa293ac.svg",Jn="/assets/your_uploads-02e5c93c.svg",$n="/assets/play_button.2-fc90fac7.svg",Hn="/assets/listen_now-fb02ffce.svg",qn="/assets/browse.2-15b501dd.svg",Yn="/assets/place_holder_image-d4006a96.svg",Fn="/assets/icons_MOGitems_add-19e679f7.svg",Qn="/assets/back-9279721d.svg",Vn="/assets/forwards-605bd405.svg",zn="/assets/icons_close-57e87944.svg",Kn="/assets/icons_pause-8012f8cc.svg",Wn="/assets/icons_loop-32d1576c.svg",Xn="/assets/icons_loop_song-87f53dc7.svg",Zn="/assets/icons_play-a5074c5b.svg",eo="/assets/icons_settings-793063fb.svg",to="/assets/love-07ac5006.svg",no="/assets/upload-3bad9145.svg",O={icons_volumeNull:rn,icons_recentlyAdded:cn,icons_volume3:dn,icons_orangeMusicTextLogoBlack:ln,icons_volume2:un,icons_browse2:mn,icons_volume1:pn,icons_orangeMusicLogoWhite:gn,icons_searchIcon:_n,icons_orangeMusicTextLogoBlackPng:fn,icons_queueButton:vn,icons_orangeMusicLogoYellow:En,icons_playlist:bn,icons_loopButton:yn,icons_helpIcon:hn,icons_playButton:Tn,icons_browse:In,icons_menuOptionsButton:ft,icons_orangeMusicTextLogoWhite:Cn,icons_backButton:wn,icons_Albums:Ln,icons_songs:Pn,icons_orangeMusicLogoBlack:Sn,icons_yourUploadedSongs:On,icons_artist:Bn,icons_shuffleButton:Dn,icons_orangeMusicTextLogoWhitePng:Mn,icons_listenNow:xn,icons_derpy:Rn,icons_nextButton:An,icons_recentlyAddedV2:Nn,icons_playButtonV2:jn,icons_browseV2:Un,icons_albumsV2:kn,icons_listenNow2V2:Gn,icons_yourUploads:Jn,icons_playButton2:$n,icons_listenNowV2:Hn,icons_browse2V2:qn,v3_placeholder:Yn,icons_MOGitems_add:Fn,icons_back:Qn,icons_forwards:Vn,icons_close:zn,icons_pause:Kn,icons_loop:Wn,icons_loop_song:Xn,icons_play:Zn,icons_settings:eo,current_year:new Date().getFullYear(),icons_love:to,icons_upload:no};function oo(){let e="topleftContentArea",t=on;for(const[n,o]of Object.entries(O)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function io(){let e="toprightContentArea",t=sn;for(const[n,o]of Object.entries(O)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function so(){let e="MAINcontentContainer",t=an;for(const[n,o]of Object.entries(O)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ao=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function N(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function vt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Ue(e){for(const[t,n]of Object.entries(O)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function Et(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),a=n[o][1],s=new RegExp(`\\{${i}\\}`,"g");e=e.replace(s,a)}return e}function ro(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Ve(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function co(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function bt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function se(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function lo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function yt(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function uo(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function ze(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let he;const y=new Map;function mo(e,t,n){y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const s=Date.now()-i;if(!y.has(e))return;const r=Math.min(s/500,1);if(!y.has(e))return;const c=ht(y.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||y.get(e).isChanging)&&(y.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",y.delete(e))}clearTimeout(he),he=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},500),y.get(e).isChanging=!0;const i=Date.now();y.get(e).animationFrameId=requestAnimationFrame(o)}function po(e,t,n,o,i){const a=i||2500;y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function s(){const d=Date.now()-r;if(!y.has(e))return;const l=Math.min(d/(o==="hardNewToOld"?a*4/5:500),1);if(!y.has(e))return;let m;o==="hardNewToOld"&&l<1?m=n:m=ht(y.get(e).originalColor,Math.min(l,1),n),e.style.backgroundColor=m,l<1||y.get(e).isChanging?y.get(e).animationFrameId=requestAnimationFrame(s):(e.style.backgroundColor="",y.delete(e)),l==1&&(e.style.backgroundColor="",y.delete(e))}clearTimeout(he),he=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},a),y.get(e).isChanging=!0;const r=Date.now();y.get(e).animationFrameId=requestAnimationFrame(s)}function go(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function ht(e,t,n){return _o(n,e,t)}function _o(e,t,n){const o=function(p){return p=p.toString(16),p.length===1?"0"+p:p},i=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),l=Math.round(i*(1-n)+r*n),m=Math.round(a*(1-n)+c*n),h=Math.round(s*(1-n)+d*n);return"#"+o(l)+o(m)+o(h)}function Tt(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,a;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,a=parseInt(n[3],10),a=a/100;const s=fo(o,i,a),r=Ne(s[0]),c=Ne(s[1]),d=Ne(s[2]);return vo({r,g:c,b:d})}function fo(e,t,n){let o=t*Math.min(n,1-n),i=(a,s=(a+e/30)%12)=>n-o*Math.max(Math.min(s-3,9-s,1),-1);return[i(0),i(8),i(4)]}function Ne(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function vo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Eo=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,yo=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,ho=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,To=`
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
`;let Se=!1;function Io(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=ho,n.addEventListener("click",function(o){Se==!1?wo(o):Te()}),t.innerHTML=To}function Co(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Ke(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Se==!0&&G.length>0||Te()}function _e(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(G.length>0){t.innerHTML=G[0].file.name,n.innerHTML=se(G[0].file.size*1.75),Lo(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let a="";for(var o=G.length-1;o>=1;o--){const s=G[o].file.name,r=se(G[o].file.size*1.75);a+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${s}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=a}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let We;function wo(e){Se=!0,We=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",a=n+"px";MENUmodalEnvironment.addEventListener("click",Te),o.style.left=i,o.style.top=a;let s="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(s="keyboard"):e.pointerType!=="mouse"&&(s="keyboard"),s=="keyboard"){const m=We.getBoundingClientRect();t=m.left+window.scrollX,n=m.top+window.scrollY;let h=t+"px",p=n+"px";o.style.left=h,o.style.top=p}const r=o.offsetWidth,c=o.offsetHeight,d=Nt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",l),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(a=n-c+"px",o.style.top=a);function l(m){(m.key==="Escape"||m.keyCode===27)&&(document.removeEventListener("keydown",l),Te())}}function Te(){Se=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function Lo(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),a=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",a.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",a.style.transform="rotate(0deg)"),n?(a.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(a.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}const Xe=1500;let It=0,ke=[],je;function M(e,t){const o=new Date().getTime();ke.push({notificationText:e,notificationType:t,time:o}),Ct()}function Ct(){const t=new Date().getTime(),n=ke.at(It);ke.length>1?t-je>Xe?(Ze(n.notificationText,n.notificationType),je=t):setTimeout(Ct,Xe):(Ze(n.notificationText,n.notificationType),je=t)}function Ze(e,t){const n=document.getElementById("noticationContainer");let o;It+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Po=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`;let Oe;async function So(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Be("profile_picture"),n=`${S}/${t}/3`;Oe=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Oo)}catch(t){console.error("Error initializing account image:",t)}}function Oo(e){e.stopPropagation(),Bo(e)}function Bo(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Do(){await mi(),localStorage.clear(),location.reload()}function Mo(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${S}/${Oe}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",xo)}function xo(e){e.stopPropagation(),Ro(e)}function Ro(e){Y([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Ao=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,No=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,wt=30;let ae=0;async function jo(){try{const e=document.getElementById("MAINcontentPages");Uo();const t=await Dt(wt,ae);ae+=t.length,ko(t),N()&&Mo()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Lt(){ae=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Pt),e.innerHTML=""}function Uo(){let e="MAINcontentPages",t=Po;for(const[n,o]of Object.entries(O)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function ko(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Ao;for(const[s,r]of Object.entries(O)){const c=new RegExp(`\\{${s}\\}`,"g");n=n.replace(c,r)}t.innerHTML+=n,et(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(s){Pt(s,e)});let i;o.addEventListener("touchstart",function(s){s.timeStamp,i=setTimeout(function(){a(s,e)},500)}),o.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(i)});function a(s,r){navigator.vibrate(1e3);const d=s.target.id.split("-")[1],l=r[d].project_id;St(s,l)}t.addEventListener("scroll",async function(){const s=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(s>=r-c){const d=await Dt(wt,ae);ae+=d.length,d.length>0&&et(d)}})}function et(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],a=o,s=e[o].img,r=e[o].top,c=e[o].bottom,d=e[o].days,l=co(d);let m=No;for(const[h,p]of Object.entries(O)){const f=new RegExp(`\\{${h}\\}`,"g");m=m.replace(f,p)}for(let h=0;h<i.length;h++){const p=i[h].toString(),f=new RegExp(`\\{${p}\\}`,"g");let _="";p==="MOG_image"?_=`${S}/${s}/3`:p==="MOG_text1"?_=r:p==="MOG_text2"?_=c:p==="MOG_checkedDate"?_=l:p==="MOGI_placeholder_itemID"&&(_=a),m=m.replace(f,_)}t.innerHTML+=m}}async function Pt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,a=await Qe(i),s=JSON.parse(a);s.ProjectID=i,$t(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;St(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;U(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Go()}function St(e,t){e.stopPropagation(),Y([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Go(){U("/new-project/")}let tt;function Fe(e){return new Promise((t,n)=>{tt=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),a=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=a,i.style.visibility="visible";const s=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){nt(),t("delete")}function d(){tt.focus(),nt(),t("cancel")}i.addEventListener("click",l=>{const m=l.target;m===s?c():(m===r||m===i)&&d()}),o==="keyboard"&&!N()?r.focus():o=="mouse"&&!N()&&($(),r.focus(),r.blur())})}function nt(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const Jo=`<div class="ADMINusersTableInfoRow">
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
</div>`,$o=`<h1>Admin</h1>
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
<br><br>`,ot=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Ot(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(s){s.timeStamp,i=setTimeout(function(){a(s,e,n)},500)}),o.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(s){a(s,e,n)});function a(s,r,c){Ho(s,r,c)}}function Ho(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),Y(o,e,n)}const it=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,fe=`<h1>General</h1>
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
<br><br>`,st=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,qo=`<div class="settings_container">
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
</div>`;let Ie="general",Q;async function Yo(){const e=await Be("admin");e=="true"&&!N()?(Ie="admin",Q=[{name:"general",markup:fe,button_id:"settings_button_general",function:ve},{name:"user",markup:st,button_id:"settings_button_user",function:Ee},{name:"admin",markup:ot,button_id:"settings_button_admin",function:rt}]):e=="false"&&!N()?Q=[{name:"general",markup:fe,button_id:"settings_button_general",function:ve},{name:"user",markup:st,button_id:"settings_button_user",function:Ee}]:N()&&e=="true"?(Ie="admin",Q=[{name:"general",markup:fe,button_id:"settings_button_general",function:ve},{name:"user",markup:it,button_id:"settings_button_user",function:Ee},{name:"admin",markup:ot,button_id:"settings_button_admin",function:rt}]):Q=[{name:"general",markup:fe,button_id:"settings_button_general",function:ve},{name:"user",markup:it,button_id:"settings_button_user",function:Ee}]}async function Fo(){await Yo();const e=document.getElementById("MAINcontentPages");let t=qo;for(const[i,a]of Object.entries(O)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,a)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");at(Ie);for(var o=Q.length-1;o>=0;o--){const i=Q[o].button_id;document.getElementById(i).addEventListener("click",function(s){const r=s.srcElement.id,d=Q.find(l=>l.button_id===r).name;at(d)})}n.addEventListener("click",function(){U("/")})}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function at(e){Ie=e;const t=["users_img"],n=document.getElementById("view_container"),o=Q.find(a=>a.name===e);let i=o.markup;for(const[a,s]of Object.entries(O)){const r=new RegExp(`\\{${a}\\}`,"g");i=i.replace(r,s)}for(let a=0;a<t.length;a++){const s=t[a].toString(),r=new RegExp(`\\{${s}\\}`,"g");let c="";s==="users_img"&&(c=`${S}/${Oe}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function ve(){}function Ee(){Ot("user-id","settings_views_user_pfp_img","update_user_pfp")}let ne=[];async function rt(){if(await Be("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=$o;for(const[s,r]of Object.entries(O)){const c=new RegExp(`\\{${s}\\}`,"g");o=o.replace(c,r)}for(let s=0;s<t.length;s++){const r=t[s].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${S}/${Oe}/4/`),o=o.replace(c,d)}n.innerHTML=o,Je(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(s){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")M("Error Updating Column: empty inputs","error");else for(var d=ne.length-1;d>=0;d--){const l=ne[d];ui(l,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(s){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){M("Error Deleting User: user UUID is empty","error");return}let c=null;for(let m=0;m<j.length;m++)j[m].uuid==r&&(c=j[m].username);if(c===null){M("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,l=await Fe(d);l==="cancel"||l==="delete"&&((await ci(r)).success=="success"?M("Successfully deleted the user","success"):M("Failed to delete the user","error"),Je())})}let j;async function Je(){const e=await li();j=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<j.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=j[n].username,a=j[n].uuid,s=j[n].verified,r=j[n].email;let c=j[n].storage_allowance;c=se(c);const d=j[n].admin,l=n;let m=j[n].storage_used;m=se(m);let h=Jo,p=j[n].profile_picture;p=`${S}/${p}/3`;for(let f=0;f<o.length;f++){const _=o[f].toString(),b=new RegExp(`\\{${_}\\}`,"g");let E="";_==="Username"?E=i:_==="Email"?E=r:_==="UUID"?E=a:_==="Verified"?E=s:_==="Space_Used"?E=m:_==="Storage_Allowance"?E=c:_==="profile_picture_url"?E=p:_==="checkbox_number"?E=l:_==="Admin"&&(E=d),h=h.replace(b,E)}t.innerHTML+=h}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&Qo()})}function Qo(){ne=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const s=j[i.id].uuid;ne.push(s)}),o.innerHTML=`Selected Users: ${ne.length}`}const Vo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,zo=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ko(){let e="MAINcontentPages",t=zo;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Wo),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){U("/")})}async function Wo(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${x}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)M(`There was an error, ${o}`,"error");else{const i=o;M("Sign up Successful, Log in now","success"),U("/")}}catch{M("There was an error, try again","error")}}let te=!1,Ce=!1,$e=!1,we=!1;async function Xo(){await ti()?(Zt(),we=!0):Ce||(Bt(),Ce=!0)}async function Zo(){Ce=!1,te=!1,$e=!1,Bt(),Ce=!0}function Bt(){ni();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${x}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{ct(),Ko()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),te)return!1;te=!0;const a=n.value,s=o.value;try{await ei(a,s)?(we=!0,M("Login Successful","success"),Zt(),ct()):(we=!1,M("Error Logging In","error")),te=!1}catch(r){console.error("Error:",r),te=!1}return!1})}async function ei(e,t){try{return(await(await fetch(`${x}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?M("The server is down","error"):console.error(n),!1}}async function ti(){try{const e=await fetch(`${x}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&M("The server is down","error")}}function ni(){let e="MAINcontentPages",t=Vo;document.getElementById(e).innerHTML+=t}function ct(){if($e===!0)return;$e=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function oi(){const e=await Be("last_state"),t=JSON.parse(e),n=new Map;setInterval(a,1e4);let o=i(t);if(window.addEventListener("popstate",s),t!=null){const r=window.location.pathname;U(r),os(t)}else s();function i(r){return JSON.stringify(r)}function a(){const r=window.location.pathname,c=u,d=v,l=ls();l.current_path=r,l.current_queue=c,l.current_index=d;const m=i(l);m!==o&&(ai("last_state",l),o=m,n.set("playback_states",m))}function s(){U(currentPath)}}function ii(){we==!1?(Ge(),Zo()):(Mt(),Ge(),jo())}function dt(e,t){Lt(),Ge(),t!==null?mt(e,t):mt(e)}function lt(){Lt(),Mt(),Fo()}const ut={"/":ii,"/new-project/":be,"/new-project":be,"/new/":be,"/new":be,"/projects/:projectID":dt,"/projects/:projectID/:songURL":dt,"/settings/":lt,"/settings":lt};function si(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){U("/")}}function U(e){const t=Object.keys(ut);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const a=ut[n],s=i.slice(1);a(...s),e!=="/new-project/"&&history.pushState({},"",e);return}}si()}async function ai(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${x}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function ri(e){try{const t={searchQuery:e};return await(await fetch(`${x}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function ci(e){try{const t={uuid:e};return await(await fetch(`${x}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function di(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${x}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&M("There was an error deleting the song","error");return}catch(a){console.error("Error:",a);return}}async function Be(e){try{return(await(await fetch(`${x}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function oe(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${x}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Qe(e){try{return(await(await fetch(`${x}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Dt(e,t){try{const i=(await(await fetch(`${x}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(s=>({img:s.PictureURL,top:s.ProjectName,bottom:s.ProjectContributors,days:s.TimeCreated,project_id:s.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function be(){try{const o=`/projects/${(await(await fetch(`${x}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;U(o)}catch(e){console.error("Error:",e)}}async function li(){try{return(await(await fetch(`${x}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function ui(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},a=await(await fetch(`${x}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(a.updated==="success"){M("Table Updated Successfully","success"),Je();return}else{M(`Error Updating Column ${t}: ${a.Error}`,"error");return}}catch(o){M(`Error Updating Column ${t}: ${o}`,"error");return}}async function mi(){try{const t=await(await fetch(`${x}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const pi=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function He(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=pi}}const gi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,_i=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,fi=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,G=[];let De=!1,ye=!1,vi=!0,g;async function mt(e,t){De=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?g=JSON.parse(n):vt()==!0?g={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:{},ProjectName:"..",TimeCreated:0}:g={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:{},ProjectName:"..",TimeCreated:0},yi(g),He("","blank"),sessionStorage.setItem("description",g.Description),xt(),qe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{U("/")}),await ce(),Rt(g.ProjectName),bi(),Ot(g.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Li(),He(g,"full"),t!=null){for(var i=g.ProjectJSON.length-1;i>=0;i--)if(g.ProjectJSON[i].URL==t){const s=`${g.ProjectJSON[i].SongSequence}-${g.ProjectJSON[i].Version}`;Ei(s)}}}function Mt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",De=!1}async function ce(){if(!De)return;const e=g.ProjectID,t=await Qe(e);if(t=="")return;const n=structuredClone(g),o=JSON.parse(t);if(o.ProjectID=e,g=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(g)}`),n.Description!==g.Description){const a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");a.innerText=g.ProjectName,s.innerText=`${g.ProjectContributors} | ${bt(g.TimeCreated)}`,sessionStorage.setItem("description",g.Description),xt()}if(n.PictureURL!==g.PictureURL){const a=document.getElementById("PROJECTviewDisplayImage_imgTag"),s=`${S}/${g.PictureURL}/5`;a.src=s}if(n.ProjectContributors!==g.ProjectContributors){const a=document.getElementById("PROJECTviewDisplayTitleH3");a.innerText=g.ProjectContributors}if(n.ProjectName!==g.ProjectName){const a=document.getElementById("PROJECTviewDisplayTitleH1");a.innerText=g.ProjectName}if(n.ProjectJSON!==g.ProjectJSON)if(n.ProjectJSON.length!==g.ProjectJSON.length)qe();else{let a=0;for(var i=g.ProjectJSON.length-1;i>=0;i--)g.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(a+=1);a>0&&qe()}He(g,"full")}function Ei(e){const t=s=>`#${s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=yt(po,0),o=Tt("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var a=i.children.length-1;a>=0;a--){const s=i.children[a].dataset.rowId;if(s!==null&&s==e){const r=i.children[a].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),go(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function bi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),a=document.getElementById("PROJECTviewDisplayDescription"),s=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),l=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),m=document.getElementById("PROJECTviewDisplayMenuButton"),h=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),p=document.querySelector(".PROJECTviewDisplayImage"),f=document.getElementById("PROJECTviewMobileStickyHeader"),_=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const b=document.getElementById("PROJECTviewMOREdescriptionP"),E=new IntersectionObserver(T,{threshold:.1}),P=sessionStorage.getItem("description");b.innerText=P,i.addEventListener("click",function(){A()}),a.addEventListener("dblclick",function(){A()});let B=0;a.addEventListener("touchend",function(w){const I=new Date().getTime();I-B<300&&(w.stopPropagation(),A()),B=I}),c.addEventListener("click",function(){C(g)}),s.addEventListener("click",function(w){w.target===s&&C(g)}),d.addEventListener("click",function(){$t(g)}),l.addEventListener("click",function(){ns(g)}),m.addEventListener("click",function(){pt(event)}),h.addEventListener("click",function(){pt(event)}),E.observe(p),e.addEventListener("blur",function(w){const I=e.innerText;I!==n&&(Rt(I),oe(g.ProjectID,"project_name",I),g.ProjectName=I)}),t.addEventListener("blur",function(w){const I=t.innerText;I!==o&&(oe(g.ProjectID,"project_contributors",I),g.ProjectContributors=I)});function A(){s.style.display="grid",N()&&(r.style.zIndex="40")}function T(w,I){w.forEach(H=>{H.isIntersecting&&N()?(f.style.backdropFilter="none",f.style.backgroundColor="transparent",_.style.visibility="hidden"):H.isIntersecting&&!N()||!H.isIntersecting&&!N()?(f.style.backdropFilter="",f.style.backgroundColor="",_.style.visibility=""):!H.isIntersecting&&N()&&(f.style.backdropFilter="blur(15px)",f.style.backgroundColor="var(--background-transparent)",_.style.visibility="visible")})}function C(w){const I=b.value;sessionStorage.setItem("description",I),oe(w.ProjectID,"description",I),s.style.display="none",b.innerText=I,r.style.zIndex=""}}function yi(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${bt(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${S}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=Et(Ue(fi),t)}function xt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Rt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function pt(e){e.stopPropagation(),e.target;const t=g.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],Y(n,e)}async function hi(e){const t=`Are you sure that you want to delete <em><b>${g.ProjectName}</b></em>? This action is not reversable.`;if(await Fe(t)==="delete"){await Ti(),$(),U("/");return}$()}async function Ti(e){localStorage.removeItem(`project-${projectID}`);const t=g.ProjectID;try{const o=await(await fetch(`${x}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function qe(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=Ue(gi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(g.ProjectJSON);const o=Tt("--orange"),i=p=>`#${p.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(f=>parseInt(f,10).toString(16).padStart(2,"0")).join("")}`;let a;if(n==null)return;for(let p=0;p<n.length;p++){let f=Ue(_i);const _=n[p],b={itemsToReplace:[["PROJECTviewRow_img",`${S}/${g.PictureURL}/3`],["PROJECTviewRow_songTitle",`${_.SongName}`],["PROJECTviewRow_artistName",`${g.ProjectContributors}`],["PROJECTviewRow_projectName",`${se(_.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(_.Duration/60)}:${(_.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${_.SongSequence}-${_.Version}`],["PROJECTviewRow_contentEditable",`${vi}`]]};f=Et(f,b),t.insertAdjacentHTML("beforeend",f);{const E=t.lastElementChild;E.addEventListener("dragstart",s),E.addEventListener("dragover",c),E.addEventListener("drop",d)}}function s(p){p.dataTransfer.setData("text/plain",p.target.dataset.rowId),p.dataTransfer.getData("text/plain"),a=p.srcElement,lo(p.srcElement)}const r=yt(mo,0);function c(p){p.preventDefault(),p.dataTransfer.dropEffect="move";const f=p.target.closest(".PROJECTview-projectTable-rowContainer");if(f!==a){const _=getComputedStyle(f).backgroundColor,b=i(_);r(f,b,o)}}function d(p){p.preventDefault();const f=p.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${f}"]`),b=p.target.closest(".PROJECTview-projectTable-rowContainer");if(b){const P=structuredClone(g),B=b.getAttribute("data-row-id");b.before(_);const A=`${f}|${B}`;setTimeout(async()=>{await oe(g.ProjectID,"SongsTableChangeSongSequenceOrder",A),ce()},1);let T=[];for(var E=0;E<t.children.length;E++){if(E==0)continue;const C=t.children[E],H=C.dataset.rowId.split("-")[0];let Z=P.ProjectJSON[H-1];Z.SongSequence=E,T.push(Z),C.style.backgroundColor="",C.dataset.rowId=`${E}-1`}g.ProjectJSON=T}}t.addEventListener("click",function(p){const f=p.target;if(p.stopPropagation(),f.tagName==="BUTTON"){const _=f.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),Ii(p))}});const l=t.querySelectorAll("[contenteditable]"),m=[],h=p=>{const _=p.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),b=p.target.textContent,E=m.find(T=>T.dataRowIDField===_);if((E?E.currentText:"Row ID not found")==b)return;for(var B=m.length-1;B>=0;B--)m[B].dataRowIDField===_&&(m[B].currentText=b);const A=`${_}-${b}`;oe(g.ProjectID,"project_song_title",A)};l.forEach(p=>{p.addEventListener("blur",h),m.push({dataRowIDField:p.parentElement.parentElement.getAttribute("data-row-id"),currentText:p.innerText})})}function Ii(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],Y(i,e)}function Ci(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(g);const a=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=a,ss(i,o)}async function wi(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await Fe(t)==="delete"&&(await di(g.ProjectID,e.songID),ce()),$()}function Li(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,a=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{t=a.files}),a.click()):n(t)});function n(o,i){Pi(o)}}async function At(){const e=G[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;ye=!0,Co(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(a){if(a.lengthComputable){const s=a.loaded/a.total*100;_e(s),s===100&&_e(s)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){M("Storage limit reached","error");for(var s=G.length-1;s>=0;s--)G.shift();ye=!1,Ke(),_e(0)}ye=!1,G.shift(),Ke(),_e(0),G.length>0&&await At(),g.ProjectID==n&&De==!0&&ce()},i.onerror=function(){M("Upload Failed","error")},i.open("POST",`${x}/files/upload_audio/${n}`,!0),i.send(o)}async function Pi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:g.ProjectID,file:n};G.push(o),ye||await At()}}const Si=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Oi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(a){a.lengthComputable&&a.loaded/a.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&M("Storage limit reached","error"),n!=="update_user_pfp"?Ri():(Ai(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${x}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Bi(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Oi(o,t,n)}const Di=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Le,F=!1;function Y(e,t,n){n===void 0?xi(e,t):n!==void 0&&n==="update_project_image"?gt(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?gt(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Mi():console.log("invalid menu display inputs")}function Mi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=yo;const a=document.getElementById("audio"),s=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;N()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[R,k]of Object.entries(O)){const J=new RegExp(`\\{${R}\\}`,"g");i=i.replace(J,k)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),l=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),h=a.duration,f=a.currentTime/h*100,_=document.getElementById("LCDMB_seek_input"),b=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const E=document.getElementById("LCDMB_back"),P=document.getElementById("LCDMB_play"),B=document.getElementById("LCDMB_play_icon"),A=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");a.addEventListener("ended",()=>{C(),F===!0&&I()}),C(),w(),b.style.width=`${f}%`,a.addEventListener("timeupdate",()=>{const R=a.duration,J=a.currentTime/R*100;b.style.width=`${J}%`}),_.addEventListener("input",function(){const R=a.duration,k=_.value;a.currentTime=R*(k/100)}),E.addEventListener("click",()=>{qt(),C(),F===!0&&I()}),P.addEventListener("click",()=>{xe(),C(),w()}),A.addEventListener("click",()=>{Ht(),C(),F===!0&&I()}),T.addEventListener("click",()=>{F===!1?(H(),F=!0):(Z(),F=!1)}),F===!0?H():Z(),o.addEventListener("touchstart",de,!1),o.addEventListener("touchmove",le,!1),o.addEventListener("touchend",ue,!1);function C(){m.src=kt,d.innerText=Gt,l.innerText=Jt}function w(){a.paused?B.src=O.icons_playButtonV2:B.src=O.icons_derpy}function I(){const R=document.getElementById("LCD_mobile_queue_content_container");R.innerHTML="";for(let k=v+1;k<u.length;k++){const J=u[k],me=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],ee=J.img,en=J.song_name,tn=J.project_contributors;let Re=bo;for(let Ae=0;Ae<me.length;Ae++){const pe=me[Ae].toString(),nn=new RegExp(`\\{${pe}\\}`,"g");let ge="";pe==="queue_item_img"?ge=`${S}/${ee}/3`:pe==="queue_item_song_name"?ge=en:pe==="queue_item_song_artist"&&(ge=tn),Re=Re.replace(nn,ge)}R.innerHTML+=Re}}function H(){function R(k){k.forEach(J=>{document.querySelectorAll("."+J).forEach(ee=>{ee.classList.add("queue_visible")})})}R(s),o.removeEventListener("touchstart",de),o.removeEventListener("touchmove",le),o.removeEventListener("touchend",ue),I()}function Z(){function R(k){k.forEach(J=>{document.querySelectorAll("."+J).forEach(ee=>{ee.classList.remove("queue_visible")})})}R(s),o.addEventListener("touchstart",de,!1),o.addEventListener("touchmove",le,!1),o.addEventListener("touchend",ue,!1)}function de(R){F===!1&&(r=R.touches[0].clientY)}function le(R){R.preventDefault()}function ue(R){c=R.changedTouches[0].clientY,c-r>70&&($(),o.removeEventListener("touchstart",de),o.removeEventListener("touchmove",le),o.removeEventListener("touchend",ue))}}function xi(e,t){Le=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),a=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",a.style.zIndex="0");const s=document.getElementById("MENUmodalEnvironment");s.innerHTML=Di,s.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";s.addEventListener("click",jt),r.style.left=c,r.style.top=d;let l="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(l="keyboard"):t.pointerType!=="mouse"&&(l="keyboard"),l=="keyboard"){const P=Le.getBoundingClientRect();n=P.left+window.scrollX,o=P.top+window.scrollY;let B=n+"px",A=o+"px";r.style.left=B,r.style.top=A}for(let P=0;P<e.length;P++)Ni(e[P]);const h=r.children[0],p=r.offsetWidth,f=r.offsetHeight,_=Nt("MENUmodalBody"),b=r.getElementsByClassName("MENUmodalItemContainer");l==="keyboard"&&!N()?h.focus():l=="mouse"&&!N()&&(h.focus(),h.blur()),document.addEventListener("keydown",E),_.xOverflow==!0&&(c=n-p+"px",r.style.left=c),_.yOverflow==!0&&(d=o-f+"px",r.style.top=d);for(let P=0;P<b.length;P++){const B=b[P];B.setAttribute("data-menu-item-id",P),B.addEventListener("click",function(A){A.stopPropagation();const C=A.target.getAttribute("data-menu-item-id"),w=e[C].function,I=e[C].optionalParams;if(w=="TEST")console.log("the button worked",I);else if(w!="None"){ji[w](I);return}else return})}function E(P){(P.key==="Escape"||P.keyCode===27)&&(document.removeEventListener("keydown",E),$())}}function gt(e,t,n){const o=t.clientX,i=t.clientY,a=document.querySelector("main"),s=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";N()&&(a.style.zIndex="40",s.style.zIndex="0"),e.MenuType=n,a.style.zIndex="2",r.innerHTML=Eo,r.style.display="block",r.addEventListener("click",jt);const l=document.getElementById("MENUmodalBody"),m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),h=document.getElementById("MENUmodalBody_image_select_file_select_button"),p=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");l.style.left=c,l.style.top=d;let b,E;function P(T,C){return function(){const w=this,I=arguments;clearTimeout(E),E=setTimeout(()=>{T.apply(w,I)},C)}}function B(T,C,w){P(Bi,100)(T,C,w)}function A(T){if(b){const C=URL.createObjectURL(b),w=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");p.src=C,f.style.visibility="visible",_.style.outline="3px solid var(--primary)",f.addEventListener("click",()=>{B(b,T.project_id,T.MenuType),w.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",T=>{T.preventDefault()}),m.addEventListener("drop",T=>{T.preventDefault(),b=T.dataTransfer.files[0],A(e)}),h.addEventListener("click",()=>{const T=document.createElement("input");T.type="file",T.accept="image/*",T.addEventListener("change",C=>{b=C.target.files[0],A(e)}),T.click()})}function Ri(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",$(),ce()}function Ai(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",$()}function Nt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,a=t.getBoundingClientRect().left,s=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+a,d=r+s;let l=!1,m=!1;return c>n&&(l=!0),d>o&&(m=!0),{xOverflow:l,yOverflow:m}}function Ni(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let a=new RegExp("\\{MENU_item_text\\}","g"),s=Si.replace(a,t);if(a=new RegExp("\\{MENU_item_colour\\}","g"),s=s.replace(a,i),n!=="None"){a=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";s=s.replace(a,r);for(const[c,d]of Object.entries(O)){const l=new RegExp(`\\{${c}\\}`,"g");s=s.replace(l,d)}o.innerHTML+=s;return}else{s=s.replace(/<img[^>]+>/g,""),o.innerHTML+=s;return}}function jt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function $(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Le&&Le.focus()}const ji={PROJECT_VIEW_delete_project(e){hi(),$()},PLAYBACK_add_songs_to_queue(e){is(e),$()},SIGN_OUT_USER(e){$(),Do()},OPEN_SETTINGS_PAGE(e){$(),U("/settings/")},PROJECT_VIEW_delete_song(e){wi(e)},PROJECT_VIEW_add_song_to_queue(e){Ci(e)}};let V="hidden";function Ui(){so();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ye(V),e.addEventListener("click",ki),t.addEventListener("click",Gi),q()}function ki(){if(V==="hidden"){V="visible",Ye(V);return}if(V==="visible"){V="hidden",Ye(V);return}}function Ye(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",vt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function q(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Qi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Fi),i.dataset.songId=n.id;const a=i.querySelector(".QUEUE-item-image-removeIndicator"),s=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.addEventListener("click",qi),a.dataset.songID=n.id,s.dataset.songSet=n.id,s.addEventListener("click",function(r){r.target===s&&Yi(r)}),i.addEventListener("dragstart",Ji),i.addEventListener("dragover",$i),i.addEventListener("drop",Hi),e.appendChild(i)}}function Gi(){const e=v+1;e>=0&&e<u.length?u.splice(e):u.length=0,q()}function Ji(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function $i(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Hi(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(r=>r.id===parseInt(t)),i=u.find(r=>r.id===parseInt(n.dataset.songId)),a=u.indexOf(o),s=u.indexOf(i);a!==-1&&s!==-1&&(u.splice(a,1),u.splice(s,0,o),L.splice(a,1),L.splice(s,0,o),q())}function qi(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),L.splice(o,1)),q()}function Yi(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];Y(o,e)}function Fi(e){}function Qi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,a=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let s=ao;for(let c=0;c<t.length;c++){const d=t[c].toString(),l=new RegExp(`\\{${d}\\}`,"g");let m="";d==="QUEUE_item_image"?m=`${S}/${n}/3`:d==="QUEUE_item_title"?m=o:d==="QUEUE_item_artist"?m=i:d==="icons_menuOptionsButton"?m=ft:d==="QUEUE_item_timeIndicator"&&(m=a),s=s.replace(l,m)}s=s.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=s,r.innerHTML}const Vi=`<div class="LCDbody">
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
</div>`;function zi(){Wi(),Ut(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Xi(t)}),Zi(),N()&&document.getElementById("LCDbody").addEventListener("click",Ki)}function Ki(e){e.stopPropagation(),Y({param:"cheese"},e,"lcd_mobile_body")}function Wi(){let e="LCDbody",t=Vi;for(const[o,i]of Object.entries(O)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),a=new RegExp(`\\{${i}\\}`,"g");let s="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(s=""),t=t.replace(a,s)}document.getElementById(e).innerHTML=t}function Ut(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,l;e=n.clientWidth,d=a(),l=e/o,l>d?c=d+10:c=l,t.style.width=c+"px"}function a(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function s(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=s();window.addEventListener("resize",r),i()}function Xi(e){e.stopPropagation(),e.target,Y([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Zi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",es)})}function es(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),cs(n)}function ts(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],L=[],v=0,kt="",Gt="",Jt="";document.getElementById("audio");document.getElementById("PLAYERsource");let D="off",z="off",re="paused";function $t(e){u=[],v=0,u=Me(e),u.length>0&&(re="playing",K())}function ns(e){u=[],v=0,u=Me(e),u.length>0&&(z="off",Yt(),re="playing",K())}function Me(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let a=e.ProjectJSON;try{for(const s of a){const r=s.SongName,c=s.Duration,d=s.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(s){console.log(s)}return t}function os(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,_s(o),u!==void 0&&u.length>0&&us(i)}async function is(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Qe(t),i=JSON.parse(o);i.ProjectID=t;const a=Me(i);if(n==="later")u=u.concat(a),L=L.concat(a);else if(n==="next"){let s=u.slice(0,v+1),r=u.slice(v+1);u=s,u=u.concat(a),u=u.concat(r),s=L.slice(0,v+1),r=L.slice(v+1),L=s,L=L.concat(a),L=L.concat(r)}q()}async function ss(e,t){const n=Me(e);if(t==="later")u=u.concat(n),L=L.concat(n);else if(t==="next"){let o=u.slice(0,v+1),i=u.slice(v+1);u=o,u=u.concat(n),u=u.concat(i),o=L.slice(0,v+1),i=L.slice(v+1),L=o,L=L.concat(n),L=L.concat(i)}q()}function xe(){as()}function as(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(X("playing"),re="playing",e.play().then(n=>Vt()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(re="paused",X("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){xe()});navigator.mediaSession.setActionHandler("pause",function(){xe()});function Ht(){Kt()}function qt(){Wt()}function rs(){document.getElementById("audio").addEventListener("ended",ps)}function cs(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function ds(){gs()}function ls(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:D,PLAYBACK_shuffle_state:z,progress:t}}function Yt(){if(z==="off"){z="on",_t(z);const t=v+1;L=[...u],u.slice(0,v);const n=u.slice(t);ro(n);const o=n.length;u.splice(v,o,...n),q()}else{z="off",_t(z);const t=[...L],i=document.getElementById("PLAYERsource").src.split("/"),a=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===a&&(v=e);q()}}function K(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${S}/${u[v].url}/3`,e.load(),re==="playing"?(e.play().then(o=>Vt()).catch(o=>console.log(o)),X("playing")):X("paused"),Qt(),Ft()}function us(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${S}/${u[v].url}/3`,t.load(),t.currentTime=e,X("paused"),Qt(),Ft()}function Ft(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,a=Math.floor(o)-i,s=`"-${Ve(a)}"`,c=`"${Ve(Math.floor(i))}"`,d=i/o*100,l=`${d}%`;ts(c,s),t.style.setProperty("--LCD-seekbar-width",l),t.style.setProperty("--LCD-seekbar-indicator-left",l),n.value=d,zt()})}function Qt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[v].song_name,t.innerHTML=u[v].song_name,n.innerHTML=u[v].project_contributors,Ut(),o.src=`${S}/${u[v].img}/3`,i.src=`${S}/${u[v].img}/3`,kt=`${S}/${u[v].img}/5`,Gt=u[v].song_name,Jt=u[v].project_contributors,q()}function Vt(){let e=u[v];const t=[{src:`${S}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${S}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${S}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${S}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${S}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${S}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),zt()}function zt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function ms(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",X("paused"),u=[],L=[],v=0,t.src="http://null.com/null"}function ps(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(D=="off"||D=="on")?(v+=1,K()):D=="song"?K():t==v+1&&D=="on"?(v=0,K()):ms()}function Kt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.pause(),v+=1,K())}navigator.mediaSession.setActionHandler("nexttrack",function(){Kt()});function Wt(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),u.length,e.currentTime>2){e.currentTime=0;return}else if(v>0){e.pause(),v-=1,K();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){Wt()});function gs(){D=="off"?(D="on",W(D)):D=="on"?(D="song",W(D)):(D="off",W(D))}function _s(e){e=="off"?(D="off",W(D)):e=="on"?(D="on",W(D)):(e="song",D="on",W(D))}function fs(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",vs),t.addEventListener("click",Es),n.addEventListener("click",bs),o.addEventListener("click",ys),i.addEventListener("click",hs)}function vs(){Yt()}function Es(){qt()}function bs(){xe()}function ys(){Ht()}function hs(){ds()}function _t(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function W(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=O.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=O.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=O.icons_loop_song;return}}function X(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=O.icons_pause;return}if(e=="paused"){t.src=O.icons_play;return}}function Ts(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Xt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Is)})}function Is(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Xt(n)}function Xt(e){function t(i,a,s){return i>=a&&i<=s}function n(i){const a=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let s=0;s<4;s++){let r=a[s];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Cs(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=uo(Ls,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Pe==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const s=document.getElementById("SEARCH_responseEnvironment").lastChild;s.addEventListener("keydown",function(r){r.key==="Tab"&&Pe==!0&&(r.preventDefault(),s.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",ie()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const a=t.value;console.log(a),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function ws(e){ie(),Pe=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,a=o.om2SearchObjectSongurl,s=ze();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{U(`/projects/${i}/${a}`),ie()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,a=ze();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{U(`/projects/${i}`),ie()})}}}async function Ls(e,t){if(t.value==""){ie();return}const n=await ri(t.value);ws(n)}let Pe=!1;function ie(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Pe=!1}const x="/apis",S="/media";async function Zt(){rs(),oo(),io(),zi(),fs(),Cs(),Ts(),So(),Ui(),oi(),Io()}window.hasCodeRun||(Xo(),window.hasCodeRun=!0);
