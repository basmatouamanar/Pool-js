function dayOfTheYear(date) {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const bissextile = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = date.getFullYear()
    const month = date.getMonth()
    let result = 0
    let isbissextile = false 
    if ((year % 4 === 0 && year % 100 !== 0) || year% 400 === 0) {
        isbissextile = true
    }
    for (let i = 0; i < month; i++) {
        if (isbissextile) {
            result += bissextile[i]
        }else {
            result += daysPerMonth[i]
        }
    }
    result += date.getDate()
    return result
} 
