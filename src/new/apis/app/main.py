from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from typing import Optional

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set the appropriate origins or use ["http://localhost:8000"] for a specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
	return {"hello": "world"}

@app.get("/items/{item_id}")
async def read_items(item_id: int, q: Optional[str] = None):
	return {"item_id": item_id, "q": q}

#localhost 8000