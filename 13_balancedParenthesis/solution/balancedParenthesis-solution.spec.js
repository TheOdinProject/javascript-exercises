const balancedParenthesis = require('./balancedParenthesis-solution');

describe("balanced parenthesis", () => {
    
    test("(()) is return true", () => {
        expect(balancedParenthesis("(())")).toBe(true);
    });
    test("empty string is true", () => {
        expect(balancedParenthesis("")).toBe(true);
    });
    test("()) is return false", () => {
        expect(balancedParenthesis("())")).toBe(false);
    });
    test("{[()]} is return true", () => {
        expect(balancedParenthesis("{[()]}")).toBe(true);
    });
    test("{[()]}( is return false", () => {
        expect(balancedParenthesis("{[()]}(")).toBe(false);
    });
    test("((((((( is return false", () => {
        expect(balancedParenthesis("(((((((")).toBe(false);
    });
    test("()[]{} is return true", () => {
        expect(balancedParenthesis("()[]{}")).toBe(true);
    });
    test("([{}]) is return true", () => {
        expect(balancedParenthesis("([{}])")).toBe(true);
    });
    test("{{{{}}}}()() is return true", () => {
        expect(balancedParenthesis("{{{{}}}}()()")).toBe(true);
    });
    
})