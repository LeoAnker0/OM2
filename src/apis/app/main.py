from fastapi import FastAPI, Header, HTTPException, Request, Response, Cookie, File, UploadFile, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response
from requests_toolbelt import MultipartEncoder
from starlette.websockets import WebSocketDisconnect

from dotenv import load_dotenv
from typing import Optional
from pydantic import BaseModel, EmailStr
import json
import asyncpg
import os
import secrets
import uuid
import datetime
import bcrypt
import html
import re
import email.utils
import requests
import jwt as pyjwt
import shutil
import random
import string

load_dotenv()

app = FastAPI()



# Temporary data store to store form data with tokens
signup_data_store = {}

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[f'https://{str(os.environ.get("CORS_POLICIES_ALLOWED_ORIGINS"))}', 'http://localhost:5173', 'https://testom2.la0.uk', 'https://om2.la0.uk'],
    #allow_origins=[f"http://localhost:5173", "http://localhost:4173", "http://localhost:5175", "https://om2.la0.uk", "http://localhost:11001"],  # Set the appropriate origins or use ["http://localhost:8000"] for a specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def create_db_pool():
    pool = await asyncpg.create_pool(
        database=str(os.environ.get("POSTGRES_DB")),
        user=str(os.environ.get("POSTGRES_USER")),
        password=str(os.environ.get("POSTGRES_PASSWORD")),
        host="postgres",  # Replace with your actual database host
        port="5432",      # Replace with your actual database port
    )
    return pool

def hash_password(password: str) -> str:
    # Generate a salt and hash the password
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt)

    # The hashed_password is a bytes object, so convert it to a string before returning
    return hashed_password.decode("utf-8")

def is_valid_email(email_address):
    # Use email.utils.parseaddr() to parse the email address
    _, email_parsed = email.utils.parseaddr(email_address)
    
    # Check if the parsed email address is valid
    return re.match(r"[^@]+@[^@]+\.[^@]+", email_parsed) is not None

async def startup_check_tables_exist():
    async with app.state.pool.acquire() as conn:
        query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('users', 'projects', 'files')"
        result = await conn.fetch(query)

        existing_tables = [row['table_name'] for row in result]
        required_tables = ['users', 'projects', 'files']

        return set(required_tables).issubset(existing_tables)

async def startup_check_admin_exists(admin_email):
    async with app.state.pool.acquire() as conn:
        query = "SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)"
        result = await conn.fetchval(query, admin_email)
        return result == 1

async def startup_get_admin_password_hash(admin_email):
    async with app.state.pool.acquire() as conn:
        query = "SELECT password FROM users WHERE email = $1"
        result = await conn.fetchval(query, admin_email)
        return result

async def update_password_user_by_uuid(uuid, password):
    async with app.state.pool.acquire() as conn:
        query = "UPDATE users SET password = $1 WHERE uuid = $2"
        await conn.execute(query, password, uuid)
        return


@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()
    #print(f"startup function in fastapi")


    tablesExist = await startup_check_tables_exist()

    if not tablesExist:
        print(f"we need to create some tables")


    admin_email = str(os.environ.get("OM2_ADMIN_USER_EMAIL"))
    adminExists = await startup_check_admin_exists(admin_email);

    if not adminExists:
        #print(f"adminExists:\t{adminExists}")
        username = "admin"
        password = hash_password(str(os.environ.get("OM2_ADMIN_PASSWORD")))
        email = admin_email
        url = "https://picsum.photos/10"

        user_dict = dict(username=username, password=password, email=email, profile_picture=url)
        await insert_user(user_dict)

    elif adminExists:
        #print(f"admin exists, yes:\t{adminExists}")

        #get the current hash of the admin password
        #current_hashed_password = await startup_get_admin_password_hash(admin_email)
        try:
            passwordMatches = await passwordHash_matches_email(str(os.environ.get("OM2_ADMIN_PASSWORD")), admin_email)
        except ValueError as e:
            print(f"Error: {e}")
            passwordMatches = False

        if not passwordMatches:
            #print(f"passwordMatches:\t{passwordMatches}")

            uuid = await get_uuid_by_email(admin_email)
            new_password = hash_password(str(os.environ.get("OM2_ADMIN_PASSWORD")))
            await update_password_user_by_uuid(uuid, new_password)

            # lets now set the password of the user by uuid, by hashing the password



