from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, database, models

router = APIRouter()

@router.post("/items/", response_model=models.InventoryItem)
def add_item(item: models.InventoryItem, db: Session = Depends(database.get_db)):
    return crud.create_inventory_item(db, item)

@router.get("/items/{item_id}", response_model=models.InventoryItem)
def get_item(item_id: int, db: Session = Depends(database.get_db)):
    item = crud.get_inventory_item(db, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.put("/items/{item_id}", response_model=models.InventoryItem)
def update_item(item_id: int, item: models.InventoryItem, db: Session = Depends(database.get_db)):
    updated_item = crud.update_inventory_item(db, item_id, item.dict())
    if not updated_item:
        raise HTTPException(status_code=404, detail="Item not found")
    return updated_item

@router.delete("/items/{item_id}", response_model=models.InventoryItem)
def delete_item(item_id: int, db: Session = Depends(database.get_db)):
    deleted_item = crud.delete_inventory_item(db, item_id)
    if not deleted_item:
        raise HTTPException(status_code=404, detail="Item not found")
    return deleted_item

@router.get("/items/low-stock", response_model=List[models.InventoryItem])
def low_stock_items(db: Session = Depends(database.get_db)):
    return crud.get_low_stock_items(db)
