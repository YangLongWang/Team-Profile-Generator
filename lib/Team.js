const inquirer = require('inquirer');

const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');

class Team {
    constructor() {
        this.manager = {};
        this.engineers = [];
        this.interns = [];
    }
    buildManager() {
        return new Promise((resolve, reject) => {
            resolve(
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is manager's name? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter a name!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "Enter your ID number. (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your ID!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is your email address? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter a email!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is your office number? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter your office number!');
                                return false;
                            }
                        }
                    }
                ])
                .then( ({name, id, email, officeNumber}) => {
                    const manager = new Manager(name, id, email, officeNumber);
                    this.manager = manager;
                })

            )
        })
    }
    
    buildMenu() {
        return new Promise((resolve, reject) => {
            resolve(            
                inquirer.prompt(
                    [
                        {
                            type: 'rawlist',
                            name: 'role',
                            message: "what would you add next?",
                            choices: ['Engineer', 'Intern', 'Finish']
                        }
                    ])
            )
        })
    }
    
    buildEngineer() {
        return new Promise((resolve, reject) => {
            resolve(
                inquirer.prompt(
                    [
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is engineer's name? (Required)",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Please enter a name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: "Enter his/her ID number. (Required)",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Please enter ID!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is his/her email address? (Required)",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Please enter a email!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: 'What is his/her Github username? (Required)',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log('Please enter his/her Github username!');
                                    return false;
                                }
                            }
                        }
                    ])
                    .then(engineerData => {
                        const {name, id, email, github} = engineerData;
                        this.engineers.push(new Engineer(name, id, email, github));
                    })
            )
        })
    }
    
    buildIntern() {
        return new Promise((resolve, reject) => {
            resolve(
                inquirer.prompt(
                    [
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is intern's name? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter a name!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "Enter his/her ID number. (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter ID!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is his/her email address? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter a email!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What is his/her school? (Required)',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Please enter his/her school!');
                                return false;
                            }
                        }
                    }
                ])
                .then(internData => {
                    const {name, id, email, school} = internData;
                    this.interns.push(new Intern(name, id, email, school));
                })
            )
        })
    }

    
};




module.exports = Team;