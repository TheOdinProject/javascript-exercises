const palindromes = function(string) {
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, ""); 
    
    let reversedString = (
      processedString
        .split("")      
        .reverse()      
        .join("")
    );
    return processedString == reversedString;
  };
palindromes('racecar')
// Do not edit below this line
module.exports = palindromes;
