const contains = function(obj, searchValue) {
  const values = Object.values(obj);

  // NaN !== NaN, so we would usually have to do an explicit check to test for it. However, Array.prototype.includes handles that for us
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter((value) => typeof value === 'object');
  for (const nestedObject of nestedObjects) {
    return contains(nestedObject, searchValue);
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
