function palindromicChain(arr) {
      let slice = []
      const maxtemps = 100
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
             slice.push(0)
             continue
        }
        let temps = 0
        let found = false
        let nbr = arr[i]
        while (temps <= maxtemps) {
            if (isPalindrome(nbr)) {
                found = true
                break
            }
            nbr += reverce(nbr)
            temps++
        }
        if (!found) {
            slice.push(0)
        } else {

            slice.push(nbr)
        }

    }
    return slice
}

function reverce(nbr) {
    let rev = ''
    let str = String(nbr)
    for (let j = str.length - 1; j >= 0; j--) {
        rev += str[j]
    }
    return Number(rev)
}

function isPalindrome(num) {
    return num === reverce(num)
}


console.log(palindromicChain([87, 33, 123, 196, 7]));

/*
$ node main.js
[4884, 33, 444, 0]

*/