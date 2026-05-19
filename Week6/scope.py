# #1.
# count=0
# def bump():
#     global count
#     count+=1
#     def value():
#         return count
# bump()
# bump()
# bump()
# print(count)

# #2.
# def make_counter():
#     count=0
#     def counter():
#         nonlocal count
#         count+=1
#         return count
#     return counter
# c=make_counter()
# print(c())
# print(c())
# print(c())

# #3.
# x = "global"
# def outer():
#     x = "enclosing"
#     def inner():
#         x = "local"
#         print(x)
#     inner()
#     print(x)
# print(x)
# outer()

# #4.
# list = [1, 2, 3]
# print(list(range(5)))
# #The problem is is that you are shadowing the word "list" which is a built in python function. but you named your own list "list". try lst next time

#5.
#done

#6.
#done

# #7.
# from datetime import datetime as dt
# print(dt.now())

# #8.
# def public_names(m):
#     names=[]
#     for name in dir(m):
#         if not name.startswith("_"):
#             names.append(name)
#     names.sort()
#     return names

#9.
def add_item(item, bag=[]):
    bag.append(item)
    return bag

#the bag keeps the old list. try this:
def add_item(item, bag=None):
    if bag is None:
        bag=[]
    bag.append(item)
    return bag