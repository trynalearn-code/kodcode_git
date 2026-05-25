# #1.
# with open("diary.txt", "w", encoding="utf-8") as f:
#     listoflines=["name: Jared \n date: 4/5/2043 \n This is cool!"]
#     f.writelines(listoflines)
#     print("The diary has successfully been created")

# with open("diary.txt", "r", encoding = "utf-8") as f:
#     for line in f:
#         print(line.strip())

# #2.
# def add_entry(filename, date, content):
#     with open("diary.txt", "a", encoding="utf-8") as f:
#         f.write("I've added a line to the diary using append!")
# add_entry("diary.txt", 2/3/1234, "hello")

# #3.
# def search_diary(filename, keyword):
#     with open(filename,"r",encoding="utf-8") as f:
#         for line in f:
#             if keyword in line:
#                 print(line)

# import os
# def safe_read_diary(filename):
#     if os.path.exists(filename):
#         return True
#     return False

