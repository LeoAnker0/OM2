(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const qe="/assets/menu_options_button-a1d7bbe3.svg",Ot=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,Mt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,St=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Rt="/assets/volume_null-e39cf06f.svg",Dt="/assets/recently_added-a0a983c6.svg",At="/assets/volume_3-c8ab0a75.svg",Nt="/assets/orange_music_text_logo_black-12e7386c.svg",kt="/assets/volume_2-cfdac9da.svg",jt="/assets/browse_2-85030bba.svg",Ut="/assets/volume_1-27e93416.svg",Gt="/assets/orange_music_logo_white-2a680ea2.svg",Jt="/assets/search_icon-4f5e4381.svg",Ht="/assets/orange_music_text_logo_black-91f9e706.png",$t="/assets/up_next_queue_button-14fedba2.svg",qt="/assets/orange_music_logo_yellow-a109ff64.svg",Yt="/assets/playlist-c6e9024f.svg",Ft="/assets/loop_button-aef56865.svg",Qt="/assets/help_icon-867fec9d.svg",zt="/assets/play_button-b1e2d3a4.svg",Vt="/assets/browse-14744f27.svg",Kt="/assets/orange_music_text_logo_white-7f0ba909.svg",Wt="/assets/back_button-8128cade.svg",Xt="/assets/Albums-2e81dc74.svg",Zt="/assets/songs-016b7188.svg",en="/assets/orange_music_logo_black-4d7e4591.svg",tn="/assets/your_uploaded_songs-06535705.svg",nn="/assets/artist-ab677d43.svg",on="/assets/shuffle_button-c2f06bc4.svg",sn="/assets/orange_music_text_logo_white-4907051e.png",an="/assets/listen_now-c7438154.svg",cn="/assets/derpy-21c20ae5.svg",rn="/assets/next_button-9a850710.svg",ln="/assets/recently_added-7ff28139.svg",dn="/assets/play_button-5eeedbe6.svg",un="/assets/browse-e8be8609.svg",mn="/assets/albums-681507b8.svg",gn="/assets/listen_now.2-bfa293ac.svg",pn="/assets/your_uploads-02e5c93c.svg",_n="/assets/play_button.2-fc90fac7.svg",fn="/assets/listen_now-fb02ffce.svg",vn="/assets/browse.2-15b501dd.svg",En="/assets/place_holder_image-d4006a96.svg",yn="/assets/icons_MOGitems_add-19e679f7.svg",bn="/assets/back-9279721d.svg",hn="/assets/forwards-605bd405.svg",Tn="/assets/icons_close-57e87944.svg",In="/assets/icons_pause-8012f8cc.svg",wn="/assets/icons_loop-32d1576c.svg",Cn="/assets/icons_loop_song-87f53dc7.svg",Ln="/assets/icons_play-a5074c5b.svg",Pn="/assets/icons_settings-793063fb.svg",Bn="/assets/love-07ac5006.svg",L={icons_volumeNull:Rt,icons_recentlyAdded:Dt,icons_volume3:At,icons_orangeMusicTextLogoBlack:Nt,icons_volume2:kt,icons_browse2:jt,icons_volume1:Ut,icons_orangeMusicLogoWhite:Gt,icons_searchIcon:Jt,icons_orangeMusicTextLogoBlackPng:Ht,icons_queueButton:$t,icons_orangeMusicLogoYellow:qt,icons_playlist:Yt,icons_loopButton:Ft,icons_helpIcon:Qt,icons_playButton:zt,icons_browse:Vt,icons_menuOptionsButton:qe,icons_orangeMusicTextLogoWhite:Kt,icons_backButton:Wt,icons_Albums:Xt,icons_songs:Zt,icons_orangeMusicLogoBlack:en,icons_yourUploadedSongs:tn,icons_artist:nn,icons_shuffleButton:on,icons_orangeMusicTextLogoWhitePng:sn,icons_listenNow:an,icons_derpy:cn,icons_nextButton:rn,icons_recentlyAddedV2:ln,icons_playButtonV2:dn,icons_browseV2:un,icons_albumsV2:mn,icons_listenNow2V2:gn,icons_yourUploads:pn,icons_playButton2:_n,icons_listenNowV2:fn,icons_browse2V2:vn,v3_placeholder:En,icons_MOGitems_add:yn,icons_back:bn,icons_forwards:hn,icons_close:Tn,icons_pause:In,icons_loop:wn,icons_loop_song:Cn,icons_play:Ln,icons_settings:Pn,current_year:new Date().getFullYear(),icons_love:Bn};function xn(){let e="topleftContentArea",t=Ot;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function On(){let e="toprightContentArea",t=Mt;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Mn(){let e="MAINcontentContainer",t=St;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Sn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function N(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Ye(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Rn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Le(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Dn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function An(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function Fe(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Nn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function kn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Pe;const S=new Map;function jn(e,t,n){S.has(e)||S.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!S.has(e))return;const c=Math.min(a/500,1);if(!S.has(e))return;const l=Un(S.get(e).originalColor,c,n);e.style.backgroundColor=l,c<1||S.get(e).isChanging?S.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",S.delete(e))}clearTimeout(Pe),Pe=setTimeout(()=>{S.has(e)&&!S.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(S.get(e).animationFrameId),S.delete(e))},500),S.get(e).isChanging=!0;const i=Date.now();S.get(e).animationFrameId=requestAnimationFrame(o)}function Un(e,t,n){return Gn(n,e,t)}function Gn(e,t,n){const o=function(E){return E=E.toString(16),E.length===1?"0"+E:E},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),c=parseInt(t.substring(1,3),16),l=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+c*n),p=Math.round(s*(1-n)+l*n),b=Math.round(a*(1-n)+r*n);return"#"+o(u)+o(p)+o(b)}function Jn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Hn(o,i,s),c=ge(a[0]),l=ge(a[1]),r=ge(a[2]);return $n({r:c,g:l,b:r})}function Hn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function ge(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function $n(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const qn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Fn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,Qn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,zn=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Vn=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Qe=15;let K=0;async function Kn(){try{const e=document.getElementById("MAINcontentPages");Wn();const t=await et(Qe,K);K+=t.length,Xn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function ze(){K=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ve),e.innerHTML=""}function Wn(){let e="MAINcontentPages",t=Qn;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Xn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=zn;for(const[a,c]of Object.entries(L)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Be(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Ve(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],u=c[r].project_id;console.log(u),Ke(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await et(Qe,K);K+=r.length,r.length>0&&Be(r)}})}function Be(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,c=e[o].top,l=e[o].bottom,r=e[o].days,u=Dn(r);let p=Vn;for(const[b,E]of Object.entries(L)){const d=new RegExp(`\\{${b}\\}`,"g");p=p.replace(d,E)}for(let b=0;b<i.length;b++){const E=i[b].toString(),d=new RegExp(`\\{${E}\\}`,"g");let _="";E==="MOG_image"?_=`${C}/${a}/2`:E==="MOG_text1"?_=c:E==="MOG_text2"?_=l:E==="MOG_checkedDate"?_=u:E==="MOGI_placeholder_itemID"&&(_=s),p=p.replace(d,_)}t.innerHTML+=p}}async function Ve(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await le(i);_t(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Ke(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;k(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Zn()}function Ke(e,t){e.stopPropagation(),J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Zn(){k("/new-project/")}const eo=`<div class="ADMINusersTableInfoRow">
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
    <div class="settings_admin_views_users_table_view"> {Space_Used}</div>
</div>`,to=`<h1>Admin</h1>
<p>You are an admin user</p>
<br>
<p id="settings_admin_selected_items_visualition">Selected Items: 0</p>
<div class="ADMINusersTableEnvironment" id="usersTableEnvironment">
    <div class="ADMINusersTableTopRow">
        <div></div>
        <div>Username</div>
        <div>Email</div>
        <div>UUID</div>
        <div>Payee</div>
        <admin>Admin</admin>
        <div>Bytes</div>
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
</form>`,no=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function We(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,c,l){oo(a,c,l)}}function oo(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),J(o,e,n)}const io=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,so=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>`,ao=`<div class="settings_container">
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
</div>`;let ye;async function co(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await be("profile_picture"),n=`${C}/${t}/1`;ye=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",ro)}catch(t){console.error("Error initializing account image:",t)}}function ro(e){e.stopPropagation(),lo(e)}function lo(e){J([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function uo(){await wo()}let Xe="general";const ce=[{name:"general",markup:io,button_id:"settings_button_general",function:go},{name:"user",markup:so,button_id:"settings_button_user",function:po},{name:"admin",markup:no,button_id:"settings_button_admin",function:_o}];function mo(){const e=document.getElementById("MAINcontentPages");let t=ao;for(const[i,s]of Object.entries(L)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");xe(Xe);for(var o=ce.length-1;o>=0;o--){const i=ce[o].button_id;document.getElementById(i).addEventListener("click",function(a){const c=a.srcElement.id,r=ce.find(u=>u.button_id===c).name;xe(r)})}n.addEventListener("click",function(){k("/")})}function Ze(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function xe(e){Xe=e;const t=["users_img"],n=document.getElementById("view_container"),o=ce.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(L)){const c=new RegExp(`\\{${s}\\}`,"g");i=i.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${C}/${ye}/4/`),i=i.replace(c,l)}n.innerHTML=i,o.function()}function go(){}function po(){We("user-id","settings_views_user_pfp_img","update_user_pfp")}async function _o(){if((await be("admin"))[0].admin!==!0)return;const n=["users_img"],o=document.getElementById("view_container");let i=to,s=[];for(const[r,u]of Object.entries(L)){const p=new RegExp(`\\{${r}\\}`,"g");i=i.replace(p,u)}for(let r=0;r<n.length;r++){const u=n[r].toString(),p=new RegExp(`\\{${u}\\}`,"g");let b="";u==="users_img"&&(b=`${C}/${ye}/4/`),i=i.replace(p,b)}o.innerHTML=i;const a=await Io(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const u=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],p=a[r].username,b=a[r].uuid,E=a[r].verified,d=a[r].email,_=a[r].admin,g=r;let h=a[r].storage_used;h=Fe(h);let y=eo,O=a[r].profile_picture;O=`${C}/${O}/1/`;for(let P=0;P<u.length;P++){const f=u[P].toString(),I=new RegExp(`\\{${f}\\}`,"g");let w="";f==="Username"?w=p:f==="Email"?w=d:f==="UUID"?w=b:f==="Verified"?w=E:f==="Space_Used"?w=h:f==="profile_picture_url"?w=O:f==="checkbox_number"?w=g:f==="Admin"&&(w=_),y=y.replace(I,w)}c.innerHTML+=y}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const u=c.querySelectorAll('input[type="checkbox"]'),p=[],b=document.getElementById("settings_admin_selected_items_visualition");u.forEach(function(E){if(E.checked){const g={id:E.id.replace("admin_users_table_check_box_",""),value:E.value};p.push(g)}}),p.forEach(function(E){const _=a[E.id].uuid;s.push(_)}),b.innerHTML=`Selected Items: ${s.length}`}}async function fo(){const e=await be("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;k(c),Ei(t)}else a();function i(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=m,r=v,u=wi();u.current_path=c,u.current_queue=l,u.current_index=r;const p=i(u);p!==o&&(ho("last_state",u),o=p,n.set("playback_states",p))}function a(){k(currentPath)}}function vo(){ot(),Ze(),Kn()}function Eo(e){ze(),Ze(),Bo(e)}function yo(){ze(),ot(),mo()}const Oe={"/":vo,"/new-project/":To,"/projects/:projectID":Eo,"/settings/":yo};function bo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${C}/assets/hippo.webp">
    `;function n(){k("/")}}function k(e){const t=Object.keys(Oe);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Oe[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}bo()}async function ho(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${M}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function be(e){try{return(await(await fetch(`${M}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function W(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${M}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function le(e){try{return(await(await fetch(`${M}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function et(e,t){try{const i=(await(await fetch(`${M}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function To(){try{const o=`/projects/${(await(await fetch(`${M}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;k(o)}catch(e){console.error("Error:",e)}}async function Io(){try{return(await(await fetch(`${M}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function wo(){try{const t=await(await fetch(`${M}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const Me=1500;let tt=0,fe=[],pe;function Y(e,t){const o=new Date().getTime();fe.push({notificationText:e,notificationType:t,time:o}),nt()}function nt(){const t=new Date().getTime(),n=fe.at(tt);fe.length>1?t-pe>Me?(Se(n.notificationText,n.notificationType),pe=t):setTimeout(nt,Me):(Se(n.notificationText,n.notificationType),pe=t)}function Se(e,t){const n=document.getElementById("noticationContainer");let o;tt+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Co=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
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
</div>`,re=[];let ve=!1,Re=!0,T;async function Bo(e){let t;Ye()==!0?t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Mo(t),sessionStorage.setItem("description","Wonderful notes are loading..."),De(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{k("/")});const o=await le(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,T=s,i(),Oo()}function i(){xo(),sessionStorage.setItem("description",T.Description),De(),So(),Do(),Ao(),No(),it(),qo(),at(T.ProjectName),We(T.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Ho()}}function ot(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function he(){const e=T.ProjectID,t=await le(e);if(t=="")console.log(t);else{const n=JSON.parse(t);n.ProjectID=e,T=n,it();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${C}/${T.PictureURL}/5`;o.src=i}}function xo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${C}/${T.PictureURL}/5`;e.innerText=T.ProjectName,t.innerText=T.ProjectContributors,n.src=o}function Oo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(at(s),W(T.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(W(T.ProjectID,"project_contributors",s),o=s)})}function Mo(e){let t="MAINcontentPages",n=Po;for(const[i,s]of Object.entries(L)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=An(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${C}/${e.PictureURL}/5`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function De(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function So(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",N()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Ro(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Do(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Ao(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Ae(T)}),t.addEventListener("click",function(n){n.target===t&&Ae(T)})}function Ae(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),W(e.ProjectID,"description",n),o.style.display="none",Ro(),i.style.zIndex="1"}async function No(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){_t(T)}),t.addEventListener("click",function(){vi(T)}),n.addEventListener("click",function(){Ne(event)}),o.addEventListener("click",function(){Ne(event)})}function Ne(e){e.stopPropagation(),e.target;const t=T.ProjectID;J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}function ko(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";jo(),F(),k(t)}else F()}async function jo(e){const t=T.ProjectID;try{const o=await(await fetch(`${M}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function it(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Go();const t=document.getElementById("PROJECTview-projectTable"),n=T.ProjectJSON,o=Jn("--orange"),i=d=>`#${d.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(_=>parseInt(_,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const d of n)a.push({img:T.PictureURL,songTitle:d.SongName,artistName:T.ProjectContributors,projectName:Fe(d.FolderSize),songDuration:`${Math.floor(d.Duration/60)}:${(d.Duration%60).toString().padStart(2,"0")}`,songSequence:d.SongSequence,version:d.Version,url:d.URL});for(let d=0;d<a.length;d++){a[d].ProjectID=d;const _=a[d],g=Jo(_);t.insertAdjacentHTML("beforeend",g);const h=t.lastElementChild;h.addEventListener("dragstart",c),h.addEventListener("dragover",r),h.addEventListener("drop",u)}function c(d){d.dataTransfer.setData("text/plain",d.target.dataset.rowId),d.dataTransfer.getData("text/plain"),s=d.srcElement,Nn(d.srcElement)}const l=kn(jn,0);function r(d){d.preventDefault(),d.dataTransfer.dropEffect="move";const _=d.target.closest(".PROJECTview-projectTable-rowContainer");if(_!==s){const g=getComputedStyle(_).backgroundColor,h=i(g);l(_,h,o)}}function u(d){d.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const _=d.dataTransfer.getData("text/plain"),g=document.querySelector(`[data-row-id="${_}"]`),h=d.target.closest(".PROJECTview-projectTable-rowContainer");if(h){const y=h.getAttribute("data-row-id");h.before(g);const O=`${_}|${y}`;setTimeout(async()=>{await W(T.ProjectID,"SongsTableChangeSongSequenceOrder",O),he()},1)}}t.addEventListener("click",function(d){const _=d.target;if(d.stopPropagation(),_.tagName==="BUTTON"){const g=_.closest(".PROJECTview-projectTable-rowContainer");g&&(g.getAttribute("data-row-id"),Uo(d))}});const p=t.querySelectorAll("[contenteditable]"),b=[],E=d=>{const g=d.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),h=d.target.textContent,y=b.find(I=>I.dataRowIDField===g);if((y?y.currentText:"Row ID not found")==h)return;for(var P=b.length-1;P>=0;P--)b[P].dataRowIDField===g&&(b[P].currentText=h);const f=`${g}-${h}`;W(T.ProjectID,"project_song_title",f)};p.forEach(d=>{d.addEventListener("blur",E),b.push({dataRowIDField:d.parentElement.parentElement.getAttribute("data-row-id"),currentText:d.innerText})})}function Uo(e){e.stopPropagation(),e.target,J([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Go(){let e="PROJECTview_projectAreaContainer",t=Co;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Jo(e){let t=Lo;for(const[o,i]of Object.entries(L)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${C}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Re===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Re===!1&&(a=!1),t=t.replace(s,a)}return t}function Ho(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i,T)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files,console.log(t)}),s.click()):(console.log("the submit files button was clicked ",t),n(t,T))});function n(o,i){for(const s of o);$o(o,i)}}async function st(e,t){const n=new FormData,o=new XMLHttpRequest;ve=!0,n.append("file",e),n.append("project_id",t.project_id),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;console.log(s),s===100&&console.log("upload completed")}},o.onload=async function(){if(console.log("Upload fully complete"),o.responseText=="StorageLimit Reached"&&Y("Storage limit reached","error"),ve=!1,re.length>0){const s=re.shift();await st(s.file,s.details)}he()},o.onerror=function(){Y("Upload Failed","error")},o.open("POST",`${M}/files/upload_audio/${T.ProjectID}`,!0),o.send(n)}async function $o(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={file:n,details:t};if(re.push(o),!ve){const i=re.shift();await st(i.file,i.details)}}}function at(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function qo(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&N()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!N()||!c.isIntersecting&&!N()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&N()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Yo=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Fo(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&Y("Storage limit reached","error"),n!=="update_user_pfp"?Wo():(Xo(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${M}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Qo(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Fo(o,t,n)}const ct=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let z,U=!1;function J(e,t,n){n===void 0?Ko(e,t):n!==void 0&&n==="update_project_image"?ke(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?ke(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Vo():n!==void 0&&n==="notice"?zo(e):console.log("invalid menu display inputs")}function zo(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=ct,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=o+"px";if(a.addEventListener("click",Te),c.style.left=l,c.style.top=r,c.style.padding="5px",z&&pointerType===""){const g=z.getBoundingClientRect();n=g.left+window.scrollX,o=g.top+window.scrollY;let h=n+"px",y=o+"px";c.style.left=h,c.style.top=y}for(let g=0;g<e.length;g++)lt(e[g]);c.children[0];const p=c.offsetWidth,b=c.offsetHeight,E=rt("MENUmodalBody"),d=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",_),E.xOverflow==!0&&(l=n-p+"px",c.style.left=l),E.yOverflow==!0&&(r=o-b+"px",c.style.top=r);for(let g=0;g<d.length;g++){const h=d[g];h.setAttribute("data-menu-item-id",g),h.addEventListener("click",function(y){y.stopPropagation();const P=y.target.getAttribute("data-menu-item-id"),f=e[P].function,I=e[P].optionalParams;if(f=="TEST")console.log("the button worked");else if(f!="None"){dt[f](I);return}else return})}function _(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",_),F())}}function Vo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=Fn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;N()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[x,D]of Object.entries(L)){const A=new RegExp(`\\{${x}\\}`,"g");i=i.replace(A,D)}o.style.display="block",o.innerHTML=i;const r=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),b=s.duration,d=s.currentTime/b*100,_=document.getElementById("LCDMB_seek_input"),g=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const h=document.getElementById("LCDMB_back"),y=document.getElementById("LCDMB_play"),O=document.getElementById("LCDMB_play_icon"),P=document.getElementById("LCDMB_next"),f=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{I(),U===!0&&j()}),I(),w(),g.style.width=`${d}%`,s.addEventListener("timeupdate",()=>{const x=s.duration,A=s.currentTime/x*100;g.style.width=`${A}%`}),_.addEventListener("input",function(){const x=s.duration,D=_.value;s.currentTime=x*(D/100)}),h.addEventListener("click",()=>{vt(),I(),U===!0&&j()}),y.addEventListener("click",()=>{de(),I(),w()}),P.addEventListener("click",()=>{ft(),I(),U===!0&&j()}),f.addEventListener("click",()=>{U===!1?(we(),U=!0):(Ce(),U=!1)}),U===!0?we():Ce(),o.addEventListener("touchstart",ee,!1),o.addEventListener("touchmove",te,!1),o.addEventListener("touchend",ne,!1);function I(){p.src=mt,r.innerText=gt,u.innerText=pt}function w(){s.paused?O.src=L.icons_playButtonV2:O.src=L.icons_derpy}function j(){const x=document.getElementById("LCD_mobile_queue_content_container");x.innerHTML="";for(let D=v+1;D<m.length;D++){const A=m[D],oe=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],V=A.img,Pt=A.song_name,Bt=A.project_contributors;let ue=Yn;for(let me=0;me<oe.length;me++){const ie=oe[me].toString(),xt=new RegExp(`\\{${ie}\\}`,"g");let se="";ie==="queue_item_img"?se=`${C}/${V}/3`:ie==="queue_item_song_name"?se=Pt:ie==="queue_item_song_artist"&&(se=Bt),ue=ue.replace(xt,se)}x.innerHTML+=ue}}function we(){function x(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(V=>{V.classList.add("queue_visible")})})}x(a),o.removeEventListener("touchstart",ee),o.removeEventListener("touchmove",te),o.removeEventListener("touchend",ne),j()}function Ce(){function x(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(V=>{V.classList.remove("queue_visible")})})}x(a),o.addEventListener("touchstart",ee,!1),o.addEventListener("touchmove",te,!1),o.addEventListener("touchend",ne,!1)}function ee(x){U===!1&&(c=x.touches[0].clientY)}function te(x){x.preventDefault()}function ne(x){l=x.changedTouches[0].clientY,l-c>70&&(F(),o.removeEventListener("touchstart",ee),o.removeEventListener("touchmove",te),o.removeEventListener("touchend",ne))}}function Ko(e,t){z=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=ct,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=o+"px";a.addEventListener("click",Te),c.style.left=l,c.style.top=r;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const y=z.getBoundingClientRect();n=y.left+window.scrollX,o=y.top+window.scrollY;let O=n+"px",P=o+"px";c.style.left=O,c.style.top=P}for(let y=0;y<e.length;y++)lt(e[y]);const b=c.children[0],E=c.offsetWidth,d=c.offsetHeight,_=rt("MENUmodalBody"),g=c.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"?b.focus():u=="mouse"&&(b.focus(),b.blur()),document.addEventListener("keydown",h),_.xOverflow==!0&&(l=n-E+"px",c.style.left=l),_.yOverflow==!0&&(r=o-d+"px",c.style.top=r);for(let y=0;y<g.length;y++){const O=g[y];O.setAttribute("data-menu-item-id",y),O.addEventListener("click",function(P){P.stopPropagation();const I=P.target.getAttribute("data-menu-item-id"),w=e[I].function,j=e[I].optionalParams;if(w=="TEST")console.log("the button worked");else if(w!="None"){dt[w](j);return}else return})}function h(y){(y.key==="Escape"||y.keyCode===27)&&(document.removeEventListener("keydown",h),F())}}function ke(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),c=document.getElementById("MENUmodalEnvironment");let l=o+"px",r=i+"px";N()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",c.innerHTML=qn,c.style.display="block",c.addEventListener("click",Te);const u=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),b=document.getElementById("MENUmodalBody_image_select_file_select_button"),E=document.getElementById("MENUmodalBody_image_select_preview_area"),d=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=l,u.style.top=r;let g,h;function y(f,I){return function(){const w=this,j=arguments;clearTimeout(h),h=setTimeout(()=>{f.apply(w,j)},I)}}function O(f,I,w){y(Qo,100)(f,I,w)}function P(f){if(g){const I=URL.createObjectURL(g),w=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");E.src=I,d.style.visibility="visible",_.style.outline="3px solid var(--primary)",d.addEventListener("click",()=>{O(g,f.project_id,f.MenuType),w.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",f=>{f.preventDefault()}),p.addEventListener("drop",f=>{f.preventDefault(),g=f.dataTransfer.files[0],P(e)}),b.addEventListener("click",()=>{const f=document.createElement("input");f.type="file",f.accept="image/*",f.addEventListener("change",I=>{g=I.target.files[0],P(e)}),f.click()})}function Wo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F(),he()}function Xo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F()}function rt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=i+s,r=c+a;let u=!1,p=!1;return l>n&&(u=!0),r>o&&(p=!0),{xOverflow:u,yOverflow:p}}function lt(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",N()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=Yo.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(L)){const u=new RegExp(`\\{${l}\\}`,"g");a=a.replace(u,r)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Te(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function F(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),z&&z.focus()}const dt={PROJECT_VIEW_delete_project(e){ko()},PLAYBACK_add_songs_to_queue(e){yi(e)},SIGN_OUT_USER(e){uo()},OPEN_SETTINGS_PAGE(e){k("/settings/")}};let H="hidden";function Zo(){Mn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Ee(H),e.addEventListener("click",ei),t.addEventListener("click",ti),G()}function ei(){if(H==="hidden"){H="visible",Ee(H);return}if(H==="visible"){H="hidden",Ee(H);return}}function Ee(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Ye&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function G(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<m.length;t++){m[t].id=t;const n=m[t],o=ri(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",ci),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",si),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&ai(c)}),i.addEventListener("dragstart",ni),i.addEventListener("dragover",oi),i.addEventListener("drop",ii),e.appendChild(i)}}function ti(){const e=v+1;e>=0&&e<m.length?m.splice(e):m.length=0,G()}function ni(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function oi(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function ii(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(c=>c.id===parseInt(t)),i=m.find(c=>c.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),R.splice(s,1),R.splice(a,0,o),G())}function si(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),R.splice(o,1)),G()}function ai(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];J(o,e)}function ci(e){}function ri(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Sn;for(let l=0;l<t.length;l++){const r=t[l].toString(),u=new RegExp(`\\{${r}\\}`,"g");let p="";r==="QUEUE_item_image"?p=`${C}/${n}/3`:r==="QUEUE_item_title"?p=o:r==="QUEUE_item_artist"?p=i:r==="icons_menuOptionsButton"?p=qe:r==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(u,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const li=`<div class="LCDbody">
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
</div>`;function di(){mi(),ut(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){gi(t)}),pi(),N()&&document.getElementById("LCDbody").addEventListener("click",ui)}function ui(e){e.stopPropagation(),J({param:"cheese"},e,"lcd_mobile_body")}function mi(){let e="LCDbody",t=li;for(const[o,i]of Object.entries(L)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function ut(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let l,r,u;e=n.clientWidth,r=s(),u=e/o,u>r?l=r+10:l=u,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const u=r.offsetWidth;return document.body.removeChild(r),u}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function gi(e){e.stopPropagation(),e.target,J([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function pi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",_i)})}function _i(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ti(n)}function fi(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let m=[],R=[],v=0,mt="",gt="",pt="";document.getElementById("audio");document.getElementById("PLAYERsource");let B="off",$="off",X="paused";function _t(e){m=[],v=0,m=Ie(e),m.length>0&&(X="playing",q())}function vi(e){m=[],v=0,m=Ie(e),m.length>0&&($="off",Et(),X="playing",q())}function Ie(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:i,song_name:c,url:r,duration:l,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Ei(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,v=n,xi(o),m!==void 0&&m.length>0&&Ci(i)}async function yi(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await le(t),i=Ie(o);if(n==="later")m=m.concat(i),R=R.concat(i);else if(n==="next"){let s=m.slice(0,v+1),a=m.slice(v+1);m=s,m=m.concat(i),m=m.concat(a),s=R.slice(0,v+1),a=R.slice(v+1),R=s,R=R.concat(i),R=R.concat(a)}G()}function de(){bi()}function bi(){const e=document.getElementById("audio");e.paused?(Z("playing"),X="playing",e.play().then(t=>ht()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(X="paused",Z("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){de()});navigator.mediaSession.setActionHandler("pause",function(){de()});function ft(){It()}function vt(){wt()}function hi(){document.getElementById("audio").addEventListener("ended",Pi)}function Ti(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ii(){Bi()}function wi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:B,PLAYBACK_shuffle_state:$,progress:t}}function Et(){if($==="off"){$="on",je($);const t=v+1;R=[...m],m.slice(0,v);const n=m.slice(t);Rn(n);const o=n.length;m.splice(v,o,...n),G()}else{$="off",je($);const t=[...R],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);G()}}function q(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${C}/${m[v].url}/3`,e.load(),X==="playing"?(e.play().then(n=>ht()).catch(n=>console.log(n)),Z("playing")):Z("paused"),bt(),yt()}function Ci(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${C}/${m[v].url}/3`,t.load(),t.currentTime=e,Z("paused"),bt(),yt()}function yt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Le(s)}"`,l=`"${Le(Math.floor(i))}"`,r=i/o*100,u=`${r}%`;fi(l,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=r,Tt()})}function bt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=m[v].song_name,t.innerHTML=m[v].song_name,n.innerHTML=m[v].project_contributors,ut(),o.src=`${C}/${m[v].img}/3`,i.src=`${C}/${m[v].img}/3`,mt=`${C}/${m[v].img}/5`,gt=m[v].song_name,pt=m[v].project_contributors,G()}function ht(){let e=m[v];const t=[{src:`${C}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${C}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${C}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${C}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${C}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${C}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Tt()}function Tt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Li(){console.log("PLAYBACK_stop_playback, clear top")}function Pi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>v+1&&(B=="off"||B=="on")?(v+=1,q()):B=="song"?q():t==v+1&&B=="on"?(v=0,q()):Li()}function It(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>v+1&&(e.pause(),v+=1,q())}navigator.mediaSession.setActionHandler("nexttrack",function(){It()});function wt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length,v>0&&(e.pause(),v-=1,q())}navigator.mediaSession.setActionHandler("previoustrack",function(){wt()});function Bi(){B=="off"?(B="on",Q(B)):B=="on"?(B="song",Q(B)):(B="off",Q(B))}function xi(e){e=="off"?(B="off",Q(B)):e=="on"?(B="on",Q(B)):(e="song",B="on",Q(B))}function Oi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Mi),t.addEventListener("click",Si),n.addEventListener("click",Ri),o.addEventListener("click",Di),i.addEventListener("click",Ai)}function Mi(){Et()}function Si(){vt()}function Ri(){de()}function Di(){ft()}function Ai(){Ii()}function je(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function Q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=L.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=L.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=L.icons_loop_song;return}}function Z(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=L.icons_pause;return}if(e=="paused"){t.src=L.icons_play;return}}function Ni(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){Ct(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ki)})}function ki(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;Ct(n)}function Ct(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function ji(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Ui=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
        <p>
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
</div>`;function Ji(){setTimeout(()=>{let e="MAINcontentPages",t=Gi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Hi)},1)}async function Hi(e){console.log("the signup event was caught"),e.preventDefault(),$i();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${M}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${M}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();_e(),qi(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";_e(),Ue(),alert(s)}}catch{_e(),Ue(),alert("There was an error, try again")}}function $i(){const e=document.getElementById("spinner");e.style.display="block"}function _e(){const e=document.getElementById("spinner");e.style.display="none"}function qi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Ue(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ae=!1,Ge=!1,Je=!1,He=!1;async function Yi(){await zi()?Lt():Ge||(Fi(),Ge=!0)}function Fi(){Vi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${M}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),$e(),Ji()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ae)return!1;ae=!0;const a=o.value,c=i.value;try{await Qi(a,c)?(He=!0,Y("Login Successful","success"),Lt(),$e()):(He=!1,Y("Error Logging In","error")),ae=!1}catch(l){console.error("Error:",l),ae=!1}return!1})}async function Qi(e,t){try{return(await(await fetch(`${M}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?Y("The server is down","error"):console.error(n),!1}}async function zi(){try{const e=await fetch(`${M}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&Y("The server is down","error")}}function Vi(){let e="MAINcontentPages",t=Ui;document.getElementById(e).innerHTML+=t}function $e(){if(Je===!0)return;Je=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const M="/apis",C="/media";async function Lt(){hi(),xn(),On(),di(),Oi(),ji(),Ni(),co(),Zo(),fo()}window.hasCodeRun||(Yi(),window.hasCodeRun=!0);
