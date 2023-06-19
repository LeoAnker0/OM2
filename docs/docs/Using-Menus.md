# Using Menus

The menus in this system are created by passing in params, and the event. Event is used to get the location of the click, since this is used to get the position of the click, which in turn helps position the menu properly. Params is the way that the system knows what should be 


### Calling the function that will Create the menu

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









