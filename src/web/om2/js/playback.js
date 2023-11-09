import { updateQueue } from './queue.js';
import { shuffleStateChange, loopStateChange, playStateChange } from './playbackControls.js';
import { resizeTitleText, updateTimeIndicatorsGlobal } from './lcd.js';
import { getProjectDetails } from './network_requests.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { shuffleArray, formatTimeSeconds } from './om2.js';

export let PLAYBACK_songs_array = [];
export let PLAYBACK_songs_copy_array = [];
export let PLAYBACK_songs_array_index = 0;
export let PLAYBACK_current_img = "";
export let PLAYBACK_current_song_title = "";
export let PLAYBACK_current_song_artist = "";

const PLAYBACK_audio_tag = document.getElementById("audio");
const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
let PLAYBACK_loop_state = "off";
let PLAYBACK_shuffle_state = "off";
let PLAYBACK_playing_state = "paused";

/* this functions is responsible for taking in an array of song data, as it is recieved from the database, and
then formatting into what playback.js can understand. In this particular case this function clears the playback array
and sets the index to 0, but some other functions with similar purpose won't do these things, rather they will just appened the data
to the end of the array or other such ideas. */
export function PLAYBACK_handle_input_project_details_array_with_start_playback(project_details) {
    PLAYBACK_songs_array = [];
    PLAYBACK_songs_array_index = 0;
    PLAYBACK_songs_array = PLAYBACK_prepare_project_details_array(project_details);

    if (PLAYBACK_songs_array.length > 0) {
        PLAYBACK_playing_state = "playing";
        PLAYBACK_start_playback()
    }
}
export function PLAYBACK_handle_input_project_details_array_with_start_playback_and_shuffle(project_details) {
    PLAYBACK_songs_array = [];
    PLAYBACK_songs_array_index = 0;
    PLAYBACK_songs_array = PLAYBACK_prepare_project_details_array(project_details);

    if (PLAYBACK_songs_array.length > 0) {
        PLAYBACK_shuffle_state = "off";
        PLAYBACK_handle_shuffle_queue();
        PLAYBACK_playing_state = "playing";
        PLAYBACK_start_playback()
    }
}

function PLAYBACK_prepare_project_details_array(project_details) {
    project_details = JSON.parse(project_details)
    const array = [];
    const project_contributors = project_details.ProjectContributors;
    const project_name = project_details.ProjectName;
    const picture_url = project_details.PictureURL;
    let project_json = project_details.ProjectJSON;
    project_json = JSON.parse(project_json)
    project_json = project_json.songs_json

    try {
        for (const song of project_json) {
            const song_name = song.song_name;
            const duration = song.duration;
            const url = song.url;

            array.push({
                "img": picture_url,
                "song_name": song_name,
                "url": url,
                "duration": duration,
                "project_name": project_name,
                "project_contributors": project_contributors
            })
        }
    } catch (e) {
        console.log(e)
    }
    return array;
}

export function PLAYBACK_handle_input_sync_state(lastState) {
    const current_queue = lastState.current_queue;
    const current_index = lastState.current_index;
    const loop_state = lastState.PLAYBACK_loop_state;
    const shuffle_state = lastState.PLAYBACK_shuffle_state;
    const progress = lastState.progress;

    //update the queue
    PLAYBACK_songs_array = current_queue;
    PLAYBACK_songs_array_index = current_index;
    //update the loop and shuffle states
    PLAYBACK_set_loop_state(loop_state)

    //call function to start playback
    if (PLAYBACK_songs_array.length > 0) {
        PLAYBACK_start_without_playback_and_update_progress(progress)
    }
}

