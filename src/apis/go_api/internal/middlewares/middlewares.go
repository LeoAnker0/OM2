// cors_middleware.go

package middlewares

import (
    "fmt"
    "os"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

func CorsMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        // Check the environment variable "MODE"
        fmt.Println("middle wares started herehere")

        if mode := os.Getenv("MODE"); mode == "dev" {
            fmt.Println("middle wares dev mode")
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
            fmt.Println("middle wares prod mode")
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
