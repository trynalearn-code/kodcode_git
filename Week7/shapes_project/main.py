from rectangle import Rectangle
from square import Square
from triangle import Triangle
from circle import Circle
from hexagon import Hexagon
rect = Rectangle(5, 10)

rect = Rectangle(5, 10)
sq = Square(4)
tri = Triangle(10, 5, 6, 8)
circle = Circle(7)
hexagon = Hexagon(3)

shapes = [rect, sq, tri, circle, hexagon]

for shape in shapes:
    print("Shape:", shape.__class__.__name__)
    print("Area:", shape.get_area())
    print("Perimeter:", shape.get_perimeter())
    print()

