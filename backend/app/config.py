# app/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres.idkkdlfcbuekjlgctsbw:Superior2024*789@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
    SECRET_KEY: str = "3733c22d7b181fa839feeaee893914f86aca26eee953e8efdc1141bfebc81d94"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()


# TEST_DATABASE_URL = config("TEST_DATABASE_URL", cast=Secret)