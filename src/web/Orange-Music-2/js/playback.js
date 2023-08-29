import { updateQueue } from './queue.js';
import { shuffleStateChange, loopStateChange, playStateChange } from './playbackControls.js';
import { resizeTitleText } from './lcd.js';

export let PLAYBACK_songs_array = [];
export let PLAYBACK_songs_array_index = 0;
const PLAYBACK_audio_tag = document.getElementById("audio");
const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

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
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

    PLAYBACK_audio_tag.pause();


    console.log("song ended")

    const length_of_queue = PLAYBACK_songs_array.length;
    console.log(length_of_queue, PLAYBACK_songs_array_index)

    if (length_of_queue > (PLAYBACK_songs_array_index + 1)) {
        PLAYBACK_songs_array_index += 1

        console.log("lets play another song?")
        PLAYBACK_audio_source.src = `https://om2media.la0.uk/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
        PLAYBACK_audio_tag.load();
        PLAYBACK_audio_tag.play();
        updateQueue();

    } else {
        console.log("there is nothing more in the queue")
    }
}


export function PLAYBACK_handle_PLAYER_playButton() {
    console.log("play clicked")
    PLAYBACK_playPause_song()
}

function PLAYBACK_playPause_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    if (PLAYBACK_audio_tag.paused) {
        //play the audio
        console.log("audio is paused")
        playStateChange("playing")
        PLAYBACK_audio_tag.play();

    } else {
        //pause the audio
        console.log("audio is playing")
        playStateChange("paused")
        PLAYBACK_audio_tag.pause();
    }

}

export function PLAYBACK_handle_PLAYER_nextButton() {
    PLAYBACK_goto_next_song();
}

function PLAYBACK_goto_next_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");


    const length_of_queue = PLAYBACK_songs_array.length;
    if (length_of_queue > (PLAYBACK_songs_array_index + 1)) {
        PLAYBACK_audio_tag.pause();
        PLAYBACK_songs_array_index += 1

        console.log("lets play another song?")
        PLAYBACK_audio_source.src = `https://om2media.la0.uk/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
        PLAYBACK_audio_tag.load();
        PLAYBACK_audio_tag.play();
        LCDtitleText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
        LCDbottomText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].project_contributors;
        resizeTitleText();

        updateQueue();

    } else {
        console.log("there is nothing more in the queue")


    }
}

function formatTime(val) {
    let h = 0,
        m = 0,
        s;
    val = parseInt(val, 10);
    if (val > 60 * 60) {
        h = parseInt(val / (60 * 60), 10);
        val -= h * 60 * 60;
    };
    if (val > 60) {
        m = parseInt(val / 60, 10);
        val -= m * 60;
    };
    s = val;
    val = (h > 0) ? h + ':' : '';
    val += (m > 0) ? ((m < 10 && h > 0) ? '0' : '') + m + ':' : '0:';
    val += ((s < 10) ? '0' : '') + s;

    return val;
};


function PLAYBACK_start_playback() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
    const LCDtitleText = document.getElementById("LCDtitleText");
    const LCDbottomText = document.getElementById("LCDbottomText");

    PLAYBACK_audio_source.src = `https://om2media.la0.uk/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
    PLAYBACK_audio_tag.load();
    PLAYBACK_audio_tag.play();

    LCDtitleText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
    LCDbottomText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].project_contributors;
    resizeTitleText();
    updateQueue();
    playStateChange("playing");

    const root = document.documentElement;

    PLAYBACK_audio_tag.addEventListener("timeupdate", () => {
        const endOfAudio = PLAYBACK_audio_tag.duration;
        //when the audio progesses by a second it updates the current time and time left tags
        const currentTime = PLAYBACK_audio_tag.currentTime;

        const timeRight = Math.floor(endOfAudio) - currentTime;
        const timeRightFormatted = `"-${formatTime(timeRight)}"`;

        const timeLeft = formatTime(Math.floor(currentTime));
        const timeLeftFormatted = `"${timeLeft}"`
        root.style.setProperty('--LCD-afterContent-bottom-right', timeRightFormatted);

        root.style.setProperty('--LCD-afterContent-bottom-left', timeLeftFormatted);


        const progressPercent = (currentTime / endOfAudio) * 100;
        const progressPercentFormatted = `${progressPercent}%`

        root.style.setProperty('--LCD-seekbar-width', progressPercentFormatted);
        root.style.setProperty('--LCD-seekbar-indicator-left', progressPercentFormatted);


    });






}











/**/