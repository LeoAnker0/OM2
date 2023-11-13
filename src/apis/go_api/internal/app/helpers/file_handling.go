package helpers

import (
	"fmt"
    "path/filepath"
    "os"
    ffmpeg "github.com/u2takey/ffmpeg-go"

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


func ConvertAudioToMP3(inputPath, outputLow, outputMedium, outputHigh, outputOriginal string) error {
	// Save the original audio file as a copy
	err := ffmpeg.Input(inputPath).
		Output(outputOriginal).
		OverWriteOutput().
		Run()
	if err != nil {
		return err
	}

	// Convert audio to MP3 at low quality
	err = ffmpeg.Input(inputPath).
		Output(outputLow, ffmpeg.KwArgs{"q:a": "8"}).
		OverWriteOutput().
		Run()
	if err != nil {
		return err
	}

	// Convert audio to MP3 at medium quality
	err = ffmpeg.Input(inputPath).
		Output(outputMedium, ffmpeg.KwArgs{"c:a": "libmp3lame", "q:a": "3"}).
		OverWriteOutput().
		Run()
	if err != nil {
		return err
	}

	// Convert audio to MP3 at high quality
	err = ffmpeg.Input(inputPath).
		Output(outputHigh, ffmpeg.KwArgs{"c:a": "libmp3lame", "q:a": "0", "b:a": "360k"}).
		OverWriteOutput().
		Run()
	if err != nil {
		return err
	}

	return nil
}