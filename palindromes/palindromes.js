const palindromes = function (str) {
  let strippedStr = str.toLowerCase().replace(
    /(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+| |=)/g,
    ""
  );
  let splitStr = strippedStr.split("");
  let reversedStr = [];

  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversedStr.push(splitStr[i]);
  }
//  return [splitStr, reversedStr, JSON.stringify(splitStr), JSON.stringify(reversedStr)];
  return JSON.stringify(splitStr) === JSON.stringify(reversedStr) ? true : false;
};

module.exports = palindromes;
