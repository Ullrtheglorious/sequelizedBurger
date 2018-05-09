// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express app and PORT
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Use static files in our public folder
app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routes/api-routes.js")(app);

// Start the server to begin listening
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});