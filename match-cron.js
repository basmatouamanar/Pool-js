function matchCron(str, date) {
    let variables = [];
    const arr = str.split(" ")
    const Minute = date.getMinutes()
    const hour = date.getHours()
    const dayofmonth = date.getDate()
    const month = date.getMonth()+1
    const dayofwek = date.getDay()

    variables.push(Minute, hour, dayofmonth, month, dayofwek)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "*") {
            continue
        }
        if (String(arr[i]) !== String(variables[i])) {
            return false
        }
    }
    return true
}
