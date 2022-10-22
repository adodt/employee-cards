//require Employee constructor 
const Employee = require('../lib/Employee')

//Employee object
test('creates employee object', () => {
    const employee = new Employee('Alli', 222, 'allidodt@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//tests employee name
test('get employee name', () => {
    const employee = new Employee('Alli', 222, 'allidodt@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//tests employee ID
test('get employee ID', () => {
    const employee = new Employee('Alli', 222, 'allidodt@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));

});

//tests employee email
test('get employee email', () => {
    const employee = new Employee('Alli', 222, 'allidodt@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

});

//tests employee role ()
test('gets role of employee', () => {
    const employee = new Employee('Alli', 222, 'allidodt@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});