from fastapi import FastAPI, HTTPException
from shapemanager import ShapeManager
from square import Square
from rectangle import Rectangle
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon

app=FastAPI()
manager=ShapeManager()

@app.get("/shapes")
def get_shapes():
    return [shape.to_dict() for shape in manager.get_all_shapes()]

@app.get("/shapes/{id}")
def shape_by_id(id:int):
    for shape in manager.get_all_shapes():
        if shape.id == id:
            return shape.to_dict()
    raise HTTPException(status_code=404, detail="Shape not found")

@app.post("/shapes", status_code=201)
def create_shape(body:dict):
    typ=body.get("type")
    id=body.get("id")

    if typ.lower()=="square":
        shape=Square(id, body["side"])
    elif typ.lower()=="circle":
        shape=Circle(id, body["r"])
    elif typ.lower()=="rectangle":
        shape=Rectangle(id, body["w"], body["h"])
    elif typ.lower()=="hexagon":
        shape=Hexagon(id, body["side"])
    elif typ.lower()=="triangle":
        shape=Triangle(id, body["base"],body["height"],body["side1"],body["side2"],body["side3"])
    else:
        raise HTTPException(status_code=400, detail="shape make no sense")
    manager.create_shape(shape)
    return shape.to_dict()

@app.put("/shapes/{id}")
def change_shape(id: int, body: dict):
    success = manager.update_shape(id, body)
    if not success:
        raise HTTPException(
            status_code=404,
            detail="Shape not found"
        )
    return {
        "message": "Shape updated"
    }

@app.delete("/shapes/{id}")
def delete_shape(id: int):

    if manager.delete_shape(id):
        return {"message": "Shape deleted"}

    raise HTTPException(
        status_code=404,
        detail="Shape not found"
    )


