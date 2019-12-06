// This data lives in assets/data.js.  Because data.js is the first script tag, it is loaded into memory first and can be used in subsequent .js files
// console.log(userData);
// Use the userData array to complete the challenges below

// challenge 1 : write the logic for the challengeOne function so that it returns an array of objects of people that live in Japan

function challengeOne(arr) {
  const japanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].country === "Japan") {
      japanArr.push(arr[i]);
    }
  }
  return japanArr;
}
const japanOnly = challengeOne(userData);
console.log("japanOnly", japanOnly);
// or - console.log(challengeOne(userData)) - same thing

// challenge 2:  refactor challengeOne so that it accepts two arguments: 1) an array, 2) a string that is the location you want to get users for e.g. challengeTwo(userData, "United States").  challengeTwo should return an array of the 'found' users for that country. Each found user should be an object that contains the following properties for the current found user:  firstname, lastname, and email (not the entire original user object).   If no users are found, return null.
// `country = "China"` ===setting a default value of "China" for the country value
function challengeTwo(arr, country = "China") {
  const filteredArr = [];
  // chose a for-of loop because I don't need the iterator (i) variable
  for (const person of arr) {
    if (person.country === country) {
      const newUser = {
        firstname: person.first_name,
        lastname: person.last_name,
        email: person.email
      };
      filteredArr.push(newUser);
      //    OR
      // filteredArr.push({
      //   firstname: person.first_name,
      //   lastname: person.last_name,
      //   email: person.email
      // });
    }
  }

  if (filteredArr.length <= 0) return null;

  return filteredArr;
}
const unitedStatesArr = challengeTwo(userData, "United States");
const defaultArr = challengeTwo(userData);
console.log("unitedStatesArr", unitedStatesArr);
console.log("defaultArr", defaultArr);

// challenge 3: challengeThree should take the userData array as an argument and return an object with properties for every country that appears in the userData array and values of how many times each country appears in the array
function challengeThree(arr) {
  const countryCount = {};
  for (const user of arr) {
    countryCount[user.country] = ++countryCount[user.country] || 1;
  }
  return countryCount;
}

const countObj = challengeThree(userData);
console.log("countObj", countObj);
