# #1.
# class Dog:
#     def __init__(self,name):
#         self.name=name
    
#     def bark(self):
#         return self.name + " says woof"
# print(Dog("Rex").bark())
# #2.
# class Rectangle:
#     def __init__(self, width, height):
#         self.width=width
#         self.height=height
#     def area(self):
#         return self.height*self.width
# print(Rectangle(3, 4).area())

# #3.
# class Counter:
#     def __init__(self):
#         self.count=0
#     def increment(self):
#         self.count+=1
#     def value(self):
#         return self.count
# c = Counter(); c.increment(); c.increment(); c.value()
# print(c.value())

# #4.
# class Point:
#     def __init__(self,x,y):
#         self.x=x
#         self.y=y
#     def __str__(self):
#         return f"({self.x}, {self.y})"

# print(Point(1, 2))

# #5.
# class BankAccount:
#     def __init__(self, balance=0):
#         self.balance=balance
#     def deposit(self, amount):
#         self.balance+=amount
#     def withdraw(self,amount):
#         if amount<=self.balance:
#             self.balance-=amount

# #6.
# class Temperature:
#     def __init__(self, temperature):
#         self.temperature=temperature
#     def to_fahrenheit(self):
#         return self.temperature*1.8 + 32
# print(Temperature(100).to_fahrenheit())

# #7.
# class Student:
#     school="kodcode"
#     def __init__(self,name):
#         self.name=name
        
# s1 = Student("Eyal")
# s2 = Student("Mordechai")

# s1.name = "Jared"
# print(s1.name)

# #8.
# class Player:
#     count=0
#     def __init__(self,name):
#         self.name=name
#         Player.count+=1
   
# #9.
# class Money:
#     def __init__(self, amount):
#         self.amount=amount
#     def is_more_than(self,other):
#         return self.amount>other.amount

#10.
class Playlist:
    def __init__(self, titles=None):
        if titles is None:
            self.titles=[]
        else:
            self.titles=titles
    def add(self,title):
        self.titles.append(title)
    def remove(self,title):
        self.titles.remove(title)
    def count(self):
        return len(self.titles)
    def __str__(self):
        return f"Playlist: {self.titles}"