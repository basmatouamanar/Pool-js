function first(a) {
    return a[0]
}

function last(a) {
    return a[a.length - 1]
}

function kiss(a) {
   let result = []
   result.push(a[a.length-1])
   result.push(a[0])
   return result
}

console.log(kiss("basma"))