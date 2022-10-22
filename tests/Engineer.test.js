//require Engineer constructor
const Engineer = require('../lib/Engineer');

//Engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Alli', 222, 'allidodt@gmail.com', 'adodt');
    expect(engineer.github).toEqual(expect.any(String));
});

//tests GitHub
test('get engineer github value', () => {
    const engineer = new Engineer('Alli', 222, 'allidodt@gmail.com');
    expect(engineer.getGithub().toEqual(epect.stringContaining(engineer.github.toString())));
});

//tests Role
test('get role of employee', () => {
    const engineer = new Engineer('Alli', 222, 'allidodt@gmail.com');
    expect(engineer.getRole()).toEqual("Engineer");
});

