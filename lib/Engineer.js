const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = '', id=1, email='123@gmail.com', github='max') {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithubUserName() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}



module.exports = Engineer;