const fibonacci = function(num) {

    num = parseInt(num, 10);

    if (num < 0) {
        return "OOPS";
    }

    let first = 0;
    let second = 1;
    let next = 0;
    let array = [1];

    for (let i = 1; i < num; i++) {
        next = first + second;
        first = next;
        array.push(next);

        next = first + second;
        second = next;
        array.push(next);
    }

    return array[num -1];

};

// 1, 1, 2, 3, 5, 8, 13, 21

// Do not edit below this line
module.exports = fibonacci;
