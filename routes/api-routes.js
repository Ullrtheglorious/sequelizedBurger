var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the burgers
    app.get("/api/Burgers", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurgers) {
            // We have access to the burgers as an argument inside of the callback function
            res.json(dbBurgers);
        });
    });

    // POST route for saving a new burger. You can create a burger using the data on req.body
    app.post("/api/Burgers", function (req, res) {
        db.Burgers.create({
      text: req.body.text,
      complete: req.body.complete
        }).then(function (dbBurgers) {
            res.json(dbBurgers);
    })
      .catch(function(err) {
        res.json(err);
      });
    });

    // PUT route for updating todos. The updated todo will be available in req.body
    app.put("/api/Burgers", function (req, res) {
        db.Burgers.update({
            devoured: req.body.complete
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbBurgers) {
                res.json(dbBurgers);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};
