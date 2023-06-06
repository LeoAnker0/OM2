/* JS for the search bar --------------------------------------------------------------------- */

export function setEventListenersForSearchbar() {
    const clearIcon = document.getElementById("topleftClearIcon");
    const searchBar = document.getElementById("searchBar");

    /* detects if the searchbar has been typed in */
    searchBar.addEventListener("keyup", () => {
        if (searchBar.value && clearIcon.style.visibility != "visible") {
            clearIcon.style.visibility = "visible";
        } else if (!searchBar.value) {
            clearIcon.style.visibility = "hidden";
        }
    });

    /* checks if the clear icon is clicked, and then hides it */
    clearIcon.addEventListener("click", () => {
        searchBar.value = "";
        clearIcon.style.visibility = "hidden";

        console.log("clear icon clicked")
    })

    /* detects when the enter key is pressed, and logs the search query */
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            const inputContents = searchBar.value;
            console.log(inputContents);

            /* clear the searchbar?*/
            searchBar.value = "";

        }
    });

    /* detect when being focusued, rather than typed */

}