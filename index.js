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
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const questBase = [
    {
        name: "baseName",
        message: "Enter employee's name:",
        type: "input"
    },
    {
        name: "baseId",
        message: "Enter employee's ID serial:",
        type: "input"
    },
    {
        name: "baseEmail",
        message: "Enter employee's email:",
        type: "input"
    }
];

const questEngineer = [
    {
        name: "github",
        message: "Enter the engineer's GitHub account name:",
        type: "input"
    }
];

const questIntern = [
    {
        name: "school",
        message: "Enter the intern's school name:",
        type: "input"
    }
];

// add functions to:
// create new or Exit 
// ask what role 
// depending on role, ask base q's then specific q's 
// create "new Employee" 
// push profile to html
