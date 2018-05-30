const expect = require('chai').expect;
const multiply = require('../multiply');

describe('multiply', function () {

	it('should multiply 2 and 2', function (done) {

		// arrange
		let x = 2;
		let y = 2;
		let expected = 4;

		// act
		multiply(x, y).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

			done()
		}).catch(done);

	});

	it('should multiply 2 and 3', function () {

		// arrange
		let x = 2;
		let y = 3;
		let expected = 6;

		// act
		return multiply(x, y).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

		});
	});

	it('should multiply 2 and 5', async function () {

		// arrange
		let x = 2;
		let y = 5;
		let expected = 10;

		// act
		let actual = await multiply(x, y);

		// assert
		expect(actual).to.equal(expected);

	});

});
