import json
from square import Square
from rectangle import Rectangle
from circle import Circle

class ShapeManager:
    def __init__(self):
        self.shapes=[]
        self.load_from_json()

    def create(self,shape):
        self.shapes.append(shape)
        self.save_to_json()
    
    def get_all_shapes(self):
        return self.shapes
    def delete(self, id):
        for idd in self.shapes:
            if idd.id==id:
                self.shapes.remove(idd)
                return True
        return False
    def update(self,id,new):
        for shape in self.shapes:
            if shape.id==id:
                for key, value in new.items():
                    setattr(shape,key, value)
                self.save_to_json()
                return True
        return False