# Using Menus

`menu.js` makes it easy to create menus for all the parts of om2 that need a menu. This documentation will give snippets that make it easy to use, and try to explain how to use it.

### Table of Contents
* Getting Started
* Functionality
* Examples
* menuHide_foreign


### Getting Started
To be able to use menus you need to import it:

```js
import { MENUdisplay } from './menu.js';
```

And then to display a basic menu you need to create a function, hopefully with a useful name like `displayMenu()` which triggers `MENUdisplay` with the right parametres. You also need an event with position (*for example a click event*), however this is also something that in the future should be negatable with a specific position instead.

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

With this function we create a menu with a button, which has the text `Button`, and it's linked to the function `TEST`, which is a function inside `menu.js`, which will log to the console that the button worked. If you got that log, then your button worked, congratulations.


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
<br><br>
#### optionalSVG:
This allows you to specify an SVG that you would like to associate the text with, it can be any of the SVGs that are specified in `importAssets.js`. Can either be a string of `None` if you don't want a picture with that text, or with the name of the svg from `importAssets.js`

```js
    optionalSVG: 'icons_playNext',
```
```js
    optionalSVG: 'None',
```
<br><br>
####  function:
This is a neccessary param, since if the button isn't linked to a function to do something, why do you have the button? Anyway you specify as a string the name of the function that you will then also have to also specify in `menu.js` so that it can go and call a function from where you initially called the menu from.

```js
    function: 'MENU_ACTION_log_duck_to_console',
```

However This is not nearly enough to get that function working, we need to specify the function that we want to get run in the origin file

```js
export function ORIGIN_FILE_recieve_MENU_log_duck() {
    console.log("duck");
}
```

And then inside `menu.js` we need to find this section (at the very bottom). And inside `MENU_ACTION_FUNCTIONS`, we want to create a new item with the name of the function that we specified above, and then inside it the name of the function that we want to run from our `originFile`.

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

And then when the button has been pressed, it should hopefully log `duck` to the console.


###### *The whole requirement of needing to specify the name of the function, import the function that will act as a sort of callback, and write out how to capture the function inside menu.js is a lot/confusing, so for for this reason it is on the agenda to update this at some point so that the only thing you have do is specify the function you want it to go from the origin file, but for the moment it will have to be done in this way.*

<br><br>

####  optionalParams:
Optional params are passed into the function so that it can use that data to do something. However, since this data needs to be passed into a function to be of any use, i'll also detail how to do that here.

```js
    optionalParams: {
        VALUE: value1,
        OTHER_VALUE: value2
    },
```

One example is when I wanted to create a button for deleting a users project.

```js
    function: 'PROJECT_VIEW_delete_project',
    optionalParams: {
        PROJECT_ID: project_id
    },
```

Then in `menu.js` I modifed `MENU_ACTIONS_FUNCTIONS` as following:

```js
import { PROJECT_VIEW_receive_MENU_delete_request } from './projectView.js';

/* MENU functions */
const MENU_ACTION_FUNCTIONS = {
    PROJECT_VIEW_delete_project(params) {
        PROJECT_VIEW_receive_MENU_delete_request(params);
        return;
    }
};
```

And here we just need to remember to pass in params.
And then in `projectView.js` we just have to remember to accept these params:

```js
export function PROJECT_VIEW_receive_MENU_delete_request(project_id) {
    if (window.confirm("Are you sure you want to delete this project?")) {
        console.log("delete project id:", project_id)
        deleteProjectFromServer(project_id);

        menuHide_foreign();
        const newRoute = "/";
        handleRoute(newRoute);
    } else {
        menuHide_foreign();

    }
}
```

And of course it should be noted that it is also possible to pass in several params, as needed.

<br><br>
#### colour
The colour param is handy since it allows us to specify a colour for an item in the menu, which is other than the default colour. 

```js
    colour: "red"
```

It will be set in the same manner as a css colour attribute, so you could also use something like `hsl(0, 100%, 80%)`, or a variable `var(--teal-3)`.

<br><br>

### Examples
This here is a real life example of how it would be used.

##### Calling the menu system from projectView.js
```js
import { MENUdisplay, menuHide_foreign } from './menu.js';


function displayMenuForTop(event, project_details) {
    event.stopPropagation();
    const clickedItem = event.target;

    const currentPath = window.location.pathname;
    const project_id = currentPath.replace(/^\/projects\//, ''); // Replace "/projects/" with an empty string


    const params = [{
        displayText: 'Play next',
        optionalSVG: 'icons_yourUploadedSongs',
        function: 'PROJECT_VIEW_play_next'

    }, {
        displayText: 'Play later',
        optionalSVG: 'None',
        function: 'PROJECT_VIEW_play_later'
    }, {
        displayText: 'Delete',
        optionalSVG: 'None',
        function: 'PROJECT_VIEW_delete_project',
        optionalParams: {
            PROJECT_ID: project_id
        },
        colour: "hsl(180, 100%, 80%)"
    }]

    MENUdisplay(params, event);
    return;
}
```

##### Capturing the functions we specified
```js
import { PROJECT_VIEW_receive_MENU_delete_request } from './projectView.js';

/* MENU functions */
const MENU_ACTION_FUNCTIONS = {
    PROJECT_VIEW_play_next() {
        console.log("menu action play next");
        return;
    },
    PROJECT_VIEW_play_later() {
        console.log("menu action play later");
        return;
    },
    PROJECT_VIEW_delete_project(params) {
        PROJECT_VIEW_receive_MENU_delete_request(params);
        return;
    }
};
```

##### And then running the function from projectView.js
```js
export function PROJECT_VIEW_receive_MENU_delete_request(project_id) {
    if (window.confirm("Are you sure you want to delete this project?")) {
        console.log("delete project id:", project_id)
        deleteProjectFromServer(project_id);

        menuHide_foreign();
        const newRoute = "/";
        handleRoute(newRoute);
    } else {
        menuHide_foreign();

    }
}
```

### menuHide_foreign:
This is a function that can be imported from `menu.js` and used to hide a menu dialog that has been opened if you think that they should happen after a specific action like deleting the project, then obviously you shouldn't be able to do more actions to that project through the menu. However this shouldn't normally be done, since the user should choose to close the menu themselves. It won't cause any issues if the menu is already hidden when you call the function, since it merely changes it's `display` to `none`.

```js
        menuHide_foreign();
```


<br><br>





