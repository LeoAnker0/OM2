/* JS for the search bar --------------------------------------------------------------------- */

import { handleRoute } from '../main.js';

export function setEventListenersForSearchbar() {
    const clearIcon = document.getElementById("topleftClearIcon");
    const searchBar = document.getElementById("searchBar");


    /* detects if the searchbar has been typed in */
    searchBar.addEventListener("keyup", () => {
        if (searchBar.value && clearIcon.style.visibility != "visible") {
            clearIcon.style.opacity = "100%";
        } else if (!searchBar.value) {
            clearIcon.style.opacity = "0%";
        }
    });

    /* checks if the clear icon is clicked, and then hides it */
    clearIcon.addEventListener("click", () => {
        searchBar.value = "";
        clearIcon.style.opacity = "0%";

        //console.log("clear icon clicked")
    })

    /* detects when the enter key is pressed, and logs the search query */
    searchBar.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            const inputContents = searchBar.value;
            console.log(inputContents);

            /* clear the searchbar?*/
            searchBar.value = "";

        }
    });

    const outlineForSearchbar = document.querySelector('.topleft-searchbarContainerL2');

    /* detect when being focusued, rather than typed */
    searchBar.addEventListener('focus', () => {
        outlineForSearchbar.style.outline = "1px solid var(--lgrey-4)";
        ''

        /* if searchBar.value is greater than 0*/
        if (searchBar.value.length > 0) {
            clearIcon.style.opacity = "100%";

        }
    });

    searchBar.addEventListener('blur', () => {
        outlineForSearchbar.style.outline = "1px solid hsla(0, 0%, 100%, 0.23)";

        /* hide the clear icon (we changed over to using opacity so that it was always clickable) */
        clearIcon.style.opacity = "0%";

    });


    /* and also for the home button why not... 
    const homeButton = document.getElementById("TOPLEFT_homeButton")
    homeButton.addEventListener("click", () => {
        handleRoute("/")

    })
    */




};