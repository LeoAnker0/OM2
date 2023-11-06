package helpers

import (
    "fmt"
    "os"
    "database/sql"
    _ "github.com/lib/pq"
    "golang.org/x/crypto/bcrypt"


)

var db *sql.DB

func init() {
    user := os.Getenv("POSTGRES_USER")
    password := os.Getenv("POSTGRES_PASSWORD")
    dbname := os.Getenv("POSTGRES_DB")
    host := "postgres"
    port := 5432

    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

    var err error
    db, err = sql.Open("postgres", psqlInfo)
    if err != nil {
        panic(err)
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
