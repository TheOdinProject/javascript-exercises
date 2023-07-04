const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let first_prev = 1;
    let second_prev = 0;

    for (let i = 2; i <= count; i++) {
        let curr = first_prev + second_prev;
        second_prev = first_prev;
        first_prev = curr;
    }

    return first_prev;
};

module.exports = fibonacci;
