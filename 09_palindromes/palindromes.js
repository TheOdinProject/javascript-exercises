const palindromes = function(string) {
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, ""); 
    
    let reversedString = (
      processedString
        .split("")      // ["v","u","d","a","n","g"]
        .reverse()      // ["g","n","a","d","u","v"]
        .join("")      // "gnaduv"
    );
    return processedString == reversedString; // false because "vudang" =! "gnaduv"
  };
palindromes('racecar')
// Do not edit below this line
module.exports = palindromes;
