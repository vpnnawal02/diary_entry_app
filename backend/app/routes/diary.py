from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.schemas.diary import DiaryCreate
from app.models.diary import DiaryEntry
from app.core.database import get_db

router = APIRouter(prefix="/diary", tags=["Diary"])


@router.post("/")
def create_diary_entry(entry: DiaryCreate, db: Session = Depends(get_db)):
    diary = DiaryEntry(
        author=entry.author,
        entry_date=entry.entry_date,
        mood=entry.mood,
        energy=entry.energy,
        content=entry.content,
        tags=entry.tags
    )

    db.add(diary)
    db.commit()
    db.refresh(diary)

    return jsonable_encoder(diary)
