const { TestWatcher } = require('@jest/core');
const team = require('../__lib__/team');

describe ('isEmployee', ()=>{
    Test ("should return only name, id and email", ()=>{
        const employee = new Employee();
        expect(employee.name.toBe(true));
        expect(employee.id.toBe(true));
        expect(employee.email.toBe(true));

    })
})