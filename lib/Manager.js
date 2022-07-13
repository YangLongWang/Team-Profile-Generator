const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name = '', id = 0, email='123@gmail.com', officeNumber=1) {
        super(name,id,email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;