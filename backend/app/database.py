from sqlmodel import create_engine, SQLModel, Session
from .config import settings

engine = create_engine(settings.DATABASE_URL, echo=True)

def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()

def init_db():
    SQLModel.metadata.create_all(engine)