@app.on_event("shutdown")
async def shutdown():
    await app.state.pool.close()


async def is_email_unique(email):
    async with app.state.pool.acquire() as conn:
        query = "SELECT COUNT(*) FROM users WHERE email = $1"
        result = await conn.fetchval(query, email)
        return result == 0

async def get_account_profile_picture(uuid):
    async with app.state.pool.acquire() as conn:
        query = "SELECT profile_picture FROM users WHERE uuid = $1"
        result = await conn.fetchval(query, uuid)
        return result



async def insert_user(data: dict):
    async with app.state.pool.acquire() as conn:
        data["description"] = "empty..."
        data["date_joined"] = int(datetime.datetime.now().timestamp() * 1000)

        while True:
            # Generate a UUID
            data["uuid"] = str(uuid.uuid4())

            # Check if the UUID exists in the database
            query = "SELECT COUNT(*) FROM users WHERE uuid = $1"
            result = await conn.fetchval(query, data["uuid"])
            if result == 0:
                # Unique UUID found, break out of the loop
                break


        query = "INSERT INTO users (username, email, password, profile_picture, uuid, description, date_joined, last_logged_in, last_time_media_accessed, verified) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)"
        await conn.execute(query, data["username"], data["email"], data["password"], data["profile_picture"], data["uuid"], data["description"], data["date_joined"], 0, 0, False)


@app.post("/signup/")
async def signup(request: Request):

    raw_data = await request.body()
    data = json.loads(raw_data)

    email = html.escape(str(data["email"]))

    email_unique = await is_email_unique(email)

    if not email_unique:
        raise HTTPException(status_code=400, detail="Email already exists")

    email_valid = is_valid_email(email)

    if not email_valid:
        raise HTTPException(status_code=400, detail="Email invalid")

    # Step 2: Generate a unique token and store the form data in the temporary data store
    token = secrets.token_urlsafe(16)
    signup_data_store[token] = email

    # Return the token to the client-side
    return {"status": "email_validated", "token": token}

@app.post("/signup/complete/")
async def complete_signup(request: Request):
    # Retrieve the form data from the temporary data store using the token
    raw_data = await request.body()
    data = json.loads(raw_data);
    token = data["token"]
    username = html.escape(str(data["username"]))
    password = hash_password(data["password"])
    email = html.escape(str(data["email"]))
    profilePicture = data["profilePicture"]

    #print(f"token: {token} \t| username: {username} \t| password: {password} \t| email: {email}")

    signup_data = signup_data_store.get(token)

    if not signup_data:
        raise HTTPException(status_code=400, detail="Invalid token")

    del signup_data_store[token]

    #send the image to chipmunk_processor
    # Send a message to the chipmunk_processor container
    chipmunk_processor_url = "http://chipmunk_processor:8001/process_image/base64/"
    payload = {"imgData": profilePicture, "owner_email": email}
    #print("we are sending an image to chipmunk_processor")
    response = requests.post(chipmunk_processor_url, json=payload)

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Error sending message to chipmunk_processor.")

    # Get the response from the chipmunk_processor container
    response_data = response.json()
    url = response_data["url"]
   
    #add user to the db
    user_dict = dict(username=username, password=password, email=email, profile_picture=url)
    await insert_user(user_dict)


    return {"message": "Signup successful"}


async def passwordHash_matches_email(password, email):
    async with app.state.pool.acquire() as conn:
        query = "SELECT password FROM users WHERE email = $1"
        hashed_password = await conn.fetchval(query, email)

        if hashed_password:
            return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))
        else:
            return False


def genenerate_jwt(uuid):
    secret_key = str(os.environ.get("SECRET_JWT_KEY"))

    payload = {
        "uuid":uuid,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=4)
    }

    token = pyjwt.encode(payload, secret_key, algorithm="HS256")

    return token

async def get_uuid_by_email(email):
    async with app.state.pool.acquire() as conn:
        query = "SELECT uuid FROM users WHERE email = $1"
        uuid = await conn.fetchval(query, email)
        return uuid



