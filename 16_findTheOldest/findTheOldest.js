const findTheOldest = function (people) {
  for (member of people) {
    if ("yearOfDeath" in member)
      member.age = member.yearOfDeath - member.yearOfBirth;
    else member.age = new Date().getFullYear() - member.yearOfBirth;
  }
  people.sort((a, b) => b.age - a.age);
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
