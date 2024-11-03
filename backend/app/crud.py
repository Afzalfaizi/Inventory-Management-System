from sqlmodel import Session, select
from .models import User
from typing import Optional
from . import models

def create_user(db: Session, username: str, email: str, password: str):
    user = User(username=username, email=email)
    user.set_password(password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_user_by_username(db: Session, username: str) -> Optional[User]:
    return db.exec(select(User).where(User.username == username)).first()

def get_user_by_email(db: Session, email: str) -> Optional[User]:
    return db.exec(select(User).where(User.email == email)).first()

def authenticate_user(db: Session, username: str, password: str) -> Optional[User]:
    user = get_user_by_username(db, username)
    if user and user.verify_password(password):
        return user
    return None


# Inventory CRUD
def create_inventory_item(db: Session, item_data: models.InventoryItem):
    db.add(item_data)
    db.commit()
    db.refresh(item_data)
    return item_data

def get_inventory_item(db: Session, item_id: int):
    return db.exec(select(models.InventoryItem).where(models.InventoryItem.id == item_id)).first()

def update_inventory_item(db: Session, item_id: int, item_data: dict):
    item = get_inventory_item(db, item_id)
    if item:
        for key, value in item_data.items():
            setattr(item, key, value)
        db.add(item)
        db.commit()
        db.refresh(item)
    return item

def delete_inventory_item(db: Session, item_id: int):
    item = get_inventory_item(db, item_id)
    if item:
        db.delete(item)
        db.commit()
    return item

def get_low_stock_items(db: Session):
    return db.exec(select(models.InventoryItem).where(models.InventoryItem.quantity < models.InventoryItem.reorder_level)).all()
