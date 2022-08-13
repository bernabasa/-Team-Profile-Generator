// require data from Intern.js
const Intern = require('../lib/Intern.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const intern = new Intern("Peter", 3, "Peter@gmail.com", "MIT");

    expect(intern.name).toEqual("Peter");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual("Peter@gmail.com");
});

// test for getting school name value using getSchool()
test('get Intern school name', () => {
    const intern = new Intern("Peter", 3, "Peter@gmail.com", "MIT");

    expect(intern.getSchool()).toEqual("MIT");
});

// test if getRole() overrides from 'Employee' to 'Intern'
test('get role of Intern, not Employee', () => {
    const intern = new Intern("Peter", 3, "Peter@gmail.com", "MIT");

    expect(intern.getRole()).toEqual("Intern");
});
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy