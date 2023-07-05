const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    // For clarification: curr stands for current. This is standard syntax
    
    for (let i = 2; i <= count; i++) {
        let curr = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = curr;
    }

    return firstPrev;
};

module.exports = fibonacci;
