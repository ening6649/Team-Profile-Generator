const { getSystemErrorName } = require("util");

class Employee {
    constructor(name,id,email,) {
        this.name = name;
        this.id = id;
        this.email;
    }
    getName(name) {
        return name;
    }
    getEmail(email){
        return email;
    }
    getId(id){
        this.id.forEach(element => {
            
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