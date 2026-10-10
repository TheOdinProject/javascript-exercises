const pascal = function (rowNumber) {
  if (rowNumber === 1) {
    return [1];
  }

  const previousRow = pascal(rowNumber - 1);
  // Add the imaginary extra zeros to the start and end, as described in the README
  const previousRowWithZeros = [0, ...previousRow, 0];

  const newRow = [];

  for (let i = 0; i < previousRowWithZeros.length - 1; i += 1) {
    const leftParent = previousRowWithZeros[i];
    const rightParent = previousRowWithZeros[i + 1];
    newRow.push(leftParent + rightParent);
  }

  return newRow;
};

// Do not edit below this line
module.exports = pascal;
