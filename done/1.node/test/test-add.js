import chai from 'chai';
import add from '../add.js';

describe('add', function () {

  const expect = chai.expect;

  it('should add 2 and 2', function () {

    // arrange
    const x = 2;
    const y = 2;
    const expected = 4;

    // act
    const actual = add(x, y);

    // assert
    expect(actual).to.equal(expected);

  });

  it('should add "hello" and "world"', function () {

    // arrange
    const x = "hello";
    const y = "world";
    const expected = "helloworld";

    // act
    const actual = add(x, y);

    // assert
    expect(actual).to.equal(expected);
  });

  it('should add a and b', function () {

    // arrange
    const x = 'a';
    const y = 'b';
    const expected = 'ab';

    // act
    const actual = add(x, y);

    // assert
    expect(actual).to.equal(expected);

  });

});
