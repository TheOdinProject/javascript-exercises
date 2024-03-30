const contains = function (initialObject, searchValue, queue = []) {
  if (initialObject !== null) queue.push(initialObject);
  if (initialObject === null && queue.length === 0) return false;
  const item = queue.shift();
  const values = Object.values(item);

  // NaN === NaN evaluates to false
  // Normally, we would have to do an explicit Number.isNaN() check to compare NaN equality
  // However, Array.prototype.includes automatically handles this for us
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter(
    // typeof null === 'object' evaluates to true ¯\_(ツ)_/¯
    (value) => typeof value === "object" && value !== null,
  );

  const newQueue = queue.concat(nestedObjects);

  return contains(null, searchValue, newQueue);
};

// Do not edit below this line
module.exports = contains;
