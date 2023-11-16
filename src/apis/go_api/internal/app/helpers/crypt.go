package helpers

import (
    "golang.org/x/crypto/bcrypt"
)

func HashPassword(unHashedPassword string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(unHashedPassword), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}