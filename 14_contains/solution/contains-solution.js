const contains = function (object, searchValue) {
  const values = Object.values(object);

  // NaN === NaN evaluates to false
  // Normally, we would have to do an explicit Number.isNaN() check to compare NaN equality
  // However, Array.prototype.includes automatically handles this for us
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter(
    // typeof null === 'object' evaluates to true ¯\_(ツ)_/¯
    (value) => typeof value === "object" && value !== null
  );

  return nestedObjects.some((nestedObject) =>
    contains(nestedObject, searchValue)
  );
};

// Do not edit below this line
module.exports = contains;
