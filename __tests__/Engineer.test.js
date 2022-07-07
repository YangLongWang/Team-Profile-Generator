const Engineer = require('../lib/Engineer');

// test('creates a engineer object', () => {
//     const engineer = new Engineer('Joey');

//     expect(engineer.name).toBe('Joey');
//     expect(engineer.id).toEqual(expect.any(Number));
//     expect(engineer.email).toEqual(expect.any(String));
//     expect(engineer.github).toEqual(expect.any(String));
// })

test("gets engineer's name", () => {
    const engineer = new Engineer('Joey');

    expect(engineer.getName()).toBe('Joey');
})

test("gets engineer's id", () => {
    const engineer = new Engineer('Joey');

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test("gets engineer's email", () => {
    const engineer = new Engineer('Joey');

    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test("gets engineer's github username", () => {
    const engineer = new Engineer('Joey');

    expect(engineer.getGithubUserName()).toEqual(expect.any(String));
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Joey');

    expect(engineer.getRole()).toEqual('Engineer');
})






// name
// id
// email
// getName()
// getId()
// getEmail()
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'