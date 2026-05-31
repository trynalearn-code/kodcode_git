from shape import Shape
from math import sqrt

class Hexagon(Shape):
    def __init__(self, shape_id, side):
        super().__init__(shape_id, "hexagon")
        self.side = side

    def get_area(self):
        return (3 * sqrt(3) * self.side ** 2) / 2

    def get_perimeter(self):
        return 6 * self.side

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.shape_type,
            "side": self.side
        }