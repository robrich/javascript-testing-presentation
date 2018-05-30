(function () {
const expect = chai.expect;

describe('subtract', function () {

	it('should subtract 2 and 2', function (done) {

		// arrange
		let x = 2;
		let y = 2;
		let expected = 0;

		// act
		subtract(2, 2, function (err, actual) {

			// assert
			expect(actual).to.equal(expected);

			done();
		});
	});

});
}());