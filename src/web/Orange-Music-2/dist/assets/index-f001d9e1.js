(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Pe="/assets/menu_options_button-a1d7bbe3.svg",rt=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,lt=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,dt=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,ut="/assets/volume_null-e39cf06f.svg",mt="/assets/recently_added-a0a983c6.svg",pt="/assets/volume_3-c8ab0a75.svg",gt="/assets/orange_music_text_logo_black-12e7386c.svg",_t="/assets/volume_2-cfdac9da.svg",ft="/assets/browse_2-85030bba.svg",vt="/assets/volume_1-27e93416.svg",Et="/assets/orange_music_logo_white-2a680ea2.svg",yt="/assets/search_icon-4f5e4381.svg",Tt="/assets/orange_music_text_logo_black-91f9e706.png",bt="/assets/up_next_queue_button-14fedba2.svg",ht="/assets/orange_music_logo_yellow-a109ff64.svg",It="/assets/playlist-c6e9024f.svg",Ct="/assets/loop_button-aef56865.svg",wt="/assets/help_icon-867fec9d.svg",Lt="/assets/play_button-b1e2d3a4.svg",Pt="/assets/browse-14744f27.svg",Bt="/assets/orange_music_text_logo_white-7f0ba909.svg",Ot="/assets/back_button-8128cade.svg",Mt="/assets/Albums-2e81dc74.svg",St="/assets/songs-016b7188.svg",Rt="/assets/orange_music_logo_black-4d7e4591.svg",xt="/assets/your_uploaded_songs-06535705.svg",Dt="/assets/artist-ab677d43.svg",Nt="/assets/shuffle_button-c2f06bc4.svg",At="/assets/orange_music_text_logo_white-4907051e.png",jt="/assets/listen_now-c7438154.svg",kt="/assets/derpy-21c20ae5.svg",Gt="/assets/next_button-9a850710.svg",Ut="/assets/recently_added-7ff28139.svg",Jt="/assets/play_button-5eeedbe6.svg",qt="/assets/browse-e8be8609.svg",Yt="/assets/albums-681507b8.svg",Ht="/assets/listen_now.2-bfa293ac.svg",$t="/assets/your_uploads-02e5c93c.svg",Qt="/assets/play_button.2-fc90fac7.svg",zt="/assets/listen_now-fb02ffce.svg",Kt="/assets/browse.2-15b501dd.svg",Ft="/assets/place_holder_image-d4006a96.svg",Vt="/assets/icons_MOGitems_add-19e679f7.svg",Wt="/assets/back-9279721d.svg",Zt="/assets/forwards-605bd405.svg",Xt="/assets/icons_close-57e87944.svg",en="/assets/icons_pause-8012f8cc.svg",tn="/assets/icons_loop-32d1576c.svg",nn="/assets/icons_loop_song-87f53dc7.svg",on="/assets/icons_play-a5074c5b.svg",sn="/assets/icons_settings-793063fb.svg",g={icons_volumeNull:ut,icons_recentlyAdded:mt,icons_volume3:pt,icons_orangeMusicTextLogoBlack:gt,icons_volume2:_t,icons_browse2:ft,icons_volume1:vt,icons_orangeMusicLogoWhite:Et,icons_searchIcon:yt,icons_orangeMusicTextLogoBlackPng:Tt,icons_queueButton:bt,icons_orangeMusicLogoYellow:ht,icons_playlist:It,icons_loopButton:Ct,icons_helpIcon:wt,icons_playButton:Lt,icons_browse:Pt,icons_menuOptionsButton:Pe,icons_orangeMusicTextLogoWhite:Bt,icons_backButton:Ot,icons_Albums:Mt,icons_songs:St,icons_orangeMusicLogoBlack:Rt,icons_yourUploadedSongs:xt,icons_artist:Dt,icons_shuffleButton:Nt,icons_orangeMusicTextLogoWhitePng:At,icons_listenNow:jt,icons_derpy:kt,icons_nextButton:Gt,icons_recentlyAddedV2:Ut,icons_playButtonV2:Jt,icons_browseV2:qt,icons_albumsV2:Yt,icons_listenNow2V2:Ht,icons_yourUploads:$t,icons_playButton2:Qt,icons_listenNowV2:zt,icons_browse2V2:Kt,v3_placeholder:Ft,icons_MOGitems_add:Vt,icons_back:Wt,icons_forwards:Zt,icons_close:Xt,icons_pause:en,icons_loop:tn,icons_loop_song:nn,icons_play:on,icons_settings:sn};function an(){let e="topleftContentArea",t=rt;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function cn(){let e="toprightContentArea",t=lt;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function rn(){let e="MAINcontentContainer",t=dt;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ln=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;function B(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function dn(){return!!window.matchMedia("prefers-color-scheme: dark").matches}function un(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function fe(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function mn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function pn(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function Be(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}const gn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,_n=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,fn=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`,vn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,En=`<button id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,yn=`<button class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,Oe=15;let Q=0;async function Tn(){try{const e=document.getElementById("MAINcontentPages");bn();const t=await Ne(Oe,Q);Q+=t.length,hn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Me(){Q=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Se),e.innerHTML=""}function bn(){let e="MAINcontentPages",t=vn;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function hn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=En;for(const[a,c]of Object.entries(g)){const r=new RegExp(`\\{${a}\\}`,"g");n=n.replace(r,c)}t.innerHTML+=n,ve(e);const o=document.getElementById("MOGcontainer");o.addEventListener("click",function(a){Se(a,e)});let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)});function s(a,c){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],l=c[d].project_id;console.log(l),Re(a,l)}t.addEventListener("scroll",async function(){const a=t.scrollTop,c=t.scrollHeight,r=t.clientHeight;if(a>=c-r){const d=await Ne(Oe,Q);Q+=d.length,d.length>0&&ve(d)}})}function ve(e){const t=document.getElementById("MOGgridContainer"),n=e.length;for(var o=0;o<=n-1;o++){const i=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],s=o,a=e[o].img,c=e[o].top,r=e[o].bottom,d=e[o].days,l=mn(d);let p=yn;for(const[T,b]of Object.entries(g)){const O=new RegExp(`\\{${T}\\}`,"g");p=p.replace(O,b)}for(let T=0;T<i.length;T++){const b=i[T].toString(),O=new RegExp(`\\{${b}\\}`,"g");let h="";b==="MOG_image"?h=`${E}/${a}/4/`:b==="MOG_text1"?h=c:b==="MOG_text2"?h=r:b==="MOG_checkedDate"?h=l:b==="MOGI_placeholder_itemID"&&(h=s),p=p.replace(O,h)}t.innerHTML+=p}}async function Se(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Y(i);ze(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Re(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;S(`/projects/${i}`)}n.id==="MOGaddNewItem"&&In()}function Re(e,t){e.stopPropagation(),N([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}function In(){S("/new-project/")}const Cn=`<div class="settings_container">
    <div class="settings_body_top_banner">
        <div>
            <img src="{icons_back}" height="20">
        </div>
    </div>
    <div class="settings_content">
        <div class="settings_views_container">
            <div class="settings_views_positioner">
                <h1>Settings</h1>
                <div class="settings_views_list">
                    <button class="settings_views_list_item">
                        General
                    </button>
                    <button class="settings_views_list_item">
                        Bananans
                    </button>
                    <button class="settings_views_list_item">
                        Admin
                    </button>
                    <button class="settings_views_list_item">
                        Privacy
                    </button>
                    <button class="settings_views_list_item">
                        Storage
                    </button>
                    <button class="settings_views_list_item">
                        User
                    </button>
                </div>
            </div>
        </div>
        <div class="settings_interaction_view"></div>
    </div>
</div>`;function wn(){const e=document.getElementById("MAINcontentPages");let t=Cn;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}e.innerHTML=t}function xe(){console.log("hide settings")}async function Ln(){const e=await De("last_state"),t=JSON.parse(e[0].last_state),n=new Map;setInterval(s,1e4);let o="";if(window.addEventListener("popstate",a),t!=null){const c=window.location.pathname;S(c),Ao(t)}else a();function i(c){return JSON.stringify(c)}function s(){const c=window.location.pathname,r=u,d=m,l=qo();l.current_path=c,l.current_queue=r,l.current_index=d;const p=i(l);p!==o&&(Sn("last_state",l),o=p,n.set("playback_states",p))}function a(){S(currentPath)}}function Pn(){Ae(),xe(),Tn()}function Bn(e){Me(),xe(),An()}function On(){Me(),Ae(),wn()}const Ee={"/":Pn,"/new-project/":Rn,"/projects/:projectID":Bn,"/settings/":On};function Mn(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    <img style="margin-left:10%;border-radius:1rem;" src="${E}/assets/hippo.webp">
    `;function n(){S("/")}}function S(e){const t=Object.keys(Ee);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ee[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Mn()}async function re(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${C}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function Sn(e,t){try{const n=localStorage.getItem("JWT");if(!n){console.log("no jwt");return}const o={"access-token":n,column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${C}/users/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function De(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,wanted_column:e};return(await(await fetch(`${C}/users/get_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).response}catch(t){console.error("Error:",t)}}async function Y(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ne(e,t){try{const n=localStorage.getItem("JWT");if(!n)return console.log("no jwt"),[];const o={"access-token":n,library_items_to_request_at_a_time:e,no_library_datas_collected:t},a=(await(await fetch(`${C}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).projects;return Array.isArray(a)?a.map(r=>({img:r.picture_url,top:r.project_name,bottom:r.project_contributors,days:r.time_created,project_id:r.project_id})):(console.log("Projects is not an array:",a),[])}catch(n){return console.error("Error:",n),[]}}async function Rn(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${C}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;S(s)}catch(e){console.error("Error:",e)}}const xn=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Dn=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
    <div class="PROJECTview-projectTable-rowItem-1">
        <img src="{PROJECTviewRow_img}">
        <div>{PROJECTviewRow_songTitle}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-2">
        <div>{PROJECTviewRow_artistName}</div>
    </div>
    <div class="PROJECTview-projectTable-rowItem-3">
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
</div>`,Nn=`<div class="PROJECTviewContainerEnvironment">
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
            <div class="PROJECTview-projectArea-uploadArea">
                <div class="PROJECTview_dropArea" id="PROJECTview_dropArea">
                    <p>Drag and drop files here or click to select files.</p>
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
</div>`,oe=[];let le=!1;async function An(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await Y(o);i.project_id=o,t(i),kn(i)},1);function t(n){Gn(n);const o=n.description;sessionStorage.setItem("description",o),Un(),Jn(),Yn(),Hn(n),$n(n),Kn(n),Vn(n),Zn(),Je(n.project_name),Xn(n.project_id)}}function Ae(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function jn(){je();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await Y(t)).picture_url,s=`${E}/${i}/5/`;n.src=s}function kn(e){const t=document.getElementById("PROJECTviewDisplayTitleH1"),n=document.getElementById("PROJECTviewDisplayTitleH3");t.addEventListener("blur",function(o){const i=t.innerText;Je(i),re(e.project_id,"project_name",i)}),n.addEventListener("blur",function(o){const i=n.innerText;re(e.project_id,"project_contributors",i)})}function Gn(e){let t="MAINcontentPages",n=Nn;for(const[i,s]of Object.entries(g)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=pn(e.time_created):s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${E}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function Un(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Jn(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main");function i(){n.style.display="grid",B()&&(o.style.zIndex="40")}e.addEventListener("click",function(){i()}),t.addEventListener("dblclick",function(){i()});let s=0;t.addEventListener("touchend",function(a){const c=new Date().getTime();c-s<300&&(a.stopPropagation(),i()),s=c})}function qn(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Yn(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Hn(e){const t=document.getElementById("PROJECTviewMOREcloseButton"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");t.addEventListener("click",function(){ye(e)}),n.addEventListener("click",function(o){o.target===n&&ye(e)})}function ye(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value,o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main");sessionStorage.setItem("description",n),re(e.project_id,"description",n),o.style.display="none",qn(),i.style.zIndex="1"}async function $n(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await Y(e.project_id);t.addEventListener("click",function(){ze(a)}),n.addEventListener("click",function(){No(a)}),o.addEventListener("click",function(){Te(event)}),i.addEventListener("click",function(){Te(event)}),s.addEventListener("click",()=>{S("/")})}function Te(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");N([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:o,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(0, 100%, 55%)"}],e)}function Qn(e){if(window.confirm("Are you sure you want to delete this project?")){const t="/";zn(e),z(),S(t)}else z()}async function zn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${C}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(t){console.error("Error:",t)}}function Kn(e){document.getElementById("PROJECTview_projectAreaContainer"),Fn();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n;if(o!=="{}"){const i=o.songs_json,s=[];if(i)for(const a of i)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:Be(a.song_size),songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];Ge(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");r&&(r.getAttribute("data-row-id"),ke(a))}})}}async function je(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await Y(n);o.project_id=n;const i=o,s=i.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:Be(l.song_size),songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const p=c[l];Ge(p)}e.addEventListener("click",function(l){const p=l.target;if(l.stopPropagation(),p.tagName==="BUTTON"){const T=p.closest(".PROJECTview-projectTable-rowContainer");if(T){const b=T.getAttribute("data-row-id");ke(l),console.log(`Button in row ${b} clicked.`)}}})}function ke(e){e.stopPropagation(),e.target,N([{displayText:"Not Selected",optionalSVG:"icons_yourUploadedSongs",function:"TEST"}],e)}function Fn(){let e="PROJECTview_projectAreaContainer",t=xn;for(const[n,o]of Object.entries(g)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Ge(e){let t="PROJECTview-projectTable",n=Dn;for(const[i,s]of Object.entries(g)){const a=new RegExp(`\\{${i}\\}`,"g");n=n.replace(a,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${E}/${e.img}/3/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function Vn(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Wn(o,i)}}async function Ue(e,t,n,o){const i=new FormData,s=localStorage.getItem("JWT"),a=new XMLHttpRequest,c=document.createElement("div"),r=document.createElement("div");le=!0,i.append("file",e),i.append("project_id",o.project_id),i.append("jwt",s),c.classList.add("progress-bar"),r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=async function(){if(c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,je(),le=!1,oe.length>0){const d=oe.shift();await Ue(d.file,d.uploadBox,d.fileNameLabel,d.details)}setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${C}/files/upload/audio/`,!0),a.send(i)}async function Wn(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div"),s=document.createElement("div");i.classList.add("upload-box"),s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i);const a={file:o,uploadBox:i,fileNameLabel:s,details:t};if(oe.push(a),!le){const c=oe.shift();await Ue(c.file,c.uploadBox,c.fileNameLabel,c.details)}}}function Je(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Zn(){const e=new IntersectionObserver(i,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");e.observe(t);function i(s,a){s.forEach(c=>{c.isIntersecting&&B()?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):c.isIntersecting&&!B()||!c.isIntersecting&&!B()?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!c.isIntersecting&&B()&&(n.style.backdropFilter="blur(15px)",n.style.backgroundColor="var(--background-transparent)",o.style.visibility="visible")})}}function Xn(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){eo(i,s)}}function eo(e,t){e.target;const n="update_project_image",o={project_id:t};e.stopPropagation(),N(o,e,n)}const to=`<button class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function no(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){po()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${C}/files/upload/photo/`,!0),n.send(o)}async function oo(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await no(n,t)}const io='<div class="MENUmodalBody" id="MENUmodalBody"></div>';async function so(){const e=document.getElementById("TOPRIGHTaccountImg");try{const n=(await De("profile_picture"))[0].profile_picture,o=`${E}/${n}/1/`,i=document.getElementById("TOPRIGHTaccountImgButton");e.src=o,i.addEventListener("click",ao)}catch(t){console.error("Error initializing account image:",t)}}function ao(e){e.stopPropagation(),co(e)}function co(e){N([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}function ro(){localStorage.clear(),location.reload()}let $,x=!1;function N(e,t,n){n===void 0&&uo(e,t),n!==void 0&&n==="update_project_image"&&mo(e,t),n!==void 0&&n==="lcd_mobile_body"&&lo()}function lo(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=fn;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let c=0,r=0;B()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[y,w]of Object.entries(g)){const L=new RegExp(`\\{${y}\\}`,"g");i=i.replace(L,w)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),l=document.getElementById("LCD_mobile_body_artist_title"),p=document.getElementById("LCD_mobile_body_img"),T=s.duration,O=s.currentTime/T*100,h=document.getElementById("LCDMB_seek_input"),_=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const P=document.getElementById("LCDMB_back"),f=document.getElementById("LCDMB_play"),M=document.getElementById("LCDMB_play_icon"),G=document.getElementById("LCDMB_next"),pe=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{R(),x===!0&&J()}),R(),U(),_.style.width=`${O}%`,s.addEventListener("timeupdate",()=>{const y=s.duration,L=s.currentTime/y*100;_.style.width=`${L}%`}),h.addEventListener("input",function(){const y=s.duration,w=h.value;s.currentTime=y*(w/100)}),P.addEventListener("click",()=>{Fe(),R(),x===!0&&J()}),f.addEventListener("click",()=>{ie(),R(),U()}),G.addEventListener("click",()=>{Ke(),R(),x===!0&&J()}),pe.addEventListener("click",()=>{x===!1?(ge(),x=!0):(_e(),x=!1)}),x===!0?ge():_e(),o.addEventListener("touchstart",V,!1),o.addEventListener("touchmove",W,!1),o.addEventListener("touchend",Z,!1);function R(){p.src=He,d.innerText=$e,l.innerText=Qe}function U(){s.paused?M.src=g.icons_playButtonV2:M.src=g.icons_derpy}function J(){const y=document.getElementById("LCD_mobile_queue_content_container");y.innerHTML="";for(let w=m+1;w<u.length;w++){const L=u[w],X=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],H=L.img,st=L.song_name,at=L.project_contributors;let se=_n;for(let ae=0;ae<X.length;ae++){const ee=X[ae].toString(),ct=new RegExp(`\\{${ee}\\}`,"g");let te="";ee==="queue_item_img"?te=`${E}/${H}/3/`:ee==="queue_item_song_name"?te=st:ee==="queue_item_song_artist"&&(te=at),se=se.replace(ct,te)}y.innerHTML+=se}}function ge(){function y(w){w.forEach(L=>{document.querySelectorAll("."+L).forEach(H=>{H.classList.add("queue_visible")})})}y(a),o.removeEventListener("touchstart",V),o.removeEventListener("touchmove",W),o.removeEventListener("touchend",Z),J()}function _e(){function y(w){w.forEach(L=>{document.querySelectorAll("."+L).forEach(H=>{H.classList.remove("queue_visible")})})}y(a),o.addEventListener("touchstart",V,!1),o.addEventListener("touchmove",W,!1),o.addEventListener("touchend",Z,!1)}function V(y){x===!1&&(c=y.touches[0].clientY)}function W(y){y.preventDefault()}function Z(y){r=y.changedTouches[0].clientY,r-c>70&&(z(),o.removeEventListener("touchstart",V),o.removeEventListener("touchmove",W),o.removeEventListener("touchend",Z))}}function uo(e,t){$=document.activeElement;const n=t.pointerType;let o=t.clientX,i=t.clientY;const s=document.querySelector("main"),a=document.querySelector(".topHalf-container");B()&&(s.style.zIndex="40",a.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=io,c.style.display="block";const r=document.getElementById("MENUmodalBody");let d=o+"px",l=i+"px";if(c.addEventListener("click",qe),r.style.left=d,r.style.top=l,$&&n===""){const f=$.getBoundingClientRect();o=f.left+window.scrollX,i=f.top+window.scrollY;let M=o+"px",G=i+"px";r.style.left=M,r.style.top=G}for(let f=0;f<e.length;f++)_o(e[f]);const T=r.children[0],b=r.offsetWidth,O=r.offsetHeight,h=go("MENUmodalBody"),_=r.getElementsByClassName("MENUmodalItemContainer");n===""?T.focus():n==="mouse"&&(T.focus(),T.blur()),document.addEventListener("keydown",P),h.xOverflow==!0&&(d=o-b+"px",r.style.left=d),h.yOverflow==!0&&(l=i-O+"px",r.style.top=l);for(let f=0;f<_.length;f++){const M=_[f];M.setAttribute("data-menu-item-id",f),M.addEventListener("click",function(G){G.stopPropagation();const R=G.target.getAttribute("data-menu-item-id"),U=e[R].function,J=e[R].optionalParams;if(U=="TEST")console.log("the button worked");else if(U!="None"){fo[U](J);return}else return})}function P(f){(f.key==="Escape"||f.keyCode===27)&&(document.removeEventListener("keydown",P),z())}}function mo(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container"),a=document.getElementById("MENUmodalEnvironment");let c=n+"px",r=o+"px";B()&&(i.style.zIndex="40",s.style.zIndex="0"),i.style.zIndex="2",a.innerHTML=gn,a.style.display="block",a.addEventListener("click",qe);const d=document.getElementById("MENUmodalBody"),l=document.getElementById("MENUmodalBody_image_select_file_drop_area"),p=document.getElementById("MENUmodalBody_image_select_file_select_button"),T=document.getElementById("MENUmodalBody_image_select_preview_area"),b=document.getElementById("MENUmodalBody_image_select_submit_button"),O=document.getElementById("MENUmodalBody_image_select_submit_button_container");d.style.left=c,d.style.top=r;function h(_,P){if(_){const f=URL.createObjectURL(_),M=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");T.src=f,b.style.visibility="visible",O.style.outline="3px solid var(--primary)",b.addEventListener("click",()=>{oo(_,P.project_id),M.style.visibility="visible"})}else console.log("No file selected.")}l.addEventListener("dragover",_=>{_.preventDefault()}),l.addEventListener("drop",_=>{_.preventDefault();const P=_.dataTransfer.files;h(P[0],e)}),p.addEventListener("click",()=>{const _=document.createElement("input");_.type="file",_.accept="image/*",_.addEventListener("change",P=>{const f=P.target.files[0];h(f,e)}),_.click()})}function po(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",z(),jn()}function go(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=i+s,d=c+a;let l=!1,p=!1;return r>n&&(l=!0),d>o&&(p=!0),{xOverflow:l,yOverflow:p}}function _o(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i;"colour"in e?i=e.colour:(i="var(--text)",B()&&(i="var(--text)"));let s=new RegExp("\\{MENU_item_text\\}","g"),a=to.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(g)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function qe(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function z(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),$&&$.focus()}const fo={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Qn(e)},PLAYBACK_add_songs_to_queue(e){jo(e)},SIGN_OUT_USER(e){ro()},OPEN_SETTINGS_PAGE(e){S("/settings/")}};let A="hidden";function vo(){rn();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");de(A),e.addEventListener("click",Eo),t.addEventListener("click",yo),D()}function Eo(){if(A==="hidden"){A="visible",de(A);return}if(A==="visible"){A="hidden",de(A);return}}function de(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",dn&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function D(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=m+1;t<u.length;t++){u[t].id=t;const n=u[t],o=Lo(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(c){c.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",wo),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Io),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&Co(c)}),i.addEventListener("dragstart",To),i.addEventListener("dragover",bo),i.addEventListener("drop",ho),e.appendChild(i)}}function yo(){const e=m+1;e>=0&&e<u.length?u.splice(e):u.length=0,D()}function To(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function bo(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function ho(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=u.find(c=>c.id===parseInt(t)),i=u.find(c=>c.id===parseInt(n.dataset.songId)),s=u.indexOf(o),a=u.indexOf(i);s!==-1&&a!==-1&&(u.splice(s,1),u.splice(a,0,o),I.splice(s,1),I.splice(a,0,o),D())}function Io(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=u.findIndex(i=>i.id===n);o!==-1&&(u.splice(o,1),I.splice(o,1)),D()}function Co(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];N(o,e)}function wo(e){}function Lo(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=ln;for(let r=0;r<t.length;r++){const d=t[r].toString(),l=new RegExp(`\\{${d}\\}`,"g");let p="";d==="QUEUE_item_image"?p=`${E}/${n}/3/`:d==="QUEUE_item_title"?p=o:d==="QUEUE_item_artist"?p=i:d==="icons_menuOptionsButton"?p=Pe:d==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(l,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.querySelector(".QUEUE-item-image-removeIndicator"),c.innerHTML=a,c.innerHTML}const Po=`<div class="LCDbody">
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
</div>`;function Bo(){Mo(),Ye(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){So(t)}),Ro(),B()&&document.getElementById("LCDbody").addEventListener("click",Oo)}function Oo(e){e.stopPropagation(),N({param:"cheese"},e,"lcd_mobile_body")}function Mo(){let e="LCDbody",t=Po;for(const[o,i]of Object.entries(g)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Ye(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const c=a();window.addEventListener("resize",c),i()}function So(e){e.stopPropagation(),e.target,N([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function Ro(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",xo)})}function xo(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Uo(n)}function Do(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let u=[],I=[],m=0,He="",$e="",Qe="";document.getElementById("audio");document.getElementById("PLAYERsource");let v="off",j="off",K="paused";function ze(e){u=[],m=0,u=me(e),u.length>0&&(K="playing",k())}function No(e){u=[],m=0,u=me(e),u.length>0&&(j="off",Ve(),K="playing",k())}function me(e){const t=[],n=e.project_contributors,o=e.project_name,i=e.picture_url,s=e.songs_json;try{for(const a of s){const c=a.song_name,r=a.duration,d=a.url;t.push({img:i,song_name:c,url:d,duration:r,project_name:o,project_contributors:n})}}catch{}return t}function Ao(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;u=t,m=n,zo(o),u.length>0&&Yo(i)}async function jo(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Y(t),i=me(o);if(n==="later")u=u.concat(i),I=I.concat(i);else if(n==="next"){let s=u.slice(0,m+1),a=u.slice(m+1);u=s,u=u.concat(i),u=u.concat(a),s=I.slice(0,m+1),a=I.slice(m+1),I=s,I=I.concat(i),I=I.concat(a)}D()}function ie(){ko()}function ko(){const e=document.getElementById("audio");e.paused?(F("playing"),K="playing",e.play().then(t=>Xe()).catch(t=>console.log(t)),navigator.mediaSession.playbackState="playing"):(K="paused",F("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){ie()});navigator.mediaSession.setActionHandler("pause",function(){ie()});function Ke(){tt()}function Fe(){nt()}function Go(){document.getElementById("audio").addEventListener("ended",$o)}function Uo(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Jo(){Qo()}function qo(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:v,PLAYBACK_shuffle_state:j,progress:t}}function Ve(){if(j==="off"){j="on",be(j);const t=m+1;I=[...u],u.slice(0,m);const n=u.slice(t);un(n);const o=n.length;u.splice(m,o,...n),D()}else{j="off",be(j);const t=[...I],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];u=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(m=e);D()}}function k(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource");t.src=`${E}/${u[m].url}/3/`,e.load(),K==="playing"?(e.play().then(n=>Xe()).catch(n=>console.log(n)),F("playing")):F("paused"),Ze(),We()}function Yo(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource");n.src=`${E}/${u[m].url}/3/`,t.load(),t.currentTime=e,F("paused"),Ze(),We()}function We(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${fe(s)}"`,r=`"${fe(Math.floor(i))}"`,d=i/o*100,l=`${d}%`;Do(r,a),t.style.setProperty("--LCD-seekbar-width",l),t.style.setProperty("--LCD-seekbar-indicator-left",l),n.value=d,et()})}function Ze(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=u[m].song_name,t.innerHTML=u[m].song_name,n.innerHTML=u[m].project_contributors,Ye(),o.src=`${E}/${u[m].img}/3/`,i.src=`${E}/${u[m].img}/3/`,He=`${E}/${u[m].img}/5/`,$e=u[m].song_name,Qe=u[m].project_contributors,D()}function Xe(){let e=u[m];const t=[{src:`${E}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${E}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${E}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${E}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${E}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${E}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),et()}function et(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Ho(){console.log("PLAYBACK_stop_playback, clear top")}function $o(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=u.length;e.pause(),t>m+1&&(v=="off"||v=="on")?(m+=1,k()):v=="song"?k():t==m+1&&v=="on"?(m=0,k()):Ho()}function tt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length>m+1&&(e.pause(),m+=1,k())}navigator.mediaSession.setActionHandler("nexttrack",function(){tt()});function nt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),u.length,m>0&&(e.pause(),m-=1,k())}navigator.mediaSession.setActionHandler("previoustrack",function(){nt()});function Qo(){v=="off"?(v="on",q(v)):v=="on"?(v="song",q(v)):(v="off",q(v))}function zo(e){e=="off"?(v="off",q(v)):e=="on"?(v="on",q(v)):(e="song",v="on",q(v))}function Ko(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Fo),t.addEventListener("click",Vo),n.addEventListener("click",Wo),o.addEventListener("click",Zo),i.addEventListener("click",Xo)}function Fo(){Ve()}function Vo(){Fe()}function Wo(){ie()}function Zo(){Ke()}function Xo(){Jo()}function be(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function q(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=g.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=g.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=g.icons_loop_song;return}}function F(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=g.icons_pause;return}if(e=="paused"){t.src=g.icons_play;return}}function ei(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){ot(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",ti)})}function ti(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;ot(n)}function ot(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let c=s[a];c!=i&&(document.getElementById(c).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function ni(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}const oi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,ii=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function si(){setTimeout(()=>{let e="MAINcontentPages",t=ii;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",ai)},1)}async function ai(e){console.log("the signup event was caught"),e.preventDefault(),ci();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)i.type==="email"&&(n[i.name]=i.value);const o=await fetch(`${C}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const i=await o.json();n.token=i.token;for(const a of t.elements)if(a.type==="file"){const c=a.files[0];if(c){const r=await convertImageToBase64(c);n[a.name]=r}}else n[a.name]=a.value;const s=await fetch(`${C}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(s.ok){const a=await s.json();ce(),ri(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const a=await s.json();alert("There was an error, try again")}}else{const i=await o.json(),s="There was an error with the email, check that the details are correct.";ce(),he(),alert(s)}}catch{ce(),he(),alert("There was an error, try again")}}function ci(){const e=document.getElementById("spinner");e.style.display="block"}function ce(){const e=document.getElementById("spinner");e.style.display="none"}function ri(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function he(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}let ne=!1,Ie=!1,Ce=!1,we=!1;async function li(){await mi()?it():Ie||(di(),Ie=!0)}function di(){pi();const e=document.getElementById("SETTINGSmodalSignupButton");let t;fetch(`${C}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{t=s.signups_allowed,t==="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{console.log("signup button was pressed"),Le(),si()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),o=document.getElementById("email"),i=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),ne)return!1;ne=!0;const a=o.value,c=i.value;try{await ui(a,c)?(we=!0,gi(),it(),setTimeout(Le,2e3)):(we=!1,_i(),console.log("Login failed. Retry!")),ne=!1}catch(r){console.error("Error:",r),ne=!1}return!1})}async function ui(e,t){try{const o=await(await fetch(`${C}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function mi(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${C}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function pi(){let e="MAINcontentPages",t=oi;document.getElementById(e).innerHTML+=t}function Le(){if(Ce===!0)return;Ce=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}function gi(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function _i(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const fi=`<!-- audio tag -->
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
</div>`;const C="MAIN_API_DOMAIN",E="MAIN_MEDIA_DOMAIN";async function it(){Go(),an(),cn(),Bo(),Ko(),ni(),ei(),so(),vo(),Ln()}let ue=fi;for(const[e,t]of Object.entries(g)){const n=new RegExp(`\\{${e}\\}`,"g");ue=ue.replace(n,t)}document.getElementById("app").innerHTML=ue;li();
