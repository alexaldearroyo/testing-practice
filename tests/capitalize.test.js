const capitalize = require('../functions/capitalize');

test('capitalize function', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('HELLO')).toBe('HELLO');
});
