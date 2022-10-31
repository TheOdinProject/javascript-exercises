const removeFromArray = function(list, ...remove) {

    let result = list.filter(item => !remove.includes(item));

    return result;
    
};

// Do not edit below this line
module.exports = removeFromArray;
