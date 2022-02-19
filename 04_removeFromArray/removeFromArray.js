//rest parameters! => ...Args

const removeFromArray = function(...input) {
	let array = input[0];
	let newArray = [];

	array.forEach((item) => {
		if (!input.includes(item)) newArray.push(item);
	})

	return newArray;
};

//let's try the same but with .filter()!
// const removeFromArray = function (...input) {
// 	array = input[0];

// 	newArray = array.filter((item) => {
// 		if (!input.includes(item)) return true;
// 	})

// 	return newArray;
// };

console.log(removeFromArray([1, 2, 3, 4], 2, 4));

// Do not edit below this line
module.exports = removeFromArray;
