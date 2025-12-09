
function fold(array, fn, acc) {
    let result = acc

    for (let i = 0; i < array.length; i++) {
        result = fn(result, array[i])
    }
    return result
}


function foldRight(array, fn, acc) {
    let result = acc

    for (let i = array.length - 1; i >= 0; i--) {
        result = fn(result, array[i])
    }
    return result
}

function reduce(array, fn) {
    if (array.length < 1) {
        throw new Error("Reduce of empty array with no initial value")
    }
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        result = fn(result, array[i])
    }
    return result
}

function reduceRight(array, fn) {
    if (array.length < 1) {
        throw new Error("Reduce of empty array with no initial value")
    }
    let result = array[array.length - 1]

    for (let i = array.length - 2; i >= 0; i--) {
        result = fn(result, array[i])
    }
    return result
}



