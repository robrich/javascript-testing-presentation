(function () {
const expect = chai.expect;

describe('multiply', function () {

	it('should multiply 2 and 2', function () {

		// arrange
		let x = 2;
		let y = 2;
		let expected = 4;

		// act
		return multiply(2, 2).then(function (actual) {

			// assert
			expect(actual).to.equal(expected);

		});
	});

});
}());
