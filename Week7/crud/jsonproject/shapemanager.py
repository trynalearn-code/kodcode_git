import json

from square import Square
from rectangle import Rectangle
from circle import Circle
from triangle import Triangle
from hexagon import Hexagon


class ShapeManager:
    def __init__(self):
        self.shapes = []
        self.load_from_json()

    def create_shape(self, shape):
        self.shapes.append(shape)
        self.save_to_json()

    def get_all_shapes(self):
        return self.shapes

    def update_shape(self, shape_id, new_data):
        for shape in self.shapes:
            if shape.id == shape_id:

                for key, value in new_data.items():
                    if key not in ["id", "shape_type"]:
                        setattr(shape, key, value)

                self.save_to_json()
                return True

        return False

    def delete_shape(self, shape_id):
        for shape in self.shapes:
            if shape.id == shape_id:
                self.shapes.remove(shape)
                self.save_to_json()
                return True

        return False

    def save_to_json(self):
        data = [shape.to_dict() for shape in self.shapes]

        with open("shapes.json", "w") as file:
            json.dump(data, file, indent=4)

    def load_from_json(self):
        try:
            with open("shapes.json", "r") as file:
                data = json.load(file)

            for item in data:

                if item["type"] == "square":
                    self.shapes.append(
                        Square(
                            item["id"],
                            item["side"]
                        )
                    )

                elif item["type"] == "rectangle":
                    self.shapes.append(
                        Rectangle(
                            item["id"],
                            item["w"],
                            item["h"]
                        )
                    )

                elif item["type"] == "circle":
                    self.shapes.append(
                        Circle(
                            item["id"],
                            item["r"]
                        )
                    )

                elif item["type"] == "triangle":
                    self.shapes.append(
                        Triangle(
                            item["id"],
                            item["base"],
                            item["height"],
                            item["side1"],
                            item["side2"],
                            item["side3"]
                        )
                    )

                elif item["type"] == "hexagon":
                    self.shapes.append(
                        Hexagon(
                            item["id"],
                            item["side"]
                        )
                    )

        except FileNotFoundError:
            self.shapes = []

        except json.JSONDecodeError:
            self.shapes = []