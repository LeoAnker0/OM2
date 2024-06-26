// visualiser.js

import { HandleCreateNotification } from './notificationDisplayManager.js';
import { generateUniqueID } from './om2.js';

let gl, program, vertexShader, fragmentShader, positionBuffer, requestID;
const resources = { program, vertexShader, fragmentShader, positionBuffer };

export function attachVisualiserToRoot(root, colours) {

    root.innerHTML = "";

    // add canvas to root
    const canvasID = generateUniqueID();
    const canvasItem = document.createElement('canvas');
    canvasItem.id = canvasID;
    root.appendChild(canvasItem);

    const canvas = document.getElementById(canvasID);
    gl = canvas.getContext("webgl");

    if (!gl) {
        console.error('WebGL not supported');
        HandleCreateNotification("WebGL not supported", "error")
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const vertexShaderSource = `
attribute vec4 a_position;
void main() {
    gl_Position = a_position;
}
`;

    /*
        Dithering function found from https://blog.frost.kiwi/GLSL-noise-and-radial-gradient/

        Originally sourced from Jorge Jimenez's
            http://www.iryoku.com/next-generation-post-processing-in-call-of-duty-advanced-warfare

    */

    const fragmentShaderSource = `
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
`;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error linking program:', gl.getProgramInfoLog(program));
    }

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    window.addEventListener('resize', () => resizeCanvasToDisplaySize(canvas));
    resizeCanvasToDisplaySize(canvas);

    const colorLocations = [];
    for (let i = 0; i < 5; i++) {
        colorLocations.push(gl.getUniformLocation(program, `u_colors[${i}]`));
    }

    function render(time) {
        time *= 0.001;

        resizeCanvasToDisplaySize(canvas);

        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);

        const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

        const timeLocation = gl.getUniformLocation(program, 'u_time');
        gl.uniform1f(timeLocation, time);

        for (let i = 0; i < 5; i++) {
            const color = hexToRgb(colours[i]);
            gl.uniform3fv(colorLocations[i], color);
        }

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestID = requestAnimationFrame(render);
    }

    requestID = requestAnimationFrame(render);

    function resizeCanvasToDisplaySize() {
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        }
    }

    // Save resources for cleanup
    resources.program = program;
    resources.vertexShader = vertexShader;
    resources.fragmentShader = fragmentShader;
    resources.positionBuffer = positionBuffer;
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r / 255, g / 255, b / 255];
}

function cleanupWebGL(gl, resources) {
    if (!gl) return;

    // Detach shaders from program
    if (resources.program && resources.vertexShader && resources.fragmentShader) {
        gl.detachShader(resources.program, resources.vertexShader);
        gl.detachShader(resources.program, resources.fragmentShader);
    }

    // Delete shaders
    if (resources.vertexShader) gl.deleteShader(resources.vertexShader);
    if (resources.fragmentShader) gl.deleteShader(resources.fragmentShader);

    // Delete program
    if (resources.program) gl.deleteProgram(resources.program);

    // Delete buffers
    if (resources.positionBuffer) gl.deleteBuffer(resources.positionBuffer);

    // Lose context
    const loseContext = gl.getExtension('WEBGL_lose_context');
    if (loseContext) loseContext.loseContext();
}

export function detachVisualiserFromRoot() {
    if (requestID) {
        cancelAnimationFrame(requestID);
        requestID = null;
    }
    cleanupWebGL(gl, resources);
}