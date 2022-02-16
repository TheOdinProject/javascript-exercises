const removeFromArray = function(arr, item) {
	let removedArr = arr.splice((item - 1), 1);
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