export async function PLAYBACK_handle_add_songs_to_queue(params) {
    const project_id = params.PROJECT_ID;
    const queue_position = params.QUEUE_POSITION;
    const details = await getProjectDetails(project_id);
    const new_array = PLAYBACK_prepare_project_details_array(details);

    if (queue_position === "later") {
        PLAYBACK_songs_array = PLAYBACK_songs_array.concat(new_array);
        PLAYBACK_songs_copy_array = PLAYBACK_songs_copy_array.concat(new_array);

    } else if (queue_position === "next") {
        let firstHalf = PLAYBACK_songs_array.slice(0, (PLAYBACK_songs_array_index + 1));
        let secondHalf = PLAYBACK_songs_array.slice((PLAYBACK_songs_array_index + 1));

        PLAYBACK_songs_array = firstHalf;
        PLAYBACK_songs_array = PLAYBACK_songs_array.concat(new_array);
        PLAYBACK_songs_array = PLAYBACK_songs_array.concat(secondHalf);

        firstHalf = PLAYBACK_songs_copy_array.slice(0, (PLAYBACK_songs_array_index + 1));
        secondHalf = PLAYBACK_songs_copy_array.slice((PLAYBACK_songs_array_index + 1));

        PLAYBACK_songs_copy_array = firstHalf;
        PLAYBACK_songs_copy_array = PLAYBACK_songs_copy_array.concat(new_array);
        PLAYBACK_songs_copy_array = PLAYBACK_songs_copy_array.concat(secondHalf);
    }

    updateQueue();
}

/* buttons -------------------------------------------------------- */

export function PLAYBACK_handle_PLAYER_playButton() {
    PLAYBACK_playPause_song()
}

function PLAYBACK_playPause_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    if (PLAYBACK_audio_tag.paused) {
        //play the audio

        playStateChange("playing")
        PLAYBACK_playing_state = "playing";
        PLAYBACK_audio_tag.play()
            .then(_ => PLAYBACK_update_external_metadata())
            .catch(error => console.log(error));
        navigator.mediaSession.playbackState = 'playing';

    } else {
        //pause the audio
        PLAYBACK_playing_state = "paused";

        playStateChange("paused")
        PLAYBACK_audio_tag.pause();
        navigator.mediaSession.playbackState = 'paused';
    }
}

navigator.mediaSession.setActionHandler('play', async function() {
    PLAYBACK_handle_PLAYER_playButton();
});

navigator.mediaSession.setActionHandler('pause', function() {
    PLAYBACK_handle_PLAYER_playButton()
});


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

export function PLAYBACK_handle_PLAYER_loopButton() {
    PLAYBACK_change_loop_state();
}

export function PLAYBACK_GET_progress() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const progress = PLAYBACK_audio_tag.currentTime;

    const response = {
        PLAYBACK_loop_state: PLAYBACK_loop_state,
        PLAYBACK_shuffle_state: PLAYBACK_shuffle_state,
        progress: progress,
    }
    return response;
}

export function PLAYBACK_handle_shuffle_queue() {
    if (PLAYBACK_shuffle_state === "off") {
        PLAYBACK_shuffle_state = "on";
        shuffleStateChange(PLAYBACK_shuffle_state);

        const items_after_currently_playing = PLAYBACK_songs_array_index + 1;
        PLAYBACK_songs_copy_array = [...PLAYBACK_songs_array];

        const elementsBeforeIndex = PLAYBACK_songs_array.slice(0, PLAYBACK_songs_array_index);
        const new_shuffle_array = PLAYBACK_songs_array.slice(items_after_currently_playing);
        shuffleArray(new_shuffle_array)

        const elementsToRemove = new_shuffle_array.length;
        PLAYBACK_songs_array.splice(PLAYBACK_songs_array_index, elementsToRemove, ...new_shuffle_array);
        updateQueue();
    } else {
        PLAYBACK_shuffle_state = "off";
        shuffleStateChange(PLAYBACK_shuffle_state);
        const copy = [...PLAYBACK_songs_copy_array];

        /* the code below with the for loop allows the system to return the currently playing track as 
        the  correct position in the queue, rather than it now being somewhere completely else, and this
        is important to give a more smooth playback experience.
         */
        const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
        const full_url = PLAYBACK_audio_source.src
        const sections = full_url.split('/');
        const url = sections[sections.length - 3];
        PLAYBACK_songs_array = copy;

        for (var i = copy.length - 1; i >= 0; i--) {
            const queue_item = copy[i];
            if (queue_item.url === url) {
                PLAYBACK_songs_array_index = i

            }
        }
        updateQueue();
    }
}

/* LOGIC -------------------------------------------------------*/


