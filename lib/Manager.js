//import Employee constructor
const Employee = require('./Employee');

//manager is extension of employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //Employee Role = Manager (overrides "employee")
    getRole() {
        return "Manager";
    }
}

//export
module.exports = Manager;