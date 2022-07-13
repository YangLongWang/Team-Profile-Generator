
const generateEngineer = engineer => {
    return`
        <section class="card">
            <section class="head">
                <h2 class="name">${engineer.name}</h2>
                <h3 class="role"><i class="fa-solid fa-microchip"></i> Engineer</h3>
            </section>
            <section class="body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="role-feature">Github Username: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </section>
        </section>
    `;
}

const generateIntern = intern => {
    return`
        <section class="card">
            <section class="head">
                <h2 class="name">${intern.name}</h2>
                <h3 class="role"><i class="fa-solid fa-kiwi-bird"></i> Intern</h3>
            </section>
            <section class="body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="role-feature">School: ${intern.school}</p>
            </section>
        </section>
    `;
}

module.exports = ({manager, engineers, interns}) => {
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
    `;

    let managerCard = `
        <section class="card">
            <section class="head">
                <h2 class="name">${manager.name}</h2>
                <h3 class="role"><i class="fa-solid fa-crown"></i> Manager</h3>
            </section>
            <section class="body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="role-feature">Office Number: ${manager.officeNumber}</p>
            </section>
        </section>
    `;

    let engineerCards = '';
    engineers.forEach(eng => {
        engineerCards += generateEngineer(eng);
    } );
    
    let internCards = '';
    interns.forEach(intern => {
        internCards += generateIntern(intern); 
    } );

    let tail = `
    </main>

    <script src="https://kit.fontawesome.com/992046c620.js" crossorigin="anonymous"></script>
</body>
</html>
    `;

    return page + managerCard + engineerCards + internCards + tail;
}