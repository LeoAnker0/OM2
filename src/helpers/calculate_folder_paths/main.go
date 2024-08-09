package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    // Define the two folder paths
    folder1 := "/Users/Leo_1/Documents/programming/web/adaptive-static-html-rendering/src/frontend/admin-server-web-interface"
    folder2 := "/Users/Leo_1/Documents/programming/web/adaptive-static-html-rendering/src/backend/global-resources/admin-server/core-web"

    // Calculate the relative path
    relativePath, err := filepath.Rel(folder1, folder2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Relative Path:", relativePath)
}
