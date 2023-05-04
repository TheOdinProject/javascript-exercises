const balancedParenthesis = require('./balancedParenthesis');

describe("balanced parenthesis", () => {
    
    test("(()) is return true", () => {
        expect(balancedParenthesis("(())")).toBe(true);
    });
    test.skip("empty string is true", () => {
        expect(balancedParenthesis("")).toBe(true);
    });
    test.skip("()) is return false", () => {
        expect(balancedParenthesis("())")).toBe(false);
    });
    test.skip("{[()]} is return true", () => {
        expect(balancedParenthesis("{[()]}")).toBe(true);
    });
    test.skip("{[()]}( is return false", () => {
        expect(balancedParenthesis("{[()]}(")).toBe(false);
    });
    test.skip("((((((( is return false", () => {
        expect(balancedParenthesis("(((((((")).toBe(false);
    });
    test.skip("()[]{} is return true", () => {
        expect(balancedParenthesis("()[]{}")).toBe(true);
    });
    test.skip("([{}]) is return true", () => {
        expect(balancedParenthesis("([{}])")).toBe(true);
    });
    test.skip("{{{{}}}}()() is return true", () => {
        expect(balancedParenthesis("{{{{}}}}()()")).toBe(true);
    });
    
})