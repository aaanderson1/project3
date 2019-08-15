// Set up MySQL connection.
var mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
    console.log(process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
  port: 3306,
  user: "root",
  password: "brandy978",
  database: "partyimagedb"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;