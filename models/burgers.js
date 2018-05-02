// DEPENDENCIES
var orm = require("../config/orm.js");



// CALL ORM FUNCTIONS -- Burger specific input
var burger = {

    // Select all burgers
    selectAll: function (cb) {
        // SELECT * FROM table
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Insert new burger
    insertOne: function (vals, cb) {
        // INSERT INTO table (col1, col2) VALUES (val1, val2)
        orm.insertOne("burgers", "burger_name", "devoured", vals, function (res) {
            cb(res);
        });
    },
    // Update burgers devoured state to true
    updateOne: function (objColVals, condition, cb) {
        // UPDATE table SET col1 = val1 WHERE col2 = val2
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

}



// Export the database functions for the controller
module.exports = burger;
