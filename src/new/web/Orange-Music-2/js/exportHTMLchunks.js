import mainContent from '../html/mainContent.html?raw';
import navBar from '../html/navbar.html?raw';
import { svgImports } from './importAssets.js';

export function loadMAINnav() {
    let replacedContent = navBar;
    for (const [placeholder, value] of Object.entries(svgImports)) {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        replacedContent = replacedContent.replace(regex, value);
    }

    document.getElementById('MAINnav').innerHTML = replacedContent;

}

//document.getElementById('MAINtopMusicPlayer').innerHTML = 'main';

//document.getElementById('main').innerHTML = 'main';

//document.getElementById('MAINmobileContainer').innerHTML = 'main';