function chunk(arr, n) {
    let result = []
    let temp = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (count == n ){
            result.push(temp)
            temp = []
            count = 0
        }
        temp.push(arr[i])
        count++
    }
    if (temp != []) {
        result.push(temp)
    }
    return result
}



