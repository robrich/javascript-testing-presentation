import chai from 'chai';
import multiply from '../multiply.js';

describe('multiply', function () {

  const expect = chai.expect;

  it('should multiply 2 and 2', function (done) {

    // arrange
    const x = 2;
    const y = 2;
    const expected = 4;

    // act
    multiply(x, y)
      .then(function (actual) {

        // assert
        expect(actual).to.equal(expected);

        done();
      });
  });

  it('should multiply 2 and 3', function () {

    // arrange
    const x = 2;
    const y = 3;
    const expected = 6;

    // act
    return multiply(x, y)
      .then(function (actual) {

        // assert
        expect(actual).to.equal(expected);

      });
  });

  it('should multiply 2 and 5', async function () {

    // arrange
    const x = 2;
    const y = 3;
    const expected = 6;

    // act
    const actual = await multiply(x, y);

    // assert
    expect(actual).to.equal(expected);

  });

});
