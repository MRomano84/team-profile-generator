const inquirer = require("inquirer");
const fs = require("fs");


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
        }
    })
}



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
}

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
            name: 'GitHub',
            message: 'Enter the Engineer\'s GitHub Username:'
        }
    ])

}



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

}

//Need to create the HTML to display Employee cards