// search.go
package routes

import (
    "go_api/internal/app/helpers"
    "github.com/gin-gonic/gin"
    "encoding/json"
    "io/ioutil"
    "fmt"
)

func SetupSearchRoutes(router *gin.Engine) {
    metaRoutes := router.Group("/apis/users")
    {
        metaRoutes.POST("/search", userSearchQuery)
    }
}

func userSearchQuery(c *gin.Context) {
    // Get cookies and IP
    clientIP := c.ClientIP()
    jwt_token, err := c.Cookie("access-token")
    if err != nil {
        if err.Error() == "http: named cookie not present" {
            c.JSON(401, gin.H{"Authenticated": false})
            return
        }

        fmt.Println("cookie error", err)
    }

    valid, uuid := helpers.Authenticate(jwt_token, clientIP)

    if valid == false {
        c.JSON(401, gin.H{"Authenticated": false})
        return
    } 


	// Read the request body
    body, err := ioutil.ReadAll(c.Request.Body)
    if err != nil {
        c.JSON(400, gin.H{"error": "Failed to read request body"})
        return
    }

    // Convert the request body to a string
    requestBody := string(body)
    var searchQuery UserSearchQueryStruct
    err = json.Unmarshal([]byte(requestBody), &searchQuery)
    if err != nil {
        // Handle the error, e.g., invalid JSON
        fmt.Println("there was a problem with unmarshaling the JSON", err)
        return
    }

    searchResults, err := helpers.USERSprojectSearch(searchQuery.Query, uuid)
    if err != nil {
    	fmt.Println("There was an error getting search results", err)
        c.JSON(400, gin.H{"error": "Failed to process search query"})
    	return 
    }

    returnHTML := ""

    for i := 0; i < len(searchResults); i++ {
    	searchResultType := searchResults[i].Type
    	if searchResultType == "song" {
    		songHTML := fmt.Sprintf(`
			<button class="SEARCH-ResponsesItemResponse" data-om2-search-object-projectID="%v" data-om2-search-object-songURL="%v">
	            <div class="SEARCH-ResponsesItemResponse-ImageContainer"><img src="/media/%v/3"></div>
	            <div class="SEARCH-ResponsesItemResponse-TitleContainer">%v</div>
	            <div class="SEARCH-ResponsesItemResponse-ContributorsContainer">%v ∙ %v</div>
	        </button>`, searchResults[i].ProjectID, searchResults[i].URL, searchResults[i].ProjectImage, searchResults[i].Name, "Song", searchResults[i].ProjectName)

			returnHTML = returnHTML +   songHTML      	
    	} 

    	if searchResultType == "project" {
    		projectHTML := fmt.Sprintf(`
			<button class="SEARCH-ResponsesItemResponse" data-om2-search-object-projectID="%v">
	            <div class="SEARCH-ResponsesItemResponse-ImageContainer"><img src="/media/%v/3"></div>
	            <div class="SEARCH-ResponsesItemResponse-TitleContainer">%v</div>
	            <div class="SEARCH-ResponsesItemResponse-ContributorsContainer">%v ∙ %v</div>
	        </button>`, searchResults[i].ProjectID, searchResults[i].ProjectImage, searchResults[i].Name, "Project", searchResults[i].ProjectContributors)

			returnHTML = returnHTML +  projectHTML    
    	}
    }

    if len(searchResults) == 0 {
    	returnHTML = `<div class="SEARCH-ResponsesEmptyResponse">No results</div>`
    }


    c.JSON(200, gin.H{"response": returnHTML})
    return
}

type UserSearchQueryStruct struct {
    Query    string `json:"searchQuery"`
}
