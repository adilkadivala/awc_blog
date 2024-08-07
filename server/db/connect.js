const mysql = require("mysql");

const connectionDB = mysql.createConnection({
  host: process.env.SERVER_HOST,
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DB_NAME,
});

module.exports = connectionDB;
