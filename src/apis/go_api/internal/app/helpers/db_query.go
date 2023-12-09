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
    "sync"
)

var db *sql.DB
var dbReady chan struct{}
var once sync.Once

func init() {
    /* we now have it set up so that this is the first function that runs.
    We make sure that there is a successful database connection, and then when 
    there is we can then allow the main.go function to continue, this means that
    there will *hopefully* never be situations where the database connection
    has failed, but that the rest of the code which is reliant on that connection
    has started, which would result only in bitter tears. 
     */

    // Create the db ready struc
    dbReady = make(chan struct{})

    // Use sync.Once to ensure that the initialization is performed only once
    once.Do(initializeDatabase)    
}

func initializeDatabase() {
    /* Allow up to 15 connection attempts (perhaps excessive, however there might be an 
        occasion that calls for it, who knows.)
       As well as setting the retry interval to 10 seconds which is fair.
    */
    maxRetries := 15
    retryInterval := 10 * time.Second

    var err error
    for attempt := 1; attempt <= maxRetries; attempt++ {
        // Initialise values
        user := "postgres"
        password := os.Getenv("POSTGRES_PASSWORD")
        dbname := "music_streaming"
        host := "postgres"
        port := 5432
        psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

        // Try and connect to the database
        db, err = sql.Open("postgres", psqlInfo)
        if err == nil {
            // Success in connecting to the database
            fmt.Println("Connection to database a success")
            // Get the main process to start
            close(dbReady)
            break
        } else {
            fmt.Println("Error in connecting to database: ", err)
        }

        // A thing that will print the connection attempts 
        if attempt < maxRetries {
            fmt.Printf("Database connection attempt %d failed. Retrying in %v...\n", attempt, retryInterval)
            time.Sleep(retryInterval)
        } else {
            panic(err)
        }
        err = db.Ping()
        if err != nil {
            fmt.Println("Attempt %s, Error: %s", attempt, err)
        }
    }

}

