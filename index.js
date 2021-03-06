const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { createPromptModule } = require("inquirer");

const employeeData = {
    managerData: [],
    engineerData: [],
    internData: []
};

//Prompt to create a new employee
function newEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Employee card creator. Please select a role:',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'Done'
            ]
        },
    ])
    .then((answers) => {
        switch (answers.role) {
            case 'Manager':
                promptManager()
                break;
            case 'Engineer':
                promptEngineer()
                break;
            case 'Intern':
                promptIntern()
                break;
            case 'Done':
                //...function that will make the html page - I think
                createHTML();
                break;
        }
    })
};



//Prompt for creating a Manager
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Manager\'s id#:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Manager\'s email address:'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'Enter the Manager\'s office number:'
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeData.managerData.push(manager);
        newEmployee();
    })
};

//Prompt for creating a Engineer
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Engineer\'s id#:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineer\'s email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the Engineer\'s GitHub Username:'
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeData.engineerData.push(engineer);
        newEmployee();
    })
};



//Prompt for creating an Intern
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Intern\'s id#:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Intern\'s email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where is the Intern attending college?'
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeData.internData.push(intern);
        newEmployee();
    })

};

//Need to create the HTML to display Employee cards
const htmlPage = () => 
    `<!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@1,300&display=swap" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@800&display=swap" rel="stylesheet">


        <title>Employee Profiles</title>

        <style>
        body {
            background-image: url(./src/bg1.png);
            background-size: cover;
            background-repeat: no-repeat;
        }

        h1.title {
            color: coral;
            text-shadow: whitesmoke 1px 1px;
            font-family: 'BioRhyme', serif;
        }

        h3.title {
            color: black;
            text-shadow: whitesmoke 1px 1px;
            font-family: 'BioRhyme', serif;
        }

        div.type {
            font-family: 'Taviraj', serif;
        }
    </style>

    </head>


    <body>


        <!--  Header  -->
        <div class="jumbotron jumbotron-fluid text-center" style="margin-bottom: 3rem;">
            <h1 class="display-1 title">Your Company's Emploee Profiles</h1>
        </div>

        <div class="container" style="justify-content: center;">

            <!--   Manager cards   -->
            <div class="row" style="outline: 10px inset coral; padding: 3px; margin: 5px;">
                <div class="managers">
                    <h3 class="manHeader title">
                        MANAGERS
                    </h3>
                    <!--  GENERATED MANAGER CARD WITH USER INFO GOES HERE   -->
                    <div class="row type row-cols-1 row-cols-md-3 g-4">
                    ${managerCardData()}
                    </div>
                </div>
            </div>

            <!--   Empty div for spacing purposes   -->
            <div class="row empty"><br></div>

            <!--   Engineer cards   -->
            <div class="row" style="outline: 10px inset coral; padding: 3px; margin: 5px;">
                <div class="engineers">
                    <h3 class="engHeader title">
                        ENGINEERS
                    </h3>
                    <!--  GENERATED ENGINEER CARD WITH USER INFO GOES HERE   -->
                    <div class="row type row-cols-1 row-cols-md-3 g-4">
                    ${engineerCardData()}
                    </div>
                </div>
            </div>

            <!--   Empty div for spacing purposes   -->
            <div class="row empty"><br></div>


            <!--   Intern cards   -->
            <div class="row" style="outline: 10px inset coral; padding: 3px; margin: 5px;">
                <div class="interns">
                    <h3 class="intHeader title">
                        INTERNS
                    </h3>
                    <!--  GENERATED INTERN CARD WITH USER INFO GOES HERE   -->
                    <div class="row type row-cols-1 row-cols-md-3 g-4">
                    ${internCardData()}
                    </div>
                </div>
            </div>

        </div>


    </body>

    </html>`


const createHTML = () => {
    fs.writeFile('main.html', htmlPage(), (err) => {
        err ? console.log(err) : console.log('main.html has been created');
    })
};

//Need to make functions that make employee cards then stuff them into the html
//MANAGER CARD
function managerCard(Manager) {
    return `<div class="col">
                <div class="card border-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center">MANAGER</h5>
                        <h4 class="cardName">${Manager.name}</h4>
                        <p class="idNum">ID#: ${Manager.id}</p>
                        <p class="emailAdd">Email: ${Manager.email}</p>
                        <p class="specialInfo">Office Number: ${Manager.officeNum}</p>
                    </div>
                </div>
            </div>`
}

function managerCardData() {
    let manData = "";
    employeeData.managerData.forEach(manager => {
        manData += managerCard(manager);
    })
    return manData;
}

//ENGINEER CARD
function engineerCard(Engineer) {
    return `<div class="col">
                <div class="card border-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center">ENGINEER</h5>
                        <h4 class="cardName">${Engineer.name}</h4>
                        <p class="idNum">ID#: ${Engineer.id}</p>
                        <p class="emailAdd">Email: ${Engineer.email}</p>
                        <p class="specialInfo">GitHub Username: ${Engineer.gitHub}</p>
                    </div>
                </div>
            </div>`
}

function engineerCardData() {
    let engData = "";
    employeeData.engineerData.forEach(engineer => {
        engData += engineerCard(engineer);
    })
    return engData;
}

//INTERN CARD
function internCard(Intern) {
    return `<div class="col">
                <div class="card border-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center">INTERN</h5>
                        <h4 class="cardName">${Intern.name}</h4>
                        <p class="idNum">ID#: ${Intern.id}</p>
                        <p class="emailAdd">Email: ${Intern.email}</p>
                        <p class="specialInfo">College: ${Intern.school}</p>
                    </div>
                </div>
            </div>`
}

function internCardData() {
    let intData = "";
    employeeData.internData.forEach(intern => {
        intData += internCard(intern);
    })
    return intData;
}




newEmployee();