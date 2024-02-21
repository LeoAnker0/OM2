package routes

import (
    "gopkg.in/gographics/imagick.v2/imagick"
    "go_api/internal/app/helpers"
    "github.com/gin-gonic/gin"
    "path/filepath"
    "net/http"
    "strconv"
    "strings"
    "time"
    "fmt"
    "io"
    "os"

)

func SetupFileUploadRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/files")
    {
        projectRoutes.POST("/upload_photo", upload_image_file)
        projectRoutes.POST("/upload_audio/:ProjectID", upload_audio_file)
    }
}


func upload_image_file(c *gin.Context) {
    ProjectID := c.Query("pi")
    menuType := c.Query("mt")

    file, header, err := c.Request.FormFile("file")
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "No file provided"})
        return
    }
    defer file.Close()

    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        fmt.Println("cookie error", err)
    }

    // Authenticate the user and if they aren't valid return them false.
    authenticated, uuid := helpers.Authenticate(jwt_token, clientIP)
    if authenticated != true {
        c.JSON(400, gin.H{"Authenticated": false})
        return
    }

    // Check if user is over their limits, if yes, return storage error
    storageUsed, err := helpers.GetStorageUsedByUser(uuid)
    if err != nil {
        fmt.Println("Error in GetStorageUsedByUser ", err)
    }

    storageAllowance, err := helpers.Get_user_detail_by_column(uuid, "storage_allowance")
    if err != nil {
        fmt.Println("Error in Get_user_detail_by_column ", err)
    }

    storageAllowance_u64, err := strconv.ParseUint(storageAllowance, 10, 64)
    if err != nil {
        fmt.Println(err)
    }

    if storageUsed > uint(storageAllowance_u64) {
        fmt.Println("the user is over their storage limit")
        c.String(200, "StorageLimit Reached")
        return
    } else {
        fmt.Println("storageUsed: ", storageUsed, "storageAllowance, ", storageAllowance)
    }

    if menuType == "update_project_image" {
        // Verify that the user should actually have access to the project
        authorised, err := helpers.Authorise(ProjectID, uuid, "editor")
        if err != nil {
            fmt.Println("There was an error with authorising the user: ", err)
        }
        if authorised != true {
            fmt.Println("The user is not authorised for this path.")
            c.JSON(403, gin.H{"error": "unauthorised"})
            return
        } 
    } else if menuType == "update_user_pfp" {

    } else {
        fmt.Println("there was an invalid image upload directive")
        c.JSON(403, gin.H{"error": "unauthorised"})
        return
    }


    // Create a unique filename
    temporary_file_uuid := helpers.GenerateUUID()
    filename := filepath.Join("/var/www/media/temp", temporary_file_uuid + "_" + header.Filename)
    

    // Create the file on the server
    newFile, err := os.Create(filename)
    if err != nil {
        if os.IsNotExist(err) {
            // Directory does not exist, create it
            dir := filepath.Dir(filename)
            if err := os.MkdirAll(dir, os.ModePerm); err != nil {
                fmt.Println("error creating directory:", err)
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create directory on server"})
                return
            }

            // Retry file creation after creating the directory
            newFile, err = os.Create(filename)
            if err != nil {
                fmt.Println("error creating file:", err)
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create file on server"})
                return
            }
        } else {
            // Handle other errors
            fmt.Println("error creating file:", err)
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create file on server"})
            return
        }
    }
    defer newFile.Close()

    // Copy the file content to the new file
    _, err = io.Copy(newFile, file)
    if err != nil {
        fmt.Println("error copying file content:", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to copy file content"})
        return
    }

    // Generate the proper filename string that we used before
    new_url, err2 := helpers.Generate_Unique_URL_String()
    if err2 != nil {
        fmt.Println("error creating url:", err2)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create an url"})
        return
    }
    
    // Create the different qualities of images that we are looking for
    StorageMode := os.Getenv("STORAGE_MODE")
    if StorageMode == "system" {
        var err error

        // Create a folder for these images
        dirPath := fmt.Sprintf("/var/www/media/%s", new_url)

        // Create the directory with 0755 permissions (you can adjust this)
        err1 := os.MkdirAll(dirPath, 0777)
        if err1 != nil {
            fmt.Println("Error creating directory:", err1)
            return
        }

        imagick.Initialize()
        // Schedule cleanup
        defer imagick.Terminate()

        mw := imagick.NewMagickWand()
        defer mw.Destroy()

        err = mw.ReadImage(filename)
        if err != nil {
            panic(err)
        }

        // Define qualities and sizes for the six copies
        qualities := []int{1, 40, 70, 80, 90, 95}
        sizes := []uint{10, 40, 160, 320, 720, 1080}

        // Iterate over qualities and sizes
        for i, quality := range qualities {
            size := sizes[i]

            // Clone the MagickWand to avoid modifying the original
            croppedWand := mw.Clone()
            defer croppedWand.Destroy()

            // Get the dimensions of the image
            width := croppedWand.GetImageWidth()
            height := croppedWand.GetImageHeight()

            // Determine the size for the square crop (choose the smaller dimension)
            var cropSize uint
            if width < height {
                cropSize = width
            } else {
                cropSize = height
            }

            // Crop the image to a square
            croppedWand.CropImage(cropSize, cropSize, 0, 0)
            croppedWand.ResizeImage(size, size, imagick.FILTER_LANCZOS, 1)


            // Set the compression quality
            croppedWand.SetImageCompressionQuality(uint(quality))

            // Store to the correct location
            identifier := i + 1
            outputPath := fmt.Sprintf("%s/%d.webp", dirPath, identifier)

            // Write the cropped and compressed image to a file
            if notError := croppedWand.WriteImage(outputPath); notError != nil {
                fmt.Printf("%v\n", notError)
            }
        }

        // Save a copy of the original file with a different name
        originalCopyPath := fmt.Sprintf("%s/0%s", dirPath, filepath.Ext(filename))
        if notError := mw.WriteImage(originalCopyPath); notError != nil {
            fmt.Printf("%v\n", notError)
        }

        // Delete the temporary file
        if err := os.Remove(filename); err != nil {
            fmt.Println("error deleting temporary file:", err)
            // Handle the error if necessary
        }

        // Initiate the different database things
            // Get the size of the folder
        folderSize := helpers.GetFolderSize(dirPath)

        currentTime := time.Now()
        unixMillis := currentTime.UnixNano() / int64(time.Millisecond)

        fileDataVar := helpers.FilesTableStruct {
            FolderSize:         folderSize,
            CacheState:         true,
            URL:                new_url,
            FileCreationTime:   unixMillis,
            LastTimeAccessed:   10000000000000,
            UUID:               uuid,
            FileType:           "photo",
        }

        // Update the files database to now have this image
        err = helpers.INIT_item_in_files_database(fileDataVar)
        if err != nil {
            fmt.Println("there was an error intialising the image in the files database: ", err)
        }

        if menuType == "update_project_image" {
            // Update the projects database, to set the column_to_update to "picture_url", and new data as new_url
            err = helpers.Update_project_detail_by_column(uuid, "picture_url", new_url, ProjectID)
            if err != nil {
                fmt.Println("there was an error intialising the image in the project database: ", err)
            }
        } else if menuType == "update_user_pfp" {
            err = helpers.Update_user_detail_by_column(uuid, "profile_picture", new_url)
            if err != nil {
                fmt.Println("there was an error intialising the image in the project database: ", err)
            }

        }

    } else {
        fmt.Println("that storage mode isn't supported yet: ", StorageMode)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid Storage Mode"})
        return
    }

    


    c.JSON(200, gin.H{"message": "success"})
    return
}

