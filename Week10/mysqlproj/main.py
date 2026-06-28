import student_service
from db import create_table

def main():
    create_table()
    while True:
        print("1. Add Student \n2. Show students \n3. Find Student by id" \
        "\n4. Update student name\n 5. Remove Student \n6. Count Students")
        ask=int(input("What is your choice?"))
        if ask==1:
            try:
                student={
                "id": int(input("what is the student's id?")),
                "name": input("what is the student's name?"),
                "age": int(input("what is the student's age?")),
                "course": input("what is the student's course?"),
                "email": input("what is the student's email?"),
                "status": input("what is the student's status?")
                }
            except Exception as e:
                print(e)
            try:
                student_service.add_student(student)
            except Exception as e:
                print(e)
        elif ask==2:
            print(student_service.get_all_students())
        elif ask==3:
            student_service.find_student_by_id()
        elif ask==4:
            student_service.update_name()
        elif ask==5:
            student_service.delete_student()
        elif ask==6:
            student_service.count_students()

if __name__=="__main__":
    main()