const Manager = require('../lib/Manager');

// test('creates a manager object', () => {
//     const manager = new Manager('Joey');

//     expect(manager.name).toBe('Joey');
//     expect(manager.id).toEqual(expect.any(Number));
//     expect(manager.email).toEqual(expect.any(String));
//     expect(manager.officeNumber).toEqual(expect.any(Number));
// })

test("gets manager's name", () => {
    const manager = new Manager('Joey');

    expect(manager.getName()).toBe('Joey');
})

test("gets manager's id", () => {
    const manager = new Manager('Joey');

    expect(manager.getId()).toEqual(expect.any(Number));
})

test("gets manager's email", () => {
    const manager = new Manager('Joey');

    expect(manager.getEmail()).toEqual(expect.any(String));
})

test("gets manager's office number", () => {
    const manager = new Manager('Joey');

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test("gets manager's role", () => {
    const manager = new Manager('Joey');

    expect(manager.getRole()).toEqual('Manager');
})






// name
// id
// email
// getName()
// getId()
// getEmail()
// officeNumber
// getRole() // Overridden to return 'Manager'