const generateEngineer = engineer => {
    return`
    <section class="card">
        <section class="head">
            <h2 class="name">${engineer.name}</h2>
            <h3 class="role">Engineer</h3>
        </section>
        <section class="body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="role-feature">Github Username: ${engineer.github}</p>
        </section>
    </section>
    `
}

const generateIntern = intern => {
    return`
    <section class="card">
        <section class="head">
            <h2 class="name">${intern.name}</h2>
            <h3 class="role">Intern</h3>
        </section>
        <section class="body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: ${intern.email}</p>
            <p class="role-feature">School: ${intern.school}</p>
        </section>
    </section>
    `
}

module.exports = templateData => {
    let page = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>My Team</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
    `
    let managerCard = `
        <section class="card">
            <section class="head">
                <h2 class="name">${templateData.name}</h2>
                <h3 class="role">Manager</h3>
            </section>
            <section class="body">
                <p class="id">ID: ${templateData.id}</p>
                <p class="email">Email: ${templateData.email}</p>
                <p class="role-feature">Office Number: ${templateData.officeNumber}</p>
            </section>
        </section>
    `
    let engineerCards = ''
    templateData.engineers.forEach(eng => {
        engineerCards += generateEngineer(eng)    
    } )
    
    let internCards = ''
    templateData.interns.forEach(intern => {
        internCards += generateIntern(intern)    
    } )

    let tail = `
        </main>
        </body>
        </html>
    `
    return page + managerCard + engineerCards + internCards + tail
}