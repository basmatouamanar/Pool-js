function filterValues(obj, func) {
    let arr = Object.entries(obj)
    const filter = arr.filter(([keys, values]) => func(values))
    return Object.fromEntries(filter)
}
function mapValues(obj, callback) {
    let arr = Object.entries(obj)
    const map = arr.map(([keys, values]) => [keys, callback(values)])
    return Object.fromEntries(map)
}

function reduceValues(obj, func, acc = 0) {
    let arr = Object.values(obj)
    let reducer = arr.reduce((acc, value) => func(acc, value), acc)

    return reducer
}
