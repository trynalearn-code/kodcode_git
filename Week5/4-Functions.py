# #1.
# def iseven(n):
#     if n%2==0:
#         return True
#     else:
#         return False
# print(iseven(10))

# #2.
# def factorial(n):
#     x=1
#     while n>0:
#         x=n*x
#         n-=1
#     return x
# print(factorial(7))

# #3.
# def count_vowels(s):
#     lst="aeiou"
#     vowels=0
#     for letter in s:
#         if letter.lower() in lst:
#             vowels +=1
#     return vowels
# print(count_vowels("Aberham"))

# #4. 
# def reverse_strings(s):
#     return s[::-1]
# print(reverse_strings("heybro"))

# #5.
# def find_max(lst):
#     max=0
#     for num in lst:
#         if num>max:
#             max=num
#     return max
# print(find_max([4,5,7,4,6,4,544,3]))

# #6.
# def C2F(temp):
#     return temp*9/5 +32
# print(C2F(43))

# #7.
# def is_palindrome(s):
#     half=len(s)//2
#     for i in range(half):
#         if s[i] != s[i-1]:
#             return False
#     return True
# print(is_palindrome("mother"))
    
# #8.
# def even_list(lst):
#     lsteven=[]
#     for num in lst:
#         if num%2==0:
#             lsteven.append(num)
#     return lsteven
# print(even_list([4,5,6,7,8,2,3]))

# #9.
# def are_anagrams(s1, s2):
#     return sorted(s1) == sorted(s2)
# print(are_anagrams("mom", "omm"))

# #10.
# def times_per_sentence(sentence):
#     words = sentence.split()
#     counts = {}
#     for word in words:
#         if word in counts:
#             counts[word] += 1
#         else:
#             counts[word] = 1
#     return counts
# print(times_per_sentence("I did not enjoy doing this assignment"))

# #11.
# def calculate_resource_drain(cost, waste_factor):
#     return cost*waste_factor
# def get_net_resources(cost, waste_factor):
#     drain=calculate_resource_drain(cost,waste_factor)
#     return cost-drain

# #12.
# def intercept_length(packet):
#     return len(packet)
# def verify_transmission(packet):
#     length=intercept_length(packet)
#     print(f"Intercepted packet contains {length} bytes of data")

# import math
# #13.
# def convert_to_decibels(signal_strength):
#     return 20 * math.log10(signal_strength)
# def  is_threat_detected(signal_strength):
#     level=convert_to_decibels(signal_strength)
#     if level>90:
#         return True
#     else:
#         return False
# signals = 50000
# print("Decibel Level:", convert_to_decibels(signals))
# print("Threat Detected:", is_threat_detected(signals))

#14.
def get_fuel_surcharge(distance):
    fuel_cost = (distance / 10) * 8
    surcharge = fuel_cost * 0.17
    return surcharge
def get_hazard_pay(distance):
    fuel_cost = (distance / 10) * 8
    return 0.05 * fuel_cost
def calculate_mission_cost(distance):
    fuel_cost = (distance / 10) * 8
    surcharge = get_fuel_surcharge(distance)
    hazard = get_hazard_pay(distance)
    total_cost = fuel_cost + surcharge + hazard
    return total_cost