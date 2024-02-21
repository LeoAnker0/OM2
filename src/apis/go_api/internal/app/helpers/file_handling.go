package helpers

import (
    ffmpeg "github.com/u2takey/ffmpeg-go"
    "path/filepath"
    "encoding/json"
    "strconv"
    "regexp"
	"fmt"
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
		Output(outputLow, ffmpeg.KwArgs{"q:a": "9"}).
		OverWriteOutput().
		Run()
	if err != nil {
		return err
	}

	// Convert audio to MP3 at medium quality
	err = ffmpeg.Input(inputPath).
		Output(outputMedium, ffmpeg.KwArgs{"c:a": "libmp3lame", "q:a": "4"}).
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


// AudioInfo represents the structure of the JSON data returned by ffmpeg.Probe
type AudioInfo struct {
	Streams []struct {
		Duration string `json:"duration"`
	} `json:"streams"`
	Format struct {
		Duration string `json:"duration"`
	} `json:"format"`
}

func GetAudioFileDuration(filename string) (int64, error) {
	info, err := ffmpeg.Probe(filename)
	if err != nil {
		return 0, err
	}

	// Unmarshal the JSON string into the AudioInfo struct
	var audioInfo AudioInfo
	err = json.Unmarshal([]byte(info), &audioInfo)
	if err != nil {
		return 0, err
	}

	str := fmt.Sprintf("%#v", audioInfo)
	number, err := extractNumber(str)
	if err != nil {
		fmt.Println("Error:", err)
		return 0, err
	}

	returnNumber := int64(number)

	return returnNumber, nil
}

func extractNumber(input string) (float64, error) {
	re := regexp.MustCompile(`[-+]?\d*\.?\d+`)
	matches := re.FindAllString(input, -1)

	if len(matches) > 0 {
		number, err := strconv.ParseFloat(matches[0], 64)
		if err != nil {
			return 0, err
		}
		return number, nil
	}

	return 0, fmt.Errorf("No number found in the input string")
}