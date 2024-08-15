(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const fn=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`;function _n(e){return new Promise((t,n)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>t(o),o.onerror=i=>n(i),o.src=e})}function vn(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height).data}function En(e,t,n){return`#${(1<<24|e<<16|t<<8|n).toString(16).slice(1)}`}function hn(e,t,n){e/=255,t/=255,n/=255;const o=Math.max(e,t,n),i=Math.min(e,t,n);let s,a,r=(o+i)/2;if(o===i)s=a=0;else{const c=o-i;switch(a=r>.5?c/(2-o-i):c/(o+i),o){case e:s=(t-n)/c+(t<n?6:0);break;case t:s=(n-e)/c+2;break;case n:s=(e-t)/c+4;break}s/=6}return[s*360,a*100,r*100]}function yn(e,t){const n=[],o=new Array(t);for(let s=0;s<t;s++)n.push(e[Math.floor(Math.random()*e.length)]);let i=!0;for(;i;){i=!1;for(let s=0;s<t;s++)o[s]=[];for(const s of e){let a=1/0,r=-1;for(let c=0;c<t;c++){const d=bn(s,n[c]);d<a&&(a=d,r=c)}o[r].push(s)}for(let s=0;s<t;s++){const a=Tn(o[s]);In(a,n[s])||(n[s]=a,i=!0)}}return n}function bn(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function Tn(e){const t=e.reduce((n,o)=>(n[0]+=o[0],n[1]+=o[1],n[2]+=o[2],n),[0,0,0]);return[t[0]/e.length,t[1]/e.length,t[2]/e.length]}function In(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Cn(e){return e.filter(([t,n,o])=>{const[i,s,a]=hn(t,n,o);return a>10&&a<93})}function wn(e,t=5){const n=[];for(let a=0;a<e.length;a+=4){const r=e[a],c=e[a+1],d=e[a+2];n.push([r,c,d])}const i=Cn(n);return yn(i,t).map(([a,r,c])=>En(a,r,c))}async function Sn(e,t=5){e=e.slice(0,-1)+"2";try{const n=await _n(e),o=vn(n);return wn(o,t)}catch(n){console.error("Error loading image:",n)}}const Ze=1500;let Ct=0,Ue=[],Ne;function L(e,t){const o=new Date().getTime();Ue.push({notificationText:e,notificationType:t,time:o}),wt()}function wt(){const t=new Date().getTime(),n=Ue.at(Ct);Ue.length>1?t-Ne>Ze?(et(n.notificationText,n.notificationType),Ne=t):setTimeout(wt,Ze):(et(n.notificationText,n.notificationType),Ne=t)}function et(e,t){const n=document.getElementById("noticationContainer");let o;Ct+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}const Pn="/assets/volume_null-e39cf06f.svg",On="/assets/recently_added-a0a983c6.svg",Ln="/assets/volume_3-c8ab0a75.svg",Mn="/assets/orange_music_text_logo_black-12e7386c.svg",Bn="/assets/volume_2-cfdac9da.svg",Dn="/assets/browse_2-85030bba.svg",xn="/assets/volume_1-27e93416.svg",Rn="/assets/orange_music_logo_white-2a680ea2.svg",An="/assets/search_icon-4f5e4381.svg",Nn="/assets/orange_music_text_logo_black-91f9e706.png",jn="/assets/up_next_queue_button-14fedba2.svg",Un="/assets/orange_music_logo_yellow-a109ff64.svg",kn="/assets/playlist-c6e9024f.svg",Jn="/assets/loop_button-aef56865.svg",Gn="/assets/help_icon-867fec9d.svg",Hn="/assets/play_button-b1e2d3a4.svg",Yn="/assets/browse-14744f27.svg",St="/assets/menu_options_button-a1d7bbe3.svg",$n="/assets/orange_music_text_logo_white-7f0ba909.svg",Fn="/assets/back_button-8128cade.svg",qn="/assets/Albums-2e81dc74.svg",Qn="/assets/songs-016b7188.svg",Vn="/assets/orange_music_logo_black-4d7e4591.svg",zn="/assets/your_uploaded_songs-06535705.svg",Kn="/assets/artist-ab677d43.svg",Wn="/assets/shuffle_button-c2f06bc4.svg",Xn="/assets/orange_music_text_logo_white-4907051e.png",Zn="/assets/listen_now-c7438154.svg",eo="/assets/derpy-21c20ae5.svg",to="/assets/next_button-9a850710.svg",no="/assets/recently_added-7ff28139.svg",oo="/assets/play_button-5eeedbe6.svg",io="/assets/browse-e8be8609.svg",so="/assets/albums-681507b8.svg",ao="/assets/listen_now.2-bfa293ac.svg",ro="/assets/your_uploads-02e5c93c.svg",co="/assets/play_button.2-fc90fac7.svg",lo="/assets/listen_now-fb02ffce.svg",uo="/assets/browse.2-15b501dd.svg",mo="/assets/place_holder_image-d4006a96.svg",go="/assets/icons_MOGitems_add-19e679f7.svg",po="/assets/back-9279721d.svg",fo="/assets/forwards-605bd405.svg",_o="/assets/icons_close-57e87944.svg",vo="/assets/icons_pause-8012f8cc.svg",Eo="/assets/icons_loop-32d1576c.svg",ho="/assets/icons_loop_song-87f53dc7.svg",yo="/assets/icons_play-a5074c5b.svg",bo="/assets/icons_settings-793063fb.svg",To="/assets/love-07ac5006.svg",Io="/assets/upload-3bad9145.svg",M={icons_volumeNull:Pn,icons_recentlyAdded:On,icons_volume3:Ln,icons_orangeMusicTextLogoBlack:Mn,icons_volume2:Bn,icons_browse2:Dn,icons_volume1:xn,icons_orangeMusicLogoWhite:Rn,icons_searchIcon:An,icons_orangeMusicTextLogoBlackPng:Nn,icons_queueButton:jn,icons_orangeMusicLogoYellow:Un,icons_playlist:kn,icons_loopButton:Jn,icons_helpIcon:Gn,icons_playButton:Hn,icons_browse:Yn,icons_menuOptionsButton:St,icons_orangeMusicTextLogoWhite:$n,icons_backButton:Fn,icons_Albums:qn,icons_songs:Qn,icons_orangeMusicLogoBlack:Vn,icons_yourUploadedSongs:zn,icons_artist:Kn,icons_shuffleButton:Wn,icons_orangeMusicTextLogoWhitePng:Xn,icons_listenNow:Zn,icons_derpy:eo,icons_nextButton:to,icons_recentlyAddedV2:no,icons_playButtonV2:oo,icons_browseV2:io,icons_albumsV2:so,icons_listenNow2V2:ao,icons_yourUploads:ro,icons_playButton2:co,icons_listenNowV2:lo,icons_browse2V2:uo,v3_placeholder:mo,icons_MOGitems_add:go,icons_back:po,icons_forwards:fo,icons_close:_o,icons_pause:vo,icons_loop:Eo,icons_loop_song:ho,icons_play:yo,icons_settings:bo,current_year:new Date().getFullYear(),icons_love:To,icons_upload:Io};function R(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Pt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function X(e){for(const[t,n]of Object.entries(M)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function Ve(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function Co(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function tt(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function wo(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Ot(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ce(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function So(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Lt(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function Po(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function ke(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let be;const T=new Map;function Oo(e,t,n){T.has(e)||T.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!T.has(e))return;const r=Math.min(a/500,1);if(!T.has(e))return;const c=Mt(T.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||T.get(e).isChanging)&&(T.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",T.delete(e))}clearTimeout(be),be=setTimeout(()=>{T.has(e)&&!T.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(T.get(e).animationFrameId),T.delete(e))},500),T.get(e).isChanging=!0;const i=Date.now();T.get(e).animationFrameId=requestAnimationFrame(o)}function Lo(e,t,n,o,i){const s=i||2500;T.has(e)||T.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!T.has(e))return;const l=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!T.has(e))return;let g;o==="hardNewToOld"&&l<1?g=n:g=Mt(T.get(e).originalColor,Math.min(l,1),n),e.style.backgroundColor=g,l<1||T.get(e).isChanging?T.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",T.delete(e)),l==1&&(e.style.backgroundColor="",T.delete(e))}clearTimeout(be),be=setTimeout(()=>{T.has(e)&&!T.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(T.get(e).animationFrameId),T.delete(e))},s),T.get(e).isChanging=!0;const r=Date.now();T.get(e).animationFrameId=requestAnimationFrame(a)}function Mo(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function Mt(e,t,n){return Bo(n,e,t)}function Bo(e,t,n){const o=function(u){return u=u.toString(16),u.length===1?"0"+u:u},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),l=Math.round(i*(1-n)+r*n),g=Math.round(s*(1-n)+c*n),I=Math.round(a*(1-n)+d*n);return"#"+o(l)+o(g)+o(I)}function Bt(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=Do(o,i,s),r=je(a[0]),c=je(a[1]),d=je(a[2]);return xo({r,g:c,b:d})}function Do(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function je(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function xo(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}let _,k,_e,ve,Ee,ie;const ne={program:k,vertexShader:_e,fragmentShader:ve,positionBuffer:Ee};let Je=[];function Ro(e,t){e.innerHTML="";const n=ke(),o=document.createElement("canvas");o.id=n,e.appendChild(o);const i=document.getElementById(n);if(_=i.getContext("webgl"),!_){console.error("WebGL not supported"),L("WebGL not supported","error");return}i.width=window.innerWidth,i.height=window.innerHeight,_.viewport(0,0,_.canvas.width,_.canvas.height);const s=`
attribute vec4 a_position;
void main() {
    gl_Position = a_position;
}
`,a=`
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_colors[5];

float gradientNoise(in vec2 uv)
{
    return fract(52.9829189 * fract(dot(uv, vec2(0.06711056, 0.00583715))));
}

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 0.05;

    float blob1 = noise(st * 3.0 + vec2(t, t));
    float blob2 = noise(st * 3.0 + vec2(-t, t));
    float blob3 = noise(st * 3.0 + vec2(t, -t));
    float blob4 = noise(st * 3.0 + vec2(-t, -t));
    float blob5 = noise(st * 3.0 + vec2(t, 0.0));

    float blobs = (blob1 + blob2 + blob3 + blob4 + blob5) / 5.0;

    vec3 color = mix(u_colors[0], u_colors[1], abs(sin(t)));
    color = mix(color, u_colors[2], abs(cos(t)));
    color = mix(color, u_colors[3], abs(sin(t * 0.5)));
    color = mix(color, u_colors[4], blobs);

    float noiseValue = gradientNoise(gl_FragCoord.xy);
    color += (1.0 / 255.0) * noiseValue - (0.5 / 255.0);

    gl_FragColor = vec4(color, 1.0);
}
`;function r(u,E,f){const y=u.createShader(E);return u.shaderSource(y,f),u.compileShader(y),u.getShaderParameter(y,u.COMPILE_STATUS)?y:(console.error("Error compiling shader:",u.getShaderInfoLog(y)),u.deleteShader(y),null)}_e=r(_,_.VERTEX_SHADER,s),ve=r(_,_.FRAGMENT_SHADER,a),k=_.createProgram(),_.attachShader(k,_e),_.attachShader(k,ve),_.linkProgram(k),_.getProgramParameter(k,_.LINK_STATUS)||console.error("Error linking program:",_.getProgramInfoLog(k)),Ee=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,Ee);const c=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];_.bufferData(_.ARRAY_BUFFER,new Float32Array(c),_.STATIC_DRAW);const d=_.getAttribLocation(k,"a_position");_.enableVertexAttribArray(d),_.vertexAttribPointer(d,2,_.FLOAT,!1,0,0),window.addEventListener("resize",()=>I()),I();const l=[];for(let u=0;u<5;u++)l.push(_.getUniformLocation(k,`u_colors[${u}]`));Je=t.map(Dt);function g(u){u*=.001,I(),_.clear(_.COLOR_BUFFER_BIT),_.useProgram(k);const E=_.getUniformLocation(k,"u_resolution");_.uniform2f(E,_.canvas.width,_.canvas.height);const f=_.getUniformLocation(k,"u_time");_.uniform1f(f,u);for(let y=0;y<5;y++)_.uniform3fv(l[y],Je[y]);_.drawArrays(_.TRIANGLES,0,6),ie=requestAnimationFrame(g)}ie=requestAnimationFrame(g);function I(){const u=window.innerWidth,E=window.innerHeight;(i.width!==u||i.height!==E)&&(i.width=u,i.height=E,_.viewport(0,0,_.canvas.width,_.canvas.height))}ne.program=k,ne.vertexShader=_e,ne.fragmentShader=ve,ne.positionBuffer=Ee}function Dt(e){e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n/255,o/255,i/255]}function Ao(e,t){if(!e)return;t.program&&t.vertexShader&&t.fragmentShader&&(e.detachShader(t.program,t.vertexShader),e.detachShader(t.program,t.fragmentShader)),t.vertexShader&&e.deleteShader(t.vertexShader),t.fragmentShader&&e.deleteShader(t.fragmentShader),t.program&&e.deleteProgram(t.program),t.positionBuffer&&e.deleteBuffer(t.positionBuffer);const n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}function No(){ie&&(cancelAnimationFrame(ie),ie=null),Ao(_,ne)}function jo(e,t){Je=t.map(Dt)}const Uo=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,ko=`
<div class="UPLOADQUEUE-containerL2">
    <div class="UPLOADQUEUE-top">
        <div class="UPLOADQUEUE-top-text">
            <span class="UPLOADQUEUE-top-text-title">Upload Queue</span>
            <span class="UPLOADQUEUE-top-text-clear" id="UPLOADQUEUEclearQueueButton">Cancel</span>
        </div>
    </div>
    <div class="UPLOADQUEUE-bottom" id="UPLOADQUEUEbottomContainer">
        <div class="UPLOADQUEUE-bottom-currentlyUploadingItem">
            <div class="fileName" id="UPLOADQUEUEBOTTOM_songName">Song.mp3</div>
            <div class="estimatedSize" id="UPLOADQUEUEBOTTOM_bottom_text">Estimated Size - <span id="UPLOADQUEUEBOTTOM_fileSize">200mb</span></div>
            <div class="percentUploaded">
                <div id="specificChart" class="donut-size">
                    <div class="pie-wrapper">
                        <span class="label">
                            <span class="num">0</span><span class="smaller">%</span>
                        </span>
                        <div class="pie">
                            <div class="left-side half-circle"></div>
                            <div class="right-side half-circle"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;let Le=!1;function Jo(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=Uo,n.addEventListener("click",function(o){Le==!1?Ho(o):Te()}),t.innerHTML=ko}function Go(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function nt(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Le==!0&&J.length>0||Te()}function ue(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(J.length>0){t.innerHTML=J[0].file.name,n.innerHTML=ce(J[0].file.size*1.75),Yo(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=0;o<J.length;o++){const a=J[o].file.name,r=ce(J[o].file.size*2);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let ot;function Ho(e){Le=!0,ot=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",Te),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const g=ot.getBoundingClientRect();t=g.left+window.scrollX,n=g.top+window.scrollY;let I=t+"px",u=n+"px";o.style.left=I,o.style.top=u}const r=o.offsetWidth,c=o.offsetHeight,d=Ft("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",l),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function l(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",l),Te())}}function Te(){Le=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function Yo(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}let Me;async function $o(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Be("profile_picture"),n=`${S}/${t}/3`;Me=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Fo)}catch(t){console.error("Error initializing account image:",t)}}function Fo(e){e.stopPropagation(),qo(e)}async function qo(e){const n=await V([{displayText:"Settings",optionalSVG:"icons_settings",condition:"settings",function:"True"},{displayText:"Sign Out",optionalSVG:"None",condition:"signOut",function:"True"}],e,"return_promise");n.condition=="settings"?A("/settings/"):n.condition=="signOut"&&xt(),G()}async function xt(){await wi(),localStorage.clear(),location.reload()}function Qo(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${S}/${Me}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",Vo)}function Vo(e){e.stopPropagation(),zo(e)}async function zo(e){const n=await V([{displayText:"Settings",optionalSVG:"icons_settings",condition:"settings",function:"True"},{displayText:"Sign Out",optionalSVG:"None",condition:"signOut",function:"True"}],e,"return_promise");n.condition=="settings"?A("/settings/"):n.condition=="signOut"&&xt(),G()}const Ko=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Wo=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,Xo=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer MOG-item-controls-play" id="MOGIplayButton-{MOGI_placeholder_itemID}">
        <div>
            <div><img src="{icons_playButtonV2}"></div>
        </div>
        <img src="{MOG_image}">
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
</button>`,Rt=30;let de=0;async function Zo(){try{if(document.getElementById("MAINcontentPages").innerHTML+=X(Ko),localStorage.getItem("MOGitems")!=null){const t=JSON.parse(localStorage.getItem("MOGitems"));de+=t.length,it(t)}const e=await Jt(Rt,0);JSON.stringify(e)!=localStorage.getItem("MOGitems")&&(de+=e.length,it(e),localStorage.setItem("MOGitems",JSON.stringify(e))),R()&&Qo()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function At(){de=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Nt),e.innerHTML=""}function it(e){const t=document.getElementById("MOGgridContainer");t.innerHTML=X(Wo),st(e);const n=document.getElementById("MOGgridContainer");n.addEventListener("click",function(a){Nt(a,e)});let o,i=!1;n.addEventListener("touchstart",function(a){a.timeStamp,i=!1,o=setTimeout(function(){i||s(a,e)},500)}),n.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(o)}),n.addEventListener("scroll",function(){i=!0,clearTimeout(o)});function s(a,r){navigator.vibrate(1e3);const d=a.target.id.split("-")[1],l=r[d].project_id;jt(a,l)}t.addEventListener("scroll",async function(){const a=t.scrollTop,r=t.scrollHeight,c=t.clientHeight;if(a>=r-c){const d=await Jt(Rt,de);de+=d.length,d.length>0&&st(d)}})}function st(e){const t=document.getElementById("MOGgridContainer"),n=e.length,o=X(Xo);for(var i=0;i<=n-1;i++){const s=i,a=e[i].img,r=e[i].top,c=e[i].bottom,d=e[i].days,l=wo(d),g={itemsToReplace:[["MOG_image",`${S}/${a}/3`],["MOG_text1",`${r}`],["MOG_text2",`${c}`],["MOG_checkedDate",`${l}`],["MOGI_placeholder_itemID",`${s}`]]};t.innerHTML+=Ve(o,g)}}async function Nt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await Ke(i),a=JSON.parse(s);a.ProjectID=i,zt(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;jt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;A(`/projects/${i}`)}n.id==="MOGaddNewItem"&&A("/new-project/")}async function jt(e,t){e.stopPropagation();const o=await V([{displayText:"Play next",optionalSVG:"icons_playlist",condition:"playNext",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"True"},{displayText:"Play later",optionalSVG:"icons_playlist",condition:"playLater",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"True"}],e,"return_promise");o.condition=="playNext",Kt(o.optionalParams),G()}let at;function ze(e){return new Promise((t,n)=>{at=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){rt(),t("delete")}function d(){at.focus(),rt(),t("cancel")}i.addEventListener("click",l=>{const g=l.target;g===a?c():(g===r||g===i)&&d()}),o==="keyboard"&&!R()?r.focus():o=="mouse"&&!R()&&(G(),r.focus(),r.blur())})}function rt(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const ei=`<div class="ADMINusersTableInfoRow">
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
    <div class="settings_admin_views_users_table_view"> {Storage_Allowance}</div>
    <div class="settings_admin_views_users_table_view"> {Space_Used}</div>
</div>`,ti=`<h1>Admin</h1>
<br>
<details>
    <div class="SETTINGSdatabaseSchema">
        <details>
            <summary>Songs Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>URL</td>
                    <td>text</td>
                    <td><code>tQtTKehfwEBfxmUwHPWCRcrhqJiDoAjbcpWExRwPopqnwfrlaXRMahnibgdPmOfoWnmcwmzrtChTvhuiNWLOzAjMhjhjvKMJ</code></td>
                    <td>PRIMARY KEY</td>
                    <td>The songs URL/ID in the files table</td>
                </tr>
                <tr>
                    <td>ProjectID</td>
                    <td>text</td>
                    <td><code>dbd</code></td>
                    <td></td>
                    <td>The project that the song belongs too</td>
                </tr>
                <tr>
                    <td>SongName</td>
                    <td>text</td>
                    <td>Soft Universe</td>
                    <td></td>
                    <td>The songs name</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>int</td>
                    <td><code>296</code></td>
                    <td></td>
                    <td>The duration of a song in seconds</td>
                </tr>
                <tr>
                    <td>SongSequence</td>
                    <td>int</td>
                    <td><code>5</code></td>
                    <td></td>
                    <td>The sequence of the song (in the project)</td>
                </tr>
                <tr>
                    <td>Favourited</td>
                    <td>boolean</td>
                    <td><code>false</code></td>
                    <td></td>
                    <td>Wether or not the song is favourited (not currently functional)</td>
                </tr>
                <tr>
                    <td>FolderSize</td>
                    <td>bigint</td>
                    <td><code>13806435</code></td>
                    <td></td>
                    <td>The cumulative size of all the different qualites of audio that are processed for this song</td>
                </tr>
                <tr>
                    <td>Version</td>
                    <td>int</td>
                    <td><code>1</code></td>
                    <td></td>
                    <td>The version of the song (not currently functional)</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>Projects Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>project_id</td>
                    <td>text</td>
                    <td>ab4</td>
                    <td>PRIMARY KEY</td>
                    <td>A projects ID</td>
                </tr>
                <tr>
                    <td>time_created</td>
                    <td>bigint</td>
                    <td><code>1702417770167</code></td>
                    <td></td>
                    <td>The time that the project was created in unix millis</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>text</td>
                    <td>Notes...</td>
                    <td></td>
                    <td>A description for the project</td>
                </tr>
                <tr>
                    <td>picture_url</td>
                    <td>text</td>
                    <td><code>CDyCMSzihsIvggZyyjKNSBlhThRSmhfTKPVFLFgPNiNadZvtHxhbPRplabkURoqBFooqetnFtbIJnCVmTbVjdxDUOSLiHoPq</code></td>
                    <td></td>
                    <td>The ID/URL of the image that is used for the project</td>
                </tr>
                <tr>
                    <td>project_name</td>
                    <td>text</td>
                    <td>Cool Project</td>
                    <td></td>
                    <td>The name of the project</td>
                </tr>
                <tr>
                    <td>project_contributors</td>
                    <td>text</td>
                    <td>Cool Person, Other...</td>
                    <td></td>
                    <td>A string of the project contributors</td>
                </tr>
                <tr>
                    <td>owner</td>
                    <td>json[]</td>
                    <td><code>{"{\\"owner\\":\\"1849b930-da1f-4c06-8506-19ffea24752f\\",\\"permissions\\":\\"owner\\"}"}</code></td>
                    <td></td>
                    <td>A json of what permissions a user has with the project</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>Files Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>file_url</td>
                    <td>text</td>
                    <td><code>mdHzETrbYJFLDjFSilFKBhurwxGXWZYGfyQskQnQhfJhMtHyQCsLUzDdwbGZXbJogwvBSDQhcjpIVqHezKOrepzhMjYmSEtK</code></td>
                    <td>PRIMARY KEY</td>
                    <td>The ID/URL of the file</td>
                </tr>
                <tr>
                    <td>cache_state</td>
                    <td>bool</td>
                    <td>true/false</td>
                    <td></td>
                    <td>Wether or not the file is in the cache</td>
                </tr>
                <tr>
                    <td>owner</td>
                    <td>json[]</td>
                    <td><code>{"{\\"owner\\":\\"5859b930-da1f-4c06-8506-19ffea24752f\\",\\"permissions\\":\\"owner\\"}"}</code></td>
                    <td></td>
                    <td>A json of the ownership status of the file</td>
                </tr>
                <tr>
                    <td>file_type</td>
                    <td>text</td>
                    <td>local/image</td>
                    <td></td>
                    <td>The file type(but not format/extension) and location of the file (could be cloud/audio for example)</td>
                </tr>
                <tr>
                    <td>last_time_accessed</td>
                    <td>bigint</td>
                    <td><code>1702417839517</code></td>
                    <td></td>
                    <td>The time that the file was last accessed by anybody, is used for the purposes of cache pruning</td>
                </tr>
                <tr>
                    <td>file_created_time</td>
                    <td>bigint</td>
                    <td><code>1702417809517</code></td>
                    <td></td>
                    <td>The time that the file was created in unix millis</td>
                </tr>
                <tr>
                    <td>file_size</td>
                    <td>bigint</td>
                    <td><code>18650630</code></td>
                    <td></td>
                    <td>The size of the combined different qualities of the file</td>
                </tr>
            </table>
        </details>
        <br>
        <details>
            <summary>User Table</summary>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Example Value</th>
                    <th>Modifiers</th>
                    <th>Comment</th>
                </tr>
                <tr>
                    <td>uuid</td>
                    <td>text</td>
                    <td><code>5859b930-db1f-1c06-8506-19efea24752f</code></td>
                    <td>PRIMARY KEY</td>
                    <td>A users true ID, should never be publically exposed</td>
                </tr>
                <tr>
                    <td>username</td>
                    <td>text</td>
                    <td>username?</td>
                    <td></td>
                    <td>A users display name, and since a user will log in with their email, there could be an infinite amount of Taylor Swifts...</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>text</td>
                    <td><code>$2a$10$...</code></td>
                    <td></td>
                    <td>Hashed and salted users password</td>
                </tr>
                <tr>
                    <td>profile_picture</td>
                    <td>text</td>
                    <td><code>sXFQzaXHHODDsYijvleRNYKxLUxPYpfVkluCdkPjTFXdonxbVtqjyIWRoKLWWutBPWLcNNqqzfiSmIUTWnNulhfKUMOQoqcU</code></td>
                    <td></td>
                    <td>The file ID for the users current profile picture</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>text</td>
                    <td><code>email@example.com</code></td>
                    <td></td>
                    <td>The users email address</td>
                </tr>
                <tr>
                    <td>description</td>
                    <td>text</td>
                    <td>greetings humans of the homo sapient race</td>
                    <td></td>
                    <td>The users text description, not currently changeable/accessible by the user</td>
                </tr>
                <tr>
                    <td>verified</td>
                    <td>boolean</td>
                    <td><code>true</code></td>
                    <td></td>
                    <td>Wether or not a user is meant to be on the service/paying</td>
                </tr>
                <tr>
                    <td>last_logged_in</td>
                    <td>bigint</td>
                    <td><code>0</code></td>
                    <td></td>
                    <td>Should be updated every time the user logs in/does an action</td>
                </tr>
                <tr>
                    <td>date_joined</td>
                    <td>bigint</td>
                    <td><code>1702226385860</code></td>
                    <td></td>
                    <td>The time that the user joined in unix millis</td>
                </tr>
                <tr>
                    <td>last_state</td>
                    <td>text</td>
                    <td><code>{"PLAYBACK_loop_state":"off","PLAYBACK_shuffle_state":"off","progress":0,"current_path":"/settings/","current_queue":[],"current_index":0}</code></td>
                    <td></td>
                    <td>A json of the users last state which is retrieved every time they open a page to enable sync</td>
                </tr>
                <tr>
                    <td>admin</td>
                    <td>boolean</td>
                    <td><code>true</code></td>
                    <td>DEFAULT false</td>
                    <td>Should only be true for the admin user/users</td>
                </tr>
                <tr>
                    <td>storage_allowance</td>
                    <td>bigint</td>
                    <td>473741824</td>
                    <td></td>
                    <td>A given users storage allowance in bytes</td>
                </tr>
            </table>
        </details>
    </div>
    <summary style="font-weight: bolder;font-size: 1.3rem; margin-bottom: 1rem;">
        Tables schema
    </summary>
</details>
<br>
<h2>Users</h2>
<p id="settings_admin_selected_items_visualition">Selected Users: 0</p>
<div class="ADMINusersTableEnvironment" id="usersTableEnvironment">
    <div class="ADMINusersTableTopRow">
        <div></div>
        <div>Username</div>
        <div>Email</div>
        <div>UUID</div>
        <div>Payee</div>
        <admin>Admin</admin>
        <admin>Allowance</admin>
        <div>Used</div>
    </div>
    <div class="ADMINusersTableInforRowsContainer" id="usersTableInforRowsContainer">
    </div>
</div>
<br>
<br>
<br>
<details>
    <summary><b style="font-size: 1.2rem;">Update column for selected users:</b></summary>
    <p>First select the users from the table above, then choose a column to update, and the new data to be put there instead.</p>
    <div>
        <div class="SETTINGSmodalFormAreaContainer">
            <label for="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" class="SETTINGSmodalFormAreaText">Column To Update</label><br>
            <input type="text" name="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" id="SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated" class="SETTINGSmodalFormInput" required>
            <br><br>
            <label for="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" class="SETTINGSmodalFormAreaText">New Data</label><br>
            <input type="text" name="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" id="SETTINGS_ADMIN_UDPATE_COLUMN_new_data" class="SETTINGSmodalFormInput" required>
            <br><br>
            <button id="SETTINGS_ADMIN_UPDATE_COLUMN_submit_button" class="SETTINGSmodalSubmit">Update</button>
        </div>
    </div>
</details>
<br><br>
<details>
    <summary><b style="font-size: 1.2rem;">DELETE USER BY ID</b></summary>
    <p>Warning, once you delete a user, they are gone, and all their data goes with them, and if there are any shared projects where they are an owner, that project will be deleted, and all the files with it, only do so if you want to completely delete this user and <b>FULLY UNDERSTAND THE CONSEQUENCES</b></p>
    <div class="SETTINGSmodalFormAreaContainer" id="SETTINGSdeleteForm">
        <label for="user_to_delete" class="SETTINGSmodalFormAreaText">DELETE: User ID</label><br>
        <input type="text" name="user_to_delete" id="SETTINGS_ADMIN_DELETE_USER_user_to_delete" class="SETTINGSmodalFormInput" required>
        <br><br>
        <button id="SETTINGS_ADMIN_DELETE_USER_submit_button" class="SETTINGSmodalSubmit">DELETE USER</button>
    </div>
</details>
<!-- keep six of these at the bottom so that all content can be seen -->
<br><br>
<br><br>
<br><br>`,ct=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Ut(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){ni(a,r,c)}}function ni(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),V(o,e,n)}const dt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,me=`<h1>General</h1>
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
<p>Thank you for using OM2 <img style="filter: var(--make-svg-orange);" src="{icons_love}" height="20"></p>
<br><br>
<br><br>
<br><br>`,lt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,oi=`<div class="settings_container">
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
</div>`;let Ie="general",Q;async function ii(){const e=await Be("admin");e=="true"&&!R()?(Ie="admin",Q=[{name:"general",markup:me,button_id:"settings_button_general",function:ge},{name:"user",markup:lt,button_id:"settings_button_user",function:pe},{name:"admin",markup:ct,button_id:"settings_button_admin",function:mt}]):e=="false"&&!R()?Q=[{name:"general",markup:me,button_id:"settings_button_general",function:ge},{name:"user",markup:lt,button_id:"settings_button_user",function:pe}]:R()&&e=="true"?(Ie="admin",Q=[{name:"general",markup:me,button_id:"settings_button_general",function:ge},{name:"user",markup:dt,button_id:"settings_button_user",function:pe},{name:"admin",markup:ct,button_id:"settings_button_admin",function:mt}]):Q=[{name:"general",markup:me,button_id:"settings_button_general",function:ge},{name:"user",markup:dt,button_id:"settings_button_user",function:pe}]}async function si(){await ii();const e=document.getElementById("MAINcontentPages");let t=oi;for(const[i,s]of Object.entries(M)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");ut(Ie);for(var o=Q.length-1;o>=0;o--){const i=Q[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=Q.find(l=>l.button_id===r).name;ut(d)})}n.addEventListener("click",function(){A("/")})}function Ge(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function ut(e){Ie=e;const t=["users_img"],n=document.getElementById("view_container"),o=Q.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(M)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${S}/${Me}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function ge(){}function pe(){Ut("user-id","settings_views_user_pfp_img","update_user_pfp")}let se=[];async function mt(){if(await Be("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=ti;for(const[a,r]of Object.entries(M)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${S}/${Me}/4/`),o=o.replace(c,d)}n.innerHTML=o,He(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")L("Error Updating Column: empty inputs","error");else for(var d=se.length-1;d>=0;d--){const l=se[d];console.log(l),Ci(l,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){L("Error Deleting User: user UUID is empty","error");return}let c=null;for(let g=0;g<j.length;g++)j[g].uuid==r&&(c=j[g].username);if(c===null){L("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,l=await ze(d);l==="cancel"||l==="delete"&&((await bi(r)).success=="success"?L("Successfully deleted the user","success"):L("Failed to delete the user","error"),He())})}let j;async function He(){const e=await Ii();j=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<j.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=j[n].username,s=j[n].uuid,a=j[n].verified,r=j[n].email;let c=j[n].storage_allowance;c=ce(c);const d=j[n].admin,l=n;let g=j[n].storage_used;g=ce(g);let I=ei,u=j[n].profile_picture;u=`${S}/${u}/3`;for(let E=0;E<o.length;E++){const f=o[E].toString(),y=new RegExp(`\\{${f}\\}`,"g");let b="";f==="Username"?b=i:f==="Email"?b=r:f==="UUID"?b=s:f==="Verified"?b=a:f==="Space_Used"?b=g:f==="Storage_Allowance"?b=c:f==="profile_picture_url"?b=u:f==="checkbox_number"?b=l:f==="Admin"&&(b=d),I=I.replace(y,b)}t.innerHTML+=I}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&ai()})}function ai(){se=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=j[i.id].uuid;se.push(a)}),o.innerHTML=`Selected Users: ${se.length}`}const ri=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer">
        <div class="SETTINGSmodalTopTextContainer">Login</div>
        <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" tabindex="0" name="email" id="email" required>
            <br><br>
            <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="current-password" tabindex="0" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" tabindex="0" name="Submit" value="Submit">
            <button class="SETTINGSmodalSignup" tabindex="0" id="SETTINGSmodalSignupButton">Signup?</button>
        </form>
    </div>
    <div>
        <p style="color: var(--grey);">
            This Service uses a cookie.
        </p>
    </div>
</div>`,ci=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
    <div class="SETTINGSmodalContainer SETTINGSsignupContainer">
        <a id="SIGNUPMODAL_return_to_login_button" style="text-decoration: none; color: var(--text-3);cursor: pointer;">
            <p style="padding-left: 1rem; position: relative;">Return to Login</p>
        </a>
        <div class="SETTINGSmodalTopTextContainer">Sign Up</div>
        <form class="SETTINGSmodalFormAreaContainer SETTINGSmodalSignupFormAreaContainer" id="SETTINGSsignupForm">
            <label for="username" class="SETTINGSmodalFormAreaText">Username</label><br>
            <input type="text" name="username" id="username" required>
            <br><br>
            <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
            <input type="email" name="email" id="email" required>
            <br><br>
            <label for="new-password" class="SETTINGSmodalFormAreaText">Password</label><br>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Signup">
        </form>
    </div>
</div>`;function di(){let e="MAINcontentPages",t=ci;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",li),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){A("/")})}async function li(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${B}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)L(`There was an error, ${o}`,"error");else{const i=o;L("Sign up Successful, Log in now","success"),A("/")}}catch{L("There was an error, try again","error")}}let oe=!1,Ce=!1,Ye=!1,we=!1;async function ui(){await pi()?(gn(),we=!0):Ce||(kt(),Ce=!0)}async function mi(){Ce=!1,oe=!1,Ye=!1,kt(),Ce=!0}function kt(){fi();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${B}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{gt(),di()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),oe)return!1;oe=!0;const s=n.value,a=o.value;try{await gi(s,a)?(we=!0,L("Login Successful","success"),gn(),gt()):(we=!1,L("Error Logging In","error")),oe=!1}catch(r){console.error("Error:",r),oe=!1}return!1})}async function gi(e,t){try{return(await(await fetch(`${B}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?L("The server is down","error"):console.error(n),!1}}async function pi(){try{const e=await fetch(`${B}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&L("The server is down","error")}}function fi(){let e="MAINcontentPages",t=ri;document.getElementById(e).innerHTML+=t}function gt(){if(Ye===!0)return;Ye=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function _i(){const e=await Be("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;A(r),ys(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=m,d=v,l=ws();l.current_path=r,l.current_queue=c,l.current_index=d;const g=i(l);g!==o&&(hi("last_state",l),o=g,n.set("playback_states",g))}function a(){A(currentPath)}}function vi(){we==!1?(Ge(),mi()):(Gt(),Ge(),Zo())}function pt(e,t){At(),Ge(),t!==null?vt(e,t):vt(e)}function ft(){At(),Gt(),si()}const _t={"/":vi,"/new-project/":fe,"/new-project":fe,"/new/":fe,"/new":fe,"/projects/:projectID":pt,"/projects/:projectID/:songURL":pt,"/settings/":ft,"/settings":ft};function Ei(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){A("/")}}function A(e){const t=Object.keys(_t);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=_t[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Ei()}async function hi(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${B}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function yi(e){try{const t={searchQuery:e};return await(await fetch(`${B}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function bi(e){try{const t={uuid:e};return await(await fetch(`${B}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function Ti(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${B}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&L("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Be(e){try{return(await(await fetch(`${B}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function ae(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${B}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function Ke(e){try{return(await(await fetch(`${B}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Jt(e,t){try{const i=(await(await fetch(`${B}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function fe(){try{const o=`/projects/${(await(await fetch(`${B}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;A(o)}catch(e){console.error("Error:",e)}}async function Ii(){try{return(await(await fetch(`${B}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Ci(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${B}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){L("Table Updated Successfully","success"),He();return}else{L(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){L(`Error Updating Column ${t}: ${o}`,"error");return}}async function wi(){try{const t=await(await fetch(`${B}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const Si=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function $e(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=Si}}const Pi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Oi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
    <div class="PROJECTview-projectTable-rowItem-4">
        <div>{PROJECTviewRow_songDuration}</div>
        <button tabindex="0">
            <div>
                <img src="{icons_menuOptionsButton}" height="14" width="14">
            </div>
        </button>
    </div>
</div>`,Li=`<div class="PROJECTviewContainerEnvironment">
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
        <!--
        <div class="PROJECTVIEW-SettingsBox-Environment" id="PROJECTVIEW_settingBox_environment"></div>-->
    </div>
    <div class="PROJECTviewMOREdescriptionboxEnvironment" id="PROJECTviewMOREdescriptionboxEnvironment">
        <div class="PROJECTviewMOREdescriptionContainer">
            <button tabindex="0" class="PROJECTviewMOREcloseButton" id="PROJECTviewMOREcloseButton">
                <img src="{icons_close}" width="20" height="20">
            </button>
            <div class="PROJECTviewMOREdescriptionHeaderContainer">
                <h1 id="PROJECTVIEW_DESCRIPTION_more_title">{PROJECTviewMOREtitle}</h1>
                <h3 id="PROJECTVIEW_DESCRIPTION_more_artist_year">{PROJECTviewMOREartist} | {PROJECTviewMOREyear}</h3>
            </div>
            <div class="PROJECTviewMOREdescriptionContentContainer" contenteditable="true" id="PROJECTviewMOREdescriptionC">
                <textarea id="PROJECTviewMOREdescriptionP"></textarea>
            </div>
        </div>
    </div>
</div>`,J=[];let De=!1,he=!1,Mi=!0,p;async function vt(e,t){De=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?p=JSON.parse(n):Pt()==!0?p={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0}:p={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0},xi(p),$e("","blank"),sessionStorage.setItem("description",p.Description),Ht(),ye(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{A("/")}),await le(),Yt(p.ProjectName),Di(),Ut(p.ProjectID,"PROJECTviewDisplayImage","update_project_image"),ki(),$e(p,"full"),t!=null){for(var i=p.ProjectJSON.length-1;i>=0;i--)if(p.ProjectJSON[i].URL==t){const a=`${p.ProjectJSON[i].SongSequence}-${p.ProjectJSON[i].Version}`;Bi(a)}}}function Gt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",De=!1}async function le(){if(!De)return;const e=p.ProjectID,t=await Ke(e);if(t=="")return;const n=structuredClone(p),o=JSON.parse(t);if(o.ProjectID=e,p=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(p)}`),n.Description!==p.Description){const s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");s.innerText=p.ProjectName,a.innerText=`${p.ProjectContributors} | ${Ot(p.TimeCreated)}`,sessionStorage.setItem("description",p.Description),Ht()}if(n.PictureURL!==p.PictureURL){const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${S}/${p.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==p.ProjectContributors){const s=document.getElementById("PROJECTviewDisplayTitleH3");s.innerText=p.ProjectContributors}if(n.ProjectName!==p.ProjectName){const s=document.getElementById("PROJECTviewDisplayTitleH1");s.innerText=p.ProjectName}if(n.ProjectJSON!==p.ProjectJSON)if(n.ProjectJSON==null||p.ProjectJSON==null)ye();else if(n.ProjectJSON.length!==p.ProjectJSON.length)ye();else{let s=0;for(var i=p.ProjectJSON.length-1;i>=0;i--)p.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&ye()}$e(p,"full")}function Bi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=Lt(Lo,0),o=Bt("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),Mo(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function Di(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),s=document.getElementById("PROJECTviewDisplayDescription"),a=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),l=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),g=document.getElementById("PROJECTviewDisplayMenuButton"),I=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),u=document.querySelector(".PROJECTviewDisplayImage"),E=document.getElementById("PROJECTviewMobileStickyHeader"),f=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const y=document.getElementById("PROJECTviewMOREdescriptionP"),b=new IntersectionObserver(h,{threshold:.1}),$=sessionStorage.getItem("description");y.innerText=$,i.addEventListener("click",function(){U()}),s.addEventListener("dblclick",function(){U()});let N=0;s.addEventListener("touchend",function(P){const O=new Date().getTime();O-N<300&&(P.stopPropagation(),U()),N=O}),c.addEventListener("click",function(){D(p)}),a.addEventListener("click",function(P){P.target===a&&D(p)}),d.addEventListener("click",function(){zt(p)}),l.addEventListener("click",function(){hs(p)}),g.addEventListener("click",function(){Et(event)}),I.addEventListener("click",function(){Et(event)}),b.observe(u),e.addEventListener("blur",function(P){const O=e.innerText;O!==n&&(Yt(O),ae(p.ProjectID,"project_name",O),p.ProjectName=O)}),t.addEventListener("blur",function(P){const O=t.innerText;O!==o&&(ae(p.ProjectID,"project_contributors",O),p.ProjectContributors=O)});function U(){a.style.display="grid",R()&&(r.style.zIndex="40")}function h(P,O){P.forEach(H=>{H.isIntersecting&&R()?(E.style.backdropFilter="none",E.style.backgroundColor="transparent",f.style.visibility="hidden"):H.isIntersecting&&!R()||!H.isIntersecting&&!R()?(E.style.backdropFilter="",E.style.backgroundColor="",f.style.visibility=""):!H.isIntersecting&&R()&&(E.style.backdropFilter="blur(15px)",E.style.backgroundColor="var(--background-transparent)",f.style.visibility="visible")})}function D(P){const O=y.value;sessionStorage.setItem("description",O),ae(P.ProjectID,"description",O),a.style.display="none",y.innerText=O,r.style.zIndex=""}}function xi(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${Ot(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${S}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=Ve(X(Li),t)}function Ht(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function Yt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Et(e){e.stopPropagation(),e.target;const t=p.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],V(n,e)}async function Ri(e){const t=`Are you sure that you want to delete <em><b>${p.ProjectName}</b></em>? This action is not reversable.`;if(await ze(t)==="delete"){await Ai(),G(),A("/");return}G()}async function Ai(){const e=p.ProjectID;localStorage.removeItem(`project-${e}`);try{const n=await(await fetch(`${B}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.error("Error:",t)}}function ye(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=X(Pi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(p.ProjectJSON);const o=Bt("--orange"),i=u=>`#${u.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(E=>parseInt(E,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let u=0;u<n.length;u++){let E=X(Oi);const f=n[u],y={itemsToReplace:[["PROJECTviewRow_img",`${S}/${p.PictureURL}/3`],["PROJECTviewRow_songTitle",`${f.SongName}`],["PROJECTviewRow_artistName",`${p.ProjectContributors}`],["PROJECTviewRow_projectName",`${ce(f.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(f.Duration/60)}:${(f.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${f.SongSequence}-${f.Version}`],["PROJECTviewRow_contentEditable",`${Mi}`]]};E=Ve(E,y),t.insertAdjacentHTML("beforeend",E);{const b=t.lastElementChild;b.addEventListener("dragstart",a),b.addEventListener("dragover",c),b.addEventListener("drop",d)}}function a(u){u.dataTransfer.setData("text/plain",u.target.dataset.rowId),u.dataTransfer.getData("text/plain"),s=u.srcElement,So(u.srcElement)}const r=Lt(Oo,0);function c(u){u.preventDefault(),u.dataTransfer.dropEffect="move";const E=u.target.closest(".PROJECTview-projectTable-rowContainer");if(E!==s){const f=getComputedStyle(E).backgroundColor,y=i(f);r(E,y,o)}}function d(u){u.preventDefault();const E=u.dataTransfer.getData("text/plain"),f=document.querySelector(`[data-row-id="${E}"]`),y=u.target.closest(".PROJECTview-projectTable-rowContainer");if(y){const $=structuredClone(p),N=y.getAttribute("data-row-id");y.before(f);const U=`${E}|${N}`;setTimeout(async()=>{await ae(p.ProjectID,"SongsTableChangeSongSequenceOrder",U),le()},1);let h=[];for(var b=0;b<t.children.length;b++){if(b==0)continue;const D=t.children[b],H=D.dataset.rowId.split("-")[0];let Z=$.ProjectJSON[H-1];Z.SongSequence=b,h.push(Z),D.style.backgroundColor="",D.dataset.rowId=`${b}-1`}p.ProjectJSON=h}}t.addEventListener("click",function(u){const E=u.target;if(u.stopPropagation(),E.tagName==="BUTTON"){const f=E.closest(".PROJECTview-projectTable-rowContainer");f&&(f.getAttribute("data-row-id"),Ni(u))}});const l=t.querySelectorAll("[contenteditable]"),g=[],I=u=>{const f=u.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),y=u.target.textContent,b=g.find(h=>h.dataRowIDField===f);if((b?b.currentText:"Row ID not found")==y)return;for(var N=g.length-1;N>=0;N--)g[N].dataRowIDField===f&&(g[N].currentText=y);const U=`${f}-${y}`;ae(p.ProjectID,"project_song_title",U)};l.forEach(u=>{u.addEventListener("blur",I),g.push({dataRowIDField:u.parentElement.parentElement.getAttribute("data-row-id"),currentText:u.innerText})})}function Ni(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],V(i,e)}function ji(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(p);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,bs(i,o)}async function Ui(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await ze(t)==="delete"&&(await Ti(p.ProjectID,e.songID),le()),G()}function ki(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){Ji(o)}}async function $t(){const e=J[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;he=!0,Go(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;ue(a),a===100&&ue(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){L("Storage limit reached","error");for(var a=J.length-1;a>=0;a--)J.shift();he=!1,nt(),ue(0)}he=!1,J.shift(),nt(),ue(0),J.length>0&&await $t(),p.ProjectID==n&&De==!0&&le()},i.onerror=function(){L("Upload Failed","error")},i.open("POST",`${B}/files/upload_audio/${n}`,!0),i.send(o)}async function Ji(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:p.ProjectID,file:n};J.push(o),he||await $t()}}const Gi=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function Hi(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&L("Storage limit reached","error"),n!=="update_user_pfp"?Fi():(qi(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${B}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function Yi(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await Hi(o,t,n)}const $i=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Se;async function V(e,t,n){if(n===void 0)ht(e,t,!1);else if(n!==void 0&&n==="update_project_image")yt(e,t,"update_project_image");else if(n!==void 0&&n==="update_user_pfp")yt(e,t,"update_user_pfp");else if(n!==void 0&&n==="return_promise")return await ht(e,t,!0)}async function ht(e,t,n){return new Promise((o,i)=>{Se=document.activeElement;let s=t.clientX,a=t.clientY;const r=document.querySelector("main"),c=document.querySelector(".topHalf-container");R()&&(r.style.zIndex="40",c.style.zIndex="0");const d=document.getElementById("MENUmodalEnvironment");d.innerHTML=$i,d.style.display="block";const l=document.getElementById("MENUmodalBody");let g=s+"px",I=a+"px";d.addEventListener("click",qt),l.style.left=g,l.style.top=I;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u==="keyboard"){const h=Se.getBoundingClientRect();s=h.left+window.scrollX,a=h.top+window.scrollY,g=s+"px",I=a+"px",l.style.left=g,l.style.top=I}for(let h=0;h<e.length;h++)Qi(e[h]);const f=l.children[0],y=l.offsetWidth,b=l.offsetHeight,$=Ft("MENUmodalBody"),N=l.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!R()?f.focus():u=="mouse"&&!R()&&(f.focus(),f.blur()),document.addEventListener("keydown",U),$.xOverflow===!0&&(g=s-y+"px",l.style.left=g),$.yOverflow===!0&&(I=a-b+"px",l.style.top=I);for(let h=0;h<N.length;h++){const D=N[h];D.setAttribute("data-menu-item-id",h),D.addEventListener("click",function(P){P.stopPropagation();const H=P.target.getAttribute("data-menu-item-id"),Z=e[H].function,Ae=e[H].optionalParams;if(Z=="TEST")console.log("the button worked",Ae);else if(Z!="None"){if(n===!0){const pn={condition:e[H].condition,optionalParams:Ae};o(pn);return}Vi[Z](Ae);return}else return})}function U(h){(h.key==="Escape"||h.keyCode===27)&&(document.removeEventListener("keydown",U),G())}})}function yt(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";R()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=fn,r.style.display="block",r.addEventListener("click",qt);const l=document.getElementById("MENUmodalBody"),g=document.getElementById("MENUmodalBody_image_select_file_drop_area"),I=document.getElementById("MENUmodalBody_image_select_file_select_button"),u=document.getElementById("MENUmodalBody_image_select_preview_area"),E=document.getElementById("MENUmodalBody_image_select_submit_button"),f=document.getElementById("MENUmodalBody_image_select_submit_button_container");l.style.left=c,l.style.top=d;let y,b;function $(h,D){return function(){const P=this,O=arguments;clearTimeout(b),b=setTimeout(()=>{h.apply(P,O)},D)}}function N(h,D,P){$(Yi,100)(h,D,P)}function U(h){if(y){const D=URL.createObjectURL(y),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");u.src=D,E.style.visibility="visible",f.style.outline="3px solid var(--primary)",E.addEventListener("click",()=>{N(y,h.project_id,h.MenuType),P.style.visibility="visible"})}else console.log("No file selected.")}g.addEventListener("dragover",h=>{h.preventDefault()}),g.addEventListener("drop",h=>{h.preventDefault(),y=h.dataTransfer.files[0],U(e)}),I.addEventListener("click",()=>{const h=document.createElement("input");h.type="file",h.accept="image/*",h.addEventListener("change",D=>{y=D.target.files[0],U(e)}),h.click()})}function Fi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G(),le()}function qi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",G()}function Ft(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let l=!1,g=!1;return c>n&&(l=!0),d>o&&(g=!0),{xOverflow:l,yOverflow:g}}function Qi(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Gi.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(M)){const l=new RegExp(`\\{${c}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function qt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function G(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Se&&Se.focus()}const Vi={PROJECT_VIEW_delete_project(e){Ri(),G()},PLAYBACK_add_songs_to_queue(e){Kt(e),G()},PROJECT_VIEW_delete_song(e){Ui(e)},PROJECT_VIEW_add_song_to_queue(e){ji(e)}},zi=`<div class="LCDbody">
    <div class="LCDPlaybackStoppedContainer" id="LCDPlaybackStoppedContainer">
        <div class="image"></div>
        <div class="title">
            <h1>LA Music</h1>
        </div>
        <div class="other"></div>
    </div>
    <div class="LCDcontentContainer">
        <div class="LCDleftImage" id="MusicEnjoyOpenButton">
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
</div>`;function Ki(){Wi(),Qt(),document.getElementById("LCDmenuButton").addEventListener("click",function(i){bt(i)}),Xi();const t=document.getElementById("LCDbody");let n;t.addEventListener("touchstart",function(i){i.timeStamp,n=setTimeout(function(){o(i)},500)}),t.addEventListener("touchend",function(i){i.timeStamp,clearTimeout(n)});function o(i){navigator.vibrate(1e3);const s=i.target.children[1].children[1].children[0].children[0].children[2].dataset.songId;bt(i,s)}}function Wi(){let e="LCDbody",t=zi;for(const[o,i]of Object.entries(M)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Qt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?c=d+10:c=l,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}async function bt(e,t){e.stopPropagation();let o=e.target.dataset.songId;t!=null&&(o=t);const s=await V([{displayText:"Go to song",optionalSVG:"None",function:"True",condition:"goto",optionalParams:{songId:o}}],e,"return_promise");if(s.condition=="goto"){const r=s.optionalParams.songId;let c;for(var a=m.length-1;a>=0;a--)if(m[a].url==r){c=m[a].project_id;break}c!=null&&A(`/projects/${c}/${r}`)}G()}function Xi(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",Zi)})}function Zi(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Cs(n)}function es(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}const ts=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,ns=`<div class="TOPRIGHT-topHalf-right-content">
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
            <div class="TOPRIGHT-accountcontrols-buttonarea-uploadQueue-container" id="uploadQueueButtonContainer">
                <button tabindex="0" class="TOPRIGHT-accountcontrols-buttonarea-uploadQueue-positioner" id="uploadQueueButton">
                    <div>
                        <img src="{icons_upload}" alt="upload queue icon" height="23" id="uploadIcon" style="filter: var(--make-svg-black);" />
                    </div>
                </button>
            </div>
            <div class="TOPRIGHT-accountcontrols-buttonarea-queue-container">
                <button tabindex="0" class="TOPRIGHT-accountcontrols-buttonarea-queue-positioner" id="queueButton">
                    <div>
                        <img src="{icons_queueButton}" alt="next up queue icon" height="10" id="queueIcon" />
                    </div>
                </button>
            </div>
            <button tabindex="0" class="TOPRIGHT-accountImageContainer" id="TOPRIGHTaccountImgButton">
                <div class="TOPRIGHT-accountImageContainer-imgContainer">
                    <img src="" id="TOPRIGHTaccountImg" alt="user profile account image">
                </div>
            </button>
        </div>
    </div>
</div>`,os=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`;function is(){let e="topleftContentArea",t=ts;for(const[n,o]of Object.entries(M)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ss(){let e="toprightContentArea",t=ns;for(const[n,o]of Object.entries(M)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function as(){let e="MAINcontentContainer",t=os;for(const[n,o]of Object.entries(M)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const rs=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;let z="hidden";function cs(){as();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");Fe(z),e.addEventListener("click",ds),t.addEventListener("click",ls),q()}function ds(){if(z==="hidden"){z="visible",Fe(z);return}if(z==="visible"){z="hidden",Fe(z);return}}function Fe(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Pt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function q(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=v+1;t<m.length;t++){m[t].id=t;const n=m[t],o=vs(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",_s),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",ps),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&fs(r)}),i.addEventListener("dragstart",us),i.addEventListener("dragover",ms),i.addEventListener("drop",gs),e.appendChild(i)}}function ls(){const e=v+1;e>=0&&e<m.length?m.splice(e):m.length=0,q()}function us(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function ms(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function gs(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(r=>r.id===parseInt(t)),i=m.find(r=>r.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),w.splice(s,1),w.splice(a,0,o),q())}function ps(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),w.splice(o,1)),q()}function fs(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];V(o,e)}function _s(e){}function vs(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=rs;for(let c=0;c<t.length;c++){const d=t[c].toString(),l=new RegExp(`\\{${d}\\}`,"g");let g="";d==="QUEUE_item_image"?g=`${S}/${n}/3`:d==="QUEUE_item_title"?g=o:d==="QUEUE_item_artist"?g=i:d==="icons_menuOptionsButton"?g=St:d==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(l,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}class Es{constructor(){this.events={}}on(t,n){this.events[t]||(this.events[t]=[]),this.events[t].push(n)}off(t,n){this.events[t]&&(this.events[t]=this.events[t].filter(o=>o!==n))}emit(t,...n){this.events[t]&&this.events[t].forEach(o=>{o(...n)})}}let m=[],w=[],v=0,Pe="",qe="",Vt="",F="paused",C="off",Y="off";document.getElementById("audio");document.getElementById("PLAYERsource");const x=new Es;function zt(e){m=[],v=0,m=xe(e),m.length>0&&(F="playing",W())}function hs(e){m=[],v=0,m=xe(e),m.length>0&&(Y="off",We(),F="playing",W())}function xe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL,s=e.ProjectID;let a=e.ProjectJSON;if(e.ProjectJSON===null)return t;try{for(const r of a){const c=r.SongName,d=r.Duration,l=r.URL;t.push({img:i,song_name:c,url:l,duration:d,project_name:o,project_contributors:n,project_id:s})}}catch(r){console.log(r)}return t}function ys(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,v=n,Ms(o),m!==void 0&&m.length>0&&Ss(i)}async function Kt(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await Ke(t),i=JSON.parse(o);i.ProjectID=t;const s=xe(i);if(!(s.length<1)){if(n==="later")m=m.concat(s),w=w.concat(s);else if(n==="next"){let a=m.slice(0,v+1),r=m.slice(v+1);m=a,m=m.concat(s),m=m.concat(r),a=w.slice(0,v+1),r=w.slice(v+1),w=a,w=w.concat(s),w=w.concat(r)}q()}}async function bs(e,t){const n=xe(e);if(!(n.length<1)){if(t==="later")m=m.concat(n),w=w.concat(n);else if(t==="next"){let o=m.slice(0,v+1),i=m.slice(v+1);m=o,m=m.concat(n),m=m.concat(i),o=w.slice(0,v+1),i=w.slice(v+1),w=o,w=w.concat(n),w=w.concat(i)}q()}}function Re(){Ts()}function Ts(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(te("playing"),F="playing",x.emit("playbackStateChange",F),e.play().then(n=>nn()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(F="paused",x.emit("playbackStateChange",F),te("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){Re()});navigator.mediaSession.setActionHandler("pause",function(){Re()});function Wt(){sn()}function Xt(){an()}function Is(){document.getElementById("audio").addEventListener("ended",Os)}function Cs(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Zt(){Ls()}function ws(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:C,PLAYBACK_shuffle_state:Y,progress:t}}function We(){if(Y==="off"){Y="on",x.emit("shuffleStateChange",Y),Tt(Y);const t=v+1;w=[...m],m.slice(0,v);const n=m.slice(t);Co(n);const o=n.length;m.splice(v,o,...n),q()}else{Y="off",x.emit("shuffleStateChange",Y),Tt(Y);const t=[...w],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(v=e);q()}}function W(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${S}/${m[v].url}/3`,e.load(),F==="playing"?(e.play().then(o=>nn()).catch(o=>console.log(o)),te("playing"),x.emit("playbackStateChange","playing")):(x.emit("playbackStateChange","paused"),te("paused")),tn(),en()}function Ss(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${S}/${m[v].url}/3`,t.load(),t.currentTime=e,te("paused"),x.emit("playbackStateChange","paused"),tn(),en()}function en(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${tt(s)}"`,c=`"${tt(Math.floor(i))}"`,d=i/o*100,l=`${d}%`;es(c,a),t.style.setProperty("--LCD-seekbar-width",l),t.style.setProperty("--LCD-seekbar-indicator-left",l),n.value=d,on();const g={timeProgressed:c,timeRemaining:a,progressPercent:d,progressPercentFormatted:l};x.emit("progressStateChange",g)})}function tn(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile"),s=document.getElementById("LCDmenuButton");e.innerHTML=m[v].song_name,t.innerHTML=m[v].song_name,n.innerHTML=m[v].project_contributors,Qt(),o.src=`${S}/${m[v].img}/3`,i.src=`${S}/${m[v].img}/3`,Pe=`${S}/${m[v].img}/5`,qe=m[v].song_name,Vt=m[v].project_contributors,s.dataset.songId=`${m[v].url}`,q(),x.emit("newTrackStateChange",m[v]),document.title=`${m[v].song_name} by ${m[v].project_contributors} playing on Orange Music`}function nn(){let e=m[v];const t=[{src:`${S}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${S}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${S}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${S}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${S}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${S}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),on()}function on(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function Ps(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",te("paused"),m=[],w=[],v=0,t.src="http://null.com/null",document.title="Orange Music"}function Os(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>v+1&&(C=="off"||C=="on")?(v+=1,W()):C=="song"?W():t==v+1&&C=="on"?(v=0,W()):Ps()}function sn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>v+1&&(e.pause(),v+=1,W())}navigator.mediaSession.setActionHandler("nexttrack",function(){sn()});function an(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),m.length,e.currentTime>2){e.currentTime=0;return}else if(v>0){e.pause(),v-=1,W();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){an()});function Ls(){C=="off"?(C="on",ee(C),x.emit("loopStateChange",C)):C=="on"?(C="song",ee(C),x.emit("loopStateChange",C)):(C="off",ee(C),x.emit("loopStateChange",C))}function Ms(e){e=="off"?(C="off",ee(C)):e=="on"?(C="on",ee(C)):(e="song",C="on",ee(C))}function Bs(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",We),t.addEventListener("click",Xt),n.addEventListener("click",Re),o.addEventListener("click",Wt),i.addEventListener("click",Zt)}function Tt(e){const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function ee(e){const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=M.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=M.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=M.icons_loop_song;return}}function te(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=M.icons_pause;return}if(e=="paused"){t.src=M.icons_play;return}}function Ds(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){rn(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",xs)})}function xs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;rn(n)}function rn(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Rs(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=Po(Ns,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Oe==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&Oe==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",re()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function As(e){re(),Oe=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=ke();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{A(`/projects/${i}/${s}`),re()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=ke();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{A(`/projects/${i}`),re()})}}}async function Ns(e,t){if(t.value==""){re();return}const n=await yi(t.value);As(n)}let Oe=!1;function re(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Oe=!1}const js=`<div class="MUSICENJOYMODE-container">
    <div class="background" id="MUSICENJOYMODEbackground"></div>
    <div class="topMenuBar">
        <button tabindex="0" id="MUSICENJOYMODEexitButton">
            <img src="{icons_back}" height="16" width="16">
        </button>
    </div>
    <div class="contentArea">
        <div class="image">
            <div class="image-container">
                <div class="image-restrictor">
                    <img class="a" src="" id="MUSICENJOYMODEcoverImage1">
                    <img src="" id="MUSICENJOYMODEcoverImage2">
                </div>
                <div class="song-details">
                    <div class="song-title" id="MUSICENJOYMODEsongTitle1"></div>
                    <div class="song-title song-title-duplicate" id="MUSICENJOYMODEsongTitle2"></div>
                    <div class="song-artist" id="MUSICENJOYMODEsongArtist"></div>
                </div>
            </div>
            <div class="controls-container">
                <div class="controls">
                    <button tabindex="0" class="button a" id="MUSICENJOYMODEplaybackControlsButton_shuffle">
                        <div class="imgdiv">
                            <img src="{icons_shuffleButton}" alt="shuffle icon" height="16" id="MUSICENJOYMODEplaybackControlsButton_shuffle_icon" />
                        </div>
                    </button>
                    <button tabindex="0" class="button b" id="MUSICENJOYMODEplaybackControlsButton_back">
                        <div class="imgdiv">
                            <img src="{icons_backButton}" alt="back icon" height="25" />
                        </div>
                    </button>
                    <button tabindex="0" class="button c" id="MUSICENJOYMODEplaybackControlsButton_play">
                        <div class="imgdiv">
                            <img src="{icons_play}" alt="play icon" height="40" id="MUSICENJOYMODEplaybackControlButton_play_icon" />
                        </div>
                    </button>
                    <button tabindex="0" class="button d" id="MUSICENJOYMODEplaybackControlsButton_next">
                        <div class="imgdiv">
                            <img src="{icons_nextButton}" alt="next icon" height="25" />
                        </div>
                    </button>
                    <button tabindex="0" class="button e" id="MUSICENJOYMODEplaybackControlsButton_loop">
                        <div class="imgdiv">
                            <img src="{icons_loop}" alt="loop icon" height="25" id="MUSICENJOYMODEplaybackControlsButton_loop_icon" />
                        </div>
                    </button>
                </div>
                <div class="secondary-controls"></div>
            </div>
        </div>
        <div class="interaction">
            <!--
            <div class="squares-container" id="MUSICENJOYMODEsquares">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        -->
            <!--
            <div class="chat-window">
                <div class="chats">
                    <div class="chat">
                        <span class="left">Lovely Chat</span>
                    </div>
                    <div class="chat">
                        <span class="right">I think we should approach this problem slightly differently</span>
                    </div>
                    <div class="chat">
                        <span class="right">Actually I've thought about it and it should be done as you suggested</span>
                    </div>
                    <div class="chat">
                        <span class="left">Actually</span>
                    </div>
                    <div class="chat">
                        <span class="right">No</span>
                    </div>
                </div>
                <div class="control-box">
                    <div class="chat-box"></span>
                    </div>
                </div>
            </div>
        -->
        </div>
    </div>
</div>`;let K=!1,Xe,Qe;function Us(){const e=document.getElementById("musicEnjoyEnvironment");e.innerHTML=X(js),document.getElementById("MUSICENJOYMODEexitButton").addEventListener("click",Js),document.getElementById("MusicEnjoyOpenButton").addEventListener("click",It),R()&&document.getElementById("LCDbody").addEventListener("click",It),x.on("playbackStateChange",c=>{K!=!1&&dn()}),x.on("progressStateChange",c=>{K!=!1}),x.on("newTrackStateChange",c=>{K!=!1&&cn()}),x.on("loopStateChange",c=>{K!=!1&&ln()}),x.on("shuffleStateChange",c=>{K!=!1&&un()});const o=document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle"),i=document.getElementById("MUSICENJOYMODEplaybackControlsButton_back"),s=document.getElementById("MUSICENJOYMODEplaybackControlsButton_play"),a=document.getElementById("MUSICENJOYMODEplaybackControlsButton_next"),r=document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop");o.addEventListener("click",We),i.addEventListener("click",Xt),s.addEventListener("click",Re),a.addEventListener("click",Wt),r.addEventListener("click",Zt)}function cn(){const e=document.getElementById("MUSICENJOYMODEcoverImage1"),t=document.getElementById("MUSICENJOYMODEcoverImage2"),n=document.getElementById("MUSICENJOYMODEsongTitle1"),o=document.getElementById("MUSICENJOYMODEsongTitle2"),i=document.getElementById("MUSICENJOYMODEsongArtist");e.src=Pe,t.src=Pe,n.innerText=qe,o.innerText=qe,i.innerText=Vt,ln(),un(),ks()}function dn(){const e=document.getElementById("MUSICENJOYMODEplaybackControlButton_play_icon");if(F=="playing"){e.src=M.icons_pause;return}if(F=="paused"){e.src=M.icons_play;return}}function ln(){const e=document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop_icon");if(C==="off"){e.style.filter="var(--make-svg-white)",e.src=M.icons_loop;return}if(C==="on"){e.style.filter="var(--make-svg-grey-3)",e.src=M.icons_loop;return}if(C==="song"){e.style.filter="var(--make-svg-grey-3)",e.src=M.icons_loop_song;return}}function un(){const e=document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle_icon");if(Y==="on"){e.style.filter="var(--make-svg-grey-3)";return}if(Y==="off"){e.style.filter="var(--make-svg-white)";return}}async function It(){K=!0;const e=document.getElementById("musicEnjoyEnvironment");e.style.display="block",cn(),dn(),await mn(),Qe=document.getElementById("MUSICENJOYMODEbackground"),Ro(Qe,Xe)}async function mn(){Xe=await Sn(Pe)}async function ks(){await mn(),jo(Qe,Xe)}function Js(){const e=document.getElementById("musicEnjoyEnvironment");e.style.display="none",No(),K=!1}const B="/apis",S="/media";async function gn(){Is(),is(),ss(),Ki(),Bs(),Rs(),Ds(),$o(),cs(),_i(),Jo(),Us()}window.hasCodeRun||(ui(),window.hasCodeRun=!0);
