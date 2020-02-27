const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const fs = require("fs");
const consolTeable = require("console.table");

const department = require("./lib/department");
const roles = require("./lib/roles");
const employee = require("./lib/employee");
// const db = require("employeetracker_DB");



async function init() {
  inquirer.prompt([

    {
      type: "list",
      name: "mainMenu",
      message: "What would you like to do?",
      choices: ["Manage Departments",
        "Manage Roles",
        "Manage Employees",
        "Quit program"]
    }

  ]).then(function (ansOptions) {

    switch (ansOptions.mainMenu) {
      case 'Manage Departments':
        department.genDept();
        break;
      case 'Manage Roles':
        roles.genRole();
        break;
      case 'Manage Employees':
        employee.genEmpl();
        break;
      default:
        console.log("Exitting Employee Management Tool.");
        connection.end()
        break;
    }
  });
}

// init();

exports.init = init;
// exports.menu = inquirer.prompt(menu);