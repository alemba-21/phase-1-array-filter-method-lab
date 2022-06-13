// Code your solution here

function findMatching(drivers, confirmed) {
    return drivers.filter(
      (perfectMatch) => perfectMatch.toLowerCase() === confirmed.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, testString) {
    return drivers.filter(
      (perfectMatch) =>
        perfectMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(drivers, driversName) {
    return drivers.filter((record) => record.name === driversName);
  }