func WaitUntilDBReady() {
    <-dbReady
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


func Update_song_detail_by_column(SongSequence, column_to_update, new_data, ProjectID, Version string) (error) {
    query := fmt.Sprintf(`UPDATE songs SET "%s" = $1 WHERE "SongSequence" = $2 AND "ProjectID" = $3 AND "Version" = $4`, column_to_update)

    _, err := db.Exec(query, new_data, SongSequence, ProjectID, Version)
    if err != nil {
        fmt.Println("error in Update_user_detail_by_column", err)
        return err
    }

    return nil
}

//func Update_the_order_of_songsSequnce_in_songs(ProjectID string, Mover, Destination int) (error) {
func Update_the_order_of_songsSequnce_in_songs(ProjectID, Mover, Destination string) (error) {
    /*
    ("UPDATE your_table SET number = $1 WHERE number = $2", destination, source)
    ("UPDATE your_table SET number = number + 1 WHERE number > $1", destination)
    query := fmt.Sprintf(`UPDATE songs SET "SongSequence" = "SongSequence" + 1 WHERE "SongSequence" >= $1 AND "ProjectID" = $2`)
    query = fmt.Sprintf(`UPDATE songs SET "SongSequence" = $1 WHERE "SongSequence" = $2 AND "ProjectID" = $3`)
    */


    /*

    To get updates working in the proper way I have to either go and set the value of the one that 
    I want being moved to 0, and then moving everything by one or something, but this doesn't even solve the problem
    since I still need to be able to move something 1 --> 5, whereas at the moment a single > --> 0 is possible, but
    not the other way around.

    My queries at the moment are insufficient to say the least. I however am struggling with what the correct way
    of doing them is.

    The problem is as goes: there is a list of SongSequences:
        1
        2
        3
        4
        5
        6
        7
        8
        9
        ...

    And first of all I want to move 6 --> 3 is, this would mean setting 6's value to 3, however 3 would have to be moved up
    and then 4 would need to be moved up, and 5 would need to be moved up. The problem, is how do we set 6 to 3, without
    then getting two 3's, not knowing how to distinguish between them and getting all sorts of nasty problems.
    Well, I could go and get the URL's of all the items, these are unique in a way a SongSequence isn't.
    It might also help with how in the future there will be able to be multiple items that have the same songSequence,
    but that should be intentional, and not as here where it is unintendedly happening.

    So if we were to get the URL's of all the songs inbetween the Mover and destination we would have ...

    I think the cheat with using 0 would be better, since it means less data moving. 
    so:
    * we set Mover.SongSequence = 0, 
    * figure out if will be moving upwards or downwards, 
    * if moving upwards, ie mover is greater than Destination
        * for all numbers between & including Destination --> Mover -1
            * SongSequence + 1
        Mover.SongSequence = Destination
    * else...
    */

    query := fmt.Sprintf(`UPDATE songs SET "SongSequence" = "SongSequence" + 1 WHERE "SongSequence" >= $1 AND "ProjectID" = $2`)

    _, err := db.Exec(query, Destination, ProjectID)
    if err != nil {
        fmt.Println("error in Update_the_order_of_songsSequnce_in_songs", err)
        return err
    }

    query = fmt.Sprintf(`UPDATE songs SET "SongSequence" = $1 WHERE "SongSequence" = $2 AND "ProjectID" = $3`)

    _, err = db.Exec(query, Mover, Destination, ProjectID)
    if err != nil {
        fmt.Println("error in Update_the_order_of_songsSequnce_in_songs", err)
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

func CheckIfUserExistsByEmail(email string) (bool, error) {
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

type SongTableStruct struct {
    URL             string  
    SongName        string
    Duration        int64
    SongSequence    int64
    Favourited      bool
    FolderSize      int64
    Version         int64
    ProjectID       string    
}


func GetProjectDetailsFromDatabase(uuid, ProjectID string) (string, error){    
    query := `
        SELECT
        json_build_object(
            'TimeCreated', p.time_created,
            'Description', p.description,
            'PictureURL', p.picture_url,
            'ProjectName', p.project_name,
            'ProjectContributors', p.project_contributors,
            'ProjectJSON', (
                SELECT json_agg(
                    json_build_object(
                        'URL', s."URL",
                        'SongName', s."SongName",
                        'Duration', s."Duration",
                        'SongSequence', s."SongSequence",
                        'Favourited', s."Favourited",
                        'FolderSize', s."FolderSize",
                        'Version', s."Version"
                    )
                    ORDER BY s."SongSequence" ASC -- Add this line to order by SongSequence
                )
                FROM songs s
                WHERE s."ProjectID" = p.project_id
            )
        ) AS combined_data
    FROM projects p
    WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND p.project_id = $2;
    `
    var combinedData string
    err := db.QueryRow(query, uuid, ProjectID).Scan(&combinedData)
    if err != nil {
        return "", err
    }

    return combinedData, nil
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

func CheckIfUUIDUnique(uuid string) (bool, error) {
    // Define your SQL query to count rows with the given projectID
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
    description := "Notes..."
    pictureURL := "static/default_pp"
    projectName := GenerateWhimsicalName()
    projectContributors := Username

    query := "INSERT INTO projects (owner, time_created, description, picture_url, project_id, project_name, project_contributors) VALUES (ARRAY[$1]::JSON[], $2, $3, $4, $5, $6, $7)"
    _, err = db.Exec(query, owner, fileCreatedTime, description, pictureURL, ProjectID, projectName, projectContributors)

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

func INIT_item_in_files_database(data FilesTableStruct) error {
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
    _, err = db.Exec(query, data.ProcessedState, data.FolderSize, data.URL, owners, data.FileType, data.FileCreationTime)
    if err != nil {
        fmt.Println("error in INIT_photo_files_database", err)
        return err
    }

    return nil
}


type UsersTableStruct struct {
    Username            string
    Password            string
    Email               string
    JoinDate            int64
    ProfileURL          string
    Description         string
    UUID                string
    LastLoggedIn        int64
    LastState           string
    Admin               bool
    Verified            bool
    StorageAllowance    int64
}

func INIT_user_in_database(data UsersTableStruct) error {
    query := "INSERT INTO users (username, email, password, profile_picture, uuid, description, date_joined, last_logged_in, verified, admin, storage_allowance, last_state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
    _, err := db.Exec(query, data.Username, data.Email, data.Password, data.ProfileURL, data.UUID, data.Description, data.JoinDate, data.LastLoggedIn, data.Verified, data.Admin, data.StorageAllowance, data.LastState)
    if err != nil {
        fmt.Println("error in INIT_user_in_database", err)
        return err
    }

    return nil
}

func INIT_song_in_songs_database(data SongTableStruct) error {
    query := `
        WITH seq_query AS (
            SELECT COALESCE(MAX("SongSequence"), 0) + 1 AS next_sequence
            FROM songs
            WHERE "ProjectID" = $1
        )
        INSERT INTO songs 
        (
            "URL", 
            "ProjectID", 
            "SongName", 
            "Duration", 
            "SongSequence", 
            "Favourited", 
            "FolderSize", 
            "Version"
        ) 
        SELECT 
            $2, $3, $4, $5, 
            sq.next_sequence, 
            $6, $7, $8
        FROM seq_query sq
    `

    // Execute the main query with the dynamic value for $5
    _, err := db.Exec(query, 
        data.ProjectID, 
        data.URL, 
        data.ProjectID,  // Corrected order of parameters
        data.SongName, 
        data.Duration, 
        data.Favourited, 
        data.FolderSize, 
        data.Version)

    if err != nil {
        fmt.Println("error in INIT_song_in_songs_database", err)
        return err
    }

    return nil
}


func checkOwnershipLevelOfProject(ProjectID, uuid string) (string, error) {
    query := `SELECT (SELECT unnest(owner)->>'permissions' 
              FROM projects 
              WHERE project_id = $1 
              AND (SELECT unnest(owner)->>'owner')::uuid = $2) AS permissions;
            `

    // Prepare the SQL statement
    rows, err := db.Query(query, ProjectID, uuid)
    if err != nil {
        return "", err
    }
    defer rows.Close()

    // Get the result
    var permissionLevel string
    for rows.Next() {
        err := rows.Scan(&permissionLevel)
        if err != nil {
            return "", err
        }
    }

    // Return the result
    return permissionLevel, nil
}