function findMatching(searchString,drivers) {
const lowerCaseSearch = searchString.toLowerCase();
return drivers.filter(driver =>driver.toLowerCase().includes(lowerCaseSearch));
}// Code your solution here
function findMatching(drivers, searchString) {
    const lowerCaseSearchString = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseSearchString);
}
function fuzzyMatch(drivers, searchString) {
    const lowerCaseSearchString = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseSearchString));
}
function matchName(drivers, nameToMatch) {
    const lowerCaseNameToMatch = nameToMatch.toLowerCase();
    return drivers.filter(driver => driver.name.toLowerCase() === lowerCaseNameToMatch);
}


const matchedDrivers = matchName(drivers, 'Alice');
console.log(matchedDrivers);


