package routes

import (
    "go_api/internal/app/helpers"
    "github.com/gin-gonic/gin"
    "path/filepath"
    "time"
    "fmt"
    "os"
)

// Middleware function to check TTL
func TTLMiddleware(ttl time.Duration) gin.HandlerFunc {
    return func(c *gin.Context) {
        startTime := time.Now()

        // Process the request
        c.Next()

        // Check if the elapsed time exceeds TTL
        elapsed := time.Since(startTime)
        if elapsed > ttl {
            // If TTL exceeded, return a 404 response
            fmt.Println("Request took too long. TTL exceeded.")
            c.AbortWithStatusJSON(404, gin.H{"error": "Request took too long"})
        }
    }
}

func SetupStaticFileRoutes(router *gin.Engine) {
    // Define TTL duration of 30 days in seconds
    ttlDuration := 30 * 24 * time.Hour

    // Apply TTLMiddleware to all routes
    router.Use(TTLMiddleware(ttlDuration))

    // For serving all static media (created by om2)
    staticPathRoutes := router.Group("/media/static/")
    {
        staticPathRoutes.GET(":id/:fileQuality", handleStaticPath)
    }

    // For serving all user generated media
    mediaPathRoutes := router.Group("/media/")
    {
        mediaPathRoutes.GET(":id/:fileQuality", handleMediaPath)
    }

    // Define a wildcard route to match any route starting with /projects/
    router.GET("/projects/*any", func(c *gin.Context) {
        c.File("./static_web/index.html")
    })

    // For serving index.html (from /) and all web assets (css/js/svg...)
    coreWebPathRoutes := router.Group("/")
    {
        coreWebPathRoutes.GET(":requestedPath/:requestedFile", handleCoreWebFiles)
        coreWebPathRoutes.GET("", handleCoreWebFiles)
    }

    // Route for handling all other paths
    router.NoRoute(func(c *gin.Context) {
        c.File("./static_web/index.html")
        return
    })
}

// Media Path
func handleMediaPath(c *gin.Context) {
    id := c.Param("id")
    fileQuality := c.Param("fileQuality")

    err := helpers.UPDATE_Access_Time_Of_File_in_files(id)
    if err != nil {
        fmt.Println("There was an error incrementing the access counter", err)
    }

    // Construct the directory path for the "id"
    idDirPath := "/var/www/media/" + id

    // Check if the "id" directory exists
    _, err = os.Stat(idDirPath)
    if err != nil {
        // Handle the case when the "id" directory does not exist
        fmt.Println("the id doesn't exist, ", idDirPath)
        return
    }

    // Find a file with the requested number in the "id" directory
    var fileExtension string
    switch fileQuality {
    case "1":
        fileExtension = "1.*"
    case "2":
        fileExtension = "2.*"
    case "3":
        fileExtension = "3.*"
    case "4":
        fileExtension = "4.*"
    case "5":
        fileExtension = "5.*"
    case "6":
        fileExtension = "6.*"
    case "7":
        fileExtension = "7.*"
    case "8":
        fileExtension = "8.*"
    case "9":
        fileExtension = "9.*"
    case "0":
        fileExtension = "0.*"

    default:
        // Handle the case when the requested number is not valid
        fmt.Println("File number not found", fileQuality)
        return
    }

    // List files in the "id" directory
    files, err := filepath.Glob(idDirPath + "/*" + fileExtension)
    if err != nil {
        // Handle the error when listing files
        fmt.Println("Error listing files, ", err, files)
        return
    }

    if len(files) == 0 {
        // Handle the case when no matching file is found
        fmt.Println("File not found")
        return
    } else {
        // Serve the first matching file
        c.File(files[0])
        return
    }
}

// Static Path
func handleStaticPath(c *gin.Context) {
    id := c.Param("id")
    fileQuality := c.Param("fileQuality")

    // Construct the directory path for the "id"
    idDirPath := "./static_assets/" + id

    // Check if the "id" directory exists
    _, err := os.Stat(idDirPath)
    if err != nil {
        // Handle the case when the "id" directory does not exist
        fmt.Println("the id doesn't exist, ", idDirPath)
        return
    }

    // Find a file with the requested number in the "id" directory
    var fileExtension string
    switch fileQuality {
    case "1":
        fileExtension = "1.*"
    case "2":
        fileExtension = "2.*"
    case "3":
        fileExtension = "3.*"
    case "4":
        fileExtension = "4.*"
    case "5":
        fileExtension = "5.*"
    case "6":
        fileExtension = "6.*"
    case "7":
        fileExtension = "7.*"
    case "8":
        fileExtension = "8.*"
    case "9":
        fileExtension = "9.*"
    case "0":
        fileExtension = "0.*"

    default:
        // Handle the case when the requested number is not valid
        fmt.Println("File number not found", fileQuality)
        return
    }

    // List files in the "id" directory
    files, err := filepath.Glob(idDirPath + "/*" + fileExtension)
    if err != nil {
        // Handle the error when listing files
        fmt.Println("Error listing files, ", err, files)
        return
    }

    if len(files) == 0 {
        // Handle the case when no matching file is found
        fmt.Println("File not found")
        return
    } else {
        // Serve the first matching file
        c.File(files[0])
        return
    }
}

// Handle site files
func handleCoreWebFiles(c *gin.Context) {
    requestedFile := c.Param("requestedFile")
    requestedPath := c.Param("requestedPath")

    if requestedFile == "" {
        filePath := "./static_web/" + "index.html"

        // Serve the file with the correct MIME type
        c.File(filePath)
        return
    } else if requestedPath == "assets" {
        filePath := "./static_web/assets/" + requestedFile

        // Serve file
        c.File(filePath)
        return
    } else {
        return
    }
}

// Catch all for serving static assets related to the service, html, css, js, svg, etc...
func CatchAllForStaticWebFiles(r *gin.Engine) {
    // Define a wildcard route to serve files from ./static_web
    r.NoRoute(func(c *gin.Context) {
        // Capture the requested path
        requestedPath := c.Request.URL.Path

        // hard code for items that must be served from a root/ path
        if requestedPath == "/mask.png" {
            c.File("./static_web/mask.png")
            return
        }

        // if there really was no file that should be served, serve index.html
        fmt.Println("A path was requested that should not currently be served: ", requestedPath)
        c.File("./static_web/index.html")
        return
    })
}