export function initProjectView() {
    loadContainer();

    clipOverflowingDescription();
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

    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;

}

//change to counting characters instead of words, and then i can just choose the characters that i want...

function clipOverflowingDescription() {
    const descriptionContainer = document.getElementById("PROJECTviewDescriptionP");

    const container = descriptionContainer;
    const textContent = container.textContent;

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