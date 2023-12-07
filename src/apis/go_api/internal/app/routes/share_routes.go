package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "net/http"
    "os"
    "go_api/internal/app/helpers"

)

func SetupShareRoutes(router *gin.Engine) {
    shareRoutes := router.Group("/share")
    {
        shareRoutes.GET("/:shareID", returnShareHTML)
    }
}

func returnShareHTML(c *gin.Context) {
    shareID := c.Param("shareID")
    clientIP := c.ClientIP()


    fmt.Println("User has asked for the share of: ", shareID, " Their IP is: ", clientIP)

    
    b, err := os.ReadFile("templates/share-iframe-1.html") // just pass the file name
    if err != nil {
        fmt.Print(err)
    }

    iframeTemplate := string(b) // convert content to a 'string'

    replacements := helpers.RegexReplaceMap{
        "ShareReplaceID":   shareID,
        "ShareReplaceIP":   clientIP,
    }

    htmlString := helpers.RegexReplace(iframeTemplate, replacements)


    // Set the Content-Type header to indicate that you're sending HTML
    c.Header("Content-Type", "text/html")

    // Send the HTML string as the response
    c.String(http.StatusOK, htmlString)
    return
}