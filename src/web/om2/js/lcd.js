import { MENUdisplay, menuHide_foreign } from './menu.js';
import { PLAYBACK_songs_array } from './playback.js';
import { handleRoute } from './routing.js';
import { is_mobile } from './om2.js';



export function initialiseLCD() {
    loadLCDbody();
    resizeTitleText();

    const menuButton = document.getElementById("LCDmenuButton");
    menuButton.addEventListener('click', function(event) {
        // Action to be performed when the specific div is clicked
        handleQueueDisplayMenu(event);

    });

    setEventListenersForPlaybackSeek();
}

function open_mobile_lcd_body(event) {
    event.stopPropagation();
    const params = {}

    MENUdisplay(params, event, "lcd_mobile_body");
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

    const listOfThings = ['LCD_titleText_placeholder', 'LCD_bottomText_placeholder'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'LCD_titleText_placeholder') {
            value = "";
        } else if (placeholder === 'LCD_bottomText_placeholder') {
            value = "";
        }


        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return
}


export function resizeTitleText() {
    let elementWidth;
    const LCDtitleText = document.getElementById("LCDtitleText");
    const LCDcontentContainer = document.getElementById("LCDrightcontent");
    const widthFactor = 1.4;

    function handleResize() {
        let newWidth;
        let textWidth;
        let WidthPlusFactor;
        elementWidth = LCDcontentContainer.clientWidth;
        textWidth = getWidthOfText();


        WidthPlusFactor = elementWidth / widthFactor;


        if (WidthPlusFactor > textWidth) {
            newWidth = textWidth + 10;
            //newWidth = (newWidth / 1.17);
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



async function handleQueueDisplayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    const songId = clickedItem.dataset.songId;

    const params = [{
        displayText: 'Go to song',
        optionalSVG: 'None',
        function: 'True',
        condition: "goto",
        optionalParams: {
            songId: songId
        }

    }]

    const result = await MENUdisplay(params, event, "return_promise");

    // when condition = goto
    if (result.condition == "goto") {
        const songId = result.optionalParams.songId;
        let projectID;

        for (var i = PLAYBACK_songs_array.length - 1; i >= 0; i--) {
            const url = PLAYBACK_songs_array[i].url;
            if (url == songId) {
                projectID = PLAYBACK_songs_array[i].project_id;
                break
            }

        }

        if (projectID != null) {
            handleRoute(`/projects/${projectID}/${songId}`);
        }
    }
    menuHide_foreign();

    return;
}


/* seek bar codes */

function setEventListenersForPlaybackSeek() {
    const rangeInputs = document.querySelectorAll('input[type="range"]#LCDseekBar')

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange)
    })
    return
}

import { PLAYBACK_handle_input_change_song_progress } from './playback.js';

function handleInputChange(e) {
    function between(x, min, max) {
        return x >= min && x <= max;
    }

    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('LCDseekBar')
    }
    const progress = target.value / 100;
    const progressFormatted = target.value + "%"

    const root = document.documentElement;
    root.style.setProperty('--LCD-seekbar-width', progressFormatted);

    PLAYBACK_handle_input_change_song_progress(progress);

    return
}

/* changing the values of the time indicators -------- */
export function updateTimeIndicatorsGlobal(left, right) {
    const root = document.documentElement;

    root.style.setProperty('--LCD-afterContent-bottom-left', left);
    root.style.setProperty('--LCD-afterContent-bottom-right', right);
}