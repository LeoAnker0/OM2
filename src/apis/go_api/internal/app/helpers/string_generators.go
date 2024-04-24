package helpers

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
	"github.com/google/uuid"
)

func Generate_Unique_Short_String() (string, error) {
	rand.Seed(time.Now().UnixNano())
	minLength := 2

	for {
		minLength++
		newString := generateRandomString(minLength)
		IsUnique, err := CheckIfProjectIdUnique(newString) 
		if err != nil {
			fmt.Println(err)
			return "", err
		}

		if IsUnique == true {
			return newString, err
		}

		if minLength > 100 {
			fmt.Println("error generating new string")
			panic("couldn't generate a string")
		}

	}
}

func GenerateUUID() string {
	// Generate a new UUID (UUIDv4)
	uuidV4 := uuid.New()

	// Convert UUID to string representation
	uuidString := uuidV4.String()

	return uuidString
}

func generateURL() string {
	urlLength := 30
	urlCharacters := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())

	// Generate the random URL
	var result string
	for i := 0; i < urlLength; i++ {
		result += string(urlCharacters[rand.Intn(len(urlCharacters))])
	}

	return result
}

func Generate_Unique_URL_String() (string, error) {
	rand.Seed(time.Now().UnixNano())
	repetitions := 0

	for {
		url := generateURL()
		IsUnique, err := CheckIfMediaURLUnique(url) 
		if err != nil {
			fmt.Println(err)
			return "", err
		}

		if IsUnique == true {
			return url, err
		}

		repetitions++
		if repetitions > 100 {
			fmt.Println("error generating new url string")
			panic("couldn't generate a urlstring")
		}

	}
}

func Generate_Unique_UUID_String() (string, error) {
	rand.Seed(time.Now().UnixNano())
	repetitions := 0

	for {
		uuid := GenerateUUID()
		IsUnique, err := CheckIfUUIDUnique(uuid) 
		if err != nil {
			fmt.Println(err)
			return "", err
		}

		if IsUnique == true {
			return uuid, err
		}

		repetitions++
		if repetitions > 100 {
			fmt.Println("error generating new url string")
			panic("couldn't generate a urlstring")
		}

	}
}

func generateRandomString(length int) string {
	const charset = "abcdefghijklmnopqrstuvwxyz0123456789"
	var result strings.Builder
	for i := 0; i < length; i++ {
		randomIndex := rand.Intn(len(charset))
		result.WriteByte(charset[randomIndex])
	}
	return result.String()
}

func GenerateWhimsicalName() string {
	rand.Seed(time.Now().UnixNano())

	adjectives := []string{
		"happy", "sad", "brave", "shy", "friendly", "clever", "silly", "loud",
		"quiet", "colorful", "spicy", "sweet", "bitter", "tall", "short",
		"young", "old", "big", "small", "fast", "slow", "hot", "cold",
		"bright", "dark", "soft", "hard", "smooth", "rough", "smooth", "fuzzy",
		"noisy", "peaceful", "lucky", "unlucky", "heavy", "light", "wild",
		"gentle", "serious", "playful", "proud", "humble", "sleepy", "awake",
		"clumsy", "graceful", "curious", "wise", "foolish", "orange", "red",
		"yellow", "blue", "teal", "purple", "ochre", "umbre",
	}

	nouns := []string{
		"apple", "banana", "cat", "dog", "elephant", "flower", "guitar",
		"house", "ice cream", "jacket", "kite", "lamp", "mountain", "nest",
		"ocean", "pencil", "queen", "river", "sun", "tree", "umbrella",
		"volcano", "waterfall", "xylophone", "yacht", "zebra",
	}

	randomAdjective := adjectives[rand.Intn(len(adjectives))]
	randomNoun := nouns[rand.Intn(len(nouns))]

	return fmt.Sprintf("%s %s", strings.Title(randomAdjective), strings.Title(randomNoun))
}