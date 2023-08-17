import inquirer from 'inquirer';
import fs from "fs/promises";


let { projectTitle, description, tableOfContent, installation, usage, license, contributing, test, questions, email } = await inquirer
    .prompt([

        {
            type: 'input',
            name: 'projectTitle',
            message: "What's your project title?:",
        },

        {
            type: 'input',
            name: 'description',
            message: "Provide a short description of your project:",
        },

        {
            type: 'confirm',
            name: 'tableOfContent',
            message: " Add table of contents?"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use:",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What lincense do you need?',
            choices: ['Eclipse', 'MIT', 'IBM', 'Apache', 'Mozilla'],
            filter(val) {
                return val.toLowerCase();
            },

        },
        {
            type: 'input',
            name: 'contributing',
            message: "List your collaborators:",
        },
        {
            type: 'input',
            name: 'test',
            message: "Write tests for your application:",
        },
        {
            type: 'input',
            name: 'questions',
            message: "Provide a link to your GitHub profile"
          
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address"
          
        }
    ])


let content = "";
if (tableOfContent == true) {
    content = `
 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
    `;
}


let readmeText = `
[${license}]
# Your Project Title 
${projectTitle}

## Project Description
${description}


${content}

## Installation 
${installation}

## Usage
${usage}

## License
${generateLicense(license)}

## Contributing
${contributing}

## Test
${test}

## Questions 

If you have any questions visit my GitHub profile ${questions} or email me at ${email}. Thank you!!

`
fs.writeFile("README.md", readmeText)


function generateLicense(license) {
    console.log(license)

    if (license === "Eclipse") {

        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    if (license === "mit") {

        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === "ibm") {

        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    if (license === "apache") {

        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === "mozilla") {

        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    return ''

}

