const pascal = function (counter) {
  const currentLine = [1];
  if (counter === 1) {
    return currentLine;
  }

  const previousLine = pascal(counter - 1);
  previousLine.forEach((number, i) => {
    const rightNeighbor = previousLine[i + 1] ?? 0;
    currentLine.push(number + rightNeighbor);
  })

  return currentLine;
}

// Do not edit below this line
module.exports = pascal;
