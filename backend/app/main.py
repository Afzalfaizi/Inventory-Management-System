from fastapi import FastAPI
from .database import init_db
from .routers import auth_routes, inventory_routes

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Mart Inventory Management System"}


init_db()

app.include_router(auth_routes.router, prefix="/auth", tags=["auth"])
app.include_router(inventory_routes.router, prefix="/inventory", tags=["inventory"])
