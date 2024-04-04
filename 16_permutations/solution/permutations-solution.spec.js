const permutations = require('./permutations-solution');

describe('permutations', () => {
  function outcome(input, expected) {
    const actual = permutations(input);

    // Convert both arrays to strings to compare them later, excluding the order the arrays elements are in

    const sterilise = (input) =>
      input
        .map((el) => el.toString())
        .toSorted()
        .toString();

    return [sterilise(actual), sterilise(expected)];
  }

  let actual, expected;

  afterEach(() => {
    expect(actual).toBe(expected);
  });

  test('Works for array of size one', () => {
    [actual, expected] = outcome([1], [1]);
  });
  test('Works for array of size two', () => {
    [actual, expected] = outcome(
      [1, 2],
      [
        [1, 2],
        [2, 1],
      ],
    );
  });
  test('Works for array of size three', () => {
    [actual, expected] = outcome(
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    );
  });
  test('Works for array of size four', () => {
    [actual, expected] = outcome(
      [1, 2, 3, 4],
      [
        [
          [1, 2, 3, 4],
          [1, 2, 4, 3],
          [1, 3, 2, 4],
          [1, 3, 4, 2],
          [1, 4, 2, 3],
          [1, 4, 3, 2],
          [2, 1, 3, 4],
          [2, 1, 4, 3],
          [2, 3, 1, 4],
          [2, 3, 4, 1],
          [2, 4, 1, 3],
          [2, 4, 3, 1],
          [3, 1, 2, 4],
          [3, 1, 4, 2],
          [3, 2, 1, 4],
          [3, 2, 4, 1],
          [3, 4, 1, 2],
          [3, 4, 2, 1],
          [4, 1, 2, 3],
          [4, 1, 3, 2],
          [4, 2, 1, 3],
          [4, 2, 3, 1],
          [4, 3, 1, 2],
          [4, 3, 2, 1],
        ],
      ],
    );
  });
});
