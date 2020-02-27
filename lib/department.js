
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const fs = require("fs");
const consoleTable = require("console.table");
const roles = require("./roles");
const employee = require("./employee");
// const db = require();
require("console.table");


async function genDept() {

  inquirer.prompt([
    {
      type: "list",
      name: "deptChoice",
      message: "Department Management Options?",
      choices: [
        "View all departments",
        "Add department",
        "Update department",
        "Remove department",
        "View total utilized budget of department", 
        "Return to main menu"
      ]
    }
  ]).then(function (ansOptions) {
    switch (ansOptions.mainMenu) {
      case 'View all departments':
        department.getDeptList();
        break;
      case 'Add department':
        department.addDepartment();
        break;
      case 'Update department':
        department.updateDepartment();
        break;
      case 'Remove department':
        department.removeDepartment();
        break;
        case 'View total utilized budget of department':
        department.viewDepartments();
        break;
      default:
        console.log("Exitting Department Management Tool.");
        connection.end()
        break;
    }
  })
}





async function getDeptList() {
  connection.query("SELECT * FROM department;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
  });

}

async function addDepartment() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the NEW Department",
      name: "departmentName",
    }
  ])
    // ])
    .then(function (data) {
      connection.query("INSERT INTO department (department) VALUES (?)", [data], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
    })
  getDeptList()

}


async function updateDepartment() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Department to update",
      name: "departmentID",
    },
    {
      type: "input",
      message: "Enter the Updated Name of the Department",
      name: "departmentName",
    }
  ])
    // ])
    .then(function (data) {
      connection.query("UPDATE department SET department = ? WHERE id = ?", [data.departmentName, data.departmentID], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
    })
  getDeptList();


};



async function removeDepartment() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Department to delete",
      name: "departmentID",
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
      connection.query("Delete department  WHERE id = ?", [data.departmentID], function (err, result) {
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
async function viewDepartments() {
  
  let values = [];

  try {
    const results = await getDeptList();

    results.forEach(res => { 
      values.push([res.department]); 
    });
  } catch (err) {
    console.log("error with viewUtiliedBudget",err);
  }
  console.log(" ");
  console.table(['Department'],values);
  genDept();
};


exports.genDept = genDept;
exports.getDeptList = getDeptList;
