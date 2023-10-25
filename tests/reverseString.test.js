const reverseString = require('../functions/reverseString');

test('reverseString function', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('HELLO')).toBe('OLLEH');
});
