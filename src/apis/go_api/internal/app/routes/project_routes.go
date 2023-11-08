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







