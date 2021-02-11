# Auth App

This is a fullstack authentication app.

The frontend is built with React and the backend is running on Node.js.

## Technologies

Frontend:

- React
- Redux
- Tailwind CSS
- Axios

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (JWT Strategy)

## Features

- Prevents non-logged users to access the app without logging in
- Submit validation in both the client and the server
- Keeps the user logged using localStorage

## Live URL

- The frontend app is hosted in Netlify
- The backend server is hosted in Heroku

The app is currently [live here](https://auth-passport-jwt.netlify.app/)

## Setting up

To set this project running locally, first clone this repository.

Now create a `.env` file in the `/server` directory with the following keys:
- MONGO_URI: The MongoDB connection string URL, including the name of the database you want to use (ex: "mongodb://localhost/auth_app")
- SECRET_OR_KEY: Another random and top secret value, used with Passport (ex: "secret_key")

Open a terminal in `/server`, install its node dependencies with `npm i` and run the development server with `npm run dev`.

Leave the server running and open a new terminal in `/client`. Install its node dependencies with `npm i` and run the development server with `npm start`.

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

Remember to have a MongoDB server running, otherwise the server app will throw an error.
