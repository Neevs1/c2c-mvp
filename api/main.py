from fastapi import FastAPI
from api.auth import login

app = FastAPI()
app.include_router(login.router,prefix="/api/py")

@app.get("/api/py/status")
def read_root():
    return {"status": "API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="[IP_ADDRESS]", port=8000)