from calculator import Shape
class Rectangle(Shape):
    def __init__(self,w,h):
        self.w = w
        self.h = h
    def get_area(self):
        return self.w * self.h
    def get_perimeter(self):
        return 2*(self.w+self.h)
    def __str__(self):
        return f"Rectangle(width:{self.w}, height:{self.h})"
    def __repr__(self):
        return self.__str__()