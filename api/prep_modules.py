from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from api.database import supabase

router = APIRouter(prefix="/api", tags=["prep_modules"])


# Pydantic Models for Response Validation
class ModuleTopic(BaseModel):
    topic: str


class ModuleResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    module_order: int
    icon_name: Optional[str]
    prerequisites: List[int] = []


class UserProgressResponse(BaseModel):
    module_id: int
    is_completed: bool
    progress_percentage: int


# GET /api/prep_modules - Fetch all preparatory modules
@router.get("/prep_modules", response_model=List[ModuleResponse])
async def get_prep_modules():
    """
    Fetch all modules where phase_type = 'preparatory'
    Ordered by module_order
    Includes prerequisites from MODULE_PREREQUISITES table
    """
    try:
        # Fetch modules
        modules_response = supabase.table("MODULES") \
            .select("id, title, description, module_order, icon_name") \
            .eq("phase_type", "preparatory") \
            .order("module_order") \
            .execute()
        
        if not modules_response.data:
            return []
        
        modules = modules_response.data
        
        # Fetch all prerequisites
        prerequisites_response = supabase.table("MODULE_PREREQUISITES") \
            .select("module_id, required_module_id") \
            .execute()
        
        # Create a map of module_id -> list of required_module_ids
        prereqs_map: Dict[int, List[int]] = {}
        if prerequisites_response.data:
            for prereq in prerequisites_response.data:
                module_id = prereq["module_id"]
                required_id = prereq["required_module_id"]
                if module_id not in prereqs_map:
                    prereqs_map[module_id] = []
                prereqs_map[module_id].append(required_id)
        
        # Attach prerequisites to modules
        result = []
        for module in modules:
            module_id = module["id"]
            result.append(ModuleResponse(
                id=module_id,
                title=module["title"],
                description=module.get("description"),
                module_order=module["module_order"],
                icon_name=module.get("icon_name"),
                prerequisites=prereqs_map.get(module_id, [])
            ))
        
        return result
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching prep modules: {str(e)}")


# GET /api/prep_modules/{module_id}/topics - Fetch distinct topics for a module
@router.get("/prep_modules/{module_id}/topics", response_model=List[ModuleTopic])
async def get_module_topics(module_id: int):
    """
    Fetch distinct topic values from QUESTIONS table for a specific module
    """
    try:
        response = supabase.table("QUESTIONS") \
            .select("topic") \
            .eq("module_id", module_id) \
            .execute()
        
        if not response.data:
            return []
        
        # Extract unique topics
        topics = list(set([q["topic"] for q in response.data if q.get("topic")]))
        
        return [ModuleTopic(topic=topic) for topic in topics]
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching module topics: {str(e)}")


# GET /api/user_progress?user_id=X - Fetch user progress across all modules
@router.get("/user_progress", response_model=List[UserProgressResponse])
async def get_user_progress(user_id: int = 1):
    """
    Fetch user's progress across all modules
    For now, user_id defaults to 1 (can be extended with auth)
    """
    try:
        response = supabase.table("USER_PROGRESS") \
            .select("module_id, is_completed, progress_percentage") \
            .eq("user_id", user_id) \
            .execute()
        
        if not response.data:
            return []
        
        return [UserProgressResponse(**item) for item in response.data]
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching user progress: {str(e)}")
