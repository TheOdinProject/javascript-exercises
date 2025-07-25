const removeFromArray = function(array, ...remove) {

    for (r of remove){
        
        if (array.includes(r)) {

            let timesRemove = 0;
        
            array.forEach( element => {
                if (element === r) 
                    timesRemove += 1
            });
    
            let indexToRemove =  array.indexOf(r)
            
            array.splice(indexToRemove, timesRemove)
            
        }
        
    }
    return array


};

// Do not edit below this line
module.exports = removeFromArray;
