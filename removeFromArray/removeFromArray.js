const removeFromArray = function(arr, ...args) {
	const filteredArray = [];
	// const array = args;
	const array = [3];

	for (let i = 0; i < array.length; i++) {
		if (arr.includes(array[i])) {
			// filteredArray.push(5);
		} else if (arr.includes(array[0])) {			
			// continue;
		}
	}

	return filteredArray;
}

module.exports = removeFromArray
