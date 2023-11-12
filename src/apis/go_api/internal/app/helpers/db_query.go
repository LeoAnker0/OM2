package helpers

import (
    "fmt"
    "os"
    "database/sql"
    _ "github.com/lib/pq"
    "github.com/lib/pq"
    "time"
    "golang.org/x/crypto/bcrypt"
    "encoding/json"
    _ "strings"


)

var db *sql.DB

func init() {
    maxRetries := 75
    retryInterval := 5 * time.Second

    var err error
    for attempt := 1; attempt <= maxRetries; attempt++ {
        user := os.Getenv("POSTGRES_USER")
        password := os.Getenv("POSTGRES_PASSWORD")
        dbname := os.Getenv("POSTGRES_DB")
        host := "postgres"
        port := 5432

        psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

        db, err = sql.Open("postgres", psqlInfo)
        if err != nil {
            fmt.Println("Error in connecting to database: ", err)
        } else if err == nil {
            fmt.Println("Connection to database a success")
            break
        }

        if attempt < maxRetries {
            fmt.Printf("Database connection attempt %d failed. Retrying in %v...\n", attempt, retryInterval)
            time.Sleep(retryInterval)
        } else {
            panic(err)
        }
    }

    err = db.Ping()
    if err != nil {
        panic(err)
    }
}

// IsEmailUnique checks if an email is unique in the database
func DoesEmailExist(email string) (bool, error) {
    // Define your SQL query to count rows with the given email
    query := "SELECT COUNT(*) FROM users WHERE email = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return false, err
    }
    defer stmt.Close()

    // Execute the query and retrieve the count
    var count int
    err = stmt.QueryRow(email).Scan(&count)
    if err != nil {
        return false, err
    }

    // Check if the email is unique (count == 0)
    if count > 0 {
        return true, nil
    } else {
        return false, nil
    }
}

func Get_UUID_by_email(email string) (string, error) {
    query := "SELECT uuid FROM users WHERE email = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return "", err
    }
    defer stmt.Close()

    // Execute the query and retrieve the UUID
    var uuid string
    err = stmt.QueryRow(email).Scan(&uuid)
    if err != nil {
        if err == sql.ErrNoRows {
            return "", nil // Email not found in the database
        }
        return "", err
    }

    return uuid, nil
}

func Get_user_detail_by_column(uuid, column string) (string, error) {
    query := fmt.Sprintf("SELECT %s FROM users WHERE uuid = $1;", column)

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return "", err
    }
    defer stmt.Close()

    // Execute the query and retrieve the UUID
    var detail string
    err = stmt.QueryRow(uuid).Scan(&detail)
    if err != nil {
        if err == sql.ErrNoRows {
            return "", nil // uuid not found in the database
        }
        return "", err
    }

    return detail, nil
}

func Update_user_detail_by_column(uuid, column_to_update, new_data string) (error) {
    query := fmt.Sprintf("UPDATE users SET %s = $1 WHERE uuid = $2", column_to_update)

    _, err := db.Exec(query, new_data, uuid)
    if err != nil {
        fmt.Println("error in Update_user_detail_by_column", err)
        return err
    }

    return nil
}


// PasswordHashMatchesEmail checks if the hashed password matches the email in the database
func PasswordHashMatchesEmail(password, email string) (bool, error) {
    // Define your SQL query to fetch the hashed password for the given email
    query := "SELECT password FROM users WHERE email = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return false, err
    }
    defer stmt.Close()

    // Execute the query and retrieve the hashed password
    var hashedPassword string
    err = stmt.QueryRow(email).Scan(&hashedPassword)
    if err != nil {
        if err == sql.ErrNoRows {
            return false, nil // Email not found in the database
        }
        return false, err
    }

    // Compare the hashed password with the provided password
    passwordMatch := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
    return passwordMatch == nil, nil
}

