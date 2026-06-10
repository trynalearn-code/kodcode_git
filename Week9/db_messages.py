import mysql.connector


def get_connection():
    return mysql.connector.connect(
    host="127.0.0.1",
    port="3306",
    user="root",
    password="root",
    database="soldiers_db"
)

def get_schema():
    conn=get_connection()
    cursor=conn.cursor()
    cursor.execute(
        "DESCRIBE intel_messages"
    )
    rows=cursor.fetchall()
    cursor.close()
    conn.close()
    return [{"column":row[0],"type":row[1]} for row in rows]


def get_all_messages():
    conn=get_connection()
    cursor=conn.cursor(dictionary=True)
    cursor.execute(
        "SELECT * FROM intel_messages"
    )
    rows=cursor.fetchall()
    cursor.close()
    conn.close()
    return rows


def get_message_by_id(message_id: int) -> dict | None:
    conn=get_connection()
    cursor=conn.cursor(dictionary=True)
    cursor.execute(
        "SELECT * FROM intel_messages WHERE id=%s",(message_id,)
    )
    message = cursor.fetchone()
    cursor.close()
    conn.close()
    return message

def create_message(unit: str, classification: str, content: str, source: str | None) -> int:
    conn=get_connection()
    cursor=conn.cursor()
    cursor.execute(
        "INSERT INTO intel_messages (unit, classification, content, source) VALUES(%s,%s,%s,%s)",
          (unit, classification, content, source) 
    )
    conn.commit()
    new_id=cursor.last_row_id
    cursor.close()
    conn.close()
    return new_id

def update_message(message_id: int, data: dict) -> bool:
    conn=get_connection()
    cursor=conn.cursor()
    set_parts=[f"{key}=%s" for key in data.keys()]
    set_clause=", ".join(set_parts)
    cursor.execute(
            f"UPDATE intel_messages SET {set_clause} WHERE id = %s", list[data.values()] + [message_id]
    )
    conn.commit()
    updated=cursor.rowcount>0
    conn.close()
    cursor.close()
    return updated
    



def delete_message(message_id: int) -> bool:
    conn=get_connection()
    cursor=conn.cursor()
    cursor.execute(
        "DELETE FROM intel_messages WHERE id =%s",(message_id,)
    )
    conn.commit()
    deleted=cursor.rowcount>0
    conn.close()
    cursor.close()
    return deleted

##############################################################

from fastapi import FastAPI
import uvicorn
from routers import soldiers

app = FastAPI()







if __name__ == "__name__":
    uvicorn.run("main:app", port=8000, host="127.0.0.1", reload=True)

#routers folder>
#soldiers.py:

from fastapi import APIRouter
from pydantic import BaseModel
import logging
router = APIRouter()

logging.basicConfig(level=logging.DEBUG,format="%(asctimes)s | %(name)s | %(levelname)s | %(message)s",filename="")

logger=logging.getLogger(__name__)
class Soldier(BaseModel):
    unit:str
    name:str |None=None
    rank:int

@router.get("/")
def say_hello():
    return {}

@router.get("/")
def say_hello(body:Soldier):
    return {}


@router.get("/")
def say_hello(body:Soldier):
    return {}

#setup.py

import mysql.connector

#id - , unit, 

def get_connection():
    return mysql.connector.connect(
        hosts="127.0.0.1"
        port="3306"
        user= "root"
        password="secret"
        database="soldeiers_db"
    )


