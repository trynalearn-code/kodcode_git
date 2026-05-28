from shape import Shape
from math import pi

class Circle(Shape):
    def __init__(self, shape_id, r):
        super().__init__(shape_id, "circle")
        self.r=r
    def get_area(self):
        return self.r*self.r*pi
    def get_perimeter(self):
        return self.r*2*pi
    def to_dict(self):
        return {
            "id":self.id,
            "type":self.shape_type,
            "r": self.r
        }