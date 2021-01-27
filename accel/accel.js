var i2c = require('i2c-bus');

const DEVICE_NUMBER = 1;
const TARGET_IC_ADDR = 0x53;

var i2c_dev = i2c.openSync(DEVICE_NUMBER);

var readBuf = new Buffer.alloc(0x10);
i2c_dev.i2cReadSync(TARGET_IC_ADDR, readBuf.length, readBuf);

console.log(readBuf);