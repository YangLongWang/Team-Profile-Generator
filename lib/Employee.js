// const Data = require('../index');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 100);
        this.email = "674901205@qq.com";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;