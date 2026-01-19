from sqlalchemy import Column, Text, Date, Integer, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.sql import func
import uuid

from app.models.base import Base


class DiaryEntry(Base):
    __tablename__ = "diary_entries"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    author = Column(Text, nullable=False)

    entry_date = Column(Date, nullable=False)

    mood = Column(Text, nullable=False)

    energy = Column(Integer)

    content = Column(Text, nullable=False)

    tags = Column(ARRAY(Text))

    created_at = Column(
        TIMESTAMP(timezone=True),
        server_default=func.now()
    )
