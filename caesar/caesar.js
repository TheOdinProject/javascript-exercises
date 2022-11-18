const caesar = function(string, shiftValue) {
  return string
    .split("")
    .map(char => shift(char, shiftValue))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shift = (char, shiftValue) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shiftValue - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;
