function RNA(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            result += "G"
        }else if (str[i] == "G") {
            result += "C"
        }else if (str[i] == "T") {
            result += "A"
        }else if (str[i] == "A") {
            result += "U"
        } else {
            result += str[i]
        }
    }
    return result
}

function DNA(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            result += "G"
        }else if (str[i] == "G") {
            result += "C"
        }else if (str[i] == "A") {
            result += "T"
        }else if (str[i] == "U") {
            result += "A"
        } else {
            result += str[i]
        }
    }
    return result
}
