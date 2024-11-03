from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from app.database import get_db
from .. import models, crud, database  # Import database here


router = APIRouter()

@router.post("/register")
def register(username: str, email: str, password: str, db: Session = Depends(database.get_db)):
    existing_user = crud.get_user_by_username(db, username)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    new_user = crud.create_user(db, username, email, password)
    return {"username": new_user.username, "email": new_user.email}

@router.post("/login")
def login(username: str, password: str, db: Session = Depends(database.get_db)):
    user = crud.get_user_by_username(db, username)  # Use the correct function
    if not user or not user.verify_password(password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}