func checkIfUserExistsByUUID(uuid string) (bool, error) {
    // Define your SQL query to count rows with the given uuid
    query := "SELECT COUNT(*) FROM users WHERE uuid = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return false, err
    }
    defer stmt.Close()

    // Execute the query and retrieve the count
    var count int
    err = stmt.QueryRow(uuid).Scan(&count)
    if err != nil {
        return false, err
    }

    // Check if the uuid is unique (count == 0)
    if count > 0 {
        return true, nil
    } else {
        return false, nil
    }
}

type Project struct {
    TimeCreated          int
    PictureURL           string
    ProjectID            string
    ProjectName          string
    ProjectContributors  string
    ProjectJSON          string
    Description          string
}

func GetUsersProjects(uuid string, No_Library_Items_Wanted, No_Library_Items_Collected int) ([]Project, error) {
    offset := No_Library_Items_Collected

    query := `
        SELECT time_created, picture_url, project_id, project_name, project_contributors
        FROM projects
        WHERE (SELECT unnest(owner)->>'owner')::uuid = $1
        ORDER BY time_created DESC
        LIMIT $2
        OFFSET $3
    `

    rows, err := db.Query(query, uuid, No_Library_Items_Wanted, offset)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var projects []Project
    for rows.Next() {
        var project Project
        if err := rows.Scan(&project.TimeCreated, &project.PictureURL, &project.ProjectID, &project.ProjectName, &project.ProjectContributors); err != nil {
            return nil, err
        }
        projects = append(projects, project)
    }
    if err := rows.Err(); err != nil {
        return nil, err
    }

    return projects, nil
}

type Song struct {
    SongName     string `json:"song_name"`
    URL          string `json:"url"`
    Duration     json.Number    `json:"duration"`
    SongSequence int    `json:"song_sequence"`
    SongSize     int64
}

type SongsJSON struct {
    Songs []Song `json:"songs_json"`
}

func GetProjectDetailsFromDatabase(uuid, projectID string) (string, error){    
    query := `
        SELECT time_created, project_json, description, picture_url, project_name, project_contributors
        FROM projects
        WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND project_id = $2
        LIMIT 1
    `

    rows, err := db.Query(query, uuid, projectID)
    if err != nil {
        return "", err
    }
    defer rows.Close()

    var project Project
    for rows.Next() {
        if err := rows.Scan(&project.TimeCreated, &project.ProjectJSON, &project.Description, &project.PictureURL, &project.ProjectName, &project.ProjectContributors); err != nil {
            return "", err
        }
    }

    jsonStr := project.ProjectJSON

    var songsData SongsJSON
    err2 := json.Unmarshal([]byte(jsonStr), &songsData)
    if err2 != nil {
        fmt.Println("Error:", err2)
        return "", err2
    }

    var updatedSongsData SongsJSON
    for _, song := range songsData.Songs {
        folderSize := GetFolderSize("/var/www/media/" + song.URL + "/")
        song.SongSize = folderSize
        updatedSongsData.Songs = append(updatedSongsData.Songs, song)
    }

     // Marshal the updated songsData into a JSON string
    updatedJSON, err := json.Marshal(updatedSongsData)
    if err != nil {
        fmt.Println("Error:", err)
        return "", err
    }

    // Create json strings of objects
    updatedJSONString := string(updatedJSON)
    project.ProjectJSON = updatedJSONString

    projectJSON, err := json.Marshal(project)
    if err != nil {
        fmt.Println("Error:", err)
        return "", err
    }

    // Use strings.Replace to remove backslashes
    projectJSONString := string(projectJSON)
    return projectJSONString, nil
}

func CheckIfProjectIdUnique(projectID string) (bool, error) {
    // Define your SQL query to count rows with the given projectID
    query := "SELECT COUNT(*) FROM projects WHERE project_id = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return false, err
    }
    defer stmt.Close()

    // Execute the query and retrieve the count
    var count int
    err = stmt.QueryRow(projectID).Scan(&count)
    if err != nil {
        return false, err
    }

    // Check if the uuid is unique (count == 0)
    if count == 0 {
        return true, nil
    } else {
        return false, nil
    }
}

