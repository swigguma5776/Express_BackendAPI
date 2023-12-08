# Express.js API for User Management

This Express.js API provides endpoints for managing users, including CRUD operations (Create, Read, Update, Delete).

## Requirements

- Node.js
- Express.js
- Postman or any API testing tool

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url> express-user-api
   cd express-user-api

2. Install Dependencies

   ```bash
   npm install

3. Start Server

   ```bash
   npm start

## API Endpoints 


### Get All Users
### GET /users


### Get User by ID
### GET /users/:id


### Create User
### POST users

    Body:
    json
    
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "occupation": "Software Engineer", 
      "age": 30
    }

    
### Update User by ID
#### PATCH users/:id


    Body: (fields to update)
    json
    Copy code
    {
      "firstName": "Updated Name",
      "age": 32
      // Add other user properties here
    }


    
### Delete User by ID
### DELETE users/:id

