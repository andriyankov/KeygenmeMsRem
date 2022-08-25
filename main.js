
let { checkSerial } = require('./src');


const user = {
    name: 'sys_dev',
    serial: '12AB34CD56EF'
}

function main() {
    console.log(`User: ${user.name}; Serial: ${user.serial}`);
    console.log('Process started...');
    console.log(checkSerial(user.name, user.serial))
    console.log('Process done');
}

main();
