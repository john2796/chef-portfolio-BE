# chef-portfolio-BE

##### Backend URL : https://chef-portfolio-webtp6.herokuapp.com/



## Table of Contents
 - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
   - [Register-user](#register-user)
   - [Login-user](#register-user)
   - [Post](#post)
   
   



### Summary Table of API Endpoints
| Type | Endpoints          | Description                                      | Access  |
| ---- | ------------------ | ------------------------------------------------ | ------- |
| POST | /api/auth/register | Register User                                    | Public  |
| POST | /api/auth/login    | Login user                                       | Public  |
| GET  | /api/posts/all     | Get all posts                                    | Public  |
| GET  | /api/posts/        | Get all posts for that has the same id with user | Private |
| GET  | /api/posts/:id     | Get posts by id                                  | Public  |
| POST | /api/posts         | Creating new Post                                | Private |
| PUT  | /api/posts/:id     | Update Post                                      | Private |



#### Register-user

`Register example`
`Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/auth/register`
```
{
    "username": "john27", <-unique,required->
    "email": "john@yahoo.com", <-required->
    "password": "miranda", <-required->
    "location": "San Diego" <-required->
}

```
`Register user: 201 response ✅`
```
 {
    "id": 12,
    "username": "john miranda",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMiwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGEiLCJpYXQiOjE1NjM3NzA5MjgsImV4cCI6MTU2Mzg1NzMyOH0.6NS1ABm8VY0iu0ltLPjpGNlIxWQWaU3-YLnA0ll9XQU"

}
```

`Register user: 400 Bad Request ❗️`
```
{
    "message": "Username field is required"
}
```
`Register user: 500 Internal Server Errror ❗️`
```
{
    "message": "insert into `users` (`email`, `location`, `password`, `username`) values ('john@yahoo.com', 'San Diego', 'miranda', 'john27') - SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
}
```



#### Login-user
`Login example`
`Endpoint: https://chef-portfolio-webtp6.herokuapp.com/api/auth/login`
```
{
    "username": "john miranda12",
    "password": "password"
}

```
`Login user: 200 response ✅`
```
{
    "message": "john miranda12 is logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNCwidXNlcm5hbWUiOiJqb2huIG1pcmFuZGExMiIsImlhdCI6MTU2Mzc3MTM2MiwiZXhwIjoxNTYzODU3NzYyfQ.Vp1_TX_iBL9YPQ0kEPa8dzdQFcdXg8snDfbYND9RF8k"
}
```

`Login user: 400 Bad Request ❗️`
```
{
    "message": "Username field is required"
}
```
`Login user: 401 Internal Server Errror ❗️`
```
{
    "message": "Invalid credentials, Unauthorized"
}
```




#### Posts
`GET https://chef-portfolio-webtp6.herokuapp.com/api/posts ✅`
`sample data when getting post`
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
`GET https://chef-portfolio-webtp6.herokuapp.com/api/posts/5 ✅`
`- Getting Posts by id`
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

`- Creating new Post`
- this is a sample object of what you need when posting
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
