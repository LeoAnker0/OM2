(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const le=`<!-- audio tag -->
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
</main>`,de=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2 MATERIAL-blur-22">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
    <div class="topleft-button-containers">
        <div class="topleft-button-containersL2">
            <!--
            <button class="topleft-button-container-button" id="TOPLEFT_homeButton">
                <div>
                    Home
                </div>
            </button>
            <div class="topleft-button-container-button"></div>
            <div class="topleft-button-container-button"></div>-->
        </div>
    </div>
</div>`,ue=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,me=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,pe="/assets/volume_null-e39cf06f.svg",ge="/assets/recently_added-a0a983c6.svg",ve="/assets/volume_3-c8ab0a75.svg",fe="/assets/orange_music_text_logo_black-12e7386c.svg",Ee="/assets/volume_2-cfdac9da.svg",ye="/assets/browse_2-85030bba.svg",Te="/assets/volume_1-27e93416.svg",_e="/assets/orange_music_logo_white-2a680ea2.svg",Ie="/assets/search_icon-4f5e4381.svg",he="/assets/orange_music_text_logo_black-91f9e706.png",Ce="/assets/up_next_queue_button-14fedba2.svg",we="/assets/orange_music_logo_yellow-a109ff64.svg",be="/assets/playlist-c6e9024f.svg",Le="/assets/loop_button-aef56865.svg",Oe="/assets/help_icon-867fec9d.svg",Pe="/assets/play_button-b1e2d3a4.svg",Me="/assets/browse-14744f27.svg",V="/assets/menu_options_button-a1d7bbe3.svg",Be="/assets/orange_music_text_logo_white-7f0ba909.svg",Re="/assets/back_button-8128cade.svg",je="/assets/Albums-2e81dc74.svg",xe="/assets/songs-016b7188.svg",Se="/assets/orange_music_logo_black-4d7e4591.svg",Ne="/assets/your_uploaded_songs-06535705.svg",De="/assets/artist-ab677d43.svg",Ae="/assets/shuffle_button-c2f06bc4.svg",ke="/assets/orange_music_text_logo_white-4907051e.png",Je="/assets/listen_now-c7438154.svg",Ue="/assets/derpy-21c20ae5.svg",Ge="/assets/next_button-9a850710.svg",He="/assets/recently_added-7ff28139.svg",$e="/assets/play_button-5eeedbe6.svg",Ye="/assets/browse-e8be8609.svg",ze="/assets/albums-681507b8.svg",qe="/assets/listen_now.2-bfa293ac.svg",Qe="/assets/your_uploads-02e5c93c.svg",Ve="/assets/play_button.2-fc90fac7.svg",Fe="/assets/listen_now-fb02ffce.svg",We="/assets/browse.2-15b501dd.svg",Ke="/assets/place_holder_image-d4006a96.svg",Ze="/assets/icons_MOGitems_add-19e679f7.svg",y={icons_volumeNull:pe,icons_recentlyAdded:ge,icons_volume3:ve,icons_orangeMusicTextLogoBlack:fe,icons_volume2:Ee,icons_browse2:ye,icons_volume1:Te,icons_orangeMusicLogoWhite:_e,icons_searchIcon:Ie,icons_orangeMusicTextLogoBlackPng:he,icons_queueButton:Ce,icons_orangeMusicLogoYellow:we,icons_playlist:be,icons_loopButton:Le,icons_helpIcon:Oe,icons_playButton:Pe,icons_browse:Me,icons_menuOptionsButton:V,icons_orangeMusicTextLogoWhite:Be,icons_backButton:Re,icons_Albums:je,icons_songs:xe,icons_orangeMusicLogoBlack:Se,icons_yourUploadedSongs:Ne,icons_artist:De,icons_shuffleButton:Ae,icons_orangeMusicTextLogoWhitePng:ke,icons_listenNow:Je,icons_derpy:Ue,icons_nextButton:Ge,icons_recentlyAddedV2:He,icons_playButtonV2:$e,icons_browseV2:Ye,icons_albumsV2:ze,icons_listenNow2V2:qe,icons_yourUploads:Qe,icons_playButton2:Ve,icons_listenNowV2:Fe,icons_browse2V2:We,v3_placeholder:Ke,icons_MOGitems_add:Ze};function Xe(){let e="topleftContentArea",t=de;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function et(){let e="toprightContentArea",t=ue;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function tt(){let e="MAINcontentContainer",t=me;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const nt=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,ot='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',it=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;async function st(e,t){const n=new XMLHttpRequest,o=new FormData,i=localStorage.getItem("JWT");o.append("file",e),o.append("project_id",t),o.append("jwt",i),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){Nt()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${w}/files/upload/photo/`,!0),n.send(o)}async function ct(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await st(n,t)}const at=`<div class="PROJECTviewContainerEnvironment">
    <div class="PROJECTviewMobileStickyHeader" id="PROJECTviewMobileStickyHeader">
        <div class="PROJECTviewMobileStickyHeaderBackButton">
            <button id="PROJECTviewMobileStickyHeaderBackButton">
                <img src="{icons_derpy}" height="16" width="16">
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
                <h3 contenteditable="false" id="PROJECTviewDisplayTitleH3">{PROJECTviewMOREartist}</h3>
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
</div>`,rt=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,lt=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function dt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${w}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;B(s)}catch(e){console.error("Error:",e)}}async function x(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${w}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function F(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${w}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function ut(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await x(o);i.project_id=o,t(i),gt(i)},1);function t(n){vt(n);const o=n.description;sessionStorage.setItem("description",o),ft(),Et(),Tt(),_t(n),It(n),wt(n),Lt(n),Mt(),X(n.project_name),Bt(n.project_id)}}function mt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function pt(){W();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),i=(await x(t)).picture_url,s=`${I}/${i}/4/`;n.src=s}function gt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const o=t.innerText;X(o),F(e.project_id,"project_name",o)})}function vt(e){let t="MAINcontentPages",n=at;for(const[i,s]of Object.entries(y)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewMOREtitle"?r=e.project_name:s==="PROJECTviewMOREartist"?r=e.project_contributors:s==="PROJECTviewMOREyear"?r=e.time_created:s==="MOG_checkedDate"?r="checkedIndicator":s==="MOGI_placeholder_itemID"?r="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(r=`${I}/${e.picture_url}/4/`),n=n.replace(c,r)}document.getElementById(t).innerHTML=n}function ft(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){N()})}}const t=e();window.addEventListener("resize",t),N()}function N(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const o=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),c=[];o.textContent="";for(const f of s){const T=document.createElement("span");T.textContent=f+" ",o.appendChild(T);const g=T.getBoundingClientRect(),v=o.getBoundingClientRect();if(g.bottom<=v.bottom&&g.top>=v.top&&g.left>=v.left&&g.right<=v.right)c.unshift(f);else break}const a=c.reverse().join(" "),d=a.slice(-10),l=a.slice(0,-10),m=d.split("");let p=l;for(let f=0;f<m.length;f++){const T=m[f],g=`<span class="PROJECTopacity${9-f}">${T}</span>`;p=p+g}o.innerHTML=p}function Et(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");function s(){n.style.display="grid",i.matches&&(o.style.zIndex="40")}e.addEventListener("click",function(){s()}),t.addEventListener("dblclick",function(){s()});let c=0;t.addEventListener("touchend",function(r){const a=new Date().getTime();a-c<300&&(r.stopPropagation(),s()),c=a})}function yt(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Tt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function _t(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){U(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&U(e)})}function U(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),F(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",yt(),N();const i=document.querySelector("main");i.style.zIndex="1"}async function It(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),c=await x(e.project_id);t.addEventListener("click",function(){ne(c)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){G(event)}),i.addEventListener("click",function(){G(event)}),s.addEventListener("click",()=>{B("/")})}function G(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(180, 100%, 80%)"}],e)}function ht(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Ct(e),D(),B("/")):D()}async function Ct(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${w}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(i)}catch(t){console.error("Error:",t)}}function wt(e){document.getElementById("PROJECTview_projectAreaContainer"),bt();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,s=[];for(const c of i)s.push({img:n.picture_url,songTitle:c.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(c.duration/60)}:${(c.duration%60).toString().padStart(2,"0")}`,song_sequence:c.song_sequence,url:c.url});for(let c=0;c<s.length;c++){s[c].projectID=c;const r=s[c];Z(r)}t.addEventListener("click",function(c){const r=c.target;if(c.stopPropagation(),r.tagName==="BUTTON"){const a=r.closest(".PROJECTview-projectTable-rowContainer");if(a){const d=a.getAttribute("data-row-id");K(c),console.log(`Button in row ${d} clicked.`)}}})}}async function W(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await x(n);o.project_id=n;const i=o,s=i.project_json,c=JSON.parse(s).songs_json,r=[];if(Array.isArray(c))for(const l of c)r.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const a=document.getElementById("PROJECTview-projectTable"),d=a.children;for(let l=d.length-1;l>0;l--)a.removeChild(d[l]);for(let l=0;l<r.length;l++){r[l].projectID=l;const m=r[l];Z(m)}e.addEventListener("click",function(l){const m=l.target;if(l.stopPropagation(),m.tagName==="BUTTON"){const p=m.closest(".PROJECTview-projectTable-rowContainer");if(p){const f=p.getAttribute("data-row-id");K(l),console.log(`Button in row ${f} clicked.`)}}})}function K(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function bt(){let e="PROJECTview_projectAreaContainer",t=rt;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Z(e){let t="PROJECTview-projectTable",n=lt;for(const[i,s]of Object.entries(y)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let r="";s==="PROJECTviewRow_img"?r=`${I}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?r=e.songTitle:s==="PROJECTviewRow_artistName"?r=e.artistName:s==="PROJECTviewRow_projectName"?r=e.projectName:s==="PROJECTviewRow_songDuration"?r=e.songDuration:s==="PROJECTviewRow_projectID"&&(r=e.projectID),n=n.replace(c,r)}document.getElementById(t).innerHTML+=n}function Lt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Pt(o,i)}}async function Ot(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const c=new XMLHttpRequest,r=document.createElement("div");r.classList.add("progress-bar");const a=document.createElement("div");a.classList.add("progress-fill"),r.appendChild(a),t.appendChild(r),c.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;a.style.width=l+"%",l===100&&r.classList.add("opacity-animation")}},c.onload=function(){r.classList.remove("opacity-animation"),r.style.opacity="1",a.classList.add("complete"),n.textContent=`${e.name}`,W(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.onerror=function(){r.classList.remove("opacity-animation"),r.style.opacity="1",a.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.open("POST",`${w}/files/upload/audio/`,!0),c.send(i)}async function Pt(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i),await Ot(o,i,s,t)}}function X(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Mt(){const e=new IntersectionObserver(s,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.observe(t);function s(c,r){c.forEach(a=>{i.matches&&console.log("media query matches"),a.isIntersecting&&i.matches?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):a.isIntersecting&&!i.matches||!a.isIntersecting&&!i.matches?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!a.isIntersecting&&i.matches&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",o.style.visibility="visible")})}}function Bt(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i,e)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i,e)});function o(i,s){Rt(i,s)}}function Rt(e,t){e.stopPropagation(),e.target,O({project_id:t},e,"update_project_image")}const jt=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`;function O(e,t,n){n===void 0&&xt(e,t),n!==void 0&&n==="update_project_image"&&St(e,t)}function xt(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(i.style.zIndex="40",s.style.zIndex="0");const r=document.getElementById("MENUmodalEnvironment");r.innerHTML=ot,r.style.display="block";const a=document.getElementById("MENUmodalBody");r.addEventListener("click",ee);let d=n+"px",l=o+"px";a.style.left=d,a.style.top=l;for(let g=0;g<e.length;g++)At(e[g]);const m=a.offsetWidth,p=a.offsetHeight,f=Dt("MENUmodalBody");f.xOverflow==!0&&(d=n-m+"px",a.style.left=d),f.yOverflow==!0&&(l=o-p+"px",a.style.top=l);const T=a.getElementsByClassName("MENUmodalItemContainer");for(let g=0;g<T.length;g++){const v=T[g];v.setAttribute("data-menu-item-id",g),v.addEventListener("click",function(u){u.stopPropagation();const h=u.target.getAttribute("data-menu-item-id"),P=e[h].function,re=e[h].optionalParams;if(P=="TEST")console.log("the button worked");else if(P!="None"){kt[P](re);return}else return})}}function St(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(i.style.zIndex="40",s.style.zIndex="0");const r=document.getElementById("MENUmodalEnvironment");r.innerHTML=it,r.style.display="block";const a=document.getElementById("MENUmodalBody");r.addEventListener("click",ee);let d=n+"px",l=o+"px";a.style.left=d,a.style.top=l;const m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),p=document.getElementById("MENUmodalBody_image_select_file_select_button"),f=document.getElementById("MENUmodalBody_image_select_preview_area"),T=document.getElementById("MENUmodalBody_image_select_submit_button"),g=document.getElementById("MENUmodalBody_image_select_submit_button_container");function v(u,b){if(u){const h=URL.createObjectURL(u),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");f.src=h,T.style.visibility="visible",g.style.outline="1px solid red",T.addEventListener("click",()=>{ct(u,b.project_id),P.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",u=>{u.preventDefault()}),m.addEventListener("drop",u=>{u.preventDefault();const b=u.dataTransfer.files;v(b[0],e)}),p.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",b=>{const h=b.target.files[0];v(h,e)}),u.click()})}function Nt(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",D(),pt()}function Dt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,c=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,a=i+s,d=r+c;let l=!1,m=!1;return a>n&&(l=!0),d>o&&(m=!0),{xOverflow:l,yOverflow:m}}function At(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:o="white";const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),c=jt.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),c=c.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";c=c.replace(s,r);for(const[a,d]of Object.entries(y)){const l=new RegExp(`\\{${a}\\}`,"g");c=c.replace(l,d)}i.innerHTML+=c;return}else{c=c.replace(/<img[^>]+>/g,""),i.innerHTML+=c;return}}function ee(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function D(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10")}const kt={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){ht(e)}};let L="hidden";function Jt(){tt();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");A(L),e.addEventListener("click",Ut),t.addEventListener("click",Gt),R()}function Ut(){if(L==="hidden"){L="visible",A(L);return}if(L==="visible"){L="hidden",A(L);return}}function A(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function R(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=E+1;t<_.length;t++){_[t].id=t;const n=_[t],o=Qt(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){const d=r.target.dataset.songId;H(d)}),i.dataset.songId=n.id,i.addEventListener("click",H),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",zt),s.dataset.songID=n.id;const c=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");c.dataset.songSet=n.id,c.addEventListener("click",function(r){r.target===c&&qt(r)}),i.addEventListener("dragstart",Ht),i.addEventListener("dragover",$t),i.addEventListener("drop",Yt),e.appendChild(i)}}function Gt(){songs=[],R()}function Ht(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function $t(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Yt(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=songs.find(r=>r.id===parseInt(t)),i=songs.find(r=>r.id===parseInt(n.dataset.songId)),s=songs.indexOf(o),c=songs.indexOf(i);s!==-1&&c!==-1&&(songs.splice(s,1),songs.splice(c,0,o),R())}function zt(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID);songs=songs.filter(o=>o.id!==n),console.log("Clicked remove indicator for song ID:",n),R()}function qt(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];O(o,e)}function H(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function Qt(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let c=nt;for(let d=0;d<t.length;d++){const l=t[d].toString(),m=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=n:l==="QUEUE_item_title"?p=o:l==="QUEUE_item_artist"?p=i:l==="icons_menuOptionsButton"?p=V:l==="QUEUE_item_timeIndicator"&&(p=s),c=c.replace(m,p)}c=c.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.innerHTML=c,r.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),r.innerHTML}const Vt=`<div class="LCDbody">
    <div class="LCDcontentContainer MATERIAL-blur-22">
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
</div>`;function Ft(){Wt(),te(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Kt(t)}),Zt()}function Wt(){let e="LCDbody",t=Vt;for(const[o,i]of Object.entries(y)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let c="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(c=""),t=t.replace(s,c)}document.getElementById(e).innerHTML=t}function te(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let a,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?a=d+10:a=l,t.style.width=a+"px"}function s(){const a=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=a.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function c(){let a;return function(){cancelAnimationFrame(a),a=requestAnimationFrame(i)}}const r=c();window.addEventListener("resize",r),i()}function Kt(e){e.stopPropagation(),e.target,O([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function Zt(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Xt)})}function Xt(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),cn(n)}function en(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let _=[],E=0;document.getElementById("audio");document.getElementById("PLAYERsource");let C="off";function $(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function ne(e){_=[],E=0;const t=e.project_contributors,n=e.project_name,o=e.picture_url,i=JSON.parse(e.project_json).songs_json;for(const s of i){const c=s.song_name,r=s.duration,a=s.url;_.push({img:o,song_name:c,url:a,duration:r,project_name:n,project_contributors:t})}M()}function J(){console.log("play clicked"),tn()}function tn(){const e=document.getElementById("audio");e.paused?(k("playing"),e.play(),navigator.mediaSession.playbackState="playing"):(k("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){J()});navigator.mediaSession.setActionHandler("pause",function(){J()});function nn(){oe()}function on(){ie()}function sn(){document.getElementById("audio").addEventListener("ended",un)}function cn(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function an(){mn()}function M(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,c=document.getElementById("LCDseekBar"),r=document.getElementById("LCDimage"),a=document.getElementById("LCDimageMobile");t.src=`${I}/${_[E].url}/3/`,e.load(),e.play().then(d=>rn()).catch(d=>console.log(d)),n.innerHTML=_[E].song_name,o.innerHTML=_[E].song_name,i.innerHTML=_[E].project_contributors,te(),R(),k("playing"),r.src=`${I}/${_[E].img}/3/`,a.src=`${I}/${_[E].img}/3/`,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,m=Math.floor(d)-l,p=`"-${$(m)}"`,T=`"${$(Math.floor(l))}"`,g=l/d*100,v=`${g}%`;en(T,p),s.style.setProperty("--LCD-seekbar-width",v),s.style.setProperty("--LCD-seekbar-indicator-left",v),c.value=g})}function rn(){let e=_[E];const t=[{src:`${I}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),ln()}function ln(){const e=document.getElementById("audio"),t=e.duration;"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}function dn(){console.log("PLAYBACK_stop_playback, clear top")}function un(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=_.length;e.pause(),t>E+1&&(C=="off"||C=="on")?(E+=1,M()):C=="song"?M():t==E+1&&C=="on"?(E=0,M()):dn()}function oe(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),_.length>E+1&&(e.paused||e.pause(),E+=1,M())}navigator.mediaSession.setActionHandler("nexttrack",function(){oe()});function ie(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),_.length,E>0&&(e.pause(),E-=1,M())}navigator.mediaSession.setActionHandler("previoustrack",function(){ie()});function mn(){C=="off"?(C="on",S(C)):C=="on"?(C="song",S(C)):(C="off",S(C))}function pn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",gn),t.addEventListener("click",vn),n.addEventListener("click",fn),o.addEventListener("click",En),i.addEventListener("click",yn)}function gn(){console.log("shuffleClicked")}function vn(){on()}function fn(){J()}function En(){nn()}function yn(){an()}function S(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=y.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=y.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=y.icons_derpy;return}}function k(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=y.icons_derpy;return}if(e=="paused"){t.src=y.icons_playButtonV2;return}}function Tn(){document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(t=>{t.addEventListener("input",_n)})}function _n(e){function t(c,r,a){return c>=r&&c<=a}function n(c){const r=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let d=r[a];d!=c&&(document.getElementById(d).style.visibility="hidden")}document.getElementById(c).style.visibility="visible"}let o=e.target;e.target.type!=="range"&&(o=document.getElementById("volumeRangeSlider"));const i=o.value,s=document.getElementById("audio");if(s.volume=i/100,t(i,0,1)){n("volumeControlZero"),s.volume=0;return}if(t(i,2,33)){n("volumeControlOne");return}if(t(i,34,66)){n("volumeControlTwo");return}if(t(i,67,100)){n("volumeControlThree");return}}function In(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function hn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Cn(),n=`${I}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",wn)}catch(t){console.error("Error initializing account image:",t)}}async function Cn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${w}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function wn(e){e.stopPropagation(),bn(e)}function bn(e){O([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Ln=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,On=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,Pn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function Mn(){try{const e=document.getElementById("MAINcontentPages");jn();const t=await Rn();xn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Bn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",se),e.innerHTML=""}async function Rn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${w}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(c=>({img:c.picture_url,top:c.project_name,bottom:c.project_contributors,days:c.time_created,project_id:c.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function jn(){let e="MAINcontentPages",t=Ln;for(const[n,o]of Object.entries(y)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function xn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Pn;for(const[a,d]of Object.entries(y)){const l=new RegExp(`\\{${a}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let a=On;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,m=e[i].img,p=e[i].top,f=e[i].bottom,T=e[i].days,g=Nn(T);for(const[v,u]of Object.entries(y)){const b=new RegExp(`\\{${v}\\}`,"g");a=a.replace(b,u)}for(let v=0;v<d.length;v++){const u=d[v].toString(),b=new RegExp(`\\{${u}\\}`,"g");let h="";u==="MOG_image"?h=`${I}/${m}/4/`:u==="MOG_text1"?h=p:u==="MOG_text2"?h=f:u==="MOG_checkedDate"?h=g:u==="MOGI_placeholder_itemID"&&(h=l),a=a.replace(b,h)}t.innerHTML+=a}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(a){se(a,e)});let c;s.addEventListener("touchstart",function(a){a.timeStamp,c=setTimeout(function(){r(a,e)},500)}),s.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(c)});function r(a,d){navigator.vibrate(1e3);const m=a.target.id.split("-")[1],p=d[m].project_id;console.log(p),ce(a)}}async function Sn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${w}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function se(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Sn(i);ne(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1];t[o].project_id,ce(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;B(`/projects/${i}`)}else n.id==="MOGaddNewItem"&&Dn()}function ce(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function Nn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Dn(){B("/new-project/")}const An=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
        </form>
        <div class="SETTINGSrandomImage">
            <img src="https://picsum.photos/400">
        </div>
    </div>
    <div class="SETTINGSmodalStatusIndicatorContainer">
        <div class="SETTINGSmodalStatusIndicatorOuterCircle">
        </div>
    </div>
</div>`;let j=!1,Y=!1,z=!1;async function kn(){await Gn()?ae():z||(Jn(),z=!0)}function Jn(){Hn();const e=document.getElementById("SETTINGSloginForm"),t=document.getElementById("email"),n=document.getElementById("password");e.addEventListener("submit",async o=>{if(o.preventDefault(),j)return!1;j=!0;const i=t.value,s=n.value;try{await Un(i,s)?(Y=!0,Yn(),ae(),setTimeout($n,2e3)):(Y=!1,zn(),console.log("Login failed. Retry!")),j=!1}catch(c){console.error("Error:",c),j=!1}return!1})}async function Un(e,t){try{const o=await(await fetch(`${w}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function Gn(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${w}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function Hn(){let e="MAINcontentPages",t=An;document.getElementById(e).innerHTML+=t}let q=!1;function $n(){if(q===!0)return;document.getElementById("SETTINGSmodalID").remove(),q=!0}function Yn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function zn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const w="https://om2apis.la0.uk",I="https://om2media.la0.uk";function ae(){sn(),Xe(),et(),Ft(),pn(),In(),Tn(),hn(),Jt();function e(){const t=window.location.pathname;B(t)}window.addEventListener("popstate",e),e()}function qn(){mt(),Mn()}function Qn(e){Bn(),ut()}const Q={"/":qn,"/new-project/":dt,"/projects/:projectID":Qn};function Vn(){console.log("notFoundHandler")}function B(e){const t=Object.keys(Q);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Q[n],c=i.slice(1);s(...c),e!=="/new-project/"&&history.pushState({},"",e);return}}Vn()}document.getElementById("app").innerHTML=le;kn();