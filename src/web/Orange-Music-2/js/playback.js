export let PLAYBACK_songs_array = [];
export let PLAYBACK_songs_array_index = 0;
export const PLAYBACK_audio_tag = document.getElementById("audio");
export const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

export function PLAYBACK_handle_input_project_details_array_with_start_playback(project_details) {
    //console.log("PLAYBACK_handle_input_project_details_array")
    //clear PLAYBACK_songs_array, and set index to 0
    PLAYBACK_songs_array = [];
    PLAYBACK_songs_array_index = 0;

    //fill PLAYBACK_songs_array with new data
    const project_contributors = project_details.project_contributors;
    const project_name = project_details.project_name;
    const picture_url = project_details.picture_url;
    const project_json = JSON.parse(project_details.project_json).songs_json

    for (const song of project_json) {
        const song_name = song.song_name;
        const duration = song.duration;
        const url = song.url;

        PLAYBACK_songs_array.push({
            "img": picture_url,
            "song_name": song_name,
            "url": url,
            "duration": duration,
            "project_name": project_name,
            "project_contributors": project_contributors
        })
    }
    //call function to start playback
    PLAYBACK_start_playback()
}

export function PLAYBACK_init() {
    const PLAYBACK_audio_tag = document.getElementById("audio");

    PLAYBACK_audio_tag.addEventListener('ended', PLAYBACK_on_song_end);
}

function PLAYBACK_on_song_end() {
    console.log("song ended")
}


function PLAYBACK_start_playback() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

    PLAYBACK_audio_source.src = `https://om2media.la0.uk/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
    PLAYBACK_audio_tag.load();
    PLAYBACK_audio_tag.play();



}











/**/