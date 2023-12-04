package routes

import (
    "github.com/gin-gonic/gin"
    "os"
)

func SetupMetaRoutes(router *gin.Engine) {
    metaRoutes := router.Group("/apis/meta")
    {
        metaRoutes.GET("/are_signups_allowed", are_signups_allowed)
        metaRoutes.GET("/signout", are_signups_allowed)
        // ... other user routes
    }
}

func are_signups_allowed(c *gin.Context) {
    signups_allowed := os.Getenv("NEW_SIGNUPS_ALLOWED")
    c.JSON(200, signups_allowed)
}

func signout(c *gin.Context) {
    // Set a new cookie with the same name, path, and domain but with MaxAge set to -1 to expire it
    c.SetCookie("access-token", "", -1, "/", "", false, true)

    // Send a JSON response
    c.JSON(200, gin.H{"message": "logged out"})
}