function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    } else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
    } else {
      return char;
    }
  }).join('');
}

module.exports = caesarCipher;
