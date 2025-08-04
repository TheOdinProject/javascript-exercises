const fibonacci = function(position) {
    const fibonacci = [1, 1, 2, 3, 5, 8];

    if ( position == 0) return 0
    
    if ( Number(position) ) parseInt(position)

    if (position < 0) return "OOPS"

    let realPosition = --position
    
    let lastValue;
    let currentIndex = 0;
    while (fibonacci.length <= position) {
        let currentValue = fibonacci[currentIndex]
        lastValue = currentIndex == 0 ? lastValue = 0 : fibonacci[currentIndex -1]
        
        let sum = lastValue + currentValue
        if (!fibonacci.includes(sum)) fibonacci.push(sum)

        currentIndex++;
    }

    return fibonacci[realPosition]
    /*
    The fibonacci number is a number sequence
    where each number is obtained by adding the past numbers and current one, if there isn't
    a previous number it equals 0

    PLAN
    I need to complete a function that returns a number in the Fibonacci sequence.
    I receive a number as an argument, this arguments represents the number's position 
    in the Fibonacci sequence.

    I need to create an array to store the numbers contained in the fibonacci sequence,
    to get the number and find the position of the number to return.

    I need to create a variable that stores the result from last sum. 
    I will create a while loop that stops until the array length matches position 

    The loop will perform calculations and push values to the array if not existent.

    PSEUDOCODE

    CReate array [1, 1, 2, 3, 5, 8]

    CREATE a variable to store previous value

    WHILE value IS found in array

        I need to get the value from previous number

        if there's no previous number it equals 0

        if number not found in the array store it
    
    Return value in the specified position
    */
    
};

// Do not edit below this line
module.exports = fibonacci;
