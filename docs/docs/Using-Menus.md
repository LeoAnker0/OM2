# Using Menus

Menu's are created by first: initialising some params, which contain all the data needed to hydrate the menu; next the menu system loads in the menu, and adds event listeners to all of the buttons, and then when those buttons are clicked, they go through and trigger functions that need to be defined by the user as well, which just call back to a function from the file in which that menu was originally called.

<hr>

To get a menu going, you'll need a function which is able to get the position of the mouse click, as well as creating the params array of objects, that will then be passed through to the code that will actually load in the menu.

```
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
            OTHER-VALUE: value2
        }
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









