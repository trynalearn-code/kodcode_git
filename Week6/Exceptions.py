# #1.
# def safe_int(s):
#     try:
#         return int(s)
#     except ValueError:
#         return None
#     except TypeError:
#         return None
#     except Exception:
#         return None
# print(safe_int("ab"))

# #2.
# def safe_divide(a,b):
#     try:
#         return a/b
#     except ZeroDivisionError:
#         return "undefined"

# #3.
# def read_first_line(path):
#     try:
#        with open(path, "r") as f:
#            first_line = f.readline()
#            return first_line
#     except FileNotFoundError:
#         return None
    
# #4.
# def get_value(d,key):
#     try:
#         return d[key]
#     except KeyError:
#         return "missing"

# #5.
# def parse_ints(values):
#     lst=[]
#     for value in values:
#         try:
#             lst.append(int(value))
#         except ValueError:
#             continue
#     return lst

# print(parse_ints(["1", "2", "x", "3", "y"]))

# #6.
# def set_age(age):
#     if 150<age or age<0:
#         raise ValueError
#     else:
#         return age
            
# print(set_age(490))

# #7.
# class InsufficientFundsError(Exception):
#     pass
    
#     def withdraw(balance, amount):
#         if balance>amount:
#             return balance-amount
#         else:
#             raise InsufficientFundsError

# #8.
# def retry(func, n):
#     try:
#         for x in range(n):
#             return func()
#     except:
#         return None
# #excersize not clear to me

# #9.
# def count_errors(funcs):
#     count=0
#     for funciton in funcs():
#         try:
#             funcs()
#         except Exception:
#             count+=1
#     return count

#10.
def load_config(path):
    try:
        with open(path, "r") as f:
            line=f.readline()
            return int(line)
    except Exception as e:
        raise RuntimeError("failed to load config") from e