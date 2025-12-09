function multiply(a, b) {
    let result = 0
    let signe = false
    if (a > 0 && b < 0) {
        signe = true
        b = 0 - b
    } else if (a < 0 && b > 0) {
        signe = true
        a = 0 - a
    }
    if (a < 0 && b < 0) {
        a = 0 - a
        b = 0 - b
    }
    if (a == 0 || b == 0) {
        return 0
    }
    for (let i = 0; i < b; i++) {
        result += a
    }
    return signe ? -result : result

}

function divide(a, b) {
    let result = 0
    let signe = false
    if (a == 0) {
        return 0
    }
    if (b == 0) {
        return new Error("Cannot divide by zero.")
    }
   if (a > 0 && b < 0) {
        signe = true
        b = 0 - b
    } else if (a < 0 && b > 0) {
        signe = true
        a = 0 - a
    }
    if (a < 0 && b < 0) {
        a = 0 - a
        b = 0 - b
    }
    while (a >= b) {
        a = a - b
        result++
    }
    return signe ? -result : result

}

function modulo(a, b) {
    if (b === 0) return new Error("Cannot divide by zero.")
    if (a === 0) return 0

    let negative = a < 0

    let A = a < 0 ? 0 - a : a
    let B = b < 0 ? 0 - b : b

    while (A >= B) {
        A = A - B
    }

    return negative ? 0 - A : A
}

console.log(modulo(3, -3))
