# #1.
# a=[1,2,3,4,5]
# sums=0
# for x in a:
#     sums+=x
# print(sums)

# #2.
# a=[3, 7, 2, 8, 5]
# max=0
# for num in a:
#     if num>max:
#         max=num
# print(max)

# #3.
# def count_amount(lst,num):
#     count=0
#     for x in lst:
#         if x==num:
#             count+=1
#     return count
# print(count_amount([1, 2, 3, 2, 4, 2],2))

# #4.
# def reverse_list(lst):
#     lst2=[]
#     for x in range(len(lst)):
#         nums=lst.pop()
#         lst2.append(nums)
#     return lst2
# print(reverse_list(lst=[1,2,3,4,5]))

# #5.
# def remove_dup(lst):
#     nums=[]
#     for num in lst:
#         if num not in nums:
#             nums.append(num)
#         else:
#             continue
#     return nums
# print(remove_dup([1, 2, 2, 3, 1, 4, 3]))

# #6.
# def second_largest(lst):
#     x=sorted(lst)
#     y=remove_dup(x)
#     if len(y)==1:
#         return None
#     else:
#         return y[-2]
# print(second_largest( [4, 1, 7, 7, 3, 5]))

# #7.
# def merge_lists(lst,lst2):
#     lst.extend(lst2)
#     return sorted(lst)

# print(merge_lists([1, 3, 5], [2, 4, 6]))

#8.
def rotate(lst,num):
    lst2=[]
    lst2.extend(lst[num+1:])
    lst2.extend(lst[:num+1])
    
    return lst2

print(rotate([1, 2, 3, 4, 5],2))
