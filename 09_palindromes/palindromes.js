const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '');
    const array = Array.from(string);
    let newArray = [];

    for (let i = 1; i <= string.length; i++) {
        newArray.push(string[string.length - i]);
    }

    let stringArray = (array.toString()).toLowerCase();
    let stringNewArray = (newArray.toString()).toLowerCase();

    if (stringArray === stringNewArray) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
