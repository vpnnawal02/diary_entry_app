from pydantic import BaseModel
from typing import Optional, List
from datetime import date


class DiaryCreate(BaseModel):
    author: str
    entry_date: date
    mood: str
    energy: Optional[int] = None
    content: str
    tags: Optional[List[str]] = None
