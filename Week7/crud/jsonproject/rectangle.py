from shape import Shape

class Rectangle(Shape):
    def __init__(self, shape_id, w, h):
        super().__init__(shape_id, "rectangle")
        self.w=w
        self.h=h
    def get_area(self):
        return self.w*self.h
    def get_perimeter(self):
        return self.w*2 +self.h*2
    def to_dict(self):
        return {
            "id":self.id,
            "type":self.shape_type,
            "w": self.w,
            "h": self.h
        }