
function isValid(date) {
    if (typeof date === 'string') return false
    date = new Date(date)
    return date instanceof Date && !isNaN(date)
}

function isAfter(date1, date2) {
     if (typeof date === 'string') return false
    date1 = new Date(date1)
    date2 = new Date(date2)
    if (!isValid(date2) || !isValid(date1)) return false
    date1 = date1.getTime()
    date2 = date2.getTime()
    if (date1 > date2) {
        return true
    }
    return false

}

function isBefore(date1, date2) {
     if (typeof date === 'string') return false
    date1 = new Date(date1)
    date2 = new Date(date2)
    if (!isValid(date2) || !isValid(date1)) return false
    date1 = date1.getTime()
    date2 = date2.getTime()
    if (date1 < date2) {
        return true
    }
    return false
}

function isFuture(date) {
     if (typeof date === 'string') return false
    date = new Date(date)
    if (!isValid(date)) return false
    let thisdate = new Date()
    let now = thisdate.getTime()
    date = date.getTime()
    if (date > now) {
        return true
    }
    return false
}

function isPast(date) {
     if (typeof date === 'string') return false
    date = new Date(date)
    if (!isValid(date)) return false
    let thisdate = new Date()
    let now = thisdate.getTime()
    date = date.getTime()
    if (date < now) {
        return true
    }
    return false
}


console.log(isValid('2004-08-09'))