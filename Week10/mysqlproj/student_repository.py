from db import get_connection

conn=get_connection()

def add_student(data):
    cursor=conn.cursor()
    cursor.execute(
        """
    INSERT INTO students(id,name,age, course, email, status)
    VALUES (%s,%s,%s,%s,%s,%s)
        """,
        (data["id"],
        data["name"],
        data["age"],
        data["course"],
        data["email"],
        data["status"])
    )
    conn.commit()
    cursor.close()

def get_all_students():
    cursor=conn.cursor(dictionary=True)
    cursor.execute(
        """
        SELECT * FROM students
        """
    )
    rows=cursor.fetchall()
    cursor.close
    return rows

def find_student_by_id(id:int):
    cursor=conn.cursor(dictionary=True)
    cursor.execute(
        """
    SELECT * FROM students
    WEHRE id=%s
        """,(id,)
    )
    ident=cursor.fetchone()
    cursor.close()
    return ident

def update_name(id:int,name:str):
    cursor=conn.cursor()
    cursor.execute(
        """
    UPDATE students 
    SET name = %s
    WHERE id = %s
        """(id,name)
    )
    conn.commit()
    cursor.close()

def delete_student(id):
    cursor=conn.cursor()
    cursor.execute(
        """
    DELETE FROM students
    WHERE id=%s
        """,id
    )
    conn.commit()
    cursor.close()

def count_students():
    cursor=conn.cursor()
    cursor.execute(
        """
    SELECT COUNT (*) FROM students
        """
    )
    count=cursor.fetchone()
    cursor.close()
    return count