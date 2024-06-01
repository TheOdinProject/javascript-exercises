let string = 'hey';

const repeatString = function(string, num) {
    let result = '';
    for(let i = 0; i < num; i++){
        result += string;
    }
    return result;
};  

const repeatedString = repeatString(string, 3);
console.log(repeatedString);


// Do not edit below this line
module.exports = repeatString;
