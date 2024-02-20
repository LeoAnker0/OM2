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
        projectRoutes.DELETE("/delete_song/:projectID", delete_song)
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

    if No_Library_Items_Wanted > 75 {
        No_Library_Items_Wanted = 75
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

func delete_song(c *gin.Context) {
    ProjectID := c.Param("projectID")
    SongSequence := c.DefaultQuery("s", "0")
    SongVersion := c.DefaultQuery("v", "0")

    // If SongSequence or SongVersion is 0 return false since these are not valid values
    if ((SongSequence == "0") || (SongVersion == "0")) {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

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

    // Ensure that the user is atleast an editor for deleting a song
    authorised, err := helpers.Authorise(ProjectID, uuid, "editor")
    if err != nil {
        fmt.Println("There was an error with authorising the user: ", err)
    }
    if authorised != true {
        fmt.Println("The user is not authorised for this path.")
        c.JSON(403, gin.H{"error": "unauthorised"})
        return
    } 


    /*  
        Now that we have verified that all the inputs are valid, and that the user
        Is allowed to do these actions, it is now time to call the function that will
        do this
        */
    SongURL, err := helpers.Delete_song_from_project_by_SongSequence(ProjectID, SongSequence)
    if err != nil {
        fmt.Println(err)
        c.JSON(500, gin.H{"error": "whoopsies"})
        return
    }

    // Delete the actual files
    err = helpers.DELETE_files_row(SongURL)
    if err != nil {
        fmt.Println("there was an error deleting the file from the files table: ", err)
        c.JSON(500, gin.H{"error": "whoopsies"})
        return
    }

    err = helpers.DeleteFolder(SongURL)
    if err != nil {
        fmt.Println("there was an error deleting the file: ", err)
        c.JSON(500, gin.H{"error": "whoopsies"})
        return

    }

    // The deletion was successful, now return a success
    c.JSON(200, gin.H{"success": "yes"})
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

    project_json, err := helpers.GetProjectDetailsFromDatabase(uuid, projectID)
    if err != nil {
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
    err = helpers.InitProjectInDatabase(Username, uuid, ProjectID)
    if err != nil {
        fmt.Println("error creating project: ", err)
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
    validColumnsToUpdate := []string{"description", "project_name", "project_contributors", "project_song_title", "SongsTableChangeSongSequenceOrder"}
    column_is_valid := helpers.Contains(validColumnsToUpdate, Column_To_Update)
    if !column_is_valid {
        fmt.Println("The column is not open to being updated")
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    if Column_To_Update == "project_song_title" {
        SongSequence, SemiString, _ := strings.Cut(New_Data, "-")
        Version, NewSongTitle, _ := strings.Cut(SemiString, "-")

        response := helpers.Update_song_detail_by_column(SongSequence, "SongName", NewSongTitle, ProjectID, Version)
        if response != nil {
            fmt.Println("error in Update_user_detail_by_column", response)
            c.JSON(400, gin.H{"updated": "error"})
            return
        }
    }else if Column_To_Update == "SongsTableChangeSongSequenceOrder" {
        draggedRowId, targetRowId, _ := strings.Cut(New_Data, "|")
        draggedRowIdSongSequence, _, _ := strings.Cut(draggedRowId, "-")
        targetRowIdSongSequence, _, _ := strings.Cut(targetRowId, "-")
        /*
        draggedRowIdSongSequence, draggedRowIdVersion, _ := strings.Cut(draggedRowId, "-")
        targetRowIdSongSequence, targetRowIdVersion, _ := strings.Cut(targetRowId, "-")
        */

        err := helpers.Update_the_order_of_songsSequnce_in_songs(ProjectID, draggedRowIdSongSequence, targetRowIdSongSequence)
        if err != nil {
            fmt.Println("Error in updating the SongsTableChangeSongSequenceOrder", err)
            c.JSON(400, gin.H{"updated": "error"})
            return
        }
    } else {

        response := helpers.Update_project_detail_by_column(uuid, Column_To_Update, New_Data, ProjectID)
        if response != nil {
            fmt.Println("error in Update_user_detail_by_column", response)
            c.JSON(400, gin.H{"updated": "error"})
            return
        }
    }

    c.JSON(200, gin.H{"updated": "success"})
    return
}

type Song struct {
    URL          string      `json:"URL"`
    SongName     string      `json:"SongName"`
    Duration     json.Number `json:"Duration"`
    SongSequence int         `json:"SongSequence"`
    Favourited   bool        `json:"Favourited"`
    FolderSize   int64       `json:"FolderSize"`
    Version      int         `json:"Version"`
}

type Project struct {
    ProjectJSON ProjectJSON `json:"ProjectJSON"`
    URL         string      `json:"PictureURL"`
}

type ProjectJSON []Song

func (pj *ProjectJSON) UnmarshalJSON(data []byte) error {
    var songs []Song
    if err := json.Unmarshal(data, &songs); err != nil {
        return err
    }
    *pj = songs
    return nil
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

    // Need to authorise the user, that they actually have the permission to being doing anything
    // with this project...
    authorised, err := helpers.Authorise(ProjectID, uuid, "owner")
    if err != nil {
        fmt.Println("There was an error with authorising the user: ", err)
    }
    if authorised != true {
        fmt.Println("The user is not authorised for this path.")
        c.JSON(403, gin.H{"error": "unauthorised"})
        return
    } 

    // Get data for processing of deletion
    project_json, err := helpers.GetProjectDetailsFromDatabase(uuid, ProjectID)
    if err != nil {
        fmt.Println(err)
    }

    // Properly parse project_json as json, and then get .ProjectJSON
    var project Project
    err = json.Unmarshal([]byte(project_json), &project)
    if err != nil {
        fmt.Println("Error parsing JSON:", err)
        return
    }

    // Delete the photo, unless the photo path starts with static/
    PhotoURL := project.URL
    prefix := "static/"
    if !strings.HasPrefix(PhotoURL, prefix) {
        err = helpers.DELETE_files_row(PhotoURL)
        if err != nil {
            fmt.Println("there was an error deleting the file from the files table: ", err)
        }

        err = helpers.DeleteFolder(PhotoURL)
        if err != nil {
            fmt.Println("there was an error deleting the file: ", err)
        }
    } 

    // Loop through all songs and delete their files and files database entry
    for _, song := range project.ProjectJSON {
        FileToDelete := song.URL
        err = helpers.DELETE_files_row(FileToDelete)
        if err != nil {
            fmt.Println("there was an error deleting the file from the files table: ", err)
        }

        // Delete songs_row
        err = helpers.DELETE_songs_row(FileToDelete)
        if err != nil {
            fmt.Println("there was an error deleting the file from the songs table: ", err)
        }

        err = helpers.DeleteFolder(FileToDelete)
        if err != nil {
            fmt.Println("there was an error deleting the file: ", err)
        }
    }

    // Delete the projects table row for the project
    err = helpers.DELETE_project_by_uuid_and_projectID(uuid, ProjectID)
    if err != nil {
        fmt.Println("there was an error deleting the project from the database: ", err)
    }


    c.JSON(200, gin.H{"deleted": "success"})
}


