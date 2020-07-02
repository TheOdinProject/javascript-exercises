// using reduce method
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
    return oldestAge < currentAge ? currentPerson : oldest
  })
}

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

module.exports = findTheOldest


// option using sort method
// let findTheOldest = function(people) {
//   const sorted = people.sort((a, b) => {
//     if(b.yearOfDeath === undefined && b.yearOfBirth < a.yearOfBirth){
//       return 1
//     }
//     if((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
//       return 1
//     }
//     else{
//       return -1
//     }
//   })
//   return sorted[0]
// }
