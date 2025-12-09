
function longWords(arr) {
    return arr.every(word => word.length >= 5 && typeof word === 'string')

}


function oneLongWord(arr) {
    return arr.some(word => word.length >= 10 && typeof word === 'string')
}


function noLongWords(arr) {
    return arr.every(word => typeof word === 'string' && word.length < 7);
}



console.log(longWords(['apple', 'banana', 'orange']));
// Expected: true

console.log(longWords(['apple', 'cat', 'orange']));
// Expected: false

console.log(oneLongWord(['apple', 'strawberry', 'orange']));
// Expected: true

console.log(oneLongWord(['apple', 'banana', 'orange']));
// Expected: false

console.log(noLongWords(['cat', 'dog', 'bat']));
// Expected: true

console.log(noLongWords(['apple', 'banana', 'cat']));
// Expected: false
