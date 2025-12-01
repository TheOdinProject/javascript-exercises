// The extra null check is required since typeof null === "object" evaluates to true
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
