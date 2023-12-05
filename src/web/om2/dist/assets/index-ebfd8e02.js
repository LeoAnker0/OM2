(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ne="/assets/menu_options_button-a1d7bbe3.svg",bt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,ht=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" id="PLAYERshuffleIcon" />
                </div>
            </button>
            <!-- last -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERbackButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_backButton}" alt="back icon" height="13" />
                </div>
            </button>
            <!-- play -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERplayButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_play}" alt="play icon" height="20" id="PLAYERplayIcon" />
                </div>
            </button>
            <!-- next -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERnextButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_nextButton}" alt="next icon" height="13" />
                </div>
            </button>
            <!-- loop -->
            <button class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERloopButton">
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
                <button class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <div>
                        <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                    </div>
                </button>
            </div>
            <button class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg">
                </div>
            </button>
        </div>
    </div>
</div>`,Tt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,It="/assets/volume_null-e39cf06f.svg",Ct="/assets/recently_added-a0a983c6.svg",wt="/assets/volume_3-c8ab0a75.svg",Lt="/assets/orange_music_text_logo_black-12e7386c.svg",Pt="/assets/volume_2-cfdac9da.svg",Bt="/assets/browse_2-85030bba.svg",Mt="/assets/volume_1-27e93416.svg",Ot="/assets/orange_music_logo_white-2a680ea2.svg",St="/assets/search_icon-4f5e4381.svg",xt="/assets/orange_music_text_logo_black-91f9e706.png",Rt="/assets/up_next_queue_button-14fedba2.svg",Dt="/assets/orange_music_logo_yellow-a109ff64.svg",At="/assets/playlist-c6e9024f.svg",Nt="/assets/loop_button-aef56865.svg",kt="/assets/help_icon-867fec9d.svg",jt="/assets/play_button-b1e2d3a4.svg",Ut="/assets/browse-14744f27.svg",Gt="/assets/orange_music_text_logo_white-7f0ba909.svg",Jt="/assets/back_button-8128cade.svg",Ht="/assets/Albums-2e81dc74.svg",$t="/assets/songs-016b7188.svg",qt="/assets/orange_music_logo_black-4d7e4591.svg",Yt="/assets/your_uploaded_songs-06535705.svg",Ft="/assets/artist-ab677d43.svg",Qt="/assets/shuffle_button-c2f06bc4.svg",zt="/assets/orange_music_text_logo_white-4907051e.png",Vt="/assets/listen_now-c7438154.svg",Kt="/assets/derpy-21c20ae5.svg",Wt="/assets/next_button-9a850710.svg",Xt="/assets/recently_added-7ff28139.svg",Zt="/assets/play_button-5eeedbe6.svg",en="/assets/browse-e8be8609.svg",tn="/assets/albums-681507b8.svg",nn="/assets/listen_now.2-bfa293ac.svg",on="/assets/your_uploads-02e5c93c.svg",sn="/assets/play_button.2-fc90fac7.svg",an="/assets/listen_now-fb02ffce.svg",cn="/assets/browse.2-15b501dd.svg",rn="/assets/place_holder_image-d4006a96.svg",ln="/assets/icons_MOGitems_add-19e679f7.svg",dn="/assets/back-9279721d.svg",un="/assets/forwards-605bd405.svg",mn="/assets/icons_close-57e87944.svg",gn="/assets/icons_pause-8012f8cc.svg",pn="/assets/icons_loop-32d1576c.svg",_n="/assets/icons_loop_song-87f53dc7.svg",fn="/assets/icons_play-a5074c5b.svg",vn="/assets/icons_settings-793063fb.svg",En="/assets/love-07ac5006.svg",w={icons_volumeNull:It,icons_recentlyAdded:Ct,icons_volume3:wt,icons_orangeMusicTextLogoBlack:Lt,icons_volume2:Pt,icons_browse2:Bt,icons_volume1:Mt,icons_orangeMusicLogoWhite:Ot,icons_searchIcon:St,icons_orangeMusicTextLogoBlackPng:xt,icons_queueButton:Rt,icons_orangeMusicLogoYellow:Dt,icons_playlist:At,icons_loopButton:Nt,icons_helpIcon:kt,icons_playButton:jt,icons_browse:Ut,icons_menuOptionsButton:Ne,icons_orangeMusicTextLogoWhite:Gt,icons_backButton:Jt,icons_Albums:Ht,icons_songs:$t,icons_orangeMusicLogoBlack:qt,icons_yourUploadedSongs:Yt,icons_artist:Ft,icons_shuffleButton:Qt,icons_orangeMusicTextLogoWhitePng:zt,icons_listenNow:Vt,icons_derpy:Kt,icons_nextButton:Wt,icons_recentlyAddedV2:Xt,icons_playButtonV2:Zt,icons_browseV2:en,icons_albumsV2:tn,icons_listenNow2V2:nn,icons_yourUploads:on,icons_playButton2:sn,icons_listenNowV2:an,icons_browse2V2:cn,v3_placeholder:rn,icons_MOGitems_add:ln,icons_back:dn,icons_forwards:un,icons_close:mn,icons_pause:gn,icons_loop:pn,icons_loop_song:_n,icons_play:fn,icons_settings:vn,current_year:new Date().getFullYear(),icons_love:En};function yn(){let e="topleftContentArea",t=bt;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function bn(){let e="toprightContentArea",t=ht;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function hn(){let e="MAINcontentContainer",t=Tt;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Tn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function N(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function In(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function Cn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function he(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function wn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Ln(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ke(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Pn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Bn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let Te;const x=new Map;function Mn(e,t,n){x.has(e)||x.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!x.has(e))return;const c=Math.min(a/500,1);if(!x.has(e))return;const l=On(x.get(e).originalColor,c,n);e.style.backgroundColor=l,c<1||x.get(e).isChanging?x.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",x.delete(e))}clearTimeout(Te),Te=setTimeout(()=>{x.has(e)&&!x.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(x.get(e).animationFrameId),x.delete(e))},500),x.get(e).isChanging=!0;const i=Date.now();x.get(e).animationFrameId=requestAnimationFrame(o)}function On(e,t,n){return Sn(n,e,t)}function Sn(e,t,n){const o=function(f){return f=f.toString(16),f.length===1?"0"+f:f},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),c=parseInt(t.substring(1,3),16),l=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16),d=Math.round(i*(1-n)+c*n),p=Math.round(s*(1-n)+l*n),b=Math.round(a*(1-n)+r*n);return"#"+o(d)+o(p)+o(b)}function xn(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Rn(o,i,s),c=me(a[0]),l=me(a[1]),r=me(a[2]);return Dn({r:c,g:l,b:r})}function Rn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function me(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Dn(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const An=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Nn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,kn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,jn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Un=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Gn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
    </div>
    <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play">
        <div>
            <img src="{icons_playButtonV2}">
        </div>
    </div>
    <div role="button" tabindex="0" aria-label="Display Menu" id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu">
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
</button>`,je=15;let V=0;async function Jn(){try{const e=document.getElementById("MAINcontentPages");Hn();const t=await Ye(je,V);V+=t.length,$n(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Ue(){V=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ge),e.innerHTML=""}function Hn(){let e="MAINcontentPages",t=jn;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function $n(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Un;for(const[a,c]of Object.entries(w)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Ie(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Ge(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],d=c[r].project_id;console.log(d),Je(a,d)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await Ye(je,V);V+=r.length,r.length>0&&Ie(r)}})}function Ie(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,c=e[o].top,l=e[o].bottom,r=e[o].days,d=wn(r);let p=Gn;for(const[b,f]of Object.entries(w)){const m=new RegExp(`\\{${b}\\}`,"g");p=p.replace(m,f)}for(let b=0;b<i.length;b++){const f=i[b].toString(),m=new RegExp(`\\{${f}\\}`,"g");let _="";f==="MOG_image"?_=`${C}/${a}/4/`:f==="MOG_text1"?_=c:f==="MOG_text2"?_=l:f==="MOG_checkedDate"?_=d:f==="MOGI_placeholder_itemID"&&(_=s),p=p.replace(m,_)}t.innerHTML+=p}}async function Ge(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await re(i);st(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Je(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;k(`/projects/${i}`)}n.id==="MOGaddNewItem"&&qn()}function Je(e,t){e.stopPropagation(),G([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function qn(){k("/new-project/")}const Yn=`<div class="ADMINusersTableInfoRow">
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
</div>`,Fn=`<h1>Admin</h1>
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
</form>`,Qn=`<h1>Admin</h1>
<p>You are not an admin user</p>`,zn=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Vn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,Kn=`<div class="settings_container">
    <div class="settings_body_top_banner">
        <button id="settings_go_to_other_content_button">
            <img src="{icons_back}" height="16" width="16">
        </button>
    </div>
    <div class="settings_content">
        <div class="settings_views_container">
            <div class="settings_views_positioner">
                <h1>Settings</h1>
                <div class="settings_views_list">
                    <button class="settings_views_list_item" id="settings_button_general">
                        General
                    </button>
                    <button class="settings_views_list_item" id="settings_button_user">
                        User
                    </button>
                    <button class="settings_views_list_item" id="settings_button_admin">
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
</div>`;let He;async function Wn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await fe("profile_picture"),n=`${C}/${t}/1/`,o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Xn)}catch(t){console.error("Error initializing account image:",t)}}function Xn(e){e.stopPropagation(),Zn(e)}function Zn(e){G([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function eo(){await po()}let $e="admin";const se=[{name:"general",markup:zn,button_id:"settings_button_general",function:no},{name:"user",markup:Vn,button_id:"settings_button_user",function:oo},{name:"admin",markup:Qn,button_id:"settings_button_admin",function:io}];function to(){const e=document.getElementById("MAINcontentPages");let t=Kn;for(const[i,s]of Object.entries(w)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Ce($e);for(var o=se.length-1;o>=0;o--){const i=se[o].button_id;document.getElementById(i).addEventListener("click",function(a){const c=a.srcElement.id,r=se.find(d=>d.button_id===c).name;Ce(r)})}n.addEventListener("click",function(){k("/")})}function qe(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Ce(e){$e=e;const t=["users_img"],n=document.getElementById("view_container"),o=se.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(w)){const c=new RegExp(`\\{${s}\\}`,"g");i=i.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${C}/${He}/4/`),i=i.replace(c,l)}n.innerHTML=i,o.function()}function no(){console.log("general")}function oo(){console.log("user")}async function io(){if((await fe("admin"))[0].admin!==!0)return;const n=["users_img"],o=document.getElementById("view_container");let i=Fn,s=[];for(const[r,d]of Object.entries(w)){const p=new RegExp(`\\{${r}\\}`,"g");i=i.replace(p,d)}for(let r=0;r<n.length;r++){const d=n[r].toString(),p=new RegExp(`\\{${d}\\}`,"g");let b="";d==="users_img"&&(b=`${C}/${He}/4/`),i=i.replace(p,b)}o.innerHTML=i;const a=await go(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const d=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],p=a[r].username,b=a[r].uuid,f=a[r].verified,m=a[r].email,_=a[r].admin,g=r;let h=a[r].storage_used;h=ke(h);let E=Yn,M=a[r].profile_picture;M=`${C}/${M}/1/`;for(let y=0;y<d.length;y++){const T=d[y].toString(),O=new RegExp(`\\{${T}\\}`,"g");let P="";T==="Username"?P=p:T==="Email"?P=m:T==="UUID"?P=b:T==="Verified"?P=f:T==="Space_Used"?P=h:T==="profile_picture_url"?P=M:T==="checkbox_number"?P=g:T==="Admin"&&(P=_),E=E.replace(O,P)}c.innerHTML+=E}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const d=c.querySelectorAll('input[type="checkbox"]'),p=[],b=document.getElementById("settings_admin_selected_items_visualition");d.forEach(function(f){if(f.checked){const g={id:f.id.replace("admin_users_table_check_box_",""),value:f.value};p.push(g)}}),p.forEach(function(f){const _=a[f.id].uuid;s.push(_)}),b.innerHTML=`Selected Items: ${s.length}`}}async function so(){const e=await fe("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;k(c),di(t)}else a();function i(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=u,r=v,d=fi();d.current_path=c,d.current_queue=l,d.current_index=r;const p=i(d);p!==o&&(uo("last_state",d),o=p,n.set("playback_states",p))}function a(){k(currentPath)}}function ao(){Fe(),qe(),Jn()}function co(e){Ue(),qe(),Eo(e)}function ro(){Ue(),Fe(),to()}const we={"/":ao,"/new-project/":mo,"/projects/:projectID":co,"/settings/":ro};function lo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${C}/assets/hippo.webp">
    `;function n(){k("/")}}function k(e){const t=Object.keys(we);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=we[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}lo()}async function uo(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${S}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function fe(e){try{return(await(await fetch(`${S}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ae(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${S}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function re(e){try{return(await(await fetch(`${S}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ye(e,t){try{const i=(await(await fetch(`${S}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):(console.log("Projects is not an array:",i),[])}catch(n){return console.error("Error:",n),[]}}async function mo(){try{const o=`/projects/${(await(await fetch(`${S}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;k(o)}catch(e){console.error("Error:",e)}}async function go(){try{return(await(await fetch(`${S}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function po(){try{const t=await(await fetch(`${S}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const _o=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,fo=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
        <button>
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,vo=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader" id="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_back}" height="16" width="16">
            </button>
        </div>
        <div class="PROJECTviewMobileStickyHeaderProjectNameContainer" id="PROJECTviewMobileStickyHeaderProjectNameContainer">
        </div>
        <div class="PROJECTviewMobileStickyHeaderMenuButton">
            <button id="PROJECTviewMobileStickyHeaderMenuButton">
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
                <button class="PROJECTviewDescriptionMoreButton" id="PROJECTviewDescriptionMoreButton">MORE</button>
            </div>
            <div class="PROJECTviewDisplayButtons PROJECTviewTopItem-6">
                <button id="PROJECTviewDescriptionTopPlayButton">
                    <img src="{icons_playButton}" height="16" width="16">
                    <div>Play</div>
                </button>
                <button id="PROJECTviewDescriptionTopShuffleButton">
                    <img src="{icons_shuffleButton}" height="16" width="16">
                    <div>Shuffle</div>
                </button>
            </div>
            <div class="PROJECTviewDisplayMenu  PROJECTviewTopItem-7">
                <button id="PROJECTviewDisplayMenuButton">
                    <img src="{icons_menuOptionsButton}" width="20" height="20">
                </button>
            </div>
        </div>
        <div class="PROJECTview-projectAreaContainer" id="PROJECTview_projectAreaContainer">
            <div class="PROJECTview-projectArea-uploadArea" id="PROJECTview_upload_area_files_upload_box">
                <div class="PROJECTview_dropArea" id="PROJECTview_dropArea">
                    <button>
                        <p>Drag and drop files here or click to select files.</p>
                    </button>
                    <br>
                    <br>
                    <button id="PROJECTview_dropArea_submit_button">Submit Files</button>
                    <div id="uploadsContainer" class="uploadsContainer"></div>
                </div>
            </div>
        </div>
        <div class="PROJECTview-filesAreaContainer"></div>
    </div>
    <div class="PROJECTviewMOREdescriptionboxEnvironment" id="PROJECTviewMOREdescriptionboxEnvironment">
        <div class="PROJECTviewMOREdescriptionContainer">
            <button class="PROJECTviewMOREcloseButton" id="PROJECTviewMOREcloseButton">
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
</div>`,ce=[];let pe=!1,Le=!0,I;async function Eo(e){ho({ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/default_pfp"}),sessionStorage.setItem("description","Wonderful notes are loading..."),Pe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{k("/")}),setTimeout(async()=>{const i=await re(e);if(i=="")console.log(i);else{const s=JSON.parse(i);s.ProjectID=e,I=s,o(),bo()}},1);function o(){yo(),sessionStorage.setItem("description",I.Description),Pe(),To(),Co(),wo(),Lo(),ze(),Do(),Ke(I.ProjectName),Ao(I.ProjectID),xo()}}function Fe(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function Qe(){const e=I.ProjectID,t=await re(e);if(t=="")console.log(t);else{const n=JSON.parse(t);n.ProjectID=e,I=n,ze();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${C}/${I.PictureURL}/5/`;o.src=i}}function yo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${C}/${I.PictureURL}/5/`;e.innerText=I.ProjectName,t.innerText=I.ProjectContributors,n.src=o}function bo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");e.addEventListener("blur",function(n){const o=e.innerText;Ke(o),ae(I.ProjectID,"project_name",o)}),t.addEventListener("blur",function(n){const o=t.innerText;ae(I.ProjectID,"project_contributors",o)})}function ho(e){let t="MAINcontentPages",n=vo;for(const[i,s]of Object.entries(w)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=Ln(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${C}/${e.PictureURL}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Pe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function To(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",N()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Io(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Co(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function wo(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Be(I)}),t.addEventListener("click",function(n){n.target===t&&Be(I)})}function Be(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),ae(e.ProjectID,"description",n),o.style.display="none",Io(),i.style.zIndex="1"}async function Lo(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){st(I)}),t.addEventListener("click",function(){li(I)}),n.addEventListener("click",function(){Me(event,I)}),o.addEventListener("click",function(){Me(event,I)})}function Me(e,t){e.stopPropagation(),t=JSON.parse(t),e.target;const o=window.location.pathname.split("/"),i=o[o.length-1];G([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:i,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:i,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:i},colour:"hsl(0, 100%, 55%)"}],e)}function Po(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";Bo(e),Q(),k(t)}else Q()}async function Bo(e){e=e.PROJECT_ID;try{const n=await(await fetch(`${S}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error("Error:",t)}}function ze(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Oo();const t=document.getElementById("PROJECTview-projectTable"),n=I.ProjectJSON,o=xn("--orange"),i=r=>`#${r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(d=>parseInt(d,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n!==null){let d=function(m){m.dataTransfer.setData("text/plain",m.target.dataset.rowId),m.dataTransfer.getData("text/plain"),s=m.srcElement,Pn(m.srcElement)},b=function(m){m.preventDefault(),m.dataTransfer.dropEffect="move";const _=m.target.closest(".PROJECTview-projectTable-rowContainer");if(_!==s){const g=getComputedStyle(_).backgroundColor,h=i(g);p(_,h,o)}},f=function(m){m.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const _=m.dataTransfer.getData("text/plain"),g=document.querySelector(`[data-row-id="${_}"]`),h=m.target.closest(".PROJECTview-projectTable-rowContainer");if(h){const E=h.getAttribute("data-row-id");h.before(g),console.log(_,E)}for(const E of t.children)console.log(E.style.backgroundColor),E.style.backgroundColor=""};var a=d,c=b,l=f;const r=[];if(n)for(const m of n)r.push({img:I.PictureURL,songTitle:m.SongName,artistName:I.ProjectContributors,projectName:ke(m.FolderSize),songDuration:`${Math.floor(m.Duration/60)}:${(m.Duration%60).toString().padStart(2,"0")}`,songSequence:m.SongSequence,version:m.Version,url:m.URL});for(let m=0;m<r.length;m++){r[m].ProjectID=m;const _=r[m],g=So(_);t.insertAdjacentHTML("beforeend",g);const h=t.lastElementChild;h.addEventListener("dragstart",d),h.addEventListener("dragover",b),h.addEventListener("drop",f)}const p=Bn(Mn,0);t.addEventListener("click",function(m){const _=m.target;if(m.stopPropagation(),_.tagName==="BUTTON"){const g=_.closest(".PROJECTview-projectTable-rowContainer");g&&(g.getAttribute("data-row-id"),Mo(m))}});{const m=t.querySelectorAll("[contenteditable]"),_=g=>{const M=`${g.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id")}-${g.target.textContent}`;ae(I.ProjectID,"project_song_title",M)};m.forEach(g=>{g.addEventListener("blur",_)})}}}function Mo(e){e.stopPropagation(),e.target,G([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Oo(){let e="PROJECTview_projectAreaContainer",t=_o;for(const[n,o]of Object.entries(w)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function So(e){let t=fo;for(const[o,i]of Object.entries(w)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${C}/${e.img}/3/`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Le===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Le===!1&&(a=!1),t=t.replace(s,a)}return t}function xo(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i,I)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files,console.log(t)}),s.click()):(console.log("the submit files button was clicked ",t),n(t,I))});function n(o,i){for(const s of o);Ro(o,i)}}async function Ve(e,t){const n=new FormData,o=new XMLHttpRequest;pe=!0,n.append("file",e),n.append("project_id",t.project_id),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;console.log(s),s===100&&console.log("upload completed")}},o.onload=async function(){if(console.log("Upload fully complete"),pe=!1,ce.length>0){const i=ce.shift();await Ve(i.file,i.details)}Qe()},o.onerror=function(){console.log("Upload failed")},o.open("POST",`${S}/files/upload_audio/${I.ProjectID}`,!0),o.send(n)}async function Ro(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={file:n,details:t};if(ce.push(o),!pe){const i=ce.shift();await Ve(i.file,i.details)}}}function Ke(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Do(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&N()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!N()||!c.isIntersecting&&!N()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&N()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function Ao(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){No(i,s)}}function No(e,t){e.target;const n="update_project_image",o={project_id:t};e.stopPropagation(),G(o,e,n)}const ko=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function jo(e,t){const n=new XMLHttpRequest,o=new FormData;localStorage.getItem("JWT"),o.append("file",e),n.upload.onprogress=function(i){i.lengthComputable&&i.loaded/i.total*100},n.onload=function(){qo()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${S}/files/upload_photo/${t}`,!0),n.send(o)}async function Uo(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await jo(n,t)}const We='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let $,j=!1;function G(e,t,n){n===void 0&&Ho(e,t),n!==void 0&&n==="update_project_image"&&$o(e,t),n!==void 0&&n==="lcd_mobile_body"&&Jo(),n!==void 0&&n==="notice"&&Go(e)}function Go(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=We,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=o+"px";if(a.addEventListener("click",ve),c.style.left=l,c.style.top=r,c.style.padding="5px",$&&pointerType===""){const g=$.getBoundingClientRect();n=g.left+window.scrollX,o=g.top+window.scrollY;let h=n+"px",E=o+"px";c.style.left=h,c.style.top=E}for(let g=0;g<e.length;g++)Ze(e[g]);c.children[0];const p=c.offsetWidth,b=c.offsetHeight,f=Xe("MENUmodalBody"),m=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",_),f.xOverflow==!0&&(l=n-p+"px",c.style.left=l),f.yOverflow==!0&&(r=o-b+"px",c.style.top=r);for(let g=0;g<m.length;g++){const h=m[g];h.setAttribute("data-menu-item-id",g),h.addEventListener("click",function(E){E.stopPropagation();const y=E.target.getAttribute("data-menu-item-id"),T=e[y].function,O=e[y].optionalParams;if(T=="TEST")console.log("the button worked");else if(T!="None"){et[T](O);return}else return})}function _(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",_),Q())}}function Jo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=kn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;N()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[B,D]of Object.entries(w)){const A=new RegExp(`\\{${B}\\}`,"g");i=i.replace(A,D)}o.style.display="block",o.innerHTML=i;const r=document.getElementById("LCD_mobile_body_song_title"),d=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),b=s.duration,m=s.currentTime/b*100,_=document.getElementById("LCDMB_seek_input"),g=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const h=document.getElementById("LCDMB_back"),E=document.getElementById("LCDMB_play"),M=document.getElementById("LCDMB_play_icon"),y=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{O(),j===!0&&Y()}),O(),P(),g.style.width=`${m}%`,s.addEventListener("timeupdate",()=>{const B=s.duration,A=s.currentTime/B*100;g.style.width=`${A}%`}),_.addEventListener("input",function(){const B=s.duration,D=_.value;s.currentTime=B*(D/100)}),h.addEventListener("click",()=>{ct(),O(),j===!0&&Y()}),E.addEventListener("click",()=>{le(),O(),P()}),y.addEventListener("click",()=>{at(),O(),j===!0&&Y()}),T.addEventListener("click",()=>{j===!1?(ye(),j=!0):(be(),j=!1)}),j===!0?ye():be(),o.addEventListener("touchstart",X,!1),o.addEventListener("touchmove",Z,!1),o.addEventListener("touchend",ee,!1);function O(){p.src=nt,r.innerText=ot,d.innerText=it}function P(){s.paused?M.src=w.icons_playButtonV2:M.src=w.icons_derpy}function Y(){const B=document.getElementById("LCD_mobile_queue_content_container");B.innerHTML="";for(let D=v+1;D<u.length;D++){const A=u[D],te=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],z=A.img,vt=A.song_name,Et=A.project_contributors;let de=Nn;for(let ue=0;ue<te.length;ue++){const ne=te[ue].toString(),yt=new RegExp(`\\{${ne}\\}`,"g");let oe="";ne==="queue_item_img"?oe=`${C}/${z}/3/`:ne==="queue_item_song_name"?oe=vt:ne==="queue_item_song_artist"&&(oe=Et),de=de.replace(yt,oe)}B.innerHTML+=de}}function ye(){function B(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(z=>{z.classList.add("queue_visible")})})}B(a),o.removeEventListener("touchstart",X),o.removeEventListener("touchmove",Z),o.removeEventListener("touchend",ee),Y()}function be(){function B(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(z=>{z.classList.remove("queue_visible")})})}B(a),o.addEventListener("touchstart",X,!1),o.addEventListener("touchmove",Z,!1),o.addEventListener("touchend",ee,!1)}function X(B){j===!1&&(c=B.touches[0].clientY)}function Z(B){B.preventDefault()}function ee(B){l=B.changedTouches[0].clientY,l-c>70&&(Q(),o.removeEventListener("touchstart",X),o.removeEventListener("touchmove",Z),o.removeEventListener("touchend",ee))}}function Ho(e,t){$=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");N()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=We,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=o+"px",d=i+"px";if(c.addEventListener("click",ve),l.style.left=r,l.style.top=d,$&&n===""){const E=$.getBoundingClientRect();o=E.left+window.scrollX,i=E.top+window.scrollY;let M=o+"px",y=i+"px";l.style.left=M,l.style.top=y}for(let E=0;E<e.length;E++)Ze(e[E]);const b=l.children[0],f=l.offsetWidth,m=l.offsetHeight,_=Xe("MENUmodalBody"),g=l.getElementsByClassName("MENUmodalItemContainer");n===""?b.focus():n==="mouse"&&(b.focus(),b.blur()),document.addEventListener("keydown",h),_.xOverflow==!0&&(r=o-f+"px",l.style.left=r),_.yOverflow==!0&&(d=i-m+"px",l.style.top=d);for(let E=0;E<g.length;E++){const M=g[E];M.setAttribute("data-menu-item-id",E),M.addEventListener("click",function(y){y.stopPropagation();const O=y.target.getAttribute("data-menu-item-id"),P=e[O].function,Y=e[O].optionalParams;if(P=="TEST")console.log("the button worked");else if(P!="None"){et[P](Y);return}else return})}function h(E){(E.key==="Escape"||E.keyCode===27)&&(document.removeEventListener("keydown",h),Q())}}function $o(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",l=o+"px";N()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2",a.innerHTML=An,a.style.display="block",a.addEventListener("click",ve);const r=document.getElementById("MENUmodalBody"),d=document.getElementById("MENUmodalBody_image_select_file_drop_area"),p=document.getElementById("MENUmodalBody_image_select_file_select_button"),b=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),m=document.getElementById("MENUmodalBody_image_select_submit_button_container");r.style.left=c,r.style.top=l;let _,g;function h(y,T){return function(){const O=this,P=arguments;clearTimeout(g),g=setTimeout(()=>{y.apply(O,P)},T)}}function E(y,T){h(Uo,100)(y,T)}function M(y){if(_){const T=URL.createObjectURL(_),O=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");b.src=T,f.style.visibility="visible",m.style.outline="3px solid var(--primary)",f.addEventListener("click",()=>{E(_,y.project_id),O.style.visibility="visible"})}else console.log("No file selected.")}d.addEventListener("dragover",y=>{y.preventDefault()}),d.addEventListener("drop",y=>{y.preventDefault(),_=y.dataTransfer.files[0],M(e)}),p.addEventListener("click",()=>{const y=document.createElement("input");y.type="file",y.accept="image/*",y.addEventListener("change",T=>{_=T.target.files[0],M(e)}),y.click()})}function qo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Q(),Qe()}function Xe(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=i+s,r=c+a;let d=!1,p=!1;return l>n&&(d=!0),r>o&&(p=!0),{xOverflow:d,yOverflow:p}}function Ze(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",N()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=ko.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(w)){const d=new RegExp(`\\{${l}\\}`,"g");a=a.replace(d,r)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function ve(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function Q(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),$&&$.focus()}const et={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Po(e)},PLAYBACK_add_songs_to_queue(e){ui(e)},SIGN_OUT_USER(e){eo()},OPEN_SETTINGS_PAGE(e){k("/settings/")}};let J="hidden";function Yo(){hn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");_e(J),e.addEventListener("click",Fo),t.addEventListener("click",Qo),U()}function Fo(){if(J==="hidden"){J="visible",_e(J);return}if(J==="visible"){J="hidden",_e(J);return}}function _e(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",In&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function U(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],o=ei(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",Zo),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Wo),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&Xo(c)}),i.addEventListener("dragstart",zo),i.addEventListener("dragover",Vo),i.addEventListener("drop",Ko),e.appendChild(i)}}function Qo(){const e=v+1;e>=0&&e<u.length?u.splice(e):u.length=0,U()}function zo(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Vo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Ko(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),R.splice(s,1),R.splice(a,0,o),U())}function Wo(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),R.splice(o,1)),U()}function Xo(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];G(o,e)}function Zo(e){}function ei(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Tn;for(let l=0;l<t.length;l++){const r=t[l].toString(),d=new RegExp(`\\{${r}\\}`,"g");let p="";r==="QUEUE_item_image"?p=`${C}/${n}/3/`:r==="QUEUE_item_title"?p=o:r==="QUEUE_item_artist"?p=i:r==="icons_menuOptionsButton"?p=Ne:r==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(d,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const ti=`<div class="LCDbody">
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
</div>`;function ni(){ii(),tt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){si(t)}),ai(),N()&&document.getElementById("LCDbody").addEventListener("click",oi)}function oi(e){e.stopPropagation(),G({param:"cheese"},e,"lcd_mobile_body")}function ii(){let e="LCDbody",t=ti;for(const[o,i]of Object.entries(w)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function tt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let l,r,d;e=n.clientWidth,r=s(),d=e/o,d>r?l=r+10:l=d,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const d=r.offsetWidth;return document.body.removeChild(r),d}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function si(e){e.stopPropagation(),e.target,G([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function ai(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",ci)})}function ci(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),pi(n)}function ri(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],R=[],v=0,nt="",ot="",it="";document.getElementById("audio");document.getElementById("PLAYERsource");let L="off",H="off",K="paused";function st(e){u=[],v=0,u=Ee(e),u.length>0&&(K="playing",q())}function li(e){u=[],v=0,u=Ee(e),u.length>0&&(H="off",rt(),K="playing",q())}function Ee(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:i,song_name:c,url:r,duration:l,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function di(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,hi(o),u!==void 0&&u.length>0&&vi(i)}async function ui(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await re(t),i=Ee(o);if(n==="later")u=u.concat(i),R=R.concat(i);else if(n==="next"){let s=u.slice(0,v+1),a=u.slice(v+1);u=s,u=u.concat(i),u=u.concat(a),s=R.slice(0,v+1),a=R.slice(v+1),R=s,R=R.concat(i),R=R.concat(a)}U()}function le(){mi()}function mi(){const e=document.getElementById("audio");e.paused?(W("playing"),K="playing",e.play().then(t=>ut()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",W("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){le()});navigator.mediaSession.setActionHandler("pause",function(){le()});function at(){gt()}function ct(){pt()}function gi(){document.getElementById("audio").addEventListener("ended",yi)}function pi(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function _i(){bi()}function fi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:L,PLAYBACK_shuffle_state:H,progress:t}}function rt(){if(H==="off"){H="on",Oe(H);const t=v+1;R=[...u],u.slice(0,v);const n=u.slice(t);Cn(n);const o=n.length;u.splice(v,o,...n),U()}else{H="off",Oe(H);const t=[...R],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);U()}}function q(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${C}/${u[v].url}/3/`,e.load(),K==="playing"?(e.play().then(n=>ut()).catch(n=>console.log(n)),W("playing")):W("paused"),dt(),lt()}function vi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${C}/${u[v].url}/3/`,t.load(),t.currentTime=e,W("paused"),dt(),lt()}function lt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${he(s)}"`,l=`"${he(Math.floor(i))}"`,r=i/o*100,d=`${r}%`;ri(l,a),t.style.setProperty("--LCD-seekbar-width",d),t.style.setProperty("--LCD-seekbar-indicator-left",d),n.value=r,mt()})}function dt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[v].song_name,t.innerHTML=u[v].song_name,n.innerHTML=u[v].project_contributors,tt(),o.src=`${C}/${u[v].img}/3/`,i.src=`${C}/${u[v].img}/3/`,nt=`${C}/${u[v].img}/5/`,ot=u[v].song_name,it=u[v].project_contributors,U()}function ut(){let e=u[v];const t=[{src:`${C}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${C}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${C}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${C}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${C}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${C}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),mt()}function mt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Ei(){console.log("PLAYBACK_stop_playback, clear top")}function yi(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(L=="off"||L=="on")?(v+=1,q()):L=="song"?q():t==v+1&&L=="on"?(v=0,q()):Ei()}function gt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.pause(),v+=1,q())}navigator.mediaSession.setActionHandler("nexttrack",function(){gt()});function pt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,v>0&&(e.pause(),v-=1,q())}navigator.mediaSession.setActionHandler("previoustrack",function(){pt()});function bi(){L=="off"?(L="on",F(L)):L=="on"?(L="song",F(L)):(L="off",F(L))}function hi(e){e=="off"?(L="off",F(L)):e=="on"?(L="on",F(L)):(e="song",L="on",F(L))}function Ti(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Ii),t.addEventListener("click",Ci),n.addEventListener("click",wi),o.addEventListener("click",Li),i.addEventListener("click",Pi)}function Ii(){rt()}function Ci(){ct()}function wi(){le()}function Li(){at()}function Pi(){_i()}function Oe(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function F(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=w.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=w.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=w.icons_loop_song;return}}function W(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=w.icons_pause;return}if(e=="paused"){t.src=w.icons_play;return}}function Bi(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){_t(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Mi)})}function Mi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;_t(n)}function _t(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Oi(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Si=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
            <button class="SETTINGSmodalSignup" id="SETTINGSmodalSignupButton">Signup?</button>
        </form>
        <div class="SETTINGSrandomImage">
            <img src="https://picsum.photos/400">
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
</div>`,xi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ri(){setTimeout(()=>{let e="MAINcontentPages",t=xi;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Di)},1)}async function Di(e){console.log("the signup event was caught"),e.preventDefault(),Ai();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${S}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${S}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();ge(),Ni(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";ge(),Se(),alert(s)}}catch{ge(),Se(),alert("There was an error, try again")}}function Ai(){const e=document.getElementById("spinner");e.style.display="block"}function ge(){const e=document.getElementById("spinner");e.style.display="none"}function Ni(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Se(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ie=!1,xe=!1,Re=!1,De=!1;async function ki(){await Gi()?ft():xe||(ji(),xe=!0)}function ji(){Ji();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${S}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Ae(),Ri()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ie)return!1;ie=!0;const a=o.value,c=i.value;try{await Ui(a,c)?(De=!0,Hi(),ft(),setTimeout(Ae,2e3)):(De=!1,$i(),console.log("Login failed. Retry!")),ie=!1}catch(l){console.error("Error:",l),ie=!1}return!1})}async function Ui(e,t){try{const o=await(await fetch(`${S}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(o.Authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.Authenticated}catch(n){return console.error(n),!1}}async function Gi(){const e=await fetch(`${S}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function Ji(){let e="MAINcontentPages",t=Si;document.getElementById(e).innerHTML+=t}function Ae(){if(Re===!0)return;Re=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function Hi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function $i(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const qi=`<!-- audio tag -->
<audio id="audio" preload>
    <source id="PLAYERsource" src=""></audio>
<!-- noise *generator* -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <filter id="noise1">
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
    <filter id="noise2">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
    <filter id="noise3">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="turbulence" />
        <feColorMatrix type="saturate" in="turbulence" values="0" />
        <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
</svg>
<!-- layout htmls -->
<div class="topHalf-container">
    <div class="topHalf">
        <div class="topHalf-left" id="topleftContentArea"></div>
        <div class="topHalf-right" id="toprightContentArea">
        </div>
    </div>
</div>
<main class="MATERIAL-meshBackground">
    <div class="botHalf-left MATERIAL-blur-1">
    </div>
    <div class="contentContainer" id="MAINcontentContainer">
        <div class="content" id="MAINcontentPages">
        </div>
    </div>
    <div class="menuModalEnvironment menuModalBackground" id="MENUmodalEnvironment"></div>
</main>
<!-- svg masks -->
<div style="display: none;">
    <img src="{icons_shuffleButton}" alt="shuffle icon" id="SVG_mask_shuffle" />
</div>`;const S="/apis",C="/media";async function ft(){gi(),yn(),bn(),ni(),Ti(),Oi(),Bi(),Wn(),Yo(),so()}if(!window.hasCodeRun){let e=qi;for(const[t,n]of Object.entries(w)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}document.getElementById("app").innerHTML=e,ki(),window.hasCodeRun=!0}
