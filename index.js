//dependicies
const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");
// const db = require("./db");

const gradient = require("gradient-string");

console.log(
  gradient.rainbow(`,-----------------------------------------------------.
|                                                     |
|     _____                 _                         |
|    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   |
|    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  |
|    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  |
|    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  |
|                    |_|            |___/             |
|                                                     |
|     __  __                                          |
|    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        |
|    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       |
|    | |  | | (_| | | | | (_| | (_| |  __/ |          |
|    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          |
|                              |___/                  |
|                                                     |
\`-----------------------------------------------------'
`)
);
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_db",
});

// connection.connect(function (err) {
//   if (err) throw err;
// mainQuestions();
// });

function mainQuestions() {
  inquirer
    .prompt({
      name: "questions",
      type: "list",
      message: "Please choose between the following",
      choices: [
        "View all employees",
        "View all departments",
        "View all rolls",
        "Add employee",
        "Add department",
        "Add roll",
        "Update roll",
        "All done",
      ],
    })

    .then((res) => {
      switch (res.questions) {
        case "View all employees":
          viewAllEmployees();
          break;
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all rolls":
          viewAllRolls();
          break;
        case "Add employee":
          AddEmployees();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add roll":
          addRoll();
          break;
        case "Update roll":
          updateRoll();
          break;

        default:
          break;
      }
    });
}

// handling view all employees
function viewAllEmployees() {
  connection.query(
    "SELECT employee.id, employee.last_name, employee.first_name, role.title, name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",

    function (err, res) {
      if (err) throw err;
      console.table(res);
      mainQuestions();
    }
  );
}

// handling view all depts
function viewAllDepartments() {
  connection.query(
    "SELECT * FROM  department",

    function (err, res) {
        if (err) throw err
        console.table(res)
        mainQuestions()
    }
)
}

// View all roll query
function viewAllRolls() {
  connection.query(
    "SELECT * FROM  role",
    function (err, res) {
        if (err) throw err
        console.table(res)
        mainQuestions()
    }
)
}

// Add a employee
function AddEmployees() {
//  adding the specific questions for adding an employee to an array of obj so we can just call the var name when we use inquirer
  var addEmployeeQuestions = [
  {
      type: "input",
      message: "What is the first name of the employee?",
      name: "first_name"
  },
  {
      type: "input",
      message: "What is the last name of the employee?",
      name: "last_name"
  },
  {
      type: "input",
      message: "What is the employee's title 1. Sales Team Lead 2. Sales Person 3. Accountant 4.Lead Finance Manager 5. Software Enginner 6. Lead Engineer 7. Lawyer 8. Legal Aide )?",
      name: "role_id"
  },
  {
      type: "input",
      message: "What is the manager id of the new employee (numerical value 1-9)?",
      name: "manager_id"
  }
  ]

  inquirer.prompt(addEmployeeQuestions).then(res=>{
    connection.query(
      "INSERT INTO employee SET ?",
      {
          first_name: res.first_name,
          last_name: res.last_name,
          role_id: res.role_id,
          manager_id: res.manager_id,
      },
      function (err) {
          if (err) throw err
          mainQuestions()
     
      }
  )
  })
}
// add a new dept
function addDepartment() {
  inquirer
  .prompt({
    type: "input",
    message: "What is the name of the new department?",
    name: "dept"
  }) 
  .then(function (res) {
    connection.query("INSERT INTO department SET ?",
        {
            name: res.dept,
        },
        function (err) {
            if (err) throw err
            mainQuestions()
        })
      })
}
// add roll
function addRoll() {
  var addRollQuestions = [
    {
      type: "input",
      message: "What is the name of the new role?",
      name: "title"
  },
  {
    type: "input",
    message: "Which id would you like to assign to the roll?",
    name: "id"
},
{
    type: "input",
    message: "What is the salary for the new role?",
    name: "salary"
}
  ]
  inquirer.prompt(addRollQuestions)
  .then(function (res) {
      connection.query("INSERT INTO role SET ?",
          {
              id: res.id,
              title: res.title,
              salary: res.salary,
          },
          function (err) {
              if (err) throw err
              mainQuestions()
          })
  })
}
// function to updateRoll
function updateRoll() {
  inquirer
  .prompt([
    {
    type: "input",
    name: "role_id",
    message: "Which role id number would you like to update (numerical value 1-8)?"
  },
  {
    type: "input",
    name: "employee_id",
    message: "What is the employee id number of the employee you want to put in the new role (numerical value 1-9)?"
  }
]).then(function(res) {
  connection.query("UPDATE employee SET role_id = ? WHERE id = ?",
  [
      res.role_id,
      res.employee_id
  ],
  function (err, result) {
      if (err) throw err
      console.table(result)
      console.log(result.affectedRows +  " row updated!")
  })
  
})

}
mainQuestions();
function allDone() {
  console.log("Thank you for visiting the Employee Manager!")
}


