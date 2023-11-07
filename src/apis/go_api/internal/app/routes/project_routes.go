package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "io/ioutil"
    "encoding/json"
    "go_api/internal/app/helpers"

)

func SetupProjectRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/projects")
    {
        projectRoutes.POST("/get_projects", get_projects)
    }
}

type Get_Projects_Data_Struct struct {
    JWT    string `json:"access-token"`
    No_Library_Items_Wanted int `json:"library_items_to_request_at_a_time"`
    No_Library_Items_Collected int `json:"no_library_datas_collected"`
}

func get_projects(c *gin.Context) {
    // Read the request body
    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    // Convert the request body to a string
    requestBody := string(body)
    var new_data Get_Projects_Data_Struct
    err = json.Unmarshal([]byte(requestBody), &new_data)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    jwt := new_data.JWT
    No_Library_Items_Wanted := new_data.No_Library_Items_Wanted
    No_Library_Items_Collected := new_data.No_Library_Items_Collected
    clientIP := c.ClientIP()

    if No_Library_Items_Wanted > 40 {
        No_Library_Items_Wanted = 40
    }

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    projects, err := helpers.GetUsersProjects(uuid, No_Library_Items_Wanted, No_Library_Items_Collected)
    if err != nil {
        fmt.Println("Error at get_projects, getting the project detailss", err)
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    c.JSON(200, gin.H{"projects": projects})

}








