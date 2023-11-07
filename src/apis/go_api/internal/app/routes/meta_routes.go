package routes

import (
    "github.com/gin-gonic/gin"
    "os"
)

func SetupMetaRoutes(router *gin.Engine) {
    metaRoutes := router.Group("/apis/meta")
    {
        metaRoutes.GET("/are_signups_allowed", are_signups_allowed)
        // ... other user routes
    }
}

func are_signups_allowed(c *gin.Context) {
    signups_allowed := os.Getenv("NEW_SIGNUPS_ALLOWED")
    c.JSON(200, signups_allowed)
}