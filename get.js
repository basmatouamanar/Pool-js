
function get(src, path) {
    let key = path.split('.')
    let value = src
    for (let i = 0; i < key.length; i++) {
        if (value === undefined) {
            return undefined
        }
        value = value[key[i]]
    }
    return value
}



