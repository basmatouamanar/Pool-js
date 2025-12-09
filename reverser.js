function reverse(a) {
    if (typeof a === 'string') {
        let result = ''
        for (let i = a.length-1; i >= 0; i--) {
            result += a[i]
        }
        return result
    }
    if (typeof Array.isArray(a)) {
        let result = []
        for (let i = a.length-1; i >= 0; i--) {
            result.push(a[i])
        }
        return result
    }
}

