import { MAIN_CONST_EXPORT_apiPath, MAIN_CONST_EXPORT_mediaPath } from '../main.js/';

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