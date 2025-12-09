function slice(arr, start, end) {
    let arrresult = []
    let strresult = ''
    let isarray = false
    if (start < 0) {
        start = arr.length + start
    }
    if (end < 0) {
        end = arr.length + end
    }
    if (start >= end) {
        return Array.isArray(arr) ? [] : ""
    }
    if (end === undefined || end > arr.length) {
        end = arr.length
    }
    for (let i = start; i < end; i++) {
        if (typeof arr === 'string') {
            strresult += String(arr[i])
        }
        if (Array.isArray(arr)) {
            arrresult.push(arr[i])
            isarray = true
        }
    }
    return isarray ? arrresult : strresult
}



