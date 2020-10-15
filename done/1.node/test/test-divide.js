import chai from 'chai';
import divide from '../divide.js';

describe('divide', function () {

  const expect = chai.expect;

  it('should divide 2 and 2', function () {

    // arrange
    const x = 2;
    const y = 2;
    const expected = 1;

    // act
    const actual = divide(x, y);

    // assert
    expect(actual).to.equal(expected);

  });

  it('should divide 2 and 0', function () {

    // arrange
    const x = 2;
    const y = 0;
    const expected = 'DIVIDE_BY_ZERO';

    // act
    let actual = null;
    try {
      divide(x, y);
    } catch (err) {
      actual = err;
    }

    // assert
    expect(actual?.code).to.equal(expected);

  });

});
