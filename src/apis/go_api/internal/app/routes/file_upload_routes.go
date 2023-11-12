package routes

import (
    "fmt"
    "net/http"
    "io"
    "os"
    "path/filepath"
    "github.com/gin-gonic/gin"
    "go_api/internal/app/helpers"
    "gopkg.in/gographics/imagick.v2/imagick"
    "time"

)

func SetupFileUploadRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/files")
    {
        projectRoutes.POST("/upload_photo/:ProjectID", upload_image_file)
    }
}



func upload_image_file(c *gin.Context) {
    file, header, err := c.Request.FormFile("file")
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "No file provided"})
        return
    }
    defer file.Close()

    // Create a unique filename
    temporary_file_uuid := helpers.GenerateUUID()
    filename := filepath.Join("/var/www/media/temp", temporary_file_uuid + "_" + header.Filename)

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

    // Create the file on the server
    newFile, err := os.Create(filename)
    if err != nil {
        fmt.Println("error creating file:", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create file on server"})
        return
    }
    defer newFile.Close()

    // Copy the file content to the new file
    _, err = io.Copy(newFile, file)
    if err != nil {
        fmt.Println("error copying file content:", err)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to copy file content"})
        return
    }

    /* At this point we have the file like we did in the old python iteration
    before we sent it to chipmunk, however we are not going to do chipmunk 
    this time around, so instead i'm just going to do the file processing 
    in this function as well, since this will be the route through which image 
    files are uploaded to the server.
    */

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
            ProcessedState:     "finished",
            URL:                new_url,
            FileCreationTime:   unixMillis,
            UUID:               uuid,
            FileType:           "local/image",
        }

        // Update the files database to now have this image
        err2 := helpers.INIT_photo_files_database(fileDataVar)
        if err2 != nil {
            fmt.Println("there was an error intialising the image in the files database: ", err2)
        }

        // Update the projects database, to set the column_to_update to "picture_url", and new data as new_url
        err3 := helpers.Update_project_detail_by_column(uuid, "picture_url", new_url, ProjectID)
        if err3 != nil {
            fmt.Println("there was an error intialising the image in the project database: ", err3)
        }

    } else {
        fmt.Println("that storage mode isn't supported yet: ", StorageMode)
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid Storage Mode"})
        return
    }

    


    c.JSON(200, gin.H{"message": "success"})
    return
}