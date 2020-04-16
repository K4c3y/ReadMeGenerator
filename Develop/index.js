// What to create to accomplish Homework
// step 1 ask questions   
// Step 2 store answers from questions  
// step 3 get github information 
// step 4 Create and write the file  
//---------------------------------------------------------


// Setting Vairables

// pulling in npm mods and fs
const fs = require('fs').promises
const axios = require('axios')
const inquirer = require('inquirer')


// variable for github profile image, email, username, and badge image. 
let githubPic = ''
let githubEmail = ''
let githubUsername = ''
let badgeImage = ''


// Step 1 ask questions to the user 

// questions to pass through inquirer
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
        choices: ['Apache', 'Bower', 'CTAN', 'DUB', 'EPL', 'MIT', 'APM', ]
       

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

// still step 1 asks the user the questions for readme 
function promptQuestions() {
    return inquirer.prompt(questions)
}


 // step 2 save the answers in variables  
// takes user input answers and formats readme file 
function createReadMe(answers) {
  
   
    return `## ${answers.title}
    ![](${badgeImage})
    ## Description
    ${answers.description}
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## License
    Licensed by ${answers.license}
    ## Contributing
    ${answers.contributing}
    ## Test
    ${answers.tests}
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Contributing
    ${answers.contributing}
    ## Tests
    ${answers.tests}
    ## Email: ${githubEmail}
    [Profile Image](${githubPic})`
}

// step 3 ask for github username
function promptUsername() {
    return inquirer.prompt({
        message: 'Enter Github username',
        name: 'username'
    })
}
// stores github username, email, picture, and loads followers based on user name. 
async function getGithubUsername({ username }) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
            // stores the image and email and username
        githubPic = response.data.avatar_url
        githubEmail = response.data.email
        githubUsername = username
        badgeImage = `https://img.shields.io/github/followers/${githubUsername}?style=social`

        
    } catch (err) {
        console.log(err)
    }
}

// step 4 create and write the answers to the file 
async function writeReadMe(fileContent) {
    try {
        await fs.writeFile('READMEbyReadMeGenerator.md', fileContent)

    } catch (err) {
        console.log(err)
    }

 console.log('Success!')
}


// calling functions 

// Ask for github username
promptUsername()
    // gets profile image with the axios module
    .then(getGithubUsername)
    // queque questions for readme file 
    .then(promptQuestions)
    // creates the readme file 
    .then(createReadMe)
    // writes the answers from the questions to the read me file 
    .then(writeReadMe)



