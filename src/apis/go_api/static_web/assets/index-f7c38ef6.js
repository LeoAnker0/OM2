(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ge="/assets/menu_options_button-a1d7bbe3.svg",Ct=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,wt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,Lt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Pt="/assets/volume_null-e39cf06f.svg",Bt="/assets/recently_added-a0a983c6.svg",Mt="/assets/volume_3-c8ab0a75.svg",Ot="/assets/orange_music_text_logo_black-12e7386c.svg",St="/assets/volume_2-cfdac9da.svg",xt="/assets/browse_2-85030bba.svg",Rt="/assets/volume_1-27e93416.svg",Dt="/assets/orange_music_logo_white-2a680ea2.svg",At="/assets/search_icon-4f5e4381.svg",Nt="/assets/orange_music_text_logo_black-91f9e706.png",kt="/assets/up_next_queue_button-14fedba2.svg",jt="/assets/orange_music_logo_yellow-a109ff64.svg",Ut="/assets/playlist-c6e9024f.svg",Gt="/assets/loop_button-aef56865.svg",Jt="/assets/help_icon-867fec9d.svg",Ht="/assets/play_button-b1e2d3a4.svg",$t="/assets/browse-14744f27.svg",qt="/assets/orange_music_text_logo_white-7f0ba909.svg",Yt="/assets/back_button-8128cade.svg",Ft="/assets/Albums-2e81dc74.svg",Qt="/assets/songs-016b7188.svg",zt="/assets/orange_music_logo_black-4d7e4591.svg",Vt="/assets/your_uploaded_songs-06535705.svg",Kt="/assets/artist-ab677d43.svg",Wt="/assets/shuffle_button-c2f06bc4.svg",Xt="/assets/orange_music_text_logo_white-4907051e.png",Zt="/assets/listen_now-c7438154.svg",en="/assets/derpy-21c20ae5.svg",tn="/assets/next_button-9a850710.svg",nn="/assets/recently_added-7ff28139.svg",on="/assets/play_button-5eeedbe6.svg",sn="/assets/browse-e8be8609.svg",an="/assets/albums-681507b8.svg",cn="/assets/listen_now.2-bfa293ac.svg",rn="/assets/your_uploads-02e5c93c.svg",ln="/assets/play_button.2-fc90fac7.svg",dn="/assets/listen_now-fb02ffce.svg",un="/assets/browse.2-15b501dd.svg",mn="/assets/place_holder_image-d4006a96.svg",gn="/assets/icons_MOGitems_add-19e679f7.svg",pn="/assets/back-9279721d.svg",_n="/assets/forwards-605bd405.svg",fn="/assets/icons_close-57e87944.svg",vn="/assets/icons_pause-8012f8cc.svg",En="/assets/icons_loop-32d1576c.svg",yn="/assets/icons_loop_song-87f53dc7.svg",bn="/assets/icons_play-a5074c5b.svg",hn="/assets/icons_settings-793063fb.svg",Tn="/assets/love-07ac5006.svg",L={icons_volumeNull:Pt,icons_recentlyAdded:Bt,icons_volume3:Mt,icons_orangeMusicTextLogoBlack:Ot,icons_volume2:St,icons_browse2:xt,icons_volume1:Rt,icons_orangeMusicLogoWhite:Dt,icons_searchIcon:At,icons_orangeMusicTextLogoBlackPng:Nt,icons_queueButton:kt,icons_orangeMusicLogoYellow:jt,icons_playlist:Ut,icons_loopButton:Gt,icons_helpIcon:Jt,icons_playButton:Ht,icons_browse:$t,icons_menuOptionsButton:Ge,icons_orangeMusicTextLogoWhite:qt,icons_backButton:Yt,icons_Albums:Ft,icons_songs:Qt,icons_orangeMusicLogoBlack:zt,icons_yourUploadedSongs:Vt,icons_artist:Kt,icons_shuffleButton:Wt,icons_orangeMusicTextLogoWhitePng:Xt,icons_listenNow:Zt,icons_derpy:en,icons_nextButton:tn,icons_recentlyAddedV2:nn,icons_playButtonV2:on,icons_browseV2:sn,icons_albumsV2:an,icons_listenNow2V2:cn,icons_yourUploads:rn,icons_playButton2:ln,icons_listenNowV2:dn,icons_browse2V2:un,v3_placeholder:mn,icons_MOGitems_add:gn,icons_back:pn,icons_forwards:_n,icons_close:fn,icons_pause:vn,icons_loop:En,icons_loop_song:yn,icons_play:bn,icons_settings:hn,current_year:new Date().getFullYear(),icons_love:Tn};function In(){let e="topleftContentArea",t=Ct;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Cn(){let e="toprightContentArea",t=wt;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function wn(){let e="MAINcontentContainer",t=Lt;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Ln=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function N(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Je(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function Pn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function Ce(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Bn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Mn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function He(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function On(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Sn(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}let we;const x=new Map;function xn(e,t,n){x.has(e)||x.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!x.has(e))return;const c=Math.min(a/500,1);if(!x.has(e))return;const l=Rn(x.get(e).originalColor,c,n);e.style.backgroundColor=l,c<1||x.get(e).isChanging?x.get(e).animationFrameId=requestAnimationFrame(o):(console.log("hide this thang"),e.style.backgroundColor="",x.delete(e))}clearTimeout(we),we=setTimeout(()=>{x.has(e)&&!x.get(e).isChanging&&(console.log("hide this thang"),e.style.backgroundColor="",cancelAnimationFrame(x.get(e).animationFrameId),x.delete(e))},500),x.get(e).isChanging=!0;const i=Date.now();x.get(e).animationFrameId=requestAnimationFrame(o)}function Rn(e,t,n){return Dn(n,e,t)}function Dn(e,t,n){const o=function(E){return E=E.toString(16),E.length===1?"0"+E:E},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),c=parseInt(t.substring(1,3),16),l=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16),m=Math.round(i*(1-n)+c*n),p=Math.round(s*(1-n)+l*n),b=Math.round(a*(1-n)+r*n);return"#"+o(m)+o(p)+o(b)}function An(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Nn(o,i,s),c=ge(a[0]),l=ge(a[1]),r=ge(a[2]);return kn({r:c,g:l,b:r})}function Nn(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function ge(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function kn(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const jn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Un=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,Gn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,Jn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Hn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,$n=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,$e=15;let V=0;async function qn(){try{const e=document.getElementById("MAINcontentPages");Yn();const t=await Ke($e,V);V+=t.length,Fn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function qe(){V=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ye),e.innerHTML=""}function Yn(){let e="MAINcontentPages",t=Jn;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Fn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Hn;for(const[a,c]of Object.entries(L)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,Le(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Ye(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],m=c[r].project_id;console.log(m),Fe(a,m)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await Ke($e,V);V+=r.length,r.length>0&&Le(r)}})}function Le(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,c=e[o].top,l=e[o].bottom,r=e[o].days,m=Bn(r);let p=$n;for(const[b,E]of Object.entries(L)){const d=new RegExp(`\\{${b}\\}`,"g");p=p.replace(d,E)}for(let b=0;b<i.length;b++){const E=i[b].toString(),d=new RegExp(`\\{${E}\\}`,"g");let _="";E==="MOG_image"?_=`${w}/${a}/2`:E==="MOG_text1"?_=c:E==="MOG_text2"?_=l:E==="MOG_checkedDate"?_=m:E==="MOGI_placeholder_itemID"&&(_=s),p=p.replace(d,_)}t.innerHTML+=p}}async function Ye(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await le(i);lt(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Fe(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;k(`/projects/${i}`)}n.id==="MOGaddNewItem"&&Qn()}function Fe(e,t){e.stopPropagation(),J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Qn(){k("/new-project/")}const zn=`<div class="ADMINusersTableInfoRow">
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
</div>`,Vn=`<h1>Admin</h1>
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
</form>`,Kn=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Qe(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,c,l){Wn(a,c,l)}}function Wn(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),J(o,e,n)}const Xn=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Zn=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>`,eo=`<div class="settings_container">
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
</div>`;let ve;async function to(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ee("profile_picture"),n=`${w}/${t}/1`;ve=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",no)}catch(t){console.error("Error initializing account image:",t)}}function no(e){e.stopPropagation(),oo(e)}function oo(e){J([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function io(){await Eo()}let ze="general";const ae=[{name:"general",markup:Xn,button_id:"settings_button_general",function:ao},{name:"user",markup:Zn,button_id:"settings_button_user",function:co},{name:"admin",markup:Kn,button_id:"settings_button_admin",function:ro}];function so(){const e=document.getElementById("MAINcontentPages");let t=eo;for(const[i,s]of Object.entries(L)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Pe(ze);for(var o=ae.length-1;o>=0;o--){const i=ae[o].button_id;document.getElementById(i).addEventListener("click",function(a){const c=a.srcElement.id,r=ae.find(m=>m.button_id===c).name;Pe(r)})}n.addEventListener("click",function(){k("/")})}function Ve(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Pe(e){ze=e;const t=["users_img"],n=document.getElementById("view_container"),o=ae.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(L)){const c=new RegExp(`\\{${s}\\}`,"g");i=i.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${w}/${ve}/4/`),i=i.replace(c,l)}n.innerHTML=i,o.function()}function ao(){}function co(){Qe("user-id","settings_views_user_pfp_img","update_user_pfp")}async function ro(){if((await Ee("admin"))[0].admin!==!0)return;const n=["users_img"],o=document.getElementById("view_container");let i=Vn,s=[];for(const[r,m]of Object.entries(L)){const p=new RegExp(`\\{${r}\\}`,"g");i=i.replace(p,m)}for(let r=0;r<n.length;r++){const m=n[r].toString(),p=new RegExp(`\\{${m}\\}`,"g");let b="";m==="users_img"&&(b=`${w}/${ve}/4/`),i=i.replace(p,b)}o.innerHTML=i;const a=await vo(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const m=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],p=a[r].username,b=a[r].uuid,E=a[r].verified,d=a[r].email,_=a[r].admin,g=r;let h=a[r].storage_used;h=He(h);let y=zn,O=a[r].profile_picture;O=`${w}/${O}/1/`;for(let P=0;P<m.length;P++){const f=m[P].toString(),I=new RegExp(`\\{${f}\\}`,"g");let C="";f==="Username"?C=p:f==="Email"?C=d:f==="UUID"?C=b:f==="Verified"?C=E:f==="Space_Used"?C=h:f==="profile_picture_url"?C=O:f==="checkbox_number"?C=g:f==="Admin"&&(C=_),y=y.replace(I,C)}c.innerHTML+=y}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const m=c.querySelectorAll('input[type="checkbox"]'),p=[],b=document.getElementById("settings_admin_selected_items_visualition");m.forEach(function(E){if(E.checked){const g={id:E.id.replace("admin_users_table_check_box_",""),value:E.value};p.push(g)}}),p.forEach(function(E){const _=a[E.id].uuid;s.push(_)}),b.innerHTML=`Selected Items: ${s.length}`}}async function lo(){const e=await Ee("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;k(c),gi(t)}else a();function i(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=u,r=v,m=yi();m.current_path=c,m.current_queue=l,m.current_index=r;const p=i(m);p!==o&&(_o("last_state",m),o=p,n.set("playback_states",p))}function a(){k(currentPath)}}function uo(){We(),Ve(),qn()}function mo(e){qe(),Ve(),Io(e)}function go(){qe(),We(),so()}const Be={"/":uo,"/new-project/":fo,"/projects/:projectID":mo,"/settings/":go};function po(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${w}/assets/hippo.webp">
    `;function n(){k("/")}}function k(e){const t=Object.keys(Be);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Be[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}po()}async function _o(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${S}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Ee(e){try{return(await(await fetch(`${S}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function K(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${S}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function le(e){try{return(await(await fetch(`${S}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ke(e,t){try{const i=(await(await fetch(`${S}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function fo(){try{const o=`/projects/${(await(await fetch(`${S}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;k(o)}catch(e){console.error("Error:",e)}}async function vo(){try{return(await(await fetch(`${S}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Eo(){try{const t=await(await fetch(`${S}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}function ce(e,t){yo(e,t)}function yo(e,t){const n=document.getElementById("noticationContainer");let o;t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const bo=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,ho=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,To=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,re=[];let _e=!1,Me=!0,T;async function Io(e){let t;Je()==!0?t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_dark"}:t={ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/loading_img_text_light"},Lo(t),sessionStorage.setItem("description","Wonderful notes are loading..."),Oe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{k("/")});const o=await le(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,T=s,i(),wo()}function i(){Co(),sessionStorage.setItem("description",T.Description),Oe(),Po(),Mo(),Oo(),So(),Xe(),Uo(),et(T.ProjectName),Qe(T.ProjectID,"PROJECTviewDisplayImage","update_project_image"),ko()}}function We(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function ye(){const e=T.ProjectID,t=await le(e);if(t=="")console.log(t);else{const n=JSON.parse(t);n.ProjectID=e,T=n,Xe();const o=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=`${w}/${T.PictureURL}/5`;o.src=i}}function Co(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3"),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${w}/${T.PictureURL}/5`;e.innerText=T.ProjectName,t.innerText=T.ProjectContributors,n.src=o}function wo(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;e.addEventListener("blur",function(i){const s=e.innerText;s!==n&&(et(s),K(T.ProjectID,"project_name",s),n=s)}),t.addEventListener("blur",function(i){const s=t.innerText;s!==o&&(K(T.ProjectID,"project_contributors",s),o=s)})}function Lo(e){let t="MAINcontentPages",n=To;for(const[i,s]of Object.entries(L)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=Mn(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${w}/${e.PictureURL}/5`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Oe(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Po(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",N()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function Bo(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Mo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Oo(){const e=document.getElementById("PROJECTviewMOREcloseButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){Se(T)}),t.addEventListener("click",function(n){n.target===t&&Se(T)})}function Se(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),K(e.ProjectID,"description",n),o.style.display="none",Bo(),i.style.zIndex="1"}async function So(){const e=document.getElementById("PROJECTviewDescriptionTopPlayButton"),t=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),n=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton");e.addEventListener("click",function(){lt(T)}),t.addEventListener("click",function(){mi(T)}),n.addEventListener("click",function(){xe(event)}),o.addEventListener("click",function(){xe(event)})}function xe(e){e.stopPropagation(),e.target;const t=T.ProjectID;J([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"hsl(0, 100%, 55%)"}],e)}function xo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";Ro(),F(),k(t)}else F()}async function Ro(e){const t=T.ProjectID;try{const o=await(await fetch(`${S}/projects/delete_project/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(n){console.error("Error:",n)}}function Xe(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer"),Ao();const t=document.getElementById("PROJECTview-projectTable"),n=T.ProjectJSON,o=An("--orange"),i=d=>`#${d.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(_=>parseInt(_,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;const a=[];if(n)for(const d of n)a.push({img:T.PictureURL,songTitle:d.SongName,artistName:T.ProjectContributors,projectName:He(d.FolderSize),songDuration:`${Math.floor(d.Duration/60)}:${(d.Duration%60).toString().padStart(2,"0")}`,songSequence:d.SongSequence,version:d.Version,url:d.URL});for(let d=0;d<a.length;d++){a[d].ProjectID=d;const _=a[d],g=No(_);t.insertAdjacentHTML("beforeend",g);const h=t.lastElementChild;h.addEventListener("dragstart",c),h.addEventListener("dragover",r),h.addEventListener("drop",m)}function c(d){d.dataTransfer.setData("text/plain",d.target.dataset.rowId),d.dataTransfer.getData("text/plain"),s=d.srcElement,On(d.srcElement)}const l=Sn(xn,0);function r(d){d.preventDefault(),d.dataTransfer.dropEffect="move";const _=d.target.closest(".PROJECTview-projectTable-rowContainer");if(_!==s){const g=getComputedStyle(_).backgroundColor,h=i(g);l(_,h,o)}}function m(d){d.preventDefault(),s.style,s.style.backgroundColor="yellow !important";const _=d.dataTransfer.getData("text/plain"),g=document.querySelector(`[data-row-id="${_}"]`),h=d.target.closest(".PROJECTview-projectTable-rowContainer");if(h){const y=h.getAttribute("data-row-id");h.before(g);const O=`${_}|${y}`;setTimeout(async()=>{await K(T.ProjectID,"SongsTableChangeSongSequenceOrder",O),ye()},1)}}t.addEventListener("click",function(d){const _=d.target;if(d.stopPropagation(),_.tagName==="BUTTON"){const g=_.closest(".PROJECTview-projectTable-rowContainer");g&&(g.getAttribute("data-row-id"),Do(d))}});const p=t.querySelectorAll("[contenteditable]"),b=[],E=d=>{const g=d.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),h=d.target.textContent,y=b.find(I=>I.dataRowIDField===g);if((y?y.currentText:"Row ID not found")==h)return;for(var P=b.length-1;P>=0;P--)b[P].dataRowIDField===g&&(b[P].currentText=h);const f=`${g}-${h}`;K(T.ProjectID,"project_song_title",f)};p.forEach(d=>{d.addEventListener("blur",E),b.push({dataRowIDField:d.parentElement.parentElement.getAttribute("data-row-id"),currentText:d.innerText})})}function Do(e){e.stopPropagation(),e.target,J([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Ao(){let e="PROJECTview_projectAreaContainer",t=bo;for(const[n,o]of Object.entries(L)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function No(e){let t=ho;for(const[o,i]of Object.entries(L)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";i==="PROJECTviewRow_img"?a=`${w}/${e.img}/3`:i==="PROJECTviewRow_songTitle"?a=e.songTitle:i==="PROJECTviewRow_artistName"?a=e.artistName:i==="PROJECTviewRow_projectName"?a=e.projectName:i==="PROJECTviewRow_songDuration"?a=e.songDuration:i==="PROJECTviewRow_projectID"?a=`${e.songSequence}-${e.version}`:i==="PROJECTviewRow_contentEditable"&&Me===!0?a=!0:i==="PROJECTviewRow_contentEditable"&&Me===!1&&(a=!1),t=t.replace(s,a)}return t}function ko(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i,T)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files,console.log(t)}),s.click()):(console.log("the submit files button was clicked ",t),n(t,T))});function n(o,i){for(const s of o);jo(o,i)}}async function Ze(e,t){const n=new FormData,o=new XMLHttpRequest;_e=!0,n.append("file",e),n.append("project_id",t.project_id),o.upload.onprogress=function(i){if(i.lengthComputable){const s=i.loaded/i.total*100;console.log(s),s===100&&console.log("upload completed")}},o.onload=async function(){if(console.log("Upload fully complete"),o.responseText=="StorageLimit Reached"&&ce("Storage limit reached","error"),_e=!1,re.length>0){const s=re.shift();await Ze(s.file,s.details)}ye()},o.onerror=function(){console.log("Upload failed")},o.open("POST",`${S}/files/upload_audio/${T.ProjectID}`,!0),o.send(n)}async function jo(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={file:n,details:t};if(re.push(o),!_e){const i=re.shift();await Ze(i.file,i.details)}}}function et(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Uo(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&N()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!N()||!c.isIntersecting&&!N()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&N()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}const Go=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Jo(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&ce("Storage limit reached","error"),n!=="update_user_pfp"?Fo():(Qo(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${S}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Ho(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Jo(o,t,n)}const tt='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let q,U=!1;function J(e,t,n){n===void 0?Yo(e,t):n!==void 0&&n==="update_project_image"?Re(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Re(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?qo():n!==void 0&&n==="notice"?$o(e):console.log("invalid menu display inputs")}function $o(e,t){let n=20,o=80;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=tt,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=o+"px";if(a.addEventListener("click",be),c.style.left=l,c.style.top=r,c.style.padding="5px",q&&pointerType===""){const g=q.getBoundingClientRect();n=g.left+window.scrollX,o=g.top+window.scrollY;let h=n+"px",y=o+"px";c.style.left=h,c.style.top=y}for(let g=0;g<e.length;g++)ot(e[g]);c.children[0];const p=c.offsetWidth,b=c.offsetHeight,E=nt("MENUmodalBody"),d=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",_),E.xOverflow==!0&&(l=n-p+"px",c.style.left=l),E.yOverflow==!0&&(r=o-b+"px",c.style.top=r);for(let g=0;g<d.length;g++){const h=d[g];h.setAttribute("data-menu-item-id",g),h.addEventListener("click",function(y){y.stopPropagation();const P=y.target.getAttribute("data-menu-item-id"),f=e[P].function,I=e[P].optionalParams;if(f=="TEST")console.log("the button worked");else if(f!="None"){it[f](I);return}else return})}function _(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",_),F())}}function qo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=Gn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;N()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[M,D]of Object.entries(L)){const A=new RegExp(`\\{${M}\\}`,"g");i=i.replace(A,D)}o.style.display="block",o.innerHTML=i;const r=document.getElementById("LCD_mobile_body_song_title"),m=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),b=s.duration,d=s.currentTime/b*100,_=document.getElementById("LCDMB_seek_input"),g=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const h=document.getElementById("LCDMB_back"),y=document.getElementById("LCDMB_play"),O=document.getElementById("LCDMB_play_icon"),P=document.getElementById("LCDMB_next"),f=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{I(),U===!0&&j()}),I(),C(),g.style.width=`${d}%`,s.addEventListener("timeupdate",()=>{const M=s.duration,A=s.currentTime/M*100;g.style.width=`${A}%`}),_.addEventListener("input",function(){const M=s.duration,D=_.value;s.currentTime=M*(D/100)}),h.addEventListener("click",()=>{ut(),I(),U===!0&&j()}),y.addEventListener("click",()=>{de(),I(),C()}),P.addEventListener("click",()=>{dt(),I(),U===!0&&j()}),f.addEventListener("click",()=>{U===!1?(Te(),U=!0):(Ie(),U=!1)}),U===!0?Te():Ie(),o.addEventListener("touchstart",Z,!1),o.addEventListener("touchmove",ee,!1),o.addEventListener("touchend",te,!1);function I(){p.src=at,r.innerText=ct,m.innerText=rt}function C(){s.paused?O.src=L.icons_playButtonV2:O.src=L.icons_derpy}function j(){const M=document.getElementById("LCD_mobile_queue_content_container");M.innerHTML="";for(let D=v+1;D<u.length;D++){const A=u[D],ne=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],z=A.img,ht=A.song_name,Tt=A.project_contributors;let ue=Un;for(let me=0;me<ne.length;me++){const oe=ne[me].toString(),It=new RegExp(`\\{${oe}\\}`,"g");let ie="";oe==="queue_item_img"?ie=`${w}/${z}/3`:oe==="queue_item_song_name"?ie=ht:oe==="queue_item_song_artist"&&(ie=Tt),ue=ue.replace(It,ie)}M.innerHTML+=ue}}function Te(){function M(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(z=>{z.classList.add("queue_visible")})})}M(a),o.removeEventListener("touchstart",Z),o.removeEventListener("touchmove",ee),o.removeEventListener("touchend",te),j()}function Ie(){function M(D){D.forEach(A=>{document.querySelectorAll("."+A).forEach(z=>{z.classList.remove("queue_visible")})})}M(a),o.addEventListener("touchstart",Z,!1),o.addEventListener("touchmove",ee,!1),o.addEventListener("touchend",te,!1)}function Z(M){U===!1&&(c=M.touches[0].clientY)}function ee(M){M.preventDefault()}function te(M){l=M.changedTouches[0].clientY,l-c>70&&(F(),o.removeEventListener("touchstart",Z),o.removeEventListener("touchmove",ee),o.removeEventListener("touchend",te))}}function Yo(e,t){q=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");N()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=tt,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=o+"px",m=i+"px";if(c.addEventListener("click",be),l.style.left=r,l.style.top=m,q&&n===""){const y=q.getBoundingClientRect();o=y.left+window.scrollX,i=y.top+window.scrollY;let O=o+"px",P=i+"px";l.style.left=O,l.style.top=P}for(let y=0;y<e.length;y++)ot(e[y]);const b=l.children[0],E=l.offsetWidth,d=l.offsetHeight,_=nt("MENUmodalBody"),g=l.getElementsByClassName("MENUmodalItemContainer");n===""?b.focus():n==="mouse"&&(b.focus(),b.blur()),document.addEventListener("keydown",h),_.xOverflow==!0&&(r=o-E+"px",l.style.left=r),_.yOverflow==!0&&(m=i-d+"px",l.style.top=m);for(let y=0;y<g.length;y++){const O=g[y];O.setAttribute("data-menu-item-id",y),O.addEventListener("click",function(P){P.stopPropagation();const I=P.target.getAttribute("data-menu-item-id"),C=e[I].function,j=e[I].optionalParams;if(C=="TEST")console.log("the button worked");else if(C!="None"){it[C](j);return}else return})}function h(y){(y.key==="Escape"||y.keyCode===27)&&(document.removeEventListener("keydown",h),F())}}function Re(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),c=document.getElementById("MENUmodalEnvironment");let l=o+"px",r=i+"px";N()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",c.innerHTML=jn,c.style.display="block",c.addEventListener("click",be);const m=document.getElementById("MENUmodalBody"),p=document.getElementById("MENUmodalBody_image_select_file_drop_area"),b=document.getElementById("MENUmodalBody_image_select_file_select_button"),E=document.getElementById("MENUmodalBody_image_select_preview_area"),d=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");m.style.left=l,m.style.top=r;let g,h;function y(f,I){return function(){const C=this,j=arguments;clearTimeout(h),h=setTimeout(()=>{f.apply(C,j)},I)}}function O(f,I,C){y(Ho,100)(f,I,C)}function P(f){if(g){const I=URL.createObjectURL(g),C=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");E.src=I,d.style.visibility="visible",_.style.outline="3px solid var(--primary)",d.addEventListener("click",()=>{O(g,f.project_id,f.MenuType),C.style.visibility="visible"})}else console.log("No file selected.")}p.addEventListener("dragover",f=>{f.preventDefault()}),p.addEventListener("drop",f=>{f.preventDefault(),g=f.dataTransfer.files[0],P(e)}),b.addEventListener("click",()=>{const f=document.createElement("input");f.type="file",f.accept="image/*",f.addEventListener("change",I=>{g=I.target.files[0],P(e)}),f.click()})}function Fo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F(),ye()}function Qo(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F()}function nt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=i+s,r=c+a;let m=!1,p=!1;return l>n&&(m=!0),r>o&&(p=!0),{xOverflow:m,yOverflow:p}}function ot(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",N()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=Go.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(L)){const m=new RegExp(`\\{${l}\\}`,"g");a=a.replace(m,r)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function be(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function F(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),q&&q.focus()}const it={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){xo()},PLAYBACK_add_songs_to_queue(e){pi(e)},SIGN_OUT_USER(e){io()},OPEN_SETTINGS_PAGE(e){k("/settings/")}};let H="hidden";function zo(){wn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");fe(H),e.addEventListener("click",Vo),t.addEventListener("click",Ko),G()}function Vo(){if(H==="hidden"){H="visible",fe(H);return}if(H==="visible"){H="hidden",fe(H);return}}function fe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Je&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function G(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<u.length;t++){u[t].id=t;const n=u[t],o=oi(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",ni),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",ei),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&ti(c)}),i.addEventListener("dragstart",Wo),i.addEventListener("dragover",Xo),i.addEventListener("drop",Zo),e.appendChild(i)}}function Ko(){const e=v+1;e>=0&&e<u.length?u.splice(e):u.length=0,G()}function Wo(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Xo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Zo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),R.splice(s,1),R.splice(a,0,o),G())}function ei(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),R.splice(o,1)),G()}function ti(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];J(o,e)}function ni(e){}function oi(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Ln;for(let l=0;l<t.length;l++){const r=t[l].toString(),m=new RegExp(`\\{${r}\\}`,"g");let p="";r==="QUEUE_item_image"?p=`${w}/${n}/3`:r==="QUEUE_item_title"?p=o:r==="QUEUE_item_artist"?p=i:r==="icons_menuOptionsButton"?p=Ge:r==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(m,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const ii=`<div class="LCDbody">
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
</div>`;function si(){ci(),st(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){ri(t)}),li(),N()&&document.getElementById("LCDbody").addEventListener("click",ai)}function ai(e){e.stopPropagation(),J({param:"cheese"},e,"lcd_mobile_body")}function ci(){let e="LCDbody",t=ii;for(const[o,i]of Object.entries(L)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function st(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let l,r,m;e=n.clientWidth,r=s(),m=e/o,m>r?l=r+10:l=m,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const m=r.offsetWidth;return document.body.removeChild(r),m}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function ri(e){e.stopPropagation(),e.target,J([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function li(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",di)})}function di(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),vi(n)}function ui(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],R=[],v=0,at="",ct="",rt="";document.getElementById("audio");document.getElementById("PLAYERsource");let B="off",$="off",W="paused";function lt(e){u=[],v=0,u=he(e),u.length>0&&(W="playing",Y())}function mi(e){u=[],v=0,u=he(e),u.length>0&&($="off",mt(),W="playing",Y())}function he(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:i,song_name:c,url:r,duration:l,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function gi(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,v=n,Ci(o),u!==void 0&&u.length>0&&bi(i)}async function pi(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await le(t),i=he(o);if(n==="later")u=u.concat(i),R=R.concat(i);else if(n==="next"){let s=u.slice(0,v+1),a=u.slice(v+1);u=s,u=u.concat(i),u=u.concat(a),s=R.slice(0,v+1),a=R.slice(v+1),R=s,R=R.concat(i),R=R.concat(a)}G()}function de(){_i()}function _i(){const e=document.getElementById("audio");e.paused?(X("playing"),W="playing",e.play().then(t=>_t()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(W="paused",X("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){de()});navigator.mediaSession.setActionHandler("pause",function(){de()});function dt(){vt()}function ut(){Et()}function fi(){document.getElementById("audio").addEventListener("ended",Ti)}function vi(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ei(){Ii()}function yi(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:B,PLAYBACK_shuffle_state:$,progress:t}}function mt(){if($==="off"){$="on",De($);const t=v+1;R=[...u],u.slice(0,v);const n=u.slice(t);Pn(n);const o=n.length;u.splice(v,o,...n),G()}else{$="off",De($);const t=[...R],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);G()}}function Y(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${w}/${u[v].url}/3`,e.load(),W==="playing"?(e.play().then(n=>_t()).catch(n=>console.log(n)),X("playing")):X("paused"),pt(),gt()}function bi(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${w}/${u[v].url}/3`,t.load(),t.currentTime=e,X("paused"),pt(),gt()}function gt(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${Ce(s)}"`,l=`"${Ce(Math.floor(i))}"`,r=i/o*100,m=`${r}%`;ui(l,a),t.style.setProperty("--LCD-seekbar-width",m),t.style.setProperty("--LCD-seekbar-indicator-left",m),n.value=r,ft()})}function pt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[v].song_name,t.innerHTML=u[v].song_name,n.innerHTML=u[v].project_contributors,st(),o.src=`${w}/${u[v].img}/3`,i.src=`${w}/${u[v].img}/3`,at=`${w}/${u[v].img}/5`,ct=u[v].song_name,rt=u[v].project_contributors,G()}function _t(){let e=u[v];const t=[{src:`${w}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${w}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${w}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${w}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${w}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${w}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),ft()}function ft(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function hi(){console.log("PLAYBACK_stop_playback, clear top")}function Ti(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>v+1&&(B=="off"||B=="on")?(v+=1,Y()):B=="song"?Y():t==v+1&&B=="on"?(v=0,Y()):hi()}function vt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>v+1&&(e.pause(),v+=1,Y())}navigator.mediaSession.setActionHandler("nexttrack",function(){vt()});function Et(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,v>0&&(e.pause(),v-=1,Y())}navigator.mediaSession.setActionHandler("previoustrack",function(){Et()});function Ii(){B=="off"?(B="on",Q(B)):B=="on"?(B="song",Q(B)):(B="off",Q(B))}function Ci(e){e=="off"?(B="off",Q(B)):e=="on"?(B="on",Q(B)):(e="song",B="on",Q(B))}function wi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Li),t.addEventListener("click",Pi),n.addEventListener("click",Bi),o.addEventListener("click",Mi),i.addEventListener("click",Oi)}function Li(){mt()}function Pi(){ut()}function Bi(){de()}function Mi(){dt()}function Oi(){Ei()}function De(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function Q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=L.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=L.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=L.icons_loop_song;return}}function X(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=L.icons_pause;return}if(e=="paused"){t.src=L.icons_play;return}}function Si(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){yt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",xi)})}function xi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;yt(n)}function yt(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ri(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const Di=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
    <div>
        <p>
            This Service uses a cookie.
        </p>
    </div>
</div>`,Ai=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ni(){setTimeout(()=>{let e="MAINcontentPages",t=Ai;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ki)},1)}async function ki(e){console.log("the signup event was caught"),e.preventDefault(),ji();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${S}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${S}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();pe(),Ui(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";pe(),Ae(),alert(s)}}catch{pe(),Ae(),alert("There was an error, try again")}}function ji(){const e=document.getElementById("spinner");e.style.display="block"}function pe(){const e=document.getElementById("spinner");e.style.display="none"}function Ui(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Ae(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let se=!1,Ne=!1,ke=!1,je=!1;async function Gi(){await $i()?bt():Ne||(Ji(),Ne=!0)}function Ji(){qi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${S}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Ue(),Ni()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),se)return!1;se=!0;const a=o.value,c=i.value;try{await Hi(a,c)?(je=!0,ce("Login Successful","success"),bt(),Ue()):(je=!1,ce("Error Logging In","error")),se=!1}catch(l){console.error("Error:",l),se=!1}return!1})}async function Hi(e,t){try{const o=await(await fetch(`${S}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(o.Authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.Authenticated}catch(n){return console.error(n),!1}}async function $i(){const e=await fetch(`${S}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function qi(){let e="MAINcontentPages",t=Di;document.getElementById(e).innerHTML+=t}function Ue(){if(ke===!0)return;ke=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}const Yi=`<!-- audio tag -->
<audio id="audio" preload>
    <source id="PLAYERsource" src=""></audio>
<!-- noise *generator* 
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
-->
<!-- layout htmls -->
<div class="topHalf-container">
    <div class="topHalf">
        <div class="topHalf-left" id="topleftContentArea"></div>
        <div class="topHalf-right" id="toprightContentArea">
        </div>
    </div>
</div>
<div class="notification-container" id="noticationContainer">
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
<!-- svg masks 
<div style="display: none;">
    <img src="{icons_shuffleButton}" alt="shuffle icon" id="SVG_mask_shuffle" />
</div>
-->`;const S="/apis",w="/media";async function bt(){fi(),In(),Cn(),si(),wi(),Ri(),Si(),to(),zo(),lo()}if(!window.hasCodeRun){let e=Yi;for(const[t,n]of Object.entries(L)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}document.getElementById("app").innerHTML=e,Gi(),window.hasCodeRun=!0}
