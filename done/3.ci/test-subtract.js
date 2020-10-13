(function () {

describe('subtract', function () {

  const expect = chai.expect;

  it('should subtract 2 and 2', function (done) {

    // arrange
    const x = 2;
    const y = 2;
    const expected = 0;

    // act
    subtract(x, y, function (err, actual) {

      // assert
      expect(actual).to.equal(expected);
      expect(err).to.equal(null);

      done();
    });
  });

  it('should subtract 3 and 1', function (done) {

    // arrange
    const x = 3;
    const y = 1;
    const expected = 2;

    // act
    subtract(x, y, function (err, actual) {

      // assert
      expect(actual).to.equal(expected);
      expect(err).to.equal(null);

      done();
    });
  });

});
}());

