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
            createHTML();
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
        managers.push(temp1);
        // console.log(manEmp);
        // console.log(temp1);
        // console.log(managers);
        createProf();
    })
};

function createEngineer() {
    inquirer.prompt(questEngineer).then(function(engEmp) {
        var temp2 = new Engineer(engEmp.Name, engEmp.Id, engEmp.Email, engEmp.github);
        engineers.push(temp2);
        // console.log(engEmp);
        // console.log(temp2);
        // console.log(engineers);
        createProf();
    })
};

function createIntern() {
    inquirer.prompt(questIntern).then(function(intEmp) {
        var temp3 = new Intern(intEmp.Name, intEmp.Id, intEmp.Email, intEmp.school);
        interns.push(temp3);
        // console.log(intEmp);
        // console.log(temp3);
        // console.log(engineers); 
        createProf();
    }) 
};

// push profiles to html
function createHTML() {
    
}


