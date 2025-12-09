function words(a) {
    return a.split(' ')
}

function sentence(a) {
    return a.join(" ")
}

function yell(a) {
    return a.toUpperCase()
}

function whisper(a) {
    let s = "*" + a.toLowerCase() + "*"
    return s 
}

function capitalize(s) {
    let result = s[0].toUpperCase()
    for (let i = 1; i < s.length; i++) {
        result += s[i].toLowerCase()
    }
    return result 
}

console.log(capitalize("nanfJ2JJjbdz"))