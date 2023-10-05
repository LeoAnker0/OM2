import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';
import { handleRoute } from './routing.js';

export async function updateProjectDetails(project_id, column, newInfo) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token,
            "project_id": project_id,
            "column_to_be_updated": column,
            "new_data": newInfo
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/update_details/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
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

export async function updateUserDetails(column, newInfo) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const new_data = {
            "access-token": token,
            "column_to_be_updated": column,
            "new_data": JSON.stringify(newInfo)
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/update_details/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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

export async function getUserDetail(wantedColumn) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const new_data = {
            "access-token": token,
            "wanted_column": wantedColumn
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/users/get_details/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(new_data)
        });

        const data = await response.json();
        const info = data["response"]
        return info

    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getProjectDetails(project_id) {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token,
            "project_id": project_id
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get-project-details/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
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
        const token = localStorage.getItem('JWT');
        if (!token) {
            console.log("no jwt");
            return [];
        }

        const data_body = {
            "access-token": token,
            library_items_to_request_at_a_time,
            no_library_datas_collected
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/get-projects/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data_body)
        });

        const responseData = await response.json();
        const projects = responseData.projects;

        if (!Array.isArray(projects)) {
            console.log("Projects is not an array:", projects);
            return [];
        }

        const libraryData = projects.map(project => ({
            img: project.picture_url,
            top: project.project_name,
            bottom: project.project_contributors,
            days: project.time_created,
            project_id: project.project_id
        }));

        return libraryData;

    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function createNewProjectID() {
    try {
        const token = localStorage.getItem('JWT'); // Replace 'jwt' with your token key
        if (!token) {
            console.log("no jwt")
            return;
        }

        const projectData = {
            "access-token": token
        };

        const response = await fetch(`${MAIN_CONST_EXPORT_apiPath}/projects/new-project-id/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        });

        const data = await response.json();
        const projectID = data.projectID;
        const newRoute = `/projects/${projectID}`
        handleRoute(newRoute);

    } catch (error) {
        console.error('Error:', error);
    }
}