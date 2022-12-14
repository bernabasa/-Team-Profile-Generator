
// require data from Manager.js
const Manager = require('../lib/Manager.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const manager = new Manager("Jhon", 1, "Jhon@gmail.com");

    expect(manager.name).toEqual(manager.name);
    expect(manager.id).toEqual(manager.id);
    expect(manager.email).toEqual(manager.email);
});

// test to get office number from Manager class using getOfficeNum()
test('get Manager office number', () => {
    const manager = new Manager("Jhon", 1, "Jhon@gmail.com", 420);

    expect(manager.getOfficeNum()).toEqual(420);
});

// test if getRole() overrides from 'Employee' to 'Manager'
test('get role of Manager, not Employee', () => {
    const manager = new Manager("Jhon", 1, "Jhon@gmail.com", 420);

    expect(manager.getRole()).toEqual('Manager')
});