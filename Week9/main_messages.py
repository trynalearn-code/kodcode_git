from fastapi import FastAPI
import db_messages
import uvicorn

app=FastAPI()

@app.post("/setup", status_code=201)
def setup():
    import setup_messages
    return {"status": "ok", "table": "intel_messages"}

@app.get("/schema")
def schema():
    return [row["column"] for row in db_messages.get_schema()]

@app.get("/messages")
def messages():
    return db_messages.get_all_messages()

if __name__ =="__main__":
    uvicorn.run("main_messages:app",host="127.0.0.1",port=8001,reload=True)
