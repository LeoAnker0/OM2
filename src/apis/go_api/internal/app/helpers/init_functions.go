package helpers

import (
    "fmt"
    "os"
    "time"

)

/* init functions */
func EnsureAdminUserExists() {
    //Make surethat there is an admin user
    adminEmail := os.Getenv("OM2_ADMIN_USER_EMAIL")
    adminPassword := os.Getenv("OM2_ADMIN_PASSWORD")
    adminExists, err := CheckIfUserExistsByEmail(adminEmail)
    if err != nil {
        fmt.Println("Error in checking if admin email exists: ", err)
    }

    if adminExists {
        /*
            does passwordMatch the one ^
                update password
        */
    } else {
        // Since the admin user doesn't exist we will add an admin user to the database
        fmt.Println("Admin doesn't exist, creating")
        password, err := HashPassword(adminPassword)
        if err != nil {
            fmt.Println("There was an error with hashing the password: ", err)
        }

        // Get time
        currentTime := time.Now()
        unixMillis := currentTime.UnixNano() / int64(time.Millisecond)

        //Generate UUID
        uuid, err := Generate_Unique_UUID_String()
        if err != nil {
            fmt.Println("Error Generate_Unique_UUID_String: ",err)
        }

        userData := UsersTableStruct {
            Username:           "admin",
            Password:           password,
            Email:              adminEmail,
            Description:        "...",
            JoinDate:           unixMillis,
            ProfileURL:         "static/default_pfp",
            LastState:          "{}",
            UUID:               uuid,
            LastLoggedIn:       0,
            Admin:              true,
            Verified:           true,
            StorageAllowance:   1073741824/*1gb*/,
        }

        err = INIT_user_in_database(userData)
        if err != nil {
            fmt.Println("there was an error with putting the user into the database: ", err)
        }
    }
}