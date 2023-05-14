from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import asyncpg
import os

from typing import Optional

load_dotenv()

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
    # Modify the connection parameters as per your PostgreSQL container configuration
    pool = await asyncpg.create_pool(
        host="postgres",  # Hostname or IP address of your PostgreSQL container
        port=5432,  # Port number of your PostgreSQL container
        user=str(os.environ.get("POSTGRES_USER")),  # Username to connect to the PostgreSQL container
        password=str(os.environ.get("POSTGRES_PASSWORD")),  # Password to connect to the PostgreSQL container
        database=str(os.environ.get("POSTGRES_DB")),  # Database name
    )
    return pool


@app.on_event("startup")
async def startup():
    app.state.pool = await create_db_pool()

@app.on_event("shutdown")
async def shutdown():
    await app.state.pool.close()

@app.get("/")
async def read_root():
	 # Get the database connection pool from the app state
    pool = app.state.pool

    # Fetch all table names from the database
    async with pool.acquire() as connection:
        table_names = await connection.fetch("""
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
        """)

    # Extract the table names from the result
    tables = [table["table_name"] for table in table_names]

    return {"tables": tables}

@app.get("/items/{item_id}")
async def read_items(item_id: int, q: Optional[str] = None, version: str = Header(...)):
    if version == "1":
        return {"item_id": item_id, "q": q, "version": "1"}
    else:
        raise HTTPException(status_code=400, detail="Invalid version provided")

#localhost 8000




