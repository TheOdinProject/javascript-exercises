const repeatString = function(str, repeat) {
    if (repeat >= 0) {
        let world = '';
        for (let index = 0; index < repeat; index++) {
            world += str  
        }
        return world
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
