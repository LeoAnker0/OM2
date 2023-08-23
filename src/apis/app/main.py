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

load_dotenv()

app = FastAPI()



# Temporary data store to store form data with tokens
signup_data_store = {}

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Set the appropriate origins or use ["http://localhost:8000"] for a specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#app.include_router(TusRouter(store_dir="./files", location="/files/upload"), prefix="/files")

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



@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()

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
    print("we are sending an image to chipmunk_processor")
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
        return {"success": "false", "message" : "login failed"}

    #get the real uuid
    uuid = await get_uuid_by_email(email)

    expiration_time = datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=5)
    
    user_data = {"uuid": uuid}
    access_token = genenerate_jwt(user_data)
    response = JSONResponse({"authenticated": True, 
                            "jwt": access_token})
    return response


def verify_jwt(jwt_token):
    secret_key = str(os.environ.get("SECRET_JWT_KEY"))

    received_jwt = jwt_token

    try:
        # Decode and verify the JWT
        payload = pyjwt.decode(received_jwt, secret_key, algorithms=["HS256"])
        print(payload)
        
        # You can now access the claims as needed, e.g., 'payload["user_id"]'
        uuid = payload.get("uuid", None)
        if uuid:
            return True, uuid
            # User is authenticated, you can proceed with their request
        else:
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

    real, uuid = verify_jwt(access_token)

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

    real, uuid = verify_jwt(access_token)

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
):
    
    real, uuid = verify_jwt(jwt)

    if real == False:
        print("the jwt is not valid")
        return {"authenticated": False}

    uuid = uuid["uuid"]

    print(f"valid jwt")

    upload_dir = "/var/www/media/temp/"
    # Check if the directory exists, if not, create it
    directory = os.path.dirname(upload_dir)
    if not os.path.exists(directory):
        os.makedirs(directory)

    unique_filename_section = generate_uuid()

    unique_filename = f"{unique_filename_section}_{file.filename}"
    print(unique_filename)

    # Save the file to the upload directory
    file_path = os.path.join(upload_dir, unique_filename)
    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)



    chipmunk_processor_url = "http://chipmunk_processor:8001/process_audio/compress_and_index/"
    payload = {"audioFilePath": file_path, "uuid": uuid}
    print("we are sending an image to chipmunk_processor")
    response = requests.post(chipmunk_processor_url, json=payload)

    # Continue with the file upload if the JWT is valid
    # ... (your existing code for file upload)

    message = f"File {file.filename} uploaded successfully"
    return JSONResponse(content={"message": message})







    