const caesarCipher = require('../functions/caesarCipher');

test('caesarCipher function', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
  expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
  expect(caesarCipher('zZ', 1)).toBe('aA');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
