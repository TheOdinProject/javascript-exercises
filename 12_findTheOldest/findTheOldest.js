const findTheOldest = function(){ 
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
        const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
        const oldest = people.sort((a, b) =>
        age(a) > age(b) ? -1 : 1
        );
        return oldest[0];

        
    
    }   
      

          

// Do not edit below this line
module.exports = findTheOldest;
