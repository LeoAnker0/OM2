# Using Menus

Menu.js makes it easy to create menus for all the parts of om2 that need a menu. This documentation will give snippets that make it easy to use.

### Table of Contents
* Getting Started
* Functionality
* Examples


### Getting Started
To be able to use menus you need to import it:

```js
import { MENUdisplay } from './menu.js';
```

And then to display a basic menu you need to create a function, hopefully with a useful name like displayMenu() which triggers MENUdisplay with the right parametres. You also need an event with position (*for example a click event*), however this is also something that in the future should be negatable with a specific position instead.

```js
function displayMenu(event) {
    event.stopPropagation();
    
    const params = [{
        displayText: 'Button',
        optionalSVG: 'None',
        function: 'TEST'
    }]

    MENUdisplay(params, event);
    return;
}
``` 

With this function we create a menu with a button, which has the text "Button", and it's linked to the function TEST, which is a function inside menu.js, which will log to the console that the button worked. If you got that log, then your button worked, congratulations.


### Functionality
There are 6 different things that you can specify for a param:
* displayText
* optionalSVG
* function
* optionalParams
* colour

#### Display Text:
DisplayText is just the name of the button inside the menu. Try and use as short a name for the button as possible, a theasaurus or LLM comes in handy with this. But otherwise it can any valid string. 

```js
    displayText: 'Play next',
```

#### optionalSVG:
This allows you to specify an SVG that you would like to associate the text with, it can be any of the SVGs that are specified in importAssets.js. Can either be a string of 'None' if you don't want a picture with that text, or with the name of the svg from importAssets.js

```js
    optionalSVG: 'icons_playNext',
```
```js
    optionalSVG: 'None',
```

####  function:
This is a neccessary param, since if the button isn't linked to a function to do something, why do you have the button? Anyway you specify as a string the name of the function that you will then also have to also specify in menu.js so that it can go and call a function from where you initially called the menu from.

```js
    function: 'MENU_ACTION_log_duck_to_console',
```

However This is not nearly enough to get that function working, we need to specify the function that we want to get run in the origin file

```js
export function ORIGIN_FILE_recieve_MENU_log_duck() {
    console.log("duck");
}
```

And then inside menu.js we need to find this section (at the very bottom). And inside MENY_ACTION_FUNCTIONS, we want to create a new item with the name of the function that we specified above, and then inside it the name of the function that we want to run from our originFile.

```js
/* MENU functions */
import { ORIGIN_FILE_recieve_MENU_log_duck } from './originFile.js';


const MENU_ACTION_FUNCTIONS = {
    MENU_ACTION_log_duck_to_console() {
        ORIGIN_FILE_recieve_MENU_log_duck();
        return;
    }
};
````

And then when the button has been pressed, it should hopefully log duck to the console.


###### *The whole requirement of needing to specify the name of the function, import the function that will act as a sort of callback, and write out how to capture the function inside menu.js is a lot/confusing, so for for this reason it is on the agenda to update this at some point so that the only thing you have do is specify the function you want it to go from the origin file, but for the moment it will have to be done in this way.*



To get a menu going, you'll need a function which is able to get the position of the mouse click, as well as creating the params array of objects, that will then be passed through to the code that will actually load in the menu.

```js
import { MENUdisplay } from './menu.js';

function displayMenu(event) {
    event.stopPropagation();
    const clickedItem = event.target;
    
    const value1 = clickedItem.getAttribute('data-1');
    const value2 = clickedItem.getAttribute('data-2');
    const value3 = clickedItem.getAttribute('data-3');

    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_playNext',
        function: 'MENU_ACTION_playNext',
        optionalParams: {
            VALUE: value1,
            OTHER_VALUE: value2
        },
        colour: "red"
    }, {
        displayText: 'Play later',
        optionalSVG: 'None',
        function: 'MENU_ACTION_playLater',
        optionalParams: {
            VALUE: value3
        }
    }]

    MENUdisplay(params, event);
    return;
}
```

#### Values Breakdown


* *import {...} from '...': required to be able to then call this function again*

*  *displayMenu: the name of the function that will start the menus, can be called anything, and is a local thing that then calls the external function*


colour has been added as an extension to the menu system allowing the user to select a colour to give extra focus to a certain element of the menu, like delete and such. You can also leave that parameter blank, and it will just have the standard colour instead.









