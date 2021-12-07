const findTheOldest = function(array) {
    let oldestPersonObj = {};
    let previousPersonAge = 0;
    array.forEach( (element,index) => {
        let currentPersonAge = getCurrentAge(element);
        if (currentPersonAge > previousPersonAge ){
          oldestPersonObj = element;
          previousPersonAge = currentPersonAge;
        }
    });
    console.log('Oldest living person is ' +oldestPersonObj.name + ' age ' +getCurrentAge(oldestPersonObj));
    return oldestPersonObj
};

const getCurrentAge = function (person) {
 
  if (person.yearOfDeath){
    return (person.yearOfDeath - person.yearOfBirth);
  }
  else  {
    let todayDate = new Date();
    return  (todayDate.getFullYear() - person.yearOfBirth);
  }
};

/*

  const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
*/


// Do not edit below this line
module.exports = findTheOldest;

