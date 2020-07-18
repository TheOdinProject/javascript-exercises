const ftoc = function(fValue) {

    let result = 0.0;

    //Convert Farenheit to Celsius
    result = Math.round(((fValue - 32) * 5 / 9) * 10) / 10;

    return result;
}

const ctof = function(cValue) {
    let result = 0.0;

    //Convert Celsius to Farenheit
    result = Math.round(((cValue * 9 / 5) + 32) * 10) / 10;

    return result;

}

module.exports = {
    ftoc,
    ctof
}