const calculator = require('../functions/calculator');

test('calculator object', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.multiply(4, 3)).toBe(12);
  expect(calculator.divide(8, 2)).toBe(4);
});
