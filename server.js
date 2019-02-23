const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//bodyparser middleware
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connecting to the Mongo DB
mongoose.connect(
    db,
    { useNewUrlParser: true }
)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.get("/", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App listening on port " + PORT));
