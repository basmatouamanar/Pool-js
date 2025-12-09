const is = {}

is.num = function (n) {
    if (typeof n === 'number') {
        return true
    }
    return false
}

is.nan = function (n) {
    if (Number.isNaN(n)) {
        return true
    }
    return false
}

is.str = function (n) {
    if (typeof n === 'string') {
        return true
    }
    return false
}

is.bool = function (n) {
    if (typeof n === 'boolean') {
        return true
    }
    return false
}

is.undef = function (n) {
    if (n === undefined) {
        return true
    }
    return false
}

is.def = function (n) {
    if (n !== undefined) {
        return true
    }
    return false
}

is.arr = function (n) {
    if (Array.isArray(n)) {
        return true
    }
    return false
}


is.fun = function (n) {
    if (typeof n === 'function') {
        return true
    }
    return false
}

is.truthy = function (n) {
    return !!n
}

is.falsy = function (n) {
    return !n
}


is.obj = function (n) {
    if (typeof n !== 'object' || n === null) {
        return false
    }
    return !Array.isArray(n)
}

