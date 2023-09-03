(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const X=`<!-- audio tag -->
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
    <div class="topHalf MATERIAL-blur-1">
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
</main>`,ee=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2 MATERIAL-blur-22">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
    <div class="topleft-button-containers">
        <div class="topleft-button-containersL2">
            <button class="topleft-button-container-button" id="TOPLEFT_homeButton">
                <div>
                    Home
                </div>
            </button>
            <!--
            <div class="topleft-button-container-button"></div>
            <div class="topleft-button-container-button"></div>-->
        </div>
    </div>
</div>`,te=`<div class="TOPRIGHT-topHalf-right-content">
    <!-- playback controls -->
    <div class="TOPRIGHT-playbackcontrols-container">
        <div class="TOPRIGHT-playbackcontrols-displacement">
            <!-- shuffle -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERshuffleButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_shuffleButton}" alt="shuffle icon" height="12" />
                </div>
            </div>
            <!-- last -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERbackButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_backButton}" alt="back icon" height="13" />
                </div>
            </div>
            <!-- play -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERplayButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_playButtonV2}" alt="play icon" height="18" id="PLAYERplayIcon" />
                </div>
            </div>
            <!-- next -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERnextButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_nextButton}" alt="next icon" height="13" />
                </div>
            </div>
            <!-- loop -->
            <div class="TOPRIGHT-svg-image-buttons-relative-container" id="PLAYERloopButton">
                <div class="TOPRIGHT-svg-image-buttons-absolute-container">
                    <img src="{icons_loopButton}" alt="loop icon" height="12" id="PLAYERloopIcon" />
                </div>
            </div>
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
                <div class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                </div>
            </div>
            <div class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg">
                </div>
            </div>
        </div>
    </div>
