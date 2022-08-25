const expect = require('chai').expect;
const { Machine } = require('../src/machine');
const { Program } = require('../src/program');


const testCases = [
    {name: 'Incorrect serial', username: 'sys_dev', serial: '1234', result: 'Serial invalid :('}
]


describe('Virtual machine', () => {
    const program = new Program;

    testCases.forEach((case_) => {
        it(case_.name, () => {
            let machine = new Machine(case_.username, case_.serial);
            machine.run(program);

            expect(machine.result).to.be.equal(case_.result);
        });

    });
});
