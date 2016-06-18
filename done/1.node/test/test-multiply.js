var expect = require('chai').expect;
var multiply = require('../multiply');

describe('multiply', function () {

	it('should multiply 2 and 2', function () {
		// arrange
		var x = 2;
		var y = 2;
		var expected = 4;

		// act
		return multiply(x, y).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);
		});
	});

});
