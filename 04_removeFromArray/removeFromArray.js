const removeFromArray = (args, ...x) => {
	const num = Array.from(args);
	return num.filter((id) => !x.includes(id));
};
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
