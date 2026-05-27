class Shape:
    def __init__(self):
        pass
    def get_area(x,y):
        pass
    def get_perimeter():
        pass
    def __str__(self):
        pass
    def num_validation(self,value,name):
        if not isinstance(value,(int,float)):
            print(f"{name} must be a number")
            return False
        if value<=0:
            print(f"{name} must be greater than 0")
            return False
        return True