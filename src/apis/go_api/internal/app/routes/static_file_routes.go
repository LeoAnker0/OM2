package routes

import (
    "path/filepath"
    "github.com/gin-gonic/gin"
    "os"
    "fmt"
    //"strings"
    //"go_api/internal/app/helpers"
)

func SetupStaticFileRoutes(router *gin.Engine) {
    staticPathRoutes := router.Group("/media/static/")
    {
        staticPathRoutes.GET(":id/:fileQuality", handleStaticPath)
    }

    mediaPathRoutes := router.Group("/media/")
    {
        mediaPathRoutes.GET(":id/:fileQuality", handleMediaPath)
    }
}

// Media Path
func handleMediaPath(c *gin.Context) {
    id := c.Param("id")
    fileQuality := c.Param("fileQuality")

    // Construct the directory path for the "id"
    idDirPath := "/var/www/media/" + id

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

// Catch all for serving static assets related to the service, html, css, js, svg, etc...
func CatchAllForStaticWebFiles(r *gin.Engine) {
    // Define a wildcard route to serve files from ./static_web
    r.NoRoute(func(c *gin.Context) {
        // Capture the requested path
        requestedPath := c.Request.URL.Path

        // Construct the file path for the local "static_web" directory
        filePath := "./static_web" + requestedPath

        // Serve the file with the correct MIME type
        c.File(filePath)
        return
    })
}