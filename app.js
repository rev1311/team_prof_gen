const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require('inquirer');
const fs = require('fs');

const questCreate = [
    {
        name: "create",
        message: "Create a new employee?",
        type: "list",
        choices: ["yes", "no"]
    }
];

const questRole = [
    {
        name: "role",
        message: "Choose employee's role:",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
        filter: function(val) {
            return val.toLowerCase();
        }
    }
];

const questManager = [
    {
        name: "Name",
        message: "Enter employee's name:",
        type: "input"
    },
    {
        name: "Id",
        message: "Enter employee's ID serial:",
        type: "input"
    },
    {
        name: "Email",
        message: "Enter employee's email:",
        type: "input"
    }
];

const questEngineer = [
    {
        name: "Name",
        message: "Enter engineer's name:",
        type: "input"
    },
    {
        name: "Id",
        message: "Enter engineer's ID serial:",
        type: "input"
    },
    {
        name: "Email",
        message: "Enter engineer's email:",
        type: "input"
    },
    {
        name: "github",
        message: "Enter engineer's GitHub account name:",
        type: "input"
    }
];

const questIntern = [
    {
        name: "Name",
        message: "Enter intern's name:",
        type: "input"
    },
    {
        name: "Id",
        message: "Enter intern's ID serial:",
        type: "input"
    },
    {
        name: "Email",
        message: "Enter intern's email:",
        type: "input"
    },
    {
        name: "school",
        message: "Enter the intern's school name:",
        type: "input"
    }
];

const managers = [];
const engineers = [];
const interns = [];

createProf();

function createProf() {
    inquirer.prompt(questCreate).then(function(prof) {
    //    console.log(prof.create)
        if (prof.create === 'yes') {
            createRole();
        } else {
            console.log("Exit");
        }
    })
};

function createRole() {
    inquirer.prompt(questRole).then(function(role) {    
        // console.log(role.role);
        if (role.role === 'manager') {
            createManager();
        } else if (role.role === 'engineer') {
            createEngineer();
        } else if (role.role === 'intern') {
            createIntern();
        }
    });
};

function createManager() {
    inquirer.prompt(questManager).then(function(manEmp) {
        var temp1 = new Manager(manEmp.Name, manEmp.Id, manEmp.Email);
        var manCard =
       `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manEmp.Name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manEmp.role}</h6>
          <p class="card-text">${manEmp.Id}</p>
          <a href="#" class="card-link">${manEmp.Email}</a>
          <a href="#" class="card-link">Office 100</a>
        </div>
        </div>`;
        managers.push(manCard);
        writeHTMLm();
        createProf();
    })
};

function createEngineer() {
    inquirer.prompt(questEngineer).then(function(engEmp) {
        var temp2 = new Engineer(engEmp.Name, engEmp.Id, engEmp.Email, engEmp.github);
        var engCard =
       `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engEmp.Name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engEmp.role}</h6>
          <p class="card-text">${engEmp.Id}</p>
          <a href="#" class="card-link">${engEmp.Email}</a>
          <a href="#" class="card-link">${engEmp.github}</a>
        </div>
        </div>`;
        engineers.push(engCard);
        writeHTMLe();
        createProf();
    })
};

function createIntern() {
    inquirer.prompt(questIntern).then(function(intEmp) {
        var temp3 = new Intern(intEmp.Name, intEmp.Id, intEmp.Email, intEmp.school);
        var intCard =
       `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intEmp.Name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intEmp.role}</h6>
          <p class="card-text">${intEmp.Id}</p>
          <a href="#" class="card-link">${intEmp.Email}</a>
          <a href="#" class="card-link">${intEmp.school}</a>
        </div>
        </div>`;
        interns.push(intCard);
        writeHTMLi();
        createProf();
    }) 
};

function writeHTMLm() {
    fs.appendFileSync("./output/manager.html", managers, function(err) {
        if (err) {
          console.log(err);
        }
        console.log("Manager Successfully Added!");      
    });
};

function writeHTMLe() {
    fs.appendFileSync("./output/engineer.html", engineers, function(err) {
        if (err) {
          console.log(err);
        }
        console.log("Engineer Successfully Added!");      
    });
};

function writeHTMLi() {
    fs.appendFileSync("./output/intern.html", interns, function(err) {
        if (err) {
          console.log(err);
        }
        console.log("Intern Successfully Added!");      
    });
};

