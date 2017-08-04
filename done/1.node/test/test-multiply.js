var expect = require('chai').expect;
var multiply = require('../multiply');

describe('multiply', function () {

	it('should multiply 2 and 2', function (done) {

		// arrange
		var x = 2;
		var y = 2;
		var expected = 4;

		// act
		multiply(x, y).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

			done()
		}).catch(done);

	});

	it('should multiply 2 and 3', function () {

		// arrange
		var x = 2;
		var y = 3;
		var expected = 6;

		// act
		return multiply(x, y).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

		});
	});

	it('should multiply 2 and 5', async function () {

		// arrange
		var x = 2;
		var y = 5;
		var expected = 10;

		// act
		var actual = await multiply(x, y);

		// assert
		expect(actual).to.equal(expected);

	});

});
