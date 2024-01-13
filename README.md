# JWT Basics

## Installation

store api requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/Manojdhaka57/jwt-basics.git
cd jwt-basics
npm i
npm run app
```

# Environment Variables

To use the `jwt basics` API, you may need to set up the following environment variables:

- **MONGO_URI**: The URI of your MongoDB database.
- **PORT**: The port on which the server will run (optional, default is 5000).
- **JWT_SECRET**: Add you secret key for jwt token

You can set these environment variables in a `.env` file or through your hosting platform.

Example `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/your_database
PORT=5000
JWT_SECRET=addYourSecretKey
```

## Request

- Method: POST
- Endpoint: /api/v1/login

## Example Request

```sh
curl --location 'localhost:5000/api/v1/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "user11",
    "password": "secret"
}'
```

## Example Response

```sh
{
    "success": true,
    "msg": "User created",
    "token": "tokenString"
}
```

- Methon: GET
- Endpoint: /api/v1/dashboard

## Example Request

```sh
curl --location 'localhost:5000/api/v1/dashboard' \
--header 'Authorization: Bearer addYourToken'
```

## Example Response

```sh
{
    "msg": "Hello, user11",
    "secret": "Here is your authorized data, your lucky number is 14"
}
```
