
function findMatching(drivers, name) {
    let list = drivers.filter(n => {
        return (n.toLowerCase() == name.toLowerCase())
    })
    return list;
}

function fuzzyMatch(drivers, name) {
    return drivers.filter( letters =>
        letters.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
}

function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
}