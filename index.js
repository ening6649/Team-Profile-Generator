const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const promptQuestions = ()=> {
 
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name? (Required)',
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
            name: 'github',
            message: 'Enter the github username(Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email(Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
  

 
   
        {
            type: 'confirm',
            name: 'tableContent',
            message: 'Would you like to create a table of contents?',
            default: true,
        },
      ])
}




promptQuestions()
.then(data => {
    fs.writeFile('./dist/index.html', generateMarkdown(data), err => {
        if (err) throw err;
        console.log('File saved!');
    })
 }) 
    