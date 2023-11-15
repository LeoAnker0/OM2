package main

import (
    "fmt"
    "os"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "go_api/internal/app/routes"
    "go_api/internal/app/helpers"
    "mime"
    "strings"
    "time"
    "path/filepath" // Add this line for the filepath package
)

func main() {
    // Ensure that everything is in order before the startup of the server part.
    //Make sure that the database is in a proper state
        /* laters */
    //Make sure that there is an admin user
    adminEmail := os.Getenv("OM2_ADMIN_USER_EMAIL")
    adminPassword := os.Getenv("OM2_ADMIN_PASSWORD")
    adminExists, err := helpers.CheckIfUserExistsByEmail(adminEmail)
    if err != nil {
        fmt.Println("Error in checking if admin email exists: ", err)
    }

    if adminExists {
        fmt.Println("admin exists")
    } else {
        // Since the admin user doesn't exist we will add an admin user to the database
        password, err := helpers.HashPassword(adminPassword)
        if err != nil {
            fmt.Println("There was an error with hashing the password: ", err)
        }

        // Get time
        currentTime := time.Now()
        unixMillis := currentTime.UnixNano() / int64(time.Millisecond)

        //Generate UUID
        uuid, err := helpers.Generate_Unique_UUID_String()
        if err != nil {
            fmt.Println("Error Generate_Unique_UUID_String: ",err)
        }

        userData := helpers.UsersTableStruct {
            Username:           "admin",
            Password:           password,
            Email:              adminEmail,
            Description:        "...",
            UserCreationTime:   unixMillis,
            ProfileURL:         "static/default_pfp",
            UUID:               uuid,
            LastLoggedIn:       0,
            Admin:              true,
            Verified:           true,
            StorageAllowance:   1073741824/*1gb*/,
        }

        err = helpers.INIT_user_in_database(userData)
        if err != nil {
            fmt.Println("there was an error with putting the user into the database: ", err)
        }
    }

    /*
        Check if admin exists
            if not
                username := "admin"
                password := helpers.HashPassword(adminPassword)
                email := adminEmail
                imageURL := "static/default_pfp"
                helpers.InsertNewUser(username, password, email, imageURL)
            else if adminExists
                does passwordMatch the one ^
                if not
                    update password
        Make sure that the admin has creds
        set the admin column of the user table for uuid to True

    */

    fmt.Println(adminEmail, adminPassword)

    // Initialize MIME types
    mime.AddExtensionType(".js", "application/javascript")

    // Create a new Gin router
    r := gin.Default()

    //// Use CORS middleware
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:5173", "https://testom2.la0.uk"} // Change this to the specific origins you want to allow
    config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
    config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
    config.AllowCredentials = true
    r.Use(cors.New(config))

    // Define a wildcard route to serve files from ./static_web
    r.NoRoute(func(c *gin.Context) {
        // Capture the requested path
        requestedPath := c.Request.URL.Path

        // Check if the requested path starts with "/media" and serve from "/var/www/media/"
        if strings.HasPrefix(requestedPath, "/media/") {
            // Remove the "/media/" prefix
            subPath := strings.TrimPrefix(requestedPath, "/media/")

            // Split the subPath by "/" to get the "id" and the requested file number
            parts := strings.Split(subPath, "/")
            if len(parts) >= 2 {
                id := parts[0]
                requestedFileNumber := parts[1]

                if id == "static" {
                    id := parts[1]
                    requestedFileNumber := parts[2]

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
                    switch requestedFileNumber {
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
                        fmt.Println("File number not found", requestedFileNumber)
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
                    } else {
                        // Serve the first matching file
                        c.File(files[0])
                        return
                    }
            } else {
                // Handle the case when the path is incomplete
                fmt.Println("Path not found")
                }

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
            switch requestedFileNumber {
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
                fmt.Println("File number not found", requestedFileNumber)
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
            } else {
                // Serve the first matching file
                c.File(files[0])
            }
        } else {
            // Handle the case when the path is incomplete
            fmt.Println("Path not found")
            return
        }
} else {
            // Construct the file path for the local "static_web" directory
            filePath := "./static_web" + requestedPath

            // Serve the file with the correct MIME type
            c.File(filePath)
            return
        }
    })

    // Create Gin routes
    routes.SetupRoutes(r)

    // Run the application on port 6000
    r.Run(":6000")
}