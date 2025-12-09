function triangle(b, a) {
    let str = ''
    let result = ''
    let count = 0
    let j = 0
    for (let i = 0; i < a; i++) {
        while (count >= j) {
            str += b
            j++
        }
        result += str
        if (i != a - 1) {
            result += '\n'
        }
        str = ''
        count++
        j = 0
    }
    return result
}

