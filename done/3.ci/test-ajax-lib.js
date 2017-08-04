var expect = chai.expect;

describe('ajax-lib#getAllRecords', function () {

	var realAjax;
	beforeEach(function () {
		realAjax = $.ajax;
	});
	afterEach(function () {
		$.ajax = realAjax;
	});

	it('should get all results', function (done) {

		// arrange
		var id = 5;
		var expected = [{one:'one'}];

		// mocks
		$.ajax = function (opts) {
			// expect(opts.url).to.equal('/backend/..');
			opts.success(expected);
		};

		// act
		getAllRecords(id, function (err, actual) {

			// assert
			expect(actual).to.deep.equal(expected);
			expect(err).to.equal(null);

			done();
		});
	});

});
