const { TestWatcher } = require('@jest/core');
const team = require('../__lib__/team');

describe ('isEmployee', ()=>{
    it ("should return only name, id and email", ()=>{
        let employeeArr = []
        
        employeeArr.name = "dave"
        employeeArr.id ='1'
        employeeArr.email = 'thisemail'
        expect(employeeArr.name.toBe(false));
        expect(employeeArr.id.toBe(false));
        expect(employeeArr.email.toBe(false));

    })
})