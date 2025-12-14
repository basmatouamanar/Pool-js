function nestedArrayReverser(words) {
    if (words.length == 0) {
        return ""
    }
    let result = ''
    for (let i = words.length -1; i >= 0; i--) {
        let tempo = []
        let word = words[i]
        for (let j = word.length -1; j >= 0; j--) {
            tempo.push(word[j])
        }
        for (let word of tempo) {
            result += (result == '' ? '' : ' ') + word
        }
    }
    return result
}


console.log(
  nestedArrayReverser([
    ["hello", "world"],
    ["this", "is"],
    ["a", "test"],
  ]),
  console.log(nestedArrayReverser([])),
);

/*
$ node main.js
test a is this world hello
$
$
*/