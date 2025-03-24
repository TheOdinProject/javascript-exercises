const palindromes = function (str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
};
// Do not edit below this line
module.exports = palindromes;
