const inquirer = require("inquirer")
const fs = require("fs")
const generateSite = require ("./src/page-template");
const Employee = require("./__lib__/team");
// const Employee = require ("./__lib__/team")

const promptQuestions = ()=> {
    
       
    
    // console.log(data.teamArr)
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'what type of employee? (select one)',
            choices: ['employee', 'manager', 'engineer', 'intern']
          
        },

       
        // {
        //     type: 'input',
        //     name: 'officenumber',
        //     message: 'Enter the office number(Required)',
        //     validate: githubInput => {
        //         if (githubInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter an office number!');
        //             return false;
        //         }
        //     }
        // },
    

      ])
      .then (employeeData=>{
        if (employeeData.type=="employee") {
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
            ])
        } 
        if (employeeData.type=="engineer") {
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
            ])
            
        } 
      })
      .then (employeeData=>{
          return inquirer.prompt ([
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another person?',
                default: false,
                
            },
          ])
      })
      .then (employeeData =>{
        employeeData.employeeArr= [];
        console.log(employeeData)
        console.log("line133 fired")
        testdata = new Employee ('')
        employeeData.employeeArr.push(employeeData);
        if (employeeData.confirmAdd) {
            return promptQuestions(testdata);
        } else {
            return employeeData; 
        }
      })
}



promptQuestions()
    // .then(data=> {
    //     return generateSite(data);
    // })
    .then(employeeData => {
        // if (!employeeData.confirmAdd)
        console.log("line97 fired")
        fs.writeFile('./dist/index.html', generateSite(employeeData), err => {
        if (err) throw err;
        console.log('File saved!');
        })
    }) 


    // function greeting(name) {
    //     alert('Hello ' + name);
    //   }
      
    //   function processUserInput(callback) {
    //     var name = prompt('Please enter your name.');
    //     callback(name);
    //   }
      
    //   processUserInput(greeting);