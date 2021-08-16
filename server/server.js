if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 5000;
const users = require("./routes/api/users");

/* EXPRESS SETUP */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
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
