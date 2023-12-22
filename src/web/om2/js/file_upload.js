import { MENU_when_image_has_been_uploaded, MENU_when_image_has_been_uploaded_pfp } from './menu.js';
import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { HandleCreateNotification } from './notificationDisplayManager.js';

async function uploadFileWithProgress(file, project_id, menuType) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
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
        if (xhr.status >= 200 && xhr.status < 300) {
            // Success
            const response = xhr.responseText; // Assuming the response is JSON

            // Handle case where storage limit reached
            if (response == "StorageLimit Reached") {
                HandleCreateNotification("Storage limit reached", "error")
            }

            if (menuType !== "update_user_pfp") {
                MENU_when_image_has_been_uploaded();
            } else {
                MENU_when_image_has_been_uploaded_pfp();
                location.reload();
            }

        } else {
            // Request failed
            console.error("Error during upload. Status:", xhr.status, "Response:", xhr.responseText);
        }
    };

    // if the upload had an error
    xhr.onerror = function() {
        console.log("there was an error with the upload")
    };

    xhr.open('POST', `${MAIN_CONST_EXPORT_apiPath}/files/upload_photo?pi=${project_id}&mt=${menuType}`, true);
    xhr.send(formData);
}

export async function upload_image_files(files, project_id, menuType) {
    if (!Array.isArray(files)) {
        files = [files]; // Convert a single file to an array
    }

    for (const file of files) {
        await uploadFileWithProgress(file, project_id, menuType);
    }
}