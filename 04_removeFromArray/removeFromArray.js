const removeFromArray = function(list, ...args) {
	args.forEach(arg => {
		index = list.indexOf(arg);
		if (index > -1) list.splice(index, 1);
	});
	return list;
};
// Do not edit below this line
module.exports = removeFromArray;
