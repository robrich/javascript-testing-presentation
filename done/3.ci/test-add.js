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

});