func upload_audio_file(c *gin.Context) {
    file, header, err := c.Request.FormFile("file")
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "No file provided"})
        return
    }
    defer file.Close()

    // Create a unique filename
    temporary_file_uuid := helpers.GenerateUUID()
    filename := filepath.Join("/var/www/media/temp", temporary_file_uuid + "_" + header.Filename)
    original_file_extension := filepath.Ext(filename)
    original_file_name := strings.TrimSuffix(header.Filename, original_file_extension)


    ProjectID := c.Param("ProjectID")
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

    
    // Check if user is over their limits, if yes, return storage error
    storageUsed, err := helpers.GetStorageUsedByUser(uuid)
    if err != nil {
        fmt.Println("Error in GetStorageUsedByUser ", err)
    }

    storageAllowance, err := helpers.Get_user_detail_by_column(uuid, "storage_allowance")
    if err != nil {
        fmt.Println("Error in Get_user_detail_by_column ", err)
    }

    storageAllowance_u64, err := strconv.ParseUint(storageAllowance, 10, 64)
    if err != nil {
        fmt.Println(err)
    }

    if storageUsed > uint(storageAllowance_u64) {
        fmt.Println("the user is over their storage limit")
        c.String(200, "StorageLimit Reached")
        return
    } else {
        fmt.Println("storageUsed: ", storageUsed, "storageAllowance, ", storageAllowance)
    }

    // Verify that the user should actually have access to the project
    authorised, err := helpers.Authorise(ProjectID, uuid, "editor")
    if err != nil {
        fmt.Println("There was an error with authorising the user: ", err)
    }
    if authorised != true {
        fmt.Println("The user is not authorised for this path.")
        c.JSON(403, gin.H{"error": "unauthorised"})
        return
    } 

    // Create the file on the server
    newFile, err := os.Create(filename)
    if err != nil {
        if os.IsNotExist(err) {
            // Directory does not exist, create it
            dir := filepath.Dir(filename)
            if err := os.MkdirAll(dir, os.ModePerm); err != nil {
                fmt.Println("error creating directory:", err)
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create directory on server"})
                return
            }

            // Retry file creation after creating the directory
            newFile, err = os.Create(filename)
            if err != nil {
                fmt.Println("error creating file:", err)
                c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create file on server"})
                return
            }
        } else {
            // Handle other errors
            fmt.Println("error creating file:", err)
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create file on server"})
            return
        }
    }
    defer newFile.Close()

    // Copy the file content to the new file
    _, err = io.Copy(newFile, file)
    if err != nil {
        fmt.Println("error copying file content:", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to copy file content"})
        return
    }

    // Generate the proper filename string that we used before
    new_url, err2 := helpers.Generate_Unique_URL_String()
    if err2 != nil {
        fmt.Println("error creating url:", err2)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create an url"})
        return
    }
    
    // Create the different qualities of images that we are looking for
    StorageMode := os.Getenv("STORAGE_MODE")
    if StorageMode == "system" {
        var err error

        // Create a folder for these images
        dirPath := fmt.Sprintf("/var/www/media/%s", new_url)

        // Create the directory with 0777 permissions (you can adjust this)
        err = os.MkdirAll(dirPath, 0777)
        if err != nil {
            fmt.Println("Error creating directory:", err)
            return
        }

        // Create filepath names
        inputFile := filename
        outputLow := fmt.Sprintf("%s/1.mp3", dirPath)
        outputMedium := fmt.Sprintf("%s/2.mp3", dirPath)
        outputHigh := fmt.Sprintf("%s/3.mp3", dirPath)
        outputOriginal := fmt.Sprintf("%s/0%s", dirPath, filepath.Ext(filename))

        // Get the duration of the song
        duration, err := helpers.GetAudioFileDuration(filename)
        if err != nil {
            fmt.Println("Error:", err)
        }

        // Process the audio
        err = helpers.ConvertAudioToMP3(inputFile, outputLow, outputMedium, outputHigh, outputOriginal)
        if err != nil {
            fmt.Println("There was an error converting the audio to mp3: ", err)
        }

        // Delete the temporary file
        if err = os.Remove(filename); err != nil {
            fmt.Println("error deleting temporary file:", err)
            // Handle the error if necessary
        }

        // Initiate the different database things
        folderSize := helpers.GetFolderSize(dirPath)
        
        currentTime := time.Now()
        unixMillis := currentTime.UnixNano() / int64(time.Millisecond)

        fileDataVar := helpers.FilesTableStruct {
            FolderSize:         folderSize,
            CacheState:         true,
            URL:                new_url,
            FileCreationTime:   unixMillis,
            LastTimeAccessed:   0,
            UUID:               uuid,
            FileType:           "audio",
        }

        // Update the files database to now have this image
        err = helpers.INIT_item_in_files_database(fileDataVar)
        if err != nil {
            fmt.Println("there was an error intialising the image in the files database: ", err)
        }


        

        // Update the SongsData to add a song to the end of it.
        songsData := helpers.SongTableStruct {
            URL:                new_url,
            SongName:           original_file_name,
            Duration:           duration,
            Favourited:         false,
            FolderSize:         folderSize,
            SongSequence:       10000000000000,
            Version:            1,    
            ProjectID:          ProjectID,                                 
        }

        err = helpers.INIT_song_in_songs_database(songsData)
        if err != nil {
            fmt.Println("there was an error intialising the image in the files database: ", err)
        }


        //fmt.Println(ProjectID, err, fileDataVar, songsData)

    } else {
        fmt.Println("that storage mode isn't supported yet: ", StorageMode)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid Storage Mode"})
        return
    }

    


    c.JSON(200, gin.H{"message": "success"})
    return
}

