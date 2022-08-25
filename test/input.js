const expect = require('chai').expect;
const { Input } = require('../src/input');


describe('Prepare input data', () => {

    const testCases = [
        {username: 'sys_dev', serial: '1234',
         result: [0x73, 0x79, 0x73, 0x5F, 0x64, 0x65, 0x76, 0, 0, 0, 0x12, 0x34, 00, 0, 0, 0, 0, 0, 0, 0]}
    ];

    it('Bytes array from username and serial', () => {
        let input;

        testCases.forEach((case_) => {
            input = new Input(case_.username, case_.serial);

            let result = [];
            for (let i = 0; i < 20; i++) {
                result.push(input.pop());
            }
            expect(result).to.be.deep.equal(case_.result);
        });
    });

});
