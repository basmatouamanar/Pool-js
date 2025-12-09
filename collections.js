function arrToStr(arr) {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += String(arr[i])
    }
    return result
}

function arrToSet(arr) {
    return new Set(arr)
}

// Array from tjrs for covert to array 

function setToArr(set) {
    return Array.from(set)
}

function setToStr(set) {
    const arr = Array.from(set)
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += String(arr[i])
    }
    return result
}

function strToArr(str) {
    return Array.from(str)
}

function strToSet(str) {
    const arr = Array.from(str)
    return new Set(arr)
}

function mapToObj(map) {
    let obj = {}
    for (const [key, value] of map) {
        obj[key] = value
    }
    return obj
}

// est de retourner un tableau contenant des paires \([clé,valeur]\)
// Object.values(obj) 
// Object.keys(obj)
// Object.entries(obj)
function objToArr(obj) {
    return Object.values(obj)
}

function objToMap(obj) {
    return new Map(Object.values(obj))
}

function arrToObj(arr) {
    return { ...arr };

}

function strToObj(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i]
    }
    return obj
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';
    return value.constructor ? value.constructor.name : typeof value;
}
