function gridWordsFinder(grid, words) {
    let hor = []
    let ver = []
    for (let i = 0; i < grid.length; i++) {
        let v = ''
        let wordh = grid[i]
        for (let j = 0; j < wordh.length; j++) {
            v += wordh[j]
        }
        hor.push(v)
    }
    for (let i = 0; i < grid[0].length; i++) {
        let wordv = ''
        for (let u = 0; u < grid.length; u++) {
            wordv += grid[u][i]
        }
        ver.push(wordv)

    }
    let result = []
    for (let w of words) {
        let foundv = false
        let foundh = false
        for (let v of ver) {
            if (existsInLine(v, w)) {
                foundv = true
                break
            }
        }

        for (let h of hor) {
            if (existsInLine(h, w)) {
                foundh = true
                break
            }
        }
        if (foundh || foundv) {
            result.push(w)
        }
    }
    return result


}

function existsInLine(line, word) {
    for (let i = 0; i <= line.length - word.length; i++) {
        if (line.slice(i, i + word.length) === word) return true
    }
    return false
}

// card => car






const grid = [
    ["c", "a", "t"],
    ["a", "a", "t"],
    ["r", "a", "t"],
    ["d", "o", "g"],
];

console.log(
    gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]),
);


console.log(gridWordsFinder(grid, []));

/*
$ node main.js
["cat", "dog", "rat", "car", "g"]
[]
$
*/