@app.post("/login/")
async def login(request: Request):
    raw_data = await request.body()
    data = json.loads(raw_data);


    #validate that email is of valid form and is in database

    email = html.escape(str(data["email"]))
    email_unique = await is_email_unique(email)

    if email_unique == True:
        raise HTTPException(status_code=400, detail="Email doesn't exists")

    email_valid = is_valid_email(email)

    if not email_valid:
        raise HTTPException(status_code=400, detail="Email invalid")

    # check that the passwordhash matches the one in the database

    password = data["password"]
    passwordMatches = await passwordHash_matches_email(password, email)
    if passwordMatches == False:
        print(f"the password didn't match")
        return {"success": "false", "message" : "login failed"}

    #get the real uuid
    uuid = await get_uuid_by_email(email)

    expiration_time = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=5)
    
    user_data = {"uuid": uuid}
    access_token = genenerate_jwt(user_data)
    response = JSONResponse({"authenticated": True, 
                            "jwt": access_token})
    return response

async def check_if_user_exists_by_uuid(uuid):
    async with app.state.pool.acquire() as conn:
        query = "SELECT EXISTS(SELECT 1 FROM users WHERE uuid = $1)"
        result = await conn.fetchval(query, uuid)
        return result


async def verify_jwt(jwt_token):
    secret_key = str(os.environ.get("SECRET_JWT_KEY"))

    received_jwt = jwt_token

    try:
        # Decode and verify the JWT
        payload = pyjwt.decode(received_jwt, secret_key, algorithms=["HS256"])
        
        # You can now access the claims as needed, e.g., 'payload["user_id"]'
        uuid = payload.get("uuid", None)

        #check if the uuid is in the users table:
        unpacked_uuid = uuid["uuid"]

        exists = await check_if_user_exists_by_uuid(unpacked_uuid)

        if uuid and exists:
            return True, uuid
            # User is authenticated, you can proceed with their request
        else:
            print(f"the user does not exist:\t{exists}\nthe user is not valid:\t{uuid}")
            return False, "notuuid"
            # Invalid JWT or missing 'user_id', consider the user not authenticated
    except pyjwt.ExpiredSignatureError:
        print("JWT is expired. Token has expired.")
        return False, "notuuid"
        # Handle JWT expiration, consider the user not authenticated
    except pyjwt.InvalidTokenError:
        return False, "notuuid"
        print("Invalid JWT. Token verification failed.")
        # Handle invalid JWT, consider the user not authenticated




