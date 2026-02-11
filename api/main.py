from fastapi import FastAPI


app = FastAPI()

@app.get("/api/py/status")
def read_root():
    return {"status": "API is running"}