# #1.
# def choose_members(list_of_members):
#     adult_active_members = []
#     for member in list_of_members:
#         if member[1] >= 18 and member[2] == True:
#             adult_active_members.append(member[0])
#     return adult_active_members

# full_member_list = [
#     ["Dan", 25, True],
#     ["Noa", 16, True],
#     ["Yael", 30, False],
# ]

# print(choose_members(full_member_list))

#2.    
def check_email_validity(user_email):
    if not user_email:
        print("Invalid user")
        return None

def invalid_quantity(quantity, stock):
    if quantity <= 0 or quantity > stock:
        print("Invalid quantity")
        return None

def calculate_price(quantity, product_price):
    price = product_price * quantity
    if quantity >= 10:
        price *= 0.9
    if quantity >= 50:
        price *= 0.85
    return price

def handle_purchase(user_email, product_name, product_price, stock, quantity, price):
    order_user = user_email
    order_product = product_name
    order_quantity = quantity
    order_total = price
    order_status = "confirmed"
    stock -= quantity
    print(f"Order {order_status}: {order_user} bought {order_quantity}x {order_product} for ${order_total}")
    return order_user, order_product, order_quantity, order_total, order_status
