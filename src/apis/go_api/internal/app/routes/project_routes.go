package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "strconv"
    "go_api/internal/app/helpers"
)

func SetupProjectRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/projects")
    {
        projectRoutes.GET("/get_projects", get_projects)
        projectRoutes.GET("/get_project_details/:projectID", get_project_details)
        projectRoutes.GET("/get_new_project_id", get_new_project_id)
    }
}

func get_projects(c *gin.Context) {
    // Get the query parametres as strings
    lStr := c.DefaultQuery("l", "15")
    cStr := c.DefaultQuery("c", "0")

    // Parse the string values to integers
    No_Library_Items_Wanted, err1 := strconv.Atoi(lStr)
    No_Library_Items_Collected, err2 := strconv.Atoi(cStr)

    if err1 != nil || err2 != nil {
        fmt.Println(err1, err2)
        c.JSON(400, gin.H{"error": "ERROR with searchQuery"})
        return
    }

    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    if No_Library_Items_Wanted > 40 {
        No_Library_Items_Wanted = 40
    }

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    projects, err := helpers.GetUsersProjects(uuid, No_Library_Items_Wanted, No_Library_Items_Collected)
    if err != nil {
        fmt.Println("Error at get_projects, getting the project details", err)
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    c.JSON(200, gin.H{"projects": projects})
    return
}


func get_project_details(c *gin.Context) {
    projectID := c.Param("projectID")
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    project_json, err2 := helpers.GetProjectDetailsFromDatabase(uuid, projectID)
    if err2 != nil {
        fmt.Println(err)
    }

    c.JSON(200, gin.H{"project_details": project_json})
}


/*
async def init_project_in_database(data: dict):
    async with app.state.pool.acquire() as conn:
        json_owner = {"owner": data["uuid"], "permissions": "owner"}
        owner = json.dumps(json_owner)
        file_created_time = int(datetime.datetime.now().timestamp() * 1000)
        project_json = "{}"
        description = "Notes..."
        picture_url = "assets/default_pfp"
        project_id = data["project_id"]
        project_name = generate_whimsical_name()
        project_contributors = data["owner_username"]

        query = "INSERT INTO projects (owner, time_created, project_json, description, picture_url, project_id, project_name, project_contributors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
        await conn.execute(query, (owner, ), file_created_time, project_json,
                           description, picture_url, project_id, project_name,
                           project_contributors)
*/

func get_new_project_id(c *gin.Context) {
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Prepare data
    ProjectID, err := helpers.Generate_Unique_Short_String()
    if err != nil {
        fmt.Println("error making unique string: ", err)
    }
    Username, err := helpers.Get_user_detail_by_column(uuid, "username")
    if err != nil {
        fmt.Println("error getting username: ", err)
    }

    // Creating the project
    err2 := helpers.InitProjectInDatabase(Username, uuid, ProjectID)
    if err2 != nil {
        fmt.Println("error creating project: ", err2)
    }


    c.JSON(200, gin.H{"projectID": ProjectID})
    return
}



