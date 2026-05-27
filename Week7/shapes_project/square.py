from rectangle import Rectangle

class Square(Rectangle):
    def __init__(self, s):
        super().__init__(s, s)
    def __str__(self):
        return f"Square with all sides being:{self.w}"