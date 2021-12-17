const removeFromArray = ( inArray, ...theFilters ) => {
    // Create a local mutable copy of input Array
    var filterArray = inArray;
    //Cycle through elements of theFilters
    for (i = 1; i <= theFilters.length ; i++) {
        //Filters filterArray by each sub-element of theFilters element
        filterArray = filterArray.filter(item => item !== theFilters[i-1]); 
    }
    return filterArray;
};

// Do not edit below this line
module.exports = removeFromArray;
