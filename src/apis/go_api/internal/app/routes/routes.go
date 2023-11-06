package routes

import "github.com/gin-gonic/gin"

func SetupRoutes(router *gin.Engine) {
    SetupUserRoutes(router)
    SetupMetaRoutes(router)
    // Add other route setup functions for different categories
}
