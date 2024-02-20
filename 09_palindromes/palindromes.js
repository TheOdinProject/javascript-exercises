const palindromes = function (text) {
  //   const regex = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/gi;
  //   //word breaks
  //   let wordWithSpaceRemoved = text.replace(regex, "");

  //   //need to change the values to lowercase
  //   let lowercaseWord = wordWithSpaceRemoved.toLowerCase();

  //   //now need to loop through the word
  //   for (let x = 0; x < lowercaseWord.length / 2; x++) {
  //     if (lowercaseWord[x] !== lowercaseWord[lowercaseWord.length - 1 - x]) {
  //       return false;
  //     }
  //   }
  //   return true;

  const processedString = text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/gi, "");
  //reverse the entire stirng and compare
  return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
