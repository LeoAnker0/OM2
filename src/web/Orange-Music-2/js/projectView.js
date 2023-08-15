export function initProjectView() {
    loadContainer();

    const description = `In this example, the .content-container holds the fading content, and the .fade-text element inside it has a mask that uses a linear gradient to control the opacity. The gradient is set up so that the content's opacity gradually changes from left to right.
                    You can adjust the gradient stops, colors, and sizes to achieve the exact fading effect you're looking for. Keep in mind that browser compatibility for CSS masks might vary, so it's a good idea to test this approach across different browsers.`;
    onResizeClipOverflowingText(description);
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

    document.getElementById(IDofElement).innerHTML = replacedContent;
    return;

}

/* the next two functions are used for getting those last characters of the whole thing to fade out */
function onResizeClipOverflowingText(description) {
    function throttledResize() {
        let resizeTimer;

        return function() {
            cancelAnimationFrame(resizeTimer);
            resizeTimer = requestAnimationFrame(function() {
                clipOverflowingDescription(description);
            });
        };
    }

    const throttledHandleResize = throttledResize();
    window.addEventListener('resize', throttledHandleResize);

    clipOverflowingDescription(description);
}


function clipOverflowingDescription(description) {
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