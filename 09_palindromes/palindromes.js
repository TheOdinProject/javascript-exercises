const palindromes = function (string) {
    
    const array = string.split("");
    const newArray = [];
    const reversedArray = [];
    let newString = "";
    let reversedString = "";

    array.forEach(item => 
        {
            // verific daca este litera
            if (item.toLowerCase() != item.toUpperCase()) {
                newArray.push(item);
                reversedArray.unshift(item);
            }

            newString = newArray.join("").toLowerCase();
            reversedString = reversedArray.join("").toLowerCase();
        });
    
    if (newString == reversedString) {

        return true;

    } else {

        return false;

    }
};

// Do not edit below this line
module.exports = palindromes;
