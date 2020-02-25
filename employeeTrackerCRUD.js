 const mysql2 = require("mysql2");
 const inquirer = require("inquirer");
 const fs = require("fs");



 var connection = mysql2.createConnection({
    host: "localhost",
 // Your port; if not 3306
    port: 3306,
  // Your username
    user: "root",
  // Your password
    password: "",
    database: "employeetracker_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // createProduct();
  });