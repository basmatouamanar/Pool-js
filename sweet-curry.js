function mult2(a) {
    return function (b) {
        return a * b
    }
}

function add3(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

function sub4(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a-b-c-d
            }
        }
    }
}


console.log(mult2(2)(3));
// Expected: 6  (2 * 3)

console.log(mult2(5)(0));
// Expected: 0  (5 * 0)

// -------- add3 --------
console.log(add3(1)(2)(3));
// Expected: 6  (1 + 2 + 3)

console.log(add3(0)(0)(0));
// Expected: 0  (0 + 0 + 0)

// -------- sub4 --------
console.log(sub4(10)(2)(3)(1));
// Expected: 4  (10 - 2 - 3 - 1)

console.log(sub4(5)(1)(1)(1));
// Expected: 2  (5 - 1 - 1 - 1)
