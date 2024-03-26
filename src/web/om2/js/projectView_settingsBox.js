// projectView_settingsBox.js
import settingsBoxContainer from '../html/projectView_settingsBox.html?raw';

export function UPDATE_ProjectViewSettingsBox(Details, State) {
    /* if the state is not blank, then do normal things  */
    const SettingsBoxEnvironment = document.getElementById("PROJECTVIEW_settingBox_environment");
    if (SettingsBoxEnvironment === null) {
        return;
    }

    SettingsBoxEnvironment.innerHTML = "";
    SettingsBoxEnvironment.style.visibility = "";


    /* if the state is blank, then hide it*/
    if (State === "blank") {
        SettingsBoxEnvironment.innerHTML = "";
        SettingsBoxEnvironment.style.visibility = "hidden";
        return;
    }

    /* lets hydrate the box now. */
    console.log("Lets update the UPDATE_ProjectViewSettingsBox ", Details, State);
    SettingsBoxEnvironment.innerHTML += settingsBoxContainer;


    /*  */

    return;
}