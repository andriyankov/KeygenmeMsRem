
const { Input } = require('./input');
const { Output } = require('./output');
const { Program } = require('./program');
const _opcode = require('./opcode');


class Machine {
    constructor(username, serial) {
        this.input = new Input(username, serial);
        this.output = new Output;
    }

    run(prog = new Program) {
        let memory = new Uint8Array(0xE0);
        let memIndex = 0;

        const getOffset = (opcodeIndex, step) => {
            for (let next = 1; next;) {
                opcodeIndex += step;
                let t = prog.getInstruction(opcodeIndex);
                if (t == 6) next += step;
                else if (t == 7) next -= step;
            }
            return opcodeIndex;
        }

        for (let opcodeIndex = 0; opcodeIndex < prog.size; opcodeIndex++) {
            let opcode = prog.getInstruction(opcodeIndex);
            switch (opcode) {
                case _opcode.INC_MEM:
                    memIndex++;
                    break;
                case _opcode.DEC_MEM:
                    memIndex--;
                    break;
                case _opcode.INC_B_MEM:
                    memory[memIndex]++;
                    break;
                case _opcode.DEC_B_MEM:
                    memory[memIndex]--;
                    break;
                case _opcode.MOV_MEM_IN:
                    memory[memIndex] = this.input.pop();
                    break;
                case _opcode.MOV_OUT_IN:
                    this.output.push(memory[memIndex]);
                    break;
                case _opcode.JZ:
                    if (memory[memIndex] == 0) {
                        opcodeIndex = getOffset(opcodeIndex, 1);
                    }
                    break;
                case _opcode.JNZ:
                    if (memory[memIndex] != 0) {
                        opcodeIndex = getOffset(opcodeIndex, -1);
                    }
                    break;
            }
        }
    }

    get result() {
        return this.output.prepare();
    }
}


module.exports = {
    Machine
}
