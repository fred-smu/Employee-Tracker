const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
require("console.table");

genEmpl
async function genEmpl(connection){
inquirer.prompt([
  {

    type: "list",
    name: "emplChoice",
    message: "Options for employee management?",
    choices: ["View all employees",
      "Add employee",
      "Update Employee",
      "Delete employee",
      // "Employee by Department",
      "Return to main menu"
    ]
  }
]).then(userChoice => {
  console.log(userChoice);
  switch (userChoice.emplChoice) {
    case "View all employees":
      viewEmployees(connection);
      break;
    case "Add employee":
      addEmployee(connection);
      break;
    case "Update Employee":
      updateEmplList(connection);
      break;
    case "Delete employee":
      deleteEmployee(connection);
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


async function viewEmployees(connection) {
  
   connection.query("select * from employee", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
    genEmpl(connection);
  });
};


async function addEmployee(connection) {
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name of the employee",
     },
    {
      type: "input",
      name: "lastName",
      message: "Enter the last name of the employee",
    } ,{
      type: "input",
      name: "role_id",
      message: "Enter the Role ID of the employee",
    }, {
      type: "input",
      name: "manager_id",
      message: "Enter the Manager ID of the employee",
    }, {
      type: "input",
      name: "department",
      message: "Enter the epartment ID of the employee",
    }
  ]).then(userChoice => {
    
    var id = userChoice.id;
      var firstName = userChoice.firstName;
      var lastName = userChoice.lastName;
      var role_id = userChoice.role_id;
      var manager_id = userChoice.manager_id;
      var department = userChoice.department;
                        // INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (1,"john", "smith",  100 ,null,3);
       connection.query("INSERT INTO employee  (first_name,last_name,role_id,manager_id,department)VALUES   (?,?,?,?,?)", [firstName,lastName,role_id,manager_id,department], function (err, res) {
        
        if (err) {
          return res.status(500).end();
        }
        viewEmployees(connection);
        genEmpl(connection);
      });
    })
  // getDeptList();

};
async function updateEmplList(connection) {

 
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter the ID of the employee to update",
     },
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name of the employee",
     },
    {
      type: "input",
      name: "lastName",
      message: "Enter the last name of the employee",
    } ,{
      type: "input",
      name: "role_id",
      message: "Enter the Role ID of the  employee",
    }, {
      type: "input",
      name: "manager_id",
      message: "Enter the Manager ID of the  employee",
    }, {
      type: "input",
      name: "department",
      message: "Enter the epartment ID of the  employee",
    }
  ]).then(userChoice => {
    // console.log(userChoice);
    var id = userChoice.id;
      var firstName = userChoice.firstName;
      var lastName = userChoice.lastName;
      var role_id = userChoice.role_id;
      var manager_id = userChoice.manager_id;
      var department = userChoice.firdepartmentstName;
                               //  update employee set first_name="derf", last_name="ohno", role_id=1, manager_id=1, department=1 WHERE id = 13 
      var data = connection.query("update employee set first_name=(?), last_name=(?) , role_id=(?), manager_id=(?), department=(?) WHERE id = (?)", [firstName, lastName,role_id,manager_id,department,id], function (err, res) {
        console.log(data);
      if (err) {
        
          return res.status(500).end();
        }
        // console.log("01="+departmentName);
        genEmpl(connection);
      });
    })

};



async function deleteEmployee(connection) {
  // getDeptList(connection);
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the Employee to delete",
      name: "employeeID",
    },
    
  ])
    // ])
    .then(function (data) {
      console.log("www  " +data.confirm);
      
      

        connection.query("Delete from employee  WHERE id = (?)", [data.employeeID], function (err, res) {
          if (err) {
            return res.status(500).end();
          }
          genEmpl(connection);
        });
      

        // genEmpl();
     
    })
  // getDeptList();

};


async function getEmplListByDept(connection) {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the department to sortby",
      name: "departmenmtID",
    }
  ])
  connection.query("SELECT * FROM employee where department = (?);",[data1.departmentName], function (err, data) {
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



exports.genEmpl = genEmpl;
exports.getEmplList = getEmplList;