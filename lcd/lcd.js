var sleep = require('system-sleep');
var i2c = require('i2c-bus');

i2c_dev = i2c.openSync(1);

var I2C_LCD_ADRS = 0x3E;
var DDRAM_ADRS_LIST = [
	0x00,
	0x40
];

function lcd_send_command(lcd_command) {
	i2c_dev.writeByteSync(I2C_LCD_ADRS, 0x00, lcd_command);
	sleep(1);
}

function lcd_data(lcd_data) {
	i2c_dev.writeByteSync(I2C_LCD_ADRS, 0x40, lcd_data);
}

function lcd_setCursor(x, y) {
	lcd_send_command(0x80 | DDRAM_ADRS_LIST[y] | x);
}

function lcd_clear() {
	lcd_send_command(0x01);
}

function lcd_init() {
	lcd_send_command(0x38);
	lcd_send_command(0x39);
	lcd_send_command(0x10);
	lcd_send_command(0x7C);
	lcd_send_command(0x55);
	lcd_send_command(0x6C);

	sleep(250);

	lcd_send_command(0x38);
	lcd_send_command(0x0F);
}

function lcd_print(message) {
	for(var i=0;i<message.length;i++){
		lcd_data(message.charCodeAt(i));
	}
}

(function() {
	lcd_init();
	lcd_clear();
	lcd_setCursor(0, 0);
	lcd_print("I2C node");
	lcd_setCursor(0, 1);
	lcd_print("LCD TEST");
}());