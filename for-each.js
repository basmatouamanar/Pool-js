
function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
         fn(arr[i], i, arr)
    }
}


const fruits = ['apple', 'banana', 'orange'];

forEach(fruits, (item, index) => {
    console.log(`Fruit ${index}: ${item}`);
});
// Expected console output:
// Fruit 0: apple
// Fruit 1: banana
// Fruit 2: orange

let sum = 0;
const numbers = [1, 2, 3, 4, 5];

forEach(numbers, num => {
    sum += num;
});
console.log(sum);
// Expected: 15

const words = ['hello', 'world'];
let upperWords = [];
forEach(words, w => upperWords.push(w.toUpperCase()));
console.log(upperWords);
// Expected: ['HELLO', 'WORLD']
