// admin_routes.go

package routes

import (
    "go_api/internal/app/helpers"
    "github.com/gin-gonic/gin"
    "encoding/json"
    "io/ioutil"
    "strconv"
    "fmt"
)

func SetupAdminRoutes(router *gin.Engine) {
    metaRoutes := router.Group("/apis/admin")
    {
        metaRoutes.GET("/get_users_table", get_users_table)
        metaRoutes.POST("/update_user_details", admin_update_user_details)
    }
}

func get_users_table(c *gin.Context) {
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Authenticate the user and if they aren't valid return them false.
    authenticated, uuid := helpers.Authenticate(jwt_token, clientIP)
    if authenticated != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Ensure that the user is an admin (authorisation)
    adminStatus, err := helpers.Get_user_detail_by_column(uuid, "admin")
    if err != nil {
        fmt.Println("Error in Get_user_detail_by_column ", err)
    }
    if adminStatus != "true" {
        c.JSON(403, gin.H{"Authorised": false})
        return
    }

    // Get users table as json from db
    usersTable, err := helpers.GetUsersTable()
    if err != nil {
        fmt.Println("Error getting the users table", err)
        c.JSON(500, gin.H{"response": "error"})
        return
    }

    // Return response (already formatted as json)
    c.JSON(200, gin.H{"response": usersTable})
    return
}

type ADMIN_UPDATE_USER_DETAILS_STRUCT struct {
    User_To_Update_UUID string `json:"user_to_update_uuid"`
    Column_To_Update string `json:"column_to_be_updated"`
    New_Data interface{} `json:"new_data"`
}

func admin_update_user_details(c *gin.Context) {
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
    var new_data ADMIN_UPDATE_USER_DETAILS_STRUCT
    err = json.Unmarshal([]byte(requestBody), &new_data)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    UserToUpdate := new_data.User_To_Update_UUID
    ColumnToUpdate := new_data.Column_To_Update

    // Convert New_Data to the appropriate type
    var NewData string
    switch v := new_data.New_Data.(type) {
    case string:
        NewData = v
    case float64:
        NewData = strconv.Itoa(int(v))
    default:
        fmt.Println("New_Data has unexpected type:", v)
    }

    fmt.Println(UserToUpdate, ColumnToUpdate, NewData)

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Ensure that the user is an admin (authorisation)
    adminStatus, err := helpers.Get_user_detail_by_column(uuid, "admin")
    if err != nil {
        fmt.Println("Error in Get_user_detail_by_column ", err)
    }
    if adminStatus != "true" {
        c.JSON(403, gin.H{"Authorised": false})
        return
    }

    // Get the item from the database
    validColumnsToUpdate := []string{"username", "email", "description", "verified", "admin", "storage_allowance"}

    column_is_valid := helpers.Contains(validColumnsToUpdate, ColumnToUpdate)

    if !column_is_valid {
        fmt.Println("The column is not open to being updated")
        c.JSON(400, gin.H{"Error": "This column is not a valid target"})
        return
    }

    response := helpers.Update_user_detail_by_column(uuid, ColumnToUpdate, NewData)
    if response != nil {
        fmt.Println("error in Update_user_detail_by_column", response)
        c.JSON(500, gin.H{"Error": "Error updating column:"})
        return
    }

    c.JSON(200, gin.H{"updated": "success"})
    return
}

