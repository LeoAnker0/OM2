/* JS for the search bar --------------------------------------------------------------------- */

import { handleRoute } from './routing.js';
import { debounce2, generateUniqueID } from './om2.js';
import { userSearchQuery } from './network_requests.js';

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

function displayResults(responseHTMLstring) {
    ClearTheSearchResults();

    const searchResponsesEnvironment = document.getElementById("SEARCH_responseEnvironment");
    searchResponsesEnvironment.style.display = "block";

    searchResponsesEnvironment.innerHTML = responseHTMLstring.response;

    for (var i = searchResponsesEnvironment.children.length - 1; i >= 0; i--) {
        const dataset = searchResponsesEnvironment.children[i].dataset;
        if ((dataset.om2SearchObjectProjectid != null) && (dataset.om2SearchObjectSongurl != null)) {
            const projectID = dataset.om2SearchObjectProjectid
            const songURL = dataset.om2SearchObjectSongurl;
            const uniqueID = generateUniqueID()

            // assign a unique id to this element 
            searchResponsesEnvironment.children[i].id = uniqueID;
            document.getElementById(uniqueID).addEventListener("click", () => {
                handleRoute(`/projects/${projectID}/${songURL}`);
                ClearTheSearchResults();
            })
        } else if (dataset.om2SearchObjectProjectid != null) {
            const projectID = dataset.om2SearchObjectProjectid
            const uniqueID = generateUniqueID();

            // assign a unique id to this element 
            searchResponsesEnvironment.children[i].id = uniqueID;

            document.getElementById(uniqueID).addEventListener("click", () => {
                handleRoute(`/projects/${projectID}`);
                ClearTheSearchResults();
            })
        }
    }

}

async function ProcessSearchString(event, searchQuery) {
    if (searchQuery.value == "") {
        ClearTheSearchResults();
        return
    }

    /* since something is being displayed, now, we have also have to capture the tabs, so that when tab is hit, it will
        go to the lcd controls, rather than going to the items in the search response, which is what the users are expecting
        so instead we should capture it and move it, and this is something that will be easier to implement, when we have 
        search responses working.*/

    const resultsString = await userSearchQuery(searchQuery.value)
    displayResults(resultsString);
}



function ClearTheSearchResults() {
    const searchResponsesEnvironment = document.getElementById("SEARCH_responseEnvironment");
    searchResponsesEnvironment.style.display = "none";
    searchResponsesEnvironment.innerHTML = "";
}