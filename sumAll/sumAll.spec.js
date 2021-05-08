const sumAll = require("./sumAll");

describe("sumAll", () => {
  it("sums numbers within the range", () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  it("works with large numbers", () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  it("works with larger number first", () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  it("returns ERROR with negative numbers", () => {
    expect(sumAll(-10, 4)).toEqual("ERROR");
  });
  it("returns ERROR with non-number parameters", () => {
    expect(sumAll(10, "90")).toEqual("ERROR");
  });
  it("returns ERROR with non-number parameters", () => {
    expect(sumAll(10, [90, 1])).toEqual("ERROR");
  });
});
