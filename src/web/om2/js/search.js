/* JS for the search bar --------------------------------------------------------------------- */

import { handleRoute } from './routing.js';
import { debounce2 } from './om2.js';

export function setEventListenersForSearchbar() {
    const clearIcon = document.getElementById("topleftClearIcon");
    const searchBar = document.getElementById("searchBar");
    const ProcessSearchStringDebounced = debounce2(ProcessSearchString, 150);


    /* detects if the searchbar has been typed in */
    searchBar.addEventListener("keyup", () => {
        /* set the debounce, so that the search string will only be sent to the server 
        when no new characters have been entered in a while*/
        ProcessSearchStringDebounced(event, searchBar)

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
        ClearTheSearchResults();
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
        outlineForSearchbar.style.outline = "1px solid var(--text-third)";
        outlineForSearchbar.style.backgroundColor = "var(--grey)";

        ''

        /* if searchBar.value is greater than 0*/
        if (searchBar.value.length > 0) {
            clearIcon.style.opacity = "100%";

        }
    });

    searchBar.addEventListener('blur', () => {
        outlineForSearchbar.style.outline = "";
        outlineForSearchbar.style.backgroundColor = "";

        /* hide the clear icon (we changed over to using opacity so that it was always clickable) */
        clearIcon.style.opacity = "0%";

    });
};

function ProcessSearchString(event, searchQuery) {
    if (searchQuery.value == "") {
        ClearTheSearchResults();
        return
    }

    console.log(searchQuery.value);
}

function ClearTheSearchResults() {
    console.log("Clear the search results");
}