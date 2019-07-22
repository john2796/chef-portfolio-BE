# chef-portfolio-BE

##### Backend URL : https://chef-portfolio-webtp6.herokuapp.com/



## Table of Contents
 - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
   - [Register-user](#register-user)
   - [Login-user](#register-user)
   
   



### Summary Table of API Endpoints
| Type | Endpoints          | Description   |
| ---- | ------------------ | ------------- |
| POST | /api/auth/register | Register User |
| POST | /api/auth/login    | Login user    |


#### Register and Login Options
![](assets/loginoptions.png)



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