const reverseString = function(world) {
    let worldSplit = world.split('');
    let worldReverseSplit = worldSplit.reverse();
    let worldReverse = worldReverseSplit.join('')
    return worldReverse
};

// Do not edit below this line
module.exports = reverseString;
