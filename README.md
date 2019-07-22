# chef-portfolio-BE

##### Backend URL : https://chef-portfolio-webtp6.herokuapp.com/

## Table of Contents

- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)

  - [Register-user](#register-user)
  - [Login-user](#register-user)
  - [Posts](#posts)

### Summary Table of API Endpoints

| Type   | Endpoints          | Description                                      | Access  |
| ------ | ------------------ | ------------------------------------------------ | ------- |
| POST   | /api/auth/register | Register User                                    | Public  |
| POST   | /api/auth/login    | Login user                                       | Public  |
| GET    | /api/posts/all     | Get all posts                                    | Public  |
| GET    | /api/posts/        | Get all posts for that has the same id with user | Private |
| GET    | /api/posts/:id     | Get posts by id                                  | Public  |
| POST   | /api/posts         | Creating new Post                                | Private |
| PUT    | /api/posts/:id     | Update Post                                      | Private |
| DELETE | /api/posts/:id     | DELETE Post                                      | Private |

### If Access is Private you need to pass token as header (Authorization...)

## Register-user

`Register example`

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/auth/register

```
{
    "username": "john27",            has to be unique,required
    "email": "john@yahoo.com",                        required
    "password": "miranda",                            required
    "location": "San Diego"                           required
}

```

#### Register user: 201 response ✅

```
 {
    "id": 1,
    "username": "john miranda",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGEiLCJpYXQiOjE1NjM3NzA5MjgsImV4cCI6MTU2Mzg1NzMyOH0.6NS1ABm8VY0iu0ltLPjpGNlIxWQWaU3-YLnA0ll9XQU"

}
```

#### Register user: 400 Bad Request ❗️

```
{
    "message": "Username field is required"
}
```

#### Register user: 500 Internal Server Errror ❗️

```
{
    "message": "insert into `users` (`email`, `location`, `password`, `username`) values ('john@yahoo.com', 'San Diego', 'miranda', 'john27') - SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
}
```

## Login-user

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/auth/login

`Login example`

```
{
    "username": "john miranda12",
    "password": "password"
}

```

#### Login user: 200 response ✅

```
{
    "message": "john miranda12 is logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNCwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGExMiIsImlhdCI6MTU2Mzc3MTM2MiwiZXhwIjoxNTYzODU3NzYyfQ.Vp1_TX_iBL9YPQ0kEPa8dzdQFcdXg8snDfbYND9RF8k"
}
```

#### Login user: 400 Bad Request ❗️

```
{
    "message": "Username field is required"
}
```

#### Login user: 401 Internal Server Errror ❗️

```
{
    "message": "Invalid credentials, Unauthorized"
}
```

## Posts

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts

#### @description be aware you this is a private route once hit this api/endpoint it return you this data below for successfull response, if you don't get this carefully read the error response or status code

```
[
    {
        "id": 1,
        "chef_name": "Erica",
        "recipe_title": "Pizza",
        "item_photo": "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "chef_location": "Boston, Massachusetts",
        "item_ingredients": "Pizza Dough, Pizza Sauce, Cheese, Basil",
        "user_id": 1
    },
]

```

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts/5

#### @description Getting Posts by id, you just need to add posts id onto the URL , upon success response you will get this data

```
{
    "id": 5,
    "chef_name": "Mitsuki",
    "recipe_title": "Soup",
    "item_photo": "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "chef_location": "Austin, TX",
    "item_ingredients": "Water, Tomatoes, Cream, Basil",
    "user_id": 2
}

```

### Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/posts/

#### @description Creating new post you will need to make a `POST` request with these payload example

```
{
    "chef_name": "Mitsuki",
    "recipe_title": "Soup",
    "item_photo": "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "chef_location": "Austin, TX",
    "item_ingredients": "Water, Tomatoes, Cream, Basil",
    "user_id": 2
}

```
