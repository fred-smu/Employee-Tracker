
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
// const fs = require("fs");
const consoleTable = require("console.table");
// const roles = require("./roles");
// const employee = require("./employee");

// const db = require();
// require("console.table");


async function genDept(connection) {
// function genDept() {

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
        // "View total utilized budget of department", 
        "Return to main menu"
      ]
    }
  ]).then(userChoice => {
    console.log(userChoice);
    switch (userChoice.deptChoice) {
      case "View all departments":
        console.log("vd");
        getDeptList(connection);
        break;
        console.log();
        
      case "Add department":
        console.log("ad");
       addDepartment(connection);
       break;
      case "Update department":
        updateDepartment(connection);
        break;
      case "Remove department":
        removeDepartment(connection);
        break;
      case "View total utilized budget of department":
        viewDepartments(connection);
        break;
      // default:
      //   console.log("Exitting Department Management Tool.");
      //   // init();
      //   break;
    }
  })
}





async function getDeptList(connection) {
  console.log("get here");
  
  // await
   connection.query("SELECT * FROM department", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.table(data);
    genDept(connection);
  });
  
}

async function addDepartment(connection) {
  console.log("ad2");
  
  // getDeptList();
  inquirer.prompt([
    {
      type: "input",
      name: "deptChoice",
      message: "Enter the name of the NEW Department",
      name: "departmentName",
    }
  ]).then(userChoice => {
    console.log(userChoice);
      var departmentName = userChoice.departmentName;
      connection.query("INSERT INTO department (name) VALUES  (?)", [departmentName], function (err, res) {
        if (err) {
        
          return res.status(500).end();
        }
        console.log("01="+departmentName);
        genDept(connection)
      });
    })
}


async function updateDepartment(connection) {
  // getDeptList();
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
      // console.log("data= "+ data);
      var data1 = data;
      connection.query("update department set name = (?) WHERE id = (?)", [data1.departmentName, data1.departmentID], function (err, res) {
        // console.log("0");
        if (err) {
          return res.status(500).end();
        }
        genDept(connection);
      });
    })
};



async function removeDepartment(connection) {
  // getDeptList();
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
  ]).then(function (data) {
    // console.log(data);
    
      if(data.Confirm === "y"||data.Confirm === "Y"){
      connection.query("Delete from department  WHERE id = (?)", [data.departmentID.trim()], function (err, result) {
        if (err) {
          return res.status(500).end();
        }
        genDept(connection);
      });
    };
      // genDept();
    })
  // getDeptList();
};


// async function viewDepartments(connection) {
  
//   let values = [];

//   try {
//     console.log("try ");
//     // const results = await connection.query("SELECT * FROM department", function (err, data) {
  
//    connection.query("SELECT * FROM department", function (err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
//       // console.log("results" + data);
//       console.table(data);

//       data.forEach(res => { 
//         values.push(res.name); 
//       });
//       console.log(values);
//     });

//   } 
//   catch (err) {
//     console.log("error with viewUtiliedBudget",err);
//   }
//   console.log("2222 ");
//   // console.table([`Department`, values]);
//   console.table([ values]);
//    // genDept();
// };


exports.genDept = genDept;
exports.getDeptList = getDeptList;
