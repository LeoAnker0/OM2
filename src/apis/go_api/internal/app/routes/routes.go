package routes

import "github.com/gin-gonic/gin"

func SetupRoutes(router *gin.Engine) {
    SetupUserRoutes(router)
    SetupMetaRoutes(router)
    SetupProjectRoutes(router)
    SetupFileUploadRoutes(router)
    SetupSearchRoutes(router)
    SetupAdminRoutes(router)
    SetupShareRoutes(router)
    SetupStaticFileRoutes(router)
    //CatchAllForStaticWebFiles(router)
    // Add other route setup functions for different categories
}
