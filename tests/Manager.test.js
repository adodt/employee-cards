//Manager constructor
const Manager = require('../lib/Manager');

//create Manager object
test('create Manger object', () => {
    const manager = new Manager('Alli', 222, 'allidodt@gmail.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//tests Role
test('get role of employee', () => {
    const manager = new Manager('Alli', 222, 'allidodt@gmail.com', 1);
    expect(manager.getRole()).toEqual("Manager");

});