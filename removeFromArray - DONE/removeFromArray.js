const removeFromArray = function(arr, ...args) {
	const filteredArray = arr;

	args.forEach(function(value, i) {
		if (arr.includes(args[i])) {
			let index = arr.indexOf(args[i]);
			filteredArray.splice(index, 1);
		} 
	})
	
	return filteredArray;
}

module.exports = removeFromArray
