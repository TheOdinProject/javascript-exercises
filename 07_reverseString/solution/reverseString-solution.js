const reverseString = function (string) {
  return Array.from(string).reverse().join("");
  
  /*
  The following statement: `return string.split("").reverse().join("");`
  also works but only if the passed string doesn't include any complex Unicode character,
  i.e. a characher stored in a surrogate pair, which is a pair of 16-bit code units that represents a single character.
  Example: emojis as in "Great 👍" and some accented characters as in "mañana".
  
  The `split()` method splits the String by UTF-16 code units and will separate surrogate pairs resulting in invalid characters.
  
  Search about 'Surrogate Pairs' and 'Grapheme Clusters' for more information.
  */
};

module.exports = reverseString;
