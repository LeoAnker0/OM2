export function initProjectView() {
    loadContainer();

    const description = "cheese";
    sessionStorage.setItem('description', description);

    onResizeClipOverflowingText();

    descriptionButtonInteractions();

    handleDescriptionMoreText();
    detectOffClicks();
    detectPlayAndShuffleButtons();
}

import projectContainer from '../html/projectViewContainer.html?raw';
import { svgImports } from './importAssets.js';

function loadContainer() {
    let IDofElement = "MAINcontentPages";
    let replacedContent = projectContainer;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    const listOfThings = ['PROJECTviewMOREtitle', 'PROJECTviewMOREartist', 'PROJECTviewMOREyear'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'PROJECTviewMOREtitle') {
            value = "UNHEALTHY (Deluxe)"
        } else if (placeholder === 'PROJECTviewMOREartist') {
            value = "Anne-Marie";
        } else if (placeholder === 'PROJECTviewMOREyear') {
            value = "2023";
        } else if (placeholder === 'MOG_checkedDate') {
            value = "checkedIndicator";
        } else if (placeholder === 'MOGI_placeholder_itemID') {
            value = "temporaryIidentifier";
        }

        replacedContent = replacedContent.replace(regex, value);
    }


    document.getElementById(IDofElement).innerHTML = replacedContent;
    return;
}

/* the next two functions are used for getting those last characters of the whole thing to fade out */
function onResizeClipOverflowingText() {
    function throttledResize() {
        let resizeTimer;

        return function() {
            cancelAnimationFrame(resizeTimer);
            resizeTimer = requestAnimationFrame(function() {
                clipOverflowingDescription();

            });
        };
    }

    const throttledHandleResize = throttledResize();
    window.addEventListener('resize', throttledHandleResize);
    clipOverflowingDescription();
}


function clipOverflowingDescription() {
    let description = sessionStorage.getItem('description');


    const spaces = ' '.repeat(120);
    description = description + spaces


    const descriptionContainer = document.getElementById("PROJECTviewDescriptionP");

    const container = descriptionContainer;
    const textContent = description;

    // Split the text content into an array of words
    const words = textContent.split(' ');

    const lastVisibleCharacters = [];
    container.textContent = ''; // Clear the original text content

    for (const word of words) {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        container.appendChild(span);

        const spanRect = span.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (
            spanRect.bottom <= containerRect.bottom &&
            spanRect.top >= containerRect.top &&
            spanRect.left >= containerRect.left &&
            spanRect.right <= containerRect.right
        ) {
            lastVisibleCharacters.unshift(word); // Store words in reverse order
        } else {
            break;
        }
    }

    const visibleWords = lastVisibleCharacters.reverse();
    const visibleWordsString = visibleWords.join(' ');
    const lastTenCharaters = visibleWordsString.slice(-10);
    const withoutLastTenCharacters = visibleWordsString.slice(0, -10);
    const lastTenCharactersArr = lastTenCharaters.split('');

    let newTextContent = withoutLastTenCharacters;

    for (let i = 0; i < lastTenCharactersArr.length; i++) {
        const char = lastTenCharactersArr[i];
        const spanWithCharacter = `<span class="PROJECTopacity${9 - i}">${char}</span>`;
        newTextContent = newTextContent + spanWithCharacter;
    }

    container.innerHTML = newTextContent;
}

/* more description button */
function descriptionButtonInteractions() {
    const moreButton = document.getElementById('PROJECTviewDescriptionMoreButton');
    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");

    moreButton.addEventListener('click', function() {
        background.style.display = "grid";
        // Perform any actions you want when the button is pressed
    });
}

function updateDescription() {
    const description = sessionStorage.getItem('description');
    const descriptionp = document.getElementById("PROJECTviewDescriptionP");
    descriptionp.innerText = description;
}

function handleDescriptionMoreText() {
    const description = sessionStorage.getItem('description');

    const editorContainer = document.getElementById("PROJECTviewMOREdescriptionC");
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    editor.innerText = description;
}

function detectOffClicks() {
    const xButton = document.getElementById("PROJECTviewMOREcloseButton");
    xButton.addEventListener('click', function() {
        closeMoreDescription();
    });

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.addEventListener('click', function(event) {
        if (event.target === background) {
            closeMoreDescription()
        }
    });
}

function closeMoreDescription() {
    const editor = document.getElementById("PROJECTviewMOREdescriptionP");

    const newDescription = editor.value;
    sessionStorage.setItem('description', newDescription);

    const background = document.getElementById("PROJECTviewMOREdescriptionboxEnvironment");
    background.style.display = "none";
    updateDescription();
    clipOverflowingDescription();
}

/* project view top buttons */
function detectPlayAndShuffleButtons() {
    const playButton = document.getElementById("PROJECTviewDescriptionTopPlayButton");
    const shuffleButton = document.getElementById("PROJECTviewDescriptionTopShuffleButton");
    const menuButton = document.getElementById("PROJECTviewDisplayMenuButton");

    playButton.addEventListener("click", function() {
        console.log("playButton pressed")
    });
    shuffleButton.addEventListener("click", function() {
        console.log("shuffleButton pressed")
    });
    menuButton.addEventListener("click", function() {
        console.log("menuButton pressed")
    });
}




































/**/