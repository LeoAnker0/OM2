package routes

import (
    "github.com/gin-gonic/gin"
    "fmt"
    "io/ioutil"
    "encoding/json"
    "go_api/internal/app/helpers"
    "net/http"
    "time"
)

func SetupUserRoutes(router *gin.Engine) {
    userRoutes := router.Group("/apis/users")
    {
        userRoutes.GET("/prelogin", prelogin)
        userRoutes.POST("/login", login)
        userRoutes.GET("/get_user_details/:Wanted_Column", get_user_details)
        userRoutes.POST("/update_user_details", update_user_details)
        // ... other user routes
    }
}

type MyJSON struct {
    JWT string `json:"jwt"`
}

func prelogin(c *gin.Context) {
    // Get cookies and IP
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    valid, _ := helpers.Authenticate(jwt_token, clientIP)

    if valid == true {
        c.JSON(200, gin.H{"Authenticated": true})
        return

    } else {
        c.JSON(401, gin.H{"Authenticated": false})
    }

}

type Credentials struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

func login(c *gin.Context) {
    // Read the request body
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
        c.JSON(400, gin.H{"error": "Email is not valid"})
        return
    }

    // Check if password matches with the DB
    passwordMatches, err := helpers.PasswordHashMatchesEmail(password, email)
    if err != nil {
        fmt.Println(err)
    }
    if !passwordMatches {
        fmt.Println("the password didn't match")
        c.JSON(400, gin.H{"error": "login failed"})
        return
    }

    // call a helper function to genereate a jwt from  email
    jwt, err := helpers.Generate_JWT_by_email(email, clientIP)
    if err != nil {
        fmt.Println("there was a jwt error:", err)
        return
    }

    expiration := time.Now().Add((24 * 1) * time.Hour)

    // access-token set here
    /* in future add a switch so that when in prod mode
    the cookie has the correct security settings, but that
    dev gives me the needed flexibility. */
    cookie := &http.Cookie{
            Name:       "access-token",
            Value:      jwt,
            Path:       "/",
            Expires:    expiration,
            //HttpOnly:   true, // Set the HttpOnly flag to true
            //SameSite:   http.SameSiteNoneMode,
            //Secure:     true
        }

    http.SetCookie(c.Writer, cookie)

    c.JSON(200, gin.H{"Authenticated": true})
    return
}

type New_Data struct {
    Wanted_Column string `json:"wanted_column"`
}

func get_user_details(c *gin.Context) {
    Wanted_Column := c.Param("Wanted_Column")
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Get the item from the database
    validColumnsToRetrieve := []string{"last_state", "username", "profile_picture", "admin"}

    column_is_valid := helpers.Contains(validColumnsToRetrieve, Wanted_Column)

    if !column_is_valid {

        fmt.Println("The column is not open to being retrieved")
        response := map[string]interface{}{"authenticated": false}
        fmt.Println(response)
        c.JSON(400, gin.H{"Authenticated": false})
    }

    return_data, err := helpers.Get_user_detail_by_column(uuid, Wanted_Column)
    if err != nil {
        fmt.Println("there was a problem with getting the details", err)
        return
    }

    c.JSON(200, gin.H{"response": return_data})
}

type New_Update_Data struct {
    Column_To_Update string `json:"column_to_be_updated"`
    New_Data string `json:"new_data"`
}

func update_user_details(c *gin.Context) {
    // Read the request body
    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Convert the request body to a string
    requestBody := string(body)
    var new_data New_Update_Data
    err = json.Unmarshal([]byte(requestBody), &new_data)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    Column_To_Update := new_data.Column_To_Update
    New_Data := new_data.New_Data

    // Authenticate the user and if they aren't valid return them false.
    valid, uuid := helpers.Authenticate(jwt_token, clientIP)
    if valid != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Get the item from the database
    validColumnsToUpdate := []string{"last_state", "username"}

    column_is_valid := helpers.Contains(validColumnsToUpdate, Column_To_Update)

    if !column_is_valid {
        fmt.Println("The column is not open to being updated")
        response := map[string]interface{}{"authenticated": false}
        fmt.Println(response)
        c.JSON(400, gin.H{"Authenticated": false})
    }

    response := helpers.Update_user_detail_by_column(uuid, Column_To_Update, New_Data)
    if response != nil {
        fmt.Println("error in Update_user_detail_by_column", response)
    }

    c.JSON(200, gin.H{"updated": "success"})
}







