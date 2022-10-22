//require Intern constructor
const Intern = require('../lib/Intern');

//Intern object
test('creates Intern object', () => {
    const intern = new Intern('Alli', 222, 'allidodt@gmail.com', 'ASU');
    expect(intern.school).toEqual(expect.any(String));
});

//tests school
test('get intern school', () => {
    const intern = new Intern('Alli', 222, 'allidodt@gmail.com', 'ASU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//tests role
test('get role of employee', () => {
    const intern = new Intern('Alli', 222, 'allidodt@gmail.com', 'ASU');
    expect(intern.getRole()).toEqual("Intern");
});