# #1.
# class Student:
#     def __init__(self, name):
#         self._name=name
#     @property
#     def name(self):
#         return self._name
# print(Student("Dana").name)

# #2.
# class Rectangle:
#     def __init__(self, width, height):
#         self.width=width
#         self.height=height
#     @property
#     def area(self):
#         return self.width*self.height
# print(Rectangle(3, 4).area)

# #3.
# class Thermometer:
#     def __init__(self, celsius):
#         self._celsius=celsius
#     @property
#     def celsius(self):
#         return self._celsius
#     @celsius.setter
#     def celsius(self,value):
#         if value < -273.15:
#             raise ValueError
#         self._celsius= value

# #4.
# class BankAccount:
#     def __init__(self, balance):
#         self.__balance=balance
#     @property
#     def balance(self):
#         return self.__balance
#     def deposit(self,amount):
#         self.__balance+=amount
#     def withdraw(self,amount):
#         self.__balance-=amount

# #5.
# class Person:
#     def __init__(self, first_name,last_name):
#         self.first_name=first_name
#         self.last_name=last_name
#     @property
#     def full_name(self):
#         return f"{self.first_name } {self.last_name}"
# print(Person("Ada", "Lovelace").full_name)

# #6.
# class Temperature:
#     def __init__(self, celsius):
#         self._celsius=celsius
#     @property
#     def fahrenheit(self):
#         fahr = self._celsius*1.8 + 32
#         return fahr
#     @fahrenheit.setter
#     def fahrenheit(self, f):
#         self._celsius= (f-32)*(5/9)

# #7.
# class Calculator:
#     def __init__(self, num):
#         self.num=num
#     @staticmethod
#     def is_even(n):
#         return n%2==0

# #8.
# class Point:
#     def __init__(self, x, y):
#         self.x=x
#         self.y=y
#     @classmethod
#     def from_tuple(cls, pair):
#         return cls(pair[0],pair[1])
# a= Point.from_tuple((5, 9))
# print(a.x)

# #9.
# class User:
#     count=0
#     def __init__(self, i):
#         self.i=i
#         User.count+=1
#     @classmethod
#     def how_many(cls):
#         return cls.count

#10.
class Product:
    def __init__(self, name, price):
        self._name=name
        self._price=price
    @property
    def name(self):
        return self._name
    @property
    def price(self):
        return self._price
    @price.setter
    def price(self, value):
        if value<0 or not isinstance(value,float):
            raise TypeError("invalid input")
        self._price=value