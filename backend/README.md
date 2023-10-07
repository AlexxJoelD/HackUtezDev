# 01-Hackathon-12 Backend Nodejs Konekta

---

###### Example .env added

### About 

It´s an application to connect two apps
### Collaborators

###### Devs
- Joel Alejandro Herrera Hernandez 

### Documentation

[DB SQL Scheme]() 

## First steps to set up the project with npm 

---

**Project Dependencies**

  + Create dates about the project -`npm init --yes`
  + Framework _Express.js_ to create server - `npm i express`
  + Allows to communicate between servers - `npm i cors`
  + Create environment variables - `npm i dotenv`
  + DB Postgres - `npm i pg`
  + Generate a token - `npm i jsonwebtoken`
  + Codification - `npm i bcryptjs`


  **Development Dependencies**

 + Just see the client request  - `npm i morgan  -D`
 + Install environment typescript -`npm i typescript -D`
 + Create tsc configuration file -`npx tsc --init`
 + Run project `npm i -D ts-node-dev`
 + Compatibility  `npm i @types/express @types/cors @types/pg @types/jsonwebtoken @types/bcryptjs -D`

Remove dependencies `npm uninstall <package>`

## Structure folders 

- src
  - assets
  - config
  - kernel
  - modules
    - adapters
    - entities
    - use-cases
      - ports
  - utils
  - index
- test 
  - collection postman
  - db script
- .env.example
- .gitignore
- tsconfig.json


### DevNotes

You can start the back-end with `npm run dev` this command it's on package.json
In your script you should use:
`""dev": "ts-node-dev --respawn --pretty --transpile-only src/index.ts"""`

[//]: # (`"dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\""`)

### ProjectNotes

1. It's better to do a modulation as Clean Architecture
2. We try to handle exceptions
3. There are three ways of sending values (Request)

   -  **uriParams** ~ Link /api/**:data** > request.params.{data}
   
   -  **queryParams** ~ api?name={data}&age={age} > req.query
   
   -  **paylod** ~ POST > req.body
   
4. Do destruction 
5. Add authentication with tokens


### Resources

- 