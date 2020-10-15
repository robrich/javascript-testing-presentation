export default function divide(x, y) {
  if (y === 0) {
    const err = new Error('can\'t divide by zero');
    err.code = 'DIVIDE_BY_ZERO';
    throw err;
  }
  return (x / y);
}
