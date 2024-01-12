const sumAll = function(numeroUno, numeroDos) {
    console.log(typeof numeroUno);
    console.log(typeof numeroDos);
    if ( !(typeof numeroUno === 'number') || !(typeof numeroDos === 'number')) {
        console.log("Wasn't a number");
        return "ERROR";
    } else if ( !(numeroUno > -1) || !(numeroDos > -1)) {
        console.log("Was negative");
        return "ERROR";
    } else {
        let summation = 0;
        for (let i=Math.min(numeroUno, numeroDos); i<=Math.max(numeroUno, numeroDos); i++){ 
            summation += i;
        }
        return summation;
    }
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
