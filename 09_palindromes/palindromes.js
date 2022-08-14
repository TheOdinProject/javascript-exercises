const palindromes = function (word) {
    const punctuationsAndWordBreaks = /[!"@#$%^&*()_+-<>?/.,\s|`~]/g;
    let pureString = word.toLowerCase();
    pureString = pureString.replace(punctuationsAndWordBreaks, "");

    let result = "";
    for(let i = pureString.length - 1; i >= 0; i--){
        result += pureString[i];
    }
    if( result === pureString ){
     return true;
    } else{
     return false;
    }
};

console.log(palindromes('Racecar!')); //should return true
console.log(palindromes('A car, a man, a maraca.')); //should return true
console.log(palindromes('Animal loots foliated detail of stool lamina.')); //should return true

// Do not edit below this line
module.exports = palindromes;
