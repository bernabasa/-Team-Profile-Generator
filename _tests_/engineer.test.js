// require data from Engineer.js
const Engineer = require('../lib/Engineer.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const engineer = new Engineer("Alex", 2, "Alex@gmail.com");

    expect(engineer.name).toEqual("Alex");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("Alex@gmail.com");
});

// test for getting github account name value using getGithub()
test('gets github account name', () => {
    const engineer = new Engineer("Alex", 2, "Alex@gmail.com", "AlexHub");

    expect(engineer.getGithub()).toEqual("AlexHub");
});

// test if getRole() overrides from 'Employee' to 'Engineer'
test('get role of Engineer, not Employee', () => {
    const engineer = new Engineer("Alex", 2, "Alex@gmail.com", "AlexHub");

    expect(engineer.getRole()).toEqual("Engineer");
});
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Securit