const expect = require('chai').expect;
const _opcode = require('../src/opcode');


const testCases = [
    {name: 'inc memIndex', bytes: [0x44, 0xDD, 0x11], opcode: _opcode.INC_MEM},
    {name: 'dec memIndex', bytes: [0x23, 0x67, 0xCD], opcode: _opcode.DEC_MEM},
    {name: 'inc byte[mebytes: mIndex', bytes: [0xCE, 0xB9, 0x20], opcode: _opcode.INC_B_MEM},
    {name: 'dec byte[mebytes: mIndex]', bytes: [0x74, 0x12, 0x83], opcode: _opcode.DEC_B_MEM},
    {name: 'jz offs', bytes: [0x53, 0x17, 0xC2], opcode: _opcode.JZ},
    {name: 'jnz offs', bytes: [0xDA, 0x78, 0x2D], opcode: _opcode.JNZ}
];


describe('Decoding opcodes', () => {

    testCases.forEach((case_) => {

        it(case_.name, () => {
            case_.bytes.forEach((byte) => {
                expect(_opcode.decode(byte)).to.be.equal(case_.opcode);
            });
        });

    });
});