/* the main playback function, is responsible for playing the audio, will be called from many different places, this means that there
is only one piece of logic that deals with loading and playing and all of these things, there will be other functions that do some of 
this type of thing, but no other function will be allowed to start playback of audio. */
function PLAYBACK_start_playback() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

    //set the source of the audio tag and start playback
    PLAYBACK_audio_source.src = `${MAIN_CONST_EXPORT_mediaPath}/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
    PLAYBACK_audio_tag.load();
    /* don't start playback if it's paused */
    if (PLAYBACK_playing_state === "playing") {
        PLAYBACK_audio_tag.play()
            .then(_ => PLAYBACK_update_external_metadata())
            .catch(error => console.log(error));
        playStateChange("playing");
    } else {
        playStateChange("paused");
    }

    PLAYBACK_update_top();
    PLAYBACK_time_updates();
}

function PLAYBACK_start_without_playback_and_update_progress(progress) {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");

    PLAYBACK_audio_source.src = `${MAIN_CONST_EXPORT_mediaPath}/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].url}/3/`;
    PLAYBACK_audio_tag.load();
    PLAYBACK_audio_tag.currentTime = progress;
    playStateChange("paused");
    PLAYBACK_update_top();
    PLAYBACK_time_updates();
}

function PLAYBACK_time_updates() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const root = document.documentElement;
    const scrubInput = document.getElementById("LCDseekBar");

    /* updates the top informations, which should really be it's own function? */
    PLAYBACK_audio_tag.addEventListener("timeupdate", () => {
        const endOfAudio = PLAYBACK_audio_tag.duration;
        const currentTime = PLAYBACK_audio_tag.currentTime;
        const timeRight = Math.floor(endOfAudio) - currentTime;
        const timeRightFormatted = `"-${formatTimeSeconds(timeRight)}"`;
        const timeLeft = formatTimeSeconds(Math.floor(currentTime));
        const timeLeftFormatted = `"${timeLeft}"`
        const progressPercent = (currentTime / endOfAudio) * 100;
        const progressPercentFormatted = `${progressPercent}%`

        updateTimeIndicatorsGlobal(timeLeftFormatted, timeRightFormatted)
        root.style.setProperty('--LCD-seekbar-width', progressPercentFormatted);
        root.style.setProperty('--LCD-seekbar-indicator-left', progressPercentFormatted);
        scrubInput.value = progressPercent;
        updatePositionState();
    });
}

function PLAYBACK_update_top() {
    const LCDtitleText = document.getElementById("LCDtitleText");
    const LCDtitleTextMobile = document.getElementById("LCDtitleTextMobile");
    const LCDbottomText = document.getElementById("LCDbottomText");
    const LCDimage = document.getElementById("LCDimage");
    const LCDimageMobile = document.getElementById("LCDimageMobile");

    LCDtitleText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
    LCDtitleTextMobile.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
    LCDbottomText.innerHTML = PLAYBACK_songs_array[PLAYBACK_songs_array_index].project_contributors;
    resizeTitleText();
    LCDimage.src = `${MAIN_CONST_EXPORT_mediaPath}/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].img}/3/`;
    LCDimageMobile.src = `${MAIN_CONST_EXPORT_mediaPath}/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].img}/3/`;
    PLAYBACK_current_img = `${MAIN_CONST_EXPORT_mediaPath}/${PLAYBACK_songs_array[PLAYBACK_songs_array_index].img}/5/`;
    PLAYBACK_current_song_title = PLAYBACK_songs_array[PLAYBACK_songs_array_index].song_name;
    PLAYBACK_current_song_artist = PLAYBACK_songs_array[PLAYBACK_songs_array_index].project_contributors;
    updateQueue();
}

function PLAYBACK_update_external_metadata() {
    let track = PLAYBACK_songs_array[PLAYBACK_songs_array_index];

    // the proper format for the images can be found at the bottom of https://googlechrome.github.io/samples/media-session/audio.html
    const formatted_img = [
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/1/`, sizes: '10x10', type: 'image/webp' },
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/2/`, sizes: '40x40', type: 'image/webp' },
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/3/`, sizes: '160x160', type: 'image/webp' },
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/4/`, sizes: '320x320', type: 'image/webp' },
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/5/`, sizes: '640x640', type: 'image/webp' },
        { src: `${MAIN_CONST_EXPORT_mediaPath}/${track.img}/6/`, sizes: '1080x1080', type: 'image/webp' },
    ];

    navigator.mediaSession.metadata = new MediaMetadata({
        title: track.song_name,
        artist: track.project_contributors,
        album: track.project_name,
        artwork: formatted_img
    });

    updatePositionState();
}

