var expect = chai.expect;

describe('add', function () {

	it('should add 2 and 2', function () {

		// arrange
		var x = 2;
		var y = 2;
		var expected = 4;

		// act
		var actual = add(2, 2);

		// assert
		expect(actual).to.equal(expected);

	});

	it('should add a and b', function () {

		// arrange
		var x = 'a';
		var y = 'b';
		var expected = 'ab';

		// act
		var actual = add(x, y);

		// assert
		expect(actual).to.equal(expected);

	});

});
