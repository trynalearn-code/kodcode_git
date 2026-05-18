# #1.
# def sums(tup):
#     sum=0
#     for num in tup:
#         sum+=num
#     return sum
# print(sums((1, 2, 3, 4, 5)))

# #2.
# def maxes(tup):
#     maxx=0
#     for num in tup:
#         if num>maxx:
#             maxx=num
#     return maxx
# print(maxes((3, 7, 2, 8, 5)))

# #3.
# def counting(tup, n):
#     counts=0
#     for num in tup:
#         if num==n:
#             counts+=1
#     return counts
# print(counting((1, 2, 3, 2, 4, 2),2))

# #4.
# def reversing(tup):
#     return tuple(reversed(tup))
# print(reversing((1, 2, 3, 4)))

# #5.
# def swap_pairs(tup):
#     lst=[]
#     for i in range(0,len(tup),2):
#         lst.append(tup[i+1])
#         lst.append(tup[i])
#     return lst
# print(swap_pairs((1, 2, 3, 4, 5, 6)))
    
# #6. 
# def minmax(tup):
#     lst=[]
#     for num in tup:
#         lst.append(num)
#     a=sorted(lst)
#     b=a[0],a[-1]
#     return b
# print(minmax((4, 1, 7, 3, 5) ))

# #7.
# def euclidean(p1,p2):
#     x1,y1=p1
#     x2,y2=p2
#     return ((x2-x1)**2 +(y2-y1)**2) **.5
# print(euclidean((0, 0), (3, 4)))

# #8. 
# def merge_sort(tup1,tup2):
#     lst=[]
#     lst+=tup1+tup2
#     a=sorted(lst)
#     return tuple(a)
# print(merge_sort((3, 1, 4), (1, 5, 9)))

# #9.
# def frequency(tup):
#     count={}
#     for i in tup:
#         if i in count:
#             count[i]+=1
#         else:
#             count[i]=1
#     result = ()
#     for key in count:
#         result+=((key, count[key]),)
#     return result
# print(frequency(("a", "b", "a", "c", "b", "a")))

#10.
def rotate(tup,a):
    b=len(tup)
    a=a%b
    return tup[-a:]+tup[:-a]
print(rotate((1, 2, 3, 4, 5), 2))