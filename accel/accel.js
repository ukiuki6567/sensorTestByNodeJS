var i2c = require('i2c-bus');

const TARGET_IC_ADDR = 0x53;
const ACCEL_REG = 0x32;

var i2c_dev = i2c.openSync(1);
var rawData = i2c_dev.readWordSync(TARGET_IC_ADDR, ACCEL_REG);
console.log(rawData);