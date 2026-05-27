from calculator import Shape

class Triangle(Shape):
    def __init__(self,base,height,side2,side3):
        self.base=base
        self.height=height
        self.side2=side2
        self.side3=side3
    def get_area(self):
        return (self.base*self.height)/2
    def get_perimeter(self):
        return self.base + self.side2 + self.side3
    def __str__(self):
        return f"We've got a triangle with sides: {self.base}, {self.side2}, {self.side3} and height: {self.height}"