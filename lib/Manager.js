const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = Math.floor(Math.random() * 100);
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;