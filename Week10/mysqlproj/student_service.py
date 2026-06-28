import student_repository

def add_student(data:dict):
    all=student_repository.get_all_students()
    for student in all:
        if data["id"] == student["id"]:
            raise ValueError("id is already in use")
        if data["email"] != None:
            if data["email"] == student["email"]:
                raise ValueError("email is already in use")
    student_repository.add_student(data)

def get_all_students():
    return student_repository.get_all_students()

def find_student_by_id(id:int):
    student=student_repository.find_student_by_id(id)
    if not student:
        raise KeyError("Your id can't be found")
    return student

def update_name(id,name):
    student=student_repository.update_name(id,name)
    if not student:
        raise KeyError("Your id can't be found")
    student_repository.update_name(id,name)

def delete_student(id):
    student=student_repository.delete_student(id)
    if not student:
        raise KeyError("Your student can't be found")
    student_repository.delete_student(id)

def count_students():
    return student_repository.count_students()