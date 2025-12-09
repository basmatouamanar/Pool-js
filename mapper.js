
function map(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
}


function flatMap(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let v = fn(arr[i], i, arr)
        if (!Array.isArray(v)) v = [v] 
        for (let j = 0; j < v.length; j++) {
            result.push(v[j])
        }
    }
    return result
}

