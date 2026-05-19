# #1.
# def no_dup(lst):
#     return list(set(lst))
# print(no_dup([1, 2, 2, 3, 1, 4, 3]))

# #2.
# def count_elements(lst):
#     count=0
#     a=list(set(lst))
#     for x in a:
#         count+=1
#     return count
# print(count_elements([1, 2, 2, 3, 1, 4]))

# #3.
# def sharing(lst1,lst2):
#     lst1=set(lst1)
#     lst2=set(lst2)
#     return list(lst1 & lst2)
# print(sharing( [1, 2, 3, 4], [3, 4, 5, 6]))

# #4.
# def exact_not_share(lst1,lst2):
#     lst1=set(lst1)
#     lst2=set(lst2)
#     return lst1 ^ lst2
# print(exact_not_share( [1, 2, 3, 4], [3, 4, 5, 6]))

# #5.
# def subset(l1,l2):
#     return l1<l2
# print(subset([1, 2, 6], [1, 2, 3, 4, 5]))

# #6.
# def unique(stri):
#     sorts=sorted(stri)
#     if len(sorts)==len(stri):
#         return True
#     else:
#         return False
# print(unique("qwertyu"))

# #7.
# def repeat(lst):
#     for i in lst:
#         for j in lst:
#             if i==j:
#                 return(i)
#             else:
#                 continue
#     return None 
# print(repeat([1, 2, 3, 2, 4, 1]))

# #8.
# def spaces(stringg):
#     words=stringg.lower().split()
#     count = 0
#     have=[]
#     for word in words:
#         if word not in have:
#             have.append(word)
#             count+=1
#     return count
# print(spaces("The cat and the dog and the bird" ))

# #9.
# def pair_exists(n, target):
#     for i in range(len(n)):
#         for j in range(i+1, len(n)):
#             if n[i] +n[j]==target:
#                 return True
#     return False
# print(pair_exists([3, 1, 4, 7, 2], 6))
# print(pair_exists([3, 1, 4, 7, 2], 100))

#10.
def difference(l1,l2):
    dif=[]
    for x in l1:
        if x not in l2:
            dif.append(x)
    for x in l2:
        if x not in l1:
            dif.append(x)
    return dif
print(difference( [1, 2, 3, 4], [3, 4, 5, 6]))