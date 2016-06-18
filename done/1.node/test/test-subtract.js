var expect = require('chai').expect;
var subtract = require('../subtract');

describe('subtract', function () {

	it('should subtract 2 and 2', function (done) {
		// arrange
		var x = 2;
		var y = 2;
		var expected = 0;

		// act
		subtract(x, y, function (err, actual) {

			// assert
			expect(actual).to.equal(expected);
			expect(err).to.be.null;

			done();
		});
	});

});
