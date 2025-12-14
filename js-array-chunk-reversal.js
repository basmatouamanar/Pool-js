function reverseChunks(arr, chunkSize) {
    let tempo = []
    let result = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (count == chunkSize) {
            
            for (let j = tempo.length - 1; j >= 0; j--) {
                result.push(tempo[j])
            }
            count = 0
            tempo = []
        }
            tempo.push(arr[i])
            count++
        
    }
    if (tempo.length != 0) {
        for (let j = tempo.length - 1; j >= 0; j--) {
            result.push(tempo[j])
        }
    }
    return result
}

console.log(reverseChunks([1, 2, 3], 1));
console.log(reverseChunks([1,2,3,4], 2));
// attendu : [2,1,4,3]

console.log(reverseChunks([1,2,3,4,5], 10))
