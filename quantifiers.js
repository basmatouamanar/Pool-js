
function every(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false 
        }
    }
    return true  
}

function some(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true
        }
    }
    return false 
}

function none(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return false 
        }
    }
    return true  
}



