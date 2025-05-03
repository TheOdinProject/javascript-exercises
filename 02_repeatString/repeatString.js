const repeatString = function(string, num) {
return num < 0 ? 'ERROR' : string.repeat(num);
};
console.log(repeatString('hey', 3)); // heyheyhey

// Do not edit below this line
module.exports = repeatString;
