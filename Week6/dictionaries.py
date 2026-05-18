# #1.
# def sums(d):
#     summ=0
#     for k in d:
#         summ+=d[k]
#     return summ
# print(sums({"a": 1, "b": 2, "c": 3}))

# #2.
# def maxes(d):
#     max=0
#     for k in d:
#         if d[k]>max:
#             max=d[k]
#     return max
# print(maxes( {"a": 3, "b": 7, "c": 5}))

# #3.
# def counts(word):
#     dict={}
#     for k in word:
#         if k not in dict:
#             dict[k]=1
#         else:
#             dict[k]+=1
#     return dict
# print(counts("banana"))

# #4.
# def swapping(d):
#     dicts={}
#     for k,v in d.items():
#         dicts[v]=k
#     return dicts
# print(swapping( {"a": 1, "b": 2, "c": 3} ))

# #5.
# def merges(d,d2):
#     d.update(d2)
#     return d
# print(merges({"a": 1, "b": 2}, {"b": 20, "c": 30}))

# #6.
# def over_threshold(dic,t):
#     dicts={}
#     for item, val in dic.items():
#         if dic[item]>t:
#             dicts[item]=val
#     return dicts
# print(over_threshold( {"a": 1, "b": 5, "c": 3, "d": 8}, 3))

# #7.
# def group_by_first(lst):
#     words={}
#     for word in lst:
#         first=word[0]
#         if first not in words:
#             words[first]=[]
#         words[first].append(word)
#     return words
# print(group_by_first(["apple", "ant", "banana", "berry", "cherry"] ))

# #8.
# def frequency(wordss):
#     amount={}
#     words=wordss.split()
#     for word in words:
#         if word in amount:
#             amount[word]+=1
#         else:
#             amount[word]=1
#     return amount
# print(frequency( "the cat sat on the mat"))

# #9.
# def overlapping_keys(d1,d2):
#     keys=[]
#     for key in d1:
#         if key in d2:
#             keys.append(key)
#     keys.sort()
#     return keys

#10.
def most(d):
    lots={}
    for v in d.values():
        if v in lots:
            lots[v]+=1
        else:
            lots[v]=1
    most_common=None
    max=0
    for v,count in lots.items():
        if count>max:
            max=count
            most_common=v
    return most_common

print(most( {"a": 1, "b": 2, "c": 1, "d": 3, "e": 1} ))

        
