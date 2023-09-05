(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const re=`<!-- audio tag -->
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
</main>`,le=`<div class="topleft-searchbarContainer">
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
</div>`,de=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,ue=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`,me="/assets/volume_null-e39cf06f.svg",pe="/assets/recently_added-a0a983c6.svg",ge="/assets/volume_3-c8ab0a75.svg",ve="/assets/orange_music_text_logo_black-12e7386c.svg",fe="/assets/volume_2-cfdac9da.svg",Ee="/assets/browse_2-85030bba.svg",ye="/assets/volume_1-27e93416.svg",Te="/assets/orange_music_logo_white-2a680ea2.svg",_e="/assets/search_icon-4f5e4381.svg",Ie="/assets/orange_music_text_logo_black-91f9e706.png",he="/assets/up_next_queue_button-14fedba2.svg",Ce="/assets/orange_music_logo_yellow-a109ff64.svg",we="/assets/playlist-c6e9024f.svg",be="/assets/loop_button-aef56865.svg",Oe="/assets/help_icon-867fec9d.svg",Le="/assets/play_button-b1e2d3a4.svg",Pe="/assets/browse-14744f27.svg",V="/assets/menu_options_button-a1d7bbe3.svg",Me="/assets/orange_music_text_logo_white-7f0ba909.svg",Re="/assets/back_button-8128cade.svg",Be="/assets/Albums-2e81dc74.svg",je="/assets/songs-016b7188.svg",xe="/assets/orange_music_logo_black-4d7e4591.svg",Se="/assets/your_uploaded_songs-06535705.svg",De="/assets/artist-ab677d43.svg",Ne="/assets/shuffle_button-c2f06bc4.svg",Ae="/assets/orange_music_text_logo_white-4907051e.png",ke="/assets/listen_now-c7438154.svg",Je="/assets/derpy-21c20ae5.svg",Ge="/assets/next_button-9a850710.svg",Ue="/assets/recently_added-7ff28139.svg",He="/assets/play_button-5eeedbe6.svg",Ye="/assets/browse-e8be8609.svg",ze="/assets/albums-681507b8.svg",qe="/assets/listen_now.2-bfa293ac.svg",Qe="/assets/your_uploads-02e5c93c.svg",$e="/assets/play_button.2-fc90fac7.svg",Ve="/assets/listen_now-fb02ffce.svg",Fe="/assets/browse.2-15b501dd.svg",We="/assets/place_holder_image-d4006a96.svg",Ke="/assets/icons_MOGitems_add-19e679f7.svg",v={icons_volumeNull:me,icons_recentlyAdded:pe,icons_volume3:ge,icons_orangeMusicTextLogoBlack:ve,icons_volume2:fe,icons_browse2:Ee,icons_volume1:ye,icons_orangeMusicLogoWhite:Te,icons_searchIcon:_e,icons_orangeMusicTextLogoBlackPng:Ie,icons_queueButton:he,icons_orangeMusicLogoYellow:Ce,icons_playlist:we,icons_loopButton:be,icons_helpIcon:Oe,icons_playButton:Le,icons_browse:Pe,icons_menuOptionsButton:V,icons_orangeMusicTextLogoWhite:Me,icons_backButton:Re,icons_Albums:Be,icons_songs:je,icons_orangeMusicLogoBlack:xe,icons_yourUploadedSongs:Se,icons_artist:De,icons_shuffleButton:Ne,icons_orangeMusicTextLogoWhitePng:Ae,icons_listenNow:ke,icons_derpy:Je,icons_nextButton:Ge,icons_recentlyAddedV2:Ue,icons_playButtonV2:He,icons_browseV2:Ye,icons_albumsV2:ze,icons_listenNow2V2:qe,icons_yourUploads:Qe,icons_playButton2:$e,icons_listenNowV2:Ve,icons_browse2V2:Fe,v3_placeholder:We,icons_MOGitems_add:Ke};function Ze(){let e="topleftContentArea",t=le;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Xe(){let e="toprightContentArea",t=de;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function et(){let e="MAINcontentContainer",t=ue;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const tt=`<div class="QUEUE-item-container" draggable="true">
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
</div>`,nt='<div class="MENUmodalBody MATERIAL-blur-6" id="MENUmodalBody"></div>',ot=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
    <div class="MENUmodalBody_image_select_file_drop_area">
        <button>
            Drag or click to add files.
        </button>
    </div>
    <div class="MENUmodalBody_image_preview_area">
        <img src="" />
    </div>
    <div class="MENUmodalBody_image_submit_area">
        <button>Submit</button>
    </div>
</div>`,it=`<div class="MENUmodalItemContainer">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</div>`,st=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,ct=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,at=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}">
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
</div>`;async function rt(){try{const e=localStorage.getItem("JWT");if(!e){console.log("no jwt");return}const t={"access-token":e},s=`/projects/${(await(await fetch(`${h}/projects/new-project-id/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projectID}`;P(s)}catch(e){console.error("Error:",e)}}async function N(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function F(e,t,n){try{const o=localStorage.getItem("JWT");if(!o){console.log("no jwt");return}const i={"access-token":o,project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${h}/projects/update_details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).updated==="success")return;console.log("there was an error")}catch(o){console.error("Error:",o)}}async function lt(e){setTimeout(async()=>{const o=window.location.pathname.replace(/^\/projects\//,""),i=await N(o);i.project_id=o,t(i),ut(i)},1);function t(n){mt(n);const o=n.description;sessionStorage.setItem("description",o),pt(),gt(),ft(),Et(n),yt(n),It(n),wt(n),Lt(),Z(n.project_name),Pt(n.project_id)}}function dt(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function ut(e){const t=document.getElementById("PROJECTviewDisplayTitleH1");t.addEventListener("blur",function(n){const o=t.innerText;Z(o),F(e.project_id,"project_name",o)})}function mt(e){let t="MAINcontentPages",n=st;for(const[i,s]of Object.entries(v)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewMOREtitle","PROJECTviewMOREartist","PROJECTviewMOREyear"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewMOREtitle"?a=e.project_name:s==="PROJECTviewMOREartist"?a=e.project_contributors:s==="PROJECTviewMOREyear"?a=e.time_created:s==="MOG_checkedDate"?a="checkedIndicator":s==="MOGI_placeholder_itemID"&&(a="temporaryIidentifier"),n=n.replace(c,a)}document.getElementById(t).innerHTML=n}function pt(){function e(){let n;return function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){x()})}}const t=e();window.addEventListener("resize",t),x()}function x(){let e=sessionStorage.getItem("description");const t=" ".repeat(120);e=e+t;const o=document.getElementById("PROJECTviewDescriptionP"),s=e.split(" "),c=[];o.textContent="";for(const g of s){const E=document.createElement("span");E.textContent=g+" ",o.appendChild(E);const _=E.getBoundingClientRect(),p=o.getBoundingClientRect();if(_.bottom<=p.bottom&&_.top>=p.top&&_.left>=p.left&&_.right<=p.right)c.unshift(g);else break}const r=c.reverse().join(" "),d=r.slice(-10),l=r.slice(0,-10),u=d.split("");let m=l;for(let g=0;g<u.length;g++){const E=u[g],_=`<span class="PROJECTopacity${9-g}">${E}</span>`;m=m+_}o.innerHTML=m}function gt(){const e=document.getElementById("PROJECTviewDescriptionMoreButton"),t=document.getElementById("PROJECTviewDisplayDescription"),n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),o=document.querySelector("main"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");function s(){n.style.display="grid",i.matches&&(o.style.zIndex="40")}e.addEventListener("click",function(){s()}),t.addEventListener("dblclick",function(){s()});let c=0;t.addEventListener("touchend",function(a){const r=new Date().getTime();r-c<300&&(a.stopPropagation(),s()),c=r})}function vt(){const e=sessionStorage.getItem("description"),t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function ft(){const e=sessionStorage.getItem("description");document.getElementById("PROJECTviewMOREdescriptionC");const t=document.getElementById("PROJECTviewMOREdescriptionP");t.innerText=e}function Et(e){document.getElementById("PROJECTviewMOREcloseButton").addEventListener("click",function(){J(e)});const n=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");n.addEventListener("click",function(o){o.target===n&&J(e)})}function J(e){const n=document.getElementById("PROJECTviewMOREdescriptionP").value;sessionStorage.setItem("description",n),F(e.project_id,"description",n);const o=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");o.style.display="none",vt(),x();const i=document.querySelector("main");i.style.zIndex="1"}async function yt(e){const t=document.getElementById("PROJECTviewDescriptionTopPlayButton"),n=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),o=document.getElementById("PROJECTviewDisplayMenuButton"),i=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),s=document.getElementById("PROJECTviewMobileStickyHeaderBackButton"),c=await N(e.project_id);t.addEventListener("click",function(){ee(c)}),n.addEventListener("click",function(){console.log("shuffleButton pressed")}),o.addEventListener("click",function(){G(event)}),i.addEventListener("click",function(){G(event)}),s.addEventListener("click",()=>{P("/")})}function G(e,t){e.stopPropagation(),e.target;const o=window.location.pathname.replace(/^\/projects\//,"");b([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"},{displayText:"Play later",optionalSVG:"None",function:"None"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:o},colour:"hsl(180, 100%, 80%)"}],e)}function Tt(e){window.confirm("Are you sure you want to delete this project?")?(console.log("delete project id:",e),_t(e),U(),P("/")):U()}async function _t(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e},i=await(await fetch(`${h}/projects/delete_project/`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();console.log(i)}catch(t){console.error("Error:",t)}}function It(e){document.getElementById("PROJECTview_projectAreaContainer"),Ct();const t=document.getElementById("PROJECTview-projectTable"),n=e,o=n.project_json;if(o!=="{}"){const i=JSON.parse(o).songs_json,s=[];for(const c of i)s.push({img:n.picture_url,songTitle:c.song_name,artistName:n.project_contributors,projectName:"cheese",songDuration:`${Math.floor(c.duration/60)}:${(c.duration%60).toString().padStart(2,"0")}`,song_sequence:c.song_sequence,url:c.url});for(let c=0;c<s.length;c++){s[c].projectID=c;const a=s[c];K(a)}t.addEventListener("click",function(c){const a=c.target;if(c.stopPropagation(),a.tagName==="BUTTON"){const r=a.closest(".PROJECTview-projectTable-rowContainer");if(r){const d=r.getAttribute("data-row-id");W(c),console.log(`Button in row ${d} clicked.`)}}})}}async function ht(){const e=document.getElementById("PROJECTview-projectTable"),n=window.location.pathname.replace(/^\/projects\//,""),o=await N(n);o.project_id=n;const i=o,s=i.project_json,c=JSON.parse(s).songs_json,a=[];for(const l of c)a.push({img:i.picture_url,songTitle:l.song_name,artistName:i.project_contributors,projectName:"cheese",songDuration:`${Math.floor(l.duration/60)}:${(l.duration%60).toString().padStart(2,"0")}`,song_sequence:l.song_sequence,url:l.url});const r=document.getElementById("PROJECTview-projectTable"),d=r.children;for(let l=d.length-1;l>0;l--)r.removeChild(d[l]);for(let l=0;l<a.length;l++){a[l].projectID=l;const u=a[l];K(u)}e.addEventListener("click",function(l){const u=l.target;if(l.stopPropagation(),u.tagName==="BUTTON"){const m=u.closest(".PROJECTview-projectTable-rowContainer");if(m){const g=m.getAttribute("data-row-id");W(l),console.log(`Button in row ${g} clicked.`)}}})}function W(e){e.stopPropagation(),e.target,b([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs"},{displayText:"Play later",optionalSVG:"None"},{displayText:"Delete",optionalSVG:"None"}],e)}function Ct(){let e="PROJECTview_projectAreaContainer",t=ct;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function K(e){let t="PROJECTview-projectTable",n=at;for(const[i,s]of Object.entries(v)){const c=new RegExp(`\\{${i}\\}`,"g");n=n.replace(c,s)}const o=["PROJECTviewRow_img","PROJECTviewRow_songTitle","PROJECTviewRow_artistName","PROJECTviewRow_projectName","PROJECTviewRow_songDuration","PROJECTviewRow_projectID"];for(let i=0;i<o.length;i++){const s=o[i].toString(),c=new RegExp(`\\{${s}\\}`,"g");let a="";s==="PROJECTviewRow_img"?a=e.img:s==="PROJECTviewRow_songTitle"?a=e.songTitle:s==="PROJECTviewRow_artistName"?a=e.artistName:s==="PROJECTviewRow_projectName"?a=e.projectName:s==="PROJECTviewRow_songDuration"?a=e.songDuration:s==="PROJECTviewRow_projectID"&&(a=e.projectID),n=n.replace(c,a)}document.getElementById(t).innerHTML+=n}function wt(e){const t=document.getElementById("PROJECTview_dropArea");t.addEventListener("dragenter",o=>{o.preventDefault(),t.classList.add("dragover")}),t.addEventListener("dragover",o=>{o.preventDefault()}),t.addEventListener("dragleave",()=>{t.classList.remove("dragover")}),t.addEventListener("drop",o=>{o.preventDefault(),t.classList.remove("dragover");const i=o.dataTransfer.files;n(i,e)}),t.addEventListener("click",()=>{const o=document.createElement("input");o.type="file",o.accept="audio/*",o.multiple=!0,o.addEventListener("change",()=>{const i=o.files;n(i,e)}),o.click()});function n(o,i){for(const s of o);Ot(o,i)}}async function bt(e,t,n,o){const i=new FormData;i.append("file",e),i.append("project_id",o.project_id);const s=localStorage.getItem("JWT");i.append("jwt",s);const c=new XMLHttpRequest,a=document.createElement("div");a.classList.add("progress-bar");const r=document.createElement("div");r.classList.add("progress-fill"),a.appendChild(r),t.appendChild(a),c.upload.onprogress=function(d){if(d.lengthComputable){const l=d.loaded/d.total*100;r.style.width=l+"%",l===100&&a.classList.add("opacity-animation")}},c.onload=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.classList.add("complete"),n.textContent=`${e.name}`,ht(),setTimeout(()=>{t.classList.add("complete")},2e3),setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.onerror=function(){a.classList.remove("opacity-animation"),a.style.opacity="1",r.style.backgroundColor="#e74c3c",setTimeout(()=>{t.parentNode.removeChild(t)},3e3)},c.open("POST",`${h}/files/upload/audio/`,!0),c.send(i)}async function Ot(e,t){const n=document.getElementById("uploadsContainer");for(const o of e){const i=document.createElement("div");i.classList.add("upload-box");const s=document.createElement("div");s.classList.add("PROJECTview_upload_nameLabel"),s.textContent=`${o.name}`,i.appendChild(s),n.appendChild(i),await bt(o,i,s,t)}}function Z(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Lt(){const e=new IntersectionObserver(s,{threshold:.1}),t=document.querySelector(".PROJECTviewDisplayImage"),n=document.getElementById("PROJECTviewMobileStickyHeader"),o=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer"),i=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ");e.observe(t);function s(c,a){c.forEach(r=>{i.matches&&console.log("media query matches"),r.isIntersecting&&i.matches?(n.style.backdropFilter="none",n.style.backgroundColor="transparent",o.style.visibility="hidden"):r.isIntersecting&&!i.matches||!r.isIntersecting&&!i.matches?(n.style.backdropFilter="var(--PROJECTviewDesktopHeaderFilter)",o.style.visibility="hidden"):!r.isIntersecting&&i.matches&&(n.style.backdropFilter="none",n.style.backgroundColor="var(--dgrey-7)",o.style.visibility="visible")})}}function Pt(e){console.log("project_id",e);const t=document.getElementById("PROJECTviewDisplayImage");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)}),t.addEventListener("dblclick",function(i){o(i)});function o(i,s){Mt(i)}}function Mt(e,t){e.stopPropagation(),e.target,b([{displayText:"Play next",optionalSVG:"icons_yourUploadedSongs",function:"None"}],e,"update_project_image")}function b(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),c=document.querySelector(".topHalf-container");window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches&&(s.style.zIndex="40",c.style.zIndex="0");const r=document.getElementById("MENUmodalEnvironment");r.innerHTML=nt,n!==void 0&&n==="update_project_image"&&(console.log("we have a value for menu_type",n),r.innerHTML=ot),r.style.display="block";const d=document.getElementById("MENUmodalBody");r.addEventListener("click",jt);let l=o+"px",u=i+"px";if(d.style.left=l,d.style.top=u,n==null){for(let p=0;p<e.length;p++)Bt(e[p]);const m=d.offsetWidth,g=d.offsetHeight,E=Rt("MENUmodalBody");E.xOverflow==!0&&(l=o-m+"px",d.style.left=l),E.yOverflow==!0&&(u=i-g+"px",d.style.top=u);const _=d.getElementsByClassName("MENUmodalItemContainer");for(let p=0;p<_.length;p++){const I=_[p];I.setAttribute("data-menu-item-id",p),I.addEventListener("click",function(O){O.stopPropagation();const k=O.target.getAttribute("data-menu-item-id"),B=e[k].function,ae=e[k].optionalParams;if(B=="TEST")console.log("the button worked");else if(B!="None"){xt[B](ae);return}else return})}}}function Rt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,c=t.getBoundingClientRect().top,a=t.getBoundingClientRect().height,r=i+s,d=a+c;let l=!1,u=!1;return r>n&&(l=!0),d>o&&(u=!0),{xOverflow:l,yOverflow:u}}function Bt(e){const t=e.displayText,n=e.optionalSVG;let o;"colour"in e?o=e.colour:o="white";const i=document.getElementById("MENUmodalBody");let s=new RegExp("\\{MENU_item_text\\}","g"),c=it.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),c=c.replace(s,o),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const a="{"+n+"}";c=c.replace(s,a);for(const[r,d]of Object.entries(v)){const l=new RegExp(`\\{${r}\\}`,"g");c=c.replace(l,d)}i.innerHTML+=c;return}else{c=c.replace(/<img[^>]+>/g,""),i.innerHTML+=c;return}}function jt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="1",i.style.zIndex="10");return}}function U(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10")}const xt={MENU_ACTION_playNext(e){console.log(e)},MENU_ACTION_playLast(){console.log("meny aacction play next")},PROJECT_VIEW_delete_project(e){Tt(e)}};let w="hidden";function St(){et();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");S(w),e.addEventListener("click",Dt),t.addEventListener("click",Nt),M()}function Dt(){if(w==="hidden"){w="visible",S(w);return}if(w==="visible"){w="hidden",S(w);return}}function S(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%";return}if(e=="hidden"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function M(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=f+1;t<y.length;t++){y[t].id=t;const n=y[t],o=Ht(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(a){const d=a.target.dataset.songId;H(d)}),i.dataset.songId=n.id,i.addEventListener("click",H),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator");s.addEventListener("click",Gt),s.dataset.songID=n.id;const c=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");c.dataset.songSet=n.id,c.addEventListener("click",function(a){a.target===c&&Ut(a)}),i.addEventListener("dragstart",At),i.addEventListener("dragover",kt),i.addEventListener("drop",Jt),e.appendChild(i)}}function Nt(){songs=[],M()}function At(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function kt(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Jt(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=songs.find(a=>a.id===parseInt(t)),i=songs.find(a=>a.id===parseInt(n.dataset.songId)),s=songs.indexOf(o),c=songs.indexOf(i);s!==-1&&c!==-1&&(songs.splice(s,1),songs.splice(c,0,o),M())}function Gt(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID);songs=songs.filter(o=>o.id!==n),console.log("Clicked remove indicator for song ID:",n),M()}function Ut(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];b(o,e)}function H(e){const t=songs.find(n=>n.id===parseInt(e));if(t){console.log("Clicked song:",t);return}}function Ht(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let c=tt;for(let d=0;d<t.length;d++){const l=t[d].toString(),u=new RegExp(`\\{${l}\\}`,"g");let m="";l==="QUEUE_item_image"?m=n:l==="QUEUE_item_title"?m=o:l==="QUEUE_item_artist"?m=i:l==="icons_menuOptionsButton"?m=V:l==="QUEUE_item_timeIndicator"&&(m=s),c=c.replace(u,m)}c=c.replace("<div",`<div data-song-id="${e.id}"`);const a=document.createElement("div");return a.innerHTML=c,a.querySelector(".QUEUE-item-image-removeIndicator").addEventListener("click",function(){console.log("Clicked remove indicator for song ID:",e.id)}),a.innerHTML}const Yt=`<div class="LCDbody">
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
</div>`;function zt(){qt(),X(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){Qt(t)}),$t()}function qt(){let e="LCDbody",t=Yt;for(const[o,i]of Object.entries(v)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let c="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(c=""),t=t.replace(s,c)}document.getElementById(e).innerHTML=t}function X(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let r,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?r=d+10:r=l,t.style.width=r+"px"}function s(){const r=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=r.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function c(){let r;return function(){cancelAnimationFrame(r),r=requestAnimationFrame(i)}}const a=c();window.addEventListener("resize",a),i()}function Qt(e){e.stopPropagation(),e.target,b([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_derpy",function:"None"}],e)}function $t(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Vt)})}function Vt(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),en(n)}function Ft(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}let y=[],f=0;document.getElementById("audio");document.getElementById("PLAYERsource");let T="off";function Y(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function ee(e){y=[],f=0;const t=e.project_contributors,n=e.project_name,o=e.picture_url,i=JSON.parse(e.project_json).songs_json;for(const s of i){const c=s.song_name,a=s.duration,r=s.url;y.push({img:o,song_name:c,url:r,duration:a,project_name:n,project_contributors:t})}L()}function A(){console.log("play clicked"),Wt()}function Wt(){const e=document.getElementById("audio");e.paused?(D("playing"),e.play(),navigator.mediaSession.playbackState="playing"):(D("paused"),e.pause(),navigator.mediaSession.playbackState="paused")}navigator.mediaSession.setActionHandler("play",async function(){A()});navigator.mediaSession.setActionHandler("pause",function(){A()});function Kt(){te()}function Zt(){ne()}function Xt(){document.getElementById("audio").addEventListener("ended",cn)}function en(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function tn(){an()}function L(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDtitleText"),o=document.getElementById("LCDtitleTextMobile"),i=document.getElementById("LCDbottomText"),s=document.documentElement,c=document.getElementById("LCDseekBar");t.src=`${se}/${y[f].url}/3/`,e.load(),e.play().then(a=>nn()).catch(a=>console.log(a)),n.innerHTML=y[f].song_name,o.innerHTML=y[f].song_name,i.innerHTML=y[f].project_contributors,X(),M(),D("playing"),e.addEventListener("timeupdate",()=>{const a=e.duration,r=e.currentTime,d=Math.floor(a)-r,l=`"-${Y(d)}"`,m=`"${Y(Math.floor(r))}"`,g=r/a*100,E=`${g}%`;Ft(m,l),s.style.setProperty("--LCD-seekbar-width",E),s.style.setProperty("--LCD-seekbar-indicator-left",E),c.value=g})}function nn(){let e=y[f];const t=[{src:"https://picsum.photos/320",sizes:"320x320",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),on()}function on(){const e=document.getElementById("audio");"setPositionState"in navigator.mediaSession&&navigator.mediaSession.setPositionState({duration:e.duration,playbackRate:e.playbackRate,position:e.currentTime})}function sn(){console.log("PLAYBACK_stop_playback, clear top")}function cn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=y.length;e.pause(),t>f+1&&(T=="off"||T=="on")?(f+=1,L()):T=="song"?L():t==f+1&&T=="on"?(f=0,L()):sn()}function te(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),y.length>f+1&&(e.paused||e.pause(),f+=1,L())}navigator.mediaSession.setActionHandler("nexttrack",function(){te()});function ne(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),y.length,f>0&&(e.pause(),f-=1,L())}navigator.mediaSession.setActionHandler("previoustrack",function(){ne()});function an(){T=="off"?(T="on",j(T)):T=="on"?(T="song",j(T)):(T="off",j(T))}function rn(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",ln),t.addEventListener("click",dn),n.addEventListener("click",un),o.addEventListener("click",mn),i.addEventListener("click",pn)}function ln(){console.log("shuffleClicked")}function dn(){Zt()}function un(){A()}function mn(){Kt()}function pn(){tn()}function j(e){const t=document.getElementById("PLAYERloopButton"),n=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-grey)",n.src=v.icons_loopButton;return}if(e==="on"){t.style.filter="var(--make-svg-orange)",n.src=v.icons_loopButton;return}if(e==="song"){t.style.filter="var(--make-svg-orange)",n.src=v.icons_derpy;return}}function D(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=v.icons_derpy;return}if(e=="paused"){t.src=v.icons_playButtonV2;return}}function gn(){document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(t=>{t.addEventListener("input",vn)})}function vn(e){function t(c,a,r){return c>=a&&c<=r}function n(c){const a=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let r=0;r<4;r++){let d=a[r];d!=c&&(document.getElementById(d).style.visibility="hidden")}document.getElementById(c).style.visibility="visible"}let o=e.target;e.target.type!=="range"&&(o=document.getElementById("volumeRangeSlider"));const i=o.value,s=document.getElementById("audio");if(s.volume=i/100,t(i,0,1)){n("volumeControlZero"),s.volume=0;return}if(t(i,2,33)){n("volumeControlOne");return}if(t(i,34,66)){n("volumeControlTwo");return}if(t(i,67,100)){n("volumeControlThree");return}}function fn(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar");t.addEventListener("keyup",()=>{t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%"}),t.addEventListener("keydown",function(o){if(o.key==="Enter"||o.keyCode===13){const i=t.value;console.log(i),t.value=""}});const n=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{n.style.outline="1px solid var(--lgrey-4)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{n.style.outline="1px solid hsla(0, 0%, 100%, 0.23)",e.style.opacity="0%"})}async function En(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await yn(),n=`${se}/${t}/1/`;e.src=n,document.getElementById("TOPRIGHTaccountImgButton").addEventListener("click",Tn)}catch(t){console.error("Error initializing account image:",t)}}async function yn(){const e=localStorage.getItem("JWT");try{const n=await(await fetch(`${h}/get_account_image/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json();return n.authenticated!==!1?n.url:!1}catch(t){return console.error("Error:",t),!1}}function Tn(e){e.stopPropagation(),_n(e)}function _n(e){b([{displayText:"Help",optionalSVG:"icons_helpIcon",function:"None"},{displayText:"Settings",optionalSVG:"icons_derpy",function:"None"},{displayText:"Sign Out",optionalSVG:"None",function:"None"}],e)}const In=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,hn=`<div class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</div>`,Cn=`<div class="MOG-itemContainer" id="MOGaddNewItem">
    <div class="MOG-itemImageContainer">
        <img src="{icons_MOGitems_add}">
    </div>
</div>`;async function wn(){try{const e=document.getElementById("MAINcontentPages");Ln();const t=await On();Pn(t);return}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function bn(){const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",oe),e.innerHTML=""}async function On(){try{const e=localStorage.getItem("JWT");if(!e)return console.log("no jwt"),[];const t={"access-token":e},i=(await(await fetch(`${h}/projects/get-projects/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()).projects;return Array.isArray(i)?i.map(c=>({img:c.picture_url,top:c.project_name,bottom:c.project_contributors,days:c.time_created,project_id:c.project_id})):(console.log("Projects is not an array:",i),[])}catch(e){return console.error("Error:",e),[]}}function Ln(){let e="MAINcontentPages",t=In;for(const[n,o]of Object.entries(v)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}function Pn(e){const t=document.getElementById("MOGgridContainer");t.innerHTML="";let n=Cn;for(const[r,d]of Object.entries(v)){const l=new RegExp(`\\{${r}\\}`,"g");n=n.replace(l,d)}t.innerHTML+=n;const o=e.length;for(var i=0;i<=o-1;i++){let r=hn;const d=["MOG_image","MOG_text1","MOG_text2","MOG_checkedDate","MOGI_placeholder_itemID"],l=i,u=e[i].img,m=e[i].top,g=e[i].bottom,E=e[i].days,_=Rn(E);for(const[p,I]of Object.entries(v)){const O=new RegExp(`\\{${p}\\}`,"g");r=r.replace(O,I)}for(let p=0;p<d.length;p++){const I=d[p].toString(),O=new RegExp(`\\{${I}\\}`,"g");let C="";I==="MOG_image"?C=u:I==="MOG_text1"?C=m:I==="MOG_text2"?C=g:I==="MOG_checkedDate"?C=_:I==="MOGI_placeholder_itemID"&&(C=l),r=r.replace(O,C)}t.innerHTML+=r}const s=document.getElementById("MOGcontainer");s.addEventListener("click",function(r){oe(r,e)});let c;s.addEventListener("touchstart",function(r){r.timeStamp,c=setTimeout(function(){a(r,e)},500)}),s.addEventListener("touchend",function(r){r.timeStamp,clearTimeout(c)});function a(r,d){navigator.vibrate(1e3);const u=r.target.id.split("-")[1],m=d[u].project_id;console.log(m),ie(r)}}async function Mn(e){try{const t=localStorage.getItem("JWT");if(!t){console.log("no jwt");return}const n={"access-token":t,project_id:e};return(await(await fetch(`${h}/projects/get-project-details/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()).project_details}catch(t){console.error("Error:",t)}}async function oe(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Mn(i);ee(s)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1];t[o].project_id,ie(e)}if(n.classList.contains("MOG-itemContainer"))if(n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;P(`/projects/${i}`)}else n.id==="MOGaddNewItem"&&Bn()}function ie(e){e.stopPropagation(),e.target,b([{displayText:"Play next",optionalSVG:"icons_playlist",function:"None"},{displayText:"Play later",optionalSVG:"icons_derpy",function:"None"}],e)}function Rn(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Bn(){P("/new-project/")}const jn=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;let R=!1,z=!1,q=!1;async function xn(){await Nn()?ce():q||(Sn(),q=!0)}function Sn(){An();const e=document.getElementById("SETTINGSloginForm"),t=document.getElementById("email"),n=document.getElementById("password");e.addEventListener("submit",async o=>{if(o.preventDefault(),R)return!1;R=!0;const i=t.value,s=n.value;try{await Dn(i,s)?(z=!0,Jn(),ce(),setTimeout(kn,2e3)):(z=!1,Gn(),console.log("Login failed. Retry!")),R=!1}catch(c){console.error("Error:",c),R=!1}return!1})}async function Dn(e,t){try{const o=await(await fetch(`${h}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();if(o.authenticated===!0){const i=o.jwt;localStorage.setItem("JWT",i)}return o.authenticated}catch(n){return console.error("Error:",n),!1}}async function Nn(){try{if(localStorage.getItem("JWT")==null)return!1}catch(e){return console.error("Error accessing localStorage:",e),!1}try{const e=localStorage.getItem("JWT");return(await(await fetch(`${h}/prelogin/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:e})})).json()).authenticated}catch(e){return console.error("Error:",e),!1}}function An(){let e="MAINcontentPages",t=jn;document.getElementById(e).innerHTML+=t}let Q=!1;function kn(){if(Q===!0)return;document.getElementById("SETTINGSmodalID").remove(),Q=!0}function Jn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateGreen"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateGreen")})}function Gn(){const e=document.querySelector(".SETTINGSmodalStatusIndicatorOuterCircle");e.classList.remove("SETTINGSanimateError","SETTINGSanimateGreen"),e.classList.add("SETTINGSanimateError"),e.addEventListener("animationend",()=>{e.classList.remove("SETTINGSanimateError")})}const h="https://testom2apis.la0.uk",se="https://testom2media.la0.uk";function ce(){Xt(),Ze(),Xe(),zt(),rn(),fn(),gn(),En(),St();function e(){const t=window.location.pathname;P(t)}window.addEventListener("popstate",e),e()}function Un(){dt(),wn()}function Hn(e){bn(),lt()}const $={"/":Un,"/new-project/":rt,"/projects/:projectID":Hn};function Yn(){console.log("notFoundHandler")}function P(e){const t=Object.keys($);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=$[n],c=i.slice(1);s(...c),e!=="/new-project/"&&history.pushState({},"",e);return}}Yn()}document.getElementById("app").innerHTML=re;xn();
