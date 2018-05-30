function divide(x, y) {
	if (y === 0) {
		let err = new Error('can\'t divide by zero');
		err.code = 12345;
		throw err;
	}
	return (x / y);
}
