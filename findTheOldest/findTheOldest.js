let findTheOldest = function(people) {
  let userData = [];

  for (i = 0; i < people.length; i++) {
    let date = new Date();
    let aliveStatus = "alive";
    let personAge;

    // if alive check age (today - yearOfBirth)
    // if not check age (yearOfDeath - yeahOfBirth)
    if ("yearOfDeath" in people[i] === false) {
      // aliveStatus = "alive";
      console.log(date.getFullYear());
      console.log(people[i].yearOfBirth);
      personAge = Number(date.getFullYear()) - people[i].yearOfBirth;
      console.log(personAge);
    } else {
      personAge = people[i].yearOfDeath - people[i].yearOfBirth;
      aliveStatus = "dead";
    }
    let personObject = {
      name: people[i].name,
      age: personAge,
      status: aliveStatus
    };

    userData.push(personObject);
  }

  console.log(userData);

  let oldestPersonName = userData[0].name;

  for (i = 0; i < userData.length; i++) {
    if (i === 0) {
      continue;
    } else {
      if (userData[i].age > userData[i - 1].age) {
        oldestPersonName = userData[i].name;
        oldestPersonAge = userData[i].age;
        console.log("current oldies : " + oldestPersonName);
      }
    }
  }  

  personObject = { name: oldestPersonName, age: oldestPersonAge };
  //console.log(personObject);
  return personObject;
};


module.exports = findTheOldest
