const hanoi = require("./hanoi-solution");

describe("hanoi", () => {
  test("hanoi(1) should solve the puzzle in 1 move", () => {
    const result = hanoi(1);
    const expected = [
      [[1], [], []],
      [[], [], [1]],
    ];
    expect(result).toEqual(expected);
  });

  test("hanoi(2) should solve the puzzle in 3 moves", () => {
    const result = hanoi(2);
    const expected = [
      [[2, 1], [], []],
      [[2], [1], []],
      [[], [1], [2]],
      [[], [], [2, 1]],
    ];
    expect(result).toEqual(expected);
  });

  test("hanoi(3) should solve the puzzle in 7 moves", () => {
    const result = hanoi(3);
    const expected = [
      [[3, 2, 1], [], []],
      [[3, 2], [], [1]],
      [[3], [2], [1]],
      [[3], [2, 1], []],
      [[], [2, 1], [3]],
      [[1], [2], [3]],
      [[1], [], [3, 2]],
      [[], [], [3, 2, 1]],
    ];
    expect(result).toEqual(expected);
  });

  test("hanoi(4) should solve the puzzle in 15 moves", () => {
    const result = hanoi(4);
    const expected = [
      [[4, 3, 2, 1], [], []],
      [[4, 3, 2], [1], []],
      [[4, 3], [1], [2]],
      [[4, 3], [], [2, 1]],
      [[4], [3], [2, 1]],
      [[4, 1], [3], [2]],
      [[4, 1], [3, 2], []],
      [[4], [3, 2, 1], []],
      [[], [3, 2, 1], [4]],
      [[], [3, 2], [4, 1]],
      [[2], [3], [4, 1]],
      [[2, 1], [3], [4]],
      [[2, 1], [], [4, 3]],
      [[2], [1], [4, 3]],
      [[], [1], [4, 3, 2]],
      [[], [], [4, 3, 2, 1]],
    ];
    expect(result).toEqual(expected);
  });
});
