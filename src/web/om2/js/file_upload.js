import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';

import { MENU_when_image_has_been_uploaded } from './menu.js';

async function uploadFileWithProgress(file, project_id) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    const jwtToken = localStorage.getItem('JWT');

    formData.append('file', file);

    // get the progress updates
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentCompleted = (event.loaded / event.total) * 100;
            //console.log("percentCompleted:\t", percentCompleted)

            /*
            if (percentCompleted === 100) {
                console.log("the file upload is finished");
            }
            */
        }
    };

    //the upload is finished
    xhr.onload = function() {
        //console.log("the file has been uplaoded")
        MENU_when_image_has_been_uploaded();
    };

    // if the upload had an error
    xhr.onerror = function() {
        console.log("there was an error with the upload")
    };

    xhr.open('POST', `${MAIN_CONST_EXPORT_apiPath}/files/upload_photo/${project_id}`, true);
    xhr.send(formData);
}

export async function upload_image_files(files, project_id) {
    if (!Array.isArray(files)) {
        files = [files]; // Convert a single file to an array
    }

    //console.log("files:\t", files, "project_id:\t", project_id);

    for (const file of files) {
        await uploadFileWithProgress(file, project_id);
    }
}