const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const fs = require("fs");
const consoleTable = require("console.table");
const Roles = require("./Roles");
const employee= require("./employee");
const connection = require("../server.js");
// const db = require();
require("console.table");

async function genRoles(connection){
inquirer.prompt([
  {

    type: "list",
    name: "emplChoice",
    message: "Options for employee management?",
    choices: [
      "View Roles",
      "Add Role",
      "Update Role",
      "Delete Role",
      // "Employee by Department",
      "Return to main menu"
    ]
  }
]).then(userChoice => {
  console.log(userChoice);
  switch (userChoice.emplChoice) {
    case "View Roles":
      getRoleList(connection);
      break;
    case "Add Role":
      addRoles(connection);
      break;
    case "Update Role":
      updateRoles(connection);
      break;
    case "Delete Role":
      deleteRole(connection);
      break;
    case "Employee by Department":
      getEmplListByDept(connection);
      break;
    case "Return to main menu":
      init(connection);
      break;
  }
})

}

async function getRoleList(connection) {
  connection.query("SELECT * FROM role", function (err, res) {
  // connection.query("select * from employee", function (err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      console.table(res);
      genRoles(connection);
    });
  
};

async function addRoles(connection) {
  // getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the NEW Roles",
      name: "rolesName",
    },
    {
      type: "input",
      message: "Enter the salary of the NEW Roles",
      name: "salary",
    },
    {
      type: "input",
      message: "Enter the Department ID of the NEW Roles",
      name: "deptID",
    }
  ])
    // ])
    .then(function (data) {
      // INSERT INTO role (title,salary,department_id) VALUES ("doh",10,00);
      connection.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)", [data.rolesName,data.salar,data.deptID], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
      genRoles(connection);
    })
  // getDeptList()
  
};



async function updateRoles(connection) {
// getDeptList();
inquirer.prompt([
  {
    type: "input",
    message: "Enter the ID of the Role to update",
    name: "rolesID",
  },
  {
    type: "input",
    message: "Enter the Updated Name of the Roles",
    name: "rolesName",
  },
  {
    type: "input",
    message: "Enter the Salary of the Roles",
    name: "salary",
  }, {
    type: "input",
    message: "Enter the Department ID of the Roles",
    name: "deptID",
  }
])
  // ])
  .then(function (data) {
     // update role set title="mydoh", salary=10, department_id=6000 WHERE id = 6;
    connection.query("update role set title=(?), salary=(?), department_id=(?) WHERE id = (?)", [data.rolesName,data.salary,data.deptID, data.rolesID], function (err, result) {
      if (err) {
        return res.status(500).end();
      }
      genRoles(connection);
    });
  })
// getDeptList();

};

async function deleteRole(connection) {
  // getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Roles to delete",
      name: "rolesID",
    }
  ])
    // ])
    .then(function (data) {
     
      connection.query("Delete from role  WHERE id = (?)", [data.rolesID], function (err, res) {
        if (err) {
          return res.status(500).end();
        }
        genRoles(connection);
      });
    
    })
  // getDeptList();

 
};

exports.genRoles = genRoles;
// exports.getRoleList = getRoleList;
// exports.selectRole = selectRole;