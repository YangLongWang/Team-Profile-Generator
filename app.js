const fs = require('fs');
const Team = require('./lib/Team');
const generatePage = require('./src/page-template.js');

const team = new Team();

async function buildTeam() {
    await team.buildManager();
    let isContinue = true;
    while (isContinue) {
        const option = await team.buildMenu();

        if (option.role === 'Engineer') {
            await team.buildEngineer();

        } else if (option.role === 'Intern') {
            await team.buildIntern();
        } else {
            console.log('finish, next is generated HTML');
            isContinue = false;
        }
        
    }
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

buildTeam()
    .then(() => generatePage(team))
    .then(pageHTML => writeFileSync(pageHTML))
    .then(() => copyFile())
    .then(copyFileResponse => console.log(copyFileResponse))
    .catch(err => console.log(err));
    
    