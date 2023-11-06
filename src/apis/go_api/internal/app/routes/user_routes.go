package routes

import (
    "github.com/gin-gonic/gin"
    "io/ioutil"
    "fmt"
    "encoding/json"
    "go_api/internal/app/helpers"
)

func SetupUserRoutes(router *gin.Engine) {
    userRoutes := router.Group("/users")
    {
        userRoutes.POST("/prelogin", prelogin)
        userRoutes.POST("/login", login)
        // ... other user routes
    }
}

type MyJSON struct {
    JWT string `json:"jwt"`
}

func prelogin(c *gin.Context) {
    // Read the request body
    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    // Convert the request body to a string
    requestBody := string(body)
    var jwt_token MyJSON
    err = json.Unmarshal([]byte(requestBody), &jwt_token) // Use the existing 'err' variable
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    fmt.Println("Request Body:", jwt_token.JWT)
    valid, uuid := helpers.Authenticate(jwt_token.JWT)

    fmt.Println(valid, uuid)

    c.JSON(200, gin.H{"message": "Request body processed successfully"})
}

type Credentials struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

func login(c *gin.Context) {
    // Read the request body
    c.Status(200)


    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    // Convert the request body to a string
    requestBody := string(body)
    var credentials Credentials
    err = json.Unmarshal([]byte(requestBody), &credentials)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    email := credentials.Email
    password := credentials.Password
    clientIP := c.ClientIP()

    // Check if the email is unique
    emailExists, err := helpers.DoesEmailExist(email)
    if err != nil {
        c.JSON(500, gin.H{"error": "Error checking email uniqueness"})
        return
    }
    if !emailExists {
        fmt.Println("Email doesn't exist")
        c.JSON(400, gin.H{"error": "Email doesn't exist"})
        return
    }

    // Check if the email is a valid format
    isValid := helpers.IsValidEmail(email)
    if !isValid {
        fmt.Println("Email is not valid")
        fmt.Println("Email is not valid")
        c.JSON(400, gin.H{"error": "Email is not valid"})
        return
    }

    // Check if password matches with the DB
    passwordMatches, erro := helpers.PasswordHashMatchesEmail(password, email)
    if erro != nil {
        fmt.Println(erro)
    }
    if !passwordMatches {
        fmt.Println("the password didn't match")
        c.JSON(400, gin.H{"error": "login failed"})
        return
    }

    // call a helper function to genereate a jwt from  email
    jwt, error := helpers.Generate_JWT_by_email(email, clientIP)
    if error != nil {
        fmt.Println("there was a jwt error:", error)
        return
    }

    fmt.Println(jwt)

    c.JSON(200, gin.H{"Authenticated": true, "jwt":jwt})
    return

}