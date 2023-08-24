# project-creation-flow:

*  When the add button is pressed, the front end requests a new project id, with the JWT as auth
* the backend validates the JWT, initiates a project, to the correct owner, within the database, and thus gets a project ID
* backend sends this project ID to the front end
* frontend recieves the ID and starts the project view, at the correct url /projects/ID
* frontend asks for the details that are in the database 
* front end displays these default details, and then allows the user to change them
* as the user changes the details, the front end will send back the modified data to the backend, and they will be saved to there, and then can be accessed later

### file processing flow

* when the user adds a new audio file, front end sends if off to the backend
* backend processes the file, and with the JWT as auth, and the project ID, modifies the JSON section of the project database item, and adds this new song to that json
* the front end retrieves the modifed songs json, and displays it
* Then when the user modifies these details, the json is sent off to the backend to be saved into the database for later reference

