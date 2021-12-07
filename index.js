const inquirer = require("inquirer")
const fs = require("fs")
const generateSite = require ("./src/page-template")

const promptQuestions = data=> {
    if (!data.teamArr) {
        data.teamArr= [];
    }
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
            type: 'input',
            name: 'officenumber',
            message: 'Enter the office number(Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another person?',
            default: false,
            // when:({confirmAdd})=>{
            //     if (confirmAdd) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },

      ])
      .then (data =>{
          data.teamArr.push(data);
          if (data.teamArr) {
              return promptQuestions(data);
          } else {
              return data; 
          }
      })
}




promptQuestions()
    // .then(data=> {
    //     return generateSite(data);
    // })
    .then(data => {
        fs.writeFile('./dist/index.html', generateSite(data), err => {
        if (err) throw err;
        console.log('File saved!');
        })
    }) 
    