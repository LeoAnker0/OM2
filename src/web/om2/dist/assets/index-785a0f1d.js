(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const xe="/assets/menu_options_button-a1d7bbe3.svg",Et=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,yt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,bt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Tt="/assets/volume_null-e39cf06f.svg",ht="/assets/recently_added-a0a983c6.svg",It="/assets/volume_3-c8ab0a75.svg",wt="/assets/orange_music_text_logo_black-12e7386c.svg",Ct="/assets/volume_2-cfdac9da.svg",Lt="/assets/browse_2-85030bba.svg",Pt="/assets/volume_1-27e93416.svg",Bt="/assets/orange_music_logo_white-2a680ea2.svg",Ot="/assets/search_icon-4f5e4381.svg",St="/assets/orange_music_text_logo_black-91f9e706.png",Mt="/assets/up_next_queue_button-14fedba2.svg",Rt="/assets/orange_music_logo_yellow-a109ff64.svg",xt="/assets/playlist-c6e9024f.svg",Dt="/assets/loop_button-aef56865.svg",Nt="/assets/help_icon-867fec9d.svg",At="/assets/play_button-b1e2d3a4.svg",jt="/assets/browse-14744f27.svg",kt="/assets/orange_music_text_logo_white-7f0ba909.svg",Ut="/assets/back_button-8128cade.svg",Gt="/assets/Albums-2e81dc74.svg",Jt="/assets/songs-016b7188.svg",$t="/assets/orange_music_logo_black-4d7e4591.svg",qt="/assets/your_uploaded_songs-06535705.svg",Ht="/assets/artist-ab677d43.svg",Yt="/assets/shuffle_button-c2f06bc4.svg",Ft="/assets/orange_music_text_logo_white-4907051e.png",Qt="/assets/listen_now-c7438154.svg",zt="/assets/derpy-21c20ae5.svg",Kt="/assets/next_button-9a850710.svg",Vt="/assets/recently_added-7ff28139.svg",Wt="/assets/play_button-5eeedbe6.svg",Xt="/assets/browse-e8be8609.svg",Zt="/assets/albums-681507b8.svg",en="/assets/listen_now.2-bfa293ac.svg",tn="/assets/your_uploads-02e5c93c.svg",nn="/assets/play_button.2-fc90fac7.svg",on="/assets/listen_now-fb02ffce.svg",sn="/assets/browse.2-15b501dd.svg",an="/assets/place_holder_image-d4006a96.svg",cn="/assets/icons_MOGitems_add-19e679f7.svg",rn="/assets/back-9279721d.svg",ln="/assets/forwards-605bd405.svg",dn="/assets/icons_close-57e87944.svg",un="/assets/icons_pause-8012f8cc.svg",mn="/assets/icons_loop-32d1576c.svg",pn="/assets/icons_loop_song-87f53dc7.svg",gn="/assets/icons_play-a5074c5b.svg",_n="/assets/icons_settings-793063fb.svg",fn="/assets/love-07ac5006.svg",I={icons_volumeNull:Tt,icons_recentlyAdded:ht,icons_volume3:It,icons_orangeMusicTextLogoBlack:wt,icons_volume2:Ct,icons_browse2:Lt,icons_volume1:Pt,icons_orangeMusicLogoWhite:Bt,icons_searchIcon:Ot,icons_orangeMusicTextLogoBlackPng:St,icons_queueButton:Mt,icons_orangeMusicLogoYellow:Rt,icons_playlist:xt,icons_loopButton:Dt,icons_helpIcon:Nt,icons_playButton:At,icons_browse:jt,icons_menuOptionsButton:xe,icons_orangeMusicTextLogoWhite:kt,icons_backButton:Ut,icons_Albums:Gt,icons_songs:Jt,icons_orangeMusicLogoBlack:$t,icons_yourUploadedSongs:qt,icons_artist:Ht,icons_shuffleButton:Yt,icons_orangeMusicTextLogoWhitePng:Ft,icons_listenNow:Qt,icons_derpy:zt,icons_nextButton:Kt,icons_recentlyAddedV2:Vt,icons_playButtonV2:Wt,icons_browseV2:Xt,icons_albumsV2:Zt,icons_listenNow2V2:en,icons_yourUploads:tn,icons_playButton2:nn,icons_listenNowV2:on,icons_browse2V2:sn,v3_placeholder:an,icons_MOGitems_add:cn,icons_back:rn,icons_forwards:ln,icons_close:dn,icons_pause:un,icons_loop:mn,icons_loop_song:pn,icons_play:gn,icons_settings:_n,current_year:new Date().getFullYear(),icons_love:fn};function vn(){let e="topleftContentArea",t=Et;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function En(){let e="toprightContentArea",t=yt;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function yn(){let e="MAINcontentContainer",t=bt;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const bn=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function D(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Tn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function hn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function ye(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function In(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function wn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const i=Math.floor(n/60);return`${i} minute${i>1?"s":""} ago`}else if(n<86400){const i=Math.floor(n/3600);return`${i} hour${i>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const i=Math.floor(n/86400);return`${i} day${i>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function pe(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Cn(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}const Ln=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Pn=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,Bn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,On=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Sn=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Mn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,De=15;let z=0;async function Rn(){try{const e=document.getElementById("MAINcontentPages");xn();const t=await Je(De,z);z+=t.length,Dn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Ne(){z=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ae),e.innerHTML=""}function xn(){let e="MAINcontentPages",t=On;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function Dn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Sn;for(const[a,c]of Object.entries(I)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,c)}t.innerHTML+=n,be(e);const i=document.getElementById("MOGcontainer");i.addEventListener("click",function(a){Ae(a,e)});let o;i.addEventListener("touchstart",function(a){a.timeStamp,o=setTimeout(function(){s(a,e)},500)}),i.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(o)});function s(a,c){navigator.vibrate(1e3);const r=a.target.id.split("-")[1],u=c[r].project_id;console.log(u),je(a,u)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,l=t.clientHeight;if(a>=c-l){const r=await Je(De,z);z+=r.length,r.length>0&&be(r)}})}function be(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var i=0;i<=n-1;i++){const o=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=i,a=e[i].img,c=e[i].top,l=e[i].bottom,r=e[i].days,u=In(r);let m=Mn;for(const[d,g]of Object.entries(I)){const y=new RegExp(`\\{${d}\\}`,"g");m=m.replace(y,g)}for(let d=0;d<o.length;d++){const g=o[d].toString(),y=new RegExp(`\\{${g}\\}`,"g");let f="";g==="MOG_image"?f=`${h}/${a}/4/`:g==="MOG_text1"?f=c:g==="MOG_text2"?f=l:g==="MOG_checkedDate"?f=u:g==="MOGI_placeholder_itemID"&&(f=s),m=m.replace(y,f)}t.innerHTML+=m}}async function Ae(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await F(o);ot(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1],o=t[i].project_id;je(e,o)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;N(`/projects/${o}`)}n.id==="MOGaddNewItem"&&Nn()}function je(e,t){e.stopPropagation(),k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function Nn(){N("/new-project/")}const An=`<div class="ADMINusersTableInfoRow">
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
</div>`,jn=`<h1>Admin</h1>
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
</form>`,kn=`<h1>Admin</h1>
<p>You are not an admin user</p>`,Un=`<h1>General</h1>
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
<p>Thank you for using <img src="{icons_love}" height="20"></p>`,Gn=`<h1>User</h1>
<img class="user_img" src="{users_img}">
<p>There are currently no user settings, however this is coming.</p>`,Jn=`<div class="settings_container">
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
</div>`;let ke;async function $n(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await ge("profile_picture"),n=`${h}/${t}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,i.addEventListener("click",qn)}catch(t){console.error("Error initializing account image:",t)}}function qn(e){e.stopPropagation(),Hn(e)}function Hn(e){k([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Yn(){await io()}let Ue="admin";const ie=[{name:"general",markup:Un,button_id:"settings_button_general",function:Qn},{name:"user",markup:Gn,button_id:"settings_button_user",function:zn},{name:"admin",markup:kn,button_id:"settings_button_admin",function:Kn}];function Fn(){const e=document.getElementById("MAINcontentPages");let t=Jn;for(const[o,s]of Object.entries(I)){const a=new RegExp(`\\{${o}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Te(Ue);for(var i=ie.length-1;i>=0;i--){const o=ie[i].button_id;document.getElementById(o).addEventListener("click",function(a){const c=a.srcElement.id,r=ie.find(u=>u.button_id===c).name;Te(r)})}n.addEventListener("click",function(){N("/")})}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Te(e){Ue=e;const t=["users_img"],n=document.getElementById("view_container"),i=ie.find(s=>s.name===e);let o=i.markup;for(const[s,a]of Object.entries(I)){const c=new RegExp(`\\{${s}\\}`,"g");o=o.replace(c,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),c=new RegExp(`\\{${a}\\}`,"g");let l="";a==="users_img"&&(l=`${h}/${ke}/4/`),o=o.replace(c,l)}n.innerHTML=o,i.function()}function Qn(){console.log("general")}function zn(){console.log("user")}async function Kn(){if((await ge("admin"))[0].admin!==!0)return;const n=["users_img"],i=document.getElementById("view_container");let o=jn,s=[];for(const[r,u]of Object.entries(I)){const m=new RegExp(`\\{${r}\\}`,"g");o=o.replace(m,u)}for(let r=0;r<n.length;r++){const u=n[r].toString(),m=new RegExp(`\\{${u}\\}`,"g");let d="";u==="users_img"&&(d=`${h}/${ke}/4/`),o=o.replace(m,d)}i.innerHTML=o;const a=await oo(),c=document.getElementById("usersTableInforRowsContainer");c.innerHTML="";for(let r=0;r<a.length;r++){const u=["Username","Email","UUID","Verified","Space_Used","profile_picture_url","checkbox_number","Admin"],m=a[r].username,d=a[r].uuid,g=a[r].verified,y=a[r].email,f=a[r].admin,v=r;let P=a[r].storage_used;P=pe(P);let b=An,S=a[r].profile_picture;S=`${h}/${S}/1/`;for(let E=0;E<u.length;E++){const T=u[E].toString(),B=new RegExp(`\\{${T}\\}`,"g");let C="";T==="Username"?C=m:T==="Email"?C=y:T==="UUID"?C=d:T==="Verified"?C=g:T==="Space_Used"?C=P:T==="profile_picture_url"?C=S:T==="checkbox_number"?C=v:T==="Admin"&&(C=f),b=b.replace(B,C)}c.innerHTML+=b}c.addEventListener("change",function(r){r.target&&r.target.type==="checkbox"&&l()});function l(){s=[];const u=c.querySelectorAll('input[type="checkbox"]'),m=[],d=document.getElementById("settings_admin_selected_items_visualition");u.forEach(function(g){if(g.checked){const v={id:g.id.replace("admin_users_table_check_box_",""),value:g.value};m.push(v)}}),m.forEach(function(g){const f=a[g.id].uuid;s.push(f)}),d.innerHTML=`Selected Items: ${s.length}`}}async function Vn(){const e=await ge("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let i="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;N(c),ti(t)}else a();function o(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,l=p,r=_,u=ci();u.current_path=c,u.current_queue=l,u.current_index=r;const m=o(u);m!==i&&(to("last_state",u),i=m,n.set("playback_states",m))}function a(){N(currentPath)}}function Wn(){qe(),Ge(),Rn()}function Xn(e){Ne(),Ge(),ro(e)}function Zn(){Ne(),qe(),Fn()}const he={"/":Wn,"/new-project/":no,"/projects/:projectID":Xn,"/settings/":Zn};function eo(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${h}/assets/hippo.webp">
    `;function n(){N("/")}}function N(e){const t=Object.keys(he);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=he[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}eo()}async function to(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${O}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function ge(e){try{return(await(await fetch(`${O}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function se(e,t,n){try{const i={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${O}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error, yes")}catch(i){console.error("Error:",i)}}async function F(e){try{return(await(await fetch(`${O}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Je(e,t){try{const o=(await(await fetch(`${O}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):(console.log("Projects is not an array:",o),[])}catch(n){return console.error("Error:",n),[]}}async function no(){try{const i=`/projects/${(await(await fetch(`${O}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;N(i)}catch(e){console.error("Error:",e)}}async function oo(){try{return(await(await fetch(`${O}/admin/get_users_table/`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function io(){try{const t=await(await fetch(`${O}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();console.log(t)}catch(e){console.error("Error:",e)}}const so=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,ao=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="true">
    <div class="PROJECTview-projectTable-rowItem-1" style="user-select: none;">
        <img src="{PROJECTviewRow_img}" style="user-select: none; pointer-events: none;">
        <div contenteditable="{PROJECTviewRow_contentEditable}" data-is-title="true" draggable="false">{PROJECTviewRow_songTitle}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-2">
        <div>{PROJECTviewRow_artistName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-3" style="user-select: none;">
        <div>{PROJECTviewRow_projectName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-4">
        <div>{PROJECTviewRow_songDuration}</div>
        <button>
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,co=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,ae=[];let ue=!1,Ie=!0,$e;async function ro(e){po({ProjectName:"Loading...",ProjectContributors:"This might take a while",TimeCreated:0,PictureURL:"static/default_pfp"}),sessionStorage.setItem("description","Wonderful notes are loading..."),we(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{N("/")}),setTimeout(async()=>{const o=await F(e);if(o=="")console.log(o);else{const s=JSON.parse(o);s.ProjectID=e,$e=s,i(s),mo(s)}},1);function i(o){const s=o.Description;uo(o),sessionStorage.setItem("description",s),we(),go(),fo(),vo(o),Eo(o),To(o),Co(),ze(o.ProjectName),Lo(o.ProjectID),Io(o)}}function qe(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function lo(){He();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=await F(t),s=JSON.parse(i).PictureURL,a=`${h}/${s}/5/`;n.src=a}function uo(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3"),i=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=`${h}/${e.PictureURL}/5/`;t.innerText=e.ProjectName,n.innerText=e.ProjectContributors,i.src=o}function mo(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(i){const o=t.innerText;ze(o),se(e.ProjectID,"project_name",o)}),n.addEventListener("blur",function(i){const o=n.innerText;se(e.ProjectID,"project_contributors",o)})}function po(e){let t="MAINcontentPages",n=co;for(const[o,s]of Object.entries(I)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.ProjectName:s==="PROJECTviewMOREartist"?c=e.ProjectContributors:s==="PROJECTviewMOREyear"?c=wn(e.TimeCreated):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${h}/${e.PictureURL}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function we(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function go(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");function o(){n.style.display="grid",D()&&(i.style.zIndex="40")}e.addEventListener("click",function(){o()}),t.addEventListener("dblclick",function(){o()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),o()),s=c})}function _o(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function fo(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function vo(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){Ce(e)}),n.addEventListener("click",function(i){i.target===n&&Ce(e)})}function Ce(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");sessionStorage.setItem("description",n),se(e.ProjectID,"description",n),i.style.display="none",_o(),o.style.zIndex="1"}async function Eo(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=await F(e.ProjectID);t.addEventListener("click",function(){ot(s)}),n.addEventListener("click",function(){ei(s)}),i.addEventListener("click",function(){Le(event,s)}),o.addEventListener("click",function(){Le(event,s)})}function Le(e,t){e.stopPropagation(),t=JSON.parse(t),e.target;const i=window.location.pathname.split("/"),o=i[i.length-1];k([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function yo(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";bo(e),Y(),N(t)}else Y()}async function bo(e){e=e.PROJECT_ID;try{const n=await(await fetch(`${O}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error("Error:",t)}}function To(e){document.getElementById("PROJECTview_projectAreaContainer"),ho();const t=document.getElementById("PROJECTview-projectTable"),n=e.ProjectJSON;let i;if(n!==null){let l=function(d){d.dataTransfer.setData("text/plain",d.target.dataset.rowId),d.dataTransfer.getData("text/plain"),i=d.srcElement,i.style.backgroundColor="hsl(0, 0%, 65%)",Cn(d.srcElement)},r=function(d){d.preventDefault()},u=function(d){d.preventDefault(),i.style,i.style.backgroundColor="";const g=d.dataTransfer.getData("text/plain"),y=document.querySelector(`[data-row-id="${g}"]`),f=d.target.closest(".PROJECTview-projectTable-rowContainer");f&&(f.getAttribute("data-row-id"),f.before(y))};var o=l,s=r,a=u;const c=[];if(n)for(const d of n)c.push({img:e.PictureURL,songTitle:d.SongName,artistName:e.ProjectContributors,projectName:pe(d.FolderSize),songDuration:`${Math.floor(d.Duration/60)}:${(d.Duration%60).toString().padStart(2,"0")}`,songSequence:d.SongSequence,version:d.Version,url:d.URL});for(let d=0;d<c.length;d++){c[d].ProjectID=d;const g=c[d];Fe(g)}document.querySelectorAll(".PROJECTview-projectTable-rowContainer").forEach(d=>{d.draggable=!0,d.addEventListener("dragstart",l),d.addEventListener("dragover",r),d.addEventListener("drop",u)}),t.addEventListener("click",function(d){const g=d.target;if(d.stopPropagation(),g.tagName==="BUTTON"){const y=g.closest(".PROJECTview-projectTable-rowContainer");y&&(y.getAttribute("data-row-id"),Ye(d))}});{const d=t.querySelectorAll("[contenteditable]"),g=y=>{const P=`${y.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id")}-${y.target.textContent}`;se($e.ProjectID,"project_song_title",P)};d.forEach(y=>{y.addEventListener("blur",g)})}}}async function He(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await F(n),o=JSON.parse(i);o.ProjectID=n;const s=o,a=s.ProjectJSON,c=JSON.parse(a).songs_json,l=[];if(Array.isArray(c))for(const m of c)l.push({img:s.PictureURL,songTitle:m.song_name,artistName:s.ProjectContributors,projectName:pe(m.SongSize),songDuration:`${Math.floor(m.duration/60)}:${(m.duration%60).toString().padStart(2,"0")}`,song_sequence:m.song_sequence,url:m.url});const r=document.getElementById("PROJECTview-projectTable"),u=r.children;for(let m=u.length-1;m>0;m--)r.removeChild(u[m]);for(let m=0;m<l.length;m++){l[m].projectID=m;const d=l[m];Fe(d)}e.addEventListener("click",function(m){const d=m.target;if(m.stopPropagation(),d.tagName==="BUTTON"){const g=d.closest(".PROJECTview-projectTable-rowContainer");if(g){const y=g.getAttribute("data-row-id");Ye(m),console.log(`Button in row ${y} clicked.`)}}})}function Ye(e){e.stopPropagation(),e.target,k([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function ho(){let e="PROJECTview_projectAreaContainer",t=so;for(const[n,i]of Object.entries(I)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function Fe(e){let t="PROJECTview-projectTable",n=ao;for(const[o,s]of Object.entries(I)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID","PROJECTviewRow_contentEditable"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${h}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"?c=`${e.songSequence}-${e.version}`:s==="PROJECTviewRow_contentEditable"&&Ie===!0?c=!0:s==="PROJECTviewRow_contentEditable"&&Ie===!1&&(c=!1),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Io(e){const t=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const s=o.dataTransfer.files;i(s,e)});let n=[];t.addEventListener("click",o=>{const s=o.target.id,a=document.createElement("input");s!=="PROJECTview_dropArea_submit_button"?(a.type="file",a.accept="audio/*",a.multiple=!0,a.addEventListener("change",()=>{n=a.files,console.log(n)}),a.click()):(console.log("the submit files button was clicked ",n),i(n,e))});function i(o,s){for(const a of o);wo(o,s)}}async function Qe(e,t,n,i){const o=new FormData,s=localStorage.getItem("JWT"),a=new XMLHttpRequest,c=document.createElement("div"),l=document.createElement("div");ue=!0,o.append("file",e),o.append("project_id",i.project_id),o.append("jwt",s),c.classList.add("progress-bar"),l.classList.add("progress-fill"),c.appendChild(l),t.appendChild(c),a.upload.onprogress=function(r){if(r.lengthComputable){const u=r.loaded/r.total*100;l.style.width=u+"%",u===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",l.classList.add("complete"),n.textContent=`${e.name}`,He(),ue=!1,ae.length>0){const r=ae.shift();await Qe(r.file,r.uploadBox,r.fileNameLabel,r.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",l.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${O}/files/upload_audio/${i.ProjectID}`,!0),a.send(o)}async function wo(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div"),s=document.createElement("div");o.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o);const a={file:i,uploadBox:o,fileNameLabel:s,details:t};if(ae.push(a),!ue){const c=ae.shift();await Qe(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function ze(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Co(){const e=new IntersectionObserver(o,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function o(s,a){s.forEach(c=>{c.isIntersecting&&D()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):c.isIntersecting&&!D()||!c.isIntersecting&&!D()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!c.isIntersecting&&D()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",i.style.visibility="visible")})}}function Lo(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){Po(o,s)}}function Po(e,t){e.target;const n="update_project_image",i={project_id:t};e.stopPropagation(),k(i,e,n)}const Bo=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Oo(e,t){const n=new XMLHttpRequest,i=new FormData;localStorage.getItem("JWT"),i.append("file",e),n.upload.onprogress=function(o){o.lengthComputable&&o.loaded/o.total*100},n.onload=function(){No()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${O}/files/upload_photo/${t}`,!0),n.send(i)}async function So(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await Oo(n,t)}const Ke='<div class="MENUmodalBody" id="MENUmodalBody"></div>';let J,A=!1;function k(e,t,n){n===void 0&&xo(e,t),n!==void 0&&n==="update_project_image"&&Do(e,t),n!==void 0&&n==="lcd_mobile_body"&&Ro(),n!==void 0&&n==="notice"&&Mo(e)}function Mo(e,t){let n=20,i=80;const o=document.querySelector("main"),s=document.querySelector(".topHalf-container");D()&&(o.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Ke,a.style.display="block";const c=document.getElementById("MENUmodalBody");let l=n+"px",r=i+"px";if(a.addEventListener("click",_e),c.style.left=l,c.style.top=r,c.style.padding="5px",J&&pointerType===""){const v=J.getBoundingClientRect();n=v.left+window.scrollX,i=v.top+window.scrollY;let P=n+"px",b=i+"px";c.style.left=P,c.style.top=b}for(let v=0;v<e.length;v++)We(e[v]);c.children[0];const m=c.offsetWidth,d=c.offsetHeight,g=Ve("MENUmodalBody"),y=c.getElementsByClassName("MENUmodalItemContainer");document.addEventListener("keydown",f),g.xOverflow==!0&&(l=n-m+"px",c.style.left=l),g.yOverflow==!0&&(r=i-d+"px",c.style.top=r);for(let v=0;v<y.length;v++){const P=y[v];P.setAttribute("data-menu-item-id",v),P.addEventListener("click",function(b){b.stopPropagation();const E=b.target.getAttribute("data-menu-item-id"),T=e[E].function,B=e[E].optionalParams;if(T=="TEST")console.log("the button worked");else if(T!="None"){Xe[T](B);return}else return})}function f(v){(v.key==="Escape"||v.keyCode===27)&&(document.removeEventListener("keydown",f),Y())}}function Ro(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),i=document.getElementById("MENUmodalEnvironment");let o=Bn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,l=0;D()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[L,R]of Object.entries(I)){const x=new RegExp(`\\{${L}\\}`,"g");o=o.replace(x,R)}i.style.display="block",i.innerHTML=o;const r=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),m=document.getElementById("LCD_mobile_body_img"),d=s.duration,y=s.currentTime/d*100,f=document.getElementById("LCDMB_seek_input"),v=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const P=document.getElementById("LCDMB_back"),b=document.getElementById("LCDMB_play"),S=document.getElementById("LCDMB_play_icon"),E=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{B(),A===!0&&q()}),B(),C(),v.style.width=`${y}%`,s.addEventListener("timeupdate",()=>{const L=s.duration,x=s.currentTime/L*100;v.style.width=`${x}%`}),f.addEventListener("input",function(){const L=s.duration,R=f.value;s.currentTime=L*(R/100)}),P.addEventListener("click",()=>{st(),B(),A===!0&&q()}),b.addEventListener("click",()=>{ce(),B(),C()}),E.addEventListener("click",()=>{it(),B(),A===!0&&q()}),T.addEventListener("click",()=>{A===!1?(ve(),A=!0):(Ee(),A=!1)}),A===!0?ve():Ee(),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1);function B(){m.src=et,r.innerText=tt,u.innerText=nt}function C(){s.paused?S.src=I.icons_playButtonV2:S.src=I.icons_derpy}function q(){const L=document.getElementById("LCD_mobile_queue_content_container");L.innerHTML="";for(let R=_+1;R<p.length;R++){const x=p[R],ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],Q=x.img,_t=x.song_name,ft=x.project_contributors;let re=Pn;for(let le=0;le<ee.length;le++){const te=ee[le].toString(),vt=new RegExp(`\\{${te}\\}`,"g");let ne="";te==="queue_item_img"?ne=`${h}/${Q}/3/`:te==="queue_item_song_name"?ne=_t:te==="queue_item_song_artist"&&(ne=ft),re=re.replace(vt,ne)}L.innerHTML+=re}}function ve(){function L(R){R.forEach(x=>{document.querySelectorAll("."+x).forEach(Q=>{Q.classList.add("queue_visible")})})}L(a),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z),q()}function Ee(){function L(R){R.forEach(x=>{document.querySelectorAll("."+x).forEach(Q=>{Q.classList.remove("queue_visible")})})}L(a),i.addEventListener("touchstart",W,!1),i.addEventListener("touchmove",X,!1),i.addEventListener("touchend",Z,!1)}function W(L){A===!1&&(c=L.touches[0].clientY)}function X(L){L.preventDefault()}function Z(L){l=L.changedTouches[0].clientY,l-c>70&&(Y(),i.removeEventListener("touchstart",W),i.removeEventListener("touchmove",X),i.removeEventListener("touchend",Z))}}function xo(e,t){J=document.activeElement;const n=t.pointerType;let i=t.clientX,o=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");D()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=Ke,c.style.display="block";const l=document.getElementById("MENUmodalBody");let r=i+"px",u=o+"px";if(c.addEventListener("click",_e),l.style.left=r,l.style.top=u,J&&n===""){const b=J.getBoundingClientRect();i=b.left+window.scrollX,o=b.top+window.scrollY;let S=i+"px",E=o+"px";l.style.left=S,l.style.top=E}for(let b=0;b<e.length;b++)We(e[b]);const d=l.children[0],g=l.offsetWidth,y=l.offsetHeight,f=Ve("MENUmodalBody"),v=l.getElementsByClassName("MENUmodalItemContainer");n===""?d.focus():n==="mouse"&&(d.focus(),d.blur()),document.addEventListener("keydown",P),f.xOverflow==!0&&(r=i-g+"px",l.style.left=r),f.yOverflow==!0&&(u=o-y+"px",l.style.top=u);for(let b=0;b<v.length;b++){const S=v[b];S.setAttribute("data-menu-item-id",b),S.addEventListener("click",function(E){E.stopPropagation();const B=E.target.getAttribute("data-menu-item-id"),C=e[B].function,q=e[B].optionalParams;if(C=="TEST")console.log("the button worked");else if(C!="None"){Xe[C](q);return}else return})}function P(b){(b.key==="Escape"||b.keyCode===27)&&(document.removeEventListener("keydown",P),Y())}}function Do(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",l=i+"px";D()&&(o.style.zIndex="40",s.style.zIndex="0"),o.style.zIndex="2",a.innerHTML=Ln,a.style.display="block",a.addEventListener("click",_e);const r=document.getElementById("MENUmodalBody"),u=document.getElementById("MENUmodalBody_image_select_file_drop_area"),m=document.getElementById("MENUmodalBody_image_select_file_select_button"),d=document.getElementById("MENUmodalBody_image_select_preview_area"),g=document.getElementById("MENUmodalBody_image_select_submit_button"),y=document.getElementById("MENUmodalBody_image_select_submit_button_container");r.style.left=c,r.style.top=l;let f,v;function P(E,T){return function(){const B=this,C=arguments;clearTimeout(v),v=setTimeout(()=>{E.apply(B,C)},T)}}function b(E,T){P(So,100)(E,T)}function S(E){if(f){const T=URL.createObjectURL(f),B=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");d.src=T,g.style.visibility="visible",y.style.outline="3px solid var(--primary)",g.addEventListener("click",()=>{b(f,E.project_id),B.style.visibility="visible"})}else console.log("No file selected.")}u.addEventListener("dragover",E=>{E.preventDefault()}),u.addEventListener("drop",E=>{E.preventDefault(),f=E.dataTransfer.files[0],S(e)}),m.addEventListener("click",()=>{const E=document.createElement("input");E.type="file",E.accept="image/*",E.addEventListener("change",T=>{f=T.target.files[0],S(e)}),E.click()})}function No(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",Y(),lo()}function Ve(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,l=o+s,r=c+a;let u=!1,m=!1;return l>n&&(u=!0),r>i&&(m=!0),{xOverflow:u,yOverflow:m}}function We(e){const t=e.displayText,n=e.optionalSVG,i=document.getElementById("MENUmodalBody");let o;"colour"in e?o=e.colour:(o="var(--text)",D()&&(o="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=Bo.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[l,r]of Object.entries(I)){const u=new RegExp(`\\{${l}\\}`,"g");a=a.replace(u,r)}i.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),i.innerHTML+=a;return}}function _e(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function Y(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10"),J&&J.focus()}const Xe={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){yo(e)},PLAYBACK_add_songs_to_queue(e){ni(e)},SIGN_OUT_USER(e){Yn()},OPEN_SETTINGS_PAGE(e){N("/settings/")}};let U="hidden";function Ao(){yn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");me(U),e.addEventListener("click",jo),t.addEventListener("click",ko),j()}function jo(){if(U==="hidden"){U="visible",me(U);return}if(U==="visible"){U="hidden",me(U);return}}function me(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Tn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function j(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=_+1;t<p.length;t++){p[t].id=t;const n=p[t],i=Yo(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){c.target.dataset.songId}),o.dataset.songId=n.id,o.addEventListener("click",Ho),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator"),a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",$o),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&qo(c)}),o.addEventListener("dragstart",Uo),o.addEventListener("dragover",Go),o.addEventListener("drop",Jo),e.appendChild(o)}}function ko(){const e=_+1;e>=0&&e<p.length?p.splice(e):p.length=0,j()}function Uo(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Go(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Jo(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=p.find(c=>c.id===parseInt(t)),o=p.find(c=>c.id===parseInt(n.dataset.songId)),s=p.indexOf(i),a=p.indexOf(o);s!==-1&&a!==-1&&(p.splice(s,1),p.splice(a,0,i),M.splice(s,1),M.splice(a,0,i),j())}function $o(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=p.findIndex(o=>o.id===n);i!==-1&&(p.splice(i,1),M.splice(i,1)),j()}function qo(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];k(i,e)}function Ho(e){}function Yo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=bn;for(let l=0;l<t.length;l++){const r=t[l].toString(),u=new RegExp(`\\{${r}\\}`,"g");let m="";r==="QUEUE_item_image"?m=`${h}/${n}/3/`:r==="QUEUE_item_title"?m=i:r==="QUEUE_item_artist"?m=o:r==="icons_menuOptionsButton"?m=xe:r==="QUEUE_item_timeIndicator"&&(m=s),a=a.replace(u,m)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const Fo=`<div class="LCDbody">
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
</div>`;function Qo(){Ko(),Ze(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Vo(t)}),Wo(),D()&&document.getElementById("LCDbody").addEventListener("click",zo)}function zo(e){e.stopPropagation(),k({param:"cheese"},e,"lcd_mobile_body")}function Ko(){let e="LCDbody",t=Fo;for(const[i,o]of Object.entries(I)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Ze(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let l,r,u;e=n.clientWidth,r=s(),u=e/i,u>r?l=r+10:l=u,t.style.width=l+"px"}function s(){const l=document.getElementById("LCDtitleText"),r=document.createElement("span");r.style.visibility="hidden",r.style.whiteSpace="nowrap",r.textContent=l.textContent,document.body.appendChild(r);const u=r.offsetWidth;return document.body.removeChild(r),u}function a(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function Vo(e){e.stopPropagation(),e.target,k([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Wo(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Xo)})}function Xo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),si(n)}function Zo(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let p=[],M=[],_=0,et="",tt="",nt="";document.getElementById("audio");document.getElementById("PLAYERsource");let w="off",G="off",K="paused";function ot(e){p=[],_=0,p=fe(e),p.length>0&&(K="playing",$())}function ei(e){p=[],_=0,p=fe(e),p.length>0&&(G="off",at(),K="playing",$())}function fe(e){e=JSON.parse(e);const t=[],n=e.ProjectContributors,i=e.ProjectName,o=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const c=a.SongName,l=a.Duration,r=a.URL;t.push({img:o,song_name:c,url:r,duration:l,project_name:i,project_contributors:n})}}catch(a){console.log(a)}return t}function ti(e){const t=e.current_queue,n=e.current_index,i=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const o=e.progress;p=t,_=n,mi(i),p!==void 0&&p.length>0&&ri(o)}async function ni(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,i=await F(t),o=fe(i);if(n==="later")p=p.concat(o),M=M.concat(o);else if(n==="next"){let s=p.slice(0,_+1),a=p.slice(_+1);p=s,p=p.concat(o),p=p.concat(a),s=M.slice(0,_+1),a=M.slice(_+1),M=s,M=M.concat(o),M=M.concat(a)}j()}function ce(){oi()}function oi(){const e=document.getElementById("audio");e.paused?(V("playing"),K="playing",e.play().then(t=>lt()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",V("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ce()});navigator.mediaSession.setActionHandler("pause",function(){ce()});function it(){ut()}function st(){mt()}function ii(){document.getElementById("audio").addEventListener("ended",di)}function si(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function ai(){ui()}function ci(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:w,PLAYBACK_shuffle_state:G,progress:t}}function at(){if(G==="off"){G="on",Pe(G);const t=_+1;M=[...p],p.slice(0,_);const n=p.slice(t);hn(n);const i=n.length;p.splice(_,i,...n),j()}else{G="off",Pe(G);const t=[...M],o=document.getElementById("PLAYERsource").src.split("/"),s=o[o.length-3];p=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(_=e);j()}}function $(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${h}/${p[_].url}/3/`,e.load(),K==="playing"?(e.play().then(n=>lt()).catch(n=>console.log(n)),V("playing")):V("paused"),rt(),ct()}function ri(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${h}/${p[_].url}/3/`,t.load(),t.currentTime=e,V("paused"),rt(),ct()}function ct(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const i=e.duration,o=e.currentTime,s=Math.floor(i)-o,a=`"-${ye(s)}"`,l=`"${ye(Math.floor(o))}"`,r=o/i*100,u=`${r}%`;Zo(l,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=r,dt()})}function rt(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),i=document.getElementById("LCDimage"),o=document.getElementById("LCDimageMobile");e.innerHTML=p[_].song_name,t.innerHTML=p[_].song_name,n.innerHTML=p[_].project_contributors,Ze(),i.src=`${h}/${p[_].img}/3/`,o.src=`${h}/${p[_].img}/3/`,et=`${h}/${p[_].img}/5/`,tt=p[_].song_name,nt=p[_].project_contributors,j()}function lt(){let e=p[_];const t=[{src:`${h}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${h}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${h}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${h}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${h}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${h}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),dt()}function dt(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function li(){console.log("PLAYBACK_stop_playback, clear top")}function di(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=p.length;e.pause(),t>_+1&&(w=="off"||w=="on")?(_+=1,$()):w=="song"?$():t==_+1&&w=="on"?(_=0,$()):li()}function ut(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),p.length>_+1&&(e.pause(),_+=1,$())}navigator.mediaSession.setActionHandler("nexttrack",function(){ut()});function mt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),p.length,_>0&&(e.pause(),_-=1,$())}navigator.mediaSession.setActionHandler("previoustrack",function(){mt()});function ui(){w=="off"?(w="on",H(w)):w=="on"?(w="song",H(w)):(w="off",H(w))}function mi(e){e=="off"?(w="off",H(w)):e=="on"?(w="on",H(w)):(e="song",w="on",H(w))}function pi(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",gi),t.addEventListener("click",_i),n.addEventListener("click",fi),i.addEventListener("click",vi),o.addEventListener("click",Ei)}function gi(){at()}function _i(){st()}function fi(){ce()}function vi(){it()}function Ei(){ai()}function Pe(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function H(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=I.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=I.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=I.icons_loop_song;return}}function V(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=I.icons_pause;return}if(e=="paused"){t.src=I.icons_play;return}}function yi(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){pt(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",bi)})}function bi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;pt(n)}function pt(e){function t(o,s,a){return o>=s&&o<=a}function n(o){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=o&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(o).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const i=document.getElementById("audio");if(i.volume=e/100,t(e,0,1)){n("volumeControlZero"),i.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Ti(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const hi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Ii=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function wi(){setTimeout(()=>{let e="MAINcontentPages",t=Ii;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Ci)},1)}async function Ci(e){console.log("the signup event was caught"),e.preventDefault(),Li();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const o of t.elements)o.type==="email"&&(n[o.name]=o.value);const i=await fetch(`${O}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(i.ok){const o=await i.json();n.token=o.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const l=await convertImageToBase64(c);n[a.name]=l}}else n[a.name]=a.value;const s=await fetch(`${O}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();de(),Pi(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const o=await i.json(),s="There was an error with the email, check that the details are correct.";de(),Be(),alert(s)}}catch{de(),Be(),alert("There was an error, try again")}}function Li(){const e=document.getElementById("spinner");e.style.display="block"}function de(){const e=document.getElementById("spinner");e.style.display="none"}function Pi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Be(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let oe=!1,Oe=!1,Se=!1,Me=!1;async function Bi(){await Mi()?gt():Oe||(Oi(),Oe=!0)}function Oi(){Ri();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${O}/meta/are_signups_allowed`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Re(),wi()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),oe)return!1;oe=!0;const a=i.value,c=o.value;try{await Si(a,c)?(Me=!0,xi(),gt(),setTimeout(Re,2e3)):(Me=!1,Di(),console.log("Login failed. Retry!")),oe=!1}catch(l){console.error("Error:",l),oe=!1}return!1})}async function Si(e,t){try{const i=await(await fetch(`${O}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json();if(i.Authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.Authenticated}catch(n){return console.error(n),!1}}async function Mi(){const e=await fetch(`${O}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}function Ri(){let e="MAINcontentPages",t=hi;document.getElementById(e).innerHTML+=t}function Re(){if(Se===!0)return;Se=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function xi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Di(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Ni=`<!-- audio tag -->
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
</div>`;const O="/apis",h="/media";async function gt(){ii(),vn(),En(),Qo(),pi(),Ti(),yi(),$n(),Ao(),Vn()}if(!window.hasCodeRun){let e=Ni;for(const[t,n]of Object.entries(I)){const i=new RegExp(`\\{${t}\\}`,"g");e=e.replace(i,n)}document.getElementById("app").innerHTML=e,Bi(),window.hasCodeRun=!0}
