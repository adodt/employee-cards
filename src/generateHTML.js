//HTML page
const teamPage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DREAM TEAM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d209825068.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
            <nav class="navbar">
                <div class="h1 w-100 text-center">THE TEAM</div>
            </nav>
        </header>
        <main>
            <div class="cardContainer">
                <div class="row justify-content-center" id="teamCards">
                ${employeeCards}
                </div>
            </div>
        </main>
            
    </body>
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                crossorigin="anonymous"></script>       
    </html>

    `;
}

//Manager card
const generateManager = function (manager) {
    return `
    <div class="cardBox col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="cardHeader p-3">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4>
                        <i class="fa-regular fa-compass"></i>
                    </div>
                    <div class="cardBody">
                        <p>ID number: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office number: ${manager.officeNumber}</p>
                    </div>
                </div>
    `
}

//Engineer Card
const generateEngineer = function (engineer) {
    return `
    <div class="cardBox col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="cardHeader p-3">
                        <h3>${engineer.name}</h3>
                        <h4>Engineer</h4>
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="cardBody">
                        <p>ID number: ${engineer.id}</p>
                        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p>Github profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
    `
}

//Intern Card
const generateIntern = function (intern) {
    return `
    <div class="cardBox col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="cardHeader p-3">
                        <h3>${intern.name}</h3>
                        <h4>Intern</h4>
                        <i class="fa-solid fa-brain"></i>
                    </div>
                    <div class="cardBody">
                        <p>ID number: ${intern.id}</p>
                        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
                </div>
    `
};

//publish array 
generateHTML = (data) => {
    publishArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            publishArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            publishArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            publishArray.push(internCard);
        }
    }

    const employeeCards = publishArray.join('')
    const generateTeam = teamPage(employeeCards);
    return generateTeam;
};




module.exports = generateHTML;