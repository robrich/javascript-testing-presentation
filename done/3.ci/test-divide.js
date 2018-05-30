(function () {
const expect = chai.expect;

describe('divide', function () {

	it('should divide 2 and 2', function () {

		// arrange
		let x = 2;
		let y = 2;
		let expected = 1;

		// act
		let actual = divide(2, 2);

		// assert
		expect(actual).to.equal(expected);

	});

	it('should divide 2 and 0', function (done) {

		// arrange
		let x = 2;
		let y = 0;
		let expected = 12345;

		// act
		let errored = null;
		try {
			let actual = divide(x, y);
		} catch (err) {
			errored = err;
		}

		// assert
		expect(errored.code).to.equal(expected);

		done();
	});

});
}());