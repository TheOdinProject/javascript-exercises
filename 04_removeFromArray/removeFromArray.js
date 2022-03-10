const removeFromArray = function(...args) {
	const array = args[0];
	newArray = [];
	for (num of array) {
		if (!args.includes(num)) {
			newArray.push(num);
		}
	}
	console.log(array);
	console.log(newArray);
	return newArray;
};

//removeFromArray([ 1, 2, 3, 4, 5 ], 3);
// Do not edit below this line
module.exports = removeFromArray;
