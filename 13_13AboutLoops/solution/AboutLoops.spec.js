import AboutLoops from './AboutLoops';

describe('AboutLoops', () => {
  test('returns correct output for all loop types', () => {
    const result = AboutLoops();
    
    // Define the expected output
    const expected = [
      'for loop: 0',
      'for loop: 1',
      'for loop: 2',
      'for loop: 3',
      'for loop: 4',
      'while loop: 0',
      'while loop: 1',
      'while loop: 2',
      'while loop: 3',
      'while loop: 4',
      'do...while loop: 0',
      'do...while loop: 1',
      'do...while loop: 2',
      'do...while loop: 3',
      'do...while loop: 4',
      'for...in loop: name: Alice',
      'for...in loop: age: 25',
      'for...in loop: job: Engineer',
      'for...of loop: 10',
      'for...of loop: 20',
      'for...of loop: 30',
      'for...of loop: 40',
      'for...of loop: 50',
    ];

    // Check if the result matches the expected output
    expect(result).toEqual(expected);
  });

  test.skip('placeholder for future test', () => {
    // Placeholder for future tests
    // Update the expect line as necessary when the test case is defined

    expect(AboutLoops()).toBe([]);
  });
});
