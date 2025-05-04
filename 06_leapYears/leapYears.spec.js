const leapYears = require("./leapYears");

describe("leapYears", () => {
	test("works with non century years", () => {
		expect(leapYears(1996)).toBe(true);
	});
	test("works with non century years", () => {
		expect(leapYears(1997)).toBe(false);
	});
	test("works with ridiculously futuristic non century years", () => {
		expect(leapYears(34992)).toBe(true);
	});
	test("works with century years", () => {
		expect(leapYears(1900)).toBe(false);
	});
	test("works with century years", () => {
		expect(leapYears(1600)).toBe(true);
	});
	test("works with century years", () => {
		expect(leapYears(700)).toBe(false);
	});
});
