(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ze="/assets/menu_options_button-a1d7bbe3.svg",St=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Rt=`<div class="TOPRIGHT-topHalf-right-content">
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
            <div class="TOPRIGHT-accountcontrols-buttonarea-queue-container">
                <button tabindex="0" class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <div>
                        <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                    </div>
                </button>
            </div>
            <button tabindex="0" class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg">
                </div>
            </button>
        </div>
    </div>
</div>`,Dt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,At="/assets/volume_null-e39cf06f.svg",Nt="/assets/recently_added-a0a983c6.svg",jt="/assets/volume_3-c8ab0a75.svg",kt="/assets/orange_music_text_logo_black-12e7386c.svg",Ut="/assets/volume_2-cfdac9da.svg",Gt="/assets/browse_2-85030bba.svg",Jt="/assets/volume_1-27e93416.svg",Ht="/assets/orange_music_logo_white-2a680ea2.svg",qt="/assets/search_icon-4f5e4381.svg",Yt="/assets/orange_music_text_logo_black-91f9e706.png",$t="/assets/up_next_queue_button-14fedba2.svg",Ft="/assets/orange_music_logo_yellow-a109ff64.svg",zt="/assets/playlist-c6e9024f.svg",Qt="/assets/loop_button-aef56865.svg",Vt="/assets/help_icon-867fec9d.svg",Kt="/assets/play_button-b1e2d3a4.svg",Wt="/assets/browse-14744f27.svg",Xt="/assets/orange_music_text_logo_white-7f0ba909.svg",Zt="/assets/back_button-8128cade.svg",en="/assets/Albums-2e81dc74.svg",tn="/assets/songs-016b7188.svg",nn="/assets/orange_music_logo_black-4d7e4591.svg",on="/assets/your_uploaded_songs-06535705.svg",sn="/assets/artist-ab677d43.svg",an="/assets/shuffle_button-c2f06bc4.svg",rn="/assets/orange_music_text_logo_white-4907051e.png",cn="/assets/listen_now-c7438154.svg",dn="/assets/derpy-21c20ae5.svg",ln="/assets/next_button-9a850710.svg",un="/assets/recently_added-7ff28139.svg",mn="/assets/play_button-5eeedbe6.svg",gn="/assets/browse-e8be8609.svg",pn="/assets/albums-681507b8.svg",_n="/assets/listen_now.2-bfa293ac.svg",fn="/assets/your_uploads-02e5c93c.svg",vn="/assets/play_button.2-fc90fac7.svg",En="/assets/listen_now-fb02ffce.svg",hn="/assets/browse.2-15b501dd.svg",yn="/assets/place_holder_image-d4006a96.svg",bn="/assets/icons_MOGitems_add-19e679f7.svg",Tn="/assets/back-9279721d.svg",wn="/assets/forwards-605bd405.svg",In="/assets/icons_close-57e87944.svg",Cn="/assets/icons_pause-8012f8cc.svg",Ln="/assets/icons_loop-32d1576c.svg",Pn="/assets/icons_loop_song-87f53dc7.svg",xn="/assets/icons_play-a5074c5b.svg",Bn="/assets/icons_settings-793063fb.svg",Mn="/assets/love-07ac5006.svg",C={icons_volumeNull:At,icons_recentlyAdded:Nt,icons_volume3:jt,icons_orangeMusicTextLogoBlack:kt,icons_volume2:Ut,icons_browse2:Gt,icons_volume1:Jt,icons_orangeMusicLogoWhite:Ht,icons_searchIcon:qt,icons_orangeMusicTextLogoBlackPng:Yt,icons_queueButton:$t,icons_orangeMusicLogoYellow:Ft,icons_playlist:zt,icons_loopButton:Qt,icons_helpIcon:Vt,icons_playButton:Kt,icons_browse:Wt,icons_menuOptionsButton:ze,icons_orangeMusicTextLogoWhite:Xt,icons_backButton:Zt,icons_Albums:en,icons_songs:tn,icons_orangeMusicLogoBlack:nn,icons_yourUploadedSongs:on,icons_artist:sn,icons_shuffleButton:an,icons_orangeMusicTextLogoWhitePng:rn,icons_listenNow:cn,icons_derpy:dn,icons_nextButton:ln,icons_recentlyAddedV2:un,icons_playButtonV2:mn,icons_browseV2:gn,icons_albumsV2:pn,icons_listenNow2V2:_n,icons_yourUploads:fn,icons_playButton2:vn,icons_listenNowV2:En,icons_browse2V2:hn,v3_placeholder:yn,icons_MOGitems_add:bn,icons_back:Tn,icons_forwards:wn,icons_close:In,icons_pause:Cn,icons_loop:Ln,icons_loop_song:Pn,icons_play:xn,icons_settings:Bn,current_year:new Date().getFullYear(),icons_love:Mn};function On(){let e="topleftContentArea",t=St;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Sn(){let e="toprightContentArea",t=Rt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Rn(){let e="MAINcontentContainer",t=Dt;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Dn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function j(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Qe(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function An(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function xe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Nn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function jn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ve(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function kn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Un(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Be;const R=new Map;function Gn(e,t,n){R.has(e)||R.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!R.has(e))return;const r=Math.min(a/500,1);if(!R.has(e))return;const d=Jn(R.get(e).originalColor,r,n);e.style.backgroundColor=d,r<1||R.get(e).isChanging?R.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",R.delete(e))}clearTimeout(Be),Be=setTimeout(()=>{R.has(e)&&!R.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(R.get(e).animationFrameId),R.delete(e))},500),R.get(e).isChanging=!0;const i=Date.now();R.get(e).animationFrameId=requestAnimationFrame(o)}function Jn(e,t,n){return Hn(n,e,t)}function Hn(e,t,n){const o=function(v){return v=v.toString(16),v.length===1?"0"+v:v},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),d=parseInt(t.substring(3,5),16),c=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),p=Math.round(s*(1-n)+d*n),y=Math.round(a*(1-n)+c*n);return"#"+o(u)+o(p)+o(y)}function qn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Yn(o,i,s),r=pe(a[0]),d=pe(a[1]),c=pe(a[2]);return $n({r,g:d,b:c})}function Yn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function pe(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function $n(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Fn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,zn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,Qn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,Vn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Kn=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Wn=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Ve=15;let K=0;async function Xn(){try{const e=document.getElementById("MAINcontentPages");Zn();const t=await nt(Ve,K);K+=t.length,eo(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Ke(){K=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",We),e.innerHTML=""}function Zn(){let e="MAINcontentPages",t=Vn;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function eo(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Kn;for(const[a,r]of Object.entries(C)){const d=new RegExp(`\\{${a}\\}`,"g");n=n.replace(d,r)}t.innerHTML+=n,Me(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){We(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,r){navigator.vibrate(1e3);const c=a.target.id.split("-")[1],u=r[c].project_id;console.log(u),Xe(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,d=t.clientHeight;if(a>=r-d){const c=await nt(Ve,K);K+=c.length,c.length>0&&Me(c)}})}function Me(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,r=e[o].top,d=e[o].bottom,c=e[o].days,u=Nn(c);let p=Wn;for(const[y,v]of Object.entries(C)){const l=new RegExp(`\\{${y}\\}`,"g");p=p.replace(l,v)}for(let y=0;y<i.length;y++){const v=i[y].toString(),l=new RegExp(`\\{${v}\\}`,"g");let _="";v==="MOG_image"?_=`${I}/${a}/2`:v==="MOG_text1"?_=r:v==="MOG_text2"?_=d:v==="MOG_checkedDate"?_=u:v==="MOGI_placeholder_itemID"&&(_=s),p=p.replace(l,_)}t.innerHTML+=p}}async function We(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await le(i);vt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Xe(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;k(`/projects/${i}`)}n.id==="MOGaddNewItem"&&to()}function Xe(e,t){e.stopPropagation(),J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function to(){k("/new-project/")}const no=`<div class="ADMINusersTableInfoRow">
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
</div>`,oo=`<h1>Admin</h1>
<br>
<h2>Tables schema</h2>
<div class="SETTINGSdatabaseSchema">
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
    <br>
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
</div>
<br>
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
<br><br>
<form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
    <label for="user_to_delete" class="SETTINGSmodalFormAreaText">DELETE: User ID</label><br>
    <input type="text" name="user_to_delete" id="user_to_delete" class="SETTINGSmodalFormInput" required>
    <br><br>
    <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
</form>`,io=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Ze(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,d){so(a,r,d)}}function so(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),J(o,e,n)}const ao=`<h1>General</h1>
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
</div>`;let be;async function lo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Te("profile_picture"),n=`${I}/${t}/1`;be=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",uo)}catch(t){console.error("Error initializing account image:",t)}}function uo(e){e.stopPropagation(),mo(e)}function mo(e){J([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function go(){await Io()}let et="admin";const ce=[{name:"general",markup:ao,button_id:"settings_button_general",function:_o},{name:"user",markup:ro,button_id:"settings_button_user",function:fo},{name:"admin",markup:io,button_id:"settings_button_admin",function:vo}];function po(){const e=document.getElementById("MAINcontentPages");let t=co;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Oe(et);for(var o=ce.length-1;o>=0;o--){const i=ce[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,c=ce.find(u=>u.button_id===r).name;Oe(c)})}n.addEventListener("click",function(){k("/")})}function tt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Oe(e){et=e;const t=["users_img"],n=document.getElementById("view_container"),o=ce.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(C)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let d="";a==="users_img"&&(d=`${I}/${be}/4/`),i=i.replace(r,d)}n.innerHTML=i,o.function()}function _o(){}function fo(){Ze("user-id","settings_views_user_pfp_img","update_user_pfp")}async function vo(){if(await Te("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=oo,i=[];for(const[c,u]of Object.entries(C)){const p=new RegExp(`\\{${c}\\}`,"g");o=o.replace(p,u)}for(let c=0;c<t.length;c++){const u=t[c].toString(),p=new RegExp(`\\{${u}\\}`,"g");let y="";u==="users_img"&&(y=`${I}/${be}/4/`),o=o.replace(p,y)}n.innerHTML=o;const s=await wo(),a=JSON.parse(s),r=document.getElementById("usersTableInforRowsContainer");r.innerHTML="";for(let c=0;c<a.length;c++){const u=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],p=a[c].username,y=a[c].uuid,v=a[c].verified,l=a[c].email;let _=a[c].storage_allowance;_=ve(_);const g=a[c].admin,T=c;let h=a[c].storage_used;h=ve(h);let M=no,L=a[c].profile_picture;L=`${I}/${L}/1/`;for(let b=0;b<u.length;b++){const E=u[b].toString(),S=new RegExp(`\\{${E}\\}`,"g");let P="";E==="Username"?P=p:E==="Email"?P=l:E==="UUID"?P=y:E==="Verified"?P=v:E==="Space_Used"?P=h:E==="Storage_Allowance"?P=_:E==="profile_picture_url"?P=L:E==="checkbox_number"?P=T:E==="Admin"&&(P=g),M=M.replace(S,P)}r.innerHTML+=M}r.addEventListener("change",function(c){c.target&&c.target.type==="checkbox"&&d()});function d(){i=[];const u=r.querySelectorAll('input[type="checkbox"]'),p=[],y=document.getElementById("settings_admin_selected_items_visualition");u.forEach(function(v){if(v.checked){const g={id:v.id.replace("admin_users_table_check_box_",""),value:v.value};p.push(g)}}),p.forEach(function(v){const _=s[v.id].uuid;i.push(_)}),y.innerHTML=`Selected Items: ${i.length}`}}async function Eo(){const e=await Te("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;k(r),Ei(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,d=m,c=f,u=Ii();u.current_path=r,u.current_queue=d,u.current_index=c;const p=i(u);p!==o&&(To("last_state",u),o=p,n.set("playback_states",p))}function a(){k(currentPath)}}function ho(){st(),tt(),Xn()}function yo(e){Ke(),tt(),xo(e)}function Se(){Ke(),st(),po()}const Re={"/":ho,"/new-project/":ae,"/new-project":ae,"/new/":ae,"/new":ae,"/projects/:projectID":yo,"/settings/":Se,"/settings":Se};function bo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){k("/")}}function k(e){const t=Object.keys(Re);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Re[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}bo()}async function To(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${O}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Te(e){try{return(await(await fetch(`${O}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function W(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${O}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function le(e){try{return(await(await fetch(`${O}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function nt(e,t){try{const i=(await(await fetch(`${O}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function ae(){try{const o=`/projects/${(await(await fetch(`${O}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;k(o)}catch(e){console.error("Error:",e)}}async function wo(){try{return(await(await fetch(`${O}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Io(){try{const t=await(await fetch(`${O}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const De=1500;let ot=0,Ee=[],_e;function $(e,t){const o=new Date().getTime();Ee.push({notificationText:e,notificationType:t,time:o}),it()}function it(){const t=new Date().getTime(),n=Ee.at(ot);Ee.length>1?t-_e>De?(Ae(n.notificationText,n.notificationType),_e=t):setTimeout(it,De):(Ae(n.notificationText,n.notificationType),_e=t)}function Ae(e,t){const n=document.getElementById("noticationContainer");let o;ot+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Co=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Lo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Po=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,de=[];let he=!1,Ne=!0,w;async function xo(e){let t;Qe()==!0?t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Oo(t),sessionStorage.setItem("description","Wonderful notes are loading..."),je(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{k("/")});const o=await le(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,w=s,i(),Mo()}function i(){Bo(),sessionStorage.setItem("description",w.Description),je(),So(),Do(),Ao(),No(),at(),Yo(),ct(w.ProjectName),Ze(w.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Ho()}}function st(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function we(){const e=w.ProjectID,t=await le(e);if(t=="")console.log(t);else{const n=JSON.parse(t);n.ProjectID=e,w=n,at();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${I}/${w.PictureURL}/5`;o.src=i}}function Bo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${I}/${w.PictureURL}/5`;e.innerText=w.ProjectName,t.innerText=w.ProjectContributors,n.src=o}function Mo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(ct(s),W(w.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(W(w.ProjectID,"project_contributors",s),o=s)})}function Oo(e){let t="MAINcontentPages",n=Po;for(const[i,s]of Object.entries(C)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.ProjectName:s==="PROJECTviewMOREartist"?r=e.ProjectContributors:s==="PROJECTviewMOREyear"?r=jn(e.TimeCreated):s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${I}/${e.PictureURL}/5`),n=n.replace(a,r)}document.getElementById(t).innerHTML=n}function je(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function So(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",j()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),i()),s=r})}function Ro(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Do(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Ao(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){ke(w)}),t.addEventListener("click",function(n){n.target===t&&ke(w)})}function ke(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),W(e.ProjectID,"description",n),o.style.display="none",Ro(),i.style.zIndex="1"}async function No(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){vt(w)}),t.addEventListener("click",function(){vi(w)}),n.addEventListener("click",function(){Ue(event)}),o.addEventListener("click",function(){Ue(event)})}function Ue(e){e.stopPropagation(),e.target;const t=w.ProjectID;J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}function jo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";ko(),F(),k(t)}else F()}async function ko(e){const t=w.ProjectID;try{const o=await(await fetch(`${O}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function at(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Go();const t=document.getElementById("PROJECTview-projectTable"),n=w.ProjectJSON,o=qn("--orange"),i=l=>`#${l.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(_=>parseInt(_,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const l of n)a.push({img:w.PictureURL,songTitle:l.SongName,artistName:w.ProjectContributors,projectName:ve(l.FolderSize),songDuration:`${Math.floor(l.Duration/60)}:${(l.Duration%60).toString().padStart(2,"0")}`,songSequence:l.SongSequence,version:l.Version,url:l.URL});for(let l=0;l<a.length;l++){a[l].ProjectID=l;const _=a[l],g=Jo(_);t.insertAdjacentHTML("beforeend",g);const T=t.lastElementChild;T.addEventListener("dragstart",r),T.addEventListener("dragover",c),T.addEventListener("drop",u)}function r(l){l.dataTransfer.setData("text/plain",l.target.dataset.rowId),l.dataTransfer.getData("text/plain"),s=l.srcElement,kn(l.srcElement)}const d=Un(Gn,0);function c(l){l.preventDefault(),l.dataTransfer.dropEffect="move";const _=l.target.closest(".PROJECTview-projectTable-rowContainer");if(_!==s){const g=getComputedStyle(_).backgroundColor,T=i(g);d(_,T,o)}}function u(l){l.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const _=l.dataTransfer.getData("text/plain"),g=document.querySelector(`[data-row-id="${_}"]`),T=l.target.closest(".PROJECTview-projectTable-rowContainer");if(T){const h=T.getAttribute("data-row-id");T.before(g);const M=`${_}|${h}`;setTimeout(async()=>{await W(w.ProjectID,"SongsTableChangeSongSequenceOrder",M),we()},1)}}t.addEventListener("click",function(l){const _=l.target;if(l.stopPropagation(),_.tagName==="BUTTON"){const g=_.closest(".PROJECTview-projectTable-rowContainer");g&&(g.getAttribute("data-row-id"),Uo(l))}});const p=t.querySelectorAll("[contenteditable]"),y=[],v=l=>{const g=l.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),T=l.target.textContent,h=y.find(E=>E.dataRowIDField===g);if((h?h.currentText:"Row ID not found")==T)return;for(var L=y.length-1;L>=0;L--)y[L].dataRowIDField===g&&(y[L].currentText=T);const b=`${g}-${T}`;W(w.ProjectID,"project_song_title",b)};p.forEach(l=>{l.addEventListener("blur",v),y.push({dataRowIDField:l.parentElement.parentElement.getAttribute("data-row-id"),currentText:l.innerText})})}function Uo(e){e.stopPropagation(),e.target,J([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Go(){let e="PROJECTview_projectAreaContainer",t=Co;for(const[n,o]of Object.entries(C)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Jo(e){let t=Lo;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${I}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Ne===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Ne===!1&&(a=!1),t=t.replace(s,a)}return t}function Ho(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i,w)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files,console.log(t)}),s.click()):(console.log("the submit files button was clicked ",t),n(t,w))});function n(o,i){for(const s of o);qo(o,i)}}async function rt(e,t){const n=new FormData,o=new XMLHttpRequest;he=!0,n.append("file",e),n.append("project_id",t.project_id),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;console.log(s),s===100&&console.log("upload completed")}},o.onload=async function(){if(console.log("Upload fully complete"),o.responseText=="StorageLimit Reached"&&$("Storage limit reached","error"),he=!1,de.length>0){const s=de.shift();await rt(s.file,s.details)}we()},o.onerror=function(){$("Upload Failed","error")},o.open("POST",`${O}/files/upload_audio/${w.ProjectID}`,!0),o.send(n)}async function qo(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={file:n,details:t};if(de.push(o),!he){const i=de.shift();await rt(i.file,i.details)}}}function ct(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Yo(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(r=>{r.isIntersecting&&j()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!j()||!r.isIntersecting&&!j()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&j()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const $o=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Fo(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&$("Storage limit reached","error"),n!=="update_user_pfp"?Wo():(Xo(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${O}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function zo(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Fo(o,t,n)}const dt=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Q,U=!1;function J(e,t,n){n===void 0?Ko(e,t):n!==void 0&&n==="update_project_image"?Ge(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Ge(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Vo():n!==void 0&&n==="notice"?Qo(e):console.log("invalid menu display inputs")}function Qo(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=dt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let d=n+"px",c=o+"px";if(a.addEventListener("click",Ie),r.style.left=d,r.style.top=c,r.style.padding="5px",Q&&pointerType===""){const g=Q.getBoundingClientRect();n=g.left+window.scrollX,o=g.top+window.scrollY;let T=n+"px",h=o+"px";r.style.left=T,r.style.top=h}for(let g=0;g<e.length;g++)ut(e[g]);r.children[0];const p=r.offsetWidth,y=r.offsetHeight,v=lt("MENUmodalBody"),l=r.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",_),v.xOverflow==!0&&(d=n-p+"px",r.style.left=d),v.yOverflow==!0&&(c=o-y+"px",r.style.top=c);for(let g=0;g<l.length;g++){const T=l[g];T.setAttribute("data-menu-item-id",g),T.addEventListener("click",function(h){h.stopPropagation();const L=h.target.getAttribute("data-menu-item-id"),b=e[L].function,E=e[L].optionalParams;if(b=="TEST")console.log("the button worked");else if(b!="None"){mt[b](E);return}else return})}function _(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",_),F())}}function Vo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=Qn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,d=0;j()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[B,A]of Object.entries(C)){const N=new RegExp(`\\{${B}\\}`,"g");i=i.replace(N,A)}o.style.display="block",o.innerHTML=i;const c=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),y=s.duration,l=s.currentTime/y*100,_=document.getElementById("LCDMB_seek_input"),g=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const T=document.getElementById("LCDMB_back"),h=document.getElementById("LCDMB_play"),M=document.getElementById("LCDMB_play_icon"),L=document.getElementById("LCDMB_next"),b=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{E(),U===!0&&P()}),E(),S(),g.style.width=`${l}%`,s.addEventListener("timeupdate",()=>{const B=s.duration,N=s.currentTime/B*100;g.style.width=`${N}%`}),_.addEventListener("input",function(){const B=s.duration,A=_.value;s.currentTime=B*(A/100)}),T.addEventListener("click",()=>{ht(),E(),U===!0&&P()}),h.addEventListener("click",()=>{ue(),E(),S()}),L.addEventListener("click",()=>{Et(),E(),U===!0&&P()}),b.addEventListener("click",()=>{U===!1?(Le(),U=!0):(Pe(),U=!1)}),U===!0?Le():Pe(),o.addEventListener("touchstart",ee,!1),o.addEventListener("touchmove",te,!1),o.addEventListener("touchend",ne,!1);function E(){p.src=pt,c.innerText=_t,u.innerText=ft}function S(){s.paused?M.src=C.icons_playButtonV2:M.src=C.icons_derpy}function P(){const B=document.getElementById("LCD_mobile_queue_content_container");B.innerHTML="";for(let A=f+1;A<m.length;A++){const N=m[A],oe=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],V=N.img,Bt=N.song_name,Mt=N.project_contributors;let me=zn;for(let ge=0;ge<oe.length;ge++){const ie=oe[ge].toString(),Ot=new RegExp(`\\{${ie}\\}`,"g");let se="";ie==="queue_item_img"?se=`${I}/${V}/3`:ie==="queue_item_song_name"?se=Bt:ie==="queue_item_song_artist"&&(se=Mt),me=me.replace(Ot,se)}B.innerHTML+=me}}function Le(){function B(A){A.forEach(N=>{document.querySelectorAll("."+N).forEach(V=>{V.classList.add("queue_visible")})})}B(a),o.removeEventListener("touchstart",ee),o.removeEventListener("touchmove",te),o.removeEventListener("touchend",ne),P()}function Pe(){function B(A){A.forEach(N=>{document.querySelectorAll("."+N).forEach(V=>{V.classList.remove("queue_visible")})})}B(a),o.addEventListener("touchstart",ee,!1),o.addEventListener("touchmove",te,!1),o.addEventListener("touchend",ne,!1)}function ee(B){U===!1&&(r=B.touches[0].clientY)}function te(B){B.preventDefault()}function ne(B){d=B.changedTouches[0].clientY,d-r>70&&(F(),o.removeEventListener("touchstart",ee),o.removeEventListener("touchmove",te),o.removeEventListener("touchend",ne))}}function Ko(e,t){Q=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");j()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=dt,a.style.display="block";const r=document.getElementById("MENUmodalBody");let d=n+"px",c=o+"px";a.addEventListener("click",Ie),r.style.left=d,r.style.top=c;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const h=Q.getBoundingClientRect();n=h.left+window.scrollX,o=h.top+window.scrollY;let M=n+"px",L=o+"px";r.style.left=M,r.style.top=L}for(let h=0;h<e.length;h++)ut(e[h]);const y=r.children[0],v=r.offsetWidth,l=r.offsetHeight,_=lt("MENUmodalBody"),g=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"?y.focus():u=="mouse"&&(y.focus(),y.blur()),document.addEventListener("keydown",T),_.xOverflow==!0&&(d=n-v+"px",r.style.left=d),_.yOverflow==!0&&(c=o-l+"px",r.style.top=c);for(let h=0;h<g.length;h++){const M=g[h];M.setAttribute("data-menu-item-id",h),M.addEventListener("click",function(L){L.stopPropagation();const E=L.target.getAttribute("data-menu-item-id"),S=e[E].function,P=e[E].optionalParams;if(S=="TEST")console.log("the button worked");else if(S!="None"){mt[S](P);return}else return})}function T(h){(h.key==="Escape"||h.keyCode===27)&&(document.removeEventListener("keydown",T),F())}}function Ge(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let d=o+"px",c=i+"px";j()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=Fn,r.style.display="block",r.addEventListener("click",Ie);const u=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),y=document.getElementById("MENUmodalBody_image_select_file_select_button"),v=document.getElementById("MENUmodalBody_image_select_preview_area"),l=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=d,u.style.top=c;let g,T;function h(b,E){return function(){const S=this,P=arguments;clearTimeout(T),T=setTimeout(()=>{b.apply(S,P)},E)}}function M(b,E,S){h(zo,100)(b,E,S)}function L(b){if(g){const E=URL.createObjectURL(g),S=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");v.src=E,l.style.visibility="visible",_.style.outline="3px solid var(--primary)",l.addEventListener("click",()=>{M(g,b.project_id,b.MenuType),S.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",b=>{b.preventDefault()}),p.addEventListener("drop",b=>{b.preventDefault(),g=b.dataTransfer.files[0],L(e)}),y.addEventListener("click",()=>{const b=document.createElement("input");b.type="file",b.accept="image/*",b.addEventListener("change",E=>{g=E.target.files[0],L(e)}),b.click()})}function Wo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F(),we()}function Xo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F()}function lt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,d=i+s,c=r+a;let u=!1,p=!1;return d>n&&(u=!0),c>o&&(p=!0),{xOverflow:u,yOverflow:p}}function ut(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",j()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=$o.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[d,c]of Object.entries(C)){const u=new RegExp(`\\{${d}\\}`,"g");a=a.replace(u,c)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Ie(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function F(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Q&&Q.focus()}const mt={PROJECT_VIEW_delete_project(e){jo()},PLAYBACK_add_songs_to_queue(e){hi(e)},SIGN_OUT_USER(e){go()},OPEN_SETTINGS_PAGE(e){k("/settings/")}};let H="hidden";function Zo(){Rn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");ye(H),e.addEventListener("click",ei),t.addEventListener("click",ti),G()}function ei(){if(H==="hidden"){H="visible",ye(H);return}if(H==="visible"){H="hidden",ye(H);return}}function ye(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Qe&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function G(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<m.length;t++){m[t].id=t;const n=m[t],o=ci(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",ri),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",si),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&ai(r)}),i.addEventListener("dragstart",ni),i.addEventListener("dragover",oi),i.addEventListener("drop",ii),e.appendChild(i)}}function ti(){const e=f+1;e>=0&&e<m.length?m.splice(e):m.length=0,G()}function ni(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function oi(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function ii(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(r=>r.id===parseInt(t)),i=m.find(r=>r.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),D.splice(s,1),D.splice(a,0,o),G())}function si(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),D.splice(o,1)),G()}function ai(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];J(o,e)}function ri(e){}function ci(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Dn;for(let d=0;d<t.length;d++){const c=t[d].toString(),u=new RegExp(`\\{${c}\\}`,"g");let p="";c==="QUEUE_item_image"?p=`${I}/${n}/3`:c==="QUEUE_item_title"?p=o:c==="QUEUE_item_artist"?p=i:c==="icons_menuOptionsButton"?p=ze:c==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(u,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}const di=`<div class="LCDbody">
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
</div>`;function li(){mi(),gt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){gi(t)}),pi(),j()&&document.getElementById("LCDbody").addEventListener("click",ui)}function ui(e){e.stopPropagation(),J({param:"cheese"},e,"lcd_mobile_body")}function mi(){let e="LCDbody",t=di;for(const[o,i]of Object.entries(C)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function gt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let d,c,u;e=n.clientWidth,c=s(),u=e/o,u>c?d=c+10:d=u,t.style.width=d+"px"}function s(){const d=document.getElementById("LCDtitleText"),c=document.createElement("span");c.style.visibility="hidden",c.style.whiteSpace="nowrap",c.textContent=d.textContent,document.body.appendChild(c);const u=c.offsetWidth;return document.body.removeChild(c),u}function a(){let d;return function(){cancelAnimationFrame(d),d=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function gi(e){e.stopPropagation(),e.target,J([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function pi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",_i)})}function _i(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ti(n)}function fi(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let m=[],D=[],f=0,pt="",_t="",ft="";document.getElementById("audio");document.getElementById("PLAYERsource");let x="off",q="off",X="paused";function vt(e){m=[],f=0,m=Ce(e),m.length>0&&(X="playing",Y())}function vi(e){m=[],f=0,m=Ce(e),m.length>0&&(q="off",yt(),X="playing",Y())}function Ce(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,d=a.Duration,c=a.URL;t.push({img:i,song_name:r,url:c,duration:d,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Ei(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,f=n,Bi(o),m!==void 0&&m.length>0&&Ci(i)}async function hi(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await le(t),i=Ce(o);if(n==="later")m=m.concat(i),D=D.concat(i);else if(n==="next"){let s=m.slice(0,f+1),a=m.slice(f+1);m=s,m=m.concat(i),m=m.concat(a),s=D.slice(0,f+1),a=D.slice(f+1),D=s,D=D.concat(i),D=D.concat(a)}G()}function ue(){yi()}function yi(){const e=document.getElementById("audio");e.paused?(Z("playing"),X="playing",e.play().then(t=>wt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(X="paused",Z("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ue()});navigator.mediaSession.setActionHandler("pause",function(){ue()});function Et(){Ct()}function ht(){Lt()}function bi(){document.getElementById("audio").addEventListener("ended",Pi)}function Ti(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function wi(){xi()}function Ii(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:x,PLAYBACK_shuffle_state:q,progress:t}}function yt(){if(q==="off"){q="on",Je(q);const t=f+1;D=[...m],m.slice(0,f);const n=m.slice(t);An(n);const o=n.length;m.splice(f,o,...n),G()}else{q="off",Je(q);const t=[...D],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(f=e);G()}}function Y(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${I}/${m[f].url}/3`,e.load(),X==="playing"?(e.play().then(n=>wt()).catch(n=>console.log(n)),Z("playing")):Z("paused"),Tt(),bt()}function Ci(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${I}/${m[f].url}/3`,t.load(),t.currentTime=e,Z("paused"),Tt(),bt()}function bt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${xe(s)}"`,d=`"${xe(Math.floor(i))}"`,c=i/o*100,u=`${c}%`;fi(d,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=c,It()})}function Tt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=m[f].song_name,t.innerHTML=m[f].song_name,n.innerHTML=m[f].project_contributors,gt(),o.src=`${I}/${m[f].img}/3`,i.src=`${I}/${m[f].img}/3`,pt=`${I}/${m[f].img}/5`,_t=m[f].song_name,ft=m[f].project_contributors,G()}function wt(){let e=m[f];const t=[{src:`${I}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),It()}function It(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Li(){console.log("PLAYBACK_stop_playback, clear top")}function Pi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>f+1&&(x=="off"||x=="on")?(f+=1,Y()):x=="song"?Y():t==f+1&&x=="on"?(f=0,Y()):Li()}function Ct(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>f+1&&(e.pause(),f+=1,Y())}navigator.mediaSession.setActionHandler("nexttrack",function(){Ct()});function Lt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length,f>0&&(e.pause(),f-=1,Y())}navigator.mediaSession.setActionHandler("previoustrack",function(){Lt()});function xi(){x=="off"?(x="on",z(x)):x=="on"?(x="song",z(x)):(x="off",z(x))}function Bi(e){e=="off"?(x="off",z(x)):e=="on"?(x="on",z(x)):(e="song",x="on",z(x))}function Mi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Oi),t.addEventListener("click",Si),n.addEventListener("click",Ri),o.addEventListener("click",Di),i.addEventListener("click",Ai)}function Oi(){yt()}function Si(){ht()}function Ri(){ue()}function Di(){Et()}function Ai(){wi()}function Je(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function z(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=C.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=C.icons_loop_song;return}}function Z(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=C.icons_pause;return}if(e=="paused"){t.src=C.icons_play;return}}function Ni(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Pt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ji)})}function ji(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Pt(n)}function Pt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function ki(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Ui=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
        <div class="SETTINGSrandomImage">
            <img src="https://picsum.photos/400">
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
    <div>
        <p style="color: var(--transparent-overlay);">
            This Service uses a cookie.
        </p>
    </div>
</div>`,Gi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ji(){setTimeout(()=>{let e="MAINcontentPages",t=Gi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Hi)},1)}async function Hi(e){console.log("the signup event was caught"),e.preventDefault(),qi();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${O}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const r=a.files[0];if(r){const d=await convertImageToBase64(r);n[a.name]=d}}else n[a.name]=a.value;const s=await fetch(`${O}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();fe(),Yi(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";fe(),He(),alert(s)}}catch{fe(),He(),alert("There was an error, try again")}}function qi(){const e=document.getElementById("spinner");e.style.display="block"}function fe(){const e=document.getElementById("spinner");e.style.display="none"}function Yi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function He(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let re=!1,qe=!1,Ye=!1,$e=!1;async function $i(){await Qi()?xt():qe||(Fi(),qe=!0)}function Fi(){Vi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${O}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Fe(),Ji()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),re)return!1;re=!0;const a=o.value,r=i.value;try{await zi(a,r)?($e=!0,$("Login Successful","success"),xt(),Fe()):($e=!1,$("Error Logging In","error")),re=!1}catch(d){console.error("Error:",d),re=!1}return!1})}async function zi(e,t){try{return(await(await fetch(`${O}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?$("The server is down","error"):console.error(n),!1}}async function Qi(){try{const e=await fetch(`${O}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&$("The server is down","error")}}function Vi(){let e="MAINcontentPages",t=Ui;document.getElementById(e).innerHTML+=t}function Fe(){if(Ye===!0)return;Ye=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const O="/apis",I="/media";async function xt(){bi(),On(),Sn(),li(),Mi(),ki(),Ni(),lo(),Zo(),Eo()}window.hasCodeRun||($i(),window.hasCodeRun=!0);
