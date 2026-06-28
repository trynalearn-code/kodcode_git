import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        port=3306,
        user="root",
        password="root",
        database="students_db"
    )

def create_table():
    conn=get_connection()
    cursor=conn.cursor()
    cursor.execute(
        """
CREATE TABLE IF NOT EXISTS students (
   id INT PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   age INT NOT NULL,
   course VARCHAR(100) NOT NULL,
   status VARCHAR(20) DEFAULT 'active',
   email VARCHAR(150) UNIQUE
);
"""     
    )           
    conn.commit()
    cursor.close()
    conn.close()
        