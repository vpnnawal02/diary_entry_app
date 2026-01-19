from fastapi import FastAPI
from sqlalchemy import text
from app.core.database import engine
from app.routes.diary import router as diary_router
from fastapi.middleware.cors import CORSMiddleware

app  = FastAPI(
    title= "Private Diary API",
    version="1.0.0"
)
app.include_router(diary_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return{
        "msg" : "home page"
        }

@app.get("/health")
def health_check():
    return{
        "status" : "ok",
        "message" : "Backend is running"
    }

@app.get("/db-check")
def db_check():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        return {
            'db_status' : 'connected'
        }