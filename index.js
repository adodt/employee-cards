// create page link
const generateHTML = require('/src/generateHTML');
//bring in employee roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//modules
const fs = requite('fs');
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
                    console.log("Enter name of manager before moving forward.");
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
                    console.log("Enter manager's ID number before moving forward.")
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
                    console.log('Please enter an email!')
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
                    console.log("Enter the office number before moving forward.")
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
const addEmployee
