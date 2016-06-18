var expect = chai.expect;

describe('multiply', function () {

	it('should multiply 2 and 2', function () {

		// arrange
		var x = 2;
		var y = 2;
		var expected = 4;

		// act
		return multiply(2, 2).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

		});
	});

});
