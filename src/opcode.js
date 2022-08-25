
module.exports = Object.freeze({
    decode: function (value) {
        let result = value;
        let tmp = ror(value, 4);
        result ^= (tmp & 0xF);
        return (result & 7);
    },

    INC_MEM: 0,
    DEC_MEM: 1,
    INC_B_MEM: 2,
    DEC_B_MEM: 3,
    MOV_MEM_IN: 4,
    MOV_OUT_IN: 5,
    JZ: 6,
    JNZ: 7
});


function ror(value, bits) {
    let bits_ = bits % 8;
    return (value << bits_) | (value >>> (8 - bits_));
}
