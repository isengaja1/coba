# Smart Farming API
Powered by Express JS | ACES Labs

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

#### Installation
Clone repositories:
```sh
git clone https://github.com/ghofaralhasyim/smart-farm-backend.git
```
Open directory:
```sh
cd smart-farm-backend
```
Install dependencies:
```sh
npm i
```
Start smart-farm-backend:
```sh
nodemon start
```
*notes : if nodemon unrecognized command, you need to install nodemon globaly: **npm install -g nodemon**

#### Environment
```sh
DB_URI={your_mongo_uri_access}
JWT_KEY={your_jwt_secret_key}
```
#### Documentation
API URL : https://smart-farm-backend.vercel.app

**Get all data logs (admin)**
```sh
GET  /api/data-logs
```
**Get data log by id(admin)**
```sh
GET  /api/data-logs/{id_log}
```
**Post single data**
```sh
POST  /api/data-logs/add-single-data
```
body:
{ 
  "timestamp": 1664264826855,
  "idNode": 3,
  "airTemp": 0.5,
  "airHum": 25.5,
  "soilHum": 25.5,
  "gps": {
    "lat": 12.2823,
    "long": -34.23
  }
}

**Post multiple data**
```sh
POST  /api/data-logs/add-data
```
body: [object, object, ...]
object : 
{ 
  "timestamp": 1664264826855,
  "idNode": 3,
  "airTemp": 0.5,
  "airHum": 25.5,
  "soilHum": 25.5,
  "gps": {
    "lat": 12.2823,
    "long": -34.23
  }
}

**Generate gateway token:**
```sh
POST  /api/gateways/generate
```

body:
{
  "name" : "testt"
}

**User sign in**
```sh
POST  /api/user/signin
```

body:
{ 
  "email": "example@example.com",
  "password": "VerySecurePassword"
}

**List all users(admin)**
```sh
GET /api/user/all
```


**Sign up new user**
```sh
POST /api/user/all
```
body:
{ 
  "email": "example@example.com",
  "password": "VerySecurePassword"
}

**Sign up new admin(admin)**
```sh
POST /api/user/adminSignup
```
body:
{ 
  "email": "example@example.com",
  "password": "VerySecurePassword"
}

**Verify a user(admin)**
```sh
PUT /api/user/userVerify
```
body:
{ 
  "_id": "akdfainadlanf"
}


