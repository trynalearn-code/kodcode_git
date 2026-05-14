# #1.
# for x in range(1,10):
#     if x%2==0:
#         continue
#     if x==7:
#         break
#     else:
#         print(x)

# #2.
# while True:
#     password=input("what is the password?")
#     if password=="1234":
#         print("Welcome!")
#         break
#     else:
#         print("try again")

# #3.
# lst=[]
# while True:
#     ask=input("what you want to add to the list bro? ('done' to exit)")
#     if ask=="done":
#         break
#     lst.append(ask)

# print(lst)

# #4.
# lst="aeiou"
# vowels=0
# ask=input("what is your word?")
# for letter in ask:
#     if letter.lower() in lst:
#         vowels +=1
# print(f"you have {vowels} vowels in your word")

#5.
for i in range(1,6):
    for j in range(1,6):
        print(i*j, end="")
    print()