// We could define this helper function inside of totalIntegers however that would not be best practice as everytime that the recursive totalIntegers is run it would re-create the isObject function when it could just re-use it.
const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function (obj) {
  let count = 0;

  if (!isObject(obj)) {
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
