from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import base64
from PIL import Image
import io
import os
import imghdr
import json
import asyncpg
import uuid
import secrets
import string
import asyncio
import datetime
import logging


app = FastAPI()

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

async def get_users_table():
	async with app.state.pool.acquire() as conn:
		query = "SELECT email, verified, uuid, username FROM users LIMIT 100;"
		users_table = await conn.fetch(query)

		return users_table


@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()
    

@app.on_event("shutdown")
async def shutdown():
    await app.state.pool.close()



@app.post("/send_message/")
async def send_message(request: Request):
	data = await request.json()
	#process message
	print("we have a message")

	message = data.get("user_to_delete")

	if message is None:
		return {"error": "Message field not found in JSON payload."}


	processed_message = f"Processed: {message}"

	return {"response": processed_message}



@app.post("/delete_user/")
async def send_message(request: Request):
	data = await request.json()
	#process message

	uuid = data.get("user_to_delete")
	print(f"USER to delete {uuid}")

	# check if uuid is in the db

	if uuid is None:
		return {"error": "Message field not found in JSON payload."}


	processed_message = f"Processed: {uuid}"

	return {"response": processed_message}

@app.get("/retrieve_users_table")
async def retrieve_users_table():
	users_table = await get_users_table()

	return {"response": users_table}











