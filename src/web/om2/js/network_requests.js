import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { HandleCreateNotification } from './notificationDisplayManager.js';
import { handleRoute } from './routing.js';
import { loadUsersTable } from './settings.js';

export async function updateUserDetails(column, newInfo) {
    try {
        const new_data = {
            "column_to_be_updated": column,
            "new_data": JSON.stringify(newInfo)
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/update_user_details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(new_data)
        });

        const data = await response.json();
        const update = data["updated"]
        if (update === "success") {
            return
        } else {
            console.log("there was an error")
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteUserFromService(uuid) {
    try {
        const new_data = {
            "uuid": uuid,
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/admin/delete_user`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(new_data)
        });

        const data = await response.json();
        console.log(data)


    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteSongFromProject(projectID, SongSequenceString) {
    const SongSequenceInformationArray = SongSequenceString.split("-");
    const SongSequence = SongSequenceInformationArray[0];
    const SongVersion = SongSequenceInformationArray[1];
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/delete_song/${projectID}?s=${SongSequence}&v=${SongVersion}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await response.json();
        if (data.error) {
            HandleCreateNotification("There was an error deleting the song", "error");
        }
        return

    } catch (error) {
        console.error('Error:', error);
        return
    }
}

export async function getUserDetail(wantedColumn) {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/get_user_details/${wantedColumn}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json();
        const info = data["response"];
        return info

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updateProjectDetails(project_id, column, newInfo) {
    try {
        const projectData = {
            "project_id": project_id,
            "column_to_be_updated": column,
            "new_data": newInfo
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/update_details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(projectData)
        });

        const data = await response.json();
        const update = data["updated"]
        if (update === "success") {
            return "yes";
        } else {
            console.log("there was an error, yes")
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getProjectDetails(project_id) {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get_project_details/${project_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json();
        const projectDetailsRecord = data.project_details
        return projectDetailsRecord;

    } catch (error) {
        console.error('Error:', error);
    }
}


export async function getLibraryData(library_items_to_request_at_a_time, no_library_datas_collected) {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get_projects?l=${library_items_to_request_at_a_time}&c=${no_library_datas_collected}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const responseData = await response.json();
        const projects = responseData.projects;

        if (!Array.isArray(projects)) {
            //console.log("Projects is not an array:", projects);
            return [];
        }

        const libraryData = projects.map(project => ({
            img: project.PictureURL,
            top: project.ProjectName,
            bottom: project.ProjectContributors,
            days: project.TimeCreated,
            project_id: project.ProjectID
        }));

        return libraryData;

    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function createNewProjectID() {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get_new_project_id`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json();
        const projectID = data.projectID;
        const newRoute = `/projects/${projectID}`
        handleRoute(newRoute);

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function get_users_table() {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/admin/get_users_table`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json();
        return data.response;

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updateUserDetailsAdmin(uuid, column, newInfo) {
    try {
        const new_data = {
            "user_to_update_uuid": uuid,
            "column_to_be_updated": column,
            "new_data": newInfo
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/admin/update_user_details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(new_data)
        });

        const data = await response.json();
        const update = data["updated"]
        if (update === "success") {
            HandleCreateNotification("Table Updated Successfully", "success");
            loadUsersTable();
            return
        } else {
            HandleCreateNotification(`Error Updating Column ${column}: ${data.Error}`, "error")
            return
        }

    } catch (error) {
        HandleCreateNotification(`Error Updating Column ${column}: ${error}`, "error");
        return
    }
}

export async function signout() {
    try {
        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/meta/signout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        const data = await response.json();
        if (data.message == "logged out") {
            return
        } else {
            console.log(data)
            return
        }

    } catch (error) {
        console.error('Error:', error);
    }
}