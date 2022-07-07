const Intern = require('../lib/Intern');

// test('creates a intern object', () => {
//     const intern = new Intern('Joey');

//     expect(intern.name).toBe('Joey');
//     expect(intern.id).toEqual(expect.any(Number));
//     expect(intern.email).toEqual(expect.any(String));
//     expect(intern.school).toEqual(expect.any(String));
// })

test("gets intern's name", () => {
    const intern = new Intern('Joey');

    expect(intern.getName()).toBe('Joey');
})

test("gets intern's id", () => {
    const intern = new Intern('Joey');

    expect(intern.getId()).toEqual(expect.any(Number));
})

test("gets intern's email", () => {
    const intern = new Intern('Joey');

    expect(intern.getEmail()).toEqual(expect.any(String));
})

test("gets intern's school", () => {
    const intern = new Intern('Joey');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern's role", () => {
    const intern = new Intern('Joey');

    expect(intern.getRole()).toEqual('Intern');
})






// name
// id
// email
// getName()
// getId()
// getEmail()
// school
// getSchool()
// getRole() // Overridden to return 'Intern '