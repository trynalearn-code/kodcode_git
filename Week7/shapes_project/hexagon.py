from calculator import Shape
from math import sqrt

class Hexagon(Shape):
    def __init__(self, side):
        self.side=side
    def get_area(self):
        return (3*sqrt(3)*self.side**2)/2
    def get_perimeter(self):
        return self.side*6
    def __str__(self):
        return f"Hexagon. length of side:{self.side}"
    def __repr__(self):
        return self.__str__()