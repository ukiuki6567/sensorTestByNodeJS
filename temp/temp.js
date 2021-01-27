const BME280 = require('bme280-sensor');

const options {
	i2cBusNo	: 1,
	i2cAddress	: BME280.BME280_DEFAULT_I2C_ADDRESS()
};

const bme280 = new BME280(options);

const readSensorData = () => {
	bme280.readSensorData()
		.then((data) => {
			console.log(`data = ${JSON.stringify(data, null, 2)}`);
			setTimeout(readSensorData, 2000);
		})
		.catch((err) => {
			console.log(`BME280 read error: ${err}`);
			setTimeout(readSensorData, 2000);
		});
};

bme280.init()
	.then(() => {
		console.log('BME280 initialization succeeded.');
		readSensorData();
	})
	.catch((err) => {
		console.error(`BME280 initializatioon failed: ${err}`);
	});