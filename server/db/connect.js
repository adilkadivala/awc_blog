const mysql = require("mysql");

const connectionDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "awc",
});

module.exports = connectionDB;
