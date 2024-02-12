// admin_routes.go

package routes

import (
    "go_api/internal/app/helpers"
    "github.com/gin-gonic/gin"
    "fmt"
)

func SetupAdminRoutes(router *gin.Engine) {
    metaRoutes := router.Group("/apis/admin")
    {
        metaRoutes.GET("/get_users_table", get_users_table)
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

