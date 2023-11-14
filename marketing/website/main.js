import './style.css'
import { svgImports } from './js/importAssets.js';
import content from './html/content.html?raw';
import { scrollMaster } from './js/scroll.js';

let IDofElement = "app";
let replacedContent = content;
for (const [placeholder, value] of Object.entries(svgImports)) {
    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
    replacedContent = replacedContent.replace(regex, value);
}
document.getElementById(IDofElement).innerHTML += replacedContent;

scrollMaster();