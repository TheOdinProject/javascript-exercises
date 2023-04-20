const sumAll = function(first, second) {
    
    if (first < 0 || second < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(first)) {
        return 'ERROR';
    } else if (!Number.isInteger(second)) {
        return 'ERROR';
    } else if (first <= second){

        let sum = 0;
        
        for (let i = first; i <= second; i++) {
            sum += i;
        }
        return sum;

    } else if (first > second) {

        let sum = 0;
        
        for (let i = first; i >= second; i--) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
