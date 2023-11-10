package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "strconv"
    "go_api/internal/app/helpers"
    "io/ioutil"
    "encoding/json"
    "strings"
)

func SetupProjectRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/projects")
    {
        projectRoutes.GET("/get_projects", get_projects)
        projectRoutes.GET("/get_project_details/:projectID", get_project_details)
        projectRoutes.GET("/get_new_project_id", get_new_project_id)
        projectRoutes.POST("/update_details", update_project_details)
        projectRoutes.DELETE("/delete_project/:projectID", delete_project)
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

type New_Project_Update_Data struct {
    ProjectID           string `json:"project_id"`
    Column_To_Update    string `json:"column_to_be_updated"`
    New_Data            string `json:"new_data"`
}

func update_project_details(c *gin.Context) {
    // Read the request body
    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Convert the request body to a string
    requestBody := string(body)
    var new_data New_Project_Update_Data
    err = json.Unmarshal([]byte(requestBody), &new_data)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    Column_To_Update := new_data.Column_To_Update
    New_Data := new_data.New_Data
    ProjectID := new_data.ProjectID

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Get the item from the database
    validColumnsToUpdate := []string{"description", "project_name", "project_contributors"}
    column_is_valid := helpers.Contains(validColumnsToUpdate, Column_To_Update)
    if !column_is_valid {
        fmt.Println("The column is not open to being updated")
        response := map[string]interface{}{"authenticated": false}
        fmt.Println(response)
        c.JSON(400, gin.H{"Authenticated": false})
    }

    response := helpers.Update_project_detail_by_column(uuid, Column_To_Update, New_Data, ProjectID)
    if response != nil {
        fmt.Println("error in Update_user_detail_by_column", response)
        c.JSON(400, gin.H{"updated": "error"})
        return
    }

    c.JSON(200, gin.H{"updated": "success"})
    return
}

/*
    await delete_project_by_uuid_and_project_id(uuid, project_id)

    return {"response": "cheese"}

*/

type Project struct {
    ProjectJSON string `json:"ProjectJSON"`
    URL         string `json:"PictureURL"`
}

type Song struct {
    SongName     string `json:"song_name"`
    URL          string `json:"url"`
    Duration     json.Number    `json:"duration"`
    SongSequence int    `json:"song_sequence"`
    SongSize     int64
}

type SongsJSON struct {
    Songs []Song `json:"songs_json"`
}

func delete_project(c *gin.Context) {
    ProjectID := c.Param("projectID")
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


    project_json, err2 := helpers.GetProjectDetailsFromDatabase(uuid, ProjectID)
    if err2 != nil {
        fmt.Println(err)
    }

    // Properly parse project_json as json, and then get .ProjectJSON
    var project Project
    err3 := json.Unmarshal([]byte(project_json), &project)
    if err3 != nil {
        fmt.Println("Error parsing JSON:", err3)
        return
    }


    var songsData SongsJSON
    err4 := json.Unmarshal([]byte(project.ProjectJSON), &songsData)
    if err4 != nil {
        fmt.Println("Error:", err4)
    }

    // Delete the photo, unless the photo path starts with static/
    PhotoURL := project.URL
    prefix := "static/"
    if !strings.HasPrefix(PhotoURL, prefix) {
        err5 := helpers.DELETE_files_row(PhotoURL)
        if err5 != nil {
            fmt.Println("there was an error deleting the file from the files table: ", err5)
        }

        err6 := helpers.DeleteFolder(PhotoURL)
        if err6 != nil {
            fmt.Println("there was an error deleting the file: ", err6)
        }
    } 

    /* At this stage here we have all of the files that are associated with this project, 
    what we want to do is to delete these files*/
    for _, song := range songsData.Songs {
        FileToDelete := song.URL
        err5 := helpers.DELETE_files_row(FileToDelete)
        if err5 != nil {
            fmt.Println("there was an error deleting the file from the files table: ", err5)
        }

        err6 := helpers.DeleteFolder(FileToDelete)
        if err6 != nil {
            fmt.Println("there was an error deleting the file: ", err6)
        }
    }

    /* Now that we have deleted the files, we can delete the database entry and 
    files table entry
    */
    err7 := helpers.DELETE_project_by_uuid_and_projectID(uuid, ProjectID)
    if err7 != nil {
        fmt.Println("there was an error deleting the project from the database: ", err7)
    }


    c.JSON(200, gin.H{"deleted": "success"})
}


