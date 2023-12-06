package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "net/http"
    //"go_api/internal/app/helpers"

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

    htmlString := fmt.Sprintf(`<h1>Hello, this is HTML content!<br>And the user has requested <pre>%s</pre></h1>`, shareID)

    // Set the Content-Type header to indicate that you're sending HTML
    c.Header("Content-Type", "text/html")

    // Send the HTML string as the response
    c.String(http.StatusOK, htmlString)
    return
}