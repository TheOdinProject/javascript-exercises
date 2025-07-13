const longestConsecutive = require('./longestSequence');

// Helper: returns the actual longest consecutive sequence
function getLongestSequence(nums) {
  const numSet = new Set(nums);
  let longest = 0;
  let bestSequence = [];

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = [currentNum];

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSeq.push(currentNum);
      }

      if (currentSeq.length > longest) {
        longest = currentSeq.length;
        bestSequence = currentSeq;
      }
    }
  }

  return bestSequence;
}

// ✅ Tests with printed input, sequence, and output length
test('should return 4 for [100, 4, 200, 1, 3, 2]', () => {
  const input = [100, 4, 200, 1, 3, 2];
  const result = longestConsecutive(input);
  const sequence = getLongestSequence(input);
  console.log('Input:', input);
  console.log('Longest Sequence:', sequence, '| Length:', result);
  expect(result).toBe(4);
});

test('should return 8 for [9, 1, 4, 7, 3, 2, 5, 6, 0]', () => {
  const input = [9, 1, 4, 7, 3, 2, 5, 6, 0];
  const result = longestConsecutive(input);
  const sequence = getLongestSequence(input);
  console.log('Input:', input);
  console.log('Longest Sequence:', sequence, '| Length:', result);
  expect(result).toBe(8);
});

test('should return 5 for [1, 2, 3, 4, 5]', () => {
  const input = [1, 2, 3, 4, 5];
  const result = longestConsecutive(input);
  const sequence = getLongestSequence(input);
  console.log('Input:', input);
  console.log('Longest Sequence:', sequence, '| Length:', result);
  expect(result).toBe(5);
});

test('should return 1 for [10, 5, 12, 3, 55, 30]', () => {
  const input = [10, 5, 12, 3, 55, 30];
  const result = longestConsecutive(input);
  const sequence = getLongestSequence(input);
  console.log('Input:', input);
  console.log('Longest Sequence:', sequence, '| Length:', result);
  expect(result).toBe(1);
});

test('should return 0 for []', () => {
  const input = [];
  const result = longestConsecutive(input);
  const sequence = getLongestSequence(input);
  console.log('Input:', input);
  console.log('Longest Sequence:', sequence, '| Length:', result);
  expect(result).toBe(0);
});
