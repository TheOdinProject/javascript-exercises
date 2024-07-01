const totalIntegers = function (obj, count = 0) {
  const isObject = (value) => typeof value === 'object' && value !== null;

  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  const elements = Object.values(obj);

  for (const el of elements) {
    if (Number.isInteger(el)) {
      count++;
    } else if (isObject(el)) {
      count += totalIntegers(el);
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
