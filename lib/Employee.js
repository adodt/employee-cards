//constructor 
class Employee {
    construstor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

//employee name 
getName () {
    return this.name
}
//employee ID
getId () {
    return this.id;
}
//employee email
getEmail () {
    return this.email;
}

//employee type. 'Employee' is base type.
getRole () {
    return 'Employee'
}
};

// export
module.exports = Employee;