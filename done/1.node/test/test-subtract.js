const expect = require('chai').expect;
const subtract = require('../subtract');

describe('subtract', function () {

	it('should subtract 2 and 2', function (done) {
		// arrange
		let x = 2;
		let y = 2;
		let expected = 0;

		// act
		subtract(x, y, function (err, actual) {

			// assert
			expect(actual).to.equal(expected);
			expect(err).to.be.null;

			done();
		});
	});

});
