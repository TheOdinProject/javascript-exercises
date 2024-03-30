const contains = function(obj, searchValue) {
  const values = Object.values(obj);

  // NaN === NaN evaluates to false (as per the IEEE 754 standard)
  // Normally, we would have to do an explicit Number.isNaN() check to compare NaN equality
  // However, Array.prototype.includes automatically handles this for us
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter((value) => typeof value === 'object' && value !== null);
  for (const nestedObject of nestedObjects) {
    return contains(nestedObject, searchValue);
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
