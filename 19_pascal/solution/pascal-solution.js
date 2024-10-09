const pascal = function (counter, currentLine = [1]) {
  if (counter === 1) {
    return currentLine;
  }

  const halfOfNextLine = currentLine.reduce(
    (numbers, currentNumber, index) => {
      const nextNumber = currentLine[index + 1];
      if (currentNumber <= nextNumber) {
        return [...numbers, currentNumber + nextNumber];
      }
      return numbers;
    },
    [1],
  );

  // Notice that pascal triangle's lines are always palindromic in nature.
  // We only need the first half to obtain the information to construct the second half
  const joined = [...halfOfNextLine, ...halfOfNextLine.reverse()];

  // If a given line of the pascal's triangle has an even amount of elements, two things are true:
  // - the next line will have an odd amount of elements
  // - the two elements in the middle will always be the same. So it's safe to remove one
  if (currentLine.length % 2 === 0) {
    joined.splice(joined.length / 2, 1);
  }

  return pascal(counter - 1, joined);
};

// Do not edit below this line
module.exports = pascal;
