//setup the code to connect Node to MySQL.
//Export the connection.
//Export the ORM object in module.exports.

const mysql = require('mysql2');

const db = mysql.createConnection(
  process.env.JAWSDB_URL || process.env.LOCAL_URL
);

module.exports = db;
