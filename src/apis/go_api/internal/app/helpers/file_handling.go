package helpers

import (
	"fmt"
    "path/filepath"
    "os"
)

func DeleteFolder(url string) error {
	mediaPath := "/var/www/media"
	folderPath := filepath.Join(mediaPath, url)

	// Check if the folder exists
	_, err := os.Stat(folderPath)
	if os.IsNotExist(err) {
		fmt.Printf("The folder does not exist: %s\n", folderPath)
		return nil
	} else if err != nil {
		return fmt.Errorf("error checking folder existence: %v", err)
	}

	// Remove the folder
	err = os.RemoveAll(folderPath)
	if err != nil {
		return fmt.Errorf("error removing folder: %v", err)
	}

	//fmt.Printf("Folder deleted: %s\n", folderPath)
	return nil
}