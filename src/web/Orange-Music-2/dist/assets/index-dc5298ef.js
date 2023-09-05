(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const ce=`<!-- audio tag -->
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
</main>`,ae=`<div class="topleft-searchbarContainer">
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
</div>`,re=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,le=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,de="/assets/volume_null-e39cf06f.svg",ue="/assets/recently_added-a0a983c6.svg",me="/assets/volume_3-c8ab0a75.svg",pe="/assets/orange_music_text_logo_black-12e7386c.svg",ge="/assets/volume_2-cfdac9da.svg",ve="/assets/browse_2-85030bba.svg",fe="/assets/volume_1-27e93416.svg",Ee="/assets/orange_music_logo_white-2a680ea2.svg",Te="/assets/search_icon-4f5e4381.svg",ye="/assets/orange_music_text_logo_black-91f9e706.png",Ie="/assets/up_next_queue_button-14fedba2.svg",he="/assets/orange_music_logo_yellow-a109ff64.svg",Ce="/assets/playlist-c6e9024f.svg",_e="/assets/loop_button-aef56865.svg",we="/assets/help_icon-867fec9d.svg",be="/assets/play_button-b1e2d3a4.svg",Oe="/assets/browse-14744f27.svg",q="/assets/menu_options_button-a1d7bbe3.svg",Le="/assets/orange_music_text_logo_white-7f0ba909.svg",Pe="/assets/back_button-8128cade.svg",Me="/assets/Albums-2e81dc74.svg",Re="/assets/songs-016b7188.svg",Be="/assets/orange_music_logo_black-4d7e4591.svg",je="/assets/your_uploaded_songs-06535705.svg",xe="/assets/artist-ab677d43.svg",Se="/assets/shuffle_button-c2f06bc4.svg",De="/assets/orange_music_text_logo_white-4907051e.png",Ne="/assets/listen_now-c7438154.svg",Ae="/assets/derpy-21c20ae5.svg",ke="/assets/next_button-9a850710.svg",Je="/assets/recently_added-7ff28139.svg",Ge="/assets/play_button-5eeedbe6.svg",Ue="/assets/browse-e8be8609.svg",He="/assets/albums-681507b8.svg",Ye="/assets/listen_now.2-bfa293ac.svg",ze="/assets/your_uploads-02e5c93c.svg",Qe="/assets/play_button.2-fc90fac7.svg",qe="/assets/listen_now-fb02ffce.svg",$e="/assets/browse.2-15b501dd.svg",Ve="/assets/place_holder_image-d4006a96.svg",Fe="/assets/icons_MOGitems_add-19e679f7.svg",v={icons_volumeNull:de,icons_recentlyAdded:ue,icons_volume3:me,icons_orangeMusicTextLogoBlack:pe,icons_volume2:ge,icons_browse2:ve,icons_volume1:fe,icons_orangeMusicLogoWhite:Ee,icons_searchIcon:Te,icons_orangeMusicTextLogoBlackPng:ye,icons_queueButton:Ie,icons_orangeMusicLogoYellow:he,icons_playlist:Ce,icons_loopButton:_e,icons_helpIcon:we,icons_playButton:be,icons_browse:Oe,icons_menuOptionsButton:q,icons_orangeMusicTextLogoWhite:Le,icons_backButton:Pe,icons_Albums:Me,icons_songs:Re,icons_orangeMusicLogoBlack:Be,icons_yourUploadedSongs:je,icons_artist:xe,icons_shuffleButton:Se,icons_orangeMusicTextLogoWhitePng:De,icons_listenNow:Ne,icons_derpy:Ae,icons_nextButton:ke,icons_recentlyAddedV2:Je,icons_playButtonV2:Ge,icons_browseV2:Ue,icons_albumsV2:He,icons_listenNow2V2:Ye,icons_yourUploads:ze,icons_playButton2:Qe,icons_listenNowV2:qe,icons_browse2V2:$e,v3_placeholder:Ve,icons_MOGitems_add:Fe};function We(){let e="topleftContentArea",t=ae;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Ke(){let e="toprightContentArea",t=re;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Ze(){let e="MAINcontentContainer",t=le;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Xe=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,et='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',tt=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`,nt=`<div class="PROJECTviewContainerEnvironment">
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
            <div class="PROJECTviewTOPgridItem PROJECTviewDisplayImage PROJECTviewTopItem-1">
                <img src="https://picsum.photos/300">
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
</div>`,ot=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,it=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function st(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},c=`/projects/${(await(await fetch(`${C}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;P(c)}catch(e){console.error("Error:",e)}}async function D(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function $(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${C}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function ct(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await D(o);i.project_id=o,t(i),rt(i)},1);function t(n){lt(n);const o=n.description;sessionStorage.setItem("description",o),dt(),ut(),pt(),gt(n),vt(n),Tt(n),ht(n),wt(),W(n.project_name)}}function at(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function rt(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const o=t.innerText;W(o),$(e.project_id,"project_name",o)})}function lt(e){let t="MAINcontentPages",n=nt;for(const[i,c]of Object.entries(v)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,c)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear"];for(let i=0;i<o.length;i++){const c=o[i].toString(),s=new RegExp(`\\{${c}\\}`,"g");let a="";c==="PROJECTviewMOREtitle"?a=e.project_name:c==="PROJECTviewMOREartist"?a=e.project_contributors:c==="PROJECTviewMOREyear"?a=e.time_created:c==="MOG_checkedDate"?a="checkedIndicator":c==="MOGI_placeholder_itemID"&&(a="temporaryIidentifier"),n=n.replace(s,a)}document.getElementById(t).innerHTML=n}function dt(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){j()})}}const t=e();window.addEventListener("resize",t),j()}function j(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const o=document.getElementById("PROJECTviewDescriptionP"),c=e.split(" "),s=[];o.textContent="";for(const g of c){const p=document.createElement("span");p.textContent=g+" ",o.appendChild(p);const I=p.getBoundingClientRect(),E=o.getBoundingClientRect();if(I.bottom<=E.bottom&&I.top>=E.top&&I.left>=E.left&&I.right<=E.right)s.unshift(g);else break}const r=s.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),m=d.split("");let u=l;for(let g=0;g<m.length;g++){const p=m[g],I=`<span class="PROJECTopacity${9-g}">${p}</span>`;u=u+I}o.innerHTML=u}function ut(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");function c(){n.style.display="grid",i.matches&&(o.style.zIndex="40")}e.addEventListener("click",function(){c()}),t.addEventListener("dblclick",function(){c()});let s=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-s<300&&(a.stopPropagation(),c()),s=r})}function mt(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function pt(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function gt(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){A(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&A(e)})}function A(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),$(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",mt(),j();const i=document.querySelector("main");i.style.zIndex="1"}async function vt(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),c=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),s=await D(e.project_id);t.addEventListener("click",function(){Z(s)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){k(event)}),i.addEventListener("click",function(){k(event)}),c.addEventListener("click",()=>{P("/")})}function k(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");L([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(180, 100%, 80%)"}],e)}function ft(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),Et(e),J(),P("/")):J()}async function Et(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${C}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(i)}catch(t){console.error("Error:",t)}}function Tt(e){document.getElementById("PROJECTview_projectAreaContainer"),It();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,c=[];for(const s of i)c.push({img:n.picture_url,songTitle:s.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(s.duration/60)}:${(s.duration%60).toString().padStart(2,"0")}`,song_sequence:s.song_sequence,url:s.url});for(let s=0;s<c.length;s++){c[s].projectID=s;const a=c[s];F(a)}t.addEventListener("click",function(s){const a=s.target;if(s.stopPropagation(),a.tagName==="BUTTON"){const r=a.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");V(s),console.log(`Button in row ${d} clicked.`)}}})}}async function yt(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await D(n);o.project_id=n;const i=o,c=i.project_json,s=JSON.parse(c).songs_json,a=[];for(const l of s)a.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<a.length;l++){a[l].projectID=l;const m=a[l];F(m)}e.addEventListener("click",function(l){const m=l.target;if(l.stopPropagation(),m.tagName==="BUTTON"){const u=m.closest(".PROJECTview-projectTable-rowContainer");if(u){const g=u.getAttribute("data-row-id");V(l),console.log(`Button in row ${g} clicked.`)}}})}function V(e){e.stopPropagation(),e.target,L([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function It(){let e="PROJECTview_projectAreaContainer",t=ot;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function F(e){let t="PROJECTview-projectTable",n=it;for(const[i,c]of Object.entries(v)){const s=new RegExp(`\\{${i}\\}`,"g");n=n.replace(s,c)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const c=o[i].toString(),s=new RegExp(`\\{${c}\\}`,"g");let a="";c==="PROJECTviewRow_img"?a=e.img:c==="PROJECTviewRow_songTitle"?a=e.songTitle:c==="PROJECTviewRow_artistName"?a=e.artistName:c==="PROJECTviewRow_projectName"?a=e.projectName:c==="PROJECTviewRow_songDuration"?a=e.songDuration:c==="PROJECTviewRow_projectID"&&(a=e.projectID),n=n.replace(s,a)}document.getElementById(t).innerHTML+=n}function ht(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const c of o);_t(o,i)}}async function Ct(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const c=localStorage.getItem("JWT");i.append("jwt",c);const s=new XMLHttpRequest,a=document.createElement("div");a.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),a.appendChild(r),t.appendChild(a),s.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&a.classList.add("opacity-animation")}},s.onload=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,yt(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.onerror=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},s.open("POST",`${C}/files/upload/audio/`,!0),s.send(i)}async function _t(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const c=document.createElement("div");c.classList.add("PROJECTview_upload_nameLabel"),c.textContent=`${o.name}`,i.appendChild(c),n.appendChild(i),await Ct(o,i,c,t)}}function W(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function wt(){const e=new IntersectionObserver(c,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.observe(t);function c(s,a){s.forEach(r=>{i.matches&&console.log("media query matches"),r.isIntersecting&&i.matches?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!i.matches||!r.isIntersecting&&!i.matches?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&i.matches&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",o.style.visibility="visible")})}}function L(e,t){const n=t.clientX,o=t.clientY,i=document.querySelector("main");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(i.style.zIndex="40");const s=document.getElementById("MENUmodalEnvironment");s.innerHTML=et,s.style.display="block";const a=document.getElementById("MENUmodalBody");s.addEventListener("click",Lt);let r=n+"px",d=o+"px";a.style.left=r,a.style.top=d;for(let p=0;p<e.length;p++)Ot(e[p]);const l=a.offsetWidth,m=a.offsetHeight,u=bt("MENUmodalBody");u.xOverflow==!0&&(r=n-l+"px",a.style.left=r),u.yOverflow==!0&&(d=o-m+"px",a.style.top=d);const g=a.getElementsByClassName("MENUmodalItemContainer");for(let p=0;p<g.length;p++){const I=g[p];I.setAttribute("data-menu-item-id",p),I.addEventListener("click",function(E){E.stopPropagation();const b=E.target.getAttribute("data-menu-item-id"),h=e[b].function,se=e[b].optionalParams;if(h=="TEST")console.log("the button worked");else if(h!="None"){Pt[h](se);return}else return})}}function bt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,c=t.getBoundingClientRect().left,s=t.getBoundingClientRect().top,a=t.getBoundingClientRect().height,r=i+c,d=a+s;let l=!1,m=!1;return r>n&&(l=!0),d>o&&(m=!0),{xOverflow:l,yOverflow:m}}function Ot(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:o="white";const i=document.getElementById("MENUmodalBody");let c=new RegExp("\\{MENU_item_text\\}","g"),s=tt.replace(c,t);if(c=new RegExp("\\{MENU_item_colour\\}","g"),s=s.replace(c,o),n!=="None"){c=new RegExp("\\{MENU_item_image\\}","g");const a="{"+n+"}";s=s.replace(c,a);for(const[r,d]of Object.entries(v)){const l=new RegExp(`\\{${r}\\}`,"g");s=s.replace(l,d)}i.innerHTML+=s;return}else{s=s.replace(/<img[^>]+>/g,""),i.innerHTML+=s;return}}function Lt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1");return}}function J(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.style.display="none",n.matches&&(t.style.zIndex="1")}const Pt={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){ft(e)}};let w="hidden";function Mt(){Ze();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");x(w),e.addEventListener("click",Rt),t.addEventListener("click",Bt),M()}function Rt(){if(w==="hidden"){w="visible",x(w);return}if(w==="visible"){w="hidden",x(w);return}}function x(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function M(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<T.length;t++){T[t].id=t;const n=T[t],o=At(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(a){const d=a.target.dataset.songId;G(d)}),i.dataset.songId=n.id,i.addEventListener("click",G),i.dataset.songId=n.id;const c=i.querySelector(".QUEUE-item-image-removeIndicator");c.addEventListener("click",Dt),c.dataset.songID=n.id;const s=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.dataset.songSet=n.id,s.addEventListener("click",function(a){a.target===s&&Nt(a)}),i.addEventListener("dragstart",jt),i.addEventListener("dragover",xt),i.addEventListener("drop",St),e.appendChild(i)}}function Bt(){songs=[],M()}function jt(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function xt(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function St(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=songs.find(a=>a.id===parseInt(t)),i=songs.find(a=>a.id===parseInt(n.dataset.songId)),c=songs.indexOf(o),s=songs.indexOf(i);c!==-1&&s!==-1&&(songs.splice(c,1),songs.splice(s,0,o),M())}function Dt(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID);songs=songs.filter(o=>o.id!==n),console.log("Clicked remove indicator for song ID:",n),M()}function Nt(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];L(o,e)}function G(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function At(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,c=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let s=Xe;for(let d=0;d<t.length;d++){const l=t[d].toString(),m=new RegExp(`\\{${l}\\}`,"g");let u="";l==="QUEUE_item_image"?u=n:l==="QUEUE_item_title"?u=o:l==="QUEUE_item_artist"?u=i:l==="icons_menuOptionsButton"?u=q:l==="QUEUE_item_timeIndicator"&&(u=c),s=s.replace(m,u)}s=s.replace("<div",`<div data-song-id="${e.id}"`);const a=document.createElement("div");return a.innerHTML=s,a.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),a.innerHTML}const kt=`<div class="LCDbody">
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
</div>`;function Jt(){Gt(),K(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Ut(t)}),Ht()}function Gt(){let e="LCDbody",t=kt;for(const[o,i]of Object.entries(v)){const c=new RegExp(`\\{${o}\\}`,"g");t=t.replace(c,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),c=new RegExp(`\\{${i}\\}`,"g");let s="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(s=""),t=t.replace(c,s)}document.getElementById(e).innerHTML=t}function K(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=c(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function c(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function s(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const a=s();window.addEventListener("resize",a),i()}function Ut(e){e.stopPropagation(),e.target,L([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function Ht(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Yt)})}function Yt(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ft(n)}function zt(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let T=[],f=0;document.getElementById("audio");document.getElementById("PLAYERsource");let y="off";function U(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function Z(e){T=[],f=0;const t=e.project_contributors,n=e.project_name,o=e.picture_url,i=JSON.parse(e.project_json).songs_json;for(const c of i){const s=c.song_name,a=c.duration,r=c.url;T.push({img:o,song_name:s,url:r,duration:a,project_name:n,project_contributors:t})}O()}function N(){console.log("play clicked"),Qt()}function Qt(){const e=document.getElementById("audio");e.paused?(S("playing"),e.play(),navigator.mediaSession.playbackState="playing"):(S("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){N()});navigator.mediaSession.setActionHandler("pause",function(){N()});function qt(){X()}function $t(){ee()}function Vt(){document.getElementById("audio").addEventListener("ended",en)}function Ft(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Wt(){tn()}function O(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),c=document.documentElement,s=document.getElementById("LCDseekBar");t.src=`${oe}/${T[f].url}/3/`,e.load(),e.play().then(a=>Kt()).catch(a=>console.log(a)),n.innerHTML=T[f].song_name,o.innerHTML=T[f].song_name,i.innerHTML=T[f].project_contributors,K(),M(),S("playing"),e.addEventListener("timeupdate",()=>{const a=e.duration,r=e.currentTime,d=Math.floor(a)-r,l=`"-${U(d)}"`,u=`"${U(Math.floor(r))}"`,g=r/a*100,p=`${g}%`;zt(u,l),c.style.setProperty("--LCD-seekbar-width",p),c.style.setProperty("--LCD-seekbar-indicator-left",p),s.value=g})}function Kt(){let e=T[f];const t=[{src:"https://picsum.photos/320",sizes:"320x320",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),Zt()}function Zt(){const e=document.getElementById("audio");"setPositionState"in navigator.mediaSession&&navigator.mediaSession.setPositionState({duration:e.duration,playbackRate:e.playbackRate,position:e.currentTime})}function Xt(){console.log("PLAYBACK_stop_playback, clear top")}function en(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=T.length;e.pause(),t>f+1&&(y=="off"||y=="on")?(f+=1,O()):y=="song"?O():t==f+1&&y=="on"?(f=0,O()):Xt()}function X(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),T.length>f+1&&(e.paused||e.pause(),f+=1,O())}navigator.mediaSession.setActionHandler("nexttrack",function(){X()});function ee(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),T.length,f>0&&(e.pause(),f-=1,O())}navigator.mediaSession.setActionHandler("previoustrack",function(){ee()});function tn(){y=="off"?(y="on",B(y)):y=="on"?(y="song",B(y)):(y="off",B(y))}function nn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",on),t.addEventListener("click",sn),n.addEventListener("click",cn),o.addEventListener("click",an),i.addEventListener("click",rn)}function on(){console.log("shuffleClicked")}function sn(){$t()}function cn(){N()}function an(){qt()}function rn(){Wt()}function B(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=v.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=v.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=v.icons_derpy;return}}function S(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=v.icons_derpy;return}if(e=="paused"){t.src=v.icons_playButtonV2;return}}function ln(){document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(t=>{t.addEventListener("input",dn)})}function dn(e){function t(s,a,r){return s>=a&&s<=r}function n(s){const a=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let r=0;r<4;r++){let d=a[r];d!=s&&(document.getElementById(d).style.visibility="hidden")}document.getElementById(s).style.visibility="visible"}let o=e.target;e.target.type!=="range"&&(o=document.getElementById("volumeRangeSlider"));const i=o.value,c=document.getElementById("audio");if(c.volume=i/100,t(i,0,1)){n("volumeControlZero"),c.volume=0;return}if(t(i,2,33)){n("volumeControlOne");return}if(t(i,34,66)){n("volumeControlTwo");return}if(t(i,67,100)){n("volumeControlThree");return}}function un(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function mn(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await pn(),n=`${oe}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",gn)}catch(t){console.error("Error initializing account image:",t)}}async function pn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${C}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function gn(e){e.stopPropagation(),vn(e)}function vn(e){L([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const fn=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,En=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,Tn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function yn(){try{const e=document.getElementById("MAINcontentPages");Cn();const t=await hn();_n(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function In(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",te),e.innerHTML=""}async function hn(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${C}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(s=>({img:s.picture_url,top:s.project_name,bottom:s.project_contributors,days:s.time_created,project_id:s.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function Cn(){let e="MAINcontentPages",t=fn;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function _n(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Tn;for(const[r,d]of Object.entries(v)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=En;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,m=e[i].img,u=e[i].top,g=e[i].bottom,p=e[i].days,I=bn(p);for(const[E,_]of Object.entries(v)){const b=new RegExp(`\\{${E}\\}`,"g");r=r.replace(b,_)}for(let E=0;E<d.length;E++){const _=d[E].toString(),b=new RegExp(`\\{${_}\\}`,"g");let h="";_==="MOG_image"?h=m:_==="MOG_text1"?h=u:_==="MOG_text2"?h=g:_==="MOG_checkedDate"?h=I:_==="MOGI_placeholder_itemID"&&(h=l),r=r.replace(b,h)}t.innerHTML+=r}const c=document.getElementById("MOGcontainer");c.addEventListener("click",function(r){te(r,e)});let s;c.addEventListener("touchstart",function(r){r.timeStamp,s=setTimeout(function(){a(r,e)},500)}),c.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(s)});function a(r,d){navigator.vibrate(1e3);const m=r.target.id.split("-")[1],u=d[m].project_id;console.log(u),ne(r)}}async function wn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${C}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function te(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,c=await wn(i);Z(c)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1];t[o].project_id,ne(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;P(`/projects/${i}`)}else n.id==="MOGaddNewItem"&&On()}function ne(e){e.stopPropagation(),e.target,L([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function bn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function On(){P("/new-project/")}const Ln=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let R=!1,H=!1,Y=!1;async function Pn(){await Bn()?ie():Y||(Mn(),Y=!0)}function Mn(){jn();const e=document.getElementById("SETTINGSloginForm"),t=document.getElementById("email"),n=document.getElementById("password");e.addEventListener("submit",async o=>{if(o.preventDefault(),R)return!1;R=!0;const i=t.value,c=n.value;try{await Rn(i,c)?(H=!0,Sn(),ie(),setTimeout(xn,2e3)):(H=!1,Dn(),console.log("Login failed. Retry!")),R=!1}catch(s){console.error("Error:",s),R=!1}return!1})}async function Rn(e,t){try{const o=await(await fetch(`${C}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function Bn(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${C}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function jn(){let e="MAINcontentPages",t=Ln;document.getElementById(e).innerHTML+=t}let z=!1;function xn(){if(z===!0)return;document.getElementById("SETTINGSmodalID").remove(),z=!0}function Sn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Dn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const C="https://om2apis.la0.uk",oe="https://om2media.la0.uk";function ie(){Vt(),We(),Ke(),Jt(),nn(),un(),ln(),mn(),Mt();function e(){const t=window.location.pathname;P(t)}window.addEventListener("popstate",e),e()}function Nn(){at(),yn()}function An(e){In(),ct()}const Q={"/":Nn,"/new-project/":st,"/projects/:projectID":An};function kn(){console.log("notFoundHandler")}function P(e){const t=Object.keys(Q);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const c=Q[n],s=i.slice(1);c(...s),e!=="/new-project/"&&history.pushState({},"",e);return}}kn()}document.getElementById("app").innerHTML=ce;Pn();
