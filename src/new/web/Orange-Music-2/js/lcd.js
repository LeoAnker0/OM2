export function initialiseLCD() {
    loadLCDbody();
    resizeTitleText();

    const menuButton = document.getElementById("LCDmenuButton");
    menuButton.addEventListener('click', function(event) {
        // Action to be performed when the specific div is clicked
        handleQueueDisplayMenu(event);

    });
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
    const widthFactor = 1.5;

    function handleResize() {
        let newWidth;
        let textWidth;
        let WidthPlusFactor;
        elementWidth = LCDcontentContainer.clientWidth;
        textWidth = getWidthOfText();

        WidthPlusFactor = elementWidth / widthFactor;

        if (WidthPlusFactor > textWidth) {
            newWidth = textWidth;
            newWidth = (newWidth / 1.17) + 10;
        } else {
            newWidth = WidthPlusFactor;
        }

        LCDtitleText.style.width = (newWidth) + "px";
    }

    function getWidthOfText() {
        // Get the element by its ID
        const titleText = document.getElementById('LCDtitleText');

        // Create a temporary span element to measure the width of the text
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden'; // Make the element invisible
        tempSpan.style.whiteSpace = 'nowrap'; // Prevent text wrapping

        // Set the text content of the temporary span to the same as the target element
        tempSpan.textContent = titleText.textContent;

        // Append the temporary span to the document body
        document.body.appendChild(tempSpan);

        // Get the width of the text
        const textWidth = tempSpan.offsetWidth;

        // Remove the temporary span from the document body
        document.body.removeChild(tempSpan);
        return textWidth;
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


import { MENUdisplay } from './menu.js';

function handleQueueDisplayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    //const songId = clickedItem.getAttribute('data-song-set');
    const songId = "cheese";

    const params = [{
        displayText: 'Menu 1',
        optionalSVG: 'icons_helpIcon',
        function: 'None',
        optionalParams: {
            queueID: songId
        }

    }, {
        displayText: 'Bentulou',
        optionalSVG: 'icons_derpy',
        function: 'None',
    }]

    MENUdisplay(params, event);
    return;
}








/**/