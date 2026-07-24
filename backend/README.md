# Inventory Management API

## Description
This project is a RESTful Inventory Management API developed using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on inventory products.

## Features
- Create a Product
- Get All Products
- Get Single Product
- Update Product
- Delete Product

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Run the Project

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

## Author

Mayank Singh Tanwar