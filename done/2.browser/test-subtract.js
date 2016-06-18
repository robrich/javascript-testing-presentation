var expect = chai.expect;

describe('subtract', function () {

	it('should subtract 2 and 2', function (done) {

		// arrange
		var x = 2;
		var y = 2;
		var expected = 0;

		// act
		subtract(2, 2, function (err, actual) {

			// assert
			expect(actual).to.equal(expected);

			done();
		});
	});

});
