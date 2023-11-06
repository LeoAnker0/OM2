package main

import (
    "fmt"
    "os"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
    "go_api/internal/app/routes"
    "database/sql"
    _ "github.com/lib/pq"
)

func main() {
    user := os.Getenv("POSTGRES_USER")
    password := os.Getenv("POSTGRES_PASSWORD")
    dbname := os.Getenv("POSTGRES_DB")

    const (
        host     = "postgres"
        port     = 5432
    )

    psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
        "password=%s dbname=%s sslmode=disable",
        host, port, user, password, dbname)

    db, err := sql.Open("postgres", psqlInfo)
    if err != nil {
        panic(err)
    }
    defer db.Close()
    err = db.Ping()
    if err != nil {
        panic(err)
    }

    // Create a new Gin router
    r := gin.Default()

    // Use CORS middleware
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:5173"} // Change this to the specific origins you want to allow
    config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
    r.Use(cors.New(config))

    routes.SetupRoutes(r)

    // Run the application on port 6000
    r.Run(":6000")
}
