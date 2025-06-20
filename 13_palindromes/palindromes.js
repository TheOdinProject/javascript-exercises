const palindromes = function (reverseText) {

    reverseText = reverseText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if(reverseText == reverseText.split("").reverse().join("")){

        return true
        
    }
    else{
        return false;
    }


};

palindromes("racecar");
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
