const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const fs = require("fs");
const consoleTable = require("console.table");
const department = require("./department");
const roles = require("./roles");
require("console.table");


const questions = {
  genEmpl: [
    {
      type: "list",
      name: "emplChoice",
      message: "Options for employee management?",
      choices: ["View all employees", 
                "Add employee", 
                "Eliminate employee",
                "Return to main menu" ]
    }
  ]
  
};

async function viewEmployees() {
  let values = [];

};


async function addEmployee() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the NEW Employee",
      name: "employeeName",
    }
  ])
    // ])
    .then(function (data) {
      connection.query("INSERT INTO employee (employee) VALUES (?)", [data], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
      });
    })
  getDeptList()
  
};

async function selectEmpl() {
 
};

async function deleteEmployee() {
  getDeptList();
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Employee to delete",
      name: "employeeID",
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
      connection.query("Delete employee  WHERE id = ?", [data.employeeID], function (err, result) {
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

async function genEmpl() {
}

async function getEmplListByDept(dept) {
  connection.query("SELECT * FROM employee order by department;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
  });
}

async function getEmplList(inq) {
  connection.query("SELECT * FROM employee;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
  });

}


async function updateEmplList(inq) {
getDeptList();
inquirer.prompt([
  {
    type: "input",
    message: "Enter the ID of the Employee to update",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Enter the Updated Name of the Employee",
    name: "employeeName",
  }
])
  // ])
  .then(function (data) {
    connection.query("UPDATE employee SET employee = ? WHERE id = ?", [data.employeeName, data.employeeID], function (err, result) {
      if (err) {
        return res.status(500).end();
      }
    });
  })
getDeptList();

};
exports.genEmpl = genEmpl;
exports.getEmplList = getEmplList;