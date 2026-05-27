from math import pi
from calculator import Shape

class Circle(Shape):
    def __init__(self, r):
        self.r=r
    def get_area(self):
        return self.r**2 *pi
    def get_perimeter(self):
        return self.r*2*pi
    def __str__(self):
        return f"Circle with a radius of {self.r}"