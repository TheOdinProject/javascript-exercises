const removeFromArray = function(array, ...items) {
	items.forEach(item => {
		if (array.indexOf(item) >= 0) {
			const index = array.indexOf(item);
			array.splice(index, 1);
		} else {
			return
		}
	})
	console.log(array);
	return array;
}

module.exports = removeFromArray