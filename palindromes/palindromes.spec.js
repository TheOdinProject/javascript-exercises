const palindromes = require("./palindromes");

describe("palindromes", () => {
  it("works with single words", () => {
    expect(palindromes("racecar")).toEqual(true);
  });
  it("works with punctuation", () => {
    expect(palindromes("Racecar!")).toEqual(true);
  });
  it("works with multiple words", () => {
    expect(palindromes("A car, a man, a maraca.")).toEqual(true);
  });
  it("works with multiple words", () => {
    expect(
      palindromes("Animal loots foliated detail of stool lamina.")
    ).toEqual(true);
  });
  it("doesn't just always return true", () => {
    expect(palindromes("ZZZZ car, a man, a maraca.")).toEqual(false);
  });
});
