import AboutLoops from './AboutLoops';

describe('AboutLoops', () => {
  test('returns correct syntax information for all loop types', () => {
    // Call the AboutLoops function
    const result = AboutLoops();
    
    // Define the expected output
    const expected = `
    Syntax of For loop:
    for (initialization; condition; increment/decrement) {
        // code to be executed
    }
    
    ##############################################
    Syntax of While loop:
    while (condition) {
        // code to be executed
    }
    
    ##############################################
    Syntax of Do...While loop:
    do {
        // code to be executed
    } while (condition);
    
    ##############################################
    Syntax of For...In loop:
    for (let key in object) {
        // code to be executed
    }
    
    ##############################################
    Syntax of For...Of loop:
    for (let value of iterable) {
        // code to be executed
    }
    `;

    // Check if the result matches the expected output
    expect(result).toBe(expected);
  });

  test.skip('placeholder for future test', () => {
    // Placeholder for future tests
    // Update the expect line as necessary when the test case is defined

    expect(AboutLoops()).toBe('');
  });
});
