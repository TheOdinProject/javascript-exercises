const hanoi = require("./hanoi");

describe("hanoi", () => {
  test("hanoi(1) should solve the puzzle in 1 move", () => {
    const result = hanoi(1);
    expect(result).toEqual(["Move disc 1 from tower 1 to tower 3"]);
  });

  test.skip("hanoi(2) should solve the puzzle in 3 moves", () => {
    const result = hanoi(2);
    expect(result).toEqual([
      "Move disc 1 from tower 1 to tower 2",
      "Move disc 2 from tower 1 to tower 3",
      "Move disc 1 from tower 2 to tower 3",
    ]);
  });

  test.skip("hanoi(3) should solve the puzzle in 7 moves", () => {
    const result = hanoi(3);
    expect(result).toEqual([
      "Move disc 1 from tower 1 to tower 3",
      "Move disc 2 from tower 1 to tower 2",
      "Move disc 1 from tower 3 to tower 2",
      "Move disc 3 from tower 1 to tower 3",
      "Move disc 1 from tower 2 to tower 1",
      "Move disc 2 from tower 2 to tower 3",
      "Move disc 1 from tower 1 to tower 3",
    ]);
  });

  test.skip("hanoi(4) should solve the puzzle in 15 moves", () => {
    const result = hanoi(4);
    expect(result).toEqual([
      "Move disc 1 from tower 1 to tower 2",
      "Move disc 2 from tower 1 to tower 3",
      "Move disc 1 from tower 2 to tower 3",
      "Move disc 3 from tower 1 to tower 2",
      "Move disc 1 from tower 3 to tower 1",
      "Move disc 2 from tower 3 to tower 2",
      "Move disc 1 from tower 1 to tower 2",
      "Move disc 4 from tower 1 to tower 3",
      "Move disc 1 from tower 2 to tower 3",
      "Move disc 2 from tower 2 to tower 1",
      "Move disc 1 from tower 3 to tower 1",
      "Move disc 3 from tower 2 to tower 3",
      "Move disc 1 from tower 1 to tower 2",
      "Move disc 2 from tower 1 to tower 3",
      "Move disc 1 from tower 2 to tower 3",
    ]);
  });
});

