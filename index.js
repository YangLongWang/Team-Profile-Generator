const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
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
    ]);
};

const promptEngineer = infoEngineerData => {
    // if there's no 'projects' array property, create one
    if (!infoEngineerData.engineer) {
        infoEngineerData.engineer = [];
    }

    console.log(`
    ==============
    Add a Engineer
    ==============  
    `);

    return inquirer.prompt([
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
        infoEngineerData.engineer.push(engineerData);
        return promptMenu(infoEngineerData);
    })
}

const promptIntern = infoInternData => {
    // if there's no 'projects' array property, create one
    if (!infoInternData.intern) {
        infoInternData.intern = [];
    }

    console.log(`
    ==============
    Add a Intern
    ==============  
    `);

    return inquirer.prompt([
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
        infoInternData.intern.push(internData);
        return promptMenu(infoInternData);
    })
}

const promptMenu = () => {
    console.log(`
    ============
    Menu Options
    ============ 
    `);

    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'role',
            message: "what would you add next?",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(choose)
}

const choose = optionData => {

    if (optionData.role === 'Engineer') {
        console.log('next: engineer');
        return promptEngineer;

    } else if (optionData.role === 'Intern') {
        console.log('next: intern');
        return promptIntern;
        
    } else {
        console.log('finish, next is generated HTML');
    }    
}

promptUser()
    .then(promptMenu)
    // .then(promptEngineer)
    // .then(promptIntern)
    // .then(choose)
    .catch(err => {
        console.log(err);
    });

