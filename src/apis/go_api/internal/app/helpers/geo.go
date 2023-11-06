package helpers

import (
    "net/http"
    "encoding/json"
    "errors"
    "math"
    "strings"
    "strconv"
)

// GeoLocation represents the geolocation information.
type GeoLocation struct {
    IP       string `json:"ip"`
    City     string `json:"city"`
    Region   string `json:"region"`
    Country  string `json:"country"`
    Location string `json:"loc"`
}

// GeoLocationDistanceThreshold is the maximum allowed distance (in kilometers) for geolocations to be considered close.
const GeoLocationDistanceThreshold = 50.0 // Adjust this threshold as needed


// getGeolocation retrieves geolocation information for an IP address.
func getGeolocation(ip string) (GeoLocation, error) {
    url := "https://ipinfo.io/" + ip + "/json"
    
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        return GeoLocation{}, err
    }

    req.Header.Set("Accept", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return GeoLocation{}, err
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return GeoLocation{}, errors.New("Failed to retrieve geolocation data")
    }

    var location GeoLocation
    err = json.NewDecoder(resp.Body).Decode(&location)
    if err != nil {
        return GeoLocation{}, err
    }

    return location, nil
}


// GeoLocationIsClose checks if two geolocations are close within a specified threshold.
func GeoLocationIsClose(location1, location2 GeoLocation) bool {
    // Parse the latitude and longitude from the "loc" field of the GeoLocation
    lat1, lon1, err1 := parseLatLon(location1.Location)
    lat2, lon2, err2 := parseLatLon(location2.Location)

    if err1 != nil || err2 != nil {
        return false // Unable to parse coordinates
    }

    // Calculate the distance between the two points using the Haversine formula
    distance := haversine(lat1, lon1, lat2, lon2)

    // Check if the distance is within the threshold
    return distance <= GeoLocationDistanceThreshold
}

// parseLatLon parses latitude and longitude from the "lat,lon" format.
func parseLatLon(latLon string) (float64, float64, error) {
    parts := strings.Split(latLon, ",")
    if len(parts) != 2 {
        return 0.0, 0.0, errors.New("Invalid format")
    }

    lat, err1 := strconv.ParseFloat(parts[0], 64)
    lon, err2 := strconv.ParseFloat(parts[1], 64)

    if err1 != nil || err2 != nil {
        return 0.0, 0.0, errors.New("Invalid format")
    }

    return lat, lon, nil
}

// haversine calculates the great-circle distance between two points on the Earth's surface.
func haversine(lat1, lon1, lat2, lon2 float64) float64 {
    // Haversine formula
    dLat := toRadians(lat2 - lat1)
    dLon := toRadians(lon2 - lon1)

    a := math.Pow(math.Sin(dLat/2), 2) + math.Cos(toRadians(lat1)) * math.Cos(toRadians(lat2)) * math.Pow(math.Sin(dLon/2), 2)
    c := 2 * math.Atan2(math.Sqrt(a), math.Sqrt(1-a))
    earthRadius := 6371.0 // Radius of the Earth in kilometers

    return earthRadius * c
}

// toRadians converts degrees to radians.
func toRadians(degrees float64) float64 {
    return degrees * math.Pi / 180.0
}