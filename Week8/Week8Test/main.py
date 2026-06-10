from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
import logging
import json



app=FastAPI()

logger = logging.getLogger(__name__)

class Weapon(BaseModel):
    id:int
    type:str
    model:str
    ammo_type:str
    condition:str

#this should really not be here. it's just an example:
stash= {
    "id": 1,
    "type": "machine_gun",
    "model": "M249",
    "ammo_type": "5.56mm",
    "condition": "critical"
  },
{
    "id": 2,
    "type": "launcher",
    "model": "LAW",
    "ammo_type": "rocket",
    "condition": "damaged"
  },

@app.get("/weapons")
def all_weapons():
    with open("weapons.json","r",encoding="utf-8") as f:
        for line in f:
            line=line.read()
            for weapon in line:
                return {"type":weapon}

@app.post("/weapons")
def add_weapon(body:Weapon):
# if id already exists, raise HttpException(status_code=409, detail= "item already exists")
    if Weapon.id>max(Weapon.id):
        return {
            "id":Weapon.id,
            "type": Weapon.type,
            "model": Weapon.model,
            "ammo_type": Weapon.ammo,
            "condition": Weapon.condition
        }

@app.get("/weapons/summary/by-type")
def get_weapon_sum():
    return {Weapon.type:sum(Weapon.type)}

@app.get("/weapons/{id}")
def find_weapon(id:int):
#it really should be  in the weapons.json file
    if id not in stash:
        logger.warning("Reporting missing item")
        raise HTTPException(status_code=404, detail="Item id not found in system")
    return {
        "id": id,
        "type": wtype,
        "model": model,
        "ammo_type": ammo,
        "condition": condition
    }

@app.put("/weapons/{id}")
def edit_weapon(id:int,body:Weapon):
    if id not in stash:
#it really should be  in the weapons.json file
        logger.warning("Reporting missing item")
        raise HTTPException(status_code=404, detail="Item id not found in system")
    return{
        "id":Weapon.id,
        "type": Weapon.type,
        "model": Weapon.model,
        "ammo_type": Weapon.ammo,
        "condition": Weapon.condition
    }

@app.delete("/weapons/{id}")
def delete_weapon(id:int):
    if id not in stash:
        logger.warning("Reporting missing item")
        raise HTTPException(status_code=404, detail="Item id not found in system")
    return {"message":"weapon deleted"}
        

@app.get("/weapons/by-condition?condition={condition}")
def weapon_by_condition(condition):
    if condition not in stash:
        logger.warning("Reporting missing item")
        raise HTTPException(status_code=404, detail="Item id not found in system")
    for weapon in stash:
        if weapon[condition]=="condition":
            return {
            "id": Weapon.id,
            "type": Weapon.type,
            "model": Weapon.model,
            "ammo_type": Weapon.ammo,
            "condition": condition
        }

@app.get("/weapons/combat-ready?type={type}")
def good_weapons(type):
    logger.info("Here are the good weapons")
    for weapon in stash:
        if weapon[type]=="new" or weapon[type]=="good":
            return {
            "id": Weapon.id,
            "type": Weapon.type,
            "model": Weapon.model,
            "ammo_type": Weapon.ammo,
            "condition": Weapon.condition
        }


@app.delete("/weapons/by-condition?condition={condition}")
def delete_faulty_weapons(condition:str):
    logger.warning("This action cannot be undone. We are deleting faulty items")
    if condition=="critical":
        return {"message":"weapon deleted"}




if __name__ == "__main__": 
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)