const mysql2 = require("mysql2");

// const db = require("employeetracker_DB");
connect();

async function connect() {

  var connection = await mysql2.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "employeetracker_DB"
  });
  const init = require("./init")
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init.init(connection);
    //  connection.end();
  });

}

//connection.query = util.promisify(connection.query)
// exports.init = init;
// module.exports = connection;