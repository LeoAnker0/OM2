package helpers

import (
    "net/mail"
    "regexp"
    "os"
    "path/filepath"
)

// IsValidEmail checks if an email address is valid
func IsValidEmail(emailAddress string) bool {
    // Parse the email address
    _, err := mail.ParseAddress(emailAddress)
    if err != nil {
        return false
    }

    // Check if the email address matches the email format regular expression
    validEmailFormat := regexp.MustCompile(`[^@]+@[^@]+\.[^@]+`)
    return validEmailFormat.MatchString(emailAddress)
}


func Contains(slice []string, s string) bool {
    for _, item := range slice {
        if item == s {
            return true
        }
    }
    return false
}

// GetFolderSize calculates the total size of all files in a folder.
func GetFolderSize(folderPath string) int64 {
    var totalSize int64
    filepath.Walk(folderPath, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            return err
        }
        if !info.IsDir() {
            totalSize += info.Size()
        }
        return nil
    })
    return totalSize
}

// RegecReplaceMap represents a map of replacements.
type RegexReplaceMap map[string]string

// RegexReplace replaces multiple placeholders in the original text with their respective replacement strings.
func RegexReplace(input string, replacements RegexReplaceMap) string {
    for placeholder, replacement := range replacements {
        // Escape special characters in the placeholder
        escapedPlaceholder := regexp.QuoteMeta(placeholder)

        // Create a regular expression pattern for the placeholder
        pattern := regexp.MustCompile("{{" + escapedPlaceholder + "}}")

        // Replace the placeholder with the replacement string
        input = pattern.ReplaceAllString(input, replacement)
    }

    return input
}