function updatePositionState() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const duration = PLAYBACK_audio_tag.duration

    try {
        if (('setPositionState' in navigator.mediaSession) && (typeof duration === "number")) {
            navigator.mediaSession.setPositionState({
                duration: duration,
                playbackRate: PLAYBACK_audio_tag.playbackRate,
                position: PLAYBACK_audio_tag.currentTime
            });
        }
    } catch {}
}

function PLAYBACK_stop_playback() {
    console.log("PLAYBACK_stop_playback, clear top")
}

function PLAYBACK_on_song_end() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource");
    const length_of_queue = PLAYBACK_songs_array.length;

    PLAYBACK_audio_tag.pause();

    // if loop off or on, and there are more songs in the queu
    if ((length_of_queue > (PLAYBACK_songs_array_index + 1)) && (PLAYBACK_loop_state == "off" || PLAYBACK_loop_state == "on")) {
        PLAYBACK_songs_array_index += 1
        PLAYBACK_start_playback();
    }
    // if loop state song
    else if (PLAYBACK_loop_state == "song") {
        PLAYBACK_start_playback();
    }
    // if loop on, and there are no more songs in the queue
    else if (length_of_queue == (PLAYBACK_songs_array_index + 1) && PLAYBACK_loop_state == "on") {
        PLAYBACK_songs_array_index = 0;
        PLAYBACK_start_playback();
    }
    // if loop off, and there are no more songs in the queue
    else {
        PLAYBACK_stop_playback()
    }
}


function PLAYBACK_goto_next_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource")
    const length_of_queue = PLAYBACK_songs_array.length;

    if (length_of_queue > (PLAYBACK_songs_array_index + 1)) {
        PLAYBACK_audio_tag.pause();
        PLAYBACK_songs_array_index += 1
        PLAYBACK_start_playback();
    }
}

navigator.mediaSession.setActionHandler('nexttrack', function() {
    PLAYBACK_goto_next_song();
});

function PLAYBACK_goto_previous_song() {
    const PLAYBACK_audio_tag = document.getElementById("audio");
    const PLAYBACK_audio_source = document.getElementById("PLAYERsource")
    const length_of_queue = PLAYBACK_songs_array.length;

    /*space to add the catching of if the go back request was greater than 3 seconds 
    from the start, then go to the start of the song, rather than the previous one, 
    but else go the previous song, if possible  */

    //if there are more songs in the backwards direction
    if (PLAYBACK_songs_array_index > 0) {
        PLAYBACK_audio_tag.pause();
        PLAYBACK_songs_array_index -= 1
        PLAYBACK_start_playback();
    }
}

navigator.mediaSession.setActionHandler('previoustrack', function() {
    PLAYBACK_goto_previous_song();
});

/* this funtion changes the value of the variable, however it will be on song end that deals with the logic for this  */
function PLAYBACK_change_loop_state() {
    // loop state on
    if (PLAYBACK_loop_state == "off") {
        PLAYBACK_loop_state = "on";
        loopStateChange(PLAYBACK_loop_state);
    }
    // loop state song
    else if (PLAYBACK_loop_state == "on") {
        PLAYBACK_loop_state = "song"
        loopStateChange(PLAYBACK_loop_state);
    }
    // loop state off
    else {
        PLAYBACK_loop_state = "off"
        loopStateChange(PLAYBACK_loop_state);
    }
}

function PLAYBACK_set_loop_state(loop_state) {
    // loop state on
    if (loop_state == "off") {
        PLAYBACK_loop_state = "off";
        loopStateChange(PLAYBACK_loop_state);
    }
    // loop state song
    else if (loop_state == "on") {
        PLAYBACK_loop_state = "on";
        loopStateChange(PLAYBACK_loop_state);
    }
    // loop state off
    else {
        loop_state = "song";
        PLAYBACK_loop_state = "on";
        loopStateChange(PLAYBACK_loop_state);
    }
}
































/**/