func CheckIfMediaURLUnique(url string) (bool, error) {
    // Define your SQL query to count rows with the given projectID
    query := "SELECT COUNT(*) FROM files WHERE file_url = $1"

    // Prepare the SQL statement
    stmt, err := db.Prepare(query)
    if err != nil {
        return false, err
    }
    defer stmt.Close()

    // Execute the query and retrieve the count
    var count int
    err = stmt.QueryRow(url).Scan(&count)
    if err != nil {
        return false, err
    }

    // Check if the uuid is unique (count == 0)
    if count == 0 {
        return true, nil
    } else {
        return false, nil
    }
}

func InitProjectInDatabase(Username, uuid, ProjectID string) error {
    jsonOwner := map[string]interface{}{
        "owner":       uuid,
        "permissions": "owner",
    }
    ownerJSON, err := json.Marshal(jsonOwner)
    if err != nil {
        return err
    }

    owner := string(ownerJSON)

    fileCreatedTime := int(time.Now().UnixNano() / int64(time.Millisecond))
    projectJSON := "{}"
    description := "Notes..."
    pictureURL := "static/default_pp"
    projectName := GenerateWhimsicalName()
    projectContributors := Username

    query := "INSERT INTO projects (owner, time_created, project_json, description, picture_url, project_id, project_name, project_contributors) VALUES (ARRAY[$1]::JSON[], $2, $3, $4, $5, $6, $7, $8)"
    _, err = db.Exec(query, owner, fileCreatedTime, projectJSON, description, pictureURL, ProjectID, projectName, projectContributors)

    return err
}

func Update_project_detail_by_column(uuid, column_to_update, new_data, ProjectID string) (error) {
    query := fmt.Sprintf("UPDATE projects SET %s = $1 WHERE (SELECT unnest(owner)->>'owner')::uuid = $2 AND project_id = $3", column_to_update)

    _, err := db.Exec(query, new_data, uuid, ProjectID)
    if err != nil {
        fmt.Println("error in Update_project_detail_by_column", err)
        return err
    }

    return nil
}

func DELETE_files_row(url string) error {
    query := "DELETE FROM files WHERE file_url = $1"

    _, err := db.Exec(query, url)
    if err != nil {
        fmt.Println("error in DELETE_files_row ", err)
        return err
    }

    return nil
}

func DELETE_project_by_uuid_and_projectID(uuid, ProjectID string) error {
    query := "DELETE FROM projects WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND project_id = $2"
    _, err := db.Exec(query, uuid, ProjectID)
    if err != nil {
        fmt.Println("error in Update_project_detail_by_column", err)
        return err
    }

    return nil
}

type FilesTableStruct struct {
    FolderSize          int64
    ProcessedState      string
    URL                 string
    FileCreationTime    int64
    UUID                string
    FileType            string
}

func INIT_photo_files_database(data FilesTableStruct) error {
    // Assuming the owner column is of type json[]
    jsonOwner := map[string]interface{}{
        "owner":       data.UUID,
        "permissions": "owner",
    }

    // Convert the JSON-like object to a JSON string
    ownerJSON, err := json.Marshal(jsonOwner)
    if err != nil {
        return err
    }

    // Create a slice of JSON strings
    owners := pq.Array([]string{string(ownerJSON)})

    // Execute the INSERT statement
    query := "INSERT INTO files (processed_state, file_size, file_url, owner, file_type, file_created_time) VALUES ($1, $2, $3, $4, $5, $6)"
    _, err2 := db.Exec(query, data.ProcessedState, data.FolderSize, data.URL, owners, data.FileType, data.FileCreationTime)
    if err2 != nil {
        fmt.Println("error in INIT_photo_files_database", err2)
        return err2
    }

    return nil
}














