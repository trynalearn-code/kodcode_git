from shapemanager import ShapeManager

from square import Square
from rectangle import Rectangle
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon


def print_shapes(manager):
    print("\n--- ALL SHAPES ---")
    for shape in manager.get_all_shapes():
        print(shape.to_dict())
        print("Area:", shape.get_area())
        print("Perimeter:", shape.get_perimeter())
        print("-----------------")


def main():
    manager = ShapeManager()

    # RESET (optional for clean testing)
    manager.shapes = []
    manager.save_to_json()

    # CREATE
    s1 = Square(1, 5)
    r1 = Rectangle(2, 4, 3)
    c1 = Circle(3, 2)
    t1 = Triangle(4, 3, 4, 3, 5, 5)
    h1 = Hexagon(5, 4)

    manager.create_shape(s1)
    manager.create_shape(r1)
    manager.create_shape(c1)
    manager.create_shape(t1)
    manager.create_shape(h1)

    print_shapes(manager)

    # UPDATE
    print("\n--- UPDATE SHAPE ID 1 ---")
    manager.update_shape(1, {"side": 10})
    print_shapes(manager)

    # DELETE
    print("\n--- DELETE SHAPE ID 2 ---")
    manager.delete_shape(2)
    print_shapes(manager)

    # TEST LOAD FROM FILE (simulate restart)
    print("\n--- RELOAD FROM JSON ---")
    new_manager = ShapeManager()
    print_shapes(new_manager)


if __name__ == "__main__":
    main()