const isInteger = (number) => {
  switch (true) {
    case (Number.isNaN(number)):
    case (typeof number !== 'number'):
    case (number % 1 !== 0):
      return false;
    default:
      return true;
  }
};

const totalIntegers = function(array, count = 0) {
  if (!Array.isArray(array)) return;
  for (const el of array) {
    if (isInteger(el)) ++count;
    if (Array.isArray(el)) count += totalIntegers(el);
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
