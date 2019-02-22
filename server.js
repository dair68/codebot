const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

//const Note = require("./noteModel.js");

//middleware
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to the Mongo DB
mongoose.connect(
    "mongodb://localhost/userdb",
    { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log("App listening on port " + PORT));
