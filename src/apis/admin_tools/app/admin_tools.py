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
import shutil


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

async def is_uuid_in_database(uuid):
	async with app.state.pool.acquire() as conn:
		query = "SELECT COUNT(*) FROM users WHERE uuid = $1"
		result = await conn.fetchval(query, uuid)
		return result == 1

async def delete_user_from_database(uuid):
	async with app.state.pool.acquire() as conn:
		query = "DELETE FROM users WHERE uuid = $1"
		await conn.execute(query, uuid)

async def delete_files_row(url):
	async with app.state.pool.acquire() as conn:
		query = "DELETE FROM files WHERE file_url = $1"
		await conn.execute(query, url)


async def get_files_table(uuid):
	async with app.state.pool.acquire() as conn:
		query = """
		SELECT * 
		FROM files 
		WHERE (SELECT unnest(owner)->>'owner')::uuid = $1;
		"""
		result = await conn.fetch(query, uuid)
		return result


@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()
    

@app.on_event("shutdown")
async def shutdown():
    await app.state.pool.close()


"""
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
"""


@app.post("/delete_user/")
async def send_message(request: Request):
	data = await request.json()
	uuid = data.get("user_to_delete")

	if uuid is None:
		return {"error": "UUID field not found in JSON payload."}

	# check if uuid is in the db
	uuid_in_users = await is_uuid_in_database(uuid)
	if uuid_in_users is False:
		print(f"uuid is not in users")
		return {"error" : f"{uuid} is not in Users Table"}

	# we have now verified that the uuid is valid
	await delete_user_from_database(uuid)

	users_files = await get_files_table(uuid);

	for i in range(len(users_files)):
		owners = users_files[i]['owner']
		url = users_files[i]['file_url']
		if len(owners) > 2:
			#don't delete where there are more than two owners, ofcourse at the moment that state doesn't exist
			# and ideally at some point it would also update the table, alas...
			continue

		# delete *url* folder
		folder_path = os.path.join("/var/www/media", url)

		if os.path.exists(folder_path):
		    shutil.rmtree(folder_path)
		else:
		    print(f"The folder does not exist: {folder_path}")

		await delete_files_row(url)




	response_message = f"DELETED: {uuid}"

	return {"response": response_message}






@app.get("/retrieve_users_table")
async def retrieve_users_table():
	users_table = await get_users_table()

	# for users in users table, go to the files table and sum their space used

	return {"response": users_table}











