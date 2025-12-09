
function pick(obj, keys) {
    let result = {}
    if (typeof keys === 'string') {
        keys = Array.of(keys)
    }
    // let j = 0
    for (let i = 0; i < keys.length; i++) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {

                if (keys[i] == key) {
                    result[key] = obj[key]
                }
            }
        }
    }

    return result
}

function omit(obj, keys) {

    if (typeof keys === 'string') {
        keys = Array.of(keys)
    }
    // let j = 0
    for (let i = 0; i < keys.length; i++) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {

                if (keys[i] == key) {
                    delete obj[key]
                }
            }
        }
    }

    return obj
}

