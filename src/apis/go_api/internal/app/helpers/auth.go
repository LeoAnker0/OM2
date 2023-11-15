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
    //fmt.Println("Authenticate: ", jwtToken)

    secretKey := os.Getenv("SECRET_JWT_KEY")
    claims := &Claims{}

    token, err := jwt.ParseWithClaims(jwtToken, claims, func(token *jwt.Token) (interface{}, error) {
        return []byte(secretKey), nil
    })

    if err != nil {
        fmt.Printf("JWT verification failed: %v\n", err, "%v\nThe token: ", jwtToken)
        return false, "notuuid"
    }

    if !token.Valid {
        fmt.Println("JWT is expired. Token has expired.")
        return false, "notuuid"
    }

    // Access the IP field from the claims
    /*
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
    }*/
    if 2 < 1 {
        fmt.Println(claims.IP)
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

func Authorise(ProjectID, uuid, minAuthLevel string) (bool, error) {
    var err error

    // Get auth level of the uuid in ProjectID of projects
    userAuthLevel, err := checkOwnershipLevelOfProject(ProjectID, uuid)
    if err != nil {
        fmt.Println("There was an error getting the owner string: ", err)
        return false, err
    }

    /* Take their level and turn it into a score of auth level,
        this means that an owner will be able to do something 
        that requires only editor status. (if that was ever necessary)
        */

    var authPoints int
    if userAuthLevel == "owner" {
        authPoints = 3
    } else if userAuthLevel == "editor" {
        authPoints = 2
    } else if userAuthLevel == "viewer" {
        authPoints = 1
    } else {
        authPoints = 0
    }

    /* check if authPoints are enough to pass min */
    if minAuthLevel == "owner" && authPoints >= 3 {
        return true, nil
    } else if minAuthLevel == "editor" && authPoints >= 2 {
        return true, nil
    } else if minAuthLevel == "viewer" && authPoints >= 1 {
        return true, nil
    } else {
        return false, nil
    }
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