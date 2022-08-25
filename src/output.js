
class Output {
    constructor() {
        this.index = 0;
        this.data = new Uint8Array(0x25);
    }
    
    push(value) {
        this.data[this.index++] = value;
    }

    prepare() {
        let bytes = new Uint8Array(this.data.buffer);
        return bytes.reduce((prev, cur) => {
            return prev + (cur ? String.fromCharCode(cur) : '');
        }, '');
    }
}


module.exports = {
    Output
}
