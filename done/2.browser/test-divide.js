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

	it('should divide 2 and 0', function () {
		// arrange
		var x = 2;
		var y = 0;
		var thrown = false;
		var expected = 'divide by';

		// act
		try {
			var actual = divide(x, y);
			thrown = false;
		} catch (err) {
			thrown = true;

			// assert
			expect(err).to.exist;
			expect(err.message).to.contain(expected);
		}

		expect(thrown).to.equal(true);
	});

});
