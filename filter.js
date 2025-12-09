
function filter(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}


function reject(arr, fn) {
     let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}


function partition(arr, fn) {
    let result = []
      let Tresult = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            Tresult.push(arr[i])
        }
    }
      let Fresult = []
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            Fresult.push(arr[i])
        }
    }
    result.push(Tresult)
    result.push(Fresult)
    return result
}


