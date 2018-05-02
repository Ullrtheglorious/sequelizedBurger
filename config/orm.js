var mysql = require("mysql");
var connection = require('./connection.js');



var orm = {

  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      console.log(cb);
      cb(res);
    });
  },

  insertOne: function(val, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, val, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  updateOne: function(condition, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [condition], function (err, res) {
      if (err) {
        throw err;
      }
      console.log(condition);
      cb(res);
    });

  }
}


module.exports = orm;