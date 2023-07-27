from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from typing import Optional
from pydantic import BaseModel, EmailStr
import json


import asyncpg
import os
import secrets

load_dotenv()

app = FastAPI()

# Temporary data store to store form data with tokens
signup_data_store = {}

class SignupData(BaseModel):
    username: str
    email: EmailStr
    password: str
    profile_picture: str  # You can store the image URL in the database


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set the appropriate origins or use ["http://localhost:8000"] for a specific origin
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

async def insert_user(data: dict):
    async with app.state.pool.acquire() as conn:
        query = "INSERT INTO users (username, email, password, profile_picture, uuid, description, date_joined) VALUES ($1, $2, $3, $4, $5, $6, $7)"
        await conn.execute(query, data["username"], data["email"], data["password"], data["profile_picture"], "3", "oui", "today")

@app.post("/apis/signup/")
async def signup(request: Request):

    raw_data = await request.body()
    data = json.loads(raw_data)

    email_unique = await is_email_unique(data["email"])

    if not email_unique:
        raise HTTPException(status_code=400, detail="Email already exists")

    # Step 2: Generate a unique token and store the form data in the temporary data store
    token = secrets.token_urlsafe(16)
    signup_data_store[token] = data["email"]

    # Return the token to the client-side
    return {"status": "email_validated", "token": token}

@app.post("/apis/signup/complete/")
async def complete_signup(request: Request):
    # Retrieve the form data from the temporary data store using the token
    raw_data = await request.body()
    data = json.loads(raw_data);
    token = data["token"]
    username = data["username"]
    password = data["password"]
    email = data["email"]
    profilePicture = data["profilePicture"]

    print(f"token: {token} \t| username: {username} \t| password: {password} \t| email: {email}")

    signup_data = signup_data_store.get(token)

    if not signup_data:
        raise HTTPException(status_code=400, detail="Invalid token")

    del signup_data_store[token]
   
    #add user to the db
    user_dict = dict(username=username, password=password, email=email, profile_picture="cheese")
    await insert_user(user_dict)


    return {"message": "Signup successful"}
