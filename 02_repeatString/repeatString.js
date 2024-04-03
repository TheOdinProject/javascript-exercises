const repeatString = function(str, num) {
    if (num >= 0) {
        let world = '';
        for (let index = 0; index < num; index++) {
            world += str  
        }
        return world
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
