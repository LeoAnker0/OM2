package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    // Define the two folder paths
    folder1 := "/Users/Leo/Documents/programming/web/orange-music-2/src/web/om2"
    folder2 := "/Users/Leo/Documents/programming/web/orange-music-2/src/apis/go_api/static_web/"

    // Calculate the relative path
    relativePath, err := filepath.Rel(folder1, folder2)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Relative Path:", relativePath)
}
