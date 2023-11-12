package routes

import (
    "fmt"
    "net/http"
    "io"
    "os"
    "path/filepath"
    "github.com/gin-gonic/gin"
    "go_api/internal/app/helpers"

)

func SetupFileUploadRoutes(router *gin.Engine) {
    projectRoutes := router.Group("/apis/files")
    {
        projectRoutes.POST("/upload_photo/:ProjectID", upload_image_file)
    }
}

/*
unique_filename_section = generate_uuid()
unique_filename = f"{unique_filename_section}_{file.filename}"
file_path = os.path.join(upload_dir, unique_filename)
with open(file_path, "wb") as f:
    shutil.copyfileobj(file.file, f)

chipmunk_processor_url = "http://chipmunk_processor:8001/process_photo/compress_and_index/"
payload = {"filePath": file_path, "uuid": uuid, "project_id": project_id}
response = requests.post(chipmunk_processor_url, json=payload)
if response.status_code != 200:
    print("Request failed with status code:", response.status_code)

response_data = response.json()
url = response_data.get("url", "")
await update_project_detail_in_database(uuid, project_id, "picture_url",
                                        url)
message = f"File {file.filename} uploaded successfully"
return JSONResponse(content={"message": message})
*/

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
    
    // Create the different qualities of images that we are looking for

    // Delete the temporary file

    // Initiate the different database things

    fmt.Println(uuid)




    c.JSON(200, gin.H{"ProjectID": ProjectID})
    return
}