(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const fn="/assets/volume_null-e39cf06f.svg",vn="/assets/recently_added-a0a983c6.svg",En="/assets/volume_3-c8ab0a75.svg",bn="/assets/orange_music_text_logo_black-12e7386c.svg",hn="/assets/volume_2-cfdac9da.svg",yn="/assets/browse_2-85030bba.svg",Tn="/assets/volume_1-27e93416.svg",In="/assets/orange_music_logo_white-2a680ea2.svg",Cn="/assets/search_icon-4f5e4381.svg",wn="/assets/orange_music_text_logo_black-91f9e706.png",Ln="/assets/up_next_queue_button-14fedba2.svg",Sn="/assets/orange_music_logo_yellow-a109ff64.svg",Pn="/assets/playlist-c6e9024f.svg",On="/assets/loop_button-aef56865.svg",Mn="/assets/help_icon-867fec9d.svg",Bn="/assets/play_button-b1e2d3a4.svg",Dn="/assets/browse-14744f27.svg",Mt="/assets/menu_options_button-a1d7bbe3.svg",xn="/assets/orange_music_text_logo_white-7f0ba909.svg",An="/assets/back_button-8128cade.svg",Rn="/assets/Albums-2e81dc74.svg",Nn="/assets/songs-016b7188.svg",Un="/assets/orange_music_logo_black-4d7e4591.svg",jn="/assets/your_uploaded_songs-06535705.svg",kn="/assets/artist-ab677d43.svg",Jn="/assets/shuffle_button-c2f06bc4.svg",Gn="/assets/orange_music_text_logo_white-4907051e.png",Hn="/assets/listen_now-c7438154.svg",Yn="/assets/derpy-21c20ae5.svg",$n="/assets/next_button-9a850710.svg",qn="/assets/recently_added-7ff28139.svg",Fn="/assets/play_button-5eeedbe6.svg",Qn="/assets/browse-e8be8609.svg",Vn="/assets/albums-681507b8.svg",zn="/assets/listen_now.2-bfa293ac.svg",Kn="/assets/your_uploads-02e5c93c.svg",Wn="/assets/play_button.2-fc90fac7.svg",Xn="/assets/listen_now-fb02ffce.svg",Zn="/assets/browse.2-15b501dd.svg",eo="/assets/place_holder_image-d4006a96.svg",to="/assets/icons_MOGitems_add-19e679f7.svg",no="/assets/back-9279721d.svg",oo="/assets/forwards-605bd405.svg",io="/assets/icons_close-57e87944.svg",so="/assets/icons_pause-8012f8cc.svg",ao="/assets/icons_loop-32d1576c.svg",ro="/assets/icons_loop_song-87f53dc7.svg",co="/assets/icons_play-a5074c5b.svg",lo="/assets/icons_settings-793063fb.svg",uo="/assets/love-07ac5006.svg",mo="/assets/upload-3bad9145.svg",U={icons_volumeNull:fn,icons_recentlyAdded:vn,icons_volume3:En,icons_orangeMusicTextLogoBlack:bn,icons_volume2:hn,icons_browse2:yn,icons_volume1:Tn,icons_orangeMusicLogoWhite:In,icons_searchIcon:Cn,icons_orangeMusicTextLogoBlackPng:wn,icons_queueButton:Ln,icons_orangeMusicLogoYellow:Sn,icons_playlist:Pn,icons_loopButton:On,icons_helpIcon:Mn,icons_playButton:Bn,icons_browse:Dn,icons_menuOptionsButton:Mt,icons_orangeMusicTextLogoWhite:xn,icons_backButton:An,icons_Albums:Rn,icons_songs:Nn,icons_orangeMusicLogoBlack:Un,icons_yourUploadedSongs:jn,icons_artist:kn,icons_shuffleButton:Jn,icons_orangeMusicTextLogoWhitePng:Gn,icons_listenNow:Hn,icons_derpy:Yn,icons_nextButton:$n,icons_recentlyAddedV2:qn,icons_playButtonV2:Fn,icons_browseV2:Qn,icons_albumsV2:Vn,icons_listenNow2V2:zn,icons_yourUploads:Kn,icons_playButton2:Wn,icons_listenNowV2:Xn,icons_browse2V2:Zn,v3_placeholder:eo,icons_MOGitems_add:to,icons_back:no,icons_forwards:oo,icons_close:io,icons_pause:so,icons_loop:ao,icons_loop_song:ro,icons_play:co,icons_settings:lo,current_year:new Date().getFullYear(),icons_love:uo,icons_upload:mo};function N(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function Bt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function Z(e){for(const[t,n]of Object.entries(U)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function nt(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function go(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function rt(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function po(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Dt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function ue(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function _o(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function xt(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function fo(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function ze(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let Be;const y=new Map;function vo(e,t,n){y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!y.has(e))return;const r=Math.min(a/500,1);if(!y.has(e))return;const c=At(y.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||y.get(e).isChanging)&&(y.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",y.delete(e))}clearTimeout(Be),Be=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},500),y.get(e).isChanging=!0;const i=Date.now();y.get(e).animationFrameId=requestAnimationFrame(o)}function Eo(e,t,n,o,i){const s=i||2500;y.has(e)||y.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!y.has(e))return;const u=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!y.has(e))return;let g;o==="hardNewToOld"&&u<1?g=n:g=At(y.get(e).originalColor,Math.min(u,1),n),e.style.backgroundColor=g,u<1||y.get(e).isChanging?y.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",y.delete(e)),u==1&&(e.style.backgroundColor="",y.delete(e))}clearTimeout(Be),Be=setTimeout(()=>{y.has(e)&&!y.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(y.get(e).animationFrameId),y.delete(e))},s),y.get(e).isChanging=!0;const r=Date.now();y.get(e).animationFrameId=requestAnimationFrame(a)}function bo(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function At(e,t,n){return ho(n,e,t)}function ho(e,t,n){const o=function(l){return l=l.toString(16),l.length===1?"0"+l:l},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),u=Math.round(i*(1-n)+r*n),g=Math.round(s*(1-n)+c*n),I=Math.round(a*(1-n)+d*n);return"#"+o(u)+o(g)+o(I)}function Rt(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=yo(o,i,s),r=Qe(a[0]),c=Qe(a[1]),d=Qe(a[2]);return To({r,g:c,b:d})}function yo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function Qe(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function To(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Io=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,Co=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,wo=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
    <div class="LCD_mobile_body_background" id="LCD_mobile_body_background"></div>
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
</div>`;function Lo(e){return new Promise((t,n)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>t(o),o.onerror=i=>n(i),o.src=e})}function So(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height).data}function Po(e,t,n){return`#${(1<<24|e<<16|t<<8|n).toString(16).slice(1)}`}function Oo(e,t,n){e/=255,t/=255,n/=255;const o=Math.max(e,t,n),i=Math.min(e,t,n);let s,a,r=(o+i)/2;if(o===i)s=a=0;else{const c=o-i;switch(a=r>.5?c/(2-o-i):c/(o+i),o){case e:s=(t-n)/c+(t<n?6:0);break;case t:s=(n-e)/c+2;break;case n:s=(e-t)/c+4;break}s/=6}return[s*360,a*100,r*100]}function Mo(e,t){const n=[],o=new Array(t);for(let s=0;s<t;s++)n.push(e[Math.floor(Math.random()*e.length)]);let i=!0;for(;i;){i=!1;for(let s=0;s<t;s++)o[s]=[];for(const s of e){let a=1/0,r=-1;for(let c=0;c<t;c++){const d=Bo(s,n[c]);d<a&&(a=d,r=c)}o[r].push(s)}for(let s=0;s<t;s++){const a=Do(o[s]);xo(a,n[s])||(n[s]=a,i=!0)}}return n}function Bo(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function Do(e){const t=e.reduce((n,o)=>(n[0]+=o[0],n[1]+=o[1],n[2]+=o[2],n),[0,0,0]);return[t[0]/e.length,t[1]/e.length,t[2]/e.length]}function xo(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Ao(e){return e.filter(([t,n,o])=>{const[i,s,a]=Oo(t,n,o);return a>10&&a<93})}function Ro(e,t=5){const n=[];for(let a=0;a<e.length;a+=4){const r=e[a],c=e[a+1],d=e[a+2];n.push([r,c,d])}const i=Ao(n);return Mo(i,t).map(([a,r,c])=>Po(a,r,c))}async function Nt(e,t=5){e=e.slice(0,-1)+"2";try{const n=await Lo(e),o=So(n);return Ro(o,t)}catch(n){console.error("Error loading image:",n)}}const ct=1500;let Ut=0,Ke=[],Ve;function B(e,t){const o=new Date().getTime();Ke.push({notificationText:e,notificationType:t,time:o}),jt()}function jt(){const t=new Date().getTime(),n=Ke.at(Ut);Ke.length>1?t-Ve>ct?(dt(n.notificationText,n.notificationType),Ve=t):setTimeout(jt,ct):(dt(n.notificationText,n.notificationType),Ve=t)}function dt(e,t){const n=document.getElementById("noticationContainer");let o;Ut+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}let v,G,Le,Se,Pe,re;const se={program:G,vertexShader:Le,fragmentShader:Se,positionBuffer:Pe};function kt(e,t){e.innerHTML="";const n=ze(),o=document.createElement("canvas");o.id=n,e.appendChild(o);const i=document.getElementById(n);if(v=i.getContext("webgl"),!v){console.error("WebGL not supported"),B("WebGL not supported","error");return}i.width=window.innerWidth,i.height=window.innerHeight,v.viewport(0,0,v.canvas.width,v.canvas.height);const s=`
attribute vec4 a_position;
void main() {
    gl_Position = a_position;
}
`,a=`
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_colors[5];

/* Gradient noise function */
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

    // Adding noise dithering
    float noiseValue = gradientNoise(gl_FragCoord.xy);
    color += (1.0 / 255.0) * noiseValue - (0.5 / 255.0);

    gl_FragColor = vec4(color, 1.0);
}
`;function r(l,f,_){const E=l.createShader(f);return l.shaderSource(E,_),l.compileShader(E),l.getShaderParameter(E,l.COMPILE_STATUS)?E:(console.error("Error compiling shader:",l.getShaderInfoLog(E)),l.deleteShader(E),null)}Le=r(v,v.VERTEX_SHADER,s),Se=r(v,v.FRAGMENT_SHADER,a),G=v.createProgram(),v.attachShader(G,Le),v.attachShader(G,Se),v.linkProgram(G),v.getProgramParameter(G,v.LINK_STATUS)||console.error("Error linking program:",v.getProgramInfoLog(G)),Pe=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,Pe);const c=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];v.bufferData(v.ARRAY_BUFFER,new Float32Array(c),v.STATIC_DRAW);const d=v.getAttribLocation(G,"a_position");v.enableVertexAttribArray(d),v.vertexAttribPointer(d,2,v.FLOAT,!1,0,0),window.addEventListener("resize",()=>I()),I();const u=[];for(let l=0;l<5;l++)u.push(v.getUniformLocation(G,`u_colors[${l}]`));function g(l){l*=.001,I(),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(G);const f=v.getUniformLocation(G,"u_resolution");v.uniform2f(f,v.canvas.width,v.canvas.height);const _=v.getUniformLocation(G,"u_time");v.uniform1f(_,l);for(let E=0;E<5;E++){const h=No(t[E]);v.uniform3fv(u[E],h)}v.drawArrays(v.TRIANGLES,0,6),re=requestAnimationFrame(g)}re=requestAnimationFrame(g);function I(){const l=window.innerWidth,f=window.innerHeight;(i.width!==l||i.height!==f)&&(i.width=l,i.height=f,v.viewport(0,0,v.canvas.width,v.canvas.height))}se.program=G,se.vertexShader=Le,se.fragmentShader=Se,se.positionBuffer=Pe}function No(e){e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n/255,o/255,i/255]}function Uo(e,t){if(!e)return;t.program&&t.vertexShader&&t.fragmentShader&&(e.detachShader(t.program,t.vertexShader),e.detachShader(t.program,t.fragmentShader)),t.vertexShader&&e.deleteShader(t.vertexShader),t.fragmentShader&&e.deleteShader(t.fragmentShader),t.program&&e.deleteProgram(t.program),t.positionBuffer&&e.deleteBuffer(t.positionBuffer);const n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}function jo(){re&&(cancelAnimationFrame(re),re=null),Uo(v,se)}const ko=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,Jo=`
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
`;let ke=!1;function Go(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=ko,n.addEventListener("click",function(o){ke==!1?Yo(o):De()}),t.innerHTML=Jo}function Ho(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function lt(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",ke==!0&&H.length>0||De()}function ye(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(H.length>0){t.innerHTML=H[0].file.name,n.innerHTML=ue(H[0].file.size*1.75),$o(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=0;o<H.length;o++){const a=H[o].file.name,r=ue(H[o].file.size*2);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let ut;function Yo(e){ke=!0,ut=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",De),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const g=ut.getBoundingClientRect();t=g.left+window.scrollX,n=g.top+window.scrollY;let I=t+"px",l=n+"px";o.style.left=I,o.style.top=l}const r=o.offsetWidth,c=o.offsetHeight,d=Wt("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",u),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function u(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",u),De())}}function De(){ke=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function $o(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}let Je;async function qo(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await Ge("profile_picture"),n=`${O}/${t}/3`;Je=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",Fo)}catch(t){console.error("Error initializing account image:",t)}}function Fo(e){e.stopPropagation(),Qo(e)}function Qo(e){z([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function Vo(){await Si(),localStorage.clear(),location.reload()}function zo(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${O}/${Je}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",Ko)}function Ko(e){e.stopPropagation(),Wo(e)}function Wo(e){z([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const Xo=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,Zo=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,ei=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
    <div class="MOG-itemImageContainer">
        <img src="{MOG_image}">
    </div>
    <div id="MOGIplayButton-{MOGI_placeholder_itemID}" class="MOG-item-controls-play">
        <div>
            <img src="{icons_playButtonV2}">
        </div>
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
</button>`,Jt=30;let me=0;async function ti(){try{if(document.getElementById("MAINcontentPages").innerHTML+=Z(Xo),localStorage.getItem("MOGitems")!=null){const t=JSON.parse(localStorage.getItem("MOGitems"));me+=t.length,mt(t)}const e=await Ft(Jt,0);JSON.stringify(e)!=localStorage.getItem("MOGitems")&&(me+=e.length,mt(e),localStorage.setItem("MOGitems",JSON.stringify(e))),N()&&zo()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Gt(){me=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Ht),e.innerHTML=""}function mt(e){const t=document.getElementById("MOGgridContainer");t.innerHTML=Z(Zo),gt(e);const n=document.getElementById("MOGcontainer");n.addEventListener("click",function(s){Ht(s,e)});let o;n.addEventListener("touchstart",function(s){s.timeStamp,o=setTimeout(function(){i(s,e)},500)}),n.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(o)});function i(s,a){navigator.vibrate(1e3);const c=s.target.id.split("-")[1],d=a[c].project_id;Yt(s,d)}t.addEventListener("scroll",async function(){const s=t.scrollTop,a=t.scrollHeight,r=t.clientHeight;if(s>=a-r){const c=await Ft(Jt,me);me+=c.length,c.length>0&&gt(c)}})}function gt(e){const t=document.getElementById("MOGgridContainer"),n=e.length,o=Z(ei);for(var i=0;i<=n-1;i++){const s=i,a=e[i].img,r=e[i].top,c=e[i].bottom,d=e[i].days,u=po(d),g={itemsToReplace:[["MOG_image",`${O}/${a}/3`],["MOG_text1",`${r}`],["MOG_text2",`${c}`],["MOG_checkedDate",`${u}`],["MOGI_placeholder_itemID",`${s}`]]};t.innerHTML+=nt(o,g)}}async function Ht(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await it(i),a=JSON.parse(s);a.ProjectID=i,en(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Yt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;J(`/projects/${i}`)}n.id==="MOGaddNewItem"&&J("/new-project/")}function Yt(e,t){e.stopPropagation(),z([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}let pt;function ot(e){return new Promise((t,n)=>{pt=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){_t(),t("delete")}function d(){pt.focus(),_t(),t("cancel")}i.addEventListener("click",u=>{const g=u.target;g===a?c():(g===r||g===i)&&d()}),o==="keyboard"&&!N()?r.focus():o=="mouse"&&!N()&&(q(),r.focus(),r.blur())})}function _t(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const ni=`<div class="ADMINusersTableInfoRow">
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
</div>`,oi=`<h1>Admin</h1>
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
<br><br>`,ft=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function $t(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){ii(a,r,c)}}function ii(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),z(o,e,n)}const vt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,Te=`<h1>General</h1>
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
<br><br>`,Et=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,si=`<div class="settings_container">
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
</div>`;let xe="general",V;async function ai(){const e=await Ge("admin");e=="true"&&!N()?(xe="admin",V=[{name:"general",markup:Te,button_id:"settings_button_general",function:Ie},{name:"user",markup:Et,button_id:"settings_button_user",function:Ce},{name:"admin",markup:ft,button_id:"settings_button_admin",function:ht}]):e=="false"&&!N()?V=[{name:"general",markup:Te,button_id:"settings_button_general",function:Ie},{name:"user",markup:Et,button_id:"settings_button_user",function:Ce}]:N()&&e=="true"?(xe="admin",V=[{name:"general",markup:Te,button_id:"settings_button_general",function:Ie},{name:"user",markup:vt,button_id:"settings_button_user",function:Ce},{name:"admin",markup:ft,button_id:"settings_button_admin",function:ht}]):V=[{name:"general",markup:Te,button_id:"settings_button_general",function:Ie},{name:"user",markup:vt,button_id:"settings_button_user",function:Ce}]}async function ri(){await ai();const e=document.getElementById("MAINcontentPages");let t=si;for(const[i,s]of Object.entries(U)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");bt(xe);for(var o=V.length-1;o>=0;o--){const i=V[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=V.find(u=>u.button_id===r).name;bt(d)})}n.addEventListener("click",function(){J("/")})}function We(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function bt(e){xe=e;const t=["users_img"],n=document.getElementById("view_container"),o=V.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(U)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${O}/${Je}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function Ie(){}function Ce(){$t("user-id","settings_views_user_pfp_img","update_user_pfp")}let ce=[];async function ht(){if(await Ge("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=oi;for(const[a,r]of Object.entries(U)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${O}/${Je}/4/`),o=o.replace(c,d)}n.innerHTML=o,Xe(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")B("Error Updating Column: empty inputs","error");else for(var d=ce.length-1;d>=0;d--){const u=ce[d];console.log(u),Li(u,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){B("Error Deleting User: user UUID is empty","error");return}let c=null;for(let g=0;g<k.length;g++)k[g].uuid==r&&(c=k[g].username);if(c===null){B("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,u=await ot(d);u==="cancel"||u==="delete"&&((await Ii(r)).success=="success"?B("Successfully deleted the user","success"):B("Failed to delete the user","error"),Xe())})}let k;async function Xe(){const e=await wi();k=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<k.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=k[n].username,s=k[n].uuid,a=k[n].verified,r=k[n].email;let c=k[n].storage_allowance;c=ue(c);const d=k[n].admin,u=n;let g=k[n].storage_used;g=ue(g);let I=ni,l=k[n].profile_picture;l=`${O}/${l}/3`;for(let f=0;f<o.length;f++){const _=o[f].toString(),E=new RegExp(`\\{${_}\\}`,"g");let h="";_==="Username"?h=i:_==="Email"?h=r:_==="UUID"?h=s:_==="Verified"?h=a:_==="Space_Used"?h=g:_==="Storage_Allowance"?h=c:_==="profile_picture_url"?h=l:_==="checkbox_number"?h=u:_==="Admin"&&(h=d),I=I.replace(E,h)}t.innerHTML+=I}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&ci()})}function ci(){ce=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=k[i.id].uuid;ce.push(a)}),o.innerHTML=`Selected Users: ${ce.length}`}const di=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,li=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function ui(){let e="MAINcontentPages",t=li;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",mi),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){J("/")})}async function mi(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${A}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)B(`There was an error, ${o}`,"error");else{const i=o;B("Sign up Successful, Log in now","success"),J("/")}}catch{B("There was an error, try again","error")}}let ae=!1,Ae=!1,Ze=!1,Re=!1;async function gi(){await fi()?(mn(),Re=!0):Ae||(qt(),Ae=!0)}async function pi(){Ae=!1,ae=!1,Ze=!1,qt(),Ae=!0}function qt(){vi();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${A}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{yt(),ui()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),ae)return!1;ae=!0;const s=n.value,a=o.value;try{await _i(s,a)?(Re=!0,B("Login Successful","success"),mn(),yt()):(Re=!1,B("Error Logging In","error")),ae=!1}catch(r){console.error("Error:",r),ae=!1}return!1})}async function _i(e,t){try{return(await(await fetch(`${A}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?B("The server is down","error"):console.error(n),!1}}async function fi(){try{const e=await fetch(`${A}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&B("The server is down","error")}}function vi(){let e="MAINcontentPages",t=di;document.getElementById(e).innerHTML+=t}function yt(){if(Ze===!0)return;Ze=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function Ei(){const e=await Ge("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;J(r),Cs(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=m,d=b,u=Bs();u.current_path=r,u.current_queue=c,u.current_index=d;const g=i(u);g!==o&&(yi("last_state",u),o=g,n.set("playback_states",g))}function a(){J(currentPath)}}function bi(){Re==!1?(We(),pi()):(Qt(),We(),ti())}function Tt(e,t){Gt(),We(),t!==null?wt(e,t):wt(e)}function It(){Gt(),Qt(),ri()}const Ct={"/":bi,"/new-project/":we,"/new-project":we,"/new/":we,"/new":we,"/projects/:projectID":Tt,"/projects/:projectID/:songURL":Tt,"/settings/":It,"/settings":It};function hi(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){J("/")}}function J(e){const t=Object.keys(Ct);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Ct[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}hi()}async function yi(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${A}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Ti(e){try{const t={searchQuery:e};return await(await fetch(`${A}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function Ii(e){try{const t={uuid:e};return await(await fetch(`${A}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function Ci(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${A}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&B("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function Ge(e){try{return(await(await fetch(`${A}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function de(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${A}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function it(e){try{return(await(await fetch(`${A}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function Ft(e,t){try{const i=(await(await fetch(`${A}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function we(){try{const o=`/projects/${(await(await fetch(`${A}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;J(o)}catch(e){console.error("Error:",e)}}async function wi(){try{return(await(await fetch(`${A}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function Li(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${A}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){B("Table Updated Successfully","success"),Xe();return}else{B(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){B(`Error Updating Column ${t}: ${o}`,"error");return}}async function Si(){try{const t=await(await fetch(`${A}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const Pi=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function et(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=Pi}}const Oi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Mi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Bi=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,H=[];let He=!1,Oe=!1,Di=!0,p;async function wt(e,t){He=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?p=JSON.parse(n):Bt()==!0?p={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0}:p={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0},Ri(p),et("","blank"),sessionStorage.setItem("description",p.Description),Vt(),Me(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{J("/")}),await pe(),zt(p.ProjectName),Ai(),$t(p.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Gi(),et(p,"full"),t!=null){for(var i=p.ProjectJSON.length-1;i>=0;i--)if(p.ProjectJSON[i].URL==t){const a=`${p.ProjectJSON[i].SongSequence}-${p.ProjectJSON[i].Version}`;xi(a)}}}function Qt(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",He=!1}async function pe(){if(!He)return;const e=p.ProjectID,t=await it(e);if(t=="")return;const n=structuredClone(p),o=JSON.parse(t);if(o.ProjectID=e,p=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(p)}`),n.Description!==p.Description){const s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");s.innerText=p.ProjectName,a.innerText=`${p.ProjectContributors} | ${Dt(p.TimeCreated)}`,sessionStorage.setItem("description",p.Description),Vt()}if(n.PictureURL!==p.PictureURL){const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${O}/${p.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==p.ProjectContributors){const s=document.getElementById("PROJECTviewDisplayTitleH3");s.innerText=p.ProjectContributors}if(n.ProjectName!==p.ProjectName){const s=document.getElementById("PROJECTviewDisplayTitleH1");s.innerText=p.ProjectName}if(n.ProjectJSON!==p.ProjectJSON)if(n.ProjectJSON==null||p.ProjectJSON==null)Me();else if(n.ProjectJSON.length!==p.ProjectJSON.length)Me();else{let s=0;for(var i=p.ProjectJSON.length-1;i>=0;i--)p.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&Me()}et(p,"full")}function xi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=xt(Eo,0),o=Rt("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),bo(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function Ai(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),s=document.getElementById("PROJECTviewDisplayDescription"),a=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),u=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),g=document.getElementById("PROJECTviewDisplayMenuButton"),I=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),l=document.querySelector(".PROJECTviewDisplayImage"),f=document.getElementById("PROJECTviewMobileStickyHeader"),_=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const E=document.getElementById("PROJECTviewMOREdescriptionP"),h=new IntersectionObserver(T,{threshold:.1}),S=sessionStorage.getItem("description");E.innerText=S,i.addEventListener("click",function(){R()}),s.addEventListener("dblclick",function(){R()});let D=0;s.addEventListener("touchend",function(P){const C=new Date().getTime();C-D<300&&(P.stopPropagation(),R()),D=C}),c.addEventListener("click",function(){w(p)}),a.addEventListener("click",function(P){P.target===a&&w(p)}),d.addEventListener("click",function(){en(p)}),u.addEventListener("click",function(){Is(p)}),g.addEventListener("click",function(){Lt(event)}),I.addEventListener("click",function(){Lt(event)}),h.observe(l),e.addEventListener("blur",function(P){const C=e.innerText;C!==n&&(zt(C),de(p.ProjectID,"project_name",C),p.ProjectName=C)}),t.addEventListener("blur",function(P){const C=t.innerText;C!==o&&(de(p.ProjectID,"project_contributors",C),p.ProjectContributors=C)});function R(){a.style.display="grid",N()&&(r.style.zIndex="40")}function T(P,C){P.forEach(Y=>{Y.isIntersecting&&N()?(f.style.backdropFilter="none",f.style.backgroundColor="transparent",_.style.visibility="hidden"):Y.isIntersecting&&!N()||!Y.isIntersecting&&!N()?(f.style.backdropFilter="",f.style.backgroundColor="",_.style.visibility=""):!Y.isIntersecting&&N()&&(f.style.backdropFilter="blur(15px)",f.style.backgroundColor="var(--background-transparent)",_.style.visibility="visible")})}function w(P){const C=E.value;sessionStorage.setItem("description",C),de(P.ProjectID,"description",C),a.style.display="none",E.innerText=C,r.style.zIndex=""}}function Ri(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${Dt(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${O}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=nt(Z(Bi),t)}function Vt(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function zt(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function Lt(e){e.stopPropagation(),e.target;const t=p.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],z(n,e)}async function Ni(e){const t=`Are you sure that you want to delete <em><b>${p.ProjectName}</b></em>? This action is not reversable.`;if(await ot(t)==="delete"){await Ui(),q(),J("/");return}q()}async function Ui(){const e=p.ProjectID;localStorage.removeItem(`project-${e}`);try{const n=await(await fetch(`${A}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.error("Error:",t)}}function Me(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=Z(Oi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(p.ProjectJSON);const o=Rt("--orange"),i=l=>`#${l.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(f=>parseInt(f,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let l=0;l<n.length;l++){let f=Z(Mi);const _=n[l],E={itemsToReplace:[["PROJECTviewRow_img",`${O}/${p.PictureURL}/3`],["PROJECTviewRow_songTitle",`${_.SongName}`],["PROJECTviewRow_artistName",`${p.ProjectContributors}`],["PROJECTviewRow_projectName",`${ue(_.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(_.Duration/60)}:${(_.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${_.SongSequence}-${_.Version}`],["PROJECTviewRow_contentEditable",`${Di}`]]};f=nt(f,E),t.insertAdjacentHTML("beforeend",f);{const h=t.lastElementChild;h.addEventListener("dragstart",a),h.addEventListener("dragover",c),h.addEventListener("drop",d)}}function a(l){l.dataTransfer.setData("text/plain",l.target.dataset.rowId),l.dataTransfer.getData("text/plain"),s=l.srcElement,_o(l.srcElement)}const r=xt(vo,0);function c(l){l.preventDefault(),l.dataTransfer.dropEffect="move";const f=l.target.closest(".PROJECTview-projectTable-rowContainer");if(f!==s){const _=getComputedStyle(f).backgroundColor,E=i(_);r(f,E,o)}}function d(l){l.preventDefault();const f=l.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${f}"]`),E=l.target.closest(".PROJECTview-projectTable-rowContainer");if(E){const S=structuredClone(p),D=E.getAttribute("data-row-id");E.before(_);const R=`${f}|${D}`;setTimeout(async()=>{await de(p.ProjectID,"SongsTableChangeSongSequenceOrder",R),pe()},1);let T=[];for(var h=0;h<t.children.length;h++){if(h==0)continue;const w=t.children[h],Y=w.dataset.rowId.split("-")[0];let oe=S.ProjectJSON[Y-1];oe.SongSequence=h,T.push(oe),w.style.backgroundColor="",w.dataset.rowId=`${h}-1`}p.ProjectJSON=T}}t.addEventListener("click",function(l){const f=l.target;if(l.stopPropagation(),f.tagName==="BUTTON"){const _=f.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),ji(l))}});const u=t.querySelectorAll("[contenteditable]"),g=[],I=l=>{const _=l.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),E=l.target.textContent,h=g.find(T=>T.dataRowIDField===_);if((h?h.currentText:"Row ID not found")==E)return;for(var D=g.length-1;D>=0;D--)g[D].dataRowIDField===_&&(g[D].currentText=E);const R=`${_}-${E}`;de(p.ProjectID,"project_song_title",R)};u.forEach(l=>{l.addEventListener("blur",I),g.push({dataRowIDField:l.parentElement.parentElement.getAttribute("data-row-id"),currentText:l.innerText})})}function ji(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],z(i,e)}function ki(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(p);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,Ls(i,o)}async function Ji(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await ot(t)==="delete"&&(await Ci(p.ProjectID,e.songID),pe()),q()}function Gi(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){Hi(o)}}async function Kt(){const e=H[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;Oe=!0,Ho(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;ye(a),a===100&&ye(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){B("Storage limit reached","error");for(var a=H.length-1;a>=0;a--)H.shift();Oe=!1,lt(),ye(0)}Oe=!1,H.shift(),lt(),ye(0),H.length>0&&await Kt(),p.ProjectID==n&&He==!0&&pe()},i.onerror=function(){B("Upload Failed","error")},i.open("POST",`${A}/files/upload_audio/${n}`,!0),i.send(o)}async function Hi(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:p.ProjectID,file:n};H.push(o),Oe||await Kt()}}const Yi=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function $i(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&B("Storage limit reached","error"),n!=="update_user_pfp"?zi():(Ki(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${A}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function qi(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await $i(o,t,n)}const Fi=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let Ne,Q=!1;function z(e,t,n){n===void 0?Vi(e,t):n!==void 0&&n==="update_project_image"?St(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?St(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?Qi():console.log("invalid menu display inputs")}function Qi(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=wo;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;N()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[M,j]of Object.entries(U)){const $=new RegExp(`\\{${M}\\}`,"g");i=i.replace($,j)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),u=document.getElementById("LCD_mobile_body_artist_title"),g=document.getElementById("LCD_mobile_body_img"),I=s.duration,f=s.currentTime/I*100,_=document.getElementById("LCDMB_seek_input"),E=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const h=document.getElementById("LCDMB_back"),S=document.getElementById("LCDMB_play"),D=document.getElementById("LCDMB_play_icon"),R=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{w(),Q===!0&&Y()}),w(),C(),E.style.width=`${f}%`,s.addEventListener("timeupdate",()=>{const M=s.duration,$=s.currentTime/M*100;E.style.width=`${$}%`}),_.addEventListener("input",function(){const M=s.duration,j=_.value;s.currentTime=M*(j/100)}),h.addEventListener("click",()=>{nn(),w(),Q===!0&&Y()}),S.addEventListener("click",()=>{$e(),w(),C()}),R.addEventListener("click",()=>{tn(),w(),Q===!0&&Y()}),T.addEventListener("click",()=>{Q===!1?(oe(),Q=!0):(at(),Q=!1)}),Q===!0?oe():at(),o.addEventListener("touchstart",_e,!1),o.addEventListener("touchmove",fe,!1),o.addEventListener("touchend",ve,!1);function w(){g.src=te,d.innerText=Ue,u.innerText=st,P()}async function P(){const M=await Nt(te),j=document.getElementById("LCD_mobile_body_background");kt(j,M)}function C(){s.paused?D.src=U.icons_playButtonV2:D.src=U.icons_derpy}function Y(){const M=document.getElementById("LCD_mobile_queue_content_container");M.innerHTML="";for(let j=b+1;j<m.length;j++){const $=m[j],Ee=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],ie=$.img,gn=$.song_name,pn=$.project_contributors;let qe=Co;for(let Fe=0;Fe<Ee.length;Fe++){const be=Ee[Fe].toString(),_n=new RegExp(`\\{${be}\\}`,"g");let he="";be==="queue_item_img"?he=`${O}/${ie}/3`:be==="queue_item_song_name"?he=gn:be==="queue_item_song_artist"&&(he=pn),qe=qe.replace(_n,he)}M.innerHTML+=qe}}function oe(){function M(j){j.forEach($=>{document.querySelectorAll("."+$).forEach(ie=>{ie.classList.add("queue_visible")})})}M(a),o.removeEventListener("touchstart",_e),o.removeEventListener("touchmove",fe),o.removeEventListener("touchend",ve),Y()}function at(){function M(j){j.forEach($=>{document.querySelectorAll("."+$).forEach(ie=>{ie.classList.remove("queue_visible")})})}M(a),o.addEventListener("touchstart",_e,!1),o.addEventListener("touchmove",fe,!1),o.addEventListener("touchend",ve,!1)}function _e(M){Q===!1&&(r=M.touches[0].clientY)}function fe(M){M.preventDefault()}function ve(M){c=M.changedTouches[0].clientY,c-r>70&&(q(),o.removeEventListener("touchstart",_e),o.removeEventListener("touchmove",fe),o.removeEventListener("touchend",ve))}}function Vi(e,t){Ne=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");N()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=Fi,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",Xt),r.style.left=c,r.style.top=d;let u="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(u="keyboard"):t.pointerType!=="mouse"&&(u="keyboard"),u=="keyboard"){const S=Ne.getBoundingClientRect();n=S.left+window.scrollX,o=S.top+window.scrollY;let D=n+"px",R=o+"px";r.style.left=D,r.style.top=R}for(let S=0;S<e.length;S++)Wi(e[S]);const I=r.children[0],l=r.offsetWidth,f=r.offsetHeight,_=Wt("MENUmodalBody"),E=r.getElementsByClassName("MENUmodalItemContainer");u==="keyboard"&&!N()?I.focus():u=="mouse"&&!N()&&(I.focus(),I.blur()),document.addEventListener("keydown",h),_.xOverflow==!0&&(c=n-l+"px",r.style.left=c),_.yOverflow==!0&&(d=o-f+"px",r.style.top=d);for(let S=0;S<E.length;S++){const D=E[S];D.setAttribute("data-menu-item-id",S),D.addEventListener("click",function(R){R.stopPropagation();const w=R.target.getAttribute("data-menu-item-id"),P=e[w].function,C=e[w].optionalParams;if(P=="TEST")console.log("the button worked",C);else if(P!="None"){Xi[P](C);return}else return})}function h(S){(S.key==="Escape"||S.keyCode===27)&&(document.removeEventListener("keydown",h),q())}}function St(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";N()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=Io,r.style.display="block",r.addEventListener("click",Xt);const u=document.getElementById("MENUmodalBody"),g=document.getElementById("MENUmodalBody_image_select_file_drop_area"),I=document.getElementById("MENUmodalBody_image_select_file_select_button"),l=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");u.style.left=c,u.style.top=d;let E,h;function S(T,w){return function(){const P=this,C=arguments;clearTimeout(h),h=setTimeout(()=>{T.apply(P,C)},w)}}function D(T,w,P){S(qi,100)(T,w,P)}function R(T){if(E){const w=URL.createObjectURL(E),P=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");l.src=w,f.style.visibility="visible",_.style.outline="3px solid var(--primary)",f.addEventListener("click",()=>{D(E,T.project_id,T.MenuType),P.style.visibility="visible"})}else console.log("No file selected.")}g.addEventListener("dragover",T=>{T.preventDefault()}),g.addEventListener("drop",T=>{T.preventDefault(),E=T.dataTransfer.files[0],R(e)}),I.addEventListener("click",()=>{const T=document.createElement("input");T.type="file",T.accept="image/*",T.addEventListener("change",w=>{E=w.target.files[0],R(e)}),T.click()})}function zi(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",q(),pe()}function Ki(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",q()}function Wt(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let u=!1,g=!1;return c>n&&(u=!0),d>o&&(g=!0),{xOverflow:u,yOverflow:g}}function Wi(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=Yi.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(U)){const u=new RegExp(`\\{${c}\\}`,"g");a=a.replace(u,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function Xt(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function q(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),Ne&&Ne.focus()}const Xi={PROJECT_VIEW_delete_project(e){Ni(),q()},PLAYBACK_add_songs_to_queue(e){ws(e),q()},SIGN_OUT_USER(e){q(),Vo()},OPEN_SETTINGS_PAGE(e){q(),J("/settings/")},PROJECT_VIEW_delete_song(e){Ji(e)},PROJECT_VIEW_add_song_to_queue(e){ki(e)}},Zi=`<div class="LCDbody">
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
</div>`;function es(){ts(),Zt(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){ns(t)}),os()}function ts(){let e="LCDbody",t=Zi;for(const[o,i]of Object.entries(U)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function Zt(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,u;e=n.clientWidth,d=s(),u=e/o,u>d?c=d+10:c=u,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const u=d.offsetWidth;return document.body.removeChild(d),u}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function ns(e){e.stopPropagation(),e.target,z([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function os(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",is)})}function is(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Os(n)}function ss(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}const as=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,rs=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,cs=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`;function ds(){let e="topleftContentArea",t=as;for(const[n,o]of Object.entries(U)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function ls(){let e="toprightContentArea",t=rs;for(const[n,o]of Object.entries(U)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function us(){let e="MAINcontentContainer",t=cs;for(const[n,o]of Object.entries(U)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const ms=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;let K="hidden";function gs(){us();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");tt(K),e.addEventListener("click",ps),t.addEventListener("click",_s),F()}function ps(){if(K==="hidden"){K="visible",tt(K);return}if(K==="visible"){K="hidden",tt(K);return}}function tt(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",Bt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function F(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=b+1;t<m.length;t++){m[t].id=t;const n=m[t],o=Ts(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",ys),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",bs),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&hs(r)}),i.addEventListener("dragstart",fs),i.addEventListener("dragover",vs),i.addEventListener("drop",Es),e.appendChild(i)}}function _s(){const e=b+1;e>=0&&e<m.length?m.splice(e):m.length=0,F()}function fs(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function vs(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Es(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(r=>r.id===parseInt(t)),i=m.find(r=>r.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),L.splice(s,1),L.splice(a,0,o),F())}function bs(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),L.splice(o,1)),F()}function hs(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];z(o,e)}function ys(e){}function Ts(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=ms;for(let c=0;c<t.length;c++){const d=t[c].toString(),u=new RegExp(`\\{${d}\\}`,"g");let g="";d==="QUEUE_item_image"?g=`${O}/${n}/3`:d==="QUEUE_item_title"?g=o:d==="QUEUE_item_artist"?g=i:d==="icons_menuOptionsButton"?g=Mt:d==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(u,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}let m=[],L=[],b=0,te="",Ue="",st="";document.getElementById("audio");document.getElementById("PLAYERsource");let x="off",W="off",ge="paused";function en(e){m=[],b=0,m=Ye(e),m.length>0&&(ge="playing",X())}function Is(e){m=[],b=0,m=Ye(e),m.length>0&&(W="off",on(),ge="playing",X())}function Ye(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Cs(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,b=n,Ns(o),m!==void 0&&m.length>0&&Ds(i)}async function ws(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await it(t),i=JSON.parse(o);i.ProjectID=t;const s=Ye(i);if(n==="later")m=m.concat(s),L=L.concat(s);else if(n==="next"){let a=m.slice(0,b+1),r=m.slice(b+1);m=a,m=m.concat(s),m=m.concat(r),a=L.slice(0,b+1),r=L.slice(b+1),L=a,L=L.concat(s),L=L.concat(r)}F()}async function Ls(e,t){const n=Ye(e);if(t==="later")m=m.concat(n),L=L.concat(n);else if(t==="next"){let o=m.slice(0,b+1),i=m.slice(b+1);m=o,m=m.concat(n),m=m.concat(i),o=L.slice(0,b+1),i=L.slice(b+1),L=o,L=L.concat(n),L=L.concat(i)}F()}function $e(){Ss()}function Ss(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(ne("playing"),ge="playing",e.play().then(n=>rn()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(ge="paused",ne("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){$e()});navigator.mediaSession.setActionHandler("pause",function(){$e()});function tn(){dn()}function nn(){ln()}function Ps(){document.getElementById("audio").addEventListener("ended",As)}function Os(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function Ms(){Rs()}function Bs(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:x,PLAYBACK_shuffle_state:W,progress:t}}function on(){if(W==="off"){W="on",Pt(W);const t=b+1;L=[...m],m.slice(0,b);const n=m.slice(t);go(n);const o=n.length;m.splice(b,o,...n),F()}else{W="off",Pt(W);const t=[...L],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(b=e);F()}}function X(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${O}/${m[b].url}/3`,e.load(),ge==="playing"?(e.play().then(o=>rn()).catch(o=>console.log(o)),ne("playing")):ne("paused"),an(),sn()}function Ds(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${O}/${m[b].url}/3`,t.load(),t.currentTime=e,ne("paused"),an(),sn()}function sn(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${rt(s)}"`,c=`"${rt(Math.floor(i))}"`,d=i/o*100,u=`${d}%`;ss(c,a),t.style.setProperty("--LCD-seekbar-width",u),t.style.setProperty("--LCD-seekbar-indicator-left",u),n.value=d,cn()})}function an(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=m[b].song_name,t.innerHTML=m[b].song_name,n.innerHTML=m[b].project_contributors,Zt(),o.src=`${O}/${m[b].img}/3`,i.src=`${O}/${m[b].img}/3`,te=`${O}/${m[b].img}/5`,Ue=m[b].song_name,st=m[b].project_contributors,F()}function rn(){let e=m[b];const t=[{src:`${O}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${O}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${O}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${O}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${O}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${O}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),cn(),document.title=`${e.song_name} by ${e.project_contributors} playing on Orange Music`}function cn(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function xs(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",ne("paused"),m=[],L=[],b=0,t.src="http://null.com/null",document.title="Orange Music"}function As(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>b+1&&(x=="off"||x=="on")?(b+=1,X()):x=="song"?X():t==b+1&&x=="on"?(b=0,X()):xs()}function dn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>b+1&&(e.pause(),b+=1,X())}navigator.mediaSession.setActionHandler("nexttrack",function(){dn()});function ln(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),m.length,e.currentTime>2){e.currentTime=0;return}else if(b>0){e.pause(),b-=1,X();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){ln()});function Rs(){x=="off"?(x="on",ee(x)):x=="on"?(x="song",ee(x)):(x="off",ee(x))}function Ns(e){e=="off"?(x="off",ee(x)):e=="on"?(x="on",ee(x)):(e="song",x="on",ee(x))}function Us(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",js),t.addEventListener("click",ks),n.addEventListener("click",Js),o.addEventListener("click",Gs),i.addEventListener("click",Hs)}function js(){on()}function ks(){nn()}function Js(){$e()}function Gs(){tn()}function Hs(){Ms()}function Pt(e){document.getElementById("PLAYERshuffleButton");const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function ee(e){document.getElementById("PLAYERloopButton");const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=U.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=U.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=U.icons_loop_song;return}}function ne(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=U.icons_pause;return}if(e=="paused"){t.src=U.icons_play;return}}function Ys(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){un(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",$s)})}function $s(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;un(n)}function un(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function qs(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=fo(Qs,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&je==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&je==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",le()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function Fs(e){le(),je=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=ze();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{J(`/projects/${i}/${s}`),le()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=ze();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{J(`/projects/${i}`),le()})}}}async function Qs(e,t){if(t.value==""){le();return}const n=await Ti(t.value);Fs(n)}let je=!1;function le(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",je=!1}const Vs=`<div class="MUSICENJOYMODE-container">
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
                            <img src="{icons_shuffleButton}" alt="shuffle icon" height="16" id="" />
                        </div>
                    </button>
                    <button tabindex="0" class="button b" id="MUSICENJOYMODEplaybackControlsButton_back">
                        <div class="imgdiv">
                            <img src="{icons_backButton}" alt="back icon" height="25" />
                        </div>
                    </button>
                    <button tabindex="0" class="button c" id="MUSICENJOYMODEplaybackControlsButton_play">
                        <div class="imgdiv">
                            <img src="{icons_play}" alt="play icon" height="40" id="" />
                        </div>
                    </button>
                    <button tabindex="0" class="button d" id="MUSICENJOYMODEplaybackControlsButton_next">
                        <div class="imgdiv">
                            <img src="{icons_nextButton}" alt="next icon" height="25" />
                        </div>
                    </button>
                    <button tabindex="0" class="button e" id="MUSICENJOYMODEplaybackControlsButton_loop">
                        <div class="imgdiv">
                            <img src="{icons_loop}" alt="loop icon" height="25" id="" />
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
</div>`;function zs(){const e=document.getElementById("musicEnjoyEnvironment");e.innerHTML=Z(Vs),document.getElementById("MUSICENJOYMODEexitButton").addEventListener("click",Ws),document.getElementById("MusicEnjoyOpenButton").addEventListener("click",Ot),N()&&document.getElementById("LCDbody").addEventListener("click",Ot)}async function Ks(){const e=await Nt(te),t=document.getElementById("MUSICENJOYMODEbackground");kt(t,e)}async function Ot(){const e=document.getElementById("musicEnjoyEnvironment"),t=document.getElementById("MUSICENJOYMODEcoverImage1"),n=document.getElementById("MUSICENJOYMODEcoverImage2"),o=document.getElementById("MUSICENJOYMODEsongTitle1"),i=document.getElementById("MUSICENJOYMODEsongTitle2"),s=document.getElementById("MUSICENJOYMODEsongArtist");e.style.display="block",t.src=te,n.src=te,o.innerText=Ue,i.innerText=Ue,s.innerText=st,Ks()}function Ws(){const e=document.getElementById("musicEnjoyEnvironment");e.style.display="none",jo()}const A="/apis",O="/media";async function mn(){Ps(),ds(),ls(),es(),Us(),qs(),Ys(),qo(),gs(),Ei(),Go(),zs()}window.hasCodeRun||(gi(),window.hasCodeRun=!0);
