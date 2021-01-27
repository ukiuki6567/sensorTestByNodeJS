var i2c = require('i2c-bus');

const TARGET_IC_ADDR = 0x76;
const ACCEL_REG = 0x32;

var i2c_dev = i2c.openSync(1);
var readBuf = new Buffer.alloc(0x100)
var rawData = i2c_dev.i2cReadSync(TARGET_IC_ADDR, readBuf.length, readBf);
console.log(readBuf);