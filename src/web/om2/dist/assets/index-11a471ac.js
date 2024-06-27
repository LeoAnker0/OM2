(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Pn="/assets/volume_null-e39cf06f.svg",On="/assets/recently_added-a0a983c6.svg",Mn="/assets/volume_3-c8ab0a75.svg",Bn="/assets/orange_music_text_logo_black-12e7386c.svg",Dn="/assets/volume_2-cfdac9da.svg",xn="/assets/browse_2-85030bba.svg",An="/assets/volume_1-27e93416.svg",Rn="/assets/orange_music_logo_white-2a680ea2.svg",Nn="/assets/search_icon-4f5e4381.svg",Un="/assets/orange_music_text_logo_black-91f9e706.png",jn="/assets/up_next_queue_button-14fedba2.svg",kn="/assets/orange_music_logo_yellow-a109ff64.svg",Jn="/assets/playlist-c6e9024f.svg",Gn="/assets/loop_button-aef56865.svg",Yn="/assets/help_icon-867fec9d.svg",Hn="/assets/play_button-b1e2d3a4.svg",$n="/assets/browse-14744f27.svg",jt="/assets/menu_options_button-a1d7bbe3.svg",qn="/assets/orange_music_text_logo_white-7f0ba909.svg",Fn="/assets/back_button-8128cade.svg",Qn="/assets/Albums-2e81dc74.svg",Vn="/assets/songs-016b7188.svg",zn="/assets/orange_music_logo_black-4d7e4591.svg",Kn="/assets/your_uploaded_songs-06535705.svg",Wn="/assets/artist-ab677d43.svg",Xn="/assets/shuffle_button-c2f06bc4.svg",Zn="/assets/orange_music_text_logo_white-4907051e.png",eo="/assets/listen_now-c7438154.svg",to="/assets/derpy-21c20ae5.svg",no="/assets/next_button-9a850710.svg",oo="/assets/recently_added-7ff28139.svg",io="/assets/play_button-5eeedbe6.svg",so="/assets/browse-e8be8609.svg",ao="/assets/albums-681507b8.svg",ro="/assets/listen_now.2-bfa293ac.svg",co="/assets/your_uploads-02e5c93c.svg",lo="/assets/play_button.2-fc90fac7.svg",uo="/assets/listen_now-fb02ffce.svg",mo="/assets/browse.2-15b501dd.svg",go="/assets/place_holder_image-d4006a96.svg",po="/assets/icons_MOGitems_add-19e679f7.svg",_o="/assets/back-9279721d.svg",fo="/assets/forwards-605bd405.svg",vo="/assets/icons_close-57e87944.svg",Eo="/assets/icons_pause-8012f8cc.svg",yo="/assets/icons_loop-32d1576c.svg",ho="/assets/icons_loop_song-87f53dc7.svg",bo="/assets/icons_play-a5074c5b.svg",To="/assets/icons_settings-793063fb.svg",Io="/assets/love-07ac5006.svg",Co="/assets/upload-3bad9145.svg",B={icons_volumeNull:Pn,icons_recentlyAdded:On,icons_volume3:Mn,icons_orangeMusicTextLogoBlack:Bn,icons_volume2:Dn,icons_browse2:xn,icons_volume1:An,icons_orangeMusicLogoWhite:Rn,icons_searchIcon:Nn,icons_orangeMusicTextLogoBlackPng:Un,icons_queueButton:jn,icons_orangeMusicLogoYellow:kn,icons_playlist:Jn,icons_loopButton:Gn,icons_helpIcon:Yn,icons_playButton:Hn,icons_browse:$n,icons_menuOptionsButton:jt,icons_orangeMusicTextLogoWhite:qn,icons_backButton:Fn,icons_Albums:Qn,icons_songs:Vn,icons_orangeMusicLogoBlack:zn,icons_yourUploadedSongs:Kn,icons_artist:Wn,icons_shuffleButton:Xn,icons_orangeMusicTextLogoWhitePng:Zn,icons_listenNow:eo,icons_derpy:to,icons_nextButton:no,icons_recentlyAddedV2:oo,icons_playButtonV2:io,icons_browseV2:so,icons_albumsV2:ao,icons_listenNow2V2:ro,icons_yourUploads:co,icons_playButton2:lo,icons_listenNowV2:uo,icons_browse2V2:mo,v3_placeholder:go,icons_MOGitems_add:po,icons_back:_o,icons_forwards:fo,icons_close:vo,icons_pause:Eo,icons_loop:yo,icons_loop_song:ho,icons_play:bo,icons_settings:To,current_year:new Date().getFullYear(),icons_love:Io,icons_upload:Co};function U(){return!!window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) ").matches}function kt(){return!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)}function ne(e){for(const[t,n]of Object.entries(B)){const o=new RegExp(`\\{${t}\\}`,"g");e=e.replace(o,n)}return e}function at(e,t){const n=t.itemsToReplace;for(var o=n.length-1;o>=0;o--){const i=n[o][0].toString(),s=n[o][1],a=new RegExp(`\\{${i}\\}`,"g");e=e.replace(a,s)}return e}function wo(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function _t(e){let t=0,n=0,o;return e=parseInt(e,10),e>60*60&&(t=parseInt(e/(60*60),10),e-=t*60*60),e>60&&(n=parseInt(e/60,10),e-=n*60),o=e,e=t>0?t+":":"",e+=n>0?(n<10&&t>0?"0":"")+n+":":"0:",e+=(o<10?"0":"")+o,e}function So(e){const n=(Date.now()-e)/(1e3*60*60*24);let o;return n<.01||n<1?(o="Now",o):n<8?(o=Math.floor(n)+"d",o):n<29?(o=Math.floor(n/7)+"w",o):n<365?(o=Math.floor(n/28)+"m",o):(o=Math.floor(n/365)+"y",o)}function Jt(e){const n=(Date.now()-e)/1e3;if(n<60)return"Now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{if(n<172800)return"Yesterday";if(n<31536e3){const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}else return`${new Date(e).getFullYear()}`}}function pe(e){return e<1024?`${e} b`:e<1024*1024?`${(e/1024).toFixed(2)} kb`:`${(e/1024/1024).toFixed(2)} mb`}function Lo(e){if(!e)return-1;var t=0;do t++;while(e=e.previousElementSibling);return t}function Gt(e,t){let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}}function Po(e,t){let n;return function(...o){const i=this;clearTimeout(n),n=setTimeout(()=>{e.apply(i,o)},t)}}function We(){const e=Math.random().toString(36).substr(2,6),t=Date.now().toString(36);return e+t}let Ae;const b=new Map;function Oo(e,t,n){b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function o(){const a=Date.now()-i;if(!b.has(e))return;const r=Math.min(a/500,1);if(!b.has(e))return;const c=Yt(b.get(e).originalColor,r,n);e.style.backgroundColor=c,(r<1||b.get(e).isChanging)&&(b.get(e).animationFrameId=requestAnimationFrame(o)),r==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(Ae),Ae=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},500),b.get(e).isChanging=!0;const i=Date.now();b.get(e).animationFrameId=requestAnimationFrame(o)}function Mo(e,t,n,o,i){const s=i||2500;b.has(e)||b.set(e,{originalColor:t,isChanging:!1,animationFrameId:null});function a(){const d=Date.now()-r;if(!b.has(e))return;const l=Math.min(d/(o==="hardNewToOld"?s*4/5:500),1);if(!b.has(e))return;let g;o==="hardNewToOld"&&l<1?g=n:g=Yt(b.get(e).originalColor,Math.min(l,1),n),e.style.backgroundColor=g,l<1||b.get(e).isChanging?b.get(e).animationFrameId=requestAnimationFrame(a):(e.style.backgroundColor="",b.delete(e)),l==1&&(e.style.backgroundColor="",b.delete(e))}clearTimeout(Ae),Ae=setTimeout(()=>{b.has(e)&&!b.get(e).isChanging&&(e.style.backgroundColor="",cancelAnimationFrame(b.get(e).animationFrameId),b.delete(e))},s),b.get(e).isChanging=!0;const r=Date.now();b.get(e).animationFrameId=requestAnimationFrame(a)}function Bo(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top>=0&&t.bottom<=n}function Yt(e,t,n){return Do(n,e,t)}function Do(e,t,n){const o=function(u){return u=u.toString(16),u.length===1?"0"+u:u},i=parseInt(e.substring(1,3),16),s=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),c=parseInt(t.substring(3,5),16),d=parseInt(t.substring(5,7),16),l=Math.round(i*(1-n)+r*n),g=Math.round(s*(1-n)+c*n),I=Math.round(a*(1-n)+d*n);return"#"+o(l)+o(g)+o(I)}function Ht(e){const n=getComputedStyle(document.documentElement).getPropertyValue(e).trim().match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);let o,i,s;o=parseInt(n[1],10),i=parseInt(n[2],10),i=i/100,s=parseInt(n[3],10),s=s/100;const a=xo(o,i,s),r=ze(a[0]),c=ze(a[1]),d=ze(a[2]);return Ao({r,g:c,b:d})}function xo(e,t,n){let o=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-o*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function ze(e){const t=Math.min(1,Math.max(0,e));return Math.round(t*255)}function Ao(e){const t=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+t(e.r)+t(e.g)+t(e.b)}const Ro=`<div class="MENUmodalBody_image_select" id="MENUmodalBody">
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
</div>`,No=`<div class="lcd_mobile_queue_item">
    <img class="lcd_mobile_queue_item_song_img" src="{queue_item_img}">
    <div class="lcd_mobile_queue_item_song_name">{queue_item_song_name}</div>
    <div class="lcd_mobile_queue_item_song_artist">{queue_item_song_artist}</div>
</div>`,Uo=`<div class="LCD_mobile_body_container MATERIAL-meshBackground">
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
</div>`;function jo(e){return new Promise((t,n)=>{const o=new Image;o.crossOrigin="Anonymous",o.onload=()=>t(o),o.onerror=i=>n(i),o.src=e})}function ko(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height).data}function Jo(e,t,n){return`#${(1<<24|e<<16|t<<8|n).toString(16).slice(1)}`}function Go(e,t,n){e/=255,t/=255,n/=255;const o=Math.max(e,t,n),i=Math.min(e,t,n);let s,a,r=(o+i)/2;if(o===i)s=a=0;else{const c=o-i;switch(a=r>.5?c/(2-o-i):c/(o+i),o){case e:s=(t-n)/c+(t<n?6:0);break;case t:s=(n-e)/c+2;break;case n:s=(e-t)/c+4;break}s/=6}return[s*360,a*100,r*100]}function Yo(e,t){const n=[],o=new Array(t);for(let s=0;s<t;s++)n.push(e[Math.floor(Math.random()*e.length)]);let i=!0;for(;i;){i=!1;for(let s=0;s<t;s++)o[s]=[];for(const s of e){let a=1/0,r=-1;for(let c=0;c<t;c++){const d=Ho(s,n[c]);d<a&&(a=d,r=c)}o[r].push(s)}for(let s=0;s<t;s++){const a=$o(o[s]);qo(a,n[s])||(n[s]=a,i=!0)}}return n}function Ho(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function $o(e){const t=e.reduce((n,o)=>(n[0]+=o[0],n[1]+=o[1],n[2]+=o[2],n),[0,0,0]);return[t[0]/e.length,t[1]/e.length,t[2]/e.length]}function qo(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Fo(e){return e.filter(([t,n,o])=>{const[i,s,a]=Go(t,n,o);return a>10&&a<93})}function Qo(e,t=5){const n=[];for(let a=0;a<e.length;a+=4){const r=e[a],c=e[a+1],d=e[a+2];n.push([r,c,d])}const i=Fo(n);return Yo(i,t).map(([a,r,c])=>Jo(a,r,c))}async function $t(e,t=5){e=e.slice(0,-1)+"2";try{const n=await jo(e),o=ko(n);return Qo(o,t)}catch(n){console.error("Error loading image:",n)}}const ft=1500;let qt=0,Xe=[],Ke;function x(e,t){const o=new Date().getTime();Xe.push({notificationText:e,notificationType:t,time:o}),Ft()}function Ft(){const t=new Date().getTime(),n=Xe.at(qt);Xe.length>1?t-Ke>ft?(vt(n.notificationText,n.notificationType),Ke=t):setTimeout(Ft,ft):(vt(n.notificationText,n.notificationType),Ke=t)}function vt(e,t){const n=document.getElementById("noticationContainer");let o;qt+=1,t=="error"?o="var(--whoopsie)":t=="success"?o="var(--success)":t=="background"?o="var(--background)":t=="orange"?o="var(--orange)":t=="primary"?o="var(--primary)":t=="secondary"&&(o="var(--secondary)");const i=document.createElement("div");i.style.backgroundColor=o,i.textContent=e,n.appendChild(i)}let v,Y,Oe,Me,Be,le;const ce={program:Y,vertexShader:Oe,fragmentShader:Me,positionBuffer:Be};let Ze=[];function Qt(e,t){e.innerHTML="";const n=We(),o=document.createElement("canvas");o.id=n,e.appendChild(o);const i=document.getElementById(n);if(v=i.getContext("webgl"),!v){console.error("WebGL not supported"),x("WebGL not supported","error");return}i.width=window.innerWidth,i.height=window.innerHeight,v.viewport(0,0,v.canvas.width,v.canvas.height);const s=`
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
`;function r(u,f,_){const y=u.createShader(f);return u.shaderSource(y,_),u.compileShader(y),u.getShaderParameter(y,u.COMPILE_STATUS)?y:(console.error("Error compiling shader:",u.getShaderInfoLog(y)),u.deleteShader(y),null)}Oe=r(v,v.VERTEX_SHADER,s),Me=r(v,v.FRAGMENT_SHADER,a),Y=v.createProgram(),v.attachShader(Y,Oe),v.attachShader(Y,Me),v.linkProgram(Y),v.getProgramParameter(Y,v.LINK_STATUS)||console.error("Error linking program:",v.getProgramInfoLog(Y)),Be=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,Be);const c=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];v.bufferData(v.ARRAY_BUFFER,new Float32Array(c),v.STATIC_DRAW);const d=v.getAttribLocation(Y,"a_position");v.enableVertexAttribArray(d),v.vertexAttribPointer(d,2,v.FLOAT,!1,0,0),window.addEventListener("resize",()=>I()),I();const l=[];for(let u=0;u<5;u++)l.push(v.getUniformLocation(Y,`u_colors[${u}]`));Ze=t.map(Vt);function g(u){u*=.001,I(),v.clear(v.COLOR_BUFFER_BIT),v.useProgram(Y);const f=v.getUniformLocation(Y,"u_resolution");v.uniform2f(f,v.canvas.width,v.canvas.height);const _=v.getUniformLocation(Y,"u_time");v.uniform1f(_,u);for(let y=0;y<5;y++)v.uniform3fv(l[y],Ze[y]);v.drawArrays(v.TRIANGLES,0,6),le=requestAnimationFrame(g)}le=requestAnimationFrame(g);function I(){const u=window.innerWidth,f=window.innerHeight;(i.width!==u||i.height!==f)&&(i.width=u,i.height=f,v.viewport(0,0,v.canvas.width,v.canvas.height))}ce.program=Y,ce.vertexShader=Oe,ce.fragmentShader=Me,ce.positionBuffer=Be}function Vt(e){e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n/255,o/255,i/255]}function Vo(e,t){if(!e)return;t.program&&t.vertexShader&&t.fragmentShader&&(e.detachShader(t.program,t.vertexShader),e.detachShader(t.program,t.fragmentShader)),t.vertexShader&&e.deleteShader(t.vertexShader),t.fragmentShader&&e.deleteShader(t.fragmentShader),t.program&&e.deleteProgram(t.program),t.positionBuffer&&e.deleteBuffer(t.positionBuffer);const n=e.getExtension("WEBGL_lose_context");n&&n.loseContext()}function zo(){le&&(cancelAnimationFrame(le),le=null),Vo(v,ce)}function Ko(e,t){Ze=t.map(Vt)}const Wo=`<div class="UPLOAD-INDICATOR-container" id="UPLOAD_INDICATOR_container">
    <div class="loader"></div>
</div>`,Xo=`
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
`;let Ye=!1;function Zo(){const e=document.getElementById("MAINcontentContainer"),t=document.getElementById("uploadQueueModal"),n=document.getElementById("uploadQueueButton");e.innerHTML+=Wo,n.addEventListener("click",function(o){Ye==!1?ti(o):Re()}),t.innerHTML=Xo}function ei(){const e=document.getElementById("UPLOAD_INDICATOR_container"),t=document.getElementById("uploadQueueButtonContainer");e.style.opacity="100%",t.style.visibility="visible"}function Et(){const e=document.getElementById("uploadQueueButtonContainer"),t=document.getElementById("UPLOAD_INDICATOR_container");t.style.opacity="",e.style.visibility="",Ye==!0&&H.length>0||Re()}function Ce(e){const t=document.getElementById("UPLOADQUEUEBOTTOM_songName"),n=document.getElementById("UPLOADQUEUEBOTTOM_fileSize");if(H.length>0){t.innerHTML=H[0].file.name,n.innerHTML=pe(H[0].file.size*1.75),ni(document.getElementById("specificChart"),e,!0);const i=document.getElementById("UPLOADQUEUEbottomContainer");for(;i.childNodes.length>2;)i.removeChild(i.lastChild);let s="";for(var o=0;o<H.length;o++){const a=H[o].file.name,r=pe(H[o].file.size*2);s+=`<div class="UPLOADQUEUE-bottom-items-next"><div class="itemName">${a}</div><div class="itemSize">${r}</div></div>`}i.innerHTML+=s}if(e==100){const i=document.getElementById("UPLOADQUEUEBOTTOM_bottom_text");i.innerHTML='Processing<span id="UPLOADQUEUEBOTTOM_fileSize"><span class="ANIMATIONS-EllipsisLoader"></span></span>'}}let yt;function ti(e){Ye=!0,yt=document.activeElement;let t=e.clientX,n=e.clientY;const o=document.getElementById("uploadQueueModal");let i=t+"px",s=n+"px";MENUmodalEnvironment.addEventListener("click",Re),o.style.left=i,o.style.top=s;let a="mouse";if(e.webkitForce==1||e.webkitForce==0?e.webkitForce==0&&(a="keyboard"):e.pointerType!=="mouse"&&(a="keyboard"),a=="keyboard"){const g=yt.getBoundingClientRect();t=g.left+window.scrollX,n=g.top+window.scrollY;let I=t+"px",u=n+"px";o.style.left=I,o.style.top=u}const r=o.offsetWidth,c=o.offsetHeight,d=rn("uploadQueueModal");o.style.visibility="visible",document.addEventListener("keydown",l),d.xOverflow==!0&&(i=t-r+"px",o.style.left=i),d.yOverflow==!0&&(s=n-c+"px",o.style.top=s);function l(g){(g.key==="Escape"||g.keyCode===27)&&(document.removeEventListener("keydown",l),Re())}}function Re(){Ye=!1;const e=document.getElementById("uploadQueueModal");e.style.visibility=""}function ni(e,t,n){t=Math.round(t),t>100?t=100:t<0&&(t=0);var o=Math.round(360*(t/100)),i=e.querySelector(".pie"),s=e.querySelector(".right-side");t>50?(i.style.clip="rect(auto, auto, auto, auto)",s.style.transform="rotate(180deg)"):(i.style.clip="rect(0, 1em, 1em, 0.5em)",s.style.transform="rotate(0deg)"),n?(s.style.borderWidth="0.1em",e.querySelector(".left-side").style.borderWidth="0.1em",e.querySelector(".shadow").style.borderWidth="0.1em"):(s.style.borderWidth="0.5em",e.querySelector(".left-side").style.borderWidth="0.5em",e.querySelector(".shadow").style.borderWidth="0.5em"),e.querySelector(".num").textContent=t,e.querySelector(".left-side").style.transform="rotate("+o+"deg)"}let He;async function oi(){const e=document.getElementById("TOPRIGHTaccountImg");try{const t=await $e("profile_picture"),n=`${M}/${t}/3`;He=t;const o=document.getElementById("TOPRIGHTaccountImgButton");e.src=n,o.addEventListener("click",ii)}catch(t){console.error("Error initializing account image:",t)}}function ii(e){e.stopPropagation(),si(e)}function si(e){X([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}async function ai(){await ki(),localStorage.clear(),location.reload()}function ri(){const e=document.getElementById("MOGgridContainer");let t=document.createElement("button");t.classList.add("MOG-Mobile-SettingsButton"),t.id="MOGmobileSettingsButton",t.innerHTML=`<div class="MOGM-imageContainer"><img src="${M}/${He}/3"></div>`,e.prepend(t),document.getElementById("MOGmobileSettingsButton").addEventListener("click",ci)}function ci(e){e.stopPropagation(),di(e)}function di(e){X([{displayText:"Settings",optionalSVG:"icons_settings",function:"OPEN_SETTINGS_PAGE"},{displayText:"Sign Out",optionalSVG:"None",function:"SIGN_OUT_USER"}],e)}const li=`<div class="MOG-container" id="MOGcontainer">
    <div class="MOG-grid" id="MOGgridContainer"></div>
</div>`,ui=`<button tabindex="0" id="MOGaddNewItem" class="MOGaddNewItem">
    <div class="MOG_add_text">
        + add new project
    </div>
    <div class="MOG_add_image">
        <img src="{icons_MOGitems_add}">
    </div>
</button>`,mi=`<button tabindex="0" class="MOG-itemContainer" id="MOGI_itemContainer-{MOGI_placeholder_itemID}" draggable="false">
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
</button>`,zt=30;let _e=0;async function gi(){try{if(document.getElementById("MAINcontentPages").innerHTML+=ne(li),localStorage.getItem("MOGitems")!=null){const t=JSON.parse(localStorage.getItem("MOGitems"));_e+=t.length,ht(t)}const e=await tn(zt,0);JSON.stringify(e)!=localStorage.getItem("MOGitems")&&(_e+=e.length,ht(e),localStorage.setItem("MOGitems",JSON.stringify(e))),U()&&ri()}catch(e){console.error("Error in initMusicObjectsGrid:",e)}}function Kt(){_e=0;const e=document.getElementById("MAINcontentPages"),t=document.getElementById("MOGcontainer");t!==null&&t.removeEventListener("click",Wt),e.innerHTML=""}function ht(e){const t=document.getElementById("MOGgridContainer");t.innerHTML=ne(ui),bt(e);const n=document.getElementById("MOGcontainer");n.addEventListener("click",function(s){Wt(s,e)});let o;n.addEventListener("touchstart",function(s){s.timeStamp,o=setTimeout(function(){i(s,e)},500)}),n.addEventListener("touchend",function(s){s.timeStamp,clearTimeout(o)});function i(s,a){navigator.vibrate(1e3);const c=s.target.id.split("-")[1],d=a[c].project_id;Xt(s,d)}t.addEventListener("scroll",async function(){const s=t.scrollTop,a=t.scrollHeight,r=t.clientHeight;if(s>=a-r){const c=await tn(zt,_e);_e+=c.length,c.length>0&&bt(c)}})}function bt(e){const t=document.getElementById("MOGgridContainer"),n=e.length,o=ne(mi);for(var i=0;i<=n-1;i++){const s=i,a=e[i].img,r=e[i].top,c=e[i].bottom,d=e[i].days,l=So(d),g={itemsToReplace:[["MOG_image",`${M}/${a}/3`],["MOG_text1",`${r}`],["MOG_text2",`${c}`],["MOG_checkedDate",`${l}`],["MOGI_placeholder_itemID",`${s}`]]};t.innerHTML+=at(o,g)}}async function Wt(e,t){const n=e.target;if(n.classList.contains("MOG-item-controls-play")){const o=n.id.split("-")[1],i=t[o].project_id,s=await ct(i),a=JSON.parse(s);a.ProjectID=i,ln(a)}if(n.classList.contains("MOG-item-controls-menu")){const o=n.id.split("-")[1],i=t[o].project_id;Xt(e,i)}if(n.classList.contains("MOG-itemContainer")&&n.id!=="MOGaddNewItem"){const o=n.id.split("-")[1],i=t[o].project_id;G(`/projects/${i}`)}n.id==="MOGaddNewItem"&&G("/new-project/")}function Xt(e,t){e.stopPropagation(),X([{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"}],e)}let Tt;function rt(e){return new Promise((t,n)=>{Tt=document.activeElement;let o="mouse";event.webkitForce==1||event.webkitForce==0?event.webkitForce==0&&(o="keyboard"):event.pointerType!=="mouse"&&(o="keyboard");const i=document.getElementById("confirmModal"),s=`
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${e}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;i.innerHTML=s,i.style.visibility="visible";const a=document.getElementById("CONFIRMmodalDeleteButton"),r=document.getElementById("CONFIRMmodalCancelButton");function c(){It(),t("delete")}function d(){Tt.focus(),It(),t("cancel")}i.addEventListener("click",l=>{const g=l.target;g===a?c():(g===r||g===i)&&d()}),o==="keyboard"&&!U()?r.focus():o=="mouse"&&!U()&&(F(),r.focus(),r.blur())})}function It(){const e=document.getElementById("confirmModal");e.style.visibility="hidden"}const pi=`<div class="ADMINusersTableInfoRow">
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
</div>`,_i=`<h1>Admin</h1>
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
<br><br>`,Ct=`<h1>Admin</h1>
<p>You are not an admin user</p>`;function Zt(e,t,n){const o=document.getElementById(t);let i;o.addEventListener("touchstart",function(a){a.timeStamp,i=setTimeout(function(){s(a,e,n)},500)}),o.addEventListener("touchend",function(a){a.timeStamp,clearTimeout(i)}),o.addEventListener("dblclick",function(a){s(a,e,n)});function s(a,r,c){fi(a,r,c)}}function fi(e,t,n){e.target;const o={project_id:t};e.stopPropagation(),X(o,e,n)}const wt=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Long press your profile picture to change it</p>
<br><br>
<br><br>
<br><br>`,we=`<h1>General</h1>
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
<br><br>`,St=`<h1>User</h1>
<img id="settings_views_user_pfp_img" class="user_img" src="{users_img}">
<p>Double click your profile picture to change it.</p>
<br><br>
<br><br>
<br><br>`,vi=`<div class="settings_container">
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
</div>`;let Ne="general",W;async function Ei(){const e=await $e("admin");e=="true"&&!U()?(Ne="admin",W=[{name:"general",markup:we,button_id:"settings_button_general",function:Se},{name:"user",markup:St,button_id:"settings_button_user",function:Le},{name:"admin",markup:Ct,button_id:"settings_button_admin",function:Pt}]):e=="false"&&!U()?W=[{name:"general",markup:we,button_id:"settings_button_general",function:Se},{name:"user",markup:St,button_id:"settings_button_user",function:Le}]:U()&&e=="true"?(Ne="admin",W=[{name:"general",markup:we,button_id:"settings_button_general",function:Se},{name:"user",markup:wt,button_id:"settings_button_user",function:Le},{name:"admin",markup:Ct,button_id:"settings_button_admin",function:Pt}]):W=[{name:"general",markup:we,button_id:"settings_button_general",function:Se},{name:"user",markup:wt,button_id:"settings_button_user",function:Le}]}async function yi(){await Ei();const e=document.getElementById("MAINcontentPages");let t=vi;for(const[i,s]of Object.entries(B)){const a=new RegExp(`\\{${i}\\}`,"g");t=t.replace(a,s)}e.innerHTML=t;const n=document.getElementById("settings_go_to_other_content_button");Lt(Ne);for(var o=W.length-1;o>=0;o--){const i=W[o].button_id;document.getElementById(i).addEventListener("click",function(a){const r=a.srcElement.id,d=W.find(l=>l.button_id===r).name;Lt(d)})}n.addEventListener("click",function(){G("/")})}function et(){const e=document.getElementById("MAINcontentPages");e.innerHTML=""}function Lt(e){Ne=e;const t=["users_img"],n=document.getElementById("view_container"),o=W.find(s=>s.name===e);let i=o.markup;for(const[s,a]of Object.entries(B)){const r=new RegExp(`\\{${s}\\}`,"g");i=i.replace(r,a)}for(let s=0;s<t.length;s++){const a=t[s].toString(),r=new RegExp(`\\{${a}\\}`,"g");let c="";a==="users_img"&&(c=`${M}/${He}/4/`),i=i.replace(r,c)}n.innerHTML=i,o.function()}function Se(){}function Le(){Zt("user-id","settings_views_user_pfp_img","update_user_pfp")}let ue=[];async function Pt(){if(await $e("admin")!=="true")return;const t=["users_img"],n=document.getElementById("view_container");let o=_i;for(const[a,r]of Object.entries(B)){const c=new RegExp(`\\{${a}\\}`,"g");o=o.replace(c,r)}for(let a=0;a<t.length;a++){const r=t[a].toString(),c=new RegExp(`\\{${r}\\}`,"g");let d="";r==="users_img"&&(d=`${M}/${He}/4/`),o=o.replace(c,d)}n.innerHTML=o,tt(),document.getElementById("SETTINGS_ADMIN_UPDATE_COLUMN_submit_button").addEventListener("click",function(a){const r=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_column_to_updated"),c=document.getElementById("SETTINGS_ADMIN_UDPATE_COLUMN_new_data");if(r.value==""||c.value=="")x("Error Updating Column: empty inputs","error");else for(var d=ue.length-1;d>=0;d--){const l=ue[d];console.log(l),ji(l,r.value,c.value)}}),document.getElementById("SETTINGS_ADMIN_DELETE_USER_submit_button").addEventListener("click",async function(a){const r=document.getElementById("SETTINGS_ADMIN_DELETE_USER_user_to_delete").value;if(r==""){x("Error Deleting User: user UUID is empty","error");return}let c=null;for(let g=0;g<J.length;g++)J[g].uuid==r&&(c=J[g].username);if(c===null){x("Error Deleting User: this uuid is not associated with a user","error");return}const d=`Are you sure that you want to delete this user <b><i>${c}</i></b>?`,l=await rt(d);l==="cancel"||l==="delete"&&((await Ri(r)).success=="success"?x("Successfully deleted the user","success"):x("Failed to delete the user","error"),tt())})}let J;async function tt(){const e=await Ui();J=JSON.parse(e);const t=document.getElementById("usersTableInforRowsContainer");t.innerHTML="";for(let n=0;n<J.length;n++){const o=["Username","Email","UUID","Verified","Space_Used","Storage_Allowance","profile_picture_url","checkbox_number","Admin"],i=J[n].username,s=J[n].uuid,a=J[n].verified,r=J[n].email;let c=J[n].storage_allowance;c=pe(c);const d=J[n].admin,l=n;let g=J[n].storage_used;g=pe(g);let I=pi,u=J[n].profile_picture;u=`${M}/${u}/3`;for(let f=0;f<o.length;f++){const _=o[f].toString(),y=new RegExp(`\\{${_}\\}`,"g");let h="";_==="Username"?h=i:_==="Email"?h=r:_==="UUID"?h=s:_==="Verified"?h=a:_==="Space_Used"?h=g:_==="Storage_Allowance"?h=c:_==="profile_picture_url"?h=u:_==="checkbox_number"?h=l:_==="Admin"&&(h=d),I=I.replace(y,h)}t.innerHTML+=I}t.addEventListener("change",function(n){n.target&&n.target.type==="checkbox"&&hi()})}function hi(){ue=[];const t=usersTableEnvironment.querySelectorAll('input[type="checkbox"]'),n=[],o=document.getElementById("settings_admin_selected_items_visualition");t.forEach(function(i){if(i.checked){const r={id:i.id.replace("admin_users_table_check_box_",""),value:i.value};n.push(r)}}),n.forEach(function(i){const a=J[i.id].uuid;ue.push(a)}),o.innerHTML=`Selected Users: ${ue.length}`}const bi=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`,Ti=`<div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
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
</div>`;function Ii(){let e="MAINcontentPages",t=Ti;document.getElementById(e).innerHTML=t,document.getElementById("SETTINGSsignupForm").addEventListener("submit",Ci),document.getElementById("SIGNUPMODAL_return_to_login_button").addEventListener("click",function(){G("/")})}async function Ci(e){e.preventDefault();const t=document.getElementById("SETTINGSsignupForm"),n={};try{for(const i of t.elements)n[i.name]=="Submit"||(n[i.name]=i.value);const o=await fetch(`${R}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)x(`There was an error, ${o}`,"error");else{const i=o;x("Sign up Successful, Log in now","success"),G("/")}}catch{x("There was an error, try again","error")}}let de=!1,Ue=!1,nt=!1,je=!1;async function wi(){await Pi()?(Cn(),je=!0):Ue||(en(),Ue=!0)}async function Si(){Ue=!1,de=!1,nt=!1,en(),Ue=!0}function en(){Oi();const e=document.getElementById("SETTINGSmodalSignupButton");fetch(`${R}/meta/are_signups_allowed`).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i=="true"&&(e.style.display="inline-block",e.addEventListener("click",()=>{Ot(),Ii()}))}).catch(i=>{console.error("Fetch error:",i)});const t=document.getElementById("SETTINGSloginForm"),n=document.getElementById("email"),o=document.getElementById("password");t.addEventListener("submit",async i=>{if(i.preventDefault(),de)return!1;de=!0;const s=n.value,a=o.value;try{await Li(s,a)?(je=!0,x("Login Successful","success"),Cn(),Ot()):(je=!1,x("Error Logging In","error")),de=!1}catch(r){console.error("Error:",r),de=!1}return!1})}async function Li(e,t){try{return(await(await fetch(`${R}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})})).json()).Authenticated===!0}catch(n){return n.toString()=="SyntaxError: Unexpected end of JSON input"?x("The server is down","error"):console.error(n),!1}}async function Pi(){try{const e=await fetch(`${R}/users/prelogin`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return!e.ok&&e.status===401&&t.Authenticated==!1?!1:e.ok?e.ok&&t.Authenticated==!0?!0:e.ok?(console.log("The response was ok, but the correct data wasn't sent."),!1):(console.log("Catch all that shouldn't be needed."),!1):(console.log("There was an unknown error:",e),!1)}catch(e){e.toString()=="SyntaxError: Unexpected end of JSON input"&&x("The server is down","error")}}function Oi(){let e="MAINcontentPages",t=bi;document.getElementById(e).innerHTML+=t}function Ot(){if(nt===!0)return;nt=!0;const e=document.getElementById("SETTINGSmodalID");try{e.remove()}catch{}}async function Mi(){const e=await $e("last_state"),t=JSON.parse(e),n=new Map;setInterval(s,1e4);let o=i(t);if(window.addEventListener("popstate",a),t!=null){const r=window.location.pathname;G(r),Us(t)}else a();function i(r){return JSON.stringify(r)}function s(){const r=window.location.pathname,c=m,d=E,l=Hs();l.current_path=r,l.current_queue=c,l.current_index=d;const g=i(l);g!==o&&(xi("last_state",l),o=g,n.set("playback_states",g))}function a(){G(currentPath)}}function Bi(){je==!1?(et(),Si()):(nn(),et(),gi())}function Mt(e,t){Kt(),et(),t!==null?xt(e,t):xt(e)}function Bt(){Kt(),nn(),yi()}const Dt={"/":Bi,"/new-project/":Pe,"/new-project":Pe,"/new/":Pe,"/new":Pe,"/projects/:projectID":Mt,"/projects/:projectID/:songURL":Mt,"/settings/":Bt,"/settings":Bt};function Di(){const e=window.location.pathname,t=document.getElementById("MAINcontentPages");setTimeout(n,4e3),t.innerHTML+=`
    <br><br>
    <br><br>
    <br><br>    
    <h1 style="width:80%;margin-left:10%;">
        Sorry 404: <em>${e}</em> doesn't exist, you will now be taken back to the main page.
    </h1>
    `;function n(){G("/")}}function G(e){const t=Object.keys(Dt);for(const n of t){const o=new RegExp(`^${n.replace(/:[^\s/]+/g,"([^/]+)")}$`),i=e.match(o);if(i){const s=Dt[n],a=i.slice(1);s(...a),e!=="/new-project/"&&history.pushState({},"",e);return}}Di()}async function xi(e,t){try{const n={column_to_be_updated:e,new_data:JSON.stringify(t)};if((await(await fetch(`${R}/users/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).json()).updated==="success")return;console.log("there was an error")}catch(n){console.error("Error:",n)}}async function Ai(e){try{const t={searchQuery:e};return await(await fetch(`${R}/users/search`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function Ri(e){try{const t={uuid:e};return await(await fetch(`${R}/admin/delete_user`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})).json()}catch(t){console.error("Error:",t)}}async function Ni(e,t){const n=t.split("-"),o=n[0],i=n[1];try{(await(await fetch(`${R}/projects/delete_song/${e}?s=${o}&v=${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).error&&x("There was an error deleting the song","error");return}catch(s){console.error("Error:",s);return}}async function $e(e){try{return(await(await fetch(`${R}/users/get_user_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(t){console.error("Error:",t)}}async function me(e,t,n){try{const o={project_id:e,column_to_be_updated:t,new_data:n};if((await(await fetch(`${R}/projects/update_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json()).updated==="success")return"yes";console.log("there was an error, yes")}catch(o){console.error("Error:",o)}}async function ct(e){try{return(await(await fetch(`${R}/projects/get_project_details/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).project_details}catch(t){console.error("Error:",t)}}async function tn(e,t){try{const i=(await(await fetch(`${R}/projects/get_projects?l=${e}&c=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projects;return Array.isArray(i)?i.map(a=>({img:a.PictureURL,top:a.ProjectName,bottom:a.ProjectContributors,days:a.TimeCreated,project_id:a.ProjectID})):[]}catch(n){return console.error("Error:",n),[]}}async function Pe(){try{const o=`/projects/${(await(await fetch(`${R}/projects/get_new_project_id`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).projectID}`;G(o)}catch(e){console.error("Error:",e)}}async function Ui(){try{return(await(await fetch(`${R}/admin/get_users_table`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json()).response}catch(e){console.error("Error:",e)}}async function ji(e,t,n){try{const o={user_to_update_uuid:e,column_to_be_updated:t,new_data:n},s=await(await fetch(`${R}/admin/update_user_details`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(o)})).json();if(s.updated==="success"){x("Table Updated Successfully","success"),tt();return}else{x(`Error Updating Column ${t}: ${s.Error}`,"error");return}}catch(o){x(`Error Updating Column ${t}: ${o}`,"error");return}}async function ki(){try{const t=await(await fetch(`${R}/meta/signout`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();if(t.message=="logged out")return;console.log(t);return}catch(e){console.error("Error:",e)}}const Ji=`<div class="PROJECTVIEW-SettingsBox-Container">
    <h3>Settings Box</h3>
</div>`;function ot(e,t){const n=document.getElementById("PROJECTVIEW_settingBox_environment");if(n!==null){if(n.innerHTML="",n.style.visibility="",t==="blank"){n.innerHTML="",n.style.visibility="hidden";return}console.log("Lets update the UPDATE_ProjectViewSettingsBox ",e,t),n.innerHTML+=Ji}}const Gi=`<div class="PROJECTview-projectTable" id="PROJECTview-projectTable" draggable="false" style="user-select: none; pointer-events: none;">
    <div class="PROJECTview-projectTable-rowContainer">
        <div class="PROJECTview-projectTable-rowItem-1 PROJECTview-projectTable-rowItem-Title-1">Song</div>
        <div class="PROJECTview-projectTable-rowItem-2 PROJECTview-projectTable-rowItem-Title">Artist</div>
        <div class="PROJECTview-projectTable-rowItem-3 PROJECTview-projectTable-rowItem-Title">Size</div>
        <div class="PROJECTview-projectTable-rowItem-4 PROJECTview-projectTable-rowItem-Title">Time</div>
    </div>
</div>`,Yi=`<div class="PROJECTview-projectTable-rowContainer" data-row-id="{PROJECTviewRow_projectID}" draggable="{PROJECTviewRow_contentEditable}" style="user-select: auto; pointer-events: auto;">
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
</div>`,Hi=`<div class="PROJECTviewContainerEnvironment">
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
</div>`,H=[];let qe=!1,De=!1,$i=!0,p;async function xt(e,t){qe=!0;const n=localStorage.getItem(`project-${e}`);if(n!==null?p=JSON.parse(n):kt()==!0?p={Description:"...",PictureURL:"static/loading_img_text_dark",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0}:p={Description:"...",PictureURL:"static/loading_img_text_light",ProjectContributors:"...",ProjectID:e,ProjectJSON:[],ProjectName:"..",TimeCreated:0},Qi(p),ot("","blank"),sessionStorage.setItem("description",p.Description),on(),xe(),document.getElementById("PROJECTviewMobileStickyHeaderBackButton").addEventListener("click",()=>{G("/")}),await fe(),sn(p.ProjectName),Fi(),Zt(p.ProjectID,"PROJECTviewDisplayImage","update_project_image"),Zi(),ot(p,"full"),t!=null){for(var i=p.ProjectJSON.length-1;i>=0;i--)if(p.ProjectJSON[i].URL==t){const a=`${p.ProjectJSON[i].SongSequence}-${p.ProjectJSON[i].Version}`;qi(a)}}}function nn(){const e=document.getElementById("MAINcontentPages");e.innerHTML="",qe=!1}async function fe(){if(!qe)return;const e=p.ProjectID,t=await ct(e);if(t=="")return;const n=structuredClone(p),o=JSON.parse(t);if(o.ProjectID=e,p=o,localStorage.setItem(`project-${e}`,`${JSON.stringify(p)}`),n.Description!==p.Description){const s=document.getElementById("PROJECTVIEW_DESCRIPTION_more_title"),a=document.getElementById("PROJECTVIEW_DESCRIPTION_more_artist_year");s.innerText=p.ProjectName,a.innerText=`${p.ProjectContributors} | ${Jt(p.TimeCreated)}`,sessionStorage.setItem("description",p.Description),on()}if(n.PictureURL!==p.PictureURL){const s=document.getElementById("PROJECTviewDisplayImage_imgTag"),a=`${M}/${p.PictureURL}/5`;s.src=a}if(n.ProjectContributors!==p.ProjectContributors){const s=document.getElementById("PROJECTviewDisplayTitleH3");s.innerText=p.ProjectContributors}if(n.ProjectName!==p.ProjectName){const s=document.getElementById("PROJECTviewDisplayTitleH1");s.innerText=p.ProjectName}if(n.ProjectJSON!==p.ProjectJSON)if(n.ProjectJSON==null||p.ProjectJSON==null)xe();else if(n.ProjectJSON.length!==p.ProjectJSON.length)xe();else{let s=0;for(var i=p.ProjectJSON.length-1;i>=0;i--)p.ProjectJSON[i].URL!==n.ProjectJSON[i].URL&&(s+=1);s>0&&xe()}ot(p,"full")}function qi(e){const t=a=>`#${a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(r=>parseInt(r,10).toString(16).padStart(2,"0")).join("")}`,n=Gt(Mo,0),o=Ht("--orange"),i=document.getElementById("PROJECTview-projectTable");for(var s=i.children.length-1;s>=0;s--){const a=i.children[s].dataset.rowId;if(a!==null&&a==e){const r=i.children[s].closest(".PROJECTview-projectTable-rowContainer"),c=getComputedStyle(r).backgroundColor,d=t(c);n(r,d,o,"hardNewToOld",3500),Bo(r)||r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}}}function Fi(){const e=document.getElementById("PROJECTviewDisplayTitleH1"),t=document.getElementById("PROJECTviewDisplayTitleH3");let n=document.getElementById("PROJECTviewDisplayTitleH1").innerText,o=document.getElementById("PROJECTviewDisplayTitleH3").innerText;const i=document.getElementById("PROJECTviewDescriptionMoreButton"),s=document.getElementById("PROJECTviewDisplayDescription"),a=document.getElementById("PROJECTviewMOREdescriptionboxEnvironment"),r=document.querySelector("main"),c=document.getElementById("PROJECTviewMOREcloseButton"),d=document.getElementById("PROJECTviewDescriptionTopPlayButton"),l=document.getElementById("PROJECTviewDescriptionTopShuffleButton"),g=document.getElementById("PROJECTviewDisplayMenuButton"),I=document.getElementById("PROJECTviewMobileStickyHeaderMenuButton"),u=document.querySelector(".PROJECTviewDisplayImage"),f=document.getElementById("PROJECTviewMobileStickyHeader"),_=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");document.getElementById("PROJECTviewMOREdescriptionC");const y=document.getElementById("PROJECTviewMOREdescriptionP"),h=new IntersectionObserver(T,{threshold:.1}),P=sessionStorage.getItem("description");y.innerText=P,i.addEventListener("click",function(){N()}),s.addEventListener("dblclick",function(){N()});let A=0;s.addEventListener("touchend",function(O){const C=new Date().getTime();C-A<300&&(O.stopPropagation(),N()),A=C}),c.addEventListener("click",function(){S(p)}),a.addEventListener("click",function(O){O.target===a&&S(p)}),d.addEventListener("click",function(){ln(p)}),l.addEventListener("click",function(){Ns(p)}),g.addEventListener("click",function(){At(event)}),I.addEventListener("click",function(){At(event)}),h.observe(u),e.addEventListener("blur",function(O){const C=e.innerText;C!==n&&(sn(C),me(p.ProjectID,"project_name",C),p.ProjectName=C)}),t.addEventListener("blur",function(O){const C=t.innerText;C!==o&&(me(p.ProjectID,"project_contributors",C),p.ProjectContributors=C)});function N(){a.style.display="grid",U()&&(r.style.zIndex="40")}function T(O,C){O.forEach($=>{$.isIntersecting&&U()?(f.style.backdropFilter="none",f.style.backgroundColor="transparent",_.style.visibility="hidden"):$.isIntersecting&&!U()||!$.isIntersecting&&!U()?(f.style.backdropFilter="",f.style.backgroundColor="",_.style.visibility=""):!$.isIntersecting&&U()&&(f.style.backdropFilter="blur(15px)",f.style.backgroundColor="var(--background-transparent)",_.style.visibility="visible")})}function S(O){const C=y.value;sessionStorage.setItem("description",C),me(O.ProjectID,"description",C),a.style.display="none",y.innerText=C,r.style.zIndex=""}}function Qi(e){const t={itemsToReplace:[["PROJECTviewMOREtitle",`${e.ProjectName}`],["PROJECTviewMOREartist",`${e.ProjectContributors}`],["PROJECTviewMOREyear",`${Jt(e.TimeCreated)}`],["MOG_checkedDate","checkedIndicator"],["MOGI_placeholder_itemID","temporaryIidentifier"],["PROJECTviewDisplayImage",`${M}/${e.PictureURL}/5`]]};document.getElementById("MAINcontentPages").innerHTML=at(ne(Hi),t)}function on(){let e=sessionStorage.getItem("description");const t=document.getElementById("PROJECTviewDescriptionP");t.innerText=e}function sn(e){const t=document.getElementById("PROJECTviewMobileStickyHeaderProjectNameContainer");t.innerText=e}function At(e){e.stopPropagation(),e.target;const t=p.ProjectID;let n;n=[{displayText:"Play next",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"next"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Play later",optionalSVG:"icons_playlist",optionalParams:{PROJECT_ID:t,QUEUE_POSITION:"later"},function:"PLAYBACK_add_songs_to_queue"},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_project",optionalParams:{PROJECT_ID:t},colour:"var(--whoopsie)"}],X(n,e)}async function Vi(e){const t=`Are you sure that you want to delete <em><b>${p.ProjectName}</b></em>? This action is not reversable.`;if(await rt(t)==="delete"){await zi(),F(),G("/");return}F()}async function zi(){const e=p.ProjectID;localStorage.removeItem(`project-${e}`);try{const n=await(await fetch(`${R}/projects/delete_project/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"})).json()}catch(t){console.error("Error:",t)}}function xe(){const e=document.getElementById("PROJECTview-projectTable");e!==null&&e.remove(),document.getElementById("PROJECTview_projectAreaContainer").innerHTML+=ne(Gi);const t=document.getElementById("PROJECTview-projectTable");let n=structuredClone(p.ProjectJSON);const o=Ht("--orange"),i=u=>`#${u.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(f=>parseInt(f,10).toString(16).padStart(2,"0")).join("")}`;let s;if(n==null)return;for(let u=0;u<n.length;u++){let f=ne(Yi);const _=n[u],y={itemsToReplace:[["PROJECTviewRow_img",`${M}/${p.PictureURL}/3`],["PROJECTviewRow_songTitle",`${_.SongName}`],["PROJECTviewRow_artistName",`${p.ProjectContributors}`],["PROJECTviewRow_projectName",`${pe(_.FolderSize)}`],["PROJECTviewRow_songDuration",`${Math.floor(_.Duration/60)}:${(_.Duration%60).toString().padStart(2,"0")}`],["PROJECTviewRow_projectID",`${_.SongSequence}-${_.Version}`],["PROJECTviewRow_contentEditable",`${$i}`]]};f=at(f,y),t.insertAdjacentHTML("beforeend",f);{const h=t.lastElementChild;h.addEventListener("dragstart",a),h.addEventListener("dragover",c),h.addEventListener("drop",d)}}function a(u){u.dataTransfer.setData("text/plain",u.target.dataset.rowId),u.dataTransfer.getData("text/plain"),s=u.srcElement,Lo(u.srcElement)}const r=Gt(Oo,0);function c(u){u.preventDefault(),u.dataTransfer.dropEffect="move";const f=u.target.closest(".PROJECTview-projectTable-rowContainer");if(f!==s){const _=getComputedStyle(f).backgroundColor,y=i(_);r(f,y,o)}}function d(u){u.preventDefault();const f=u.dataTransfer.getData("text/plain"),_=document.querySelector(`[data-row-id="${f}"]`),y=u.target.closest(".PROJECTview-projectTable-rowContainer");if(y){const P=structuredClone(p),A=y.getAttribute("data-row-id");y.before(_);const N=`${f}|${A}`;setTimeout(async()=>{await me(p.ProjectID,"SongsTableChangeSongSequenceOrder",N),fe()},1);let T=[];for(var h=0;h<t.children.length;h++){if(h==0)continue;const S=t.children[h],$=S.dataset.rowId.split("-")[0];let ae=P.ProjectJSON[$-1];ae.SongSequence=h,T.push(ae),S.style.backgroundColor="",S.dataset.rowId=`${h}-1`}p.ProjectJSON=T}}t.addEventListener("click",function(u){const f=u.target;if(u.stopPropagation(),f.tagName==="BUTTON"){const _=f.closest(".PROJECTview-projectTable-rowContainer");_&&(_.getAttribute("data-row-id"),Ki(u))}});const l=t.querySelectorAll("[contenteditable]"),g=[],I=u=>{const _=u.target.closest(".PROJECTview-projectTable-rowContainer").getAttribute("data-row-id"),y=u.target.textContent,h=g.find(T=>T.dataRowIDField===_);if((h?h.currentText:"Row ID not found")==y)return;for(var A=g.length-1;A>=0;A--)g[A].dataRowIDField===_&&(g[A].currentText=y);const N=`${_}-${y}`;me(p.ProjectID,"project_song_title",N)};l.forEach(u=>{u.addEventListener("blur",I),g.push({dataRowIDField:u.parentElement.parentElement.getAttribute("data-row-id"),currentText:u.innerText})})}function Ki(e){e.stopPropagation();const t=e.target,n=t.parentElement.parentElement.getAttribute("data-row-id"),o=t.parentElement.parentElement.firstElementChild.lastElementChild.innerText;let i;i=[{displayText:"Play Next",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"next"}},{displayText:"Play Later",optionalSVG:"icons_playlist",function:"PROJECT_VIEW_add_song_to_queue",optionalParams:{songID:n,queuePosition:"later"}},{displayText:"Delete",optionalSVG:"None",function:"PROJECT_VIEW_delete_song",optionalParams:{songID:n,songName:o},colour:"var(--whoopsie)"}],X(i,e)}function Wi(e){const n=e.songID.split("-")[0],o=e.queuePosition;let i=structuredClone(p);const s=i.ProjectJSON[n-1];i.ProjectJSON=[],i.ProjectJSON[0]=s,ks(i,o)}async function Xi(e){const t=`Are you sure that you want to delete <em><strong>${e.songName}</strong></em>? This action is not reversable.`;await rt(t)==="delete"&&(await Ni(p.ProjectID,e.songID),fe()),F()}function Zi(){const e=document.getElementById("PROJECTview_dropArea");document.getElementById("PROJECTview_dropArea_submit_button"),e.addEventListener("dragenter",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragover",o=>{o.preventDefault()}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover");const i=o.dataTransfer.files;n(i)});let t=[];e.addEventListener("click",o=>{const i=o.target.id,s=document.createElement("input");i!=="PROJECTview_dropArea_submit_button"?(s.type="file",s.accept="audio/*",s.multiple=!0,s.addEventListener("change",()=>{t=s.files}),s.click()):n(t)});function n(o,i){es(o)}}async function an(){const e=H[0];let t=e.file,n=e.ProjectID;const o=new FormData,i=new XMLHttpRequest;De=!0,ei(),o.append("file",t),o.append("project_id",n),i.upload.onprogress=function(s){if(s.lengthComputable){const a=s.loaded/s.total*100;Ce(a),a===100&&Ce(a)}},i.onload=async function(){if(i.responseText=="StorageLimit Reached"){x("Storage limit reached","error");for(var a=H.length-1;a>=0;a--)H.shift();De=!1,Et(),Ce(0)}De=!1,H.shift(),Et(),Ce(0),H.length>0&&await an(),p.ProjectID==n&&qe==!0&&fe()},i.onerror=function(){x("Upload Failed","error")},i.open("POST",`${R}/files/upload_audio/${n}`,!0),i.send(o)}async function es(e,t){document.getElementById("uploadsContainer");for(const n of e){const o={ProjectID:p.ProjectID,file:n};H.push(o),De||await an()}}const ts=`<button class="MENUmodalItemContainer" tabindex="0">
    <div class="MENUmodalTextArranger" style="color: {MENU_item_colour}">{MENU_item_text}</div>
    <div class="MENUmodalSVGcontainer">
        <img src="{MENU_item_image}" class="MENUmodalSVG">
    </div>
</button>`;async function ns(e,t,n){const o=new XMLHttpRequest,i=new FormData;i.append("file",e),o.upload.onprogress=function(s){s.lengthComputable&&s.loaded/s.total*100},o.onload=function(){o.status>=200&&o.status<300?(o.responseText=="StorageLimit Reached"&&x("Storage limit reached","error"),n!=="update_user_pfp"?rs():(cs(),location.reload())):console.error("Error during upload. Status:",o.status,"Response:",o.responseText)},o.onerror=function(){console.log("there was an error with the upload")},o.open("POST",`${R}/files/upload_photo?pi=${t}&mt=${n}`,!0),o.send(i)}async function os(e,t,n){Array.isArray(e)||(e=[e]);for(const o of e)await ns(o,t,n)}const is=`<div class="MENUmodalBody" id="MENUmodalBody">
</div>`;let ke,K=!1;function X(e,t,n){n===void 0?as(e,t):n!==void 0&&n==="update_project_image"?Rt(e,t,"update_project_image"):n!==void 0&&n==="update_user_pfp"?Rt(e,t,"update_user_pfp"):n!==void 0&&n==="lcd_mobile_body"?ss():console.log("invalid menu display inputs")}function ss(e){const t=document.querySelector("main"),n=document.querySelector(".topHalf-container"),o=document.getElementById("MENUmodalEnvironment");let i=Uo;const s=document.getElementById("audio"),a=["LCD_mobile_body_container_l2","LCD_mobile_body_img","LCD_mobile_body_title_area_container","LCD_mobile_body_song_title","LCD_mobile_body_artist_title","LCD_mobile_body_progress_bar","LCD_mobile_body_menu","LCD_mobile_body_queue_container","LCD_mobile_body_secondary_seek_indicator"];let r=0,c=0;U()&&(t.style.zIndex="40",n.style.zIndex="0");for(const[D,k]of Object.entries(B)){const q=new RegExp(`\\{${D}\\}`,"g");i=i.replace(q,k)}o.style.display="block",o.innerHTML=i;const d=document.getElementById("LCD_mobile_body_song_title"),l=document.getElementById("LCD_mobile_body_artist_title"),g=document.getElementById("LCD_mobile_body_img"),I=s.duration,f=s.currentTime/I*100,_=document.getElementById("LCDMB_seek_input"),y=document.getElementById("LCDMB_seek_indicator");document.getElementById("LCDMB_menu_button");const h=document.getElementById("LCDMB_back"),P=document.getElementById("LCDMB_play"),A=document.getElementById("LCDMB_play_icon"),N=document.getElementById("LCDMB_next"),T=document.getElementById("LCDMB_queue_button");s.addEventListener("ended",()=>{S(),K===!0&&$()}),S(),C(),y.style.width=`${f}%`,s.addEventListener("timeupdate",()=>{const D=s.duration,q=s.currentTime/D*100;y.style.width=`${q}%`}),_.addEventListener("input",function(){const D=s.duration,k=_.value;s.currentTime=D*(k/100)}),h.addEventListener("click",()=>{ut(),S(),K===!0&&$()}),P.addEventListener("click",()=>{ve(),S(),C()}),N.addEventListener("click",()=>{lt(),S(),K===!0&&$()}),T.addEventListener("click",()=>{K===!1?(ae(),K=!0):(pt(),K=!1)}),K===!0?ae():pt(),o.addEventListener("touchstart",Ee,!1),o.addEventListener("touchmove",ye,!1),o.addEventListener("touchend",he,!1);function S(){g.src=ie,d.innerText=Je,l.innerText=dt,O()}async function O(){const D=await $t(ie),k=document.getElementById("LCD_mobile_body_background");Qt(k,D)}function C(){s.paused?A.src=B.icons_playButtonV2:A.src=B.icons_derpy}function $(){const D=document.getElementById("LCD_mobile_queue_content_container");D.innerHTML="";for(let k=E+1;k<m.length;k++){const q=m[k],be=["queue_item_img","queue_item_song_name","queue_item_song_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],re=q.img,wn=q.song_name,Sn=q.project_contributors;let Qe=No;for(let Ve=0;Ve<be.length;Ve++){const Te=be[Ve].toString(),Ln=new RegExp(`\\{${Te}\\}`,"g");let Ie="";Te==="queue_item_img"?Ie=`${M}/${re}/3`:Te==="queue_item_song_name"?Ie=wn:Te==="queue_item_song_artist"&&(Ie=Sn),Qe=Qe.replace(Ln,Ie)}D.innerHTML+=Qe}}function ae(){function D(k){k.forEach(q=>{document.querySelectorAll("."+q).forEach(re=>{re.classList.add("queue_visible")})})}D(a),o.removeEventListener("touchstart",Ee),o.removeEventListener("touchmove",ye),o.removeEventListener("touchend",he),$()}function pt(){function D(k){k.forEach(q=>{document.querySelectorAll("."+q).forEach(re=>{re.classList.remove("queue_visible")})})}D(a),o.addEventListener("touchstart",Ee,!1),o.addEventListener("touchmove",ye,!1),o.addEventListener("touchend",he,!1)}function Ee(D){K===!1&&(r=D.touches[0].clientY)}function ye(D){D.preventDefault()}function he(D){c=D.changedTouches[0].clientY,c-r>70&&(F(),o.removeEventListener("touchstart",Ee),o.removeEventListener("touchmove",ye),o.removeEventListener("touchend",he))}}function as(e,t){ke=document.activeElement;let n=t.clientX,o=t.clientY;const i=document.querySelector("main"),s=document.querySelector(".topHalf-container");U()&&(i.style.zIndex="40",s.style.zIndex="0");const a=document.getElementById("MENUmodalEnvironment");a.innerHTML=is,a.style.display="block";const r=document.getElementById("MENUmodalBody");let c=n+"px",d=o+"px";a.addEventListener("click",cn),r.style.left=c,r.style.top=d;let l="mouse";if(t.webkitForce==1||t.webkitForce==0?t.webkitForce==0&&(l="keyboard"):t.pointerType!=="mouse"&&(l="keyboard"),l=="keyboard"){const P=ke.getBoundingClientRect();n=P.left+window.scrollX,o=P.top+window.scrollY;let A=n+"px",N=o+"px";r.style.left=A,r.style.top=N}for(let P=0;P<e.length;P++)ds(e[P]);const I=r.children[0],u=r.offsetWidth,f=r.offsetHeight,_=rn("MENUmodalBody"),y=r.getElementsByClassName("MENUmodalItemContainer");l==="keyboard"&&!U()?I.focus():l=="mouse"&&!U()&&(I.focus(),I.blur()),document.addEventListener("keydown",h),_.xOverflow==!0&&(c=n-u+"px",r.style.left=c),_.yOverflow==!0&&(d=o-f+"px",r.style.top=d);for(let P=0;P<y.length;P++){const A=y[P];A.setAttribute("data-menu-item-id",P),A.addEventListener("click",function(N){N.stopPropagation();const S=N.target.getAttribute("data-menu-item-id"),O=e[S].function,C=e[S].optionalParams;if(O=="TEST")console.log("the button worked",C);else if(O!="None"){ls[O](C);return}else return})}function h(P){(P.key==="Escape"||P.keyCode===27)&&(document.removeEventListener("keydown",h),F())}}function Rt(e,t,n){const o=t.clientX,i=t.clientY,s=document.querySelector("main"),a=document.querySelector(".topHalf-container"),r=document.getElementById("MENUmodalEnvironment");let c=o+"px",d=i+"px";U()&&(s.style.zIndex="40",a.style.zIndex="0"),e.MenuType=n,s.style.zIndex="2",r.innerHTML=Ro,r.style.display="block",r.addEventListener("click",cn);const l=document.getElementById("MENUmodalBody"),g=document.getElementById("MENUmodalBody_image_select_file_drop_area"),I=document.getElementById("MENUmodalBody_image_select_file_select_button"),u=document.getElementById("MENUmodalBody_image_select_preview_area"),f=document.getElementById("MENUmodalBody_image_select_submit_button"),_=document.getElementById("MENUmodalBody_image_select_submit_button_container");l.style.left=c,l.style.top=d;let y,h;function P(T,S){return function(){const O=this,C=arguments;clearTimeout(h),h=setTimeout(()=>{T.apply(O,C)},S)}}function A(T,S,O){P(os,100)(T,S,O)}function N(T){if(y){const S=URL.createObjectURL(y),O=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");u.src=S,f.style.visibility="visible",_.style.outline="3px solid var(--primary)",f.addEventListener("click",()=>{A(y,T.project_id,T.MenuType),O.style.visibility="visible"})}else console.log("No file selected.")}g.addEventListener("dragover",T=>{T.preventDefault()}),g.addEventListener("drop",T=>{T.preventDefault(),y=T.dataTransfer.files[0],N(e)}),I.addEventListener("click",()=>{const T=document.createElement("input");T.type="file",T.accept="image/*",T.addEventListener("change",S=>{y=S.target.files[0],N(e)}),T.click()})}function rs(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F(),fe()}function cs(){const e=document.getElementById("MENUmodalBody_image_submit_area_loader_spinner");e.style.visibility="hidden",F()}function rn(e){const t=document.getElementById(e),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=t.offsetWidth,s=t.getBoundingClientRect().left,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().height,c=i+s,d=r+a;let l=!1,g=!1;return c>n&&(l=!0),d>o&&(g=!0),{xOverflow:l,yOverflow:g}}function ds(e){const t=e.displayText,n=e.optionalSVG,o=document.getElementById("MENUmodalBody");let i="var(--text)";"colour"in e&&(i=e.colour);let s=new RegExp("\\{MENU_item_text\\}","g"),a=ts.replace(s,t);if(s=new RegExp("\\{MENU_item_colour\\}","g"),a=a.replace(s,i),n!=="None"){s=new RegExp("\\{MENU_item_image\\}","g");const r="{"+n+"}";a=a.replace(s,r);for(const[c,d]of Object.entries(B)){const l=new RegExp(`\\{${c}\\}`,"g");a=a.replace(l,d)}o.innerHTML+=a;return}else{a=a.replace(/<img[^>]+>/g,""),o.innerHTML+=a;return}}function cn(e){const t=document.getElementById("MENUmodalEnvironment"),n=document.querySelector("main"),o=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),i=document.querySelector(".topHalf-container");if(e.target===t){t.style.display="none",o.matches&&(n.style.zIndex="",i.style.zIndex="");return}}function F(){const e=document.getElementById("MENUmodalEnvironment"),t=document.querySelector("main"),n=window.matchMedia("screen and (orientation: portrait) and (max-width: 768px) and (pointer: coarse) "),o=document.querySelector(".topHalf-container");e.style.display="none",n.matches&&(t.style.zIndex="1",o.style.zIndex="10"),ke&&ke.focus()}const ls={PROJECT_VIEW_delete_project(e){Vi(),F()},PLAYBACK_add_songs_to_queue(e){js(e),F()},SIGN_OUT_USER(e){F(),ai()},OPEN_SETTINGS_PAGE(e){F(),G("/settings/")},PROJECT_VIEW_delete_song(e){Xi(e)},PROJECT_VIEW_add_song_to_queue(e){Wi(e)}},us=`<div class="LCDbody">
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
</div>`;function ms(){gs(),dn(),document.getElementById("LCDmenuButton").addEventListener("click",function(t){ps(t)}),_s()}function gs(){let e="LCDbody",t=us;for(const[o,i]of Object.entries(B)){const s=new RegExp(`\\{${o}\\}`,"g");t=t.replace(s,i)}const n=["LCD_titleText_placeholder","LCD_bottomText_placeholder"];for(let o=0;o<n.length;o++){const i=n[o].toString(),s=new RegExp(`\\{${i}\\}`,"g");let a="";(i==="LCD_titleText_placeholder"||i==="LCD_bottomText_placeholder")&&(a=""),t=t.replace(s,a)}document.getElementById(e).innerHTML=t}function dn(){let e;const t=document.getElementById("LCDtitleText"),n=document.getElementById("LCDrightcontent"),o=1.4;function i(){let c,d,l;e=n.clientWidth,d=s(),l=e/o,l>d?c=d+10:c=l,t.style.width=c+"px"}function s(){const c=document.getElementById("LCDtitleText"),d=document.createElement("span");d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.textContent=c.textContent,document.body.appendChild(d);const l=d.offsetWidth;return document.body.removeChild(d),l}function a(){let c;return function(){cancelAnimationFrame(c),c=requestAnimationFrame(i)}}const r=a();window.addEventListener("resize",r),i()}function ps(e){e.stopPropagation(),e.target,X([{displayText:"Menu 1",optionalSVG:"icons_helpIcon",function:"None",optionalParams:{queueID:"cheese"}},{displayText:"Bentulou",optionalSVG:"icons_settings",function:"None"}],e)}function _s(){document.querySelectorAll('input[type="range"]#LCDseekBar').forEach(t=>{t.addEventListener("input",fs)})}function fs(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("LCDseekBar"));const n=t.value/100,o=t.value+"%";document.documentElement.style.setProperty("--LCD-seekbar-width",o),Ys(n)}function vs(e,t){const n=document.documentElement;n.style.setProperty("--LCD-afterContent-bottom-left",e),n.style.setProperty("--LCD-afterContent-bottom-right",t)}const Es=`<div class="topleft-searchbarContainer">
    <div class="topleft-searchbarContainerL2">
        <!-- ignore the label, it's for accessibility -->
        <label for="searchBar" class="topleft-searchbar-hideLabels">Search Bar</label>
        <input class="topleft-searchbar-input" placeholder="Search" type="text" autocomplete="new-password" id="searchBar">
        <img class="topleft-search-icon" src="{icons_searchIcon}" alt="search icon" />
        <img class="topleft-clearIcon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="clear icon" id="topleftClearIcon" />
    </div>
</div>`,ys=`<div class="TOPRIGHT-topHalf-right-content">
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
</div>`,hs=`<div class="QUEUE-environment" id="QUEUEenvironment">
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
</div>`;function bs(){let e="topleftContentArea",t=Es;for(const[n,o]of Object.entries(B)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Ts(){let e="toprightContentArea",t=ys;for(const[n,o]of Object.entries(B)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML=t}function Is(){let e="MAINcontentContainer",t=hs;for(const[n,o]of Object.entries(B)){const i=new RegExp(`\\{${n}\\}`,"g");t=t.replace(i,o)}document.getElementById(e).innerHTML+=t}const Cs=`<div class="QUEUE-item-container" draggable="true">
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
</div>`;let Z="hidden";function ws(){Is();const e=document.getElementById("queueButton"),t=document.getElementById("QUEUEclearQueueButton");it(Z),e.addEventListener("click",Ss),t.addEventListener("click",Ls),z()}function Ss(){if(Z==="hidden"){Z="visible",it(Z);return}if(Z==="visible"){Z="hidden",it(Z);return}}function it(e){document.getElementById("queueButton");const t=document.getElementById("queueIcon"),n=document.getElementById("QUEUEenvironment");if(e=="visible"){t.style.filter="var(--make-svg-grey)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 100%",n.style.right="0%",kt&&(t.style.filter="var(--make-svg-white)");return}if(e=="hidden"){t.style.filter="var(--make-svg-black)",document.documentElement.style.cssText="--TOPRIGHT-accountcontrols-queue-opacity: 0%",n.style.right="calc((var(--width-of-left-bar-fortop) + 5rem) * -1)";return}}function z(){const e=document.getElementById("QUEUEbottomContainer");e.innerHTML="";for(let t=E+1;t<m.length;t++){m[t].id=t;const n=m[t],o=As(n),i=document.createElement("div");i.innerHTML=o,i.addEventListener("click",function(r){r.target.dataset.songId}),i.dataset.songId=n.id,i.addEventListener("click",xs),i.dataset.songId=n.id;const s=i.querySelector(".QUEUE-item-image-removeIndicator"),a=i.querySelector(".QUEUE-item-up-next-queue-item-context-call");s.addEventListener("click",Bs),s.dataset.songID=n.id,a.dataset.songSet=n.id,a.addEventListener("click",function(r){r.target===a&&Ds(r)}),i.addEventListener("dragstart",Ps),i.addEventListener("dragover",Os),i.addEventListener("drop",Ms),e.appendChild(i)}}function Ls(){const e=E+1;e>=0&&e<m.length?m.splice(e):m.length=0,z()}function Ps(e){const t=e.target;e.dataTransfer.setData("text/plain",t.dataset.songId)}function Os(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function Ms(e){e.preventDefault();const t=e.dataTransfer.getData("text/plain"),n=e.target,o=m.find(r=>r.id===parseInt(t)),i=m.find(r=>r.id===parseInt(n.dataset.songId)),s=m.indexOf(o),a=m.indexOf(i);s!==-1&&a!==-1&&(m.splice(s,1),m.splice(a,0,o),L.splice(s,1),L.splice(a,0,o),z())}function Bs(e){e.stopPropagation();const t=e.target,n=parseInt(t.dataset.songID),o=m.findIndex(i=>i.id===n);o!==-1&&(m.splice(o,1),L.splice(o,1)),z()}function Ds(e){e.stopPropagation();const o=[{displayText:"Play next",optionalSVG:"icons_playlist",function:"MENU_ACTION_playNext",optionalParams:{queueID:e.target.getAttribute("data-song-set")}},{displayText:"Play later",optionalSVG:"icons_backButton",function:"None"},{displayText:"Love",optionalSVG:"None",function:"None"},{displayText:"Less like this",optionalSVG:"None",function:"None"},{displayText:"Rate",optionalSVG:"None",function:"None"}];X(o,e)}function xs(e){}function As(e){const t=["QUEUE_item_image","QUEUE_item_title","QUEUE_item_artist","icons_menuOptionsButton","QUEUE_item_timeIndicator"],n=e.img,o=e.song_name,i=e.project_contributors,s=`${Math.floor(e.duration/60)}:${(e.duration%60).toString().padStart(2,"0")}`;let a=Cs;for(let c=0;c<t.length;c++){const d=t[c].toString(),l=new RegExp(`\\{${d}\\}`,"g");let g="";d==="QUEUE_item_image"?g=`${M}/${n}/3`:d==="QUEUE_item_title"?g=o:d==="QUEUE_item_artist"?g=i:d==="icons_menuOptionsButton"?g=jt:d==="QUEUE_item_timeIndicator"&&(g=s),a=a.replace(l,g)}a=a.replace("<div",`<div data-song-id="${e.id}"`);const r=document.createElement("div");return r.querySelector(".QUEUE-item-image-removeIndicator"),r.innerHTML=a,r.innerHTML}class Rs{constructor(){this.events={}}on(t,n){this.events[t]||(this.events[t]=[]),this.events[t].push(n)}off(t,n){this.events[t]&&(this.events[t]=this.events[t].filter(o=>o!==n))}emit(t,...n){this.events[t]&&this.events[t].forEach(o=>{o(...n)})}}let m=[],L=[],E=0,ie="",Je="",dt="",V="paused",w="off",Q="off";document.getElementById("audio");document.getElementById("PLAYERsource");const j=new Rs;function ln(e){m=[],E=0,m=Fe(e),m.length>0&&(V="playing",te())}function Ns(e){m=[],E=0,m=Fe(e),m.length>0&&(Q="off",mt(),V="playing",te())}function Fe(e){const t=[],n=e.ProjectContributors,o=e.ProjectName,i=e.PictureURL;let s=e.ProjectJSON;try{for(const a of s){const r=a.SongName,c=a.Duration,d=a.URL;t.push({img:i,song_name:r,url:d,duration:c,project_name:o,project_contributors:n})}}catch(a){console.log(a)}return t}function Us(e){const t=e.current_queue,n=e.current_index,o=e.PLAYBACK_loop_state;e.PLAYBACK_shuffle_state;const i=e.progress;m=t,E=n,Vs(o),m!==void 0&&m.length>0&&$s(i)}async function js(e){const t=e.PROJECT_ID,n=e.QUEUE_POSITION,o=await ct(t),i=JSON.parse(o);i.ProjectID=t;const s=Fe(i);if(n==="later")m=m.concat(s),L=L.concat(s);else if(n==="next"){let a=m.slice(0,E+1),r=m.slice(E+1);m=a,m=m.concat(s),m=m.concat(r),a=L.slice(0,E+1),r=L.slice(E+1),L=a,L=L.concat(s),L=L.concat(r)}z()}async function ks(e,t){const n=Fe(e);if(t==="later")m=m.concat(n),L=L.concat(n);else if(t==="next"){let o=m.slice(0,E+1),i=m.slice(E+1);m=o,m=m.concat(n),m=m.concat(i),o=L.slice(0,E+1),i=L.slice(E+1),L=o,L=L.concat(n),L=L.concat(i)}z()}function ve(){Js()}function Js(){const e=document.getElementById("audio");document.getElementById("PLAYERsource").src!="http://null.com/null"&&(e.paused?(se("playing"),V="playing",j.emit("playbackStateChange",V),e.play().then(n=>pn()).catch(n=>console.log(n)),navigator.mediaSession.playbackState="playing"):(V="paused",j.emit("playbackStateChange",V),se("paused"),e.pause(),navigator.mediaSession.playbackState="paused"))}navigator.mediaSession.setActionHandler("play",async function(){ve()});navigator.mediaSession.setActionHandler("pause",function(){ve()});function lt(){fn()}function ut(){vn()}function Gs(){document.getElementById("audio").addEventListener("ended",Fs)}function Ys(e){const t=document.getElementById("audio"),o=t.duration*e;t.currentTime=o}function un(){Qs()}function Hs(){const t=document.getElementById("audio").currentTime;return{PLAYBACK_loop_state:w,PLAYBACK_shuffle_state:Q,progress:t}}function mt(){if(Q==="off"){Q="on",j.emit("shuffleStateChange",Q),Nt(Q);const t=E+1;L=[...m],m.slice(0,E);const n=m.slice(t);wo(n);const o=n.length;m.splice(E,o,...n),z()}else{Q="off",j.emit("shuffleStateChange",Q),Nt(Q);const t=[...L],i=document.getElementById("PLAYERsource").src.split("/"),s=i[i.length-3];m=t;for(var e=t.length-1;e>=0;e--)t[e].url===s&&(E=e);z()}}function te(){const e=document.getElementById("audio"),t=document.getElementById("PLAYERsource"),n=document.getElementById("LCDPlaybackStoppedContainer");n.style.visibility="hidden",t.src=`${M}/${m[E].url}/3`,e.load(),V==="playing"?(e.play().then(o=>pn()).catch(o=>console.log(o)),se("playing"),j.emit("playbackStateChange","playing")):(j.emit("playbackStateChange","paused"),se("paused")),gn(),mn()}function $s(e){const t=document.getElementById("audio"),n=document.getElementById("PLAYERsource"),o=document.getElementById("LCDPlaybackStoppedContainer");o.style.visibility="hidden",n.src=`${M}/${m[E].url}/3`,t.load(),t.currentTime=e,se("paused"),j.emit("playbackStateChange","paused"),gn(),mn()}function mn(){const e=document.getElementById("audio"),t=document.documentElement,n=document.getElementById("LCDseekBar");e.addEventListener("timeupdate",()=>{const o=e.duration,i=e.currentTime,s=Math.floor(o)-i,a=`"-${_t(s)}"`,c=`"${_t(Math.floor(i))}"`,d=i/o*100,l=`${d}%`;vs(c,a),t.style.setProperty("--LCD-seekbar-width",l),t.style.setProperty("--LCD-seekbar-indicator-left",l),n.value=d,_n();const g={timeProgressed:c,timeRemaining:a,progressPercent:d,progressPercentFormatted:l};j.emit("progressStateChange",g)})}function gn(){const e=document.getElementById("LCDtitleText"),t=document.getElementById("LCDtitleTextMobile"),n=document.getElementById("LCDbottomText"),o=document.getElementById("LCDimage"),i=document.getElementById("LCDimageMobile");e.innerHTML=m[E].song_name,t.innerHTML=m[E].song_name,n.innerHTML=m[E].project_contributors,dn(),o.src=`${M}/${m[E].img}/3`,i.src=`${M}/${m[E].img}/3`,ie=`${M}/${m[E].img}/5`,Je=m[E].song_name,dt=m[E].project_contributors,z(),j.emit("newTrackStateChange",m[E]),document.title=`${m[E].song_name} by ${m[E].project_contributors} playing on Orange Music`}function pn(){let e=m[E];const t=[{src:`${M}/${e.img}/1`,sizes:"10x10",type:"image/webp"},{src:`${M}/${e.img}/2`,sizes:"40x40",type:"image/webp"},{src:`${M}/${e.img}/3`,sizes:"160x160",type:"image/webp"},{src:`${M}/${e.img}/4`,sizes:"320x320",type:"image/webp"},{src:`${M}/${e.img}/5`,sizes:"640x640",type:"image/webp"},{src:`${M}/${e.img}/6`,sizes:"1080x1080",type:"image/webp"}];navigator.mediaSession.metadata=new MediaMetadata({title:e.song_name,artist:e.project_contributors,album:e.project_name,artwork:t}),_n()}function _n(){const e=document.getElementById("audio"),t=e.duration;try{"setPositionState"in navigator.mediaSession&&typeof t=="number"&&navigator.mediaSession.setPositionState({duration:t,playbackRate:e.playbackRate,position:e.currentTime})}catch{}}function qs(){const e=document.getElementById("LCDPlaybackStoppedContainer"),t=document.getElementById("PLAYERsource");e.style.visibility="visible",se("paused"),m=[],L=[],E=0,t.src="http://null.com/null",document.title="Orange Music"}function Fs(){const e=document.getElementById("audio");document.getElementById("PLAYERsource");const t=m.length;e.pause(),t>E+1&&(w=="off"||w=="on")?(E+=1,te()):w=="song"?te():t==E+1&&w=="on"?(E=0,te()):qs()}function fn(){const e=document.getElementById("audio");document.getElementById("PLAYERsource"),m.length>E+1&&(e.pause(),E+=1,te())}navigator.mediaSession.setActionHandler("nexttrack",function(){fn()});function vn(){const e=document.getElementById("audio");if(document.getElementById("PLAYERsource"),m.length,e.currentTime>2){e.currentTime=0;return}else if(E>0){e.pause(),E-=1,te();return}}navigator.mediaSession.setActionHandler("previoustrack",function(){vn()});function Qs(){w=="off"?(w="on",oe(w),j.emit("loopStateChange",w)):w=="on"?(w="song",oe(w),j.emit("loopStateChange",w)):(w="off",oe(w),j.emit("loopStateChange",w))}function Vs(e){e=="off"?(w="off",oe(w)):e=="on"?(w="on",oe(w)):(e="song",w="on",oe(w))}function zs(){const e=document.getElementById("PLAYERshuffleButton"),t=document.getElementById("PLAYERbackButton"),n=document.getElementById("PLAYERplayButton"),o=document.getElementById("PLAYERnextButton"),i=document.getElementById("PLAYERloopButton");document.getElementById("PLAYERplayIcon"),document.getElementById("PLAYERloopIcon"),e.addEventListener("click",mt),t.addEventListener("click",ut),n.addEventListener("click",ve),o.addEventListener("click",lt),i.addEventListener("click",un)}function Nt(e){const t=document.getElementById("PLAYERshuffleIcon");if(e==="on"){t.style.filter="var(--make-svg-secondary)";return}if(e==="off"){t.style.filter="var(--make-svg-black)";return}}function oe(e){const t=document.getElementById("PLAYERloopIcon");if(e==="off"){t.style.filter="var(--make-svg-black)",t.src=B.icons_loop;return}if(e==="on"){t.style.filter="var(--make-svg-secondary)",t.src=B.icons_loop;return}if(e==="song"){t.style.filter="var(--make-svg-secondary)",t.src=B.icons_loop_song;return}}function se(e){const t=document.getElementById("PLAYERplayIcon");if(e=="playing"){t.src=B.icons_pause;return}if(e=="paused"){t.src=B.icons_play;return}}function Ks(){const e=localStorage.getItem("PLAYBACK_VOLUME");if(e!==null){En(e);const n=document.getElementById("volumeRangeSlider");n.value=e}document.querySelectorAll('input[type="range"]#volumeRangeSlider').forEach(n=>{n.addEventListener("input",Ws)})}function Ws(e){let t=e.target;e.target.type!=="range"&&(t=document.getElementById("volumeRangeSlider"));const n=t.value;En(n)}function En(e){function t(i,s,a){return i>=s&&i<=a}function n(i){const s=["volumeControlZero","volumeControlOne","volumeControlTwo","volumeControlThree"];for(let a=0;a<4;a++){let r=s[a];r!=i&&(document.getElementById(r).style.visibility="hidden")}document.getElementById(i).style.visibility="visible"}localStorage.setItem("PLAYBACK_VOLUME",e);const o=document.getElementById("audio");if(o.volume=e/100,t(e,0,1)){n("volumeControlZero"),o.volume=0;return}if(t(e,2,33)){n("volumeControlOne");return}if(t(e,34,66)){n("volumeControlTwo");return}if(t(e,67,100)){n("volumeControlThree");return}}function Xs(){const e=document.getElementById("topleftClearIcon"),t=document.getElementById("searchBar"),n=Po(ea,150);t.addEventListener("keyup",i=>{n(i,t),t.value&&e.style.visibility!="visible"?e.style.opacity="100%":t.value||(e.style.opacity="0%")}),t.addEventListener("keydown",function(i){if(i.key==="Tab"&&Ge==!0){i.preventDefault(),t.blur(),document.getElementById("SEARCH_responseEnvironment").children[0].focus();const a=document.getElementById("SEARCH_responseEnvironment").lastChild;a.addEventListener("keydown",function(r){r.key==="Tab"&&Ge==!0&&(r.preventDefault(),a.blur(),document.getElementById("PLAYERshuffleButton").focus())})}}),e.addEventListener("click",()=>{t.value="",e.style.opacity="0%",ge()}),t.addEventListener("keydown",function(i){if(i.key==="Enter"||i.keyCode===13){const s=t.value;console.log(s),t.value=""}});const o=document.querySelector(".topleft-searchbarContainerL2");t.addEventListener("focus",()=>{o.style.outline="1px solid var(--text-third)",o.style.backgroundColor="var(--grey)",t.value.length>0&&(e.style.opacity="100%")}),t.addEventListener("blur",()=>{o.style.outline="",o.style.backgroundColor="",e.style.opacity="0%"})}function Zs(e){ge(),Ge=!0;const t=document.getElementById("SEARCH_responseEnvironment");t.style.display="block",t.innerHTML=e.response;for(var n=t.children.length-1;n>=0;n--){const o=t.children[n].dataset;if(o.om2SearchObjectProjectid!=null&&o.om2SearchObjectSongurl!=null){const i=o.om2SearchObjectProjectid,s=o.om2SearchObjectSongurl,a=We();t.children[n].id=a,document.getElementById(a).addEventListener("click",()=>{G(`/projects/${i}/${s}`),ge()})}else if(o.om2SearchObjectProjectid!=null){const i=o.om2SearchObjectProjectid,s=We();t.children[n].id=s,document.getElementById(s).addEventListener("click",()=>{G(`/projects/${i}`),ge()})}}}async function ea(e,t){if(t.value==""){ge();return}const n=await Ai(t.value);Zs(n)}let Ge=!1;function ge(){const e=document.getElementById("SEARCH_responseEnvironment");e.style.display="none",e.innerHTML="",Ge=!1}const ta=`<div class="MUSICENJOYMODE-container">
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
</div>`;let ee=!1,gt,st;function na(){const e=document.getElementById("musicEnjoyEnvironment");e.innerHTML=ne(ta),document.getElementById("MUSICENJOYMODEexitButton").addEventListener("click",ia),document.getElementById("MusicEnjoyOpenButton").addEventListener("click",Ut),U()&&document.getElementById("LCDbody").addEventListener("click",Ut),j.on("playbackStateChange",c=>{ee!=!1&&hn()}),j.on("progressStateChange",c=>{ee!=!1}),j.on("newTrackStateChange",c=>{ee!=!1&&yn()}),j.on("loopStateChange",c=>{ee!=!1&&bn()}),j.on("shuffleStateChange",c=>{ee!=!1&&Tn()});const o=document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle"),i=document.getElementById("MUSICENJOYMODEplaybackControlsButton_back"),s=document.getElementById("MUSICENJOYMODEplaybackControlsButton_play"),a=document.getElementById("MUSICENJOYMODEplaybackControlsButton_next"),r=document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop");o.addEventListener("click",mt),i.addEventListener("click",ut),s.addEventListener("click",ve),a.addEventListener("click",lt),r.addEventListener("click",un)}function yn(){const e=document.getElementById("MUSICENJOYMODEcoverImage1"),t=document.getElementById("MUSICENJOYMODEcoverImage2"),n=document.getElementById("MUSICENJOYMODEsongTitle1"),o=document.getElementById("MUSICENJOYMODEsongTitle2"),i=document.getElementById("MUSICENJOYMODEsongArtist");e.src=ie,t.src=ie,n.innerText=Je,o.innerText=Je,i.innerText=dt,bn(),Tn(),oa()}function hn(){const e=document.getElementById("MUSICENJOYMODEplaybackControlButton_play_icon");if(V=="playing"){e.src=B.icons_pause;return}if(V=="paused"){e.src=B.icons_play;return}}function bn(){const e=document.getElementById("MUSICENJOYMODEplaybackControlsButton_loop_icon");if(w==="off"){e.style.filter="var(--make-svg-white)",e.src=B.icons_loop;return}if(w==="on"){e.style.filter="var(--make-svg-grey-3)",e.src=B.icons_loop;return}if(w==="song"){e.style.filter="var(--make-svg-grey-3)",e.src=B.icons_loop_song;return}}function Tn(){const e=document.getElementById("MUSICENJOYMODEplaybackControlsButton_shuffle_icon");if(Q==="on"){e.style.filter="var(--make-svg-grey-3)";return}if(Q==="off"){e.style.filter="var(--make-svg-white)";return}}async function Ut(){ee=!0;const e=document.getElementById("musicEnjoyEnvironment");e.style.display="block",yn(),hn(),await In(),st=document.getElementById("MUSICENJOYMODEbackground"),Qt(st,gt)}async function In(){gt=await $t(ie)}async function oa(){await In(),Ko(st,gt)}function ia(){const e=document.getElementById("musicEnjoyEnvironment");e.style.display="none",zo(),ee=!1}const R="/apis",M="/media";async function Cn(){Gs(),bs(),Ts(),ms(),zs(),Xs(),Ks(),oi(),ws(),Mi(),Zo(),na()}window.hasCodeRun||(wi(),window.hasCodeRun=!0);
