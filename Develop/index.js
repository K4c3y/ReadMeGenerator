// What to create to accomplish Homework

// Step 1 ask questions to the user 

// step 2 save the answers in variables 

// step 3 create the new file 

// step 4 write the answers to the file 

// upload file to github.com 

//---------------------------------------------------------


// Setting Vairables
//----------------------------------------------------------

// To access in fs module as promise
const fs = require('fs').promises

// To access the axios module
const axios = require('axios')

// To access inquirer module
const inquirer = require('inquirer')





// questions to pass through inquirer
// Default = values if user doesn't enter anything 
const questions = [{
        message: 'Please title your project?',
        name: 'title',
        type: 'input',
        default: 'Title'

    },
    {
        message: 'Enter a description for the project',
        name: 'description',
        type: 'input',
        default: 'Description Default Text, add a description!'

    },
    {
        message: 'Add a Table of Contents',
        name: 'table',
        type: 'input',
        default: 'Table of Contents'

    },
    {
        message: 'Add a installation guide for your project',
        name: 'installation',
        type: 'input',
        default: 'Installation Guide'

    },
    {
        message: 'Add instructions on how to use',
        name: 'usage',
        type: 'input',
        default: 'Usage Guide'

    },
    {
        message: 'Pick a license',
        name: 'license',
        type: 'list',
        choices: ['Apache', 'EPL', 'MIT']
        default: 'Apache',

    },
    {
        message: 'Add contributing Guide',
        name: 'contributing',
        type: 'input',
        default: 'Contributing Guide',

    },
    {
        message: 'Add tests examples with instructions',
        name: 'tests',
        type: 'input',
        default: 'Test examples'

    }
]

