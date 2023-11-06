// app/helpers/auth.go

package helpers

import (
    "fmt"
    "github.com/dgrijalva/jwt-go"
    "os"
    "time"
)

// Claims represents the JWT claims structure.
type Claims struct {
    UUID string `json:"uuid"`
    jwt.StandardClaims
}

// VerifyJWT verifies a JWT token and checks if the user exists.
func Authenticate(jwtToken string) (bool, string) {
    secretKey := os.Getenv("SECRET_JWT_KEY")
    claims := &Claims{}

    fmt.Println(jwtToken)

    token, err := jwt.ParseWithClaims(jwtToken, claims, func(token *jwt.Token) (interface{}, error) {
        return []byte(secretKey), nil
    })

    if err != nil {
        fmt.Printf("JWT verification failed: %v\n", err)
        return false, "notuuid"
    }

    if !token.Valid {
        fmt.Println("JWT is expired. Token has expired.")
        return false, "notuuid"
    }

    if uuid := claims.UUID; uuid != "" {
        // Check if the user with the UUID exists
        exists := checkIfUserExistsByUUID(uuid)
        if exists {
            return true, uuid
        }
        fmt.Printf("the user does not exist: %v\nthe user is not valid: %v\n", exists, uuid)
    }

    return false, "notuuid"
}

func Generate_JWT_by_email(email, clientIP string) (string, error) {
    uuid, err := Get_UUID_by_email(email)
    if err != nil {
        fmt.Println(err)
    }

    secretKey := os.Getenv("SECRET_JWT_KEY")
    jwtSecret := []byte(secretKey)


    // Create a new token with the standard claims
    token := jwt.New(jwt.SigningMethodHS256)

    // Create custom claims
    claims := jwt.MapClaims{
        "uuid": uuid,
        "ip":clientIP,
        "exp":     time.Now().Add(time.Hour * 24).Unix(), // Token expiration time (e.g., 24 hours)
    }

    token.Claims = claims

    // Sign the token with your secret key
    tokenString, err := token.SignedString(jwtSecret)
    if err != nil {
        return "", err
    }

    return tokenString, nil
}


func checkIfUserExistsByUUID(uuid string) bool {
    // Implement your user existence check logic here
    // Return true if the user exists, false otherwise
    fmt.Println("verify user")
    return false
}
