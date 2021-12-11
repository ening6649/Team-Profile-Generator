const inquirer= require('inquirer')
const generateSite = require ("../src/page-template")


class Employee {
    constructor(name,id,email,) {
        this.name = name;
        this.id = id;
        this.email=email;
    }
    getName() {
        return this.name; 
    //    return inquirer.prompt ([
            // {
            //     type: 'input',
            //     name: 'name',
            //     message: 'Enter the name? (Required)',
            //     validate: nameInput => {
            //         if (nameInput) {
            //             return true;
            //         } else {
            //             console.log('Please enter a name!');
            //             return false;
            //         }
            //     }
            // },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: 'Enter the email(Required)',
            //     validate: githubInput => {
            //         if (githubInput) {
            //             return true;
            //         } else {
            //             console.log('Please enter an email address!');
            //             return false;
            //         }
            //     }
            // },

        // ])
        // .then(({name})=>{
        //     this.name=name;
           
        //     // return Employee(name);
        //     this.id ="1";
        //     this.email = email
            
        // })
        
        
        
    }
    getEmail(){
        // return inquirer.prompt([
        //     {
        //         type: 'input',
        //         name: 'email',
        //         message: 'Enter the email(Required)',
        //         validate: githubInput => {
        //             if (githubInput) {
        //                 return true;
        //             } else {
        //                 console.log('Please enter an email address!');
        //                 return false;
        //             }
        //         }
        //     },
        // ])
        // .then(({email})=>{
        //     this.email=new Employee(email);
        //     console.log(new Employee(email) )
        // })
    }
    getId(id){
        this.id.forEach(eachid=> {
            eachid.id =1;
            eachid.id++;
        });

    }
    getRole(){
        return 'employee'
    }
}

class Manager extends Employee {
    constructor() {
        this.officeNumber = officeNumber;
        
    }
    getRole() {
        return 'Manager'
    }
}

class Engineer extends Employee {
    constructor() {
        this.github = github;
    }
    getGithub() {

    }
    getRole () {
        return 'Engineer'
    }
}

class Intern extends Employee {
    constructor() {
        this.school=school;
    }
    getSchool() {

    }
    getRole() {
        return 'Intern'
    }
}

// const promptQuestions = ()=> {
    
       
    
//     // console.log(data.teamArr)
//     console.log(`
//     =================
//     Add a New Employee
//     =================
//     `);
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'type',
//             message: 'what type of employee? (select one)',
//             choices: ['employee', 'manager', 'engineer', 'intern']
          
//         },
//     ])
//     .then (employeeData=>{
//         const employee = new Employee
//         if(employeeData.type=="employee") {
//             employee.getName();
//             employee.getEmail();
//         }
//     })
// }

// promptQuestions()


module.exports = Employee;

// module.exports = {
//     Employee,
//     Intern,

// }

function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // TODO: convert string to an array
  // TODO: reverse substrings in array
  // TODO: convert array back into a string
  let arr = str.split("");
  // if split is empty , split each word and put into an arry 
  let output = "";
  for(let i=arr.length-1; i>=0;i--) {
    output = output + arr[i];
  }
  return output;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  let backwards = this.reverse(str);
  // shorthand  return str===backwards;
  if (str==backwards) {
    return true;
  } else {
    return false;
  }
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
  let wordsArr = str.split(" ");
  let capArr = wordsArr.map(word =>{
    return word.substring(0,1).toUpperCase() + word.substring(1)
  });
  return capArr.join(" ");
};

module.exports = Algo;