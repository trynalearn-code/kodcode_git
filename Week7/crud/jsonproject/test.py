from square import Square

square1 = Square(1, 5)

print(square1.id)
print(square1.shape_type)
print(square1.side)

print(square1.get_area())
print(square1.get_perimeter())

print(square1.to_dict())