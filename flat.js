function flat(s) {
    let slice = []
    for (let i = 0; i < s.length; i++) {
        if (Array.isArray(s[i])) {
            let nested = flat(s[i])
            for (let j = 0; j < nested.length; j++) {
                slice.push(nested[j])
            }
        }else {
            slice.push(s[i])
        }
    } 
    return slice
}