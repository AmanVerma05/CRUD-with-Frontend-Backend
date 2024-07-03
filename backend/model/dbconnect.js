var mysql = require("mysql");
var connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  port: "3306",
  database: "test",
});
connection.connect(function (err) {
  if (err) {
    console.log("error", err.sqlMessage);
  } else {
    console.log("connection Estabilished.....");
  }
});
module.exports = connection;
