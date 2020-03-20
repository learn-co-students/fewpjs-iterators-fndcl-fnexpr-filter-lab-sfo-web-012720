// Case-insensitively Match strings

function findMatching(drivers, string) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase()
      )
}

// Partially Match Substrings
// returns all drivers whose names begin with the provided letters

function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
      )
}

// Match object Values To a Provided string
// return each element whose name property matches the provided string argument

function matchName(drivers, string) {
    return drivers.filter( record => record.name === string)
}