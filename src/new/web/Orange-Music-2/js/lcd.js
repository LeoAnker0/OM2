export function initialiseLCD() {
    loadLCDbody();
    resizeTitleText();
}

import LCDbody from '../html/LCDbody.html?raw';
import { svgImports } from './importAssets.js';

function loadLCDbody() {
    let IDofElement = "LCDbody";
    let replacedContent = LCDbody;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return
}

function resizeTitleText() {
    let elementWidth;
    const LCDtitleText = document.getElementById("LCDtitleText");
    const LCDcontentContainer = document.getElementById("LCDrightcontent");
    const widthFactor = 1.3;

    function handleResize() {
        elementWidth = LCDcontentContainer.clientWidth;
        console.log('Element width:', elementWidth);
        LCDtitleText.style.width = (elementWidth / widthFactor) + "px";
    }

    function throttledResize() {
        let resizeTimer;

        return function() {
            cancelAnimationFrame(resizeTimer);
            resizeTimer = requestAnimationFrame(handleResize);
        };
    }

    const throttledHandleResize = throttledResize();
    window.addEventListener('resize', throttledHandleResize);

    // Call the handleResize function once on initial load
    handleResize();
}