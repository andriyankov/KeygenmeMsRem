const { Machine } = require('./machine');


function checkSerial(username, serial) {
    let machine = new Machine(username, serial);
    machine.run();
    return machine.result;
}


if (typeof window === 'undefined') {
    module.exports = {
        checkSerial
    }
} else {
    window.checkSerial = checkSerial;
}
