package main

import (
    "fmt"
    "os"
    "github.com/gin-gonic/gin"
    "go_api/internal/middlewares"
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

    fmt.Println("Successfully connected! and what ads's more, we've eaten cake")

    // Create a new Gin router
    r := gin.Default()

    r.Use(middlewares.CorsMiddleware())

    // Define a route for the root endpoint
    r.GET("/", func(c *gin.Context) {
        c.String(200, "Hello, World!")
    })

    // Run the application on port 6000
    r.Run(":6000")
}
