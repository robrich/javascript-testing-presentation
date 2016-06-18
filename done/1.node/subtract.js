function subtract(x, y, cb) {
	var answer = x - y;
	cb(null, answer);
}

module.exports = subtract;
