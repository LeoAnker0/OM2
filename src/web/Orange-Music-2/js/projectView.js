export function initProjectView() {
    loadContainer();

    const description = "cheese";
    sessionStorage.setItem('description', description);

    onResizeClipOverflowingText();

    descriptionButtonInteractions();

    handleDescriptionMoreText();
    detectOffClicks();
    detectPlayAndShuffleButtons();
    loadInTable();
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
        displayMenuForTop(event)
    });
}

import { MENUdisplay } from './menu.js';

function displayMenuForTop(event) {
    event.stopPropagation();
    const clickedItem = event.target;

    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_yourUploadedSongs'
    }, {
        displayText: 'Play later',
        optionalSVG: 'None'
    }, {
        displayText: 'Delete',
        optionalSVG: 'None'
    }]

    MENUdisplay(params, event);
    return;
}

import projectViewRowTitles from '../html/projectViewRowTitles.html?raw';
import projectViewRowItem from '../html/projectViewRowItem.html?raw';

/* load in the table */
function loadInTable() {
    const tableEnvironment = document.getElementById("PROJECTview_projectAreaContainer");

    const songData = [{
            "img": "https://picsum.photos/30?random=1",
            "songTitle": "Subwoofer Lullaby",
            "artistName": "C418",
            "projectName": "Minecraft - Volume Alpha",
            "songDuration": "3:29"
        }, {
            "img": "https://picsum.photos/30?random=5",
            "songTitle": "Summer Breeze",
            "artistName": "Jazz Trio",
            "projectName": "Smooth Jazz Vibes",
            "songDuration": "5:12"
        },
        {
            "img": "https://picsum.photos/30?random=6",
            "songTitle": "Rainy Days",
            "artistName": "Acoustic Band",
            "projectName": "Cozy Acoustics",
            "songDuration": "3:58"
        },
        {
            "img": "https://picsum.photos/30?random=7",
            "songTitle": "Sunny Side",
            "artistName": "Sunshine Singers",
            "projectName": "Happy Tunes",
            "songDuration": "2:30"
        },
        {
            "img": "https://picsum.photos/30?random=8",
            "songTitle": "Moonlight Serenade",
            "artistName": "Orchestra Ensemble",
            "projectName": "Nighttime Classics",
            "songDuration": "4:40"
        },
        {
            "img": "https://picsum.photos/30?random=9",
            "songTitle": "City Lights",
            "artistName": "Urban Groove",
            "projectName": "Metropolitan Beats",
            "songDuration": "3:20"
        },
        {
            "img": "https://picsum.photos/30?random=10",
            "songTitle": "Morning Dew",
            "artistName": "Nature Soundscape",
            "projectName": "Relaxing Moments",
            "songDuration": "6:15"
        }, {
            "img": "https://picsum.photos/30?random=11",
            "songTitle": "A New Beginning",
            "artistName": "Harmony Ensemble",
            "projectName": "Fresh Horizons",
            "songDuration": "4:15"
        },
        {
            "img": "https://picsum.photos/30?random=12",
            "songTitle": "Dancing in the Rain",
            "artistName": "Melody Maker",
            "projectName": "Rhythmic Raindrops",
            "songDuration": "3:30"
        },
        {
            "img": "https://picsum.photos/30?random=13",
            "songTitle": "Twilight Dreams",
            "artistName": "Ethereal Echoes",
            "projectName": "Dreamscapes",
            "songDuration": "5:50"
        },
        {
            "img": "https://picsum.photos/30?random=14",
            "songTitle": "Whispers of the Wind",
            "artistName": "Nature's Orchestra",
            "projectName": "Natural Harmonies",
            "songDuration": "3:45"
        },
        {
            "img": "https://picsum.photos/30?random=15",
            "songTitle": "Urban Sunset",
            "artistName": "City Lights Collective",
            "projectName": "Urban Vibes",
            "songDuration": "4:05"
        },
        {
            "img": "https://picsum.photos/30?random=16",
            "songTitle": "Enchanted Forest",
            "artistName": "Mystic Melodies",
            "projectName": "Enchanted Realms",
            "songDuration": "6:25"
        },
        {
            "img": "https://picsum.photos/30?random=17",
            "songTitle": "Eternal Hope",
            "artistName": "Hopeful Harmonies",
            "projectName": "Inspirational Journeys",
            "songDuration": "4:40"
        },
        {
            "img": "https://picsum.photos/30?random=18",
            "songTitle": "Sunrise Serenade",
            "artistName": "Morning Melodies",
            "projectName": "Daybreak Melodies",
            "songDuration": "5:15"
        },
        {
            "img": "https://picsum.photos/30?random=19",
            "songTitle": "Ocean's Embrace",
            "artistName": "Waves of Harmony",
            "projectName": "Seaside Melodies",
            "songDuration": "3:20"
        },
        {
            "img": "https://picsum.photos/30?random=20",
            "songTitle": "Starry Night",
            "artistName": "Celestial Sounds",
            "projectName": "Night Sky Symphony",
            "songDuration": "4:50"
        }
    ]


    loadInProjectViewRowTitles();

    for (let i = 0; i < songData.length; i++) {
        const song = songData[i];
        loadInProjectViewRowItems(song);
    }

}

function loadInProjectViewRowTitles() {
    let IDofElement = "PROJECTview_projectAreaContainer";
    let replacedContent = projectViewRowTitles;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;
}

function loadInProjectViewRowItems(songData) {
    let IDofElement = "PROJECTview-projectTable";
    let replacedContent = projectViewRowItem;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    const listOfThings = ['PROJECTviewRow_img', 'PROJECTviewRow_songTitle', 'PROJECTviewRow_artistName', 'PROJECTviewRow_projectName', 'PROJECTviewRow_songDuration'];

    for (let i = 0; i < listOfThings.length; i++) {
        const placeholder = listOfThings[i].toString();
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        let value = '';

        if (placeholder === 'PROJECTviewRow_img') {
            value = songData.img
        } else if (placeholder === 'PROJECTviewRow_songTitle') {
            value = songData.artistName;
        } else if (placeholder === 'PROJECTviewRow_artistName') {
            value = songData.songTitle;
        } else if (placeholder === 'PROJECTviewRow_projectName') {
            value = songData.projectName;
        } else if (placeholder === 'PROJECTviewRow_songDuration') {
            value = songData.songDuration;
        }
        replacedContent = replacedContent.replace(regex, value);
    }
    document.getElementById(IDofElement).innerHTML += replacedContent;
    return;

}


































/**/