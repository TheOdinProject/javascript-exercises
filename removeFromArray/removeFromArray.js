const removeFromArray = function(arr, ...args) {
	const filteredArray = arr;

	for (let i = 0; i < args.length; i++) {
		if (arr.includes(args[i])) {
			let index = arr.indexOf(args[i]);
			filteredArray.splice(index, 1);
		} else if (arr.includes(args[i])) {			
			continue;
		}
	}
	return filteredArray;
}

module.exports = removeFromArray
