# Express Server: Online Bookstore


A RESTful API routes using Express. The application stores data in JSON request bodies, and allows users to add books
to their shopping cart, and buy books, while updating stock.

## Project Description

We have built a backend server for a small online Bookstore.

The server manages:

- Products
- Shopping carts
- Checkout
- Orders

There is no login system.

Instead, every request that belongs to a customer includes a customerId.

Environment Variables (.env)

The server configuration must be stored in a .env file.

Example:
```
PORT=3000
DB_BASE_PATH=./db
STARTING_BALANCE=500
```

### Product
Each product contains:

{
    id,
    name,
    price,
    stock
}

### Customer:
Each customer contains:
{
    customerId,
    balance,
    cart,
    createdAt
}

### Cart:
The cart is an array like:
[
    {
        productId,
        quantity
    }
]

### Order
Each completed purchase contains:

{
    id,
    customerId,
    items,
    total,
    createdAt
}

Each purchased item should include its quantity and purchase price.

### API Routes
GET /
Returns a welcome message.

GET /health
Checks whether the server is running.

GET /products
Returns all products.

Supports filtering using query parameters.

GET /cart
Returns a customer's shopping cart.
Requires:
?customerId=abc123
If customerId is missing:
400 Bad Request

POST /cart/items
Adds a product to the cart.

Body:
{
    "customerId": "abc123",
    "productId": 1,
    "quantity": 2
}
Validation:
all fields required
quantity > 0
quantity must be an integer
product must exist
enough stock must exist



DELETE /cart/items/:productId
Removes a product from the customer's cart.


GET /account/balance
Returns the customer's current balance.

GET /orders
Returns only that customer's previous orders.

GET /products?inStock=true
Returns only products with:
stock > 0
Maximum Price

GET /products?maxPrice=50
Returns products whose price is ≤ 50.

Search
GET /products?search=glasses
Returns products whose name contains the search text.




Status Codes
Code	When
200	Successful request
400	Bad request, validation failure, invalid JSON
404	Route or resource not found
500	Unexpected internal server error
Suggested Test Cases



