const analyzeArray = require('../functions/analyzeArray');

test('analyzeArray function', () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result.average).toBe(3);
  expect(result.min).toBe(1);
  expect(result.max).toBe(5);
  expect(result.length).toBe(5);
});
