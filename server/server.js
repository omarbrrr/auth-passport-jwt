const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const users = require("./routes/api/users");

/* EXPRESS SETUP */
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
/* EXPRESS SETUP END */

/* MONGOOSE SETUP */
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
/* MONGOOSE SETUP END */

/* PASSPORT SETUP */
const passport = require("passport");

app.use(passport.initialize());

require("./config/passport")(passport);
/* PASSPORT SETUP END */

/* ROUTES */
app.use("/api/users", users);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
