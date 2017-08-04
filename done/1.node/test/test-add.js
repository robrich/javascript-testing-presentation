var expect = require('chai').expect;
var add = require('../add');

describe('add', function () {

	it('should add 2 and 2', function () {
		// arrange
		var x = 2;
		var y = 2;
		var expected = 4;

		// act
		var actual = add(x, y);

		// assert
		expect(actual).to.equal(expected);
	});

	it('should add "hello" and "world"', function () {
		// arrange
		var x = "hello";
		var y = "world";
		var expected = "helloworld";

		// act
		var actual = add(x, y);

		// assert
		expect(actual).to.equal(expected);
	});

	it('should add a+b', function () {

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
