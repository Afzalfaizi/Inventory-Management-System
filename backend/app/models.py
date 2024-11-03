from sqlmodel import SQLModel, Field, Session, select
from typing import Optional
from passlib.context import CryptContext
from datetime import datetime

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    password_hash: str  # Ensure this column exists


    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.password_hash)

    def set_password(self, password: str):
        self.password_hash = pwd_context.hash(password)

class InventoryItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    category: str
    quantity: int = 0
    reorder_level: int = 0
    last_updated: datetime = Field(default_factory=datetime.utcnow)
