const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const fs = require('fs');

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

const promptMenu = employeeData => {
    if (!employeeData.engineers) {
        employeeData.engineers = [];
    }    
    if (!employeeData.interns) {
        employeeData.interns = [];
    }
    // console.log(employeeData);

    console.log(`
    ============
    Menu Options
    ============ 
    `);

    return inquirer.prompt(
        [
        {
            type: 'rawlist',
            name: 'role',
            message: "what would you add next?",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(optionData => {
        if (optionData.role === 'Engineer') {
            return promptEngineer(employeeData)
        } else if (optionData.role === 'Intern') {
            return promptIntern(employeeData);
            
        } else {
            console.log('finish, next is generated HTML');
            return employeeData;

        }    
    });
};

// const promptEngineer = (infoEngineerData, employeeData) => {
const promptEngineer = (employeeData) => {

    console.log(`
    ==============
    Add a Engineer
    ==============  
    `);

    return inquirer.prompt(
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
        employeeData.engineers.push(engineerData);
        return promptMenu(employeeData);
    })
}

const promptIntern = employeeData => {
    console.log(`
    ==============
    Add a Intern
    ==============  
    `);

    return inquirer.prompt(
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
        employeeData.interns.push(internData);
        return promptMenu(employeeData);
    })
}

const writeFileSync = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

// demo HTML code
const sampleHtml = '<h1>This will be written to the file!</h1>'

writeFileSync(sampleHtml)
    .then(successfulResponse => {
        // this will run when we use `resolve()`
        console.log(successfulResponse);
    })
    .catch(errorResponse => {
        // this will run when we use `reject()`
        console.log(errorResponse);
    });

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });        
    });
};

promptUser()
    .then(managerInfo => promptMenu(managerInfo))
    // .then(employeeData => generatePage(employeeData))
    .then(employeeData => generatePage(mockData))
    .then(pageHTML => writeFileSync(pageHTML))
    .then(() => copyFile())
    .then(copyFileResponse => console.log(copyFileResponse))
    .catch(err => console.log(err));


const mockData = {
    name: 'longyang',
    id: '1',
    email: '674901205@qq.com',
    officeNumber: '1',
    engineers: [
        { name: 'lee', id: '2', email: 'lee@gmail.com', github: 'lee' },
        { name: 'max', id: '3', email: 'max@gmail.com', github: 'max' },
        { name: 'yang', id: '4', email: 'yang@qq.com', github: 'yang' }
    ],
    interns: [ { name: 'si', id: '6', email: 'si@gmail.com', school: 'brock' } ]        
}