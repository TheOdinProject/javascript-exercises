const repeatString = function(string, num) {
if (num < 0){
    return 'ERROR';
}
let repeatedWord = "";  
for (let i = 0; i < num; i++){
    repeatedWord += string;
}
return repeatedWord;
};


// Do not edit below this line
module.exports = repeatString;
