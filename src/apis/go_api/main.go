package main

import (
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "go_api/internal/app/routes"
    "go_api/internal/app/helpers"
    "mime"
)

func main() {
    // Ensure that everything is in order before the startup of the server part.
    helpers.WaitUntilDBReady()

    // Ensure that the admin user exists (so that the service is always accessible)
    helpers.EnsureAdminUserExists()

    // Initialize MIME types
    mime.AddExtensionType(".js", "application/javascript")

    // Create a new Gin router
    r := gin.Default()

    // Use CORS middleware
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:5173", "https://testom2.la0.uk"} // Change this to the specific origins you want to allow
    config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
    config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
    config.AllowCredentials = true
    r.Use(cors.New(config))

    // Create Gin routes
    routes.SetupRoutes(r)

    // Run the application on port 6000
    r.Run(":6000")
}