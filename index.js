// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver => {
       return driver.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        let x = string.length 
        return driver.substring(0, x) === string;
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
       return driver.name === string;
    })
}