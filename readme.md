Problem Statement

A startup runs multiple warehouses to store and manage its inventory. They want a RESTful API that allows warehouse managers to:

Add new products to inventory.

Update product stock levels when new stock arrives

Fetch product details efficiently.

Handle concurrent stock updates abed and should be designed with The system should use MongoDB as the database and should be scalability in mind.

Requirements

Implement a Node.js Express API

Use MongoDB to store product details.

Implement CRUD operations:

POST/products Add a new product

PUT/products/:id Update stock.

GET/products/id Fetch product details.

Ensure that the system handles concurrent stock updates correctly.

Optimize database queries for scalability

Implement basic error handling