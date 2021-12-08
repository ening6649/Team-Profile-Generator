const inquirer = require("inquirer")
const fs = require("fs")
const generateSite = require ("./src/page-template")

const promptQuestions = ()=> {
    
       
    
    // console.log(data.teamArr)
    console.log(`
    =================
    Add a New Employee
    =================
    `);
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
            
        },

      ])
      .then (employeeData =>{
        employeeData.employeeArr= [];
        console.log(employeeData.employeeArr)
        employeeData.employeeArr.push(employeeData);
        if (employeeData.confirmAdd) {
            return promptQuestions(employeeData);
        } else {
            return employeeData; 
        }
      })
}

promptQuestions()
    // .then(data=> {
    //     return generateSite(data);
    // })
   
    .then(data => {
        console.log(promptQuestions())
        console.log(data)
        fs.writeFile('./dist/index.html', generateSite(employeeData), err => {
        if (err) throw err;
        console.log('File saved!');
        })
    }) 
    