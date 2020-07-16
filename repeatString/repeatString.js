const repeatString = function(string, number) {

    let result = '';

    for (let i = 0; i < number; i++) {
        if (number < 0) {
            return 'ERROR';
        } else {
            result += string;
        }

    }

    return result;

}

module.exports = repeatString