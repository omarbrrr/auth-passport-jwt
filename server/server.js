const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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
/* EXPRESS SETUP END */

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
