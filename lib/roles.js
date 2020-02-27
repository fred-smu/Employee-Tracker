const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const fs = require("fs");
const consoleTable = require("console.table");
const Roles = require("./Roles");
const employee= require("./employee");
// const db = require();
require("console.table");

questions =  {
  genRole: [
    {
      type: "list",
      name: "genRole",
      message: "Role management?",
      choices: [ "View all roles",
                 "Add role",
                 "Update role",
                 "Remove role",
                 "Return to main menu"
                ]
    }
  ]
};

async function getRoleList() {
  connection.query("SELECT * FROM roles;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
  });
  
};

async function viewRole() {
  
};

async function selectRole() {

};

async function deleteRole() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Roles to delete",
      name: "rolesID",
    },
    {
      type: "input",
      message: "Confirm delete by entering `Y`",
      name: "Confirm",
    }
  ])
    // ])
    .then(function (data) {
      if(data.Confirm === "y"||data.Confirm === "Y"){
      connection.query("Delete roles  WHERE id = ?", [data.rolesID], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
    }else{

      genDept();
    };
    })
  getDeptList();

 
};

async function genRole() {
 


};

async function addRoles() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the NEW Roles",
      name: "rolesName",
    }
  ])
    // ])
    .then(function (data) {
      connection.query("INSERT INTO roles (roles) VALUES (?)", [data], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
    })
  getDeptList()
  
};


async function updateRoles() {
getDeptList();
inquirer.prompt([
  {
    type: "input",
    message: "Enter the ID of the Roles to update",
    name: "rolesID",
  },
  {
    type: "input",
    message: "Enter the Updated Name of the Roles",
    name: "rolesName",
  }
])
  // ])
  .then(function (data) {
    connection.query("UPDATE Roles SET roles = ? WHERE id = ?", [data.rolesName, data.rolesID], function (err, result) {
      if (err) {
        return res.status(500).end();
      }
    });
  })
getDeptList();

};


exports.genRole = genRole;
exports.getRoleList = getRoleList;
exports.selectRole = selectRole;