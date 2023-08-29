import { updateQueue } from './queue.js';
import { shuffleStateChange, loopStateChange, playStateChange } from './playbackControls.js';
import { resizeTitleText, updateTimeIndicatorsGlobal } from './lcd.js';

export let PLAYBACK_songs_array = [];
export let PLAYBACK_songs_array_index = 0;
const PLAYBACK_audio_tag = document.getElementById("audio");
const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

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

/* this functions is responsible for taking in an array of song data, as it is recieved from the database, and
then formatting into what playback.js can understand. In this particular case this function clears the playback array
and sets the index to 0, but some other functions with similar purpose won't do these things, rather they will just appened the data
to the end of the array or other such ideas. */
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

/* buttons -------------------------------------------------------- */

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

export function PLAYBACK_handle_PLAYER_backButton() {
    PLAYBACK_goto_previous_song();
}

export function PLAYBACK_init() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    PLAYBACK_audio_tag.addEventListener('ended', PLAYBACK_on_song_end);
}

/* changes the progress of the audio tag, will need to add handling for if the audio tag is not loaded */
export function PLAYBACK_handle_input_change_song_progress(progress) {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const duration = PLAYBACK_audio_tag.duration;
    const newCurrentTime = duration * progress
    PLAYBACK_audio_tag.currentTime = newCurrentTime;
}







/* LOGIC -------------------------------------------------------*/

/* the main playback function, is responsible for playing the audio, will be called from many different places, this means that there
is only one piece of logic that deals with loading and playing and all of these things, there will be other functions that do some of 
this type of thing, but no other function will be allowed to start playback of audio. */
function PLAYBACK_start_playback() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
    const LCDtitleText = document.getElementById("LCDtitleText");
    const LCDbottomText = document.getElementById("LCDbottomText");
    const root = document.documentElement;
    const scrubInput = document.getElementById("LCDseekBar");

    PLAYBACK_audio_source.src = `https://om2media.la0.uk/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
    PLAYBACK_audio_tag.load();
    PLAYBACK_audio_tag.play();

    LCDtitleText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
    LCDbottomText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].project_contributors;
    resizeTitleText();
    updateQueue();
    playStateChange("playing");

    PLAYBACK_audio_tag.addEventListener("timeupdate", () => {
        const endOfAudio = PLAYBACK_audio_tag.duration;
        const currentTime = PLAYBACK_audio_tag.currentTime;
        const timeRight = Math.floor(endOfAudio) - currentTime;
        const timeRightFormatted = `"-${formatTime(timeRight)}"`;
        const timeLeft = formatTime(Math.floor(currentTime));
        const timeLeftFormatted = `"${timeLeft}"`
        const progressPercent = (currentTime / endOfAudio) * 100;
        const progressPercentFormatted = `${progressPercent}%`

        updateTimeIndicatorsGlobal(timeLeftFormatted, timeRightFormatted)
        root.style.setProperty('--LCD-seekbar-width', progressPercentFormatted);
        root.style.setProperty('--LCD-seekbar-indicator-left', progressPercentFormatted);
        scrubInput.value = progressPercent;
    });
}

function PLAYBACK_stop_playback() {
    console.log("PLAYBACK_stop_playback, clear top")
}


function PLAYBACK_on_song_end() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
    const length_of_queue = PLAYBACK_songs_array.length;

    PLAYBACK_audio_tag.pause();

    if (length_of_queue > (PLAYBACK_songs_array_index + 1)) {
        PLAYBACK_songs_array_index += 1
        PLAYBACK_start_playback();
    } else {
        PLAYBACK_stop_playback()
    }
}

function PLAYBACK_goto_next_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource")
    const length_of_queue = PLAYBACK_songs_array.length;

    if (length_of_queue > (PLAYBACK_songs_array_index + 1)) {
        if (!PLAYBACK_audio_tag.paused) {

            PLAYBACK_audio_tag.pause();
        }
        PLAYBACK_songs_array_index += 1
        PLAYBACK_start_playback();
    }
}

function PLAYBACK_goto_previous_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource")
    const length_of_queue = PLAYBACK_songs_array.length;

    /*space to add the catching of if the go back request was greater than 3 seconds 
    from the start, then go to the start of the song, rather than the previous one, 
    but else go the previous song, if possible  */

    if (PLAYBACK_songs_array_index > 0) {
        PLAYBACK_audio_tag.pause();
        PLAYBACK_songs_array_index -= 1
        PLAYBACK_start_playback();
    }
}

































/**/