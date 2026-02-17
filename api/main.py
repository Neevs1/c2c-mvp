from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.auth import login
from api import prep_modules

app = FastAPI()

# Add CORS middleware to allow Next.js frontend to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login.router, prefix="/api/py")
app.include_router(prep_modules.router)

@app.get("/api/py/status")
def read_root():
    return {"status": "API is running"}

