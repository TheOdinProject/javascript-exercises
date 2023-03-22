const caesar = function (string, shift) {
  return string
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

const codeSet = (code) => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;
