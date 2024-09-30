const drivers = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sammy", hometown: "San Francisco" },
  { name: "Sally", hometown: "Boston" },
  { name: "Annette", hometown: "Chicago" },
  { name: "Bobby", hometown: "Los Angeles" },
];

// 1) findMatching: Returns all drivers that match the passed-in name
// 2) It also returns matching drivers if the case doesn't match, but the letters do
// 3) Returns an empty array if there is no match
function findMatching(drivers, name) {
  return drivers.filter(
    
    
  );
}

// 4) fuzzyMatch: Returns a driver if the beginning provided letters match
// 5) It does not return drivers if only middle or ending letters match
// 6) Also, it should not return drivers if only middle or ending letters match (repeated rule)
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    
  );
}

// 7) matchName: Accesses the data structure to check if name matches (case-sensitive exact match)
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Testing

// findMatching() test cases
console.log(findMatching(drivers, "Bobby")); // Returns both Bobby drivers
console.log(findMatching(drivers, "Sammy")); // Returns the driver with the name Sammy
console.log(findMatching(drivers, "Tommy")); // Returns an empty array (no match)

// fuzzyMatch() test cases
console.log(fuzzyMatch(drivers, "Sa")); // Returns Sammy and Sally (matching start letters)
console.log(fuzzyMatch(drivers, "Ann")); // Returns Annette (matching start letters)
console.log(fuzzyMatch(drivers, "my")); // Returns an empty array (does not match start of any name)

// matchName() test cases
console.log(matchName(drivers, "Bobby")); // Returns both Bobby drivers
console.log(matchName(drivers, "Sally")); // Returns Sally driver
console.log(matchName(drivers, "bobby")); // Returns an empty array (because matchName is case-sensitive)
