function multiply(x, y) {
	return new Promise(function (resolve/*, reject*/) {
		resolve(x * y);
	});
}

module.exports = multiply;
