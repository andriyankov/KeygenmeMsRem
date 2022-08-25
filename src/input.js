
class Input {
    constructor(username, serial) {
        let data = new Uint8Array(20);
        const nameLen = Math.min(10, username.length);
        for (let i = 0; i < nameLen; i++) {
            data[i] = username.charCodeAt(i);
        }
        const serialLen = Math.min(10, serial.length);
        for (let i = 0, j = 0; i < serialLen; i++, j+=2) {
            let num = parseInt(serial[j], 16) << 4;
            data[i + 10] = num | (parseInt(serial[j+1], 16) & 0xF);
        }
        this.data = data;
        this.index = 0;
    }

    pop() {
        return this.data[this.index++];
    }
}


module.exports = {
    Input
}
