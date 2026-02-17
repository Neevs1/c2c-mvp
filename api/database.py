import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

if not os.environ.get("VERCEL"):
    load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")

if not url or not key:
    raise ValueError("Missing Supabase credentials. Check Vercel Dashboard or .env file.")

supabase: Client = create_client(url, key)