const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Joey', 1, '123@gmail.com');

    expect(employee.name).toBe('Joey');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee's name", () => {
    const employee = new Employee('Joey');

    expect(employee.getName()).toBe('Joey');
})

test("gets employee's id", () => {
    const employee = new Employee('Joey');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets employee's email", () => {
    const employee = new Employee('Joey');

    expect(employee.getEmail()).toEqual(expect.any(String));
})


