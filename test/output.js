const expect = require('chai').expect;
const { Output } = require('../src/output');


describe('Prepare output data', () => {

    // Item is: [ASCII encoded test data, expected result string]
    const testCases = [
        {bytes: [0x41, 0, 0x42, 0, 0, 0], result: 'AB'},
        {bytes: [0, 0], result: ''}
    ];

    it('Strings from bytes array(ASCII encoded)', () => {
        testCases.forEach((case_) => {
            let output = new Output;

            case_.bytes.map((byte) => output.push(byte));

            expect(output.prepare()).to.be.equal(case_.result);
        });
    });

});
