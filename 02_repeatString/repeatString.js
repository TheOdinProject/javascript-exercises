let string = 'hello';

const repeatString = function(string, num) {
    let result = '';
    for(let i = 0; i < num; i++){
        result += string;
    }
    return result;
};  

const repeatedString = repeatString(string, 10);
console.log(repeatedString);



// Do not edit below this line
module.exports = repeatString;
