const fibonacci = function(num) {
    if (num < 0) { return "OOPS" }
    if (num == 0) { return 0 }
    if (num == 1) { return 1 }

    if (!isNaN(num)) {
        let num1 = 0;
        let num2 = 1;
        let value = 0;

        for (let i = 1; i < num; i++) {
            value = num1 + num2;
            num1 = num2;
            num2 = value;
    }

    return value
    }
};

// Do not edit below this line
module.exports = fibonacci;
