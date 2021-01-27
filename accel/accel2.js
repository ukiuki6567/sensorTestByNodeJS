const ADXL345 = require('ADXL345');
const adxl345 = new ADXL345();

const getAcceleration = () => {
	adxl345.getAcceleration(true)
		.then((acceleration) => {
			console.log(`acceleration = ${JSON.stringify(acceleration, null, 2)}`);
			setTimeout(getAcceleration, 1000);
		})
		.catch((err) => {
			console.log(`ADXL345 read error: ${err}`);
			setTimeout(getAcceleration, 2000);
		});
};

adxl345.init()
	.then(() => {
		console.log('ADXL345 initialization suucceeded');
		getAcceleration();
	})
	.catch((err) => console.log(`ADXL345 initialization failied: ${err}`));