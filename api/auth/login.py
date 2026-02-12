from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
from api.database import supabase



router = APIRouter()

class LoginRequest(BaseModel):
    email: str

@router.post("/login")
async def check_user(request: LoginRequest):
    
    result = supabase.table("users").select("email").ilike("email", request.email).execute()
    
    if not result.data:
        raise HTTPException(
            status_code=401, 
            detail="No account found with this email address."
        )

    # Extract just the email string from the first record
    user_email = result.data[0]["email"]

    return {"email": user_email}