const fibonacci = function(sequenceNumber) {
    let sequence = [1, 1];
    for (let i=1; i<=sequenceNumber; i++) {
        sequence.push(sequence[i] + sequence[i-1]);
    }

    return sequence[sequenceNumber-1];
};

// Do not edit below this line
module.exports = fibonacci;
