const repeatString = function(string, num) {
 if (num < 0){
    return 'ERROR';
 } else {
    return string.repeat(num);
 }
   
};

repeatString('hey', 3);
module.exports = repeatString;

