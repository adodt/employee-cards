//import Employee constructor
const Employee = require('./Employee');

//Engineer is extension of Employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calls from Employee constructor
        super(name, id, email);
        this.github = github;
    }

    //Employee gitHub (from input)
    getGithub() {
        return this.github;
    }

    // Employee Role = Engineer (overrides "employee")
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;