</div>`,ne=`<div class="QUEUE-environment" id="QUEUEenvironment">
    <div class="QUEUE-container-pointer"></div>
    <div class="QUEUE-container MATERIAL-blur-1 ">
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
</div>`,oe="/assets/volume_null-e39cf06f.svg",ie="/assets/recently_added-a0a983c6.svg",se="/assets/volume_3-c8ab0a75.svg",ce="/assets/orange_music_text_logo_black-12e7386c.svg",re="/assets/volume_2-cfdac9da.svg",ae="/assets/browse_2-85030bba.svg",le="/assets/volume_1-27e93416.svg",de="/assets/orange_music_logo_white-2a680ea2.svg",ue="/assets/search_icon-4f5e4381.svg",me="/assets/orange_music_text_logo_black-91f9e706.png",pe="/assets/up_next_queue_button-14fedba2.svg",ge="/assets/orange_music_logo_yellow-a109ff64.svg",ve="/assets/playlist-c6e9024f.svg",fe="/assets/loop_button-aef56865.svg",Ee="/assets/help_icon-867fec9d.svg",Te="/assets/play_button-b1e2d3a4.svg",ye="/assets/browse-14744f27.svg",Y="/assets/menu_options_button-a1d7bbe3.svg",Ie="/assets/orange_music_text_logo_white-7f0ba909.svg",Ce="/assets/back_button-8128cade.svg",he="/assets/Albums-2e81dc74.svg",_e="/assets/songs-016b7188.svg",we="/assets/orange_music_logo_black-4d7e4591.svg",Oe="/assets/your_uploaded_songs-06535705.svg",be="/assets/artist-ab677d43.svg",Le="/assets/shuffle_button-c2f06bc4.svg",Pe="/assets/orange_music_text_logo_white-4907051e.png",Me="/assets/listen_now-c7438154.svg",Re="/assets/derpy-21c20ae5.svg",Be="/assets/next_button-9a850710.svg",je="/assets/recently_added-7ff28139.svg",xe="/assets/play_button-5eeedbe6.svg",Se="/assets/browse-e8be8609.svg",De="/assets/albums-681507b8.svg",Ne="/assets/listen_now.2-bfa293ac.svg",Ae="/assets/your_uploads-02e5c93c.svg",ke="/assets/play_button.2-fc90fac7.svg",Je="/assets/listen_now-fb02ffce.svg",Ge="/assets/browse.2-15b501dd.svg",Ue="/assets/place_holder_image-d4006a96.svg",He="/assets/icons_MOGitems_add-19e679f7.svg",f={icons_volumeNull:oe,icons_recentlyAdded:ie,icons_volume3:se,icons_orangeMusicTextLogoBlack:ce,icons_volume2:re,icons_browse2:ae,icons_volume1:le,icons_orangeMusicLogoWhite:de,icons_searchIcon:ue,icons_orangeMusicTextLogoBlackPng:me,icons_queueButton:pe,icons_orangeMusicLogoYellow:ge,icons_playlist:ve,icons_loopButton:fe,icons_helpIcon:Ee,icons_playButton:Te,icons_browse:ye,icons_menuOptionsButton:Y,icons_orangeMusicTextLogoWhite:Ie,icons_backButton:Ce,icons_Albums:he,icons_songs:_e,icons_orangeMusicLogoBlack:we,icons_yourUploadedSongs:Oe,icons_artist:be,icons_shuffleButton:Le,icons_orangeMusicTextLogoWhitePng:Pe,icons_listenNow:Me,icons_derpy:Re,icons_nextButton:Be,icons_recentlyAddedV2:je,icons_playButtonV2:xe,icons_browseV2:Se,icons_albumsV2:De,icons_listenNow2V2:Ne,icons_yourUploads:Ae,icons_playButton2:ke,icons_listenNowV2:Je,icons_browse2V2:Ge,v3_placeholder:Ue,icons_MOGitems_add:He};function Ye(){let e="topleftContentArea",t=ee;for(const[n,o]of Object.entries(f)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ze(){let e="toprightContentArea",t=te;for(const[n,o]of Object.entries(f)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Qe(){let e="MAINcontentContainer",t=ne;for(const[n,o]of Object.entries(f)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const qe=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,$e='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',Ve=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`,We=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_derpy}" height="16" width="16">
            </button>
        </div>
        <div class="PROJECTviewMobileStickyHeaderMenuButton">
            <button id="PROJECTviewMobileStickyHeaderMenuButton">
                <img src="{icons_menuOptionsButton}" height="16" width="14">
            </button>
        </div>
    </div>
    <div class="PROJECTviewContainer">
        <div class="PROJECTview-topContainer">
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplayImage PROJECTviewTopItem-1">
                <img src="https://picsum.photos/300">
            </div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplaySpacer PROJECTviewTopItem-3 "></div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplaySpacer PROJECTviewTopItem-4 "></div>
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplayTitle PROJECTviewTopItem-2 ">
                <h1 contenteditable="true" id="PROJECTviewDisplayTitleH1">{PROJECTviewMOREtitle}</h1>
                <h3 contenteditable="false" id="PROJECTviewDisplayTitleH3">{PROJECTviewMOREartist}</h3>
            </div>
            <div class=" PROJECTviewDisplayDescription PROJECTviewTopItem-5 ">
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
                <img src="{icons_derpy}" width="20" height="20">
            </button>
            <div class="PROJECTviewMOREdescriptionHeaderContainer">
                <h1>{PROJECTviewMOREtitle}</h1>
                <h3>{PROJECTviewMOREartist} . {PROJECTviewMOREyear}</h3>
            </div>
            <div class="PROJECTviewMOREdescriptionContentContainer" contenteditable="true" id="PROJECTviewMOREdescriptionC">
                <textarea id="PROJECTviewMOREdescriptionP"></textarea>
            </div>
        </div>
    </div>
