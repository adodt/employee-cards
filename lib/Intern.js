//import employee constructor
const Employee = require('./Employee');

//Intern is extension of Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //Emoloyee school (from input)
    getSchool () {
        return this.school;
    }

    //Employee Role = Intern (overrides "employee")
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;