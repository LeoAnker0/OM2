(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const pe=`<!-- audio tag -->
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
</main>`,ge=`<div class="topleft-searchbarContainer">
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
</div>`,ve=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,fe=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,Ee="/assets/volume_null-e39cf06f.svg",ye="/assets/recently_added-a0a983c6.svg",Te="/assets/volume_3-c8ab0a75.svg",_e="/assets/orange_music_text_logo_black-12e7386c.svg",Ie="/assets/volume_2-cfdac9da.svg",he="/assets/browse_2-85030bba.svg",we="/assets/volume_1-27e93416.svg",Ce="/assets/orange_music_logo_white-2a680ea2.svg",be="/assets/search_icon-4f5e4381.svg",Le="/assets/orange_music_text_logo_black-91f9e706.png",Oe="/assets/up_next_queue_button-14fedba2.svg",Pe="/assets/orange_music_logo_yellow-a109ff64.svg",Me="/assets/playlist-c6e9024f.svg",Se="/assets/loop_button-aef56865.svg",Be="/assets/help_icon-867fec9d.svg",Re="/assets/play_button-b1e2d3a4.svg",xe="/assets/browse-14744f27.svg",K="/assets/menu_options_button-a1d7bbe3.svg",je="/assets/orange_music_text_logo_white-7f0ba909.svg",Ne="/assets/back_button-8128cade.svg",De="/assets/Albums-2e81dc74.svg",Ae="/assets/songs-016b7188.svg",ke="/assets/orange_music_logo_black-4d7e4591.svg",Ge="/assets/your_uploaded_songs-06535705.svg",Je="/assets/artist-ab677d43.svg",Ue="/assets/shuffle_button-c2f06bc4.svg",He="/assets/orange_music_text_logo_white-4907051e.png",$e="/assets/listen_now-c7438154.svg",ze="/assets/derpy-21c20ae5.svg",Ye="/assets/next_button-9a850710.svg",qe="/assets/recently_added-7ff28139.svg",Qe="/assets/play_button-5eeedbe6.svg",Fe="/assets/browse-e8be8609.svg",Ve="/assets/albums-681507b8.svg",We="/assets/listen_now.2-bfa293ac.svg",Ke="/assets/your_uploads-02e5c93c.svg",Ze="/assets/play_button.2-fc90fac7.svg",Xe="/assets/listen_now-fb02ffce.svg",et="/assets/browse.2-15b501dd.svg",tt="/assets/place_holder_image-d4006a96.svg",nt="/assets/icons_MOGitems_add-19e679f7.svg",T={icons_volumeNull:Ee,icons_recentlyAdded:ye,icons_volume3:Te,icons_orangeMusicTextLogoBlack:_e,icons_volume2:Ie,icons_browse2:he,icons_volume1:we,icons_orangeMusicLogoWhite:Ce,icons_searchIcon:be,icons_orangeMusicTextLogoBlackPng:Le,icons_queueButton:Oe,icons_orangeMusicLogoYellow:Pe,icons_playlist:Me,icons_loopButton:Se,icons_helpIcon:Be,icons_playButton:Re,icons_browse:xe,icons_menuOptionsButton:K,icons_orangeMusicTextLogoWhite:je,icons_backButton:Ne,icons_Albums:De,icons_songs:Ae,icons_orangeMusicLogoBlack:ke,icons_yourUploadedSongs:Ge,icons_artist:Je,icons_shuffleButton:Ue,icons_orangeMusicTextLogoWhitePng:He,icons_listenNow:$e,icons_derpy:ze,icons_nextButton:Ye,icons_recentlyAddedV2:qe,icons_playButtonV2:Qe,icons_browseV2:Fe,icons_albumsV2:Ve,icons_listenNow2V2:We,icons_yourUploads:Ke,icons_playButton2:Ze,icons_listenNowV2:Xe,icons_browse2V2:et,v3_placeholder:tt,icons_MOGitems_add:nt};function ot(){let e="topleftContentArea",t=ge;for(const[n,i]of Object.entries(T)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function it(){let e="toprightContentArea",t=ve;for(const[n,i]of Object.entries(T)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML=t}function st(){let e="MAINcontentContainer",t=fe;for(const[n,i]of Object.entries(T)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}const at=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,ct='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',rt=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;async function lt(e,t){const n=new XMLHttpRequest,i=new FormData,o=localStorage.getItem("JWT");i.append("file",e),i.append("project_id",t),i.append("jwt",o),n.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},n.onload=function(){Gt()},n.onerror=function(){console.log("there was an error with the upload")},n.open("POST",`${h}/files/upload/photo/`,!0),n.send(i)}async function dt(e,t){Array.isArray(e)||(e=[e]);for(const n of e)await lt(n,t)}const ut=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,mt=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,pt=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function gt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;S(s)}catch(e){console.error("Error:",e)}}async function x(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function Z(e,t,n){try{const i=localStorage.getItem("JWT");if(!i){console.log("no jwt");return}const o={"access-token":i,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).updated==="success")return;console.log("there was an error")}catch(i){console.error("Error:",i)}}async function vt(e){setTimeout(async()=>{const i=window.location.pathname.replace(/^\/projects\//,""),o=await x(i);o.project_id=i,t(o),yt(o)},1);function t(n){Tt(n);const i=n.description;sessionStorage.setItem("description",i),_t(),It(),wt(),Ct(n),bt(n),Pt(n),St(n),xt(),ne(n.project_name),jt(n.project_id)}}function ft(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}async function Et(){X();const t=window.location.pathname.replace(/^\/projects\//,""),n=document.getElementById("PROJECTviewDisplayImage_imgTag"),o=(await x(t)).picture_url,s=`${I}/${o}/5/`;n.src=s}function yt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const i=t.innerText;ne(i),Z(e.project_id,"project_name",i)})}function Tt(e){let t="MAINcontentPages",n=ut;for(const[o,s]of Object.entries(T)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear","PROJECTviewDisplayImage"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewMOREtitle"?c=e.project_name:s==="PROJECTviewMOREartist"?c=e.project_contributors:s==="PROJECTviewMOREyear"?c=e.time_created:s==="MOG_checkedDate"?c="checkedIndicator":s==="MOGI_placeholder_itemID"?c="temporaryIidentifier":s==="PROJECTviewDisplayImage"&&(c=`${I}/${e.picture_url}/5/`),n=n.replace(a,c)}document.getElementById(t).innerHTML=n}function _t(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){D()})}}const t=e();window.addEventListener("resize",t),D()}function D(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const i=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),a=[];i.textContent="";for(const E of s){const _=document.createElement("span");_.textContent=E+" ",i.appendChild(_);const v=_.getBoundingClientRect(),f=i.getBoundingClientRect();if(v.bottom<=f.bottom&&v.top>=f.top&&v.left>=f.left&&v.right<=f.right)a.unshift(E);else break}const r=a.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),m=d.split("");let p=l;for(let E=0;E<m.length;E++){const _=m[E],v=`<span class="PROJECTopacity${9-E}">${_}</span>`;p=p+v}i.innerHTML=p}function It(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),i=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");function s(){n.style.display="grid",o.matches&&(i.style.zIndex="40")}e.addEventListener("click",function(){s()}),t.addEventListener("dblclick",function(){s()});let a=0;t.addEventListener("touchend",function(c){const r=new Date().getTime();r-a<300&&(c.stopPropagation(),s()),a=r})}function ht(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function wt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Ct(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){U(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(i){i.target===n&&U(e)})}function U(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),Z(e.project_id,"description",n);const i=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");i.style.display="none",ht(),D();const o=document.querySelector("main");o.style.zIndex="1"}async function bt(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),i=document.getElementById("PROJECTviewDisplayMenuButton"),o=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),a=await x(e.project_id);t.addEventListener("click",function(){se(a)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),i.addEventListener("click",function(){H(event)}),o.addEventListener("click",function(){H(event)}),s.addEventListener("click",()=>{S("/")})}function H(e,t){e.stopPropagation(),e.target;const i=window.location.pathname.replace(/^\/projects\//,"");O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:i},colour:"hsl(180, 100%, 80%)"}],e)}function Lt(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Ot(e),A(),S("/")):A()}async function Ot(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},o=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(o)}catch(t){console.error("Error:",t)}}function Pt(e){document.getElementById("PROJECTview_projectAreaContainer"),Mt();const t=document.getElementById("PROJECTview-projectTable"),n=e,i=n.project_json;if(i!=="{}"){const o=JSON.parse(i).songs_json,s=[];for(const a of o)s.push({img:n.picture_url,songTitle:a.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(a.duration/60)}:${(a.duration%60).toString().padStart(2,"0")}`,song_sequence:a.song_sequence,url:a.url});for(let a=0;a<s.length;a++){s[a].projectID=a;const c=s[a];te(c)}t.addEventListener("click",function(a){const c=a.target;if(a.stopPropagation(),c.tagName==="BUTTON"){const r=c.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");ee(a),console.log(`Button in row ${d} clicked.`)}}})}}async function X(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),i=await x(n);i.project_id=n;const o=i,s=o.project_json,a=JSON.parse(s).songs_json,c=[];if(Array.isArray(a))for(const l of a)c.push({img:o.picture_url,songTitle:l.song_name,artistName:o.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<c.length;l++){c[l].projectID=l;const m=c[l];te(m)}e.addEventListener("click",function(l){const m=l.target;if(l.stopPropagation(),m.tagName==="BUTTON"){const p=m.closest(".PROJECTview-projectTable-rowContainer");if(p){const E=p.getAttribute("data-row-id");ee(l),console.log(`Button in row ${E} clicked.`)}}})}function ee(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Mt(){let e="PROJECTview_projectAreaContainer",t=mt;for(const[n,i]of Object.entries(T)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function te(e){let t="PROJECTview-projectTable",n=pt;for(const[o,s]of Object.entries(T)){const a=new RegExp(`\\{${o}\\}`,"g");n=n.replace(a,s)}const i=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let o=0;o<i.length;o++){const s=i[o].toString(),a=new RegExp(`\\{${s}\\}`,"g");let c="";s==="PROJECTviewRow_img"?c=`${I}/${e.img}/2/`:s==="PROJECTviewRow_songTitle"?c=e.songTitle:s==="PROJECTviewRow_artistName"?c=e.artistName:s==="PROJECTviewRow_projectName"?c=e.projectName:s==="PROJECTviewRow_songDuration"?c=e.songDuration:s==="PROJECTviewRow_projectID"&&(c=e.projectID),n=n.replace(a,c)}document.getElementById(t).innerHTML+=n}function St(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",i=>{i.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",i=>{i.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("dragover");const o=i.dataTransfer.files;n(o,e)}),t.addEventListener("click",()=>{const i=document.createElement("input");i.type="file",i.accept="audio/*",i.multiple=!0,i.addEventListener("change",()=>{const o=i.files;n(o,e)}),i.click()});function n(i,o){for(const s of i);Rt(i,o)}}async function Bt(e,t,n,i){const o=new FormData;o.append("file",e),o.append("project_id",i.project_id);const s=localStorage.getItem("JWT");o.append("jwt",s);const a=new XMLHttpRequest,c=document.createElement("div");c.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),c.appendChild(r),t.appendChild(c),a.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&c.classList.add("opacity-animation")}},a.onload=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,X(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.onerror=function(){c.classList.remove("opacity-animation"),c.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},a.open("POST",`${h}/files/upload/audio/`,!0),a.send(o)}async function Rt(e,t){const n=document.getElementById("uploadsContainer");for(const i of e){const o=document.createElement("div");o.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${i.name}`,o.appendChild(s),n.appendChild(o),await Bt(i,o,s,t)}}function ne(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function xt(){const e=new IntersectionObserver(s,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),i=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.observe(t);function s(a,c){a.forEach(r=>{o.matches&&console.log("media query matches"),r.isIntersecting&&o.matches?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",i.style.visibility="hidden"):r.isIntersecting&&!o.matches||!r.isIntersecting&&!o.matches?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",i.style.visibility="hidden"):!r.isIntersecting&&o.matches&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",i.style.visibility="visible")})}}function jt(e){const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(o){o.timeStamp,n=setTimeout(function(){i(o,e)},500)}),t.addEventListener("touchend",function(o){o.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(o){i(o,e)});function i(o,s){Nt(o,s)}}function Nt(e,t){e.stopPropagation(),e.target,O({project_id:t},e,"update_project_image")}const Dt=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`;function O(e,t,n){n===void 0&&At(e,t),n!==void 0&&n==="update_project_image"&&kt(e,t)}function At(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=ct,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",oe);let d=n+"px",l=i+"px";r.style.left=d,r.style.top=l;for(let v=0;v<e.length;v++)Ut(e[v]);const m=r.offsetWidth,p=r.offsetHeight,E=Jt("MENUmodalBody");E.xOverflow==!0&&(d=n-m+"px",r.style.left=d),E.yOverflow==!0&&(l=i-p+"px",r.style.top=l);const _=r.getElementsByClassName("MENUmodalItemContainer");for(let v=0;v<_.length;v++){const f=_[v];f.setAttribute("data-menu-item-id",v),f.addEventListener("click",function(u){u.stopPropagation();const w=u.target.getAttribute("data-menu-item-id"),P=e[w].function,me=e[w].optionalParams;if(P=="TEST")console.log("the button worked");else if(P!="None"){Ht[P](me);return}else return})}}function kt(e,t){const n=t.clientX,i=t.clientY,o=document.querySelector("main"),s=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(o.style.zIndex="40",s.style.zIndex="0");const c=document.getElementById("MENUmodalEnvironment");c.innerHTML=rt,c.style.display="block";const r=document.getElementById("MENUmodalBody");c.addEventListener("click",oe);let d=n+"px",l=i+"px";r.style.left=d,r.style.top=l;const m=document.getElementById("MENUmodalBody_image_select_file_drop_area"),p=document.getElementById("MENUmodalBody_image_select_file_select_button"),E=document.getElementById("MENUmodalBody_image_select_preview_area"),_=document.getElementById("MENUmodalBody_image_select_submit_button"),v=document.getElementById("MENUmodalBody_image_select_submit_button_container");function f(u,b){if(u){const w=URL.createObjectURL(u),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");E.src=w,_.style.visibility="visible",v.style.outline="1px solid red",_.addEventListener("click",()=>{dt(u,b.project_id),P.style.visibility="visible"})}else console.log("No file selected.")}m.addEventListener("dragover",u=>{u.preventDefault()}),m.addEventListener("drop",u=>{u.preventDefault();const b=u.dataTransfer.files;f(b[0],e)}),p.addEventListener("click",()=>{const u=document.createElement("input");u.type="file",u.accept="image/*",u.addEventListener("change",b=>{const w=b.target.files[0];f(w,e)}),u.click()})}function Gt(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",A(),Et()}function Jt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,o=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,r=o+s,d=c+a;let l=!1,m=!1;return r>n&&(l=!0),d>i&&(m=!0),{xOverflow:l,yOverflow:m}}function Ut(e){const t=e.displayText,n=e.optionalSVG;let i;"colour"in e?i=e.colour:i="white";const o=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),a=Dt.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const c="{"+n+"}";a=a.replace(s,c);for(const[r,d]of Object.entries(T)){const l=new RegExp(`\\{${r}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function oe(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",i.matches&&(n.style.zIndex="1",o.style.zIndex="10");return}}function A(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",i.style.zIndex="10")}const Ht={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Lt(e)}};let L="hidden";function $t(){st();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");k(L),e.addEventListener("click",zt),t.addEventListener("click",Yt),B()}function zt(){if(L==="hidden"){L="visible",k(L);return}if(L==="visible"){L="hidden",k(L);return}}function k(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function B(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=y+1;t<g.length;t++){g[t].id=t;const n=g[t],i=Kt(n),o=document.createElement("div");o.innerHTML=i,o.addEventListener("click",function(c){const d=c.target.dataset.songId;$(d)}),o.dataset.songId=n.id,o.addEventListener("click",$),o.dataset.songId=n.id;const s=o.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",Vt),s.dataset.songID=n.id;const a=o.querySelector(".QUEUE-item-up-next-queue-item-context-call");a.dataset.songSet=n.id,a.addEventListener("click",function(c){c.target===a&&Wt(c)}),o.addEventListener("dragstart",qt),o.addEventListener("dragover",Qt),o.addEventListener("drop",Ft),e.appendChild(o)}}function Yt(){songs=[],B()}function qt(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Qt(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Ft(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,i=g.find(c=>c.id===parseInt(t)),o=g.find(c=>c.id===parseInt(n.dataset.songId)),s=g.indexOf(i),a=g.indexOf(o);s!==-1&&a!==-1&&(g.splice(s,1),g.splice(a,0,i),B())}function Vt(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),i=g.findIndex(o=>o.id===n);i!==-1&&g.splice(i,1),B()}function Wt(e){e.stopPropagation();const i=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];O(i,e)}function $(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function Kt(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,i=e.song_name,o=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=at;for(let d=0;d<t.length;d++){const l=t[d].toString(),m=new RegExp(`\\{${l}\\}`,"g");let p="";l==="QUEUE_item_image"?p=`${I}/${n}/3/`:l==="QUEUE_item_title"?p=i:l==="QUEUE_item_artist"?p=o:l==="icons_menuOptionsButton"?p=K:l==="QUEUE_item_timeIndicator"&&(p=s),a=a.replace(m,p)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const c=document.createElement("div");return c.innerHTML=a,c.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),c.innerHTML}const Zt=`<div class="LCDbody">
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
</div>`;function Xt(){en(),ie(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){tn(t)}),nn()}function en(){let e="LCDbody",t=Zt;for(const[i,o]of Object.entries(T)){const s=new RegExp(`\\{${i}\\}`,"g");t=t.replace(s,o)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let i=0;i<n.length;i++){const o=n[i].toString(),s=new RegExp(`\\{${o}\\}`,"g");let a="";(o==="LCD_titleText_placeholder"||o==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function ie(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),i=1.4;function o(){let r,d,l;e=n.clientWidth,d=s(),l=e/i,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(o)}}const c=a();window.addEventListener("resize",c),o()}function tn(e){e.stopPropagation(),e.target,O([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function nn(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",on)})}function on(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,i=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",i),dn(n)}function sn(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let g=[],y=0;document.getElementById("audio");document.getElementById("PLAYERsource");let C="off";function z(e){let t=0,n=0,i;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),i=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(i<10?"0":"")+i,e}function se(e){g=[],y=0;const t=e.project_contributors,n=e.project_name,i=e.picture_url,o=JSON.parse(e.project_json).songs_json;for(const s of o){const a=s.song_name,c=s.duration,r=s.url;g.push({img:i,song_name:a,url:r,duration:c,project_name:n,project_contributors:t})}M()}function J(){console.log("play clicked"),an()}function an(){const e=document.getElementById("audio");e.paused?(G("playing"),e.play(),navigator.mediaSession.playbackState="playing"):(G("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){J()});navigator.mediaSession.setActionHandler("pause",function(){J()});function cn(){ce()}function rn(){re()}function ln(){document.getElementById("audio").addEventListener("ended",gn)}function dn(e){const t=document.getElementById("audio"),i=t.duration*e;t.currentTime=i}function un(){vn()}function M(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),i=document.getElementById("LCDtitleTextMobile"),o=document.getElementById("LCDbottomText"),s=document.documentElement,a=document.getElementById("LCDseekBar"),c=document.getElementById("LCDimage"),r=document.getElementById("LCDimageMobile");t.src=`${I}/${g[y].url}/3/`,e.load(),e.play().then(d=>mn()).catch(d=>console.log(d)),n.innerHTML=g[y].song_name,i.innerHTML=g[y].song_name,o.innerHTML=g[y].project_contributors,ie(),B(),G("playing"),c.src=`${I}/${g[y].img}/3/`,r.src=`${I}/${g[y].img}/3/`,e.addEventListener("timeupdate",()=>{const d=e.duration,l=e.currentTime,m=Math.floor(d)-l,p=`"-${z(m)}"`,_=`"${z(Math.floor(l))}"`,v=l/d*100,f=`${v}%`;sn(_,p),s.style.setProperty("--LCD-seekbar-width",f),s.style.setProperty("--LCD-seekbar-indicator-left",f),a.value=v,ae()})}function mn(){let e=g[y];const t=[{src:`${I}/${e.img}/1/`,sizes:"10x10",type:"image/webp"},{src:`${I}/${e.img}/2/`,sizes:"40x40",type:"image/webp"},{src:`${I}/${e.img}/3/`,sizes:"160x160",type:"image/webp"},{src:`${I}/${e.img}/4/`,sizes:"320x320",type:"image/webp"},{src:`${I}/${e.img}/5/`,sizes:"640x640",type:"image/webp"},{src:`${I}/${e.img}/6/`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),ae()}function ae(){const e=document.getElementById("audio"),t=e.duration;"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}function pn(){console.log("PLAYBACK_stop_playback, clear top")}function gn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=g.length;e.pause(),t>y+1&&(C=="off"||C=="on")?(y+=1,M()):C=="song"?M():t==y+1&&C=="on"?(y=0,M()):pn()}function ce(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),g.length>y+1&&(e.paused||e.pause(),y+=1,M())}navigator.mediaSession.setActionHandler("nexttrack",function(){ce()});function re(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),g.length,y>0&&(e.pause(),y-=1,M())}navigator.mediaSession.setActionHandler("previoustrack",function(){re()});function vn(){C=="off"?(C="on",j(C)):C=="on"?(C="song",j(C)):(C="off",j(C))}function fn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),i=document.getElementById("PLAYERnextButton"),o=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",En),t.addEventListener("click",yn),n.addEventListener("click",Tn),i.addEventListener("click",_n),o.addEventListener("click",In)}function En(){console.log("shuffleClicked")}function yn(){rn()}function Tn(){J()}function _n(){cn()}function In(){un()}function j(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=T.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=T.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=T.icons_derpy;return}}function G(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=T.icons_derpy;return}if(e=="paused"){t.src=T.icons_playButtonV2;return}}function hn(){document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(t=>{t.addEventListener("input",wn)})}function wn(e){function t(a,c,r){return a>=c&&a<=r}function n(a){const c=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let r=0;r<4;r++){let d=c[r];d!=a&&(document.getElementById(d).style.visibility="hidden")}document.getElementById(a).style.visibility="visible"}let i=e.target;e.target.type!=="range"&&(i=document.getElementById("volumeRangeSlider"));const o=i.value,s=document.getElementById("audio");if(s.volume=o/100,t(o,0,1)){n("volumeControlZero"),s.volume=0;return}if(t(o,2,33)){n("volumeControlOne");return}if(t(o,34,66)){n("volumeControlTwo");return}if(t(o,67,100)){n("volumeControlThree");return}}function Cn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const o=t.value;console.log(o),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function bn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ln(),n=`${I}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",On)}catch(t){console.error("Error initializing account image:",t)}}async function Ln(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${h}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function On(e){e.stopPropagation(),Pn(e)}function Pn(e){O([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const Mn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Sn=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,Bn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function Rn(){try{const e=document.getElementById("MAINcontentPages");Nn();const t=await jn();Dn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function xn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",le),e.innerHTML=""}async function jn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},o=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(o)?o.map(a=>({img:a.picture_url,top:a.project_name,bottom:a.project_contributors,days:a.time_created,project_id:a.project_id})):(console.log("Projects is not an array:",o),[])}catch(e){return console.error("Error:",e),[]}}function Nn(){let e="MAINcontentPages",t=Mn;for(const[n,i]of Object.entries(T)){const o=new RegExp(`\\{${n}\\}`,"g");t=t.replace(o,i)}document.getElementById(e).innerHTML+=t}function Dn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Bn;for(const[r,d]of Object.entries(T)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const i=e.length;for(var o=0;o<=i-1;o++){let r=Sn;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=o,m=e[o].img,p=e[o].top,E=e[o].bottom,_=e[o].days,v=kn(_);for(const[f,u]of Object.entries(T)){const b=new RegExp(`\\{${f}\\}`,"g");r=r.replace(b,u)}for(let f=0;f<d.length;f++){const u=d[f].toString(),b=new RegExp(`\\{${u}\\}`,"g");let w="";u==="MOG_image"?w=`${I}/${m}/4/`:u==="MOG_text1"?w=p:u==="MOG_text2"?w=E:u==="MOG_checkedDate"?w=v:u==="MOGI_placeholder_itemID"&&(w=l),r=r.replace(b,w)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){le(r,e)});let a;s.addEventListener("touchstart",function(r){r.timeStamp,a=setTimeout(function(){c(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(a)});function c(r,d){navigator.vibrate(1e3);const m=r.target.id.split("-")[1],p=d[m].project_id;console.log(p),de(r)}}async function An(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function le(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const i=n.id.split("-")[1],o=t[i].project_id,s=await An(o);se(s)}if(n.classList.contains("MOG-item-controls-menu")){const i=n.id.split("-")[1];t[i].project_id,de(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const i=n.id.split("-")[1],o=t[i].project_id;S(`/projects/${o}`)}else n.id==="MOGaddNewItem"&&Gn()}function de(e){e.stopPropagation(),e.target,O([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function kn(e){const n=(Date.now()-e)/(1e3*60*60*24);let i;return n<.01||n<1?(i="Now",i):n<8?(i=Math.floor(n)+"d",i):n<29?(i=Math.floor(n/7)+"w",i):n<365?(i=Math.floor(n/28)+"m",i):(i=Math.floor(n/365)+"y",i)}function Gn(){S("/new-project/")}const Jn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
            <label for="profilePicture" class="SETTINGSmodalFormAreaText">Profile Picture</label><br>
            <input type="file" name="profilePicture" id="profilePicture" accept=".jpg, .png, .webp" required>
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
</div>`;function Un(){setTimeout(()=>{let e="MAINcontentPages",t=Jn;document.getElementById(e).innerHTML+=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Hn)},1)}async function Hn(e){console.log("the signup event was caught"),e.preventDefault(),$n();const t=document.getElementById("SETTINGSsignupForm"),n={},i=o=>new Promise((s,a)=>{const c=new FileReader;if(o.size>5*1024*1024){a("Image size exceeds 5 MB limit");return}c.onloadend=()=>s(c.result.split(",")[1]),c.readAsDataURL(o)});try{for(const s of t.elements)s.type==="email"&&(n[s.name]=s.value);const o=await fetch(`${h}/signup/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(o.ok){const s=await o.json();n.token=s.token;for(const c of t.elements)if(c.type==="file"){const r=c.files[0];if(r){const d=await i(r);n[c.name]=d}}else n[c.name]=c.value;const a=await fetch(`${h}/signup/complete/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(a.ok){const c=await a.json();N(),zn(),setTimeout(function(){console.log("signup very successful move to normal pages and stuff"),window.location.href="/"},2e3)}else{const c=await a.json();alert("There was an error, try again")}}else{const s=await o.json();N(),Y(),alert("There was an error with the email, check that the details are correct.")}}catch{N(),Y(),alert("There was an error, try again")}}function $n(){const e=document.getElementById("spinner");e.style.display="block"}function N(){const e=document.getElementById("spinner");e.style.display="none"}function zn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Y(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const Yn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let R=!1,q=!1,Q=!1;async function qn(){await Vn()?ue():Q||(Qn(),Q=!0)}function Qn(){Wn();let e;const t=document.getElementById("SETTINGSmodalSignupButton");fetch(`${h}/status/are_signups_allowed/`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{e=s.signups_allowed,e&&(t.style.display="inline-block",t.addEventListener("click",()=>{console.log("signup button was pressed"),V(),Un()}))}).catch(s=>{console.error("Fetch error:",s)});const n=document.getElementById("SETTINGSloginForm"),i=document.getElementById("email"),o=document.getElementById("password");n.addEventListener("submit",async s=>{if(s.preventDefault(),R)return!1;R=!0;const a=i.value,c=o.value;try{await Fn(a,c)?(q=!0,Kn(),ue(),setTimeout(V,2e3)):(q=!1,Zn(),console.log("Login failed. Retry!")),R=!1}catch(r){console.error("Error:",r),R=!1}return!1})}async function Fn(e,t){try{const i=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(i.authenticated===!0){const o=i.jwt;localStorage.setItem("JWT",o)}return i.authenticated}catch(n){return console.error("Error:",n),!1}}async function Vn(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function Wn(){let e="MAINcontentPages",t=Yn;document.getElementById(e).innerHTML+=t}let F=!1;function V(){if(F===!0)return;document.getElementById("SETTINGSmodalID").remove(),F=!0}function Kn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Zn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="https://om2apis.la0.uk",I="https://om2media.la0.uk";function ue(){ln(),ot(),it(),Xt(),fn(),Cn(),hn(),bn(),$t();function e(){const t=window.location.pathname;S(t)}window.addEventListener("popstate",e),e()}function Xn(){ft(),Rn()}function eo(e){xn(),vt()}const W={"/":Xn,"/new-project/":gt,"/projects/:projectID":eo};function to(){console.log("notFoundHandler")}function S(e){const t=Object.keys(W);for(const n of t){const i=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),o=e.match(i);if(o){const s=W[n],a=o.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}to()}document.getElementById("app").innerHTML=pe;qn();