</div>`,Fe=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Ke=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function Ze(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},c=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;w(c)}catch(e){console.error("Error:",e)}}async function x(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function z(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function Xe(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await x(o);i.project_id=o,t(i),tt(i)},1);function t(n){nt(n);const o=n.description;sessionStorage.setItem("description",o),ot(),it(),ct(),rt(n),at(n),ut(n),gt(n)}}function et(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function tt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const o=t.innerText;console.log("Content changed:",o),z(e.project_id,"project_name",o)})}function nt(e){let t="MAINcontentPages",n=We;for(const[i,c]of Object.entries(f)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,c)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear"];for(let i=0;i<o.length;i++){const c=o[i].toString(),s=new RegExp(`\\{${c}\\}`,"g");let r="";c==="PROJECTviewMOREtitle"?r=e.project_name:c==="PROJECTviewMOREartist"?r=e.project_contributors:c==="PROJECTviewMOREyear"?r=e.time_created:c==="MOG_checkedDate"?r="checkedIndicator":c==="MOGI_placeholder_itemID"&&(r="temporaryIidentifier"),n=n.replace(s,r)}document.getElementById(t).innerHTML=n}function ot(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){R()})}}const t=e();window.addEventListener("resize",t),R()}function R(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const o=document.getElementById("PROJECTviewDescriptionP"),c=e.split(" "),s=[];o.textContent="";for(const p of c){const g=document.createElement("span");g.textContent=p+" ",o.appendChild(g);const v=g.getBoundingClientRect(),I=o.getBoundingClientRect();if(v.bottom<=I.bottom&&v.top>=I.top&&v.left>=I.left&&v.right<=I.right)s.unshift(p);else break}const l=s.reverse().join(" "),d=l.slice(-10),a=l.slice(0,-10),m=d.split("");let u=a;for(let p=0;p<m.length;p++){const g=m[p],v=`<span class="PROJECTopacity${9-p}">${g}</span>`;u=u+v}o.innerHTML=u}function it(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");e.addEventListener("click",function(){t.style.display="grid"})}function st(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function ct(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function rt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){S(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&S(e)})}function S(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),z(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",st(),R()}async function at(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),c=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),s=await x(e.project_id);t.addEventListener("click",function(){V(s)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){D(event)}),i.addEventListener("click",function(){D(event)}),c.addEventListener("click",()=>{w("/")})}function D(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");b([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(180, 100%, 80%)"}],e)}function lt(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),dt(e),N(),w("/")):N()}async function dt(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(i)}catch(t){console.error("Error:",t)}}function ut(e){document.getElementById("PROJECTview_projectAreaContainer"),pt();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,c=[];for(const s of i)c.push({img:n.picture_url,songTitle:s.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(s.duration/60)}:${(s.duration%60).toString().padStart(2,"0")}`,song_sequence:s.song_sequence,url:s.url});for(let s=0;s<c.length;s++){c[s].projectID=s;const r=c[s];q(r)}t.addEventListener("click",function(s){const r=s.target;if(s.stopPropagation(),r.tagName==="BUTTON"){const l=r.closest(".PROJECTview-projectTable-rowContainer");if(l){const d=l.getAttribute("data-row-id");Q(s),console.log(`Button in row ${d} clicked.`)}}})}}async function mt(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await x(n);o.project_id=n;const i=o,c=i.project_json,s=JSON.parse(c).songs_json,r=[];for(const a of s)r.push({img:i.picture_url,songTitle:a.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});const l=document.getElementById("PROJECTview-projectTable"),d=l.children;for(let a=d.length-1;a>0;a--)l.removeChild(d[a]);for(let a=0;a<r.length;a++){r[a].projectID=a;const m=r[a];q(m)}e.addEventListener("click",function(a){const m=a.target;if(a.stopPropagation(),m.tagName==="BUTTON"){const u=m.closest(".PROJECTview-projectTable-rowContainer");if(u){const p=u.getAttribute("data-row-id");Q(a),console.log(`Button in row ${p} clicked.`)}}})}function Q(e){e.stopPropagation(),e.target,b([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function pt(){let e="PROJECTview_projectAreaContainer",t=Fe;for(const[n,o]of Object.entries(f)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function q(e){let t="PROJECTview-projectTable",n=Ke;for(const[i,c]of Object.entries(f)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,c)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const c=o[i].toString(),s=new RegExp(`\\{${c}\\}`,"g");let r="";c==="PROJECTviewRow_img"?r=e.img:c==="PROJECTviewRow_songTitle"?r=e.songTitle:c==="PROJECTviewRow_artistName"?r=e.artistName:c==="PROJECTviewRow_projectName"?r=e.projectName:c==="PROJECTviewRow_songDuration"?r=e.songDuration:c==="PROJECTviewRow_projectID"&&(r=e.projectID),n=n.replace(s,r)}document.getElementById(t).innerHTML+=n}function gt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const c of o);ft(o,i)}}async function vt(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const c=localStorage.getItem("JWT");i.append("jwt",c);const s=new XMLHttpRequest,r=document.createElement("div");r.classList.add("progress-bar");const l=document.createElement("div");l.classList.add("progress-fill"),r.appendChild(l),t.appendChild(r),s.upload.onprogress=function(d){if(d.lengthComputable){const a=d.loaded/d.total*100;l.style.width=a+"%",a===100&&r.classList.add("opacity-animation")}},s.onload=function(){r.classList.remove("opacity-animation"),r.style.opacity="1",l.classList.add("complete"),n.textContent=`${e.name}`,mt(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.onerror=function(){r.classList.remove("opacity-animation"),r.style.opacity="1",l.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.open("POST",`${h}/files/upload/audio/`,!0),s.send(i)}async function ft(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const c=document.createElement("div");c.classList.add("PROJECTview_upload_nameLabel"),c.textContent=`${o.name}`,i.appendChild(c),n.appendChild(i),await vt(o,i,c,t)}}function b(e,t){const n=t.clientX,o=t.clientY,i=document.getElementById("MENUmodalEnvironment");i.innerHTML=$e,i.style.display="block";const c=document.getElementById("MENUmodalBody");i.addEventListener("click",yt);let s=n+"px",r=o+"px";c.style.left=s,c.style.top=r;for(let u=0;u<e.length;u++)Tt(e[u]);const l=c.offsetWidth,d=c.offsetHeight,a=Et("MENUmodalBody");a.xOverflow==!0&&(s=n-l+"px",c.style.left=s),a.yOverflow==!0&&(r=o-d+"px",c.style.top=r);const m=c.getElementsByClassName("MENUmodalItemContainer");for(let u=0;u<m.length;u++){const p=m[u];p.setAttribute("data-menu-item-id",u),p.addEventListener("click",function(g){g.stopPropagation();const I=g.target.getAttribute("data-menu-item-id"),C=e[I].function,Z=e[I].optionalParams;if(C=="TEST")console.log("the button worked");else if(C!="None"){It[C](Z);return}else return})}}function Et(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,c=t.getBoundingClientRect().left,s=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,l=i+c,d=r+s;let a=!1,m=!1;return l>n&&(a=!0),d>o&&(m=!0),{xOverflow:a,yOverflow:m}}function Tt(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:o="white";const i=document.getElementById("MENUmodalBody");let c=new RegExp("\\{MENU_item_text\\}","g"),s=Ve.replace(c,t);if(c=new RegExp("\\{MENU_item_colour\\}","g"),s=s.replace(c,o),n!=="None"){c=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";s=s.replace(c,r);for(const[l,d]of Object.entries(f)){const a=new RegExp(`\\{${l}\\}`,"g");s=s.replace(a,d)}i.innerHTML+=s;return}else{s=s.replace(/<img[^>]+>/g,""),i.innerHTML+=s;return}}function yt(e){const t=document.getElementById("MENUmodalEnvironment");if(e.target===t){t.style.display="none";return}}function N(){const e=document.getElementById("MENUmodalEnvironment");e.style.display="none"}const It={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){lt(e)}};let _="hidden";function Ct(){Qe();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");B(_),e.addEventListener("click",ht),t.addEventListener("click",_t),L()}function ht(){if(_==="hidden"){_="visible",B(_);return}if(_==="visible"){_="hidden",B(_);return}}function B(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function L(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=E+1;t<y.length;t++){y[t].id=t;const n=y[t],o=Mt(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){const d=r.target.dataset.songId;A(d)}),i.dataset.songId=n.id,i.addEventListener("click",A),i.dataset.songId=n.id;const c=i.querySelector(".QUEUE-item-image-removeIndicator");c.addEventListener("click",Lt),c.dataset.songID=n.id;const s=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.dataset.songSet=n.id,s.addEventListener("click",function(r){r.target===s&&Pt(r)}),i.addEventListener("dragstart",wt),i.addEventListener("dragover",Ot),i.addEventListener("drop",bt),e.appendChild(i)}}function _t(){songs=[],L()}function wt(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Ot(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function bt(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=songs.find(r=>r.id===parseInt(t)),i=songs.find(r=>r.id===parseInt(n.dataset.songId)),c=songs.indexOf(o),s=songs.indexOf(i);c!==-1&&s!==-1&&(songs.splice(c,1),songs.splice(s,0,o),L())}function Lt(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID);songs=songs.filter(o=>o.id!==n),console.log("Clicked remove indicator for song ID:",n),L()}function Pt(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];b(o,e)}function A(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function Mt(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,c=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let s=qe;for(let d=0;d<t.length;d++){const a=t[d].toString(),m=new RegExp(`\\{${a}\\}`,"g");let u="";a==="QUEUE_item_image"?u=n:a==="QUEUE_item_title"?u=o:a==="QUEUE_item_artist"?u=i:a==="icons_menuOptionsButton"?u=Y:a==="QUEUE_item_timeIndicator"&&(u=c),s=s.replace(m,u)}s=s.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.innerHTML=s,r.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),r.innerHTML}const Rt=`<div class="LCDbody">
    <div class="LCDcontentContainer MATERIAL-blur-22">
        <div class="LCDleftImage">
            <img src="{v3_placeholder}">
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
            <img src="{v3_placeholder}">
        </div>
        <div class="LCDtitleTextMobile" id="LCDtitleTextMobile">{LCD_titleText_placeholder}</div>
    </div>
</div>`;function Bt(){jt(),$(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){xt(t)}),St()}function jt(){let e="LCDbody",t=Rt;for(const[o,i]of Object.entries(f)){const c=new RegExp(`\\{${o}\\}`,"g");t=t.replace(c,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),c=new RegExp(`\\{${i}\\}`,"g");let s="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(s=""),t=t.replace(c,s)}document.getElementById(e).innerHTML=t}function $(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let l,d,a;e=n.clientWidth,d=c(),a=e/o,a>d?l=d+10:l=a,t.style.width=l+"px"}function c(){const l=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=l.textContent,document.body.appendChild(d);const a=d.offsetWidth;return document.body.removeChild(d),a}function s(){let l;return function(){cancelAnimationFrame(l),l=requestAnimationFrame(i)}}const r=s();window.addEventListener("resize",r),i()}function xt(e){e.stopPropagation(),e.target,b([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function St(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Dt)})}function Dt(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ht(n)}function Nt(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let y=[],E=0;document.getElementById("audio");document.getElementById("PLAYERsource");let T="off";function k(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function V(e){y=[],E=0;const t=e.project_contributors,n=e.project_name,o=e.picture_url,i=JSON.parse(e.project_json).songs_json;for(const c of i){const s=c.song_name,r=c.duration,l=c.url;y.push({img:o,song_name:s,url:l,duration:r,project_name:n,project_contributors:t})}O()}function At(){console.log("play clicked"),kt()}function kt(){const e=document.getElementById("audio");e.paused?(console.log("audio is paused"),j("playing"),e.play()):(console.log("audio is playing"),j("paused"),e.pause())}function Jt(){qt()}function Gt(){$t()}function Ut(){document.getElementById("audio").addEventListener("ended",Qt)}function Ht(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Yt(){Vt()}function O(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),c=document.documentElement,s=document.getElementById("LCDseekBar");t.src=`${F}/${y[E].url}/3/`,e.load(),e.play(),n.innerHTML=y[E].song_name,o.innerHTML=y[E].song_name,i.innerHTML=y[E].project_contributors,$(),L(),j("playing"),e.addEventListener("timeupdate",()=>{const r=e.duration,l=e.currentTime,d=Math.floor(r)-l,a=`"-${k(d)}"`,u=`"${k(Math.floor(l))}"`,p=l/r*100,g=`${p}%`;Nt(u,a),c.style.setProperty("--LCD-seekbar-width",g),c.style.setProperty("--LCD-seekbar-indicator-left",g),s.value=p})}function zt(){console.log("PLAYBACK_stop_playback, clear top")}function Qt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=y.length;e.pause(),t>E+1&&(T=="off"||T=="on")?(E+=1,O()):T=="song"?O():t==E+1&&T=="on"?(E=0,O()):zt()}function qt(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),y.length>E+1&&(e.paused||e.pause(),E+=1,O())}function $t(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),y.length,E>0&&(e.pause(),E-=1,O())}function Vt(){T=="off"?(T="on",M(T)):T=="on"?(T="song",M(T)):(T="off",M(T))}function Wt(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",Ft),t.addEventListener("click",Kt),n.addEventListener("click",Zt),o.addEventListener("click",Xt),i.addEventListener("click",en)}function Ft(){console.log("shuffleClicked")}function Kt(){Gt()}function Zt(){At()}function Xt(){Jt()}function en(){Yt()}function M(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=f.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=f.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=f.icons_derpy;return}}function j(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=f.icons_derpy;return}if(e=="paused"){t.src=f.icons_playButtonV2;return}}function tn(){document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(t=>{t.addEventListener("input",nn)})}function nn(e){function t(s,r,l){return s>=r&&s<=l}function n(s){const r=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let l=0;l<4;l++){let d=r[l];d!=s&&(document.getElementById(d).style.visibility="hidden")}document.getElementById(s).style.visibility="visible"}let o=e.target;e.target.type!=="range"&&(o=document.getElementById("volumeRangeSlider"));const i=o.value,c=document.getElementById("audio");if(c.volume=i/100,t(i,0,1)){n("volumeControlZero"),c.volume=0;return}if(t(i,2,33)){n("volumeControlOne");return}if(t(i,34,66)){n("volumeControlTwo");return}if(t(i,67,100)){n("volumeControlThree");return}}function on(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const c=t.value;console.log(c),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"}),document.getElementById("TOPLEFT_homeButton").addEventListener("click",()=>{w("/")})}async function sn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await cn(),n=`${F}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",rn)}catch(t){console.error("Error initializing account image:",t)}}async function cn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${h}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function rn(e){e.stopPropagation(),an(e)}function an(e){b([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const ln=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,dn=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
        <div class="MOG-item-controlsContainer">
            <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play MATERIAL-blur-3">
                <img src="{icons_playButtonV2}">
            </div>
            <div id="MOGImenuButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-menu MATERIAL-blur-3">
                <img src="{icons_menuOptionsButton}">
            </div>
        </div>
    </div>
    <div class="MOG-itemTextContainer">
        <div class="MOG-itemTextTop">{MOG_text1}</div>
        <div class="MOG-itemTextBottom">{MOG_text2}</div>
        <div class="MOG-itemCheckedDate">{MOG_checkedDate}</div>
    </div>
</div>`,un=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function mn(){try{const e=document.getElementById("MAINcontentPages");vn();const t=await gn();fn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function pn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",W),e.innerHTML=""}async function gn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(s=>({img:s.picture_url,top:s.project_name,bottom:s.project_contributors,days:s.time_created,project_id:s.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function vn(){let e="MAINcontentPages",t=ln;for(const[n,o]of Object.entries(f)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function fn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=un;for(const[s,r]of Object.entries(f)){const l=new RegExp(`\\{${s}\\}`,"g");n=n.replace(l,r)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let s=dn;const r=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,d=e[i].img,a=e[i].top,m=e[i].bottom,u=e[i].days,p=yn(u);for(const[g,v]of Object.entries(f)){const I=new RegExp(`\\{${g}\\}`,"g");s=s.replace(I,v)}for(let g=0;g<r.length;g++){const v=r[g].toString(),I=new RegExp(`\\{${v}\\}`,"g");let C="";v==="MOG_image"?C=d:v==="MOG_text1"?C=a:v==="MOG_text2"?C=m:v==="MOG_checkedDate"?C=p:v==="MOGI_placeholder_itemID"&&(C=l),s=s.replace(I,C)}t.innerHTML+=s}document.getElementById("MOGcontainer").addEventListener("click",function(s){W(s,e)})}async function En(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function W(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,c=await En(i);V(c)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1];t[o].project_id,Tn(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;w(`/projects/${i}`)}else n.id==="MOGaddNewItem"&&In()}function Tn(e){e.stopPropagation(),e.target,b([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function yn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function In(){w("/new-project/")}const Cn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer MATERIAL-blur-3">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
        </form>
        <div class="SETTINGSrandomImage">
            <img src="https://picsum.photos/400">
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
</div>`;let P=!1,J=!1,G=!1;async function hn(){await On()?K():G||(_n(),G=!0)}function _n(){bn();const e=document.getElementById("SETTINGSloginForm"),t=document.getElementById("email"),n=document.getElementById("password");e.addEventListener("submit",async o=>{if(o.preventDefault(),P)return!1;P=!0;const i=t.value,c=n.value;try{await wn(i,c)?(J=!0,Pn(),K(),setTimeout(Ln,2e3)):(J=!1,Mn(),console.log("Login failed. Retry!")),P=!1}catch(s){console.error("Error:",s),P=!1}return!1})}async function wn(e,t){try{const o=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function On(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function bn(){let e="MAINcontentPages",t=Cn;document.getElementById(e).innerHTML+=t}let U=!1;function Ln(){if(U===!0)return;document.getElementById("SETTINGSmodalID").remove(),U=!0}function Pn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Mn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="https://om2apis.la0.uk",F="https://om2media.la0.uk";function K(){Ut(),Ye(),ze(),Bt(),Wt(),on(),tn(),sn(),Ct();function e(){const t=window.location.pathname;w(t)}window.addEventListener("popstate",e),e()}function Rn(){et(),mn()}function Bn(e){pn(),Xe()}const H={"/":Rn,"/new-project/":Ze,"/projects/:projectID":Bn};function jn(){console.log("notFoundHandler")}function w(e){const t=Object.keys(H);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const c=H[n],s=i.slice(1);c(...s),e!=="/new-project/"&&history.pushState({},"",e);return}}jn()}document.getElementById("app").innerHTML=X;hn();
