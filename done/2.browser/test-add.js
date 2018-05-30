(function () {
const expect = chai.expect;

describe('add', function () {

	it('should add 2 and 2', function () {

		// arrange
		let x = 2;
		let y = 2;
		let expected = 4;

		// act
		let actual = add(2, 2);

		// assert
		expect(actual).to.equal(expected);

	});

	it('should add a and b', function () {

		// arrange
		let x = 'a';
		let y = 'b';
		let expected = 'ab';

		// act
		let actual = add(x, y);

		// assert
		expect(actual).to.equal(expected);

	});

});
}());