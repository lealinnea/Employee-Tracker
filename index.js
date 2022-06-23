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
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Cheetah11",
//   database: "employees_db",
// });

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

function viewAllEmployees() {
//   connection.query(
//     "SELECT employee.id, employee.last_name, employee.first_name, role.title, name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",

//     function (err, res) {
//       if (err) throw err;
//       console.table(res);
//       beginTracker();
//     }
//   );
console.log ("view all employees")
}
mainQuestions();
