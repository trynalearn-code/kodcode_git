from rectangle import Rectangle

class Square(Rectangle):
    def __init__(self, x):
        super().__init__(x)
        self.x = x
