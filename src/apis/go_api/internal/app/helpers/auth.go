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
    IP  string `json:"ip"`
}

// VerifyJWT verifies a JWT token and checks if the user exists.
func Authenticate(jwtToken, clientIP string) (bool, string) {
    secretKey := os.Getenv("SECRET_JWT_KEY")
    claims := &Claims{}

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

    // Access the IP field from the claims
    if claims.IP != "" {
        ip := claims.IP
        geo_jwt, err := getGeolocation(ip)
        if err != nil {
            fmt.Println("The geoloaction getter for get_jwt ip failed")
            return false, "notip"
        }
        geo_client, err := getGeolocation(clientIP)
        if err != nil {
            fmt.Println("The geoloaction getter for get_jwt ip failed")
            return false, "notip"
        }

        client_is_close_enough := GeoLocationIsClose(geo_jwt, geo_client)
        if client_is_close_enough != true {
            fmt.Println("IP from JWT:", ip, geo_jwt)
            fmt.Println("IP from client:", clientIP, geo_client)
        }

    } else {
        fmt.Println("IP field not found in JWT claims")
    }

    if uuid := claims.UUID; uuid != "" {
        // Check if the user with the UUID exists
        exists, err := checkIfUserExistsByUUID(uuid)
        if err != nil {
            fmt.Printf("Checking that the user existed failed: %v\n", err)
            return false, "notuuid"
        }
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