@app.post("/prelogin/")
async def prelogin(request: Request):
    raw_data = await request.body()
    data = json.loads(raw_data);
    access_token = data["jwt"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        return {"authenticated": False}

    return {"authenticated": True}


@app.post("/test/")
async def test_endpoint(request: Request):
    data = await request.json()
    print(request)
    print(data)
    return {"received_data": data}


@app.post("/get_account_image/")
async def get_account_image(request: Request):
    data = await request.json()
    access_token = data["jwt"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    url = await get_account_profile_picture(uuid)


    return {"authenticated": True,
            "url": url}

    #get the url of the account image

def generate_uuid():
    newUuid = str(uuid.uuid4())
    return newUuid

@app.post("/files/upload/audio/")
async def upload_file(
    file: UploadFile = File(...),
    jwt: str = Form(...),  # Get the JWT token from the form
    project_id: str = Form (...)
):
    
    real, uuid = await verify_jwt(jwt)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    upload_dir = "/var/www/media/temp/"
    # Check if the directory exists, if not, create it
    directory = os.path.dirname(upload_dir)
    if not os.path.exists(directory):
        os.makedirs(directory)

    unique_filename_section = generate_uuid()

    unique_filename = f"{unique_filename_section}_{file.filename}"

    # Save the file to the upload directory
    file_path = os.path.join(upload_dir, unique_filename)
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    song_name = file.filename
    song_name = os.path.splitext(song_name)[0]


    chipmunk_processor_url = "http://chipmunk_processor:8001/process_audio/compress_and_index/"
    payload = {"audioFilePath": file_path, "uuid": uuid, "song_name":song_name, "project_id":project_id}
    response = requests.post(chipmunk_processor_url, json=payload)

    # Continue with the file upload if the JWT is valid
    # ... (your existing code for file upload)

    message = f"File {file.filename} uploaded successfully"
    return JSONResponse(content={"message": message})


async def init_project_in_database(data: dict):
    async with app.state.pool.acquire() as conn:

        json_owner = {"owner": data["uuid"], "permissions": "owner"}
        owner = json.dumps(json_owner)

        file_created_time = int(datetime.datetime.now().timestamp() * 1000)

        project_json = "{}"

        description = "Notes..."

        picture_url = "https://picsum.photos/200"

        project_id = data["project_id"]

        project_name = "Project Title"

        project_contributors = data["owner_username"]


        query = "INSERT INTO projects (owner, time_created, project_json, description, picture_url, project_id, project_name, project_contributors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
        await conn.execute(query, (owner,), file_created_time, project_json, description, picture_url, project_id, project_name, project_contributors)


async def generate_unique_string():
    async with app.state.pool.acquire() as conn:
        while True:
            min_length = 4
            new_string = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(min_length))
            
            # Check if the string exists in the database
            query = "SELECT COUNT(*) FROM projects WHERE project_id = $1"
            result = await conn.fetchval(query, new_string)
            if result == 0:
                return new_string

async def get_users_username(uuid):
    async with app.state.pool.acquire() as conn:
        query = "SELECT username FROM users WHERE uuid = $1"
        username = await conn.fetchval(query, uuid)
        return username

@app.post("/projects/new-project-id/")
async def create_project(request: Request):
    data = await request.json()
    access_token = data["access-token"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    unique_string = await generate_unique_string()

    uuid = uuid["uuid"]
    project_id = unique_string
    username = await get_users_username(uuid)

    init_project_dict = dict(uuid=uuid, project_id=project_id, owner_username=username)
    await init_project_in_database(init_project_dict)

    return {"projectID": project_id}

async def get_users_projects(uuid):
    async with app.state.pool.acquire() as conn:
        query = "SELECT time_created, picture_url, project_id, project_name, project_contributors FROM projects WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 ORDER BY time_created DESC LIMIT 15"
        projects = await conn.fetch(query, uuid)
        return projects

@app.post("/projects/get-projects/")
async def create_project(request: Request):
    data = await request.json()
    access_token = data["access-token"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    projects = await get_users_projects(uuid)

    return {"projects": projects}


async def get_project_details_from_database(uuid, project_id):
    async with app.state.pool.acquire() as conn:
        query = """SELECT time_created, project_json, description, picture_url, project_name, project_contributors
        FROM projects 
        WHERE (SELECT unnest(owner)->>'owner')::uuid = $1  AND project_id = $2
        LIMIT 1"""
        project_details = await conn.fetch(query, uuid, project_id)
        return project_details

@app.post("/projects/get-project-details/")
async def get_project_details(request: Request):
    data = await request.json()
    access_token = data["access-token"]
    project_id = data["project_id"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    project_details = await get_project_details_from_database(uuid, project_id)

    return {"project_details" : project_details[0]}


async def update_project_detail_in_database(uuid, project_id, column_to_update, new_data):
    async with app.state.pool.acquire() as conn:
        query = f"""
        UPDATE projects
        SET {column_to_update} = $1
        WHERE (SELECT unnest(owner)->>'owner')::uuid = $2 AND project_id = $3
        """
        project_details = await conn.execute(query, new_data, uuid, project_id)
        return project_details

async def update_user_detail_in_database(uuid, column_to_update, new_data):
    async with app.state.pool.acquire() as conn:
        query = f"""
        UPDATE users
        SET {column_to_update} = $1
        WHERE uuid = $2
        """
        user_details = await conn.execute(query, new_data, uuid)
        return user_details

@app.post("/projects/update_details/")
async def update_project_details(request: Request):
    data = await request.json()
    access_token = data["access-token"]
    project_id = data["project_id"]
    column_to_update = data["column_to_be_updated"]
    new_data = data["new_data"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    valid_columns_to_update = ["description", "project_name"]
    if column_to_update not in valid_columns_to_update:
        print("the column is not open to being changed")
        return {"authenticated": False}

    await update_project_detail_in_database(uuid, project_id, column_to_update, new_data)

    return {"updated" : "success"}

@app.post("/users/update_details/")
async def update_user_details(request: Request):
    data = await request.json()
    access_token = data["access-token"]
    column_to_update = data["column_to_be_updated"]
    new_data = data["new_data"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    valid_columns_to_update = ["last_state", "username"]
    if column_to_update not in valid_columns_to_update:
        print("the column is not open to being changed")
        return {"authenticated": False}

    await update_user_detail_in_database(uuid, column_to_update, new_data)

    return {"updated" : "success"}

@app.post("/users/get_details/")
async def update_get_details(request: Request):
    data = await request.json()
    access_token = data["access-token"]
    column_to_retrieve = data["wanted_column"]

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    valid_columns_to_retrieve = ["last_state", "username"]
    if column_to_retrieve not in valid_columns_to_retrieve:
        print("the column is not open to being retrieved")
        return {"authenticated": False}

    response = await get_user_detail_in_database(uuid, column_to_retrieve)
    #print(f"response to get:\t{response}")

    return {"response" : response}

async def delete_project_by_uuid_and_project_id(uuid, project_id):
    async with app.state.pool.acquire() as conn:
        query = "DELETE FROM projects WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND project_id = $2"
        await conn.execute(query, uuid, project_id)

async def get_users_projects_for_file_deletion(uuid, project_id):
    async with app.state.pool.acquire() as conn:
        query = "SELECT project_json, picture_url FROM projects WHERE (SELECT unnest(owner)->>'owner')::uuid = $1 AND project_id = $2;"
        project = await conn.fetch(query, uuid, project_id)
        return project

async def get_user_detail_in_database(uuid, column):
    async with app.state.pool.acquire() as conn:
        query = f"SELECT {column} FROM users WHERE uuid = $1;"
        user = await conn.fetch(query, uuid)
        return user

async def delete_files_row(url):
    async with app.state.pool.acquire() as conn:
        query = "DELETE FROM files WHERE file_url = $1"
        await conn.execute(query, url)

@app.delete("/projects/delete_project/")
async def update_project_details(request: Request):
    data = await request.json()
    access_token = data["access-token"]
    project_id = data["project_id"]
    data = project_id
    project_id = data['PROJECT_ID']

    real, uuid = await verify_jwt(access_token)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    project = await get_users_projects_for_file_deletion(uuid, project_id)
    json_string = project[0]['project_json']
    project_dict = json.loads(json_string)

    # delete the project files
    if json_string !=  "{}":
        url_list = [song['url'] for song in project_dict['songs_json']]
        picture_url = project[0]['picture_url']
        #url_list.append(picture_url)

        #delete files
        for url in url_list:
            folder_path = os.path.join("/var/www/media", url)

            if os.path.exists(folder_path):
                shutil.rmtree(folder_path)
            else:
                print(f"The folder does not exist: {folder_path}")

            await delete_files_row(url)

    # delete the project from the table
    await delete_project_by_uuid_and_project_id(uuid, project_id)

    return {"response": "cheese"}

# for image uploads
@app.post("/files/upload/photo/")
async def upload_file_photo(
    file: UploadFile = File(...),
    jwt: str = Form(...),  # Get the JWT token from the form
    project_id: str = Form (...)
):
    real, uuid = await verify_jwt(jwt)
    uuid = uuid["uuid"]

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    # Check if the directory exists, if not, create it
    upload_dir = "/var/www/media/temp/"
    directory = os.path.dirname(upload_dir)
    if not os.path.exists(directory):
        os.makedirs(directory)

    unique_filename_section = generate_uuid()
    unique_filename = f"{unique_filename_section}_{file.filename}"


    # Save the file to the upload directory
    file_path = os.path.join(upload_dir, unique_filename)
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    chipmunk_processor_url = "http://chipmunk_processor:8001/process_photo/compress_and_index/"
    payload = {"filePath": file_path, "uuid": uuid, "project_id":project_id}
    response = requests.post(chipmunk_processor_url, json=payload)

    if response.status_code != 200:
        print("Request failed with status code:", response.status_code)
    
    response_data = response.json()
    url = response_data.get("url", "")
    #print("URL:", url)

    #update the project database item so that the image url is this
    await update_project_detail_in_database(uuid, project_id, "picture_url", url)

    message = f"File {file.filename} uploaded successfully"
    return JSONResponse(content={"message": message})


# for image uploads
@app.get("/status/are_signups_allowed/")
async def are_signups_allowed():
    signups_allowed = (str(os.environ.get("NEW_SIGNUPS_ALLOWED"))).lower()
    #print(f"signups_allowed:\t{signups_allowed}")
    return {"signups_allowed": signups_allowed}


















    