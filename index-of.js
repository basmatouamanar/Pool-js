function indexOf(arr, value, index) {
    if (index === undefined) {
        index = 0
    }
    for (let i = index; i < arr.length; i++) {
        if (value == arr[i]) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value, index) {
   
   let start = (index !== undefined && index < arr.length) ? index : arr.length - 1;
    for (let i = start; i >= 0; i--) {
        if (value == arr[i]) {
            return i
        }
        
    }
    return -1
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true 
        }
    }
    return false 
}

/// indexOf
console.log(indexOf([4, 7, 9, 7], 9));        // expected: 2
console.log(indexOf([4, 7, 9, 7], 7, 2));     // expected: 3
console.log(indexOf([10, 20, 30], 15));       // expected: -1*/

// lastIndexOf
console.log(lastIndexOf([5, 8, 12, 8], 8));   // expected: 3
console.log(lastIndexOf([5, 8, 12, 8], 5, 2)); // expected: 0
console.log(lastIndexOf([1, 3, 5], 9));        // expected: -1

// includes
console.log(includes([11, 22, 33], 22));       // expected: true
console.log(includes([11, 22, 33], 44));       // expected: false
console.log(includes(["x", "y"], "z"));        // expected: false
