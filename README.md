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

### Test Account

- Email: test@test.com
- Password: test1234

## Setting up

To set this project running locally, first clone this repository.

Now rename `.env.example` file to `.env` in both the `/client` and `/server` directories.

Open a terminal for `/client` and another for `/server`. Install the node dependencies with `npm i` in both terminals.

Run the client app with `npm start` and the server app with `npm run dev`.

Open [http://localhost:5000](http://localhost:5000) in your browser to view the application.

Remember to have a MongoDB server running, otherwise the server app will throw an error.
