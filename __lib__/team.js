const { getSystemErrorName } = require("util");

class Employee {
    constructor(name,id,email,) {
        this.name = name;
        this.id = id;
        this.email;
    }
    getName() {

    }
    getEmail(){

    }
    getId(){

    }
    getRole(){
        return 'employee'
    }
}

class Manager extends Employee {
    constructor() {
        
    }
}