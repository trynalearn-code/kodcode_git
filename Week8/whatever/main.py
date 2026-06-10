#1.
from fastapi import FastAPI

app=FastAPI()

# @app.get("/ping")
# def ping():
#     return {"status":"pong"}

# @app.get("/greet/{name}")
# def greet(name:str):
#     return {"message":f"Hello, {name}"}

# #2.
# @app.get("/")
# def root():
#     return {
#         "service":"my-api",
#         "version":"1.0"
#     }
# @app.get("/users/admin")
# def admin():
#     return {
#         "role":"admin",
#         "access":"full"
#         }
# @app.get("/users/{user_id}")
# def get_user(user_id:int):
#     return {
#         "user_id":user_id,
#         "name":"Yaakov",
#         "email":"yankyfux@gmail.com"
#     }

# #3.
# @app.get("/calc/{a}/{op}/{b}")
# def calc(a:int,op,b:int):
#     if op=="add":
#         result=a+b
#     elif op=="sub":
#         result = a-b
#     elif op== "mul":
#         result= a*b
#     elif op == "div":
#         if b==0:
#             return "you can't divide by 0, you idiot"
#         result = a/b
#     return {
#         "operation":op,
#         "result":result
#     }

# #4.
# from datetime import datetime
# @app.get("/status"):
# def current():
#     return {
#         "server":"example.com"
#         "time":str(datetime.now())
#     }
            
#5.
grades = {
"1": {"name": "Moshe", "grade": 88},
"2": {"name": "Yaakov", "grade": 75},
"3": {"name": "David", "grade": 92},
}

@app.get("/students")
def data():
    return grades
@app.get("/students/top")
def top():
    best = max(
    grades.values(),
    key=lambda student: student["grade"])
    return best
@app.get("/students/average")
def average():
    total=0
    for student in grades.values():
        total+=student["grade"]
    return {"average":total/len(grades)}
@app.get("/students/count")
def counts():
    return {"count": len(grades)}
@app.get("/students/{student_id}")
def get_student(student_id:str):
    return grades.get(student_id)