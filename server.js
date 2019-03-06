const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");

const routes = require("./routes");

const app = express();

//bodyparser middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// DB Config
const db = require("./config/keys").mongoURI;

// Connecting to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || db,
    { useNewUrlParser: true }
)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App listening on port " + PORT));

