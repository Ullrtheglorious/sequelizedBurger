// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express app and PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Use static files in our public folder
app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up handlebars
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up routing
app.use(require('./controllers/burgers_controller.js'));

// Start the server to begin listening
app.listen(PORT, function () {
    console.log('Server is listening on port ' + PORT);
});