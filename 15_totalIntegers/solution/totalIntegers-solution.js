const totalIntegers = function(obj, count = 0) {

  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  const elements = Object.values(obj);

  for (const el of elements) {
    if (Number.isInteger(el)) {
      count++;
    } else if (typeof el === 'object' && el !== null) {
      count += totalIntegers(el);
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
