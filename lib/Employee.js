//constructor 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //employee name (from input)
    getName() {
        return this.name
    }
    //employee ID (from input)
    getId() {
        return this.id;
    }
    //employee email (from input)
    getEmail() {
        return this.email;
    }

    //employee type. 'Employee' is base type. 
    getRole() {
        return 'Employee'
    }
};

// export
module.exports = Employee;