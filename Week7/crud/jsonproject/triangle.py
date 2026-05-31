from shape import Shape

class Triangle(Shape):
    def __init__(self, shape_id, base, height, side1, side2, side3):
        super().__init__(shape_id, "triangle")
        self.base = base
        self.height = height
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

    def get_area(self):
        return (self.base * self.height) / 2

    def get_perimeter(self):
        return self.side1 + self.side2 + self.side3

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.shape_type,
            "base": self.base,
            "height": self.height,
            "side1": self.side1,
            "side2": self.side2,
            "side3": self.side3
        }