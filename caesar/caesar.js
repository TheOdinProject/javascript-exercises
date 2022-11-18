const caesar = function(string, shiftValue) {
  return string
    .split("")
    .map(char => shift(char, shiftValue))
    .join("");
};

// This function implements a version of the modulo operator
// that returns the smallest positive remainder even for negative inputs.
// See this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shift = (char, shiftValue) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    const base = code < 97 ? 65 : 97;
    const shiftedCode = mod(code + shiftValue - base, 26) + base;
    return String.fromCharCode(shiftedCode);
  }
  return char;
};

module.exports = caesar;
