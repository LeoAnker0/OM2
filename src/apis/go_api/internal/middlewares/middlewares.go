// cors_middleware.go

package middlewares

import (
    "os"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

func CorsMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        // Check the environment variable "MODE"
        if mode := os.Getenv("MODE"); mode == "dev" {
            // Configuration for development mode
            config := cors.DefaultConfig()
            config.AllowOrigins = []string{
                "https://" + os.Getenv("MAIN_DOMAIN"),
                "http://localhost:5173",
                "https://testom2.la0.uk",
                "https://om2.la0.uk",
                "http://localhost:11001",
            }
            config.AllowCredentials = true
            config.AllowMethods = []string{"*"}
            config.AllowHeaders = []string{"*"}

            cors.New(config)(c)
        } else {
            // Configuration for other modes
            config := cors.DefaultConfig()
            config.AllowOrigins = []string{"https://" + os.Getenv("MAIN_DOMAIN")}
            config.AllowCredentials = true
            config.AllowMethods = []string{"*"}
            config.AllowHeaders = []string{"*"}

            cors.New(config)(c)
        }
    }
}
