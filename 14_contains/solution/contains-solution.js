const contains = function(obj, searchValue) {
  const values = Object.values(obj);
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter((value) => typeof value === 'object');
  for (const nestedObject of nestedObjects) {
    return contains(nestedObject, searchValue);
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
