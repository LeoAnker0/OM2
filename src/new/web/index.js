function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

function main() {
    //the logic for signingin/up and staying logged in as well
    //includeJs("login.js");

    //the logic for the audio player
    includeJs("audioPlayer.js");
    //the logic for the context menus
    includeJs("menu.js");

    //the logic for retrieving the account picture
    includeJs("loadAccountImage.js");

    //for the main library view
    window.LoadedMusicObjects = 0
    includeJs("musicObjects.js");

    //deals with fleshing out the playlists dropdown, as well as the search bar
    includeJs("hydrateNav.js");
    includeJs("search.js");
    includeJs("inputDetect.js")

    //for the music object view
    includeJs("hydrateExpandedMusicObject.js");
    //includeJs("hideAndResize.js");

    //for the browse catalogue
    includeJs("browse.js");

    //for the redirector
    includeJs("redirect.js");

    //for the add/remove library functions
    includeJs("addOrRemoveFromLibrary.js");

}


main()