const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log("App listening on port " + PORT));