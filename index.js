// create page link
const generateHTML = require('./src/generateHTML');
//bring in employee roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//modules
const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

//Manager input
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name the manager of your team:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter name of manager before proceeding.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager ID number:",
            validate: nameInput => {
                if (isNan(nameInput)) {
                    console.log("Enter manager's ID number before proceeding.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your managers' email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Enter an email before proceeding.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumer',
            message: "What is your manager's office number?",
            validate: nameInput => {
                if (isNan(nameInput)) {
                    console.log("Enter the office number before proceeding.")
                    return false;
                } else {
                    return true;
                }
            }
        }

    ])
        //add manager to array
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

//Engineer and Intern input
const addEmployee = () => {
    console.log(`
    =================
    Add New Employees
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']

        },
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name'",
            validate: nameInput => {
                if (nameInput) {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Enter employee's name before proceeding.");
                        return false;
                    }
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID number:",
            validate: nameInput => {
                if (isNan(nameInput)) {
                    console.log('Enter employee ID number before proceeding.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email before proceeding.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Enter a valid email before proceeding.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter employee GitHub username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter emoloyee GitHub username before proceeding.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter intern's school before proceeding.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Add other employees?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role ==="Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


