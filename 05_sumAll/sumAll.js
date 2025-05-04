const sumAll = (min, max) => {
	let sum = 0;

	if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
	if (min < 0 || max < 0) return "ERROR";

	const start = Math.min(min, max);
	const end = Math.max(min, max);

	// alternative ways to swap the values of min and max
	//1. if (min > max) [min, max] = [max, min];
	//2.  if (min > max) {
	//    const temp = min;
	//    min = max;
	//    max = temp;
	//  }

	for (let i = start; i <= end; i++) {
		sum = sum + i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
