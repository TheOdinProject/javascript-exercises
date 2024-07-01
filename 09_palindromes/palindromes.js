const palindromes = function (input) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedInput = input.toLowerCase()
  .split('')
  .filter((character) => alphanumerical.includes(character))
  .join('');
  const backwards = cleanedInput.split('').reverse().join('');
  return backwards === cleanedInput;
};

// Do not edit below this line
module.exports = palindromes;
