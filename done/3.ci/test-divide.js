var expect = chai.expect;

describe('divide', function () {

	it('should divide 2 and 2', function () {

		// arrange
		var x = 2;
		var y = 2;
		var expected = 1;

		// act
		var actual = divide(2, 2);

		// assert
		expect(actual).to.equal(expected);

	});

	it('should divide 2 and 0', function (done) {

		// arrange
		var x = 2;
		var y = 0;
		var expected = 12345;

		// act
		var errored = null;
		try {
			var actual = divide(x, y);
		} catch (err) {
			errored = err;
		}

		// assert
		expect(errored.code).to.equal(expected);

		done();
	});

});
