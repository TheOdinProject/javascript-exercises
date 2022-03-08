const repeatString = function(str, num) {
	let string = '';
    if (num < 0) {
        return ERROR
    }
	for (i = 0; i < num; i++) string += str;

	console.log(string);
	return string;
	i++;
};
repeatString('howdy', 3);
repeatString('howdy', 3);
// Do not edit below this line
module.exports = repeatString;
