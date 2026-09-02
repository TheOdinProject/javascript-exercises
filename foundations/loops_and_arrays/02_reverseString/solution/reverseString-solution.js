const reverseString = function (string) {
  return string.split("").reverse().join("");
};

module.exports = reverseString;



// Another approach could be to loop over the string in reverse direction to construct a new one
/*
  const reverseString = function (string) {
    let reversedString = "";

    for (let i = string.length -1